const axios = require('axios');
module.exports = {
  fetchData: async (url) => {
    const r = await axios.get(url);
    return r.data;
  }
};
