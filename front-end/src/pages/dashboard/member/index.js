import Head from "next/head";
import MyContainer from "@modules/components/ui/MyContainer";
import AllMembersContent from "@modules/components/members/new/AllMembersContent";
import MyCustomAccordion from "@modules/components/members/new/MyCustomAccordion";

// data sample for accordion
const data = [
  {
    title: "Membership",
    startDate: "February 24, 2023",
    endDate: "March 24, 2023",
  },
  {
    title: "Student",
    startDate: "February 24, 2023",
    endDate: "March 24, 2023",
  },
  {
    title: "Ambot",
    startDate: "February 24, 2023",
    endDate: "March 24, 2023",
  },
];

const MemberPage = () => {
  return (
    <div>
      <Head>
        <title>Member</title>
      </Head>

      <div className="container pr-4 py-8 overflow-hidden">
        <section className="">
          <h1 className=" text-3xl font-bold xl:text-left xl:pl-4 text-gray-800">
            All members
          </h1>
        </section>
        <AllMembersContent />


      </div>
    </div>
  );
};

export default MemberPage;
