import axios from 'axios';

export default function () {
    return axios.create({
        baseURL: 'https://bw-testify.herokuapp.com/',
        headers: {
            Authorization: localStorage.getItem('token'),

        }
    })
}