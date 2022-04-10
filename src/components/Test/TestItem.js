import React, { useState } from 'react'


import './TestItem.css'
import TestDate from './TestDate'
import Card from '../UI/Card'

const TestItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('Teststst')

  const clickHandler = () => {
    setTitle('TestState');
    console.log(title);
  }
  
  return (
    <Card className="test-item">
      <TestDate date={props.date} />
      <div className="test-item__description">
        <h2>{title}</h2>
        <div className="test-item__price">฿{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  )
}

export default TestItem
