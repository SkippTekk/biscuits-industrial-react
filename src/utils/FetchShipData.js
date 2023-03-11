import axios from "axios";

const FetchShipData = async (race) => {
  return new Promise((res, rej) => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_DATABASE_URL}/api/ship/getShipsByType/${race}`
        )
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
