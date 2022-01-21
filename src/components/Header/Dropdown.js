import React, { useState } from 'react'
import { category } from './data'
import { price } from './data'
import { Link } from 'react-router-dom'
import './dropdown.css'
const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <ul
        className={dropdown ? 'category-submenu clicked' : 'category-submenu '}
        onClick={() => setDropdown(!dropdown)}
      >
        {category.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown
