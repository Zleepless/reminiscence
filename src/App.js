import React from 'react'
import TestMultiItem from './components/Test/TestMultiItem'
import NewTest from './components/NewTest/NewTest'
import Dropzone from 'react-dropzone'

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
      <h2>Test</h2>
      <NewTest />
      <TestMultiItem items={expenses} />
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  )
}

export default App
