import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar() {
  return (
    <aside>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon'>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsCart3 className='icon'/> Dashboard
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar