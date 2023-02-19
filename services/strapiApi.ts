import axios from 'axios';

const url = process.env.NEXT_URL_STRAPI_API || 'http://localhost:1337';

const strapiApi = axios.create({
  baseURL: url
});

export default strapiApi;
