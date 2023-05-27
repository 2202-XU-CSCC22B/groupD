import { Dialog } from "@headlessui/react";
import NewStaffForm from "./new-staff-form";

const ModalAddStaff = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[999999]"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white w-full h-full p-4 md:h-fit sm:p-12 sm:min-w-[550px]">
          <NewStaffForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ModalAddStaff;
