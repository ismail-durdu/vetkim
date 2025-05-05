import React from "react";
interface Pet {
  pet_id: number;
  pet_name: string;
  type: string;
  species: string;
  pet_old: number;
  pet_gender: string;
}
interface MyvetProps {
  pet: Pet;
}

function myvet({ pet }: MyvetProps) {
  return (
    <div className="grid grid-cols-5 justify-center items-center mx-3 py-3">
      <p className="text-center">{pet.pet_name}</p>
      <p className="text-center">{pet.species}</p>
      <p className="text-center">{pet.pet_old}</p>
      <p className="text-center">{pet.type}</p>
      <p className="text-center">{pet.pet_gender}</p>
    </div>
  );
}

export default myvet;
