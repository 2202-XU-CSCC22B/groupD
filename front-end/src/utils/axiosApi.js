import axios from "axios";

export const getAllStaff = async () => {
  try {
    const res = await axios.get(process.env.retrieve_all_staff_api, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllMembers = async () => {
  try {
    const res = await axios.get(process.env.retrieve_members_api, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createNewStaff = async (data) => {
  try {
    const res = await axios.post(process.env.create_staff_api, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const sendEmail = async (data) => {
  try {
    const res = await axios.post(process.env.send_announcement_email_api, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

