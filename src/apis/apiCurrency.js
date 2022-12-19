import axios from "axios"

export const getVNDRate = async() => await axios.get(`https://api.currencyfreaks.com/latest?apikey=5312ec221af14b0b9d2ccbab604b30a2`)