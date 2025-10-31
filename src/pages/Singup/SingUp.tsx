import  { useContext, type CSSProperties } from "react";
import "./Style.css";
import InputForm from "../../components/Input-form/input-form";
import DarkButton from "../../components/DarkButton/DarkButton";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import Switch from "../../components/Switch/Switch";
import { WebContext } from "../../context/webContext";

type FormInputs = {
  name: string;
  number: string;
  email: string;
  terms: boolean;
};
export default function SingUp() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const {webStructure} = useContext(WebContext);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = ({
    name,
    number,
    email,
    terms,
  }) => {
    console.table({
      name: name,
      number: number,
      email: email,
      terms: terms,
    });

    localStorage.setItem("name", `${name}`);
    localStorage.setItem("email", `${email}`);
    navigate("/sign-in");
  };

   const style = {
      fundo:{
        background:webStructure.background,
      } as CSSProperties
    }

  return (
    <div className="pagina" style={style.fundo}>
      <header className="pagina-header">
        <Switch />
      </header>
      <img src="/pg3.png" alt="" />
      <form onSubmit={handleSubmit(onSubmit)} className="form-singup">
        <h2>Welcome to WROOM</h2>

        <InputForm type="text" {...register("name")} placeholder="Nome" />
        <InputForm type="tel" {...register("number")} placeholder="Numero" />
        <InputForm type="email" {...register("email")} placeholder="Email" />

        <button className="btn-singup">Cadastrar</button>

        <p className="text-checkbox">
          <InputForm
            {...register("terms")}
            style={{ width: "20px" }}
            type="checkbox"
          />
          Aceito os termos e condições
        </p>

        <div>
          <nav className="plataforms">
            <DarkButton>
              <img src="/facebookIcon.svg" alt="" />
            </DarkButton>
            <DarkButton>
              <img src="/googleIcon.svg" alt="" />
            </DarkButton>
            <DarkButton>
              <img src="/appleIcon.svg" alt="" />
            </DarkButton>
          </nav>
        </div>
        <p className="text-singup">
          Já possui uma conta?{" "}
          <span className="link-singup">
            <Link to={"/sign-in"}>Faça login</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
