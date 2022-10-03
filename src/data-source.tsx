// import axios from 'axios'
// import { IProduct } from 'product.interface'
import React from 'react'
import { useState, useEffect } from 'react'
// import { IUser } from 'user.interface'

function DataSource({
    // resourceUrl,
    getDataFunc = () => {},
    resourceName,
    children,
}: {
    getDataFunc: () => any
    resourceName: string
    children: React.ReactNode
}) {
    // const [state, setState] = useState<IUser[] | IProduct[] | null>(null)
    const [state, setState] = useState(null)
    useEffect(() => {
        ;(async () => {
            // const response = await axios.get(resourceUrl)
            // const resource = response.data
            // setState(resource)
            const data = await getDataFunc()
            setState(data)
        })()
        // }, [resourceUrl])
    }, [getDataFunc])

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        // user
                        [resourceName]: state,
                    } as any)
                }
                return child
            })}
        </>
    )
}

export default DataSource
