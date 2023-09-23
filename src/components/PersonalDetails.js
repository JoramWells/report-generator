import React from 'react'
import Badge from './Badge'
import Underline from './Underline'

const PersonalDetails = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: "flex-start",
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
                justifyContent: "flex-start",
                alignItems: "flex-end",
                marginTop: "5px"
            }}>
                <Badge text={'Name'} />
                <Underline width='55.4%' />
                <Underline width='10%' />
                <Underline width='14%' />

            </div>
        </div>
    )
}

export default PersonalDetails