import Head from "next/head";
import MyContainer from "@modules/components/ui/MyContainer";

import { useMemo } from "react";
import Table from "./components/Table";

const MemberPage = () => {
  const data = useMemo(
    () => [
      {
        createdAt: "2023-05-18T05:20:13.448313",
        firstName: "Rodger",
        lastName: "Schmitt",
        phone: "14493891625",
        email: "RodgerSchmitt@gmail.com",
        birthday: "20190315",
        gender: "MALE",
        address: "Waters Pine",
        id: 164,
        weight: 73.76918022856877,
        height: 89.00091905629034,
        occupation: "Principal IT Designer",
        membershipStartDate: null,
        membershipEndDate: null,
        monthlySubscriptionStartDate: null,
        monthlySubscriptionEndDate: null,
        studentStartDate: null,
        studentEndDate: null,
        membershipStatus: "ACTIVE",
        monthlySubscriptionStatus: "ACTIVE",
        studentStatus: "ACTIVE",
      },
      {
        createdAt: "2023-05-18T05:20:13.448313",
        firstName: "Rodger",
        lastName: "Schmitt",
        phone: "1-449-389-1625",
        email: "RodgerSchmitt@gmail.com",
        birthday: "2019-03-15",
        gender: "MALE",
        address: "Waters Pine",
        id: 164,
        weight: 73.76918022856877,
        height: 89.00091905629034,
        occupation: "Principal IT Designer",
        membershipStartDate: null,
        membershipEndDate: null,
        monthlySubscriptionStartDate: null,
        monthlySubscriptionEndDate: null,
        studentStartDate: null,
        studentEndDate: null,
        membershipStatus: "ACTIVE",
        monthlySubscriptionStatus: "ACTIVE",
        studentStatus: "ACTIVE",
      },
      {
        createdAt: "2023-05-18T05:20:13.448313",
        firstName: "Rodger",
        lastName: "Schmitt",
        phone: "1-449-389-1625",
        email: "RodgerSchmitt@gmail.com",
        birthday: "2019-03-15",
        gender: "MALE",
        address: "Waters Pine",
        id: 164,
        weight: 73.76918022856877,
        height: 89.00091905629034,
        occupation: "Principal IT Designer",
        membershipStartDate: null,
        membershipEndDate: null,
        monthlySubscriptionStartDate: null,
        monthlySubscriptionEndDate: null,
        studentStartDate: null,
        studentEndDate: null,
        membershipStatus: "ACTIVE",
        monthlySubscriptionStatus: "ACTIVE",
        studentStatus: "ACTIVE",
      },
      {
        createdAt: "2023-05-18T05:20:13.448313",
        firstName: "Rodger",
        lastName: "Schmitt",
        phone: "1-449-389-1625",
        email: "RodgerSchmitt@gmail.com",
        birthday: "2019-03-15",
        gender: "MALE",
        address: "Waters Pine",
        id: 164,
        weight: 73.76918022856877,
        height: 89.00091905629034,
        occupation: "Principal IT Designer",
        membershipStartDate: null,
        membershipEndDate: null,
        monthlySubscriptionStartDate: null,
        monthlySubscriptionEndDate: null,
        studentStartDate: null,
        studentEndDate: null,
        membershipStatus: "ACTIVE",
        monthlySubscriptionStatus: "ACTIVE",
        studentStatus: "ACTIVE",
      },
    ],
    []
  );

  return (
    <div>
      <Head>
        <title>Member</title>
      </Head>

      <MyContainer>
        <Table data={data} />
      </MyContainer>
    </div>
  );
};

export default MemberPage;
