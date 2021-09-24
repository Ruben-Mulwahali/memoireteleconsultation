import axios from 'axios';

const Axios=axios.create(
    {

        baseURL:"http://localhost:7070/"
    }
);
export default Axios;