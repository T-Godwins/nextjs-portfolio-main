"use client";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from 'next/image';


export default function About(){
    return(
        <div className="p-80">
            <Card>
            <h1 className="text-5xl text-white p-3">About Me</h1>
            <img src="../../public/Headshot.jpg" width={250} height={250} className="rounded-lg"></img>
            <p className="text-white p-5" > I am currently a Data and Information Fellow at Wofford College's Career Center, 
                where I focus on automating and improving data management processes. With a solid foundation in Python and 
                a growing expertise in Tableau, I leverage AI to streamline tasks and enhance data-driven insights. 
                I am also a Software Engineering Fellow at Headstarter where I am embarking on building 5 AI projects in 5 weeks. 
            </p>
            </Card>
        </div>
    );
}
