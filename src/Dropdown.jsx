import style from './Assets/ComponentStyles/dropdown.module.css'
import Menu from './Menu';
import Icon from './Icon';
import { useState } from 'react';

const Dropdown = (props) => {
    const [arrow, setArrow] = useState(true)
    const { showMenu, setShowMenu } = props;
    return (
        // The container div centers the dropdown horizontally
        <div className={style.container}>
            {/* This div will contain both button and menu and hence will have same width. It also positions the dropdown vertically 
                centered thru inline-styling */}
            <div style={{position: 'absolute', top: '45%'}}> 
                <button className={style.dropdownBtn} onMouseEnter={()=>{ setShowMenu(true); setArrow(false) }}> 
                    {/* Dropdown Title */}
                    <h3>Learn Web Development</h3>
                    {/* The Icon is Up/Down arrow which is conditionally rendered based on hover event on dropdown btn */}
                    <Icon arrow = { arrow } /> 
                </button>
                {/* on hover, menu is shown, icon updates to Up arrow. Upon click on menu item, menu dissapears and icon updates
                    to Down arrow again */}
                { showMenu ? <Menu setShowMenu = { setShowMenu } setArrow = { setArrow } /> : null }
            </div>
        </div>
    )
}

export default Dropdown;