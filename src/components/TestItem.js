import './TestItem.css'
import TestDate from './TestDate'

const TestItem = (props) => {
  return (
    <div className="test-item">
      <TestDate date={props.date} />
      <div className="test-item__description">
        <h2>{props.title}</h2>
        <div className="test-item__price">฿{props.amount}</div>
      </div>
    </div>
  )
}

export default TestItem
