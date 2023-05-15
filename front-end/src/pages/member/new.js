
import DashboardLayout from "@modules/components/layouts/DashboardLayout";

import GoBackButton from "@modules/components/GoBackButton";
import NewMembersContent from "@modules/components/members/new/NewMembersContent";
import Head from "next/head";

export default function NewMember(){
    return(
        <DashboardLayout>
            <Head>
                <title>New Members</title>
            </Head>

                <Head>
                    <title>All Members</title>
                </Head>
                <GoBackButton link={"/member"}/>
                <NewMembersContent/>
            </DashboardLayout>



    )
}