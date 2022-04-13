import React, { useState } from 'react'
import './TestForm.css'

const TestForm = () => {
  const [enteredTitle, setEnteredTitle] = useState()
  const [enteredAmount, setEnteredAmount] = useState()
  const [enteredDate, setEnteredDate] = useState()

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const testData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(testData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-test__controls">
        <div className="new-test__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-test__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-test__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-04-04"
            max="2024-04-04"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-test__actions">
        <button type="submit">Add something</button>
      </div>
    </form>
  )
}

export default TestForm
