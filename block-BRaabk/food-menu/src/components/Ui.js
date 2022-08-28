import React from 'react';
import data from '../data/data.json'
import Menu from './Menu';

class Ui extends React.Component {
  constructor() {
    super()
    this.state = {
      tags: ''
    }
  }

  handleTag = (tags) => {
    this.setState({
      tags: tags.toLowerCase()
    })
  }

  render() {
    
    return (
      <>
        <h1 className='center'>our menu</h1>
        <hr />
        <ul className='flex justify-center'>
          {['All', 'Breakfast', 'Lunch', 'Shakes'].map((tag) => <li key={tag} onClick={() => this.handleTag(tag)}>{tag}</li>)}
        </ul>


        <div className='flex justify-space flex-wrap'>
          { data.filter( (food) => {  return <Menu key={food.id} food={food} /> }) }
          {/* // food.category === this.state.tags || this.state.tags === '' || this.state.tags === 'all'
          //  ? <Menu key={food.id} food={food} /> 
          //  : '' */}
          {/* )} */}
        </div>

      </>
    )
  }
}

export default Ui;
