import React from 'react'
let count = 0

class Step_3 extends React.Component {

    handleIcon = (e) => {
        let check1 = document.getElementById('check1')
        let check2 = document.getElementById('check2')

        if (e.target.localName === 'a') {

            if (e.target.innerHTML === '<i class=\"fa-solid fa-user-nurse\"></i>') {
                count++
                e.target.classList.add('i')

                if (count === 2) {
                    e.target.classList.add('icon')
                    check1.classList.remove('i')
                    count = 0
                }
                if (check1.className !== 'icon') {
                    check1.classList.add('icon')
                    check1.classList.remove('i')
                }
            }
            
            
            if (e.target.innerHTML === '<i class=\"fa-solid fa-chalkboard-user\"></i>') {
                count++
                e.target.classList.add('i')

                // if user click again then make it deselect
                if (count === 2) {
                    e.target.classList.add('icon')
                    check1.classList.remove('i')
                    count = 0
                }

                if (check2.className !== 'icon') {
                    check2.classList.add('icon')
                    check2.classList.remove('i')
                }

            }
        }
    }

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <>
                <div className='flex'>
                    <a className='icon' onClick={this.handleIcon} id='check1'>
                        <i className="fa-solid fa-chalkboard-user"></i>
                    </a>

                    <a  className='icon' onClick={this.handleIcon} id='check2'>
                        <i className="fa-solid fa-user-nurse"></i>
                    </a>

                </div>
                <div>
                    <input id='one' type="radio" name='radio' />
                    <label htmlFor="one" className='font-09'>I want to add this option</label> <br />

                    <input id='two' type="radio" name='radio' value='The number two choice' />
                    <label htmlFor="two" className='font-09'>Let me click on this checkbox and choose come cool stuf..</label>

                    <hr />
                    <div className='right'>
                        <button onClick={this.props.pre} className='pre-btn'>Back</button>
                        <button>Submit </button>
                    </div>
                </div>

            </>
        )
    }
}

export default Step_3