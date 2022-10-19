import { AuthStyle } from "./AuthStyle";
import logoImg from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import axios from 'axios';
import { url } from '../../constants/urls';
import { useState } from 'react';
import { ThreeDots } from  'react-loader-spinner'

export default function Login({setUser}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function eventHandler(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const obj = {
      email: form[0].value,
      password: form[1].value,
    }

    axios.post(url.login, obj)
    .then(r => {
      console.log(r);
      setUser(r.data);      
      navigate("/hoje");
    })
    .catch(e => console.log(e));

  }

  return (
    <AuthStyle>
      <Link to="/"><img src={logoImg} alt="" /></Link>
      <form action="" onSubmit={eventHandler}>
        <Input type="email" placeholder="email" required disabled={loading}/>
        <Input type="password" placeholder="senha" required disabled={loading}/>
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
            : "Entrar"
          }
        </Button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </AuthStyle>
  );
}