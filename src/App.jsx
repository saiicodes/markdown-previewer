import React, { useState } from 'react'
import { marked } from 'marked'
import './App.css'

// Set Options for Marked
marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
  gfm: true,
})

function App() {
  const [markdown, setMarkdown] = useState(placeholder)

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className='container md-container'>
      <div className='card md-card lg-card'>
        {/* Editor and Previewer */}
        <div className='edit-container lg-edit-container'>
          <div className='editor-container'>
            <div className='title-box'>
              <h4 className='title'>Editor</h4>
            </div>

            <textarea
              id='editor'
              type='text'
              onChange={handleChange}
              value={markdown}
              className='editor md-editor lg-editor'
            />
          </div>
          <div className='previewer-container'>
            <div className='title-box'>
              <h4 className='title'>Previewer</h4>
            </div>
            <div
              id='preview'
              dangerouslySetInnerHTML={{
                __html: marked.parse(markdown),
              }}
              className='previewer md-previewer lg-previewer'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
