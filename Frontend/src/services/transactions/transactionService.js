import api from "../auth/client";

// ! Add transaction
export const addTransactionApi = async ({
  amount,
  description,
  category,
  date,
  type,
}) => {
  const result = await api.post(`/transaction/create`, {
    type,
    amount,
    description,
    date,
    category,
  });
  return result;
};

// ! Get transaction list
export const getAllTransactionsApi = async ({
  startDate,
  endDate,
  category,
  type,
} = {}) => {
  const params = {};

  if (startDate) {
    params.startDate = startDate;
  }

  if (endDate) {
    params.endDate = endDate;
  }

  if (category) {
    params.category = category;
  }

  if (type) {
    params.type = type;
  }

  const result = await api.get("/transaction/list", {
    params,
  });

  return result;
};

// ! update transaction
export const updateTransactionApi = async ({
  amount,
  description,
  date,
  category,
  type,
  id,
}) => {
  const payload = {};

  if (amount !== undefined) {
    payload.amount = amount;
  }

  if (description !== undefined) {
    payload.description = description;
  }

  if (date !== undefined) {
    payload.date = date;
  }

  if (category !== undefined) {
    payload.category = category;
  }

  if (type !== undefined) {
    payload.type = type;
  }

  const result = await api.put(`/transaction/update/${id}`, payload);

  return result.data;
};

// ! delete the transaction
export const deleteTransactionApi = async (id) => {
  const result = await api.delete(`/transaction/delete/${id}`);
  return result;
};
