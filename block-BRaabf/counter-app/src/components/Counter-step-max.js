import React from 'react';
let step_Label = [5, 10, 15];
let counter_Label = ['increment', 'decrement', 'reset'];
let max_Label = [15, 100, 200];

class CounterMax extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            step: 5,
            max: 15
        }
    }
    render() {
        return (
            < section className='container' >
                <div className='div'>
                    <h2 className='center font-3'>{this.state.counter}</h2>
                    <article className='flex'>
                        <div>
                            <h2 className='center font-1'>Steps</h2>
                            {step_Label.map((label) => <button className={this.state.step === label ? 'active' : 'bg-nv'} key={label} onClick={
                                () => {
                                    this.setState({
                                        step: label
                                    })
                                }
                            }>{label}</button>)}
                        </div>

                        <div>
                            <h2 className='center font-1'>Max Value</h2>
                            {max_Label.map((label) => <button className={this.state.max === label ? 'active' : 'bg-nv'} key={label} onClick={
                                () => {
                                    this.setState({
                                        max: label
                                    })
                                }
                            }>{label}</button>)}
                        </div>
                    </article>
                    <div className='flex'>
                        {counter_Label.map((label) => <button className='bg-green' key={label} onClick={
                            () => {
                                if (label === 'increment') {

                                    if (this.state.max) {
                                        let r = Math.floor(this.state.max / this.state.step) * this.state.step

                                        this.setState({ counter: this.state.counter === this.state.max || this.state.counter === r ? this.state.counter : this.state.counter + this.state.step })
                                    } else {
                                        this.setState({
                                            counter: this.state.counter + this.state.step
                                        })
                                    }

                                }

                                if (label === 'decrement') {
                                    this.setState({
                                        counter: this.state.counter - this.state.step
                                    })
                                }

                                if (label === 'reset') {
                                    this.setState({
                                        counter: 0,
                                        step: 5,
                                        max: 15
                                    })
                                }


                            }
                        }>{label}</button>)}
                    </div>
                </div>
            </section >
        )
    }
}

export default CounterMax;