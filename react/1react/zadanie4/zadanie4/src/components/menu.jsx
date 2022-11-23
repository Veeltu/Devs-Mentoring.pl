import "./menu.css"
import {Menu } from "../components/menu-data"

const MenuComp = () => {
const name = Menu.map((e) => e.name)
const link = Menu.map((e) => e.link)
    return (
      <ul className="list">
        <li className="li">
          <a href={link[0]}>{name[0]}</a>
        </li>
        <li className="li">
          <a href={link[1]}>{name[1]}</a>
        </li>
        <li className="li">
          <a href={link[2]}>{name[2]}</a>
        </li>
        <li className="li">
          <a href={link[3]}>{name[3]}</a>
        </li>
  
      </ul>
    );
}

export default MenuComp;