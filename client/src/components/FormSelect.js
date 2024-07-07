import React from "react";

export default function FormSelect(props){
    return(
        <div class = "flex flex-col gap-2 w-[50%] text-lg">
            <p>{props.label}</p>
            <select class = "pl-2 w-[100%] h-[40px]"
                name={props.name}
                value={props.value}
                onChange={props.onChange}>
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
            </select>
            {props.error && <p class = "text-red-500 text-lg">{props.error}</p>}
        </div>
    )
}