import { useState } from "react";
import MenuBar from "../menuBar/MenuBar";
import "./Office.scss";
import ToDoList from "./ToDoList";

const Office = () => {

    return (
        <div>
            <ToDoList />
            
            <div className="luka_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            <div className="ivan_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            <div className="zoki_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            <div className="minja_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            <div className="nikola_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            
            <div className="sara_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            <div className="pedja_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            <div className="srba_trajector">
                <div className="shaking_wrapper"></div>
            </div>

            <div className="show_hide">
                <div className="swinging" style={{top: "43vh", right: "0vw"}}>
                    <div className="cigarette"></div>
                </div>
            </div>

            <div className="show_hide">
                <div className="swinging" style={{top: "51vh"}}>
                    <div className="cigarette"></div>
                </div>
            </div>

            <div className="show_hide">
                <div className="swinging" style={{top: "60vh", right: "1vw"}}>
                    <div className="cigarette"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Office;