import {Paper} from "@mui/material";
import {memberSummary} from "@modules/utils/config";
import PaperDashboard from "@modules/components/PaperDashboard";
import Typography from "@mui/material/Typography";
import Title from "@modules/components/dashboard/Title";

export default function MemberSummary(){
    return(
        <>
            <Title>Summary</Title>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "10px",
                margin: "10px",
                overflow:'auto'
            }}>
                {memberSummary.map(summary => (
                    <PaperDashboard
                        key={summary.name}
                        color={summary.color}
                        name={summary.name}
                        icon={summary.icon}
                        value={summary.value}
                        tooltip={summary.tooltip} />
                ))}
            </div>
        </>
    )
}