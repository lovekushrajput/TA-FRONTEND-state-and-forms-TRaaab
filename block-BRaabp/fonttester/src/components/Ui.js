import React from 'react';

class Ui extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      range: 50
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleRange = (e) => {
    this.setState({
      range: e.target.value
    })
  }

  render() {
    let family = [{ name: 'Changa', author: 'Eduardo Tunni', style: 'variable' }, { name: 'Cinzel', author: 'Natanael Gama', style: 'variable' }, { name: 'DynaPuff', author: 'Toshi Omagari, Jennifer Daniel', style: 'variable' }, { name: 'Orbitron', author: 'Matt McInerney', style: 'variable' }, { name: 'Qwitcher Grypen', author: 'Robert Leuschke', style: '2 style' }, { name: 'Roboto', author: ' Christian Robertson', style: '12 style' }, { name: 'Roboto', author: ' Christian Robertson', style: '12 style' }, { name: 'Syncopate', author: 'Astigmatic', style: '2 style' }, { name: 'Tangerine', author: 'Toshi Omagari', style: '2 style' }, { name: 'Teko', author: 'Indian Type Foundry', style: '5 style' }, { name: 'Ubuntu', author: 'Dalton Maag', style: '8 style' }]
    return (
      <>
        <div className='menu'>
          <div>
            <input type="text" placeholder='Type Something...' onChange={this.handleChange} />
            <div>
              <span>{this.state.range}px</span>
              <input type="range" name="vol" min="50" max="300" onChange={this.handleRange} />
            </div>
          </div>

        </div>

        <div className='grid-container'>
          {family.map((font) => {
            return <div className='grid-item'>
              <div>
                <div>
                  <h2>{font.name}</h2>
                  <p >{font.author}</p>
                </div>

                <span>{font.style}</span>

              </div>
              <h1 style={{ fontFamily: font.name, wordBreak: 'break-word', fontSize: this.state.range + 'px' }}>{this.state.value ? this.state.value : 'Whereas recognition of the inherent dignity'}</h1>
            </div>
          })}
        </div>
      </>

    )
  }

}

export default Ui