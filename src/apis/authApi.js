import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

export const signup = async (data) => {
  console.log("검문소11 : 회원가입 통신");
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
    console.log(error);
    throw new Error("Failed to create todo");
  }
};

export const signin = async (data) => {
  console.log("검문소12 : 로그인 통신");
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
    console.log(error);
    throw new Error("Failed to create todo");
  }
};
