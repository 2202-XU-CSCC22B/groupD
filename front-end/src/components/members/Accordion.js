import { Disclosure } from "@headlessui/react";

const Accordion = () => {
  return (
    <div className="w-full md:w-1/2 bg-white rounded border p-2 !text-black text-left">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full text-left px-4 py-2 rounded bg-blue-100">
              Membership
            </Disclosure.Button>
            <Disclosure.Panel className=" px-4 py-2">
              <section>
                <h1>Start Date: //start date</h1>
              </section>
              <section>
                <h1>End Date: //start date</h1>
              </section>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Accordion;
