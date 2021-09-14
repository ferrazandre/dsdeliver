import axios from "axios";

const API_URL = 'http://192.168.100.63:8080';

function fetchOrders(){
    return axios(`${API_URL}/orders`); 
}

export default fetchOrders;