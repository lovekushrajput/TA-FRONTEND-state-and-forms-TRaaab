let tags = ["S", "XS", "M", "X", "L", "XL", "XXL"]


function Tags(props) {
    return (
        <ul> {tags.map((tag, i) => <li key={i} onClick={props.handleTags} className='flex justify-center align-center'> {tag} </li>)} </ul>
    )
}

export default Tags