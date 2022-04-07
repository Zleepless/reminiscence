import React from 'react'
import TestItem from './components/TestItem'

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Test1',
      amount: 11111,
      date: new Date(2022, 1, 2),
    },
    {
      id: 2,
      title: 'Test2',
      amount: 2222,
      date: new Date(2022, 1, 22),
    },
    {
      id: 3,
      title: 'Test3',
      amount: 3333,
      date: new Date(2022, 11, 2),
    },
    {
      id: 4,
      title: 'Test4',
      amount: 444,
      date: new Date(2022, 1, 24),
    },
  ]

  return (
    <div>
      Test
      <TestItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <TestItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <TestItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <TestItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  )
}

export default App
