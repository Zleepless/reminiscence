import './TestItem.css'

const TestItem = (props) => {

  return (
    <div className="test-item">
      <div>{props.date.toDateString()}</div>
      <div className="test-item__description">
        <h2>{props.title}</h2>
        <div className="test-item__price">฿{props.amount}</div>
      </div>
    </div>
  )
}

export default TestItem
