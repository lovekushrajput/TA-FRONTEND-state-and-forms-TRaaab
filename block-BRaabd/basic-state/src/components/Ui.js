import React from 'react';
let data = ['basketball', 'cricket', 'laptop', 'phone', 'pubg', 'tiger']

class Ui extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    handleClick = (e) => {
        this.setState({
            name: e.target.innerText === 'PUBG' ? e.target.innerText + '.jpeg' : e.target.innerText + '.jpg'
        })
    }
    render() {

        return (
            <>
                < div >
                    {data.map((elm) => <button key={elm} onClick={this.handleClick}>{elm}</button>)}
                </div>
                <center>
                <figure>
                <img src={'/images/' + this.state.name} alt={this.state.name} />
                </figure>
                </center>
             
            </>
        )

    }
}

export default Ui;