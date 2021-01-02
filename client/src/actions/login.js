import * as api from "../api/index";
import * as types from "./types";

export const userLogin = (userdata) => async (dispatch) => {
    try {
      const { data } = await api.login(userdata);
      dispatch({
        type: types.USER_LOGIN,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };