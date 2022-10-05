import React from 'react'
import withEditableUser from 'with-editable-user'

const UserInfoForm = withEditableUser(
    ({ user, onChangeUser, onSaveUser, onResetUser }) => {
        const { name, age, hairColor } = user || {}
        return user ? (
            <form action="">
                <label htmlFor="name-input">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => onChangeUser({ name: e.target.value })}
                    id="name-input"
                />
                <label htmlFor="age-input">Name:</label>
                <input
                    type="number"
                    value={age}
                    onChange={e =>
                        onChangeUser({ age: Number(e.target.value) })
                    }
                    id="age-input"
                />
                <label htmlFor="hair-color-input">Hair:</label>
                <input
                    type="text"
                    value={hairColor}
                    onChange={e => onChangeUser({ hairColor: e.target.value })}
                    id="hair-color-input"
                />
                <button onClick={onResetUser}>reset</button>
                <button onClick={onSaveUser}>save</button>
            </form>
        ) : (
            <p>Loading...</p>
        )
    },
    '234'
)

export default UserInfoForm
