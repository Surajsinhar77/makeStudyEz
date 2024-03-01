import { useState } from 'react';
import './App.css';
import { Container } from '@chakra-ui/react';
import Chat from './Components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container className="border text-red-50 container m-auto">
        <Container className="container miniContainer">
          <Chat/>
        </Container>
      </Container>
    </>
  )
}

export default App
