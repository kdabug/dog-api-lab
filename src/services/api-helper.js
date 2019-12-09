import axios from "axios";

export const fetchAllDogs = async () => {
  const resp = await axios.get("https://dog.ceo/api/breeds/list/all");
  return resp.data.message;
};

export const fetchRandomDogPicture = async breed => {
  const resp = await axios.get(`https://dog.ceo/api/breed/hound/images/random`);
  console.log(resp);
};
