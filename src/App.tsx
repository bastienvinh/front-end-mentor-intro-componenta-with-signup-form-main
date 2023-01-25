import { Fragment } from "react"

import './App.scss'
import Form from './components/Form'
import Introduction from './components/Introduction'
import SecondPart from './components/SecondPart'

function App() {
  return (
    <Fragment>
      <div className="background"></div>
      <div className="content">
        <Introduction />
        <SecondPart />
      </div>
    </Fragment>
  )
}

export default App
