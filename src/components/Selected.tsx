import * as React from "react";
import {FunctionComponent} from "react";

export interface SelectedProps {
    Selectword:{
        id:number,
        keyword:string
    },
    del:()=>void,
}

export const Selected:FunctionComponent<SelectedProps>=(props)=>{
    return(
        <button onClick={props.del} key={props.Selectword.id}>{props.Selectword.keyword}</button>
    )
}