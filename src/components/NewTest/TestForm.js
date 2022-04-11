import React, { useState } from 'react'
import './TestForm.css'

const TestForm = () => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmouint, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value }
    // });
    
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    // setUserInput(() => {});
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
    // setUserInput(() => {});
  }

  return (
    <form>
      <div className="new-test__controls">
        <div className="new-test__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-test__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-test__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-04-04"
            max="2024-04-04"
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
