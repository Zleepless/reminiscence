import './TestItem.css'
import TestDate from './TestDate'
import Card from '../UI/Card'

const TestItem = (props) => {
  return (
    <Card className="test-item">
      <TestDate date={props.date} />
      <div className="test-item__description">
        <h2>{props.title}</h2>
        <div className="test-item__price">฿{props.amount}</div>
      </div>
    </Card>
  )
}

export default TestItem
