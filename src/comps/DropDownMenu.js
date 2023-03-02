import React from 'react'

const DropDownMenu = ({openDrop,findCategory}) => {
  return (
    <div className={`dropdown-menu ${openDrop? 'active' : 'inactive'}`} >
          
          <ul>
            <li className = 'dropdownItem'> 
            <button onClick={()=>findCategory('restaurant')}>Resataurenate</button>

            </li>
          </ul>
        </div>
  )
}

export default DropDownMenu
