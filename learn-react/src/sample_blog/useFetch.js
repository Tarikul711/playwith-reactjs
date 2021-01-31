import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)

    useEffect(() => {
        console.log('working')
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
                setPending(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return { data, isPending }
}

export default useFetch