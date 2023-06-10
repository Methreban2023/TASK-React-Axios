import axios from "axios";

//   const getAllPets = async () => {
//     const res = await axios.get(
//       "https://pets-react-query-backen.herokuapp.com/pets/	"
//     );
//   };

const baseURL = "https://pets-react-query-backen.herokuapp.com";
const instance = axios.create({ baseURL: baseURL });

export default instance;
