import Head from "next/head";
import MyContainer from "@modules/components/ui/MyContainer";
import AllMembersContent from "@modules/components/members/new/AllMembersContent";

const MemberPage = () => {
  return (
    <div>
      <Head>
        <title>Member</title>
      </Head>

      <MyContainer>
        <AllMembersContent />
      </MyContainer>
    </div>
  );
};

export default MemberPage;
