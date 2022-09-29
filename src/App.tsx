import './App.css'
import SplitScreen from 'layout/split-screen'

const LeftHandComponent = ({ leftHandProp }: { leftHandProp: string }) => {
    return (
        <h1 style={{ backgroundColor: 'pink' }}>{`Left & ${leftHandProp}`}</h1>
    )
}
const RightHandComponent = ({ rightHandProp }: { rightHandProp: string }) => {
    return (
        <h1
            style={{ backgroundColor: 'whitesmoke' }}
        >{`Right & ${rightHandProp}`}</h1>
    )
}
function App() {
    return (
        // components as props
        // <SplitScreen
        //     left={LeftHandComponent}
        //     right={RightHandComponent}
        //     leftWeight={1}
        //     rightWeight={3}
        // />
        <SplitScreen leftWeight={1} rightWeight={3}>
            {/* using children */}
            <LeftHandComponent leftHandProp={'left side prop'} />
            <RightHandComponent rightHandProp={'right side prop'} />
        </SplitScreen>
    )
}

export default App
