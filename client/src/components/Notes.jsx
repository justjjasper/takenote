import React from 'react';
import Note from '../components/Note.jsx'


const Notes = ({datas, updateFunc}) => {

  return (
   <div className="notes-list" >
     {datas.map((current) => {
       return (
         <Note updatefunc={updateFunc} key={current.id} data={current}/>
       )
     })}
   </div>

  )
}

export default Notes;



// return (
//   <div>
//     <h1>My Notes</h1>
//       <div className="notes-list">
//         <div className="note">
//           <div className="note-title"><h3>Defenestrations of Prague</h3></div>
//           <div className="note-category"><h4>History</h4></div>
//           <div className="note-desc">Three major incidents in the history of Bohemia in which people were defenestrated (thrown out of a window).</div>
//         </div>
//         <div className="note">
//           <div className="note-title"><h3>Hedgehog signaling pathway</h3></div>
//           <div className="note-category"><h4>Biology</h4></div>
//           <div className="note-desc">A signaling pathway that transmits information to embryonic cells required for proper cell differentiation.</div>
//         </div>
//         <div className="note">
//           <div className="note-title"><h3>Funcitonal Groups</h3></div>
//           <div className="note-category"><h4>Biology</h4></div>
//           <div className="note-desc">Specific groupings of atoms within molecules that have their own characteristic properties, regardless of the other atoms present in a molecule.</div>
//         </div>
//         <div className="note">
//           <div className="note-title"><h3>Giant Rabbit Attack on US President Jimmy Carter</h3></div>
//           <div className="note-category"><h4>History</h4></div>
//           <div className="note-desc">A 1979 incident in which US President Jimmy Carter was attacked by a giant swamp rabbit.</div>
//         </div>
//       </div>
//   </div>
// )