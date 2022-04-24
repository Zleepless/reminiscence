import React from 'react'
import TestMultiItem from './components/Test/TestMultiItem'
import NewTest from './components/NewTest/NewTest'
import Dropzone from 'react-dropzone'
import DropZoneBox from './components/TestModule/DropZoneBox'

const App = () => {
  const expenses = [
    // Dummy Data
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
      <h2 className="text-3xl font-bold underline">Test</h2>
      <NewTest />
      <TestMultiItem items={expenses} />
      
      <button class="bg-sky-600 hover:bg-sky-700 ...">Save changes</button>
    </div>
  )
}

export default App
