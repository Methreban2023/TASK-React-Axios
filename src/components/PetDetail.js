import React, { useEffect, useState } from "react";
// import petsData from "../petsData";
import { useParams } from "react-router-dom";
import { getPet, updatePet, deletePet } from "../api/pets";

import { QueryClient, useMutation } from "@tanstack/react-query";
const PetDetail = () => {
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  const callApi = async () => {
    const getData = await getPet(petId);
    setPet(getData);
  };
  // const getPets = petsData.find((pet) => petId == pet.id);
  // if (!getPets) {
  //   return <h1>{`There is no pet with the id: ${petId}`}</h1>;
  // }

  function refreshHandler() {
    window.location.reload(false);
  }
  const mutation = useMutation({
    mutationFn: () => deletePet(petId),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["getAllPets"] });
    },
  });
  const adoptHandler = () => {
    updatePet(petId, pet.name, pet.type, pet.image, pet.adopted);
  };
  const deleteHandler = () => {
    mutation.mutate();
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            onClick={adoptHandler}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adobt
          </button>

          <button
            onClick={deleteHandler}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
          >
            Delete
          </button>
          <button
            onClick={refreshHandler}
            className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
