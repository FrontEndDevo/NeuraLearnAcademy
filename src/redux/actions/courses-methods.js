import axios from "axios";
import { setPublicCourses } from "../slices/courses/courses-slice";
import { setPublicCoursesError } from "../slices/courses/courses-errors";

export const public_courses = async (dispatch) => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/api/public/courses/"
    );
    dispatch(setPublicCourses(res.data.results));
  } catch (err) {
    dispatch(setPublicCoursesError());
  }
};
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
} from "../slices/courses/courses-slice";
import {
  CREATECOURSE_ERROR,
  GETINSTRUCTORCOURSES_ERROR,
  GETSUBJECTCOURSES_ERROR,
  UPDATECOURSE_ERROR,
  UPDATEUSERDATA_ERROR,
} from "../slices/courses/errors";

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
        `http://localhost:8000/api/courses/subjects/`,
        config
      );
      dispatch(GETSUBJECTCOURSES_SUCCESS(res.data));
    } catch (err) {
      dispatch(GETSUBJECTCOURSES_FAIL());
      dispatch(GETSUBJECTCOURSES_ERROR(err.response.data));
    }
  }
}
export async function getInstructorCourses(
  dispatch,
  access,
  api = `http://localhost:8000/api/courses/mine/?limit=x&offset=x`
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
      const res = await axios.get(api, config);
      console.log(res);
      dispatch(GETINSTRUCTORCOURSES_SUCCESS(res.data));
    } catch (err) {
      console.log(err);
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
  jop
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
    console.log(body);

    try {
      const res = await axios.put(
        `http://localhost:8000/auth/users/me/`,
        body,
        config
      );
      console.log(res);
      UPDATEUSERDATA_SUCCESS(res.data);
    } catch (err) {
      console.log(err);
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
      // image,
      available,
    });
    console.log(body);

    try {
      const res = await axios.post(
        `http://localhost:8000/api/courses/create/`,
        body,
        config
      );
      console.log(res);
      CREATECOURSE_SUCCESS(res.data);
    } catch (err) {
      console.log(err);
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
      // image,
      available,
    });
    console.log(body);

    try {
      const res = await axios.put(
        `http://localhost:8000/api/courses/${slug}/edit/`,
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
