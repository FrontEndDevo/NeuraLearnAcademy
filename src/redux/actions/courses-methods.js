import axios from "axios";
import {
  setCoursesDependOnSubjectError,
  setPublicCoursesError,
  CREATECOURSE_ERROR,
  DELETECOURSE_ERROR,
  DETAILCOURSE_ERROR,
  GETINSTRUCTORCOURSES_ERROR,
  GETSUBJECTCOURSES_ERROR,
  UPDATECOURSE_ERROR,
  UPDATEUSERDATA_ERROR,
} from "../slices/courses/courses-errors";

import {
  CREATECOURSE_FAIL,
  CREATECOURSE_SUCCESS,
  GETINSTRUCTORCOURSES_FAIL,
  GETINSTRUCTORCOURSES_SUCCESS,
  GETSUBJECTCOURSES_FAIL,
  GETSUBJECTCOURSES_SUCCESS,
  UPDATECOURSE_FAIL,
  UPDATECOURSE_SUCCESS,
  UPDATEUSERDATA_FAIL,
  UPDATEUSERDATA_SUCCESS,
  DETAILCOURSE_FAIL,
  DETAILCOURSE_SUCCESS,
  setCoursesDependOnSubject,
  setPublicCourses,
} from "../slices/courses/courses-slice";

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
      dispatch(GETINSTRUCTORCOURSES_SUCCESS(res.data.results));
    } catch (err) {
      dispatch(GETINSTRUCTORCOURSES_FAIL());
      dispatch(GETINSTRUCTORCOURSES_ERROR(err.response.data));
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
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };
    // send image as form data not json
    const body = JSON.stringify({
      subject,
      title,
      overview,
      price,
      image,
      available,
    });

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/api/courses/create/",
        body,
        config
      );
      dispatch(CREATECOURSE_SUCCESS(res.data));
    } catch (err) {
      dispatch(CREATECOURSE_FAIL());
      dispatch(CREATECOURSE_ERROR(err.response.data));
    }
  }
}

export async function updateCourse(
  dispatch,
  access,
  subject,
  title,
  overview,
  price,
  image,
  slug
) {
  const available = false;
  if (access) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };
    // send image as form data not json
    const body = JSON.stringify({
      subject,
      title,
      overview,
      price,
      image,
      available,
    });

    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + `/api/courses/${slug}/edit/`,
        body,
        config
      );
      dispatch(UPDATECOURSE_SUCCESS(res.data));
    } catch (err) {
      dispatch(UPDATECOURSE_FAIL());
      dispatch(UPDATECOURSE_ERROR(err.response.data));
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
    } catch (err) {
      dispatch(DELETECOURSE_ERROR(err.response.data));
    }
  }
}

export async function detailCourse(dispatch, access, slug) {
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
        import.meta.env.VITE_API_URL + `/api/courses/${slug}/detail/`,
        config
      );
      dispatch(DETAILCOURSE_SUCCESS(res.data));
    } catch (err) {
      dispatch(DETAILCOURSE_FAIL());
      dispatch(DETAILCOURSE_ERROR(err.response.data));
    }
  }
}
