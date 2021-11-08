import { useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";


const SinglePost = () => {
    const {search} = useLocation();
    const params = new URLSearchParams(search)
    const index= params.get('index');

    console.log(index)
    return(
        <div>
            <h1>stuff</h1>
            {index}
        </div>
    )
}

export default SinglePost;