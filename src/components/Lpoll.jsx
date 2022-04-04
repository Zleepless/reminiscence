import { LeafPoll, Result } from 'react-leaf-polls'

// Persistent data array (typically fetched from the server)
const resData = [
  { text: 'Answer 1', votes: 0 },
  { text: 'Answer 2', votes: 0 },
  { text: 'Answer 3', votes: 0 }
]

// Object keys may vary on the poll type (see the 'Theme options' table below)
const customTheme = {
  textColor: 'black',
  mainColor: '#00B87B',
  backgroundColor: 'rgb(255,255,255)',
  alignment: 'center'
}

function vote(item: Result, results: Result[]) {
  // Here you probably want to manage
  // and return the modified data to the server.
}

export default Lpoll;