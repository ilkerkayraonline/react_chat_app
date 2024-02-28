import "./sytles/style.scss"
import React, { useState } from 'react'
import AuthPage from './pages/AuthPage'
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";


const App = () => {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("TOKEN"));
  const [room,setRoom] = useState(null);

  //? Eğer ki yetkisi yoksa > giriş sayfasına
  if(!isAuth){
    return <AuthPage setIsAuth={setIsAuth}/>;
  }

  console.log(room)
  //? Yetkisi varsa > oda seçiliyse chat sayfası , değilse oda seçme sayfası
  return (
    <div className="container"> 
    {room ? <ChatPage room={room} setRoom={setRoom}/> : <RoomPage setRoom={setRoom} setIsAuth={setIsAuth}/> }
    </div>
    
  )
}

export default App