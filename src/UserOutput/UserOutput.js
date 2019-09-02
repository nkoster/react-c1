import React from 'react'
import './UserOutput.css'

const UserOutput = props => (
    <div className="UserOutput">
        <p>username: {props.userName}</p>
    </div>
)

export default UserOutput
