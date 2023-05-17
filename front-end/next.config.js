


module.exports = {
  reactStrictMode: true,
  env: {
      companyName: 'Unscathed Fitness Gym',
      duplicateEmailErrorMessage: "already exists!",


      create_members_api : "http://localhost:8080/member/new",
      retrieve_members_api : "http://localhost:8080/member/all",
      retrieve_unverified_api: "http://localhost:8080/member/unverified",
      update_member_api: "http://localhost:8080/member/update/{email}",
      validate_unverified_api: "http://localhost:8080/member/validate/{email}",
      delete_member_api: "http://localhost:8080/member/delete/{email}"
  }
};
