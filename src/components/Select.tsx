import * as React from "react";
import {FunctionComponent} from "react";

export interface SelectProp {
    word:{
        id:number,
        keyword:string
    }
}
export const Select:FunctionComponent<SelectProp>=(props)=>{
    return(
        <button>{props.word.keyword}</button>
    )
}