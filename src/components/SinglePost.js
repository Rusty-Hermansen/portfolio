import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'
import apiService from "../Services/apiService";
import { posts } from '../posts/posts';

const SinglePost = () => {
    const params = useParams();

    const post = posts[params.id]

    // const [dbPost, setDbPost] = useState([]);

    // useEffect(() => {
    //     apiService.getPostById(params.id).then(r => setDbPost(r))
    // }, [])
 
    return(
        // <div className="justify-center bg-black p-12">
        <section className="justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
            {/* <h1 className="text-5xl flex justify-center mb-12 text-white">{dbPost[0].title}</h1>
            {parse(dbpost)}
            { dbPost && dbPost.map((post)=> {
                if(dbPost.text !== null){
                    return( dbPost.text)
                   
                }
                else {
                    return
                    dbPost.image
                }
            })
                    } */}
         {/* </div> */}
         <h1 className="text-5xl flex justify-center mb-12 text-white">{post.title}</h1>
            {parse(post.body)}
        </section>
    )
}

export default SinglePost;