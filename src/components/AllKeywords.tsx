import * as React from "react";

import {FunctionComponent} from "react";
import {useState} from "react";
import words from "../RenoJson.json";

export interface AllKeywordsProps {
    word:{
        id:number,
        keyword:string
    },
    addToSelected:()=>void


}

export const AllKeywords:FunctionComponent<AllKeywordsProps>=(props)=>{

    return(
        <button  key={props.word.id} onClick={props.addToSelected}>{props.word.keyword}</button>
    )
}