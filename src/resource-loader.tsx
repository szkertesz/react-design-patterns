import axios from 'axios'
import { IProduct } from 'product.interface'
import React from 'react'
import { useState, useEffect } from 'react'
import { IUser } from 'user.interface'

function ResourceLoader({
    resourceUrl,
    resourceName,
    children,
}: {
    resourceUrl: string
    resourceName: string
    children: React.ReactNode
}) {
    const [state, setState] = useState<IUser[] | IProduct[] | null>(null)
    useEffect(() => {
        ;(async () => {
            const response = await axios.get(resourceUrl)
            const resource = response.data
            setState(resource)
        })()
    }, [resourceUrl])

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        [resourceName]: state,
                    } as any)
                }
                return child
            })}
        </>
    )
}

export default ResourceLoader
