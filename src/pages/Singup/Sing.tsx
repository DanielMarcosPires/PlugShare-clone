import React from 'react'
import './Style.css'
import InputForm from '../../components/Input-form/input-form'
import DarkButton from '../../components/DarkButton/DarkButton'

export default function Sing() {
  return (
    <div className="pagina">
    <form className="form-singup">

      <h2>Welcome to WROOM</h2>


      <InputForm type='text' placeholder="Nome" />
      <InputForm type='tel' placeholder="Numero" />
      <InputForm type='email' placeholder="Email" />

      <button className="btn-singup">Cadastrar</button>
      <p className="text-singup">
        Já possui uma conta? <span className="link-singup">Faça login</span>
      </p>
      <p className="text-checkbox">
        <InputForm style={{width: '20px'}} type="checkbox" />
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
    </form>
    </div>
  )
}
