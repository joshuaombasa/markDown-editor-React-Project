import React from 'react'
import Split from 'react-split';

import Notes from './Notes';
import Editor from './Editor';
import './App.css'

function App() {

  const [notesData, setnotesData] = React.useState([])

  const [faultData, setfaultData] = React.useState(
    {
      faultheader: '',
      faultdecsription: ''
    }
  )

  function handleChange(event) {
    const { name, value } = event.target
    setfaultData((prevfaultData) => {
      return {
        ...prevfaultData,
        [name]: value
      }
    })
  }

  function submitForm(event) {
    event.preventDefault() 
    setnotesData((prevNotesData) => {
      return [...prevNotesData, faultData]
    })
}



  function addNote() {
    setnotesData((prevnotesData) => {
      return [...prevnotesData, `Note ${prevnotesData.length + 1}`]
    })
  }

  return (
    <div>
      <Split sizes={[40, 50]} direction="horizontal" className='split--container' >
        <Notes
          notesData={notesData}
          addNote={addNote}
        />
        <Editor
          faultData={faultData}
          setfaultData={setfaultData}
          handleChange={handleChange}
          submitForm={submitForm}
        />
      </Split>

    </div>
  )
}

export default App
