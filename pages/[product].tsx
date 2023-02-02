import { Avatar } from '@mui/material';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const product = () => {

    // fetch the param
    const router = useRouter()
    const { product }: any = router.query

    const { isLoading, error, data } = useQuery(['data', product], () =>
        fetch('https://dummyjson.com/products/' + parseInt(product + 1)).then(res => {
            console.log(res)
            let result = res.json()
            return result;
        }
        ),
        {
            enabled: !!product,
            staleTime:60*1000
        }
    )

    // while Fetching data
    if (isLoading) {
        return <>Loading...</>
    }

    // Handle error
    else if (error) {
        return <>Error</>
    }

    // success
    else {
        return (
            <div>
                <Avatar variant={"rounded"} alt="The image" src={data && data.images && data.images[0]} style={{
                    width: 200,
                    height: 200,
                }} />
                <br></br>
                <h3>Product Name : {data && data.title}</h3>
                <br></br>
                <h4 style={{
                    "color":"brown"
                }}>Description : {data && data.description}</h4>
                <br></br>
                <h2>Price : {data && data.price}</h2>
            </div>
        )
    }
}

export default product