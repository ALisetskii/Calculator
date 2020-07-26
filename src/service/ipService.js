const ACCESS_TOKEN = '0f80acdb237993';
const BASE_URL = 'https://ipinfo.io/';

const getIpData = () => fetch(`${BASE_URL}json?token=${ACCESS_TOKEN}`)
  .then((response) => response.json());

export default getIpData;
