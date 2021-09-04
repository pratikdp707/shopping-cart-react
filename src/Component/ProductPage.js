import React from 'react'
import Product from './Product'

export default function ProductPage(props) {

    let productObj =[
        {
            id : "1",
            productImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            productName : "Fancy Product",
            productPriceTwo : "",
            productPriceOne : "$40.00 - $80.00",
            stars : "false",
            discount : "false"
        },
        {
            id : "2",
            productImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            productName : "Special Item",
            productPriceTwo : "$20.00",
            productPriceOne : "$18.00",
            stars : "true",
            discount : "true"
        },
        {
            id : "3",
            productImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            productName : "Sale Item",
            productPriceTwo : "$50.00",
            productPriceOne : "$25.00",
            stars : "false",
            discount : "true"
        },
        {
            id : "4",
            productImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            productName : "Popular Item",
            productPriceTwo : "",
            productPriceOne : "$40.00",
            stars : "true",
            discount : "false"
        },
        {
            id : "5",
            productImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            productName : "Sale Item",
            productPriceTwo : "$50.00",
            productPriceOne : "$25.00",
            stars : "false",
            discount : "true"
        },
        {
            id : "6",
            productImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            productName : "Fancy Product",
            productPriceTwo : "",
            productPriceOne : "$120.00 - $280.00",
            stars : "false",
            discount : "false"
        },
        {
            id : "7",
            productImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            productName : "Special Item",
            productPriceTwo : "$20.00",
            productPriceOne : "$18.00",
            stars : "true",
            discount : "true"
        },
        {
            id : "8",
            productImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            productName : "Popular Item",
            productPriceTwo : "",
            productPriceOne : "$40.00",
            stars : "true",
            discount : "false"
        }
    ]

    return (
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {productObj.map( (element) => {
                        return(
                            <Product productDetails = {element} addToCart ={props.addToCart} key ={element.id}/>
                        )
                    })}
                </div>
            </div>
            </section>
    )
}
