import { useState } from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import Chat from './Components/Chat';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box width={"75%"} className="border text-red-50 container m-auto">
          <Chat></Chat>
      </Box>
    </>
  )
}

export default App
