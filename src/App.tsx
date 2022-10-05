// import printProps from 'print-props'
import ResourceInfoForm from 'resource-info-form'
import { UserInfo } from 'user-info'
import UserInfoForm from 'user-info-form'
import withUser from 'with-user'
import './App.css'

// const UserInfoWrapped = printProps(UserInfo)
const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {
    // return <UserInfoWrapped a={1} user={null} />
    return (
        <>
            <UserInfoWithLoader />
            <UserInfoForm />
            <ResourceInfoForm />
        </>
    )
}

export default App
