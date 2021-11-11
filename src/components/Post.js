import {useState, useEffect} from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import { posts } from '../posts/posts';

import SinglePost from './SinglePost';
import { Router } from 'react-router';

const Post = () =>{
   
    return(
        <main>
            <section>
                <h1 className="text-5xl flex justify-center mb-12">Portfolio Posts</h1>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
             
                    { posts && posts.map((post, index)=> (
                       <article>
                        <Link to={"/singlepost/" + index} key={index} state={{body: post.body}}>
                         <span className="block h-64 relative rouded shadow leading-snug bg-white border-l-8 border-black" key={index}>
                             <img src={post.img} alt={post.alt} className="w-full h-full object-cover absolute"/>
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