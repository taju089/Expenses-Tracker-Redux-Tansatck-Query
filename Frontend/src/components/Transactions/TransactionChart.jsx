import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getAllTransactionsApi } from "../../services/transactions/transactionService";
import { useQuery } from "@tanstack/react-query";

ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionChart = () => {
  const {
    data: transactions,
    isError,
    isLoading,
    isFetched,
    error,
    refetch,
  } = useQuery({
    queryFn: getAllTransactionsApi,
    queryKey: ["list-transactions"],
  });

  console.log(transactions);

  // ! Calculate total income and expenses
  const total = transactions?.data?.transactions.reduce(
    (acc, transaction) => {
      if (transaction?.type == "income") {
        acc.income += transaction?.amount;
      } else if (transaction?.type == "expense") {
        acc.expense += transaction?.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 },
  );

  // ! DataStructure of chart
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Transactions",
        data: [total?.income || 0, total?.expense || 0],
        backgroundColor: ["#36a2ab", "#ff6384"],
        borderColor: ["#36a2ab", "#ff6384"],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        padding: 25,
        boxWidth: 12,
        font: {
          size: 14,
        },
      },
    },
    title: {
      display: true,
      text: "income vs Expense ",
      font: {
        size: 18,
        weight: "bold",
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
    cutout: "70%",
  };
  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Overview
      </h1>
      <div style={{ height: "350px" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default TransactionChart;
