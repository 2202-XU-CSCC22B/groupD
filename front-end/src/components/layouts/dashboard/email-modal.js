import { Dialog } from "@headlessui/react";
import React from "react";
import EmailForm from "./email-form";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getAllMembers, getAllStaff } from "@modules/utils/axiosApi";

const EmailModal = ({ isEmailModalOpen, setIsEmailModalOpen }) => {
  const queryClient = new QueryClient();
  const { data: allStaff } = useQuery({
    queryKey: ["all_staff"],
    queryFn: getAllStaff,
  });

  const { data: allMembers } = useQuery({
    queryKey: ["all_members"],
    queryFn: getAllMembers,
  });

  const formattedAllMembers = allMembers?.data.map((member) => ({
    id: member.id,
    label: member.name,
    value: member.email,
  }));

  const formattedallStaff = allStaff?.data.all.map((staff) => ({
    id: staff.id,
    label: staff.name,
    value: staff.email,
  }));

  return (
    <Dialog
      open={isEmailModalOpen}
      onClose={() => setIsEmailModalOpen(false)}
      className=" z-[999999] relative"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 w-full">
        <Dialog.Panel className="bottom-0 left-0 absolute mx-auto bg-blue-50 px-4 py-8 w-full">
          <Dialog.Title className="w-fit mx-auto">
            <button
              onClick={() => setIsEmailModalOpen(false)}
              className="px-4 py-2 underline text-sm font-medium text-blue-600 cursor-pointer hover:bg-blue-100 rounded transition-all duration-300 ease-in-out"
            >
              Back
            </button>
            <EmailForm
              allMembers={formattedAllMembers}
              allStaff={formattedallStaff}
            />
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EmailModal;
