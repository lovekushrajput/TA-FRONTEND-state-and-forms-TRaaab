import React from "react"

function Cart(props) {

    let { product, handleInc, handleDec, handleDel } = props

    return (
        <>
            <div key={product.id} className='flex margin-botttom'>

                <figure className='cart-img'>
                    <img src={'/static/products/' + product.sku + '_2.jpg'} alt={product.sku} />
                </figure>

                <div className=" flex justify-even width-100">

                    <div className="line-2" >
                        <h2>
                            {product.title}
                        </h2>
                        <p
                            className="grey">{product.style}
                        </p>
                        <span
                            className="grey">print Quantity: {product.quantity}
                        </span>
                    </div>

                    <div className="flex flex-column line-2 left">
                        <p
                            className="yellow weight-500">{product.currencyFormat} <br
                            />{product.price * product.quantity}
                        </p>
                        <span
                            onClick={(e) => handleInc(e, product)}
                            className='curser'>➕
                        </span>
                        <span
                            onClick={(e) => handleDec(e, product)}
                            className='curser'>➖
                        </span>
                    </div>

                    <div>
                        <span
                            className="black curser"
                            onClick={(e) => handleDel(e, product)}>✖
                        </span>
                    </div>

                </div>


            </div>
            {/* <hr/> */}
        </>


    )

}

export default Cart