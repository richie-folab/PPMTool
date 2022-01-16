import axios from "axios";
import { GET_ERRORS } from "./types";
import { GET_PROJECTS } from "./types";

export const createProject = (project, browserHistory) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);

    browserHistory.go(-1);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProjects = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/project/all");
  console.log("res", res);
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};
