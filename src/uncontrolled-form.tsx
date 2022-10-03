import React, { useRef } from 'react'

function UncontrolledForm() {
    const nameInput = useRef<HTMLInputElement | null>(null)
    const ageInput = useRef<HTMLInputElement | null>(null)
    const hairColorInput = useRef<HTMLInputElement | null>(null)
    const handleSubmit = (e: React.FormEvent) => {
        console.log(nameInput.current?.value)
        console.log(ageInput.current?.value)
        console.log(hairColorInput.current?.value)
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" ref={nameInput} placeholder="Name" />
            <input type="number" name="age" ref={ageInput} placeholder="Age" />
            <input
                type="text"
                name="hairColor"
                ref={hairColorInput}
                placeholder="Hair Color"
            />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default UncontrolledForm
