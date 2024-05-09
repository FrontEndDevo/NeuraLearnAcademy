import axios from "axios";
import {
  setCoursesDependOnSubject,
  setPublicCourses,
} from "../slices/courses/courses-slice";
import {
  setCoursesDependOnSubjectError,
  setPublicCoursesError,
} from "../slices/courses/courses-errors";

export const public_courses = async (dispatch) => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/api/public/courses/"
    );
    dispatch(setPublicCourses(res.data));
  } catch (err) {
    dispatch(setPublicCoursesError());
  }
};

export const public_course_with_subject = async (dispatch, subject) => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/api/public/subject/" + subject
    );
    dispatch(setCoursesDependOnSubject(res.data));
  } catch (err) {
    dispatch(setCoursesDependOnSubjectError());
  }
};
