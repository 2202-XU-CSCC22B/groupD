import Head from "next/head";
import AllMembersContent from "@modules/components/members/new/AllMembersContent";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { RiAddCircleLine } from 'react-icons/ri';
import ModalTransaction from "@modules/components/transactions/modal-transaction";


const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <Head>
        <title>Transactions</title>
      </Head>

      <div className="container pr-4 py-8 overflow-hidden">
        <section className="md:min-w-[720px] w-fit gap-8 flex justify-between items-center ">
          <h1 className=" text-xl md:text-3xl font-bold xl:text-left xl:pl-4 text-gray-800 leading-none">
            All Transactions 
          </h1> <RiAddCircleLine size={30} className=" text-gray-800 cursor-pointer" />


        </section>
        <AllMembersContent />
      </div>
      <ModalTransaction isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default TransactionPage;

