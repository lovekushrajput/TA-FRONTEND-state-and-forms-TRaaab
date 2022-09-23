import React from 'react'


class Step_1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            dob: '',
            email: '',
            address: '',
            errors: {
                email: ''
            }
        }

    }

    validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    handleChange = (event) => {
        const { name, value } = event.target
        let errors = this.state.errors

        switch (name) {
            case ('email'):
                errors.email = this.validateEmail(value) ? '' : 'Email is not valid'
                break;
            default:
        }
        this.setState({
            errors, [name]: value
        })
    }

    render() {
        let { firstname, lastname, dob, email, address } = this.state
        if (this.props.currentStep !== 1) {
            return null
        }

        return (
            <div >
                <legend>Sign UP</legend>

                <div className='step1 flex justify-space'>
                    <div>
                        <label htmlFor="firstName">First Name</label> <br />
                        <input
                            type="text"
                            name="firstname"
                            id="firstName"
                            placeholder="Enter your first name"
                            value={firstname}
                            onChange={this.handleChange}
                            className={'input'}
                        />
                    </div>
                    <div>

                        <label htmlFor="lastName">Last Name</label><br />
                        <input
                            type="text"
                            name="lastname"
                            id="lastName"
                            placeholder="Enter your last name"
                            value={lastname}
                            onChange={this.handleChange}
                            className={'input'}
                        />
                    </div>

                    <div>
                        <label htmlFor="dob"> Date of Birth</label> <br />
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            placeholder="Enter your DOB"
                            value={dob}
                            onChange={this.handleChange}
                            className={'input'}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            onChange={this.handleChange}
                            value={email}
                            className={`${ this.state.errors.email && 'error' } input`}
                        />
                        <span style={{ color: 'red',fontSize: '0.9rem',marginTop: '0.3rem',display: 'inline-block' }}>{this.state.errors.email}</span>
                    </div>

                </div>



                <label htmlFor="address">Address</label><br />
                <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    value={address}
                    onChange={this.handleChange}
                    className={'input'}
                />

                <hr />
                <div className='right'>
                    <button onClick={this.props.next}> Next Step </button>
                </div>
            </div>
        )
    }

}

export default Step_1