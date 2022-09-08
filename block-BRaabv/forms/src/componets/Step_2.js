import React from 'react'


class Step_2 extends React.Component {

    render() {
        if (this.props.currentStep === 2) {

            return (
                <div>

                    <legend>Message</legend>

                    <label htmlFor="message">Message</label> <br />
                    <textarea name="message" id="message" cols="40" rows="6"></textarea>

                    <div className='flex'>
                        <div className='flex'>
                            <input id='one' type="radio" name='radio' value='The number one choice' />
                            <label htmlFor="one">The number one choice</label> <br />
                        </div>
                        <div className='flex'>
                            <input id='two' type="radio" name='radio' value='The number two choice' />
                            <label htmlFor="two">The number two choice</label>
                        </div>
                    </div>
                    <hr />
                    <div className='right'>
                    <button onClick={this.props.pre} className='pre-btn'>Back</button>
                    <button onClick={this.props.next}> Next Step </button>
                    </div>
                </div>
            )
        }
    }
}

export default Step_2