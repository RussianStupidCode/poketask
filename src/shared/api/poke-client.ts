import axios from "axios";
import { POKE_API_URL } from "../config";

const pokeClient = axios.create({ baseURL: POKE_API_URL });

export { pokeClient };
