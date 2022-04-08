import './TestDate.css'

const TestDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'short' })
  const year = props.date.getFullYear()
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })

  return (
    <div className='test-date'>
      <div className='test-date__month'>{month}</div>
      <div className='test-date__year'>{year}</div>
      <div className='test-date__day'>{day}</div>
    </div>
  )
}

export default TestDate
