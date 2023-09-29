import React from "react";
import { useState, useEffect } from "react";
import { getWorks } from "../API/getWors";

import Pagination from "../components/Pagination";

const Work = () => {

    const [works, setWorks] = useState([])

    const [currentPage, setCurrentPage] = useState("1")
    const [perPage, setPerPage] = useState("10")
    const [qntPage, setQntPage] = useState(10)
    const lastIndex = perPage * currentPage
    const firstIndex = lastIndex - perPage
    const options = [10, 20, 30, 40, 50]
    useEffect(() => {
        const getWorksArr = async () => {
            const result = await (getWorks())
            setWorks(result.slice(firstIndex, lastIndex))
        }
        getWorksArr()
    }, [perPage, currentPage])


    const handleChange = (e) => {
        setPerPage(e.target.value)
        setQntPage(Math.ceil(100 / e.target.value))
    }

    const getCurrenPage = (page) => {
        setCurrentPage(page)
    }


    return (
        <section className="works">
            <div className="container">
                <h1 className="works__title">Works</h1>
                <select defaultValue="10" className="work__select" onChange={handleChange}>
                    {options.map((option) => (
                        <option>{option}</option>
                    ))}
                </select>
                <Pagination qntPage={qntPage} getCurrenPage={getCurrenPage} />
                <div className="works__wrapper">
                    {works.map((work, idx) => (
                        <div className="work__card">
                            <div className="works__img"><img src={work.url} /></div>
                            <p className="works__title">{work.title}</p>

                        </div>

                    ))}
                </div>

            </div>


        </section>
    )
}

export default Work