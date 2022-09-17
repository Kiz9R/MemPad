import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, navigateTo) => async (dispatch) => {
  try {
    navigateTo("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, navigateTo) => async (dispatch) => {
  try {
    navigateTo("/");
  } catch (error) {
    console.log(error);
  }
};
