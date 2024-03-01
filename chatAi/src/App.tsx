import { useState } from 'react';
import './App.css';
import { Container } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container className="border text-red-50 container m-auto">
        <Container className="container miniContainer">
          
        </Container>
      </Container>
    </>
  )
}

export default App
