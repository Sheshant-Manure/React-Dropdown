import Dropdown from './Dropdown'
import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
   <>
    <Dropdown showMenu = { showMenu } setShowMenu = { setShowMenu } />
   </>
  )
}

export default App;
