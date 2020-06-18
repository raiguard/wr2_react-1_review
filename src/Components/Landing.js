import React from "react";

export default (props) => {
  const animalSelectionMapped = props.animalSelection.map((animal, i) => (
    <div key={i}>
      <h4>{animal.name}</h4>
      <img src={animal.img}></img>
    </div>
  ));
  return (
    <main>
      <h3>Give us a home!</h3>
      {animalSelectionMapped}
    </main>
  );
};
