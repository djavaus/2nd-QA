import React from "react";
import mainImg from "../assets/main__Img.png"
import { getComments } from "../API/getComments";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

const [recentComments, setRecentComments] = useState([])

useEffect(() => {   
    const getRecentCommentsArr = async () => {
    const result = await (getComments())
    setRecentComments([result[result.length -2], result[result.length -1]])
    } 
    getRecentCommentsArr()
}, [])

    return (
        <div>
       <main className="main">
        <div className="container">
            <div className="main__wrapper">
            <div className="main__content">
                <p className="main__title">
                Hi, I am John, <br />Creative Technologist
                </p>
                <p className="main__desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className="main__btn">Download CV</button>
            </div>
            <div className="main__img">
                <img src={mainImg}/>
            </div>


        </div>
        </div>
       </main>
       <section className="recent__comments">
        <div className="container">
            <div className="recent__comment__head-wrapper">
            <h1 className="recent__comments__title">Recent posts</h1>
            <button className="recent__comment__btn"><NavLink to="/blog" className="header__link">Go to BLog</NavLink></button>
            </div>
            <div className="recent__comments__wrapper">
            {recentComments.map((comment) => (
                <div className="recent__comment" key={comment.id}>
                    <p className="recent__comment-name">{comment.name}</p>
                    <p className="recent__comment-desc">{comment.body}</p>
                </div>
            ))}
            </div>
        </div>
       </section>
       </div>
    )
}

export default Home