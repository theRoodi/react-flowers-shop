import React from "react"
import "./bar.scss"



let openFilterNav = () => {
  document.querySelector(".filterNav").style.width = "100vw";
}

let closeFilterNav = () => {
  document.querySelector(".filterNav").style.width = "0";
}

const FilterNav = () => {
  return (
    <>
      <div className="filterNav">
        <div className="filterNav__content">
          <span className="filterNav__close" onClick={closeFilterNav}>x</span>
          <h2>Filters</h2>
          <div className="filterNav__body">

            <section className="price">
              <h4>Price:</h4>
              <input type="range" multiple="2" min="1" max="100" className="slider" id="myRange" />
            </section>

          </div>
          <button className="apply" onClick={closeFilterNav}>Apply</button>
        </div>
      </div>
    </>
  )
}

export const Bar = () => {
  return (
    <>
      <FilterNav />
      <div className="bar">
        <button className="bar__filter" onClick={openFilterNav}>
          Filtering
        </button>
        <div className="bar__search">
          <form action="">
            <input type="search" placeholder="Search.." />

          </form>
        </div>
        <div className="bar__sort">
          <label>Sorting by</label>
          <select name="Sorting" id="sort_options">
            <option value="По популярности">По популярности</option>
            <option value="По возрастанию цены">По возрастанию цены</option>
            <option value="По убыванию цены">По убыванию цены</option>
          </select>
        </div>
      </div>
    </>
  )
}
