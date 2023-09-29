import React, { useState } from "react";
import arrowBack from "../assets/paginationstartminor-svgrepo-com.png"
import arrowFront from "../assets/paginationendminor-svgrepo-com.png"
import arrowDisabled from "../assets/disabled-svgrepo-com.png"

const Pagination = ({qntPage, getCurrenPage}) => {
    const [active, setActive] = useState(1)
    const handleClick = (e) => {
        getCurrenPage(Number(e.target.text))
        setActive((Number(e.target.text)))
    }

    const backChange = () => {
        getCurrenPage(active - 1)
        setActive(prev => 
            prev = prev - 1)
            
    }
    
    const forwardChange = () => {
        getCurrenPage(active + 1)
        setActive(prev => 
            prev = prev + 1)
            
    }

    const pagesArr = Array.from({length: qntPage}, (v, i) => i)


    return (
        <div className="pagination">
            <div className="pagination__img" ><button disabled={active === pagesArr[0] + 1? "disabled" : ""} onClick={backChange}><img src={active === pagesArr[0] + 1? arrowDisabled : arrowBack}/>
            </button></div>  
           <div className="pagination__pages">
            {pagesArr.map((num) => (
            <a className="pagination__link" style={{color: num + 1 === active ? "red" : "black",
            fontSize: num + 1 === active ? "20px" : "16px"}} onClick={handleClick}>{num + 1}</a>
           ))}
           </div>
          <div className="pagination__img" ><button disabled={active === pagesArr[pagesArr.length - 1] + 1? "disabled" : ""} 
          onClick={forwardChange}><img src={active === pagesArr[pagesArr.length - 1] + 1? arrowDisabled : arrowFront}/></button></div>
          
        </div>
    )


}

export default Pagination