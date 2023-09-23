
const Badge = ({text}) => {

    return (
        <div
            style={{
                backgroundColor: "whitesmoke",
                padding: "5px",
                marginRight: "5px",
                fontWeight: "500",
                width: "12%",
                textAlign: "center"
            }}
        >{text}</div>
    )
}

export default Badge