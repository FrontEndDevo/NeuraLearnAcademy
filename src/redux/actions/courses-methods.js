import axios from "axios";
import {
  setCoursesDependOnSubjectError,
  setPublicCoursesError,
  GETSUBJECTCOURSES_ERROR,
  UPDATEUSERDATA_ERROR,
  UPDATESECTION_ERROR,
  CREATECONTENT_ERROR,
  GETCONTENTS_ERROR,
  DELETELECTURE_ERROR,
  UPDATELECTURE_ERROR,
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
  CREATESECTION_FAIL,
  GETSECTIONS_SUCCESS,
  GETSECTIONS_FAIL,
  UPDATESECTION_SUCCESS,
  UPDATESECTION_FAIL,
  CREATECONTENT_SUCCESS,
  CREATECONTENT_FAIL,
  GETCONTENTS_SUCCESS,
  GETCONTENTS_FAIL,
  DELETELECTURE_SUCCESS,
  DELETELECTURE_FAIL,
  UPDATELECTURE_SUCCESS,
  UPDATELECTURE_FAIL,
} from "../slices/courses/courses-slice";
import { setToastMessage } from "../slices/popups-slices/toasts-slice";

// Fetch the public courses.
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

// Fetch the courses depend on the category.
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

// Fetch Neura Learn Academy categories.
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

// Fetch the instructor courses.
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

// Create a new instructor course.
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

// Update the instructor course content.
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

// Delete the instructor course.
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
      await axios.post(
        import.meta.env.VITE_API_URL + `/api/courses/${slug}/module/create/`,
        body,
        config
      );
      dispatch(
        setToastMessage({
          message: "Create the section succefully.",
          type: "success",
        })
      );
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Couldn't create the section, Please try again.",
          type: "error",
        })
      );
      dispatch(CREATESECTION_FAIL());
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
      await axios.delete(
        import.meta.env.VITE_API_URL + `/api/courses/module/${slug}/delete/`,
        config
      );
      dispatch(
        setToastMessage({
          message: "Delete the section succefully.",
          type: "success",
        })
      );
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Couldn't delete the section, Please try again.",
          type: "error",
        })
      );
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
      dispatch(
        setToastMessage({
          message: "Can't load your sections, Please try again.",
          type: "error",
        })
      );
      dispatch(GETSECTIONS_FAIL());
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
export async function deleteLecture(dispatch, access, api) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.delete(api, config);
      dispatch(DELETELECTURE_SUCCESS(res.data));
    } catch (err) {
      dispatch(DELETELECTURE_FAIL());
      dispatch(DELETELECTURE_ERROR(err.response.data));
    }
  }
}
export async function updateLecture(dispatch, access, formData, api) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.put(api, formData, config);
      dispatch(UPDATELECTURE_SUCCESS(res.data));
    } catch (err) {
      dispatch(UPDATELECTURE_FAIL());
      dispatch(UPDATELECTURE_ERROR(err.response.data));
    }
  }
}
