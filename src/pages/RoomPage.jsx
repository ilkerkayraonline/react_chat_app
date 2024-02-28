import React from 'react'

const RoomPage = ({setRoom, setIsAuth}) => {
    //? formun gönderilmesi için çalışır
    const handleSubmit = (e) => {
        e.preventDefault();
        const room = e.target[0].value;
        setRoom(room.toUpperCase())
    }
  return (
    <form onSubmit={handleSubmit} className='room-page'>
        <h1>Chat Odası</h1>
        <p>Hangi Odaya Gireceksiniz</p>
        <input placeholder='ör:departman' type="text" />
        <button type='submit'>Odayı Gir</button>
        <button onClick={()=> {setIsAuth(false); 
        localStorage.removeItem("TOKEN");
        }} type='button'>Çıkış Yap</button>

    </form>
  )
}

export default RoomPage