import axios from "axios";

export const getAllStaff = async () => {
  try {
    const res = await axios.get(process.env.retrieve_staff_api, {
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
    alert("response create new staff");
    return res;
  } catch (error) {
    alert("rasdasdasdas");

    return error;
  }
};
