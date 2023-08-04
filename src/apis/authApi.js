import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

export const signup = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/auth/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    return response.data;
  } catch (error) {
    // console.log(error);
    throw new Error("Failed to create todo");
  }
};

export const signin = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/auth/signin`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    return response.data;
  } catch (error) {
    // console.log(error);
    throw new Error("Failed to create todo");
  }
};
