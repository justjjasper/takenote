import React, {useState} from 'react'
import Notes from '../components/Notes.jsx';

var Note = ({data, updatefunc}) => {
   const [toggle, setToggle] = useState(false)

   const [togCat, setTogCat] = useState(false)
   const [togEntry, setTogEntry]  = useState('')
   // fun should accept data.id and entry

   const [togTit, setTogTit] = useState(false)
   const [togTag, setTogTag] = useState(false)
   const [togNote, setTogNote] = useState(false)

   var update = () => {
     updatefunc(data.id, togEntry)
     setTogCat(false)
     setTogTit(false)
     setTogNote(false)
     setTogTag(false)
     setTogEntry('')
   }

  return (
    <div>

    <div  className="note">

    <button onClick={() => {setToggle(!toggle)}} >Show Note</button>

     <div onClick={() => {setTogTit(!togTit)}} className="note-title"><h3>{data.title}</h3></div>
    {togTit && <div> <input  placeholder="Edit Title" onChange={e => setTogEntry(e.target.value)} type="text" value={togEntry} ></input>
    <button onClick={update} >Update!</button>
    </div>
    }

    <br/>

    {toggle &&<div onClick={()=> {setTogCat(!togCat)}} className="note-category"><h4>{data.category}</h4></div>}
    {togCat && <div>
       <input  placeholder="Edit Category" onChange={e => setTogEntry(e.target.value)} type="text" value={togEntry} ></input>
       <button onClick={update}  >Update!</button>
       </div>
       }


    {toggle &&  <div  onClick={()=> {setTogTag(!togTag)}} className="note-desc">{data.tagline}</div>}
    {togTag && <div>
      <input  placeholder="Edit Tagline" onChange={e => setTogEntry(e.target.value)} type="text" value={togEntry} ></input>
      <button onClick={update}  >Update!</button>
      </div>}


    {toggle && <div  onClick={()=> {setTogNote(!togNote)}} className="note-desc">{data.note}</div>}
    {togNote && <div>
      <input  placeholder="Edit Note" onChange={e => setTogNote(e.target.value)} type="text" value={togEntry} ></input>
      <button onClick={update}  >Update!</button>

       </div>}
    <button>Hidden</button>
    <button>Starred</button>



      </div>
    </div>
  )
}

export default Note