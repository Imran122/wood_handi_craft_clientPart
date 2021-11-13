import { useEffect, useState } from 'react';

const useProducts = () => {
    //set data in services
    const [products, setProducts] = useState([])
    //fetch data from fajedb json file
    useEffect(() => {
        fetch('https://nameless-beyond-44160.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}

export default useProducts;