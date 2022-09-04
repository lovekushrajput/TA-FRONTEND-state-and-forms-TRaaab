import React from 'react'

class Validation extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            cnf_password: '',
            errors: {
                username: '',
                email: '',
                password: '',
                cnf_password: ''
            }
        }
    }

    validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    handleChange = ({ target }) => {
        let { name, value } = target
        let errors = this.state.errors

        switch (name) {
            case "username":
                errors.username = value.length < 4 ? 'Username must be at least 3 charcters' : ""
                break;
            case "email":
                errors.email = this.validateEmail(value) ? '' : 'Email is not valid'
                break;
            case "password":
                errors.password = value.length < 6 ? 'password must be of 6 characters' : ''
                break;
            case 'cnf_password':
                errors.cnf_password = value ? '' : 'password is required'
                break;
            default:
        }
        this.setState({
            errors, [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let { username, email, password, cnf_password } = this.state
        let error = this.state.errors

        if (username === '' && email === "" && password === '' && cnf_password === '') {
            error.username = 'username is required'
            error.email = 'email is required'
            error.password = 'password is required'
            error.cnf_password = 'Confirm password is required'
        } else if (username === '') {
            error.username = 'username is required'
        } else if (email === "") {
            error.email = 'email is required'
        } else if (password === '') {
            error.password = 'password is required'
        } else if (cnf_password === '') {
            error.cnf_password = 'Confirm password is required'
        } else {
            this.setState({
                username: '',
                email: '',
                password: '',
                cnf_password: ''
            })
        }
        this.setState({ error })
    }

    render() {
        let { username, email, password, cnf_password } = this.state.errors
        return (
            <div className='height-100vh flex justify-center align-center'>
                <form action="#" className='flex flex-column form-validation' onSubmit={this.handleSubmit}>
                    <h2>Register With Us</h2>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} className={username && 'error'} />
                    <span>{username}</span>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} className={email && 'error'} />
                    <span>{email}</span>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} className={password && 'error'} />
                    <span>{password}</span>

                    <label htmlFor="cnf_password">Confirm Password</label>
                    <input type="password" name="cnf_password" id="cnf_password" placeholder="Enter Password again" value={this.state.cnf_password} onChange={this.handleChange} className={cnf_password && 'error'} />
                    <span>{cnf_password}</span>

                    {/* <div> */}
                    <input type="submit" value='Submit' id='btn' />
                    {/* </div> */}
                </form>
            </div>
        )
    }
}

export default Validation