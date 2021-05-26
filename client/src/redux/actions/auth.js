import { AUTH, LOGOUT } from "../actionTypes";
import * as api from "../../api/auth";
import { message } from "antd";
import { forceGetNewLocalStorageToken } from "../../utils/forceGetNewLocalStorageToken";

export const signin =
  (formData, router, setLocalStorageUser, oldToken, setToken, setResend) =>
  async (dispatch) => {
    try {
      console.log("signin");
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data, setLocalStorageUser });
      // dirty code to force sign in
      // setTimeout(() => {
      //   setToken(JSON.parse(localStorage.getItem("user"))?.token);
      // }, 2000);
      forceGetNewLocalStorageToken(oldToken, setToken);

      router.push("/");
      message.success("Login successfully!");
    } catch (error) {
      const code = error.response.status;
      const data = error.response.data;
      if (code === 401) {
        if (data.message === "Unactivated") {
          setResend(true);
          message.success("Please check your email to verify.");
        } else message.error("Wrong username or password.");
      } else if (code === 500) message.error("Something went wrong.");
    }
  };

export const signup = (formData, setResend) => async (dispatch) => {
  try {
    console.log("signup");
    await api.signUp(formData);
    // dispatch({ type: AUTH, data });
    setResend(true);
    message.success("Please check your email to verify.");
  } catch (error) {
    var errorMessage;
    switch (error.response.status) {
      case 409:
        errorMessage = "User already exists.";
        break;
      default:
        errorMessage = "Something went wrong.";
    }
    message.error(errorMessage);
  }
};

export const logout =
  (setLocalStorageUser, oldToken, setToken) => async (dispatch) => {
    dispatch({ type: LOGOUT, setLocalStorageUser });
    // setTimeout(() => {
    //   setToken(JSON.parse(localStorage.getItem("user"))?.token);
    //   // setToken(null);
    // }, 2000);
    forceGetNewLocalStorageToken(oldToken, setToken);
  };
