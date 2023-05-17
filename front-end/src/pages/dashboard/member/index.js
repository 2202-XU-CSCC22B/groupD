import Head from "next/head";
import MembersContent from "@modules/components/members/MembersContent";
import MyContainer from "@modules/components/ui/MyContainer";

const MemberPage = () => {
  return (
    <div>
      <Head>
        <title>Member</title>
      </Head>

      <MyContainer>
        <MembersContent />
      </MyContainer>
    </div>
  );
};

export default MemberPage;
