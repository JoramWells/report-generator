import React from 'react'

const Underline = ({width='20%'}) => {
    return (
        <div
            style={{
                border: "1px solid black",
                width: width ? width: "20%",
                marginLeft:"5px",
                marginRight:"5px"
            }}
        ></div>
    )
}

export default Underline