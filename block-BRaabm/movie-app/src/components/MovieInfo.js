
function MovieInfo(props) {
    let { Title, Year, Released, Runtime, Genre, Director, Writer, Actors, Language, Country, Awards, imdbRating, totalSeasons, Images } = props.movie
    return (
        <>
            <span className="close" onClick={(e) => e.target.parentElement.style.display = 'none'}>❌</span>

            <div className="images">
                {Images.map((image) => <img src={image} alt={image} />)}
            </div>
            <h2 className='center'>Name: {Title}</h2>
            <p>Year: {Year}</p>
            <p>Released: {Released}</p>
            <p>Runtime: {Runtime}</p>
            <p>Genre: {Genre}</p>
            <p>Director: {Director}</p>
            <p>Writer: {Writer}</p>
            <h3>Actors: {Actors}</h3>
            <p>Language: {Language}</p>
            <p>Country: {Country}</p>
            <p>Awards: {Awards}</p>
            <p>imdbRating: {imdbRating}</p>
            <p>totalSeasons: {totalSeasons}</p>
        </>
    )
}


export default MovieInfo