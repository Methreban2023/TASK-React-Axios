import instance from "./index";

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getPet = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};
const addPet = async (name, type, image, adopted) => {
  const res = await instance.post("/pets", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });

  console.log(res.data);
  return res;
};

const updatePet = async (id, name, type, image, adopted) => {
  const res = await instance.put(`/pets/${id}`, {
    name: name,
    type: type,
    image: image,
    adopted: 1,
  });
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`);
  console.log(res.data);
};
export { getAllPets, getPet, addPet, updatePet, deletePet };
