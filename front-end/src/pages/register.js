import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import RegisterHeader from "../components/register/RegisterHeader";

const RegisterPage = () => {
  return (
    <section className=" bg-white">
      <ResponsiveAppBar />
      <main className=" bg-white container !max-w-6xl mx-auto px-4 py-8 lg:px-0">
        <div className=" flex flex-col md:flex-row gap-6 md:gap-12">
          <RegisterHeader />
          <RegisterForm />
        </div>
      </main>
    </section>
  );
};

export default RegisterPage;
