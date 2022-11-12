import { FC, useState } from "react";
import plus from "../../assets/plus.png";
import "./ToDoList.scss";


const AddTaskForm: FC<any> = ({ addTask }) => {
    const [value, setValue] = useState<any>("");
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      value && addTask(value)
      setValue("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Unesite sta vam treba."
          onChange={e => setValue(e.target.value)}

        />
        <button type="submit"><img src={plus} alt="plus" /> </button>
      </form>
    );
  }

  export default AddTaskForm;