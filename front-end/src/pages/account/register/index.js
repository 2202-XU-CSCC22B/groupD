import RegisterForm from "@modules/components/register/RegisterForm";
import RegisterHeader from "@modules/components/register/RegisterHeader";
import React from "react";

const RegisterPage = () => {
  return (
    <main className=" bg-white  pt-[87px] ">
      <div className=" flex  container !max-w-6xl mx-auto px-4 lg:px-0 flex-col md:flex-row gap-6 md:gap-12 py-8 min-h-screen">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
