import axios from "axios";

const FetchShipData = async (race) => {
  return new Promise((res, rej) => {
    try {
      axios
        .get(`http://localhost:3001/api/ship/getShipsByType/${race}`)
        .then((result) => {
          res(result.data);
        })
        .catch((err) => rej(err));
    } catch (err) {
      rej(err);
    }
  });
};

export default FetchShipData;
