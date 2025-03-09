import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchGalleryPicturesFromTopic = async topic => {
    const response = await axios.get(`/search/photos/?client_id=q_ilJfeXbJ7aLVkUf1TArJA5EUScrQgLm08H3UJvYpI?query=${topic}`);
    return response.data.hits;
};