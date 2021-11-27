import { post } from "jquery";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import {posts} from '../posts/posts'
import parse from 'html-react-parser'


const SinglePost = () => {
    const params = useParams();

    const post = posts[params.id]
    console.log(post)
    return(
        // <div className="justify-center bg-black p-12">
        <section className="justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
            <h1 className="text-5xl flex justify-center mb-12 text-white">{post.title}</h1>
            {parse(post.body)}
          
         {/* </div> */}
        </section>
    )
}

export default SinglePost;