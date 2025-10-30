import React from 'react'
import InputForm from '../../components/Input-form/input-form'
import DarkButton from '../../components/DarkButton/DarkButton'

export default function Singin() {
  return (
    <div className="pagina">
    <form className="form-singup">

      <img src="/pg3.png" alt="" />
      <h2>Glad to meet  you again!</h2>


      <InputForm type='text' placeholder="Numero Email" />

      <button className="btn-singup">Cadastrar</button>
      <p className="text-singup">
        Já possui uma conta? <span className="link-singup">Faça login</span>
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

