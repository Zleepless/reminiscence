import React from "react"
import './TestForm.css'

const TestForm = () => {
  return <form>
    <div className="new-test__controls">
      <div className="new-test__control">
        <label>Title</label>
        <input type='text' />
      </div>
      <div className="new-test__control">
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' />
      </div>
      <div className="new-test__control">
        <label>Date</label>
        <input type='date' min='2022-04-04' max='2024-04-04' />
      </div>
    </div>
    <div className="new-test__actions">
      <button type='submit'>Add something</button>
    </div>
  </form>
}

export default TestForm;