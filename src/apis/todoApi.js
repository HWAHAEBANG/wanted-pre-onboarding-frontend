import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

export const createTodo = async (todo) => {
  console.log("검문소13 : 투두생성 통신");
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/todos`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: { todo },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create todo");
  }
};

export const getTodo = async () => {
  console.log("검문소14 : 투두팻치 통신");
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}/todos`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch todo");
  }
};

export const updateTodo = async (id, todo, isCompleted) => {
  console.log("검문소15 : 투두업데이트 통신");
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
    throw new Error("Failed to update item");
  }
};

export const deleteTodo = async (id) => {
  console.log("검문소16 : 투두삭제 통신");
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
    throw new Error("Failed to delete item");
  }
};
