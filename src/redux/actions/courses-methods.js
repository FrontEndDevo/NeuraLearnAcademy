import axios from "axios";
import {
  setCoursesDependOnSubjectError,
  setPublicCoursesError,
  GETSUBJECTCOURSES_ERROR,
  UPDATEUSERDATA_ERROR,
  GETTRANSCRIPTSECTION_ERROR,
  SUMMARIZE_ERROR,
  ENROLLCOURSE_ERROR,
  GETTRANSCRIPTVIDEO_ERROR,
  QUESTIONGENERATION_ERROR,
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
  GETTRANSCRIPTSECTION_SUCCESS,
  GETTRANSCRIPTSECTION_FAIL,
  SUMMARIZE_SUCCESS,
  SUMMARIZE_FAIL,
  GETUSERCOURSES_SUCCESS,
  GETUSERCOURSES_FAIL,
  ENROLLCOURSE_SUCCESS,
  ENROLLCOURSE_FAIL,
  GETTRANSCRIPTVIDEO_SUCCESS,
  GETTRANSCRIPTVIDEO_FAIL,
  QUESTIONGENERATION_SUCCESS,
  QUESTIONGENERATION_FAIL,
  GETUSERSECTIONS_SUCCESS,
  GETUSERSECTIONS_FAIL,
  GETUSERCONTENTS_SUCCESS,
  GETUSERCONTENTS_FAIL,
  GETCOURSEDETAILES_SUCCESS,
  GETCOURSEDETAILES_FAIL,
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
// Update the instructor course content.
export async function getCourseDetaile(dispatch, access, slug) {
  if (access) {
    const config = {
      headers: {
        Authorization: `JWT ${access}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
      },
    };

    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + `/api/courses/${slug}/detail/`,
        config
      );
      console.log(res.data);
      dispatch(GETCOURSEDETAILES_SUCCESS(res.data));
    } catch (err) {
      console.log(err);
      dispatch(GETCOURSEDETAILES_FAIL());
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
export async function getUserSections(dispatch, access, slug) {
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
        import.meta.env.VITE_API_URL + `/api/students/course/${slug}/modules/`,
        config
      );
      dispatch(GETUSERSECTIONS_SUCCESS(res.data.modules));
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Can't load your sections, Please try again.",
          type: "error",
        })
      );
      dispatch(GETUSERSECTIONS_FAIL());
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
      dispatch(
        setToastMessage({
          message: "Updated the section succefully.",
          type: "success",
        })
      );
      dispatch(UPDATESECTION_SUCCESS(res.data));
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Couldn't update the section, Please try again.",
          type: "error",
        })
      );
      dispatch(UPDATESECTION_FAIL());
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
      dispatch(
        setToastMessage({
          message: "The content was created succefully.",
          type: "success",
        })
      );
      dispatch(CREATECONTENT_SUCCESS(res.data));
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Unable to create the content! Try again later.",
          type: "error",
        })
      );
      dispatch(CREATECONTENT_FAIL());
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
        type: "GETCONTENTS_SUCCESS",
        payload: { content: res.data.contents, slug },
      });
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Can't load the contents! Please Try again later.",
          type: "error",
        })
      );
      dispatch(GETCONTENTS_FAIL());
    }
  }
}
export async function getUserContents(dispatch, access, slug) {
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
        import.meta.env.VITE_API_URL + `/api/students/module/${slug}/contents/`,
        config
      );
      dispatch({
        type: GETUSERCONTENTS_SUCCESS,
        payload: { content: res.data.contents, slug },
      });
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Can't load the contents! Please Try again later.",
          type: "error",
        })
      );
      dispatch(GETUSERCONTENTS_FAIL());
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
      dispatch(
        setToastMessage({
          message: "The lecture was deleted succefully.",
          type: "success",
        })
      );
      dispatch(DELETELECTURE_SUCCESS(res.data));
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Can't delete the lecture! Try again later.",
          type: "error",
        })
      );
      dispatch(DELETELECTURE_FAIL());
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

      dispatch(
        setToastMessage({
          message: "The lecture was updated succefully.",
          type: "success",
        })
      );
      dispatch(UPDATELECTURE_SUCCESS(res.data));
    } catch (err) {
      dispatch(
        setToastMessage({
          message: "Can't update the lecture! Try again later.",
          type: "error",
        })
      );
      dispatch(UPDATELECTURE_FAIL());
    }
  }
}
export async function GetUserCourses(dispatch, access) {
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
        import.meta.env.VITE_API_URL + `/api/students/mylearning/`,
        config
      );
      dispatch(GETUSERCOURSES_SUCCESS(res.data));
      console.log(res);
    } catch (err) {
      dispatch(GETUSERCOURSES_FAIL());
    }
  }
}

export async function enrollCourse(dispatch, access, slug) {
  if (access) {
    console.log(access);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + `/api/students/courses/${slug}/enroll/`,
        {},
        config
      );
      dispatch(ENROLLCOURSE_SUCCESS(res.data.enrolled));
    } catch (err) {
      dispatch(ENROLLCOURSE_FAIL());
      dispatch(ENROLLCOURSE_ERROR(err.response.data));
    }
  }
}
export async function getTranscriptSection(dispatch, access, slug) {
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
        import.meta.env.VITE_API_URL +
          `/api/models/module/${slug}/transcripts/`,
        config
      );
      dispatch(GETTRANSCRIPTSECTION_SUCCESS(res.data[0].transcript));
      console.log(res);
    } catch (err) {
      dispatch(GETTRANSCRIPTSECTION_FAIL());
      dispatch(GETTRANSCRIPTSECTION_ERROR(err.response.data));
      console.log(err);
    }
  }
}
export async function summarize(dispatch, access, text) {
  if (access) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${access}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({
      text,
    });
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + `/api/models/summarize/`,
        body,
        config
      );
      dispatch(SUMMARIZE_SUCCESS(res.data.summary));
      console.log(res);
    } catch (err) {
      dispatch(SUMMARIZE_FAIL());
      dispatch(SUMMARIZE_ERROR(err.response.data));
      console.log(err);
    }
  }
}
export async function getTranscriptVideo(dispatch, access, id) {
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
        import.meta.env.VITE_API_URL + `/api/models/video/${id}/transcript/`,
        config
      );
      dispatch(GETTRANSCRIPTVIDEO_SUCCESS(res.data));
      console.log(res);
    } catch (err) {
      dispatch(GETTRANSCRIPTVIDEO_FAIL());
      dispatch(GETTRANSCRIPTVIDEO_ERROR(err.response.data));
      console.log(err);
    }
  }
}
export async function questionGeneration(dispatch, access) {
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
        import.meta.env.VITE_API_URL + `/api/models/generate-questions/`,
        config
      );
      dispatch(QUESTIONGENERATION_SUCCESS(res.data));
      console.log(res);
    } catch (err) {
      dispatch(QUESTIONGENERATION_FAIL());
      dispatch(QUESTIONGENERATION_ERROR(err.response.data));
      console.log(err);
    }
  }
}
