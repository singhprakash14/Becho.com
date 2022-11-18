import axios from "axios";
export const getData = (params = {}) => {
  return axios.get(`https://olx-data-server-hwrf.onrender.com/combined`, {
    params: {
      limit: params.limit,
    },
  });
};
