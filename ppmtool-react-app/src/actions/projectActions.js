import axios from "axios";
import { GET_ERRORS } from "./types";
import "../components/Dashboard";

export const createProject = (project, browserHistory) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);

    browserHistory.push("/");

    //browserHistory.go(-1);

    console.log("Why are you not redirecting?");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
