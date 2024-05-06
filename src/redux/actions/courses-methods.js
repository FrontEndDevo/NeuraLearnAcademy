import axios from "axios";
import { setPublicCourses } from "../slices/courses/courses-slice";
import { setPublicCoursesError } from "../slices/courses/courses-errors";

export const public_courses = async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/public/courses/`);
    dispatch(setPublicCourses(res.data.results));
  } catch (err) {
    dispatch(setPublicCoursesError());
  }
};
