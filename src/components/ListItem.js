import React from 'react'
import { Link } from 'react-router-dom'

let getTitle = (note) =>{ //to create a title automatically
    const title = note.body.split('\n')[0]
    if(title.length > 45){
        return title.slice(0,45)
    }
    return title
}

let getTime = (note) =>{
    return new Date (note.updated).toLocaleDateString()
}

let getContent = (note) => //To get content after the title
{
    let title  = getTitle(note)
    let content = note.body.replaceAll('\n','') //removes the body new line with ''
    content = content.replaceAll(title,'') //removes the title contents with ''

    if(content.length > 30){
        return content.slice(0,30) +'...'
    } else { return content }
}

const ListItem = ({note}) => {
    return (  
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item"> 
                <h3>{getTitle(note)}</h3>
                <p>
                    <span>{getTime( note )}{getContent( note )}</span>
                </p>
            </div> 
        </Link>
    )
}
export default ListItem