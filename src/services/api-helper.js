import axios from "axios";

export const fetchAllDogs = async () => {
  const resp = await axios.get("https://dog.ceo/api/breeds/list/all");
  console.log(resp);
  return resp.data.message;
};

export const fetchRandomDogPicture = async breed => {
  const resp = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  return resp.data.message;
};
