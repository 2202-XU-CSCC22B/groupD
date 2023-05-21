module.exports = {
  reactStrictMode: true,
  env: {
    companyName: "Unscathed Fitness Gym",
    duplicateEmailErrorMessage: "already exists!",

    // // create_members_api : "http://localhost:8080/member/new",
    // retrieve_members_api : "http://localhost:8080/member/all",
    // retrieve_unverified_api: "http://localhost:8080/member/unverified",
    // update_member_api: "http://localhost:8080/member/update/{id}",
    // validate_unverified_api: "http://localhost:8080/member/validate/{email}",
    // delete_member_api: "http://localhost:8080/member/delete/{email}",
    // count_members_api:
    // "http://localhost:8080/member/count",

    // create_staff_api: "localhost:8080/api/v1/staff/new",
    // update_staff_api: "localhost:8080/api/v1/staff/update/{id}",
    // retrieve_all_staff_api: "localhost:8080/api/v1/staff/all",
    // retrieve_staff_api: "localhost:8080/api/v1/staff/{id}",

    create_members_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/member/new",
    retrieve_members_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/member/all",
    retrieve_unverified_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/member/unverified",
    update_member_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com/:8080member/update/{email}",
    validate_unverified_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/member/validate/{email}",
    delete_member_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/member/delete/{email}",
    count_members_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/member/count",

    create_staff_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/api/v1/staff/new",
    update_staff_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/api/v1/staff/update/{id}",
    retrieve_all_staff_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/api/v1/staff/all",
    retrieve_staff_api:
      "http://ec2-54-253-215-31.ap-southeast-2.compute.amazonaws.com:8080/api/v1/staff/{id}",
  },
};
