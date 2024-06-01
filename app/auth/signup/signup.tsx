import DeleteItemModal from "@/reutilisables/alert";
import AlertDialog from "@/reutilisables/alert";
import CountdownRedirect from "@/reutilisables/count_down_redirect";
import EmailAlertDialog from "@/reutilisables/email_alert";
import LoadingBtn from "@/reutilisables/loading_btn";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const router = useRouter();
  ///
  const [isLoading, setLoading] = useState(false);
  ///
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    type_user: "BUYER",
    agreement: false,
  });
  const [erroMsg, setErrorMsg] = useState("");
  const [pinCode, setPincode] = useState(0);
  //const nodemailer = require("nodemailer");

  // Fonction pour générer un nombre aléatoire de 6 chiffres
  /*  function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  } */
  //const code = generateRandomNumber();
  //setPincode(generateRandomNumber());
  //////// email sender api caller
  /////// email sender api caller
  const emailSender = async () => {
    // generate random number

    //console.log("bonjour code :", code);
    try {
      // Remplacez cela par le code réel de six chiffres
      // console.log(pinCode);
      const response = await fetch("/api/api_four", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      if (response.ok) {
        const result = await response.json(); // Récupérer le JSON ici
        const code = result.code;
        console.log("Code récupéré dans la réponse JSON :", code);
        setPincode(code); // Mettez à jour le state avec le code

        return code;
      } else {
        throw new Error("Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Error calling API:", error);
      throw error;
    }
  };
  // Suppose you're in a React component or some other JavaScript file
  // where you want to call the API.

  //////
  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };
  ///
  ///////////
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log("1:", formData.type_user);
    if (!formData.email || !formData.name || !formData.password) {
      setLoading(false);
      setErrorMsg("Veuillez Correctement remplire les champs");
      window.my_modal_4.showModal();
      return;
    }
    ////////// si password dont match
    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      setErrorMsg("Les mots de passe ne correspondent pas !");
      window.my_modal_4.showModal();
      return;
    }

    /////// si l'agreement n'est pas accepté
    if (!formData.agreement) {
      setLoading(false);
      setErrorMsg("Être d'accord avec les conditions générales d'utilisation");
      window.my_modal_4.showModal();
      return;
    }
    //console.log(formData);

    //////////////

    emailSender().then((code) => {
      if (code) {
        setLoading(false);
        console.log("bonjour 0");
        console.log("code récupéré dans la promesse :", code);
        window.my_modal_5.showModal();
      } else {
        setLoading(false);
        setErrorMsg("Une erreur s'est produite");
        window.my_modal_4.showModal();
      }
    });
    ////////////

    /*  const postData = {
      email: formData.email,
      name: formData.username,
      password: formData.password,
      referralCode: formData.referralCode,
      type_user: formData.accountType,
    };

    try {
      const response = await fetch("https://graphikaz.digifaz.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("Inscription réussie !");
        setLoading(false);
      } else {
        setLoading(false);
        setErrorMsg("Erreur lors de l'inscription. Veuillez réessayer.");
        window.my_modal_4.showModal();
      }
    } catch (error) {
      setLoading(false);
      console.error("Erreur lors de la requête API :", error);
    } */
  };

  ///
  return (
    <div className="signup-component">
      <PincodeAlert userdata={formData} code={pinCode} />
      <AlertDialog msg={erroMsg} />
      <div className="auth-card">
        <div className="logo-underline">
          <h1>GRAPHIKAZ</h1>
          <div className="underline" />
        </div>
        <span className="mini-text">
          Afin de confirmer votre inscription, veuillez indiquer votre adresse
          e-mail. Choisissez également un nom d'utilisateur, qui vous permettra
          de vous connecter et sera affiché sur vos achats et ventes.
        </span>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <strong>Votre compte</strong>
            <div className="inputs-group">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Adresse e-mail"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom d'utilisateur"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
            </div>

            <strong>Mot de passe</strong>
            <div className="inputs-group">
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mot de passe"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirmation du mot de passe"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                />
              </div>
            </div>

            <strong>Parrainage</strong>
            <span className="mini-text">
              Si un membre de Graphikaz vous parraine, renseignez son code
              ci-dessous. Sinon, vous pouvez laisser le champ vide.
            </span>
            <div className="inputs-group parrain-code">
              <div className="">
                <input
                  type="text"
                  name="referralCode"
                  id="referralCode"
                  placeholder="Code de parrainage (facultatif)"
                  value={formData.referralCode}
                  onChange={(e) => handleChange("referralCode", e.target.value)}
                />
              </div>
            </div>

            {/*  <strong>Votre profil</strong>
            <span className="mini-text">
              À titre d'information uniquement et afin de vous accueillir au
              mieux, indiquez-nous la raison principale de votre inscription.
              Vous n'aurez pas besoin de créer un autre compte si vous souhaitez
              passer d'une activité à l'autre.
            </span>
            <div className="auth-radio-group">
              <div className="auth-radio">
                <input
                  type="radio"
                  name="type_user"
                  id="buyer"
                  value="BUYER"
                  onChange={(e) => handleChange("type_user", e.target.value)}
                />
                <span>Je souhaite acheter</span>
              </div>
              <div className="auth-radio">
                <input
                  type="radio"
                  name="type_user"
                  id="seller"
                  value="SELLER"
                  onChange={(e) => handleChange("type_user", e.target.value)}
                />
                <span>Je souhaite vendrer</span>
              </div>
              <div className="auth-radio">
                <input
                  type="radio"
                  name="type_user"
                  id="both"
                  value="BOTH"
                  onChange={(e) => handleChange("type_user", e.target.value)}
                />
                <span>Les deux !</span>
              </div>
            </div> */}

            <div className="check-box mt-5">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                checked={formData.agreement} // Indiquez si la case à cocher est cochée ou non
                onChange={(e) => handleChange("agreement", e.target.checked)}
              />
              <span className="mini-text">
                J'ai lu et j'accepte les{" "}
                <a href="/">conditions générales d'utilisation.</a>
              </span>
            </div>
            <div className="connect-button">
              {!isLoading ? (
                <button type="submit">Valider mon inscription</button>
              ) : (
                <LoadingBtn />
              )}
            </div>
          </div>
        </form>
        <div className=" p-2 mt-2  text-center flex justify-center">
          <span className="mini-text">
            Déjà inscrit ?{" "}
            <strong
              className="second-links"
              onClick={() => {
                router.replace("/auth?et=login");
                router.refresh();
              }}
            >
              Connectez-vous.
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import PinInput from "react-pin-input";

const PincodeAlert = ({
  code,
  userdata,
}: {
  code: number;
  userdata: {
    email: string;
    name: string;
    password: string;
    type_user: string;
  };
}) => {
  const [isLoading, setLoading] = useState(false);
  const [isLoading1, setLoading1] = useState(false);
  const [isError, setIsError] = useState(false);
  const [reCode, reSetCode] = useState(0);
  const router = useRouter();

  //reSetCode(code);
  console.log("code dans alerte dialogu : ", code);

  //////////////: resend code
  const emailSender = async () => {
    console.log("2:", userdata.type_user);
    // generate random number

    //console.log("bonjour code :", code);
    try {
      // Remplacez cela par le code réel de six chiffres
      // console.log(pinCode);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api_four`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
          },
          body: JSON.stringify({
            email: userdata.email,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json(); // Récupérer le JSON ici
        const responseCode = result.code;
        console.log("Code récupéré dans la réponse JSON :", responseCode);
        reSetCode(responseCode); // Mettez à jour le state avec le code
        console.log("Code après resend :", reCode);

        return responseCode;
      } else {
        throw new Error("Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Error calling API:", error);
      throw error;
    }
  };

  //// push data to laravel backend
  const pushDataTopApi = async () => {
    //console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
    try {
      const response = await fetch(
        /* "https://graphikaz.digifaz.com/api/users" */ `${process.env.NEXT_PUBLIC_API_BASE_URL}users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
          },
          body: JSON.stringify(userdata),
        }
      );

      if (response.ok) {
        //alert("Inscription réussie !");
        //setLoading(false);
      } else {
        //setLoading(false);
        /*  setErrorMsg(
          "Un compte existe déjà avec cette adresse email. Reéssayer avec une autre adresse"
        ); */
        // window.my_modal_6.showModal()
        toast.error(
          "Un compte existe déjà avec cette adresse email. Reéssayer avec une autre adresse"
        );
      }
      return response;
    } catch (error) {
      //setLoading(false);
      console.error("Erreur lors de la requête API :", error);
    }
  };
  return (
    <dialog id="my_modal_5" className="modal">
      <ToastContainer />
      <EmailAlertDialog />

      <div className="modal-box">
        {!isLoading ? (
          <div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-stone-600">
                ✕
              </button>
            </form>
            <div className="dialog-title-container flex items-center gap-3">
              <div className="alert-icon">
                {" "}
                <i className="ri-mail-line"></i>
              </div>
              <span className=" text-red-600">
                Vérification de l'adresse email
              </span>
            </div>
            <p className=" text-stone-700 text-center pt-2">
              Un email vous à été envoyé a l'adresse{" "}
              <span className=" font-semibold">{userdata.email}</span> . Entrer
              le code pour vérifier
            </p>

            <div className="flex justify-center items-center">
              <PinInput
                length={6}
                initialValue=""
                onChange={(value, index) => {}}
                type="numeric"
                inputMode="number"
                style={{ padding: "10px" }}
                inputStyle={{
                  borderColor: !isError ? "#e5e8ec" : "#c51717",
                  borderRadius: 5,
                  backgroundColor: "#e5e8ec",
                  color: "#000",
                  fontSize: 23,
                }}
                inputFocusStyle={{ borderColor: "blue" }}
                onComplete={(value) => {
                  if (
                    code.toString() === value ||
                    reCode.toString() === value
                  ) {
                    pushDataTopApi().then((response) => {
                      setLoading1(true);
                      if (response?.ok) {
                        setLoading(true);
                        router.replace("/auth?et=login");
                        router.refresh();
                      } else {
                        setLoading1(false);
                      }
                    });
                  } else {
                    setIsError(true);
                  }
                }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>
            <div className="resend-email-text flex justify-center mt-3 ">
              {!isLoading1 ? (
                <span
                  className="text-stone-600 transition-colors ease-in hover:text-green-600 cursor-pointer"
                  onClick={() => {
                    emailSender().then((code) => {
                      //reSetCode(code);
                      console.log("code apres renvoie", reCode);
                    });
                  }}
                >
                  Renvoyer le code
                </span>
              ) : (
                <span>chargement...</span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center text-stone-600">
            <CountdownRedirect redirectPath="/auth?et=login" seconds={10} />
          </div>
        )}
      </div>
    </dialog>
  );
};

function useEffect(arg0: () => void, arg1: string[]) {
  throw new Error("Function not implemented.");
}

function useSession(): { status: any; data: any } {
  throw new Error("Function not implemented.");
}
//export default signup
