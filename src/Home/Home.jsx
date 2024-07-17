"use client"
import React from "react"
import styles from "./Home.module.css"
import players from "./includes/players.json"
import AccordionComponent from "@/common/components/AccordionComponent/AccordionComponent"

const Home = () => {
    return (<div>
        <h3 className="text-center my-2">This is Home page</h3>
        <AccordionComponent data={players}/>
    </div>
    )
}

export default Home