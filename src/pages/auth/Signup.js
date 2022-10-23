import { AuthStyle } from "./AuthStyle";
import logoImg from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import axios from "axios";
import { url } from '../../constants/urls';
import { useState } from 'react';
import { ThreeDots } from  'react-loader-spinner'

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function eventHandler(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const obj = {
      email: form[0].value,
      password: form[1].value,
      name: form[2].value,
      image: form[3].value
    }

    axios.post(url.signUp, obj)
    .then(r => {
      navigate("/");
    })
    .catch(e => {
      alert(e.response.data.message);
      setLoading(false);
    });
  }

  return (
    <AuthStyle>
      <Link to="/"><img src={logoImg} alt="" /></Link>
      <form action="" onSubmit={eventHandler}>
        <Input data-identifier="input-email" type="email" placeholder="email" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.com" required disabled={loading}/>
        <Input data-identifier="input-password" type="password" placeholder="senha" required disabled={loading}/>
        <Input data-identifier="input-name" type="text" placeholder="nome" required disabled={loading}/>
        <Input data-identifier="input-photo" type="url" placeholder="foto" required disabled={loading}/>
        <Button disabled={loading}>
        {loading 
            ? <ThreeDots 
                height="inherit" 
                width="80" 
                radius="9"
                color="white" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{justifyContent: "center"}}
                wrapperClassName=""
                visible={true}
              />
            : "Cadastrar"
          }
        </Button>
      </form>
      <Link data-identifier="back-to-login-action" to="/">Já tem uma conta? Faça login!</Link>
    </AuthStyle>
  );
}