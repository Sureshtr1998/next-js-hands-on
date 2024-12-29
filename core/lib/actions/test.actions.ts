import axios from "axios";

export const postDataToDB = async () => {
    const data = { "A": 1 }
    const dataHey = await axios.get("http://localhost:3000/febe/api");
    return JSON.parse(JSON.stringify((dataHey)))
}