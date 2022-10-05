import axios from 'axios'
import { useEffect, useState } from 'react'

function useResource(resourceUrl: string) {
    const [resource, setResource] = useState<any | null>(null)

    useEffect(() => {
        ;(async () => {
            const response = await axios.get(resourceUrl)
            setResource(response.data)
        })()
    }, [resourceUrl])
    return resource
}

export default useResource
