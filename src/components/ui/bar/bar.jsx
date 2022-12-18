import React from "react"
import "./bar.scss"

let openFilterNav = () => {
  document.querySelector(".filterNav").style.display = "block";
}

let closeFilterNav = () => {
  document.querySelector(".filterNav").style.display = "none";
}






const FilterNav = () => {
  return (
    <>
      <div class="filterNav">
        <div class="filterNav-content">
          <div class="modal-header">
            <span class="close" onClick={closeFilterNav}>x</span>
          </div>
          <div class="modal-body">
            <p>Some text in the Modal Body</p>
          </div>
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
