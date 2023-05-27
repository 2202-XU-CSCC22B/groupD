import AllMembersContent from "@modules/components/members/new/AllMembersContent";
import PendingRegistrationContent from "@modules/components/dashboard/PendingRegistrationContent";
import BackButton from "@modules/components/ui/BackButton";

const NewMemberPage = () => {
  return (
    <div className=" text-gray-900">
      <BackButton>Back</BackButton>
      <PendingRegistrationContent />
    </div>
  );
};

export default NewMemberPage;
