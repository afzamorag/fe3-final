import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const{favoriteState, favoriteDispatch} = useContextGlobal()
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoriteState.length && favoriteState.map((doctor) =>
          <Card key={doctor.id} doctor={doctor} isFavorites={true}/>
        )}
      </div>
    </>
  );
};

export default Favs;
