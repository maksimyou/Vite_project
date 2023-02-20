import axios from "axios";
let getIP;
export default getIP = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    return res.data.city;
};
