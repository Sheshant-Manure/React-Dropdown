import style from './Assets/ComponentStyles/dropdown.module.css'
import Menu from './Menu';
import Icon from './Icon';
import { useState } from 'react';

const Dropdown = (props) => {
    const [arrow, setArrow] = useState(true)
    const { showMenu, setShowMenu } = props;
    return (<>
        <div className={style.container}>
            <div style={{position: 'absolute', top: '45%'}}> {/* This div makes the dropdown menu width same as Button width */}
                <button className={style.dropdownBtn} onMouseEnter={()=>{ setShowMenu(true); setArrow(false) }}> 
                    <h3>Learn Web Development</h3>
                    <Icon arrow = { arrow } /> 
                </button>
                { showMenu ? <Menu setShowMenu = { setShowMenu } setArrow = { setArrow } /> : null }
            </div>
        </div>
    </>)
}

export default Dropdown;