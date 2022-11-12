import { useNavigate } from 'react-router-dom';
import "./MenuBar.scss";

const MenuBar = () => {
    const navigate = useNavigate();

    const changePage = (path: string) => {
        navigate(`/${path}`);
    }

    return (
        <div className='display_in_line'>
            <button onClick={() => changePage("office")}> office </button>
            <button onClick={() => changePage("countdown")}> countdown </button>
        </div>
    )
}

export default MenuBar;