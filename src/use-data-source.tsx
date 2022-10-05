import axios from 'axios'
import { useEffect, useState } from 'react'

function useDataSource(getResourceFn: () => void) {
    const [resource, setResource] = useState<any | null>(null)

    useEffect(() => {
        ;(async () => {
            const result = await getResourceFn()
            setResource(result)
        })()
    }, [getResourceFn])
    return resource
}

export default useDataSource
