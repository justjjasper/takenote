import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx'
var axios = require('axios');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'list',
      notes: []
    };

    this.add = this.add.bind(this)
    this.update = this.update.bind(this)
  }

  update(id, context) {
    axios.patch('/api/notes', { id: id, context: context})
  }
  changePage(page){
    this.setState({
      page: page
    })
  }

  pageRouter(){
    if(this.state.page === 'list'){
      return <Notes updateFunc={this.update} datas= {this.state.notes} />
    } else if (this.state.page === 'newNote'){
      return <AddNote addFunc={this.add} />
    }
  }

  add(tit, cat, tag, note) {
    axios.post('/api/notes', {title: tit, category: cat, tagline: tag, note: note})
    .then((val) => {
      this.setState({notes: val.data})
    })
    .catch((err) => {console.log('err in axios.post')})
  }

  componentDidMount() {
    axios.get('/api/notes')
    .then((val) => {
      this.setState({notes: val.data})
      console.log(this.state.notes)
    })
    .catch((err) => {console.log('err in componentMount')})
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <div className="nav">
          <span className="title"
            onClick={() => this.changePage('list')}>
            Take Note!
          </span>
          <span className={this.state.page === 'list'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('list')}}>
            All Notes
          </span>
          <span className={this.state.page === 'newNote'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('newNote')}}>
            New Note
          </span>
          </div>
        </div>
        <div className="content">
          {this.pageRouter()}
        </div>

      </div>
    )
  }
}

export default App;
