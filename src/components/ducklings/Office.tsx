import MenuBar from "../menuBar/MenuBar";
import "./Office.scss";

const Office = () => {

    return (
        <div>
            <MenuBar />
            <div className="luka_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            <div className="ivan_trajector">
                <div className="shaking_wrapper"></div>
            </div>
            <div className="zoki_trajector">
                <div className="shaking_wrapper"></div>
            </div>
        </div>
    )
}

export default Office;