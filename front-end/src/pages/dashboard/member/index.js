import Head from "next/head";
import AllMembersContent from "@modules/components/members/new/AllMembersContent";

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
