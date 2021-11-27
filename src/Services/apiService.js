import axios from 'axios'

const url = '/api/posts'

export const getPosts = async () => {
 const res = await axios.get(url);
 return res.data;
}

export const getPostById = async (id) => {
    const res = await axios.get(url + '/'+ id);
    return res.data;
}