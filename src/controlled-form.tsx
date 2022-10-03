import React, { useEffect, useState } from 'react'

function ControlledForm() {
    const [name, setName] = useState<string>('')
    const [nameInputError, setNameInputError] = useState('')
    const [age, setAge] = useState<number>(0)
    const [hairColor, setHairColor] = useState<string>('')

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError('Too short name')
        } else {
            setNameInputError('')
        }
    }, [name])

    return (
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={age}
                onChange={e => setAge(Number(e.target.value))}
            />
            <input
                type="text"
                name="hairColor"
                placeholder="Hair Color"
                value={hairColor}
                onChange={e => setHairColor(e.target.value)}
            />
            <button>submit</button>
        </form>
    )
}

export default ControlledForm

// import React, { useRef } from 'react'

// function UncontrolledForm() {
//     const nameInput = useRef<HTMLInputElement | null>(null)
//     const ageInput = useRef<HTMLInputElement | null>(null)
//     const hairColorInput = useRef<HTMLInputElement | null>(null)
//     const handleSubmit = (e: React.FormEvent) => {
//         console.log(nameInput.current?.value)
//         console.log(ageInput.current?.value)
//         console.log(hairColorInput.current?.value)
//         e.preventDefault()
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" ref={nameInput} placeholder="Name" />
//             <input type="number" name="age" ref={ageInput} placeholder="Age" />
//             <input
//                 type="text"
//                 name="hairColor"
//                 ref={hairColorInput}
//                 placeholder="Hair Color"
//             />
//             <input type="submit" value="Submit" />
//         </form>
//     )
// }

// export default UncontrolledForm
