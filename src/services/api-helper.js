import axios from "axios";

export const fetchAllDogs = async () => {
  const resp = await axios.get("https://dog.ceo/api/breeds/list/all");
  console.log(resp);
};
