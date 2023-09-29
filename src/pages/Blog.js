import React from "react";
import { getPosts } from "../API/getPosts";
import { useState, useEffect } from "react";


const Blog = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {   
        const getPostsArr = async () => {
        const result = await (getPosts())
        setPosts(result.slice(0, 20))
        } 
        getPostsArr()
    }, [])
    
    return (
       <section className="blog">
        <div className="container">
            <div className="blog__wrapper">
                {posts.map((post) => (
                    <div className="blog__post">
                    <h2 className="blog__title">{post.title}</h2>
                    <p className="blog__desc">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}

export default Blog