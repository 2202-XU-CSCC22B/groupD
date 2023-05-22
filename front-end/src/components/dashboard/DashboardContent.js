import Sales from "@modules/components/dashboard/Sales";
import MemberSummary from "@modules/components/dashboard/MemberSummary";
import PendingRegistrationContent from "@modules/components/dashboard/PendingRegistrationContent";

export default function DashboardContent() {
  const cardClassName = "bg-white border rounded-lg shadow-md p-4";
  return (
    <div className="max-w-7xl gap-8 grid-cols-1 grid md:grid-cols-12 pr-24">
      {/* Chart */}
      <div className={`${cardClassName} md:col-span-8`}>
        <MemberSummary />
      </div>
      {/* Recent Transaction */}

      <div className={`${cardClassName} md:col-span-4 max-h-[276px]`}>
        <Sales />
      </div>
      {/* Recent RecentMembers */}

      <div
        className={`${cardClassName} md:col-span-12 min-[1217px]:col-span-8 overflow-x-auto`}
      >
        <PendingRegistrationContent className={` w-fit`} />
      </div>
    </div>
  );
}
