import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

export const createTodo = async (todo) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/todos`,
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: { todo },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to create todo");
  }
};

export const getTodo = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}/todos`,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch todo");
  }
};

export const updateTodo = async (id, todo, isCompleted) => {
  try {
    const response = await axios({
      method: "put",
      url: `${BASE_URL}/todos/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: {
        todo,
        isCompleted,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to update item");
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios({
      method: "delete",
      url: `${BASE_URL}/todos/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to delete item");
  }
};
