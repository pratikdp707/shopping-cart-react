import React from 'react'

export default function Product(props) {

    return (
        <div>
            <div className="col mb-5">
                <div className="card h-100">

                    <div className={`badge bg-dark text-white position-absolute ${props.productDetails.discount === "false" ? "d-none" : ""}`} style={{top: "0.5rem" ,right: "0.5rem"}}>Sale</div>

                    <img className="card-img-top" src={props.productDetails.productImg} alt="..." />

                    <div className="card-body p-4">
                        <div className="text-center">

                            <h5 className="fw-bolder">{props.productDetails.productName}</h5>

                            <div className={`d-flex justify-content-center small text-warning mb-2 ${props.productDetails.stars === false ? "d-none" : ""}`}>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>

                            <span className={`text-muted text-decoration-line-through ${props.productDetails.discount === false ? "d-none" : ""}`}>{props.productDetails.productPriceTwo}</span>
                            {props.productDetails.productPriceOne}
                        </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto"  onClick = {props.addToCart}>Add to cart</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
