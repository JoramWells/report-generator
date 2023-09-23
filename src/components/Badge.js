
const Badge = ({text, width}) => {

    return (
        <div
            style={{
                backgroundColor: "whitesmoke",
                padding: "5px",
                marginRight: "5px",
                fontWeight: "500",
                width: width? width : "12%",
                textAlign: "center",
                fontSize:"14px"
            }}
        >{text}</div>
    )
}

export default Badge