import React from 'react';
import Step1 from './Step_1';
import Step2 from './Step_2';
import Step3 from './Step_3';
import '../style/index.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,//default step is 1,
    }

  }

  next = () => {
    let currentNext = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentNext = currentNext >= 2 ? 3 : currentNext + 1
    this.setState({
      currentStep: currentNext
    })
  }

  pre = () => {
    let currentPre = this.state.currentStep
    // If the current step is 2 or 3,  then subtract one on "previous" button click
    currentPre = currentPre <= 1 ? 1 : currentPre - 1
    this.setState({
      currentStep: currentPre
    })

  }


  render() {
    let step = this.state.currentStep
    let image
    if (step === 1) {
      image = 'step-1.png'
    } else if (step === 2) {
      image = 'step-2.png'
    } else {
      image = 'step-3.png'
    }
    console.log(this.state.currentStep)
    return (
    
      <>
      <section>
        <article className='justify-space'>

          <img src={'/images/' + image} />



          <div className='padding-right padding'>

            <div className='flex align-center'>

              <span className={`${this.state.currentStep === 1 && 'bg-blue' ||this.state.currentStep > 1 && 'bg-blue-l' } span font-09`}> {this.state.currentStep > 1 ? '✔' : 1} </span>
              <p className='font-09'>Sign Up</p>


              <span className={`${this.state.currentStep=== 2 && 'bg-blue' ||this.state.currentStep > 2 && 'bg-blue-l' } margin-left-1 span font-09`} > {this.state.currentStep > 2 ? '✔' : 2}</span>
              <p className='font-09'>Message</p>


              <span  className={`${this.state.currentStep=== 3 && 'bg-blue' ||this.state.currentStep > 3 && 'bg-blue-l' } margin-left-1 span font-09`}> 3</span>
              <p className='font-09'>Checkbox</p>
            </div>
            <hr />


            <p className='step font-09'>Step{this.state.currentStep}/3</p>

            <form action='#' onSubmit={this.handleSubmit}>
              <Step1
                currentStep={this.state.currentStep}
                next={this.next}
              />

              <Step2
                currentStep={this.state.currentStep}
                next={this.next}
                pre={this.pre}
              />

              <Step3
                currentStep={this.state.currentStep}
                pre={this.pre}
              />

            </form>
          </div>
        </article>
        </section>
      </>
    )

  }
}

export default App;
