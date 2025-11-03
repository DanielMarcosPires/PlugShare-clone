import "./Style.css";
import InputForm from "../../components/Input-form/input-form";
import DarkButton from "../../components/DarkButton/DarkButton";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useContext, type CSSProperties } from "react";
import { WebContext } from "../../context/webContext";
import Switch from "../../components/Switch/Switch";

type FormInputs = {
  email?: string;
};

export default function Singin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  
  const {webStructure} = useContext(WebContext);
  
  function accessDashboard({ email }: FormInputs) {
    const networkEmail = localStorage.getItem("email");

    if (networkEmail === email) {
      toast.success("Acessou o Dashboard!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      toast.error(`Email: ${email} não cadastrado!`);
    }
  }

  const style = {
    fundo:{
      background:webStructure.background,
    } as CSSProperties
  }


  const onSubmit: SubmitHandler<FormInputs> = (d) => {
    accessDashboard(d);
  };
  return (
    <div className="pagina" style={style.fundo}>
      <Toaster />
      <header className="pagina-header">
        <Switch  />
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="form-singup">
        <img src="/pg3.png" alt="" />
        <h2>Glad to meet you again!</h2>

        <InputForm
          type="email"
          {...register("email")}
          placeholder="Numero Email"
        />

        <button className="btn-singup">Entrar</button>
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
          <span className="link-singup">
            <Link to={"/sign-up"}>Not registered yet?</Link>
          </span>{" "}
          Faça login
        </p>
      </form>
    </div>
  );
}
