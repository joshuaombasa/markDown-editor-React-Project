import React from 'react'
import Split from 'react-split';

import Notes from './Notes';
import './App.css'

function App() {

  return (
    <div>
      <Split sizes={[30, 50]} direction="horizontal" className='split--container' >
        <Notes />
        <div className='panel--2'>Panel 2</div>
      </Split>

    </div>
  )
}

export default App
