import React from "react"
export default function listItem(props) {
    return(
        <li>
            <input type="checkbox"/>
            <label>{ props.todo }</label>
            <button className="delete">Delete</button>
        </li>
    )
}
