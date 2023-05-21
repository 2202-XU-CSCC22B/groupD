import { Dialog } from "@headlessui/react";

const ModalTransaction = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ModalTransaction;