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
        <div>
            <h1>{post.title}</h1>
            {parse(post.body)}
          
        </div>
    )
}

export default SinglePost;