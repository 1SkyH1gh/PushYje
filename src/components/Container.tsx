import * as React from 'react'
import {AllKeywords} from "./AllKeywords";
import {FunctionComponent, useState} from "react";
import words from '../RenoJson.json'
import selected from '../SelectedJson.json'
import {Selected} from "./Selected";


export interface ContainerProps {

}
export const Container:FunctionComponent<ContainerProps>=()=>{

    /*Хук для моих выбранных слов
    * По клику на слово он его удаляет
    * */
    const [SelectedElem,delElem]=useState(selected)
    /*Хук для всех слов из БД.По клику на экземпляр
    * ДОЛЖЕН добавлять его в селектер вордс
    * */
    const [elem,PushElem]=useState(selected)
    /*
    * Хук для удаления всех селектедов
    * */
    const [allElem,deleter]=useState(selected)
/*
* Функция,выполняющая удаление всех селектед слов*/
    const deleteAll=()=>{
        deleter(allElem.splice(0,allElem.length))
    }
    /*form*/
    const handleSubmit=()=>{
        for(let i=0;i<words.length;i++){

        }
    }

    return(

        <div>
            <button onClick={deleteAll}>
                Delete All
            </button>
            <div className="Selected">
                {selected.map((Selectword: { id: number; keyword: string; })=>
                <Selected Selectword={Selectword}
                del={()=>delElem(SelectedElem.splice(Selectword.id,1))}/>
                )}
            </div>
            <div className="searchForm">
            <form onSubmit={handleSubmit}>
                <input placeholder="search"/>
            </form>
            </div>
        <div className="AllWords">
            {words.map((word:{id:number;keyword:string})=>

                <AllKeywords word={word}
                addToSelected={()=>PushElem(elem.splice(elem.length-1,0,word))
                }/>
            )
            }
        </div>

        </div>
    )
}