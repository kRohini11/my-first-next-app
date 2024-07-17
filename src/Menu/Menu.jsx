"use client"

import styles from "./Menu.module.css"
import Link from 'next/link'
import menuItems from "./includes/menuItems.json"
import React, { useState } from 'react'
import { usePathname } from "next/navigation"

export const Menu = () => {
  const pathName=usePathname();
  const [menuItem, setMenuItem] = useState(pathName?.slice(1) || 'home');
  const handleClick = (path) => {
   // alert(path);
    setMenuItem(path);
  }
  return (
    <div className={styles.menu}>
      {
        menuItems?.map(({ path, text }, index) => {
          return <Link onClick={() => handleClick(path)} className={menuItem === path ? styles.menuActive : ""} key={`li_${index}`} href={`/${path}`}>{text}</Link>
        })
      }
    </div>
  )
}


