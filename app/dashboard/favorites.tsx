import React from "react";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";

const Favorites = () => {
  return (
    <div className="dashboard-child">
      <div className="favorites-ui">
        <h1>Mes sauvegardes</h1>
        <div className="favories-container ">
          <div className="favories-head flex gap-2">
            <div className="flex items-center gap-2">
              <div className="trash-container">
                {/*  <Trash color={"#6e0505"} width="18px" height="18px" /> */}
                <IonIcon icon={trash} size="18px" color="#6e0505"></IonIcon>
              </div>
              <span className=" text-slate-600 font-light">
                pour retirer des favories
              </span>
            </div>
          </div>
          <div className="favories-body">
            <div className="grid grid-cols-4 gap-1  p-4 space-x-4 w-full">
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  className="rounded-box"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
