
import { useState } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import { ThemeContext } from './contexts/themeContext';
import Home from './pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import PreviousYearPaper from './pages/PreviousYearPaper';
import Paper from './pages/Paper';
import Lectures from './pages/Lectures';
import Courses from './pages/Courses';
import Auth from './pages/auth/Auth';
import DiscussionRoom from './pages/DiscussionRoom';
import { ActiveChatContext } from './contexts/activeChatContext';
import VerifyAccount from './pages/auth/VerifyAccount';
function App() {
  const [theme, setTheme] = useState("light");
  const [activeChat,setActiveChat] = useState('none')
  return (
<>
<ThemeContext.Provider value={{theme,setTheme}}>
<ActiveChatContext.Provider value={{activeChat,setActiveChat}}>



  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path='/Auth' element={<Auth></Auth>}></Route>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/pyp' element={<PreviousYearPaper></PreviousYearPaper>}></Route>
  <Route path='/courses' element={<Courses></Courses>}/>
  <Route path='/paper/:id' element={<Paper></Paper>}></Route>
  <Route path='/chat-room' element={<DiscussionRoom></DiscussionRoom>}></Route>
  <Route path='/account/verify' element={<VerifyAccount></VerifyAccount>}></Route>
  </Routes>



  </BrowserRouter>
  </ActiveChatContext.Provider>

</ThemeContext.Provider>

</>
  );
}

export default App;
