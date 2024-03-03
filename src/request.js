import axios from "axios";

const KEY = "tPyF-JOOf607yCQmy2T4mCANWSyx1bzc-VxDCaqrUmg";


const getImages = async (query, page) => {
  axios.defaults.baseURL = 'https://api.unsplash.com';
  const response = await axios.get("/search/photos", {
    params: {
      query,
      client_id: KEY,
      page,
      per_page: 12
    },
  });
  return response.data.results;
};

export default getImages;