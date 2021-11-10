import { useEffect, useState } from 'react';

const useOrders = () => {
    //set data in services
    const [products, setProducts] = useState([])
    //fetch data from fajedb json file
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}

export default useOrders;