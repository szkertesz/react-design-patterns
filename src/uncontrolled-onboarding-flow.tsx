import React, { useState } from 'react'

function UncontrolledOnboardingFlow({
    children,
    onFinish,
}: {
    children: React.ReactNode[]
    onFinish: (data: {}) => void
}): JSX.Element {
    const [onboardingData, setOnboardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToNext = (stepData: {}) => {
        const nextIndex = currentIndex + 1
        const updatedData = {
            ...onboardingData,
            ...stepData,
        }

        console.log(updatedData)

        if (nextIndex < children?.length) {
            setCurrentIndex(nextIndex)
        } else {
            onFinish(updatedData)
        }

        setOnboardingData(updatedData)
    }

    const currentChild = React.Children.toArray(children)[
        currentIndex
    ] as JSX.Element

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext } as any)
    }

    return currentChild
}

export default UncontrolledOnboardingFlow
