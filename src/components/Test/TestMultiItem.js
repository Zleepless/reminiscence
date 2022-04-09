import './TestMultiItem.css'
import Card from '../UI/Card'
import TestItem from './TestItem'

const TestMultiItem = (props) => {
  return (
    <Card className='test'>
      <TestItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <TestItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <TestItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <TestItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  )
}

export default TestMultiItem
