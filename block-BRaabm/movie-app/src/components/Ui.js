import React from 'react'
import Moviesdata from '../data/data.json'
import MovieInfo from './MovieInfo'

class Ui extends React.Component {
    constructor() {
        super()
        this.state = {
            movie: ''
        }
    }
    handleClick = (movie) => {
        this.setState({
            movie: movie
        })

        let popup = document.querySelector('.popup')
        popup.style.display = 'block'
        popup.style.height = '100%'
        popup.style.padding = '1rem'
    }

    render() {
        return (
            <>
                <ul className='grid-container'>
                    {
                        Moviesdata.map((movie,i) => {
                            return (
                                <>
                                    <li key={i} className='grid-item'>
                                        <figure>
                                            <img src={movie.Poster} alt={movie.Metascore} />
                                        </figure>

                                        <div>
                                            <h2 className='center'>{movie.Title}</h2>
                                            <p className='center'>{movie.Released}</p>
                                        </div>

                                        <div className='overlay'>
                                            <button onClick={() => this.handleClick(movie)}>More Info</button>
                                        </div>



                                    </li>
                                </>
                            )
                        })
                    }

                </ul>
                <div className='parent'>
                <div className='popup'>
                    { this.state.movie?<MovieInfo key={1}  movie={this.state.movie} />: ''}
                </div>
                </div>
            </>
        )
    }
}


export default Ui
