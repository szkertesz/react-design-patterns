import LargePersonListItem from 'ui/list-items/people/large-person-list-item'
import SmallPersonListItem from 'ui/list-items/people/small-person-list-item'
import LargeProductListItem from 'ui/list-items/products/large-product-list-item'
import SmallProductListItem from 'ui/list-items/products/small-product-list-item'
import NumberedList from 'ui/lists/numbered-list'
import RegularList from 'ui/lists/regular-list'
import Modal from 'ui/modals/modal'
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

const products = [
    {
        name: 'Flat-Screen TV',
        price: '$300',
        description: 'Huge LCD screen, a great deal',
        rating: 4.5,
    },
    {
        name: 'Basketball',
        price: '$10',
        description: 'Just like the pros use',
        rating: 3.8,
    },
    {
        name: 'Running Shoes',
        price: '$120',
        description: 'State-of-the-art technology for optimum running',
        rating: 4.2,
    },
]

function App() {
    return (
        <>
            <RegularList
                items={people}
                resourceName="person"
                itemComponent={SmallPersonListItem}
            />
            <Modal>
                <NumberedList
                    items={people}
                    resourceName="person"
                    itemComponent={LargePersonListItem}
                />
            </Modal>
            <RegularList
                items={products}
                resourceName="product"
                itemComponent={SmallProductListItem}
            />
            <RegularList
                items={products}
                resourceName="product"
                itemComponent={LargeProductListItem}
            />
        </>
    )
}

export default App
