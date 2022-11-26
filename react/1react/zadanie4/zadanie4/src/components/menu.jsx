import "./menu.css"
import {Menu } from "../components/menu-data"

const MenuComp = () => {
    return (
      <ul className="list">
        {
          Menu.map(el => (
            <li className="li">
              <a href={el.link}>{el.name}</a>
            </li>
          )) //react-router-dom
        }  
      </ul>
    );
}

export default MenuComp;