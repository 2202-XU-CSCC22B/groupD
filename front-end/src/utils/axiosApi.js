import axios from "axios";

export const getAllStaff = async () => {
  try {
    const res = axios.get(process.env.retrieve_staff_api, {
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
    const res = axios.get(process.env.retrieve_members_api, {
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
