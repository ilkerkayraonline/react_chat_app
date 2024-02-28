import { addDoc, collection,onSnapshot,orderBy,query,serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/config';
import Message from '../components/Message';


const ChatPage = ({room, setRoom}) => {

    console.log(auth)

    

    const [messages, setMessages] = useState([])
   
    //? mesaj gönderilmesi 
    const handleSubmit = async(e) => {
        e.preventDefault();

     //? koleksiyonun referansını alma
     const messagesCol = collection(db,"messages")

     //? koleksiyona yeni döküman ekle
    await addDoc(messagesCol, {
        text: e.target[0].value,
        room,
        author:{
            name: auth.currentUser?.displayName,            
            id: auth.currentUser?.uid,
            photo: auth.currentUser?.photoURL,
        },
        createdAt:serverTimestamp(),
     })

     //? FORMU SIFIRLA
     e.target.reset();
      
    }


         //? bu odada bulunan mesajları anlık olarak alma
         useEffect(()=> {

            //? koleksiyonun referansını alma
        const messagesCol = collection(db,"messages")

        //? Filtreleme ayarları yap

        const q = query(messagesCol,where("room", "==", room), orderBy("createdAt","asc"))

           //! onSnapShot anlık olarak bir koleksiyondaki izler
           //! koleksiyon her değiştiğinde verdiğimiz fonksiyona
           //! koleksiyondaki dökümanları parametre olarak gönderir
           onSnapshot(q, (snapshot)=>{
        //? verileri geçici olarak tutacağımız bir dizi oluştur
        const tempMsg = [];

        //? dökümanları dön, verilerine eriş, diziye aktar

        snapshot.docs.forEach((doc) => {
           tempMsg.push(doc.data())
        })

        //? mesajları state e aktar
        setMessages(tempMsg)
           })
        },[])


  return (
    <div className='chat-page'>
        <header>
            <p>{auth.currentUser?.displayName}</p>
            <p>{room}</p>
            <button onClick={() => setRoom(null)} >Farklı Oda</button>
        </header>
        <main>{messages.map((data,i) => (
            <Message key={i}  data={data} /> 
                   
            ))}</main>
        <form onSubmit={handleSubmit}>
            <input required placeholder='Mesajınızı Yazınız' type="text" />
            <button>Gönder</button>
        </form>
    </div>
  )
}

export default ChatPage