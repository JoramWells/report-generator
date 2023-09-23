import React from 'react'
import Badge from './Badge'
import Underline from './Underline'

const PersonalDetails = () => {
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"5px"
        }}>
            <div style={{
            width:"80%"
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-evenly",
                    alignItems: "flex-end",
                    marginTop: "5px"
                }}>
                    {/* Row 1 */}
                    <Badge text={'Index/Code'} />

                    <Underline />

                    <Badge text={'class'} />

                    <Underline />
                    <Badge text={'Position'} />
                    <Badge text={'Out of'} />


                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-evenly",
                    alignItems: "flex-end",
                    marginTop: "5px"
                }}>
                    <Badge text={'Name'} />
                    <Underline width='55.4%' />
                    <Underline width='10%' />
                    <Underline width='14%' />

                </div>
                {/* personal details */}
                <div style={{
                    display: 'flex',
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    marginTop: "5px"
                }}>
                    <Badge text={'House'} />
                    <Underline />
                    <Badge text={'Age'} />
                    <Underline width='13%' />
                    <Underline width='35%' />

                </div>
                {/* Cores */}
                <div style={{
                    display: 'flex',
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    marginTop: "5px"
                }}>
                    <Badge text={'Course Marks'} width={'15%'} />
                    <Underline width='10%' />
                    <Badge text={'Aggregate'} />
                    <Underline width='10%' />
                    <Underline width='35%' />

                </div>

            </div>
            <div style={{
                    width:"100px",
                    height:"100px",
                    border:"1px solid black"
                }}>logo</div>
        </div>
    )
}

export default PersonalDetails