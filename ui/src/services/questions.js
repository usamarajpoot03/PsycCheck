import Axios from "./axiosConfig";

export function getQuestions() {
    return Axios.get("/questions");
}