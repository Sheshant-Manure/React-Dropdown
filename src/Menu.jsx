import { dropdownList } from './dropdownlist';
import style from './Assets/ComponentStyles/menu.module.css'

const Menu = (props) => {
    const  { setShowMenu, setArrow } = props;
    return (
        <div className = {style.menu} >
            {/* The menu disappears on click of any of its list item and downarrow icon is updated */}
            <ul>
            {dropdownList.map((item, i)=>(<li key={i} onClick={ ()=> { setShowMenu(false); setArrow(true) } }>{item.name}</li>))}
            </ul>
        </div>
    )
}

export default Menu;