import { useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";

const AuthPage = ({setIsAuth}) => {

  const [name, setName] = useState("");
  //? Giriş Butonuna tıklanınca
  const handleClick = () => {
  
    signInWithPopup(auth, provider)
    //? Giriş işlemi başarılı olursa:
    .then((data) => {
    //? State'i güncelle
    setIsAuth(true)
    //? refresh token'i localde sakla
    localStorage.setItem("TOKEN", data.user.refreshToken)   
    }
    );
  };
  return (
    <div className=" container">
      <div className="auth">
        <h1>Chat Odası</h1>

        <p>Devam Etmek İçin Giriş Yapınız</p>

        <button onClick={handleClick}>
            <img src="/logo.png" />
            <span>Google İle Giriş</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
