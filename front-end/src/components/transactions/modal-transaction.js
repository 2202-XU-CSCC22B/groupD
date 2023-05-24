import { Dialog } from "@headlessui/react";
import NewTransactionForm from "./new-transaction-form";

const ModalTransaction = ({ isOpen, setIsOpen , refetchTransactions}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[99999]"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="absolute w-screen h-screen min-[450px]:h-fit min-[450px]:mx-auto min-[450px]:w-[500px] min-[450px]:rounded min-[450px]:relative bg-white">
          <Dialog.Title>
            {/* add 'add transaction' logic inside */}
            <NewTransactionForm setIsOpen={setIsOpen} refetchTransactions={refetchTransactions} />
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ModalTransaction;
