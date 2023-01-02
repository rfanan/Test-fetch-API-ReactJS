import React, { useEffect, useState } from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react"


const Product = () => {
    //fetch api
    const url = 'https://fakestoreapi.com/products'

    // using useState Hook
    const [products, setProduct] = useState([]);

    // getResponse from api
    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProduct(data)
    }

    // useEffect
    useEffect(() => {
        getData();

    })

    return (
        <div className="pt-20">
            <h1 className="text-2xl font-bold text-sky-800 text-gray-900 text-center pb-20">Product List</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {products.map((produk) => {
                    return (
                        <CardProduk
                            key={produk.id}
                            title={produk.title}
                            price={produk.price}
                            description={produk.description}
                            image={produk.image}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function CardProduk(props) {
    return (
        <div>
            <div>
                <Card className="w-96 mt-10">
                    <CardHeader color="blue" className="relative h-56">
                        <img
                            src={props.image}
                            alt="img-blur-shadow"
                            className="h-full w-full bg-cover "
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            {props.title}
                        </Typography>
                        <Typography>
                            {props.description}
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        <Typography variant="small">${props.price}/night</Typography>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                            Barcelona, Spain
                        </Typography>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )

}

export default Product;