import { SERVER_URL } from "./constants";


export default class API {

  static async getCurrentSong() {
    const res = await fetch(`${SERVER_URL}/spotify/current`)
    const data = await res.json();
    return data;
  }

  static async getCreations() {
    const res = await fetch(`${SERVER_URL}/creations`)
    const data = await res.json();
    return data;
  }
}
