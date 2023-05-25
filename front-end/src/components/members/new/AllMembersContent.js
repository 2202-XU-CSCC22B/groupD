import AllMemberTable from "@modules/components/members/new/AllMemberTable";

export default function AllMembersContent({setSelectedMember, data, refetchTransactions, selectedMember}) {
  return <AllMemberTable  setSelectedMember={setSelectedMember} data={data} refetchTransactions={refetchTransactions} selectedMember={selectedMember}/>;
}
