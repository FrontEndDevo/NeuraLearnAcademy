import axios from "axios";
import {
  setCoursesDependOnSubjectError,
  setPublicCoursesError,
  GETSUBJECTCOURSES_ERROR,
  UPDATEUSERDATA_ERROR,
} from "../slices/courses/courses-errors";

import {
  GETINSTRUCTORCOURSES_FAIL,
  GETINSTRUCTORCOURSES_SUCCESS,
  GETSUBJECTCOURSES_FAIL,
  GETSUBJECTCOURSES_SUCCESS,
  UPDATEUSERDATA_FAIL,
  UPDATEUSERDATA_SUCCESS,
  setCoursesDependOnSubject,
  setPublicCourses,
} from "../slices/courses/courses-slice";
import { setToastMessage } from "../slices/popups-slices/toasts-slice";

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

export async function getSubjectCourses(dispatch, access) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/api/courses/subjects/",
        config
      );
      dispatch(GETSUBJECTCOURSES_SUCCESS(res.data));
    } catch (err) {
      dispatch(GETSUBJECTCOURSES_FAIL());
      dispatch(GETSUBJECTCOURSES_ERROR(err.response.data));
    }
  }
}

export async function getInstructorCourses(dispatch, access) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/api/courses/mine/",
        config
      );
      dispatch(GETINSTRUCTORCOURSES_SUCCESS(res.data));
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Opps! We couldn't fetch you courses, Try to refresh page.",
          type: "error",
        })
      );
      dispatch(GETINSTRUCTORCOURSES_FAIL());
    }
  }
}

export async function updateUserData(
  dispatch,
  access,
  email,
  first_name,
  last_name,
  description,
  job
) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ email, first_name, last_name });

    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + "/auth/users/me/",
        body,
        config
      );
      dispatch(UPDATEUSERDATA_SUCCESS(res.data));
    } catch (err) {
      dispatch(UPDATEUSERDATA_FAIL());
      dispatch(UPDATEUSERDATA_ERROR(err.response.data));
    }
  }
}

export async function createCourse(
  dispatch,
  access,
  subject,
  title,
  overview,
  price,
  image
) {
  const available = false;
  if (access) {
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("title", title);
    formData.append("overview", overview);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("available", available);

    try {
      await axios.post(
        import.meta.env.VITE_API_URL + "/api/courses/create/",
        formData, // Send formData instead of JSON
        {
          headers: {
            Authorization: `JWT ${access}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
          },
        }
      );
      dispatch(
        setToastMessage({
          message: "The Course was created succefully.",
          type: "success",
        })
      );
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "oops! Something went wrong. Try again later.",
          type: "error",
        })
      );
    }
  }
}

export async function updateCourse(
  dispatch,
  access,
  slug,
  subject,
  title,
  overview,
  price,
  image
) {
  const available = false;
  if (access) {
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("title", title);
    formData.append("overview", overview);
    formData.append("price", price);
    image !== undefined && formData.append("image", image);
    formData.append("available", available);
    const config = {
      headers: {
        Authorization: `JWT ${access}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
      },
    };

    try {
      await axios.put(
        import.meta.env.VITE_API_URL + `/api/courses/${slug}/edit/`,
        formData, // Send formData instead of JSON
        config
      );
      dispatch(
        setToastMessage({
          message: "The Course was updated succefully.",
          type: "success",
        })
      );
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Unable to update the course content! Try again later.",
          type: "error",
        })
      );
    }
  }
}

export async function deleteCourse(dispatch, access, slug) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };

    try {
      await axios.delete(
        import.meta.env.VITE_API_URL + `/api/courses/${slug}/delete/`,
        config
      );
      dispatch(
        setToastMessage({
          message: "The Course was deleted succefully.",
          type: "success",
        })
      );
    } catch (err) {
      dispatch(
        setToastMessage({ message: err.response.data.detail, type: "error" })
      );
    }
  }
}
