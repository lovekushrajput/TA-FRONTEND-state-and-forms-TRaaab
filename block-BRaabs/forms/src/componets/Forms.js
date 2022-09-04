import React from 'react'

class Forms extends React.Component {
  constructor() {
    super()
    this.state = {
      shipping: {
        address: '',
        zip: '',
        city: '',
        country: '',
        errors: {
          address: '',
          zip: '',
        }
      },
      billing: {
        address: '',
        zip: '',
        city: '',
        country: '',
        errors: {
          address: '',
          zip: '',
        }
      },


    }
  }

  handleInput = ({ target }) => {
    let { name, value, checked } = target
    let shipping = this.state.shipping

    if (name !== 'checkbox') {
      shipping[name] = value

      switch (name) {
        case 'address':
          shipping.errors.address = value.length < 8 ? 'You need to enter at-least 8 characters' : ''
          break;
        case 'zip':
          shipping.errors.zip = value.length < 6 ? 'Zip contains 6 digit numbers' : ''
          break;
        default:
      }

      this.setState({
        shipping
      })

    }


    if (checked) {
      this.setState((prevState) => {
        return {
          billing: prevState.shipping
        }
      })
    }

  }

  handleBilling = ({ target }) => {
    let { name, value } = target
    let billing = this.state.billing
    billing[name] = value

    switch (name) {
      case 'address':
        billing.errors.address = value.length < 8 ? 'You need to enter at-least 8 characters' : ''
        break;
      case 'zip':
        billing.errors.zip = value.length < 6 ? 'Zip contains 6 digit numbers' : ''
        break;
      default:
    }

    this.setState({
      billing
    })
  }

  render() {
    let error = this.state.shipping.errors
    let bilError = this.state.billing.errors
    return (
      <div className="grid">
        <>

          {/* shipping form */}
          <form action="" className='flex flex-column border-form'>
            <legend>Shipping Address</legend>

            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" placeholder="e.g. New Delhi Vasant Vihar" onChange={this.handleInput} value={this.state.shipping.address} className={error.address && 'error'} />
            < span>{error.address}</span>

            <label htmlFor="zip">ZIP/Postal Code</label>
            <input type="text" name="zip" id="zip" placeholder="e.g. 210431" onChange={this.handleInput} value={this.state.shipping.zip} className={error.zip && 'error'} />
            < span>{error.zip}</span>

            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="e.g. New Delhi" onChange={this.handleInput} value={this.state.shipping.city} />

            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" placeholder="e.g. India" onChange={this.handleInput} value={this.state.shipping.country} />
          </form>

          {/* Billing form */}

          <form action="#" className='flex flex-column border-form'>
            <legend>Billing Address</legend>

            <div>
              <input type="checkbox" id="checkbox" name="checkbox" onChange={this.handleInput} />
              <label htmlFor="checkbox"> Same as the Shipping Address?</label>
            </div>

            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" placeholder="e.g. New Delhi Vasant Vihar" onChange={this.handleBilling} value={this.state.billing.address} className={bilError.address && 'error'} />
            < span>{bilError.address}</span>

            <label htmlFor="zip">ZIP/Postal Code</label>
            <input type="text" name="zip" id="zip" placeholder="e.g. 210431" onChange={this.handleBilling} value={this.state.billing.zip} className={bilError.zip && 'error'} />
            < span>{bilError.zip}</span>

            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="e.g. New Delhi" onChange={this.handleBilling} value={this.state.billing.city} />


            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" placeholder="e.g. India" onChange={this.handleBilling} value={this.state.billing.country} />

          </form>
        </>
      </div>
    )
  }
}

export default Forms