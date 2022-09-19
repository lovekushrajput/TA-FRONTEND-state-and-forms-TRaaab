import React from 'react';
import Products from './Products';
import Tags from './Tags';
import Cart from './Cart';
import data from '../data/data.json'


class Ui extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tag: [],
            array: [...data.products],
            cart: [],

        }
        this.totalPrice = 0
    }

    handleSelect = ({ target }) => {
        if (target.value === 'select') {
            this.setState({
                array: [...data.products]
            })
        } else {
            let a = this.state.tag.length === 0 ? [...data.products] : this.state.array
            let sorted = a.sort((a, b) => {
                let s;
                switch (target.value) {
                    case 'high':
                        s = b.price - a.price
                        break;
                    case 'low':
                        s = a.price - b.price
                        break;
                    default:
                }
                return s
            })
            this.setState({
                array: sorted
            })
        }
    }

    handleTags = async ({ target }) => {
        if (target.className.includes('active---tag')) {
            target.classList.remove('active---tag')
        } else {
            target.classList.add('active---tag')
        }

        let t = this.state.tag

        // is tags is alrady incudes then delete it
        if (t.includes(target.innerText)) {
            let rm = t.filter((elm) => elm !== target.innerText)
            await this.setState({
                tag: rm
            })
        } else {
            // pushing the data acc to tag
            await this.setState((preState) => {
                return {
                    tag: preState.tag.concat(target.innerText)
                }
            })
        }



        let { tag } = this.state

        if (tag.length !== 0) {
            let sort = []
            data.products.forEach((product) => {
                product.availableSizes.filter((p) => {
                    if (tag.includes(p)) {
                        if (!sort.includes(product)) {
                            sort.push(product)
                        }

                    }
                })

            })


            this.setState({
                array: sort
            })

        } else {

            // tag is empty
            this.setState({
                array: data.products
            })
        }
    }

    handleBag = (e) => {

        let cart = document.querySelector('.cart')
        let close = document.querySelector('.close')
        if (cart.style.display === 'none' && close.style.display === 'none') {
            cart.style.display = 'block'
            close.style.display = 'block'
        } else {
            cart.style.display = 'none'
            close.style.display = 'none'
        }

    }

    //Add product to cart
    handleCart = (e, elm) => {
        let { cart } = this.state
        this.totalPrice += elm.price


        if (cart.includes(elm)) {
            cart.filter((product) => {

                if (product.id === elm.id) {
                    product.quantity += 1
                    return product
                }
            })

            this.setState({
                cart: cart
            })


        } else {
            elm['quantity'] = 1
            this.setState((preState) => {
                return {
                    cart: preState.cart.concat(elm)
                }
            })
        }



    }

    //increment quantity
    handleInc = (e, elm) => {
        let { cart } = this.state
        if (cart.includes(elm)) {
            cart.filter((product) => {
                if (product.id === elm.id) {
                    product.quantity += 1
                    this.totalPrice += product.price
                    return product
                }
            })

            this.setState({
                cart: cart
            })


        }
    }

    //decrement quantity
    handleDec = (e, elm) => {
        let { cart } = this.state
        if (cart.includes(elm)) {
            cart.filter((product) => {
                if (product.id === elm.id) {
                    if (product.quantity > 1) {
                        product.quantity -= 1
                        this.totalPrice -= product.price
                        return product
                    }

                }
            })

            this.setState({
                cart: cart
            })


        }
    }

    //delete product
    handleDel = async (e, elm) => {
        let { cart } = this.state
        this.totalPrice -= elm.price * elm.quantity

        await this.setState({
            cart: cart.filter((product) => product.id !== elm.id)
        })
    }

    //close cart
    handleClose = (e) => {
        let cart = document.querySelector('.cart')
        e.target.style.display = 'none'
        cart.style.display = 'none'
    }

    render() {
        return (
            <>
                {/* CART BUTTON */}
                <div className='icon'>
                    <figure onClick={this.handleBag}>
                        <img src='/static/bag-icon.png' alt='hh' />
                    </figure>
                </div>

                {/*CART  */}
                <section>
                    <h1>Shopping Cart</h1>
                    <div className='cart padding'>
                        <div className='flex justify-center align-center'>
                            <figure>
                                <img src='/static/bag-icon.png' alt='hh' />
                            </figure>
                            <span className='popup popup---cart weight-500'>{this.state.cart.length}</span>
                            <h2 className='font-1   margin-left'>Cart</h2>
                        </div>

                        <hr />

                        <article>
                            {this.state.cart.map((product) => <Cart
                                product={product}
                                handleInc={(e, product) => this.handleInc(e, product)}
                                handleDec={(e, product) => this.handleDec(e, product)}
                                handleDel={(e, product) => this.handleDel(e, product)}
                            />)}
                        </article>
                        <div className="flex justify-space width-100">
                            {this.totalPrice > 0 ?
                                <> <h2>SUBTOTAL</h2> <p className='weight-500'>{Math.floor(this.totalPrice)} </p> </>
                                : ''}
                        </div>

                        {this.totalPrice > 0 ? <div className='flex justify-center flex-column'>
                            <button className='checkout' onClick={() => alert('Thanks for perchasing with shopping cart 🤟😎')}>checkout</button>
                        </div> : ''}
                    </div>


                    <div className='filter'>
                        <label htmlFor="order">Order by</label>
                        <select name='sort' id="order" onChange={this.handleSelect}>
                            <option value="select" >Select</option>
                            <option value="low" >Lowest to highest</option>
                            <option value="high" >Highest to lowest</option>
                        </select>
                    </div>


                    <section className='hero'>
                        <article>
                            <Tags handleTags={this.handleTags} />
                        </article>

                        {/*displaying  products */}
                        <article className='product'>
                            <Products
                                order={this.state.array}
                                tags={this.state.tag}
                                cart={(e, elm) => this.handleCart(e, elm)}
                            />
                        </article>
                    </section>

                    {/* close btn */}
                    <button className='close flex justify-center align-center curser' onClick={this.handleClose}>✖</button>

                    {/* popup */}
                    <span className='popup popup---main weight-500'>{this.state.cart.length}</span>
                </section>
            </>
        )
    }
}

export default Ui