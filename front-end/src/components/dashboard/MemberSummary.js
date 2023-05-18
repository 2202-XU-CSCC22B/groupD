import { Paper } from "@mui/material";
import { memberSummary } from "@modules/utils/config";
import PaperDashboard from "@modules/components/PaperDashboard";
import Typography from "@mui/material/Typography";
import Title from "@modules/components/dashboard/Title";
import {useEffect, useState} from "react";

export default function MemberSummary() {

    const [summaryData, setSummaryData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/member/count")
            .then((response) => response.json())
            .then((data) => {
                const memberSummaryWithValues = memberSummary.map((summary, index) => {
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

  return (
    <>
      <Title>Summary</Title>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "10px",
          margin: "10px",
          overflow: "auto",
        }}
      >
        {summaryData.map((summary) => (
          <PaperDashboard
            key={summary.name}
            color={summary.color}
            name={summary.name}
            icon={summary.icon}
            value={summary.value}
            tooltip={summary.tooltip}
          />
        ))}
      </div>
    </>
  );
}
