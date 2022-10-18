import { AuthStyle } from "./AuthStyle";
import logoImg from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';

export default function Signup() {
  const navigate = useNavigate();
  function eventHandler(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <AuthStyle>
      <Link to="/"><img src={logoImg} alt="" /></Link>
      <form action="" onSubmit={eventHandler}>
        <input type="email" placeholder="email" required/>
        <input type="password" placeholder="senha" required/>
        <input type="text" placeholder="nome" required/>
        <input type="url" placeholder="foto" required/>
        <Button>Cadastrar</Button>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </AuthStyle>
  );
}