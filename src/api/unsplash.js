import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
headers: {
    Authorization:
     'Client-ID 4c6c431fefc7f266e4eb18e444b9c269164fe99dc55cd7babd9ba2e559125b5e'
}
});