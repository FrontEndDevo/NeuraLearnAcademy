import axios from "axios";

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
      return res.data;
    } catch (err) {
      return err.response.data;
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
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }
}
