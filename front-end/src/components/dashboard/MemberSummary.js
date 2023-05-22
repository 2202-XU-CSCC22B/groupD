import { memberSummary } from "@modules/utils/config";
import { useEffect, useState } from "react";

const fakeData = [
  {
    name: "Active Members",
    icon: {
      type: {
        type: {},
        compare: null,
      },
      key: null,
      ref: null,
      props: {
        sx: {
          fontSize: "50px",
        },
      },
      _owner: null,
      _store: {},
    },
    color: "#FFE2E6",
    tooltip: "Number of all registered users",
    value: 51,
  },
  {
    name: "Monthly Members",
    icon: {
      type: {
        type: {},
        compare: null,
      },
      key: null,
      ref: null,
      props: {
        sx: {
          fontSize: "50px",
        },
      },
      _owner: null,
      _store: {},
    },
    color: "#DCFCE7",
    tooltip: "Number of all active monthly users",
    value: 12,
  },
  {
    name: "Registered Students",
    icon: {
      type: {
        type: {},
        compare: null,
      },
      key: null,
      ref: null,
      props: {
        sx: {
          fontSize: "50px",
        },
      },
      _owner: null,
      _store: {},
    },
    color: "#FFF4DE",
    tooltip: "Number of total enrolled monthly students",
    value: 18,
  },
];

export default function MemberSummary({ className, ...props }) {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    fetch(process.env.count_members_api)
      .then((response) => response.json())
      .then((data) => {
        const memberSummaryWithValues = memberSummary.map((summary) => {
          switch (summary.name) {
            case "Active Members":
              return { ...summary, value: data.members };
            case "Monthly Members":
              return { ...summary, value: data.monthly };
            case "Registered Students":
              return { ...summary, value: data.students };
            default:
              return summary;
          }
        });
        setSummaryData(memberSummaryWithValues);
      })
      .catch((error) => {
        console.error("Error fetching member counts:", error);
      });
  }, []);

  console.log(summaryData);
  return (
    <div className={`${className} space-y-2`} {...props}>
      <h1 className=" text-blue-500 text-xl font-medium">Summary</h1>

      <div className=" flex flex-wrap gap-4 ">
        {summaryData.map((summary, index) => {
          return (
            <div
              key={index}
              className="border rounded-md w-full space-y-4 py-6 max-w-[220px]"
            >
              <div className="flex gap-1 items-center justify-center">
                <summary.icon
                  sx={{ fontSize: "36px" }}
                  className="text-blue-300"
                />
              </div>
              <h1 className=" text-7xl font-bold text-center">
                {summary.value}
              </h1>
              <p className="text-center text-xs uppercase tracking-wide font-bold text-gray-600">
                {summary.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
