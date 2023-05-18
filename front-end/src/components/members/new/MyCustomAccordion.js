import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MyCustomAccordion = ({ data }) => {
  return (
    <div className="w-full bg-white rounded border p-2 !text-black text-left space-y-2">
      {data.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full text-left px-4 py-2 rounded bg-blue-100 text-blue-600 font-medium flex justify-between">
                {item.title}
                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </Disclosure.Button>
              <Disclosure.Panel className=" p-2 flex flex-col justify-between">
                <section className=" text-sm w-fit">
                  <h1 className=" ">
                    Status: <span className=" font-medium">{item.status}</span>
                  </h1>
                </section>
                <section className=" text-sm">
                  <h1>
                    Start Date:{" "}
                    <span className=" font-medium">{item.startDate}</span>
                  </h1>
                </section>
                <section className=" text-sm">
                  <h1>
                    End Date:{" "}
                    <span className=" font-medium">{item.endDate}</span>
                  </h1>
                </section>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default MyCustomAccordion;
