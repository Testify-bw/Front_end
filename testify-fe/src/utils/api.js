import axios from 'axios';

export default function () {
    return axios.create({
        baseURL: 'https://bw-testify.herokuapp.com/api',
        headers: {
            Authorization: localStorage.getItem('token'),
            // 'Content-Type': application/json
        }
    })
}