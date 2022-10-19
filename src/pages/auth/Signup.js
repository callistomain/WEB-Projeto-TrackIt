import { AuthStyle } from "./AuthStyle";
import logoImg from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import axios from "axios";
import { url } from '../../constants/urls';

export default function Signup() {
  const navigate = useNavigate();

  function eventHandler(e) {
    e.preventDefault();
    const form = e.target;
    const obj = {
      email: form[0].value,
      password: form[1].value,
      name: form[2].value,
      image: form[3].value
    }

    axios.post(url.signUp, obj)
    .then(r => console.log(r))
    .catch(e => console.log(e));

    navigate("/");
  }

  return (
    <AuthStyle>
      <Link to="/"><img src={logoImg} alt="" /></Link>
      <form action="" onSubmit={eventHandler}>
        <Input type="email" placeholder="email" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.com" required/>
        <Input type="password" placeholder="senha" required/>
        <Input type="text" placeholder="nome" required/>
        <Input type="url" placeholder="foto" required/>
        <Button>Cadastrar</Button>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </AuthStyle>
  );
}