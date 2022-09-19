import React from 'react'

function Product(props) {
    return (

        <>
            <div className='product-item'>

                <figure>
                    <img src={'/static/products/' + props.elm.sku + '_1.jpg'} alt={props.elm.sku} />
                </figure>

                <div className='flex flex-column align-center'>
                    <h2 className='margin-top'>{props.elm.title}</h2>
                    <span className='border-yellow'></span>
                    <p>{props.elm.currencyFormat}{props.elm.price}</p>
                    <button
                        className='btn center'
                        onClick={(e) => props.cart(e, props.elm)}>Add to cart
                    </button>


                    {props.elm.isFreeShipping ? <button className='free-btn'>free shipping </button> : ''}

                </div>

            </div>
        </>
    )
}

export default Product