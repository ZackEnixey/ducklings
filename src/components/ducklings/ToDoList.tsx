import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import trashcan from "../../assets/trashcan.svg";
import plus from "../../assets/plus.png";
import "./ToDoList.scss";
import lukagif from "../../assets/lukagif.gif";
import ivangif from "../../assets/ivangif.gif";
import zokigif from "../../assets/zokigif.gif";
import minjagif from "../../assets/minjagif.gif";
import universal from "../../assets/universal.gif";

const ToDoList = () => {
    const [showToDoList, setShowToDoList] = useState<boolean>(false);
    const [selectedDuck, setSelectedDuck] = useState<string>("universal");

    const toggleToDoList = () => {
        setShowToDoList(!showToDoList);
    }

    const [tasks, setTasks] = useState<any>([{
        text: "Ukloniti krov iznad Minje",
        isCompleted: false,
        duck: universal
      },{
        text: "Kupiti karamela bombone",
        isCompleted: false,
        duck: universal
      },{
        text: "Nabaviti grejalice za terasu",
        isCompleted: false,
        duck: universal
      }]);
  
    const addTask = (text: any) => {
        setTasks([...tasks, { text: text, duck: allDucks[selectedDuck] }]);
    }

    const allDucks: any = {
        "universal": universal,
        "lukagif": lukagif,
        "ivangif": ivangif,
        "zokigif": zokigif,
        "minjagif": minjagif
    }
  
    const toggleTask = (index: any) => {
      const newTasks = [...tasks];
      newTasks[index].isCompleted = !newTasks[index].isCompleted;
      setTasks(newTasks);
    };
  
    const removeTask = (index: any) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };

    if(!showToDoList){
        return (<div className="todo_list_button" onClick={toggleToDoList}> The Board </div>)
    }

    const duckNames = ["minjagif", "lukagif", "ivangif", "zokigif", "universal"];

    const renderAllDucks = () => {
        return duckNames.map( (duck: string, index: number) => {
            return (
                <img className={`all_ducks_img ${duck===selectedDuck && "lightupduck"}` } onClick={() => setSelectedDuck(duck)} src={allDucks[duck]} alt="duck" key="index" />
            )
        })
    }

    return (
        <div className="todo_list_wrapper">
            <div className="todo_list_holder">
                <div className="close_button" onClick={toggleToDoList} > <img src={plus} alt="plus" /> </div>
                <div className="todo_list">
                    <div className="todo_list_items">
                        {tasks.map((task: any, index: any) => (
                            <div className="display_inline">
                                <div> <img className="duck_img" src={task.duck} alt="universal" /> </div>
                                <div className="todo">
                                    <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
                                        {task.text}
                                    </span>
                                    <button onClick={() => removeTask(index)}><img className="trash_can" src={trashcan} alt="trashcan" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <AddTaskForm addTask={addTask} />
                    <div className="select_duck_wrapper">
                        {renderAllDucks()}
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default ToDoList;