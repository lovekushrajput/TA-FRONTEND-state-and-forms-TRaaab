import React from "react";
import data from '../data/data'

class Ui extends React.Component {
    constructor(pros) {
        super(pros)
        this.state = {
            answer: '',
            iconName: '',
            index: ''
        }
    }
    handleClick = (ans, i) => {
        this.setState({ answer: this.state.answer === '' ? ans : '', iconName: this.state.iconName === '' || this.state.iconName === 'up' ? 'down' : 'up', index: i })
    }
    render() {
        return (
            <ul className="container">
                {data.map((elm, i) => {
                    return <li key={elm.Q} >
                        <div>
                            <h2>{elm.Q}</h2>
                            <i className={this.state.index === i ? 'fa-solid fa-hand-point-' + this.state.iconName : 'fa-solid fa-hand-point-up'} onClick={() => this.handleClick(elm.A, i)}></i>
                        </div>

                        {this.state.answer === elm.A ? <p>{this.state.answer}</p> : ''}
                    </li>
                })}
            </ul>
        )
    }
}

export default Ui;