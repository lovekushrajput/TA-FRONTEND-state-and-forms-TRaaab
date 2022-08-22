import React from 'react';
let step_Label = [5, 10, 15];
let counter_Label = ['increment', 'decrement', 'reset'];


class CounterStep extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            step: 1,
        }
    }
    render() {
        return (
            <>
                <section className='container'>
                    <div className='div'>
                        <h2 className='center font-3'>{this.state.counter}</h2>
                        <h2 className='center font-1'>Steps</h2>
                        <div className='flex width-50' >
                            {/* steps buttons */}
                            {step_Label.map((label) => <button className='bg-nv' key={label} onClick={
                                (e) => {
                                    e.target.classList = 'active'
                                    this.setState({
                                        step: label
                                    })
                                }
                            }>{label}</button>)}
                        </div>

                        <div className='flex'>
                            {/* counter-buttons */}
                            {counter_Label.map((label) => <button className='bg-green' key={label} onClick={
                                () => {
                                    if (label === 'increment') {
                                        this.setState({
                                            counter: this.state.counter + this.state.step
                                        })

                                    }

                                    if (label === 'decrement') {
                                        this.setState({
                                            counter: this.state.counter - this.state.step
                                        })
                                    }

                                    if (label === 'reset') {
                                        this.setState({
                                            counter: 0,
                                            step: 1
                                        })
                                    }


                                }
                            }>{label}</button>)}
                        </div>

                    </div>
                </section>

            </>
        )
    }
}

export default CounterStep;