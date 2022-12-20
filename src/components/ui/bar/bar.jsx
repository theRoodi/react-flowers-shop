import React from "react"
import "./bar.scss"
import { FilterNav } from "./filterNav.jsx"
import filterSvg from "../../../assets/svg/filter.svg";
import loupeSvg from "../../../assets/svg/loupe.svg";


function openFilterNav() {
  let filterNav = document.querySelector(".filterNav");
  filterNav.style.left = "0";
  filterNav.style.visibility = "visible";
}


function btnSortHandler() {
  document.querySelector(".options").classList.toggle("show");
}


export const Bar = () => {
  return (
    <>
      <FilterNav />
      <div className="bar">

        <button className="bar__filter button" onClick={openFilterNav}>
          <img src={filterSvg} alt="filt" />
          Filtering
        </button>

        <div className="bar__search">
          <input type="text" placeholder="Search.." />
          <button className="button"><img src={loupeSvg} alt="loupe" /></button>
        </div>

        <div className="bar__sort">
          <button onClick={btnSortHandler} className="dropbtn button">Sorting</button>
          <div className="options">
            <a href="/">Cheaper</a>
            <a href="/">Popular</a>
            <a href="/">Best</a>
          </div>
        </div>
      </div>
    </>
  )
}
