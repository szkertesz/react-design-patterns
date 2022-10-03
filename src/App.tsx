import { useState } from 'react'
import LargePersonListItem from 'ui/list-items/people/large-person-list-item'
import NumberedList from 'ui/lists/numbered-list'
import ControlledModal from 'ui/modals/controlled-modal'
import UncontrolledModal from 'ui/modals/uncontrolled-modal'
import './App.css'

const people = [
    {
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'bicycling', 'video games'],
    },
    {
        name: 'Brenda Smith',
        age: 33,
        hairColor: 'black',
        hobbies: ['golf', 'mathematics'],
    },
    {
        name: 'Jane Garcia',
        age: 27,
        hairColor: 'blonde',
        hobbies: ['biology', 'medicine', 'gymnastics'],
    },
]

function App() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <UncontrolledModal>
                <NumberedList
                    items={people}
                    resourceName="person"
                    itemComponent={LargePersonListItem}
                />
            </UncontrolledModal>
            <button onClick={() => setShowModal(!showModal)}>
                {showModal ? 'Hide controlled modal' : 'Show controlled modal'}
            </button>
            <ControlledModal
                show={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <NumberedList
                    items={people}
                    resourceName="person"
                    itemComponent={LargePersonListItem}
                />
            </ControlledModal>
        </>
    )
}

export default App
