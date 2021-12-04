import {useState, useEffect} from 'react';
import { Link} from 'react-router-dom'
import apiService from '../Services/apiService';
// import { posts } from '../posts/posts';

/////////////////////This piece handles RETRIEVAL FROM DATABASE////////////////////////
// const Post = () =>{

//     const [dbPosts, setDbPosts] = useState([]);

//     useEffect(() => {
//         apiService.getPosts().then(r => setDbPosts(r))
//     }, [])
   
//     return(
//         <main className="bg-black min-h-screen p-12"> 
//             <section className = "container mx-auto">
//                 <h1 className="text-5xl flex justify-center mb-12 text-white">Portfolio Posts</h1>
                
//                 <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
             
//                     { dbPosts && dbPosts.map((post)=> (                                                                                                   
//                        <article>
//                         <Link to={"/singlepost/" + post.id} key={post.id} state={{id: post.id}}>                                                            
//                           <span className="block h-64 relative rouded shadow leading-snug bg-white border-l-8 border-black" key={post.id}>                  
//                              <img src={post.post_img} alt={post.alt} className="w-full h-full object-contain absolute"/>                                    
//                              <span className="block relative h-full flex justify-end items-end pr-4 pb-4">                                                  
//                                 <h3 className="text-white text-lg font-blog px-3 py-4 bg-black text-white bg-opacity-75 rounded" >{post.title} </h3>        
//                              </span>                                                                                                                        
//                              </span>                                                                                                                        
//                         </Link>
//                     </article> 
//                     ))
//                     }
//                 </div>
//             </section>
//         </main>
//     )
// }

//////////////////////////////////This piece is to handle LOCAL POSTS///////////////////////////////////////
const Post = () =>{

    const [dbPosts, setDbPosts] = useState([]);

    useEffect(() => {
        apiService.getPosts().then(r => setDbPosts(r))
    }, [])
   
    return(
        <main className="bg-black min-h-screen p-12"> 
            <section className = "container mx-auto">
                <h1 className="text-5xl flex justify-center mb-12 text-white">Portfolio Posts</h1>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                     { posts && posts.map((post, index)=> (                                                                                                            
                    <article>
                        <Link to={"/singlepost/" + index} key={index} state={{body: post.body}}>                                                                    
                        <span className="block h-64 relative rouded shadow leading-snug bg-white border-l-8 border-black" key={index}>                                  
                             <img src={post.img} alt={post.alt} className="w-full h-full object-contain absolute"/>                                                     
                             <span className="block relative h-full flex justify-end items-end pr-4 pb-4">                                                              
                                <h3 className="text-white text-lg font-blog px-3 py-4 bg-black text-white bg-opacity-75 rounded" >{post.title} </h3>                    
                             </span>                                                                                                                                    
                        </span>                                                                                                                                     
                        </Link>
                    </article> 
                    ))
                    }
                </div>
            </section>
        </main>
    )
}
export default Post;