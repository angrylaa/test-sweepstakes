import React from "react";

export default function FormItem(props){
    return(
        <div class = "flex flex-col gap-2 w-[50%] text-lg">
            <p>{props.label}</p>
            <input class = "pl-2 w-[100%] h-[40px]"
            type = "text"
            name={props.name}
            value={props.value}
            onChange={props.onChange}></input>
            {props.error && <p class = "text-red-500 text-lg">{props.error}</p>}
        </div>
    )
}