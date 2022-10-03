import axios from 'axios'
import UserLoader from 'user-loader'
import ResourceLoader from 'resource-loader'
import DataSource from 'data-source'
import { UserInfo } from 'user-info'
import { ProductInfo } from 'product-info'
import { IProduct } from 'product.interface'
import { IUser } from 'user.interface'
import './App.css'

const getServerData = (url: string) => async () => {
    const response = await axios.get(url)
    return response.data as IUser[] | IProduct[] | null
}

const getLocalStorageData = (key: string) => () => {
    return localStorage.getItem(key)
}

const Text = ({ message }: { message: string }) => <h1>{message}</h1>

function App() {
    return (
        <>
            {/* Components for UserLoader based configuration */}
            <UserLoader userId="234">
                <UserInfo user={null} />
            </UserLoader>
            <UserLoader userId="123">
                <UserInfo user={null} />
            </UserLoader>
            <UserLoader userId="345">
                <UserInfo user={null} />
            </UserLoader>

            {/* Components for ResourceLoader based configuration */}
            <ResourceLoader resourceUrl="/users/234" resourceName="user">
                <UserInfo user={null} />
            </ResourceLoader>
            <ResourceLoader resourceUrl="/products/1234" resourceName="product">
                <ProductInfo product={null} />
            </ResourceLoader>

            {/* Components for DataSource based configuration */}
            <DataSource
                getDataFunc={getServerData('/users/234')}
                resourceName="user"
            >
                <UserInfo user={null} />
            </DataSource>

            <DataSource
                getDataFunc={getLocalStorageData('message')}
                resourceName="message"
            >
                <Text message={''} />
            </DataSource>
        </>
    )
}

export default App
