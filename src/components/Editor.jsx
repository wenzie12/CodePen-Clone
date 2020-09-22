import React, { useState } from 'react'
// styles related to our code editor that we'll be using
import 'codemirror/lib/codemirror.css' 
// theme for our codepen using material design
import 'codemirror/theme/material.css' 
// import supported languages that we will use
import 'codemirror/mode/xml/xml' // same as html
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

// font-awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

// import the code editor that'll be using
import { Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props) {
  //descructure props
  const {
    language, 
    displayName,
    value,
    onChange
  } = props

  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${ open ? '' : 'collapsed'}`}>
    {/* title */}
      <div className="editor-title">
        { displayName }
        <button
          type="button"
          className="expand-colapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      {/* editor area */}
      <ControlledEditor 
        onBeforeChange={handleChange} 
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNUmbers: true
        }}
      />
  </div>
  )
}


{/* note: 'option props in ControlledEditor is coming from react-codemirror2' */}
/* 
npm for icons (font-awesome);

> yarn add or npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
*/