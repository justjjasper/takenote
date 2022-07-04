import React, {useState} from 'react';

const AddNote = ({addFunc}) => {
  const [title, setTitle] = useState('')
  const [cate, setCate] = useState('')
  const [tag, setTag] = useState('')
  const [note, setNote] = useState('')

  var handleAdd = (e) => {

    addFunc(title, cate, tag, note)
  }
  return (
    <div>
      <h1>New Note</h1>
      <form>
        Title:
        <br/>
        <input onChange={e => setTitle(e.target.value)} value={title} className="note-label" type="text" placeholder="Title"/>
        <br/>
        Category:
        <br/>
        <input onChange={e => setCate(e.target.value)}  value={cate} className="note-label" type="text" placeholder="Category"/>
        <br/>
        Tagline:
        <br/>
        <input onChange={e => setTag(e.target.value)}  value={tag} className="note-label" type="text" placeholder="Tagline"/>
        <br/>
        <input onChange={e => setNote(e.target.value)}  value={note} className="note-input" height="700px" type="text" placeholder="Write your note here!"/>
        <br/>
        <button onClick={handleAdd} className="button">Save</button>
      </form>
    </div>
  )
};

export default AddNote;
