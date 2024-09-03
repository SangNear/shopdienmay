import { useParams } from 'next/navigation'
import React from 'react'

const Breadcumbs = () => {
    const location = useParams()
    console.log("location", location);

    return (
        <div>Breadcumbs</div>
    )
}

export default Breadcumbs