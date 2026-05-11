import api from "../auth/client";

// ! Add Category
export const addCategoryApi = async ({ name, type }) => {
  const result = await api.post(`/category/create`, {
    name,
    type,
  });
  return result;
};

// ! Get Category list
export const getCategoryApi = async () => {
  const result = await api.get(`/category/list`);
  return result;
};

// ! update category
export const updateCategoryApi = async ({ id, name, type }) => {
  const payload = {};

  if (name?.trim()) {
    payload.name = name;
  }

  if (type?.trim()) {
    payload.type = type;
  }

  const result = await api.put(`/category/update/${id}`, payload);

  return result.data;
};

// ! delete the category
export const deleteCategoryApi = async (id) => {
  const result = await api.delete(`/category/delete/${id}`, {});
  return result;
};
