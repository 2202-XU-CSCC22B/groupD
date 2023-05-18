import Section from "./Section";
import MyContainer from "@modules/components/ui/MyContainer";
import Link from "next/link";
import homeBG from "../../../public/images/gymbg1.png";

const HomeSection = ({ ...props }) => {
  return (
    <Section
      {...props}
      className="flex items-center md:mt-[87px]"
      style={{
        backgroundImage: `url(${homeBG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MyContainer className="text-center relative -translate-y-12">
        <div className=" flex min-h-screen justify-center items-center">
          {/* backdrop */}
          <div
            aria-hidden="true"
            className="absolute translate-y-12 inset-y-0 inset-x-0 w-72 rounded-full rotate-90 bg-gradient-to-b from-gray-700  to-blue-950 blur-3xl mx-auto opacity-80"
          ></div>

          {/* main */}
          <div className="relative z-10 px-4 flex flex-col items-center gap-8 lg:gap-12">
            {/* image */}
            <div className=" w-[200px] h-[200px] rounded-full">
              <img
                className=" rounded-full shadow-lg border-4 border-black"
                src="/images/logo.png"
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* title and subtitle */}
            <div className=" space-y-4 max-w-2xl">
              <div className="text-3xl sm:text-5xl md:text-6xl font-semibold text-slate-50 drop-shadow-lg text-center  !leading-none ">
                Welcome to Unscathed Fitness Gym!
              </div>
              <p className=" text-lg text-slate-300 drop-shadow-lg text-center md:text-2xl font-normal">
                We are committed to helping you achieve your fitness goals.
              </p>
            </div>

            {/* CTA */}
            <Link href="/account/register" passHref>
              <button class="rounded-full tracking-wider font-medium bg-gray-900 hover:scale-95 hover:bg-gray-800 transition-all duration-300 ease-in-out text-slate-50 drop-shadow-lg text-xl py-4 px-8">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </MyContainer>
    </Section>
  );
};

export default HomeSection;
