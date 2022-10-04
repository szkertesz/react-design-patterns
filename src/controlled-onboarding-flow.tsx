import React from 'react'

function ControlledOnboardingFlow({
    children,
    onFinish,
    currentIndex,
    onNext,
}: {
    children: React.ReactNode[]
    onFinish: (data: {}) => void
    currentIndex: number
    onNext: ({}) => void
}): JSX.Element {
    const goToNext = (stepData: {}) => {
        console.log(stepData)
        onNext(stepData)
    }
    const currentChild = React.Children.toArray(children)[
        currentIndex
    ] as JSX.Element

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext } as any)
    }

    return currentChild
}

export default ControlledOnboardingFlow
