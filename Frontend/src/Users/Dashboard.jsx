import React from "react";
import TransactionChart from "../components/Transactions/TransactionChart";
import TransactionList from "../components/Transactions/TransactionList";

const Dashboard = () => {
  return (
    <>
      <TransactionChart />
      <TransactionList />
    </>
  );
};

export default Dashboard;
