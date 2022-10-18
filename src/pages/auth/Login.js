import { AuthStyle } from "./AuthStyle";
import logoImg from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';

export default function Login() {
  const navigate = useNavigate();
  function eventHandler(e) {
    e.preventDefault();
    navigate("/habitos");
  }

  return (
    <AuthStyle>
      <Link to="/"><img src={logoImg} alt="" /></Link>
      <form action="" onSubmit={eventHandler}>
        <input type="email" placeholder="email" required/>
        <input type="password" placeholder="senha" required/>
        <Button>Entrar</Button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </AuthStyle>
  );
}