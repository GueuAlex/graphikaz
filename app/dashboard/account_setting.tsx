import React from "react";
import { IonIcon } from "@ionic/react";
import { settings } from "ionicons/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "next-auth";

const AccountSettings = () => {
  const session = useSession();
  const route = useRouter();
  if (!session) {
    route.back;
  }
  const user: User = session.data?.user!;
  // Divisez la chaîne en un tableau en utilisant l'espace comme séparateur
  const parts: string[] = user.name!.split(" ");
  // Extrayez le nom (premier élément du tableau)
  const nom: string = parts[0];

  // Extrayez le prénom (les éléments restants du tableau, rejoignis avec un espace)
  const prenom: string = parts.slice(1).join(" ");
  return (
    <div className="dashboard-child ">
      <div className="favorites-ui w-full">
        <h1>Mon profile</h1>
        <div className="favories-container ">
          <div className="favories-head flex gap-2">
            <div className="flex items-center gap-2">
              <div className="trash-container">
                {/* <Settings color={"#6e0505"} width="18px" height="18px" /> */}
                <IonIcon icon={settings} size="18px" color={"red"}></IonIcon>
              </div>
              <span className=" text-slate-600 font-light">
                paramètres de compte
              </span>
            </div>
          </div>
          <div className="profile-body">
            <div>
              <h3>Compte</h3>
              <span>
                Informations et activités en temps réel de votre propriété.
              </span>
            </div>
            <div className="divider" />
            <div className="uer-pic flex items-center justify-between">
              <div className="pic flex items-center gap-4">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3>Photo de profile</h3>
                  <span>PNG, JPEG moins de 15MB</span>
                </div>
              </div>
              <div className="uploader flex gap-2">
                <input type="file" name="" id="file-put" className="hidden" />

                <button className="btn btn-outline btn-secondary">
                  <label htmlFor="file-put">Uplaod new pic</label>
                </button>
                <button className="btn">Delete</button>
              </div>
            </div>
            <h3>{user.name}</h3>
            <div className="name-last-input flex items-center justify-between w-full gap-2">
              <div className="name-input flex flex-col w-[50%]">
                <label htmlFor="name-input">Nom</label>
                <input
                  type="text"
                  name=""
                  id="name-input"
                  className="w-full"
                  placeholder={nom}
                />
              </div>
              <div className="last-input flex flex-col w-[50%]">
                <label htmlFor="name-input">Prénoms</label>
                <input
                  type="text"
                  name=""
                  id="name-input"
                  className="w-full"
                  placeholder={prenom}
                />
              </div>
            </div>
            <div className="divider" />

            <div className="email-settings">
              <div>
                <h3>Contact email</h3>
                <span>
                  Gérez l'adresse électronique de vos comptes pour les factures.
                </span>
              </div>
              <div className="email-input-change flex items-center justify-between w-full">
                <div className="email-input flex flex-col w-[50%]">
                  <label htmlFor="email-input">Email</label>
                  <input
                    type="email"
                    name=""
                    id="email-input"
                    className="w-full"
                    placeholder={user.email!}
                  />
                </div>
                <div className="change-email">
                  <button className="btn btn-outline btn-secondary">
                    {" "}
                    Ajouter une adresse email{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="divider" />

            <div className="email-settings">
              <div>
                <h3>Mot de passe</h3>
                <span>Modifiez votre mot de passe actuel.</span>
              </div>
              <div className="name-last-input flex items-center justify-between w-full gap-2">
                <div className="name-input flex flex-col w-[50%]">
                  <label htmlFor="name-input">nouveau mot de passe</label>
                  <input
                    type="password"
                    name=""
                    id="name-input"
                    className="w-full"
                  />
                </div>
                <div className="last-input flex flex-col w-[50%]">
                  <label htmlFor="name-input">
                    Confirmer nouveau mot passe
                  </label>
                  <input
                    type="password"
                    name=""
                    id="name-input"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
