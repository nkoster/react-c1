import React from 'react'

const UserInput = props => {

    const style = {
        background: 'yellow'
    }

    return (
        <div>
            <input
                type="text"
                style={style}
                onChange={props.changed}
                value={props.currentUserName}
            />
        </div>
    )

}

export default UserInput
