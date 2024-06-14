import axios from "axios";
import {
  setCoursesDependOnSubjectError,
  setPublicCoursesError,
  CREATECOURSE_ERROR,
  DELETECOURSE_ERROR,
  GETINSTRUCTORCOURSES_ERROR,
  GETSUBJECTCOURSES_ERROR,
  UPDATECOURSE_ERROR,
  UPDATEUSERDATA_ERROR,
  CREATESECTION_ERROR,
  DELETESECTION_ERROR,
  GETSECTIONS_ERROR,
  UPDATESECTION_ERROR,
  CREATECONTENT_ERROR,
  GETCONTENTS_ERROR,
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
  setCoursesDependOnSubject,
  setPublicCourses,
  CREATESECTION_SUCCESS,
  CREATESECTION_FAIL,
  GETSECTIONS_SUCCESS,
  GETSECTIONS_FAIL,
  UPDATESECTION_SUCCESS,
  UPDATESECTION_FAIL,
  CREATECONTENT_SUCCESS,
  CREATECONTENT_FAIL,
  GETCONTENTS_SUCCESS,
  GETCONTENTS_FAIL,
} from "../slices/courses/courses-slice";

export const public_courses = async (dispatch) => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/api/public/courses/"
    );
    console.log(res);
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
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("title", title);
    formData.append("overview", overview);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("available", available);

    try {
      const res = await axios.post(
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
  slug,
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
export async function createSection(
  dispatch,
  access,
  title,
  description,
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
    const body = JSON.stringify({
      title,
      description,
    });
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + `/api/courses/${slug}/module/create/`,
        body,
        config
      );
      dispatch(CREATESECTION_SUCCESS(res.data));
    } catch (err) {
      dispatch(CREATESECTION_FAIL());
      dispatch(CREATESECTION_ERROR(err.response.data));
    }
  }
}
export async function deleteSection(dispatch, access, slug) {
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
        import.meta.env.VITE_API_URL + `/api/courses/module/${slug}/delete/`,
        config
      );
    } catch (err) {
      dispatch(DELETESECTION_ERROR(err.response.data));
    }
  }
}
export async function getSections(dispatch, access, slug) {
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
        import.meta.env.VITE_API_URL + `/api/courses/${slug}/modules/`,
        config
      );
      dispatch(GETSECTIONS_SUCCESS(res.data.modules));
    } catch (err) {
      dispatch(GETSECTIONS_FAIL());
      dispatch(GETSECTIONS_ERROR(err.response.data));
    }
  }
}
export async function updateSections(
  dispatch,
  access,
  title,
  description,
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
    const body = JSON.stringify({
      title,
      description,
    });
    console.log(body);
    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + `/api/courses/module/${slug}/update/`,
        body,
        config
      );
      dispatch(UPDATESECTION_SUCCESS(res.data));
    } catch (err) {
      dispatch(UPDATESECTION_FAIL());
      dispatch(UPDATESECTION_ERROR(err.response.data));
    }
  }
}
export async function createContent(dispatch, access, body, slug, type) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL +
          `/api/courses/module/${slug}/content/${type}/create/`, // Construct the URL
        body,
        config
      );
      dispatch(CREATECONTENT_SUCCESS(res.data));
    } catch (err) {
      dispatch(CREATECONTENT_FAIL());
      dispatch(CREATECONTENT_ERROR(err.response.data));
    }
  }
}
export async function getContents(dispatch, access, slug) {
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
        import.meta.env.VITE_API_URL + `/api/courses/module/${slug}/contents/`,
        config
      );
      dispatch({
        type: GETCONTENTS_SUCCESS,
        payload: { content: res.data.contents, slug },
      });
    } catch (err) {
      dispatch(GETCONTENTS_FAIL());
      dispatch(GETCONTENTS_ERROR(err.response.data));
    }
  }
}
