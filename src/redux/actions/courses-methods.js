import axios from "axios";
import {
  setCoursesDependOnSubjectError,
  setPublicCoursesError,
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
import {
  CREATECOURSE_ERROR,
  DELETECOURSE_ERROR,
  DETAILCOURSE_ERROR,
  GETINSTRUCTORCOURSES_ERROR,
  GETSUBJECTCOURSES_ERROR,
  UPDATECOURSE_ERROR,
  UPDATEUSERDATA_ERROR,
} from "../slices/courses/errors";

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
      console.log(res.data);
      dispatch(GETSUBJECTCOURSES_SUCCESS(res.data));
    } catch (err) {
      console.log(err);
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
<<<<<<< HEAD
      dispatch(GETINSTRUCTORCOURSES_SUCCESS(res.data.results));
=======
      dispatch(GETINSTRUCTORCOURSES_SUCCESS(res.data));
>>>>>>> 02a657fe6b611e532a0137ab2d950472ff06a799
    } catch (err) {
      dispatch(GETINSTRUCTORCOURSES_FAIL());
      dispatch(GETINSTRUCTORCOURSES_ERROR(err.response.data));
    }
  }
}

export async function updateUserData(
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
      UPDATEUSERDATA_SUCCESS(res.data);
    } catch (err) {
      UPDATEUSERDATA_FAIL();
      UPDATEUSERDATA_ERROR(err.response.data);
    }
  }
}

export async function createCourse(
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
      CREATECOURSE_SUCCESS(res.data);
    } catch (err) {
      CREATECOURSE_FAIL();
      CREATECOURSE_ERROR(err.response.data);
    }
  }
}

export async function updateCourse(
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
      UPDATECOURSE_SUCCESS(res.data);
    } catch (err) {
      UPDATECOURSE_FAIL();
      UPDATECOURSE_ERROR(err.response.data);
    }
  }
}
export async function deleteCourse(
  access,
  slug
) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.delete(
        import.meta.env.VITE_API_URL +
          `/api/courses/${slug}/delete/`,
        config
      );
    } catch (err) {
      DELETECOURSE_ERROR(err.response.data);
    }
  }
}
export async function detailCourse(
  access,
  slug
) {
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
      DETAILCOURSE_SUCCESS(res.data);
    } catch (err) {
      DETAILCOURSE_FAIL();
      DETAILCOURSE_ERROR(err.response.data);
    }
  }
}
