export default function BasicComponent({children}){
    return (

        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "10px",
            margin: "10px",
        }}>
            {children}
        </div>
    )
}