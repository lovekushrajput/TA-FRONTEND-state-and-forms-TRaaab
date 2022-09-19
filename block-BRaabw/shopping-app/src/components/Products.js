import React from 'react'
import Product from './Product'


class Products extends React.Component {

    render() {
        let { order, cart } = this.props
        return (
            order.map((elm) => <Product
                key={elm.id}
                elm={elm}
                cart={cart}
            />)
        )
    }
}

export default Products