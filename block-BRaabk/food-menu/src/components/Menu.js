import React from 'react'

function Menu(props) {
let {food} = props
    return (
        <article className='width-50 flex'>
            <figure>
                <img src={food.img} alt={food.title} />
            </figure>

            <div className='width-50 col'>

                <div className='flex div justify-space'>
                    <h2>{food.title}</h2>
                    <span>${food.price}</span>
                </div>

                <p>{food.desc}</p>

            </div>

        </article>
    )
}

export default Menu