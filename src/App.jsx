import React from 'react'
import Split from 'react-split';

import Notes from './Notes';
import './App.css'

function App() {

  const [notesData, setnotesData] = React.useState(['Note 1', 'Note 2'])

  

  function addNote() {
    console.log('clickded')
  }

  return (
    <div>
      <Split sizes={[30, 50]} direction="horizontal" className='split--container' >
        <Notes 
        notesData={notesData}
        addNote={addNote}
        />
        <div className='panel--2'>Panel 2</div>
      </Split>

    </div>
  )
}

export default App
