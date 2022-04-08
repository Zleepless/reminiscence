import React from 'react'
import TestMultiItem from './components/TestMultiItem'

function App(props) {
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
      <h2>Test</h2>
      <TestMultiItem items={expenses} />
    </div>
  )
}

export default App
