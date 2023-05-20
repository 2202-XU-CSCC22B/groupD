import { Dialog } from "@headlessui/react";
import React from "react";
import EmailForm from "./email-form";

const EmailModal = ({ isEmailModalOpen, setIsEmailModalOpen }) => {
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
            <EmailForm />
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EmailModal;
