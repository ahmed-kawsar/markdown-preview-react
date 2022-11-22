import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const App = () => {
  const [markdown, setMarkdown] = useState('')
  return (
    <div>
      <header>
        <h2>React Markdown Preview</h2>
        <div className='underline'></div>
      </header>
      <main className='main'>
        <div className='input'>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>
        <div className='output'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </main>
    </div>
  )
}
export default App
