import React, { ComponentType } from 'react'

function printProps(Component: ComponentType<any>) {
    return (props: any) => {
        console.log(props)
        return <Component {...props} />
    }
}

export default printProps
