import React from "react"
import "./loader.css";

function Loader(props) {
    return (
        <div className="loader-full">
            <div className={props.loading ? "loader loader-active" : "loader loader-deactive"}></div>
        </div>
    )
}

export default Loader;