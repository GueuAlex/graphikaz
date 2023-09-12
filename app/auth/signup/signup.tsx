

const SignUp = () => {
  return (
    <div className="signup-component">
      <div className="card">
        <div className="logo-underline">
            <h1>GRAPHIKAZ</h1>
            <div className="underline" />
        </div>
        <span className="mini-text">
          Afin de confirmer votre inscription, veuillez indiquer votre adresse e-mail. Choisissez également un nom d'utilisateur, qui vous permettra de vous connecter et sera affiché sur vos achats et ventes.
        </span>
        <div className="form-container">

          <strong>Votre compte</strong>
          <div className="inputs-group">
            <div>
              <input type="email" name=""  id="" placeholder="Adresse e-mail" />
            </div>
            <div>
              <input type="text" name=""  id="" placeholder="Nom d'utilisateur" />
            </div>
          </div>

          <strong>Mot de passe</strong>
          <div className="inputs-group">
            <div>
              <input type="password" name=""  id="" placeholder="Mot de passe" />
            </div>
            <div>
              <input type="password" name=""  id="" placeholder="Confirmation du mot de passe" />
            </div>
          </div>

          <strong>Parrainage</strong>
          <span className="mini-text">
            Si un membre de Graphikaz vous parraine, renseignez son code ci-dessous. Sinon, vous pouvez laisser le champ vide.
          </span>
          <div className="inputs-group parrain-code">
            <div className="">
              <input type="email" name=""  id="" placeholder="Code de parrainage (facultatif)" />
            </div>
          </div>

          <strong>Votre profil</strong>
          <span className="mini-text">
            À titre d'information uniquement et afin de vous accueillir au mieux, indiquez-nous la raison principale de votre inscription. Vous n'aurez pas besoin de créer un autre compte si vous souhaitez passer d'une activité à l'autre.
          </span>
          <div className="radio-group">
            <div className="radio">
              <input type="radio" name="" id="" />
              <span>Je souhaite acheter</span>
            </div>
            <div className="radio">
              <input type="radio" name="" id="" />
              <span>Je souhaite vendrer</span>
            </div>
            <div className="radio">
              <input type="radio" name="" id="" />
              <span>Les deux !</span>
            </div>
          </div>
          <div className="check-box">
            <input type="checkbox" name="" id="" />
            <span className="mini-text">J'ai lu et j'accepte les <a href="/">conditions générales d'utilisation.</a></span>
          </div>
          <div className="connect-button">
            <button type="button">Valider mon inscription</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp