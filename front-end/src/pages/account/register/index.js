import RegisterForm from "@modules/components/register/RegisterForm";
import RegisterHeader from "@modules/components/register/RegisterHeader";
import React from "react";

const RegisterPage = () => {
  return (
    <main className=" bg-white container !max-w-6xl mx-auto px-4 py-8 lg:px-0">
      <div className=" flex flex-col md:flex-row gap-6 md:gap-12">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
