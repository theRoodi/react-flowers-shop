import React from "react"
import "./bar.scss"

export const Bar = () => {
    return (
    <div className="bar">
      <div className="bar__filter">
        Filtering
      </div>
      <div className="bar__search">
        <form action="">
            <input type="search" placeholder="Search.." />
            
        </form>
      </div>
      <div className="bar__sort">
        Sorting
      </div>
    </div>
    )
}
      