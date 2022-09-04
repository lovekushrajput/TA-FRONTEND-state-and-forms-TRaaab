import React from "react";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
        errors: {
          address: "",
          zip: "",
        },
      },
      billing: {
        address: "",
        zip: "",
        city: "",
        country: "",
        errors: {
          address: "",
          zip: "",
        },
      },
      isSame: false,
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    let shipping = this.state.shipping;

    switch (name) {
      case "address":
        shipping.errors.address =
          value.length < 8 ? "You need to enter at-least 8 characters" : "";
        break;
      case "zip":
        shipping.errors.zip =
          value.length < 6 ? "Zip contains 6 digit numbers" : "";
        break;
      default:
    }

    shipping[name] = value;
    this.setState({
      shipping,
    });
  };

  handleCheckBox = () => {
    this.setState((prevState) => {
      return {
        isSame: !prevState.isSame,
      };
    });
  };

  handleBilling = ({ target }) => {
    let { name, value } = target;
    let billing = this.state.billing;
    billing[name] = value;

    switch (name) {
      case "address":
        billing.errors.address =
          value.length < 8 ? "You need to enter at-least 8 characters" : "";
        break;
      case "zip":
        billing.errors.zip =
          value.length < 6 ? "Zip contains 6 digit numbers" : "";
        break;
      default:
    }

    this.setState({
      billing,
    });
  };

  render() {
    let { shipping, billing, isSame } = this.state;
    let billingData = isSame ? shipping : billing;
    return (
      <div className="grid">
        <>
          {/* shipping form */}
          <form action="" className="flex flex-column border-form">
            <legend>Shipping Address</legend>

            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="e.g. New Delhi Vasant Vihar"
              onChange={this.handleInput}
              value={shipping.address}
              className={shipping.errors.address && "error"}
            />
            <span>{shipping.errors.address}</span>

            <label htmlFor="zip">ZIP/Postal Code</label>
            <input
              type="text"
              name="zip"
              id="zip"
              placeholder="e.g. 210431"
              onChange={this.handleInput}
              value={shipping.zip}
              className={shipping.errors.zip && "error"}
            />
            <span>{shipping.errors.zip}</span>

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="e.g. New Delhi"
              onChange={this.handleInput}
              value={shipping.city}
            />

            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="e.g. India"
              onChange={this.handleInput}
              value={shipping.country}
            />
          </form>

          {/* Billing form */}

          <form action="#" className="flex flex-column border-form">
            <legend>Billing Address</legend>

            <div>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                onChange={this.handleCheckBox}
              />
              <label htmlFor="checkbox"> Same as the Shipping Address?</label>
            </div>

            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="e.g. New Delhi Vasant Vihar"
              onChange={this.handleBilling}
              value={billingData.address}
              className={billing.errors.address && "error"}
            />
            <span>{billing.errors.address}</span>

            <label htmlFor="zip">ZIP/Postal Code</label>
            <input
              type="text"
              name="zip"
              id="zip"
              placeholder="e.g. 210431"
              onChange={this.handleBilling}
              value={billingData.zip}
              className={billing.errors.zip && "error"}
            />
            <span>{billing.errors.zip}</span>

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="e.g. New Delhi"
              onChange={this.handleBilling}
              value={billingData.city}
            />

            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="e.g. India"
              onChange={this.handleBilling}
              value={billingData.country}
            />
          </form>
        </>
      </div>
    );
  }
}

export default Forms;
