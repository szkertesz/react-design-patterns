import ControlledOnboardingFlow from 'controlled-onboarding-flow'
import { useState } from 'react'
import UncontrolledOnboardingFlow from 'uncontrolled-onboarding-flow'
import './App.css'

const StepOne = ({ goToNext }: any) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
    </>
)
const StepTwo = ({ goToNext }: any) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({ age: 40 })}>Next</button>
    </>
)
const StepThree = ({ goToNext }: any) => (
    <>
        <h1>Step 3</h1>
        <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
    </>
)

function App() {
    const [onboardingData, setOnboardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)

    const onNext = (stepData: {}) => {
        setOnboardingData({ ...onboardingData, ...stepData })
        setCurrentIndex(currentIndex + 1)
    }
    return (
        <>
            <UncontrolledOnboardingFlow
                onFinish={data => {
                    console.log(data)
                    alert('Onboarding completed')
                }}
            >
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboardingFlow>

            <ControlledOnboardingFlow
                currentIndex={currentIndex}
                onNext={onNext}
                onFinish={data => {
                    console.log(data)
                    alert('Onboarding completed')
                }}
            >
                <StepOne />
                <StepTwo />
                <StepThree />
            </ControlledOnboardingFlow>
        </>
    )
}

export default App
