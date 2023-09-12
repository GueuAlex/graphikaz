
type SetIsLoginFunction = (newValue: string) => void;
const Login = ({ setState } :  { setState: SetIsLoginFunction }) => {
  const handleClick = () => {
    setState('');
  };
  return (
    <div className="card">
       <div className="logo-underline">
            <h1>GRAPHIKAZ</h1>
            <div className="underline" />
        </div>
    <div className="login-component">
      <div className="buttons-group">
        <button type="button">
          <i className="ri-facebook-fill"></i> Inscription avec facebook
        </button>
        <button type="button">
          <i className="ri-google-fill"></i> Inscription avec Google
        </button>
      </div>
      <div className="separator" />
      <div className="inputs-group">
        <div>
          <input type="text" name="" id="" placeholder="E-mail ou nom d'utilisateur" />
        </div>
        <div className="password-input">
          <input type="password" name="" id="" placeholder="Mot de passe" />
          <strong className="second-links">Oublié ?</strong>
        </div>
      </div>
      <div className="connect-button">
        <button type="button">Connexion</button>
      </div>
      <span className="mini-text">Pas encore membre ? <strong className='second-links' onClick={handleClick}>Inscrivez-vous.</strong></span>
    </div>
    </div>
  )
}

export default Login