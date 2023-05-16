import React from "react";
import RegisterForm from "./register/RegisterForm";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import RegisterHeader from "./register/RegisterHeader";

const RegisterPage = () => {
  return (
    <div className=" bg-white">
      <ResponsiveAppBar />
      <div className=" bg-white container !max-w-5xl mx-auto px-4 py-8 lg:px-0">
        <div className=" flex flex-col md:flex-row gap-6 md:gap-12">
          <RegisterHeader />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
