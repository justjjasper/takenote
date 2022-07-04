import React, {useState} from 'react'
import Notes from '../components/Notes.jsx';

var Note = ({data}) => {
   const [toggle, setToggle] = useState(false)

  return (
    <div>

    <div  onClick={() => {setToggle(!toggle)}} className="note">


     <div className="note-title"><h3>{data.title}</h3></div>
    {toggle &&<div className="note-category"><h4>{data.category}</h4></div>}
    {toggle && <div className="note-desc">{data.tagline}</div>}
    {toggle && <div className="note-desc">{data.note}</div>}



      </div>
    </div>
  )
}

export default Note