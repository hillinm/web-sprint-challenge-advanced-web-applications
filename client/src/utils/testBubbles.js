import axios from "axios";

export const testBubbles = () => {
    return axios.get("http://localhost:5000/api/colors")
        .then(res => {
            return res;
        })
        .catch(err => console.log(err));
}