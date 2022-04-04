import React from "react"
import Lpoll from "./components/Lpoll"

function App() {
  return (
    <div >
      <Lpoll
      type='multiple'
      question='What you wanna ask?'
      results={resData}
      theme={customTheme}
      onVote={vote}
    />
    </div>
  )
}

export default App