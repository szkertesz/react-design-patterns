import axios from 'axios'
import React, { ComponentType, useEffect, useState } from 'react'
import { IUser } from 'user.interface'

interface IWithEditableResourceProps {
    // userId: Pick<IUser, 'id'>
    user: IUser
    onChangeUser: (changes: React.SetStateAction<any>) => void
    onResetUser: () => void
    onSaveUser: () => void
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

function withEditableResource<T extends IWithEditableResourceProps>(
    Component: ComponentType<T>,
    resourcePath: string,
    resourceName: string
) {
    return (props: Omit<T, keyof IWithEditableResourceProps>) => {
        const [originalData, setOriginalData] = useState<any | null>(null)
        const [data, setData] = useState<any | null>(null)

        useEffect(() => {
            ;(async () => {
                const response = await axios.get(resourcePath)
                setOriginalData(response.data)
                setData(response.data)
            })()
        }, [])

        const onChange = (changes: React.SetStateAction<any>) =>
            setData({ ...data, ...changes })

        const onSave = async () => {
            const response = await axios.post(resourcePath, {
                [resourceName]: data,
            })
            setOriginalData(response.data)
            setData(response.data)
        }

        const onReset = () => {
            setData(originalData)
        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onSave${capitalize(resourceName)}`]: onSave,
            [`onReset${capitalize(resourceName)}`]: onReset,
        }

        return <Component {...(props as T)} {...resourceProps} />
    }
}

export default withEditableResource
