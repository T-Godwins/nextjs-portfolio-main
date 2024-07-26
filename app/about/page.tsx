"use client";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from 'next/image';
import Link from "next/link";
import Particles from "../components/particles";

export default function About() {
    return (
        <>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <div className="relative min-h-screen w-full bg-gradient-to-tl from-zinc-800 via-blue-400/10 to-zinc-900">
                <Navigation />
                <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-left">
                            About Me
                        </h2>
                        <p className="mt-4 text-zinc-400">
                            Driven by innovation, and passionate about transformative technology and creative solutions.
                        </p>
                    </div>
                    <div className="w-full h-px bg-zinc-800" />
                    <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                        <Card key="brief bio">
                            <div className="flex flex-col items-center justify-center text-center">
                                <h1 className="text-5xl text-white p-5">Who am I?</h1>
                                <div className="p-1">
                                    <Image
                                        src="/Headshot.jpg"
                                        width={250}
                                        height={250}
                                        className="rounded-full"
                                        alt="Godwins Tuyishime Headshot"
                                    />
                                </div>
                                <p className="text-white text-lg p-5 text-left">
                                    Hi, I'm Godwins Tuyishime! I am a Data and Information Fellow at the Wofford College
                                    Career Center, where I specialize in automating and enhancing data management processes. With a solid 
                                    foundation in Python and a growing expertise in Tableau, I leverage AI to streamline tasks and deliver 
                                    data-driven insights. Additionally, as a Software Engineering Fellow at Headstarter, I am engaged in the 
                                    development of five AI projects in just five weeks.
                                </p>
                            </div>
                        </Card>
                        <div className="flex flex-col w-full gap-8 mx-auto lg:mx-0">
                            <Card key="skills">
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-3xl text-white p-5 pb-0 text-center">Skills</h1>
                                    <div className="text-white text-xl p-5 pt-0 text-left">
                                        <h2>Languages and Tools:</h2>
                                        <ul className="list-disc list-inside p-3">
                                            <li>Python, C++, JavaScript, TypeScript, CSS, HTML</li>
                                            <li>ReactJS, NodeJS, NextJS, Tableau</li>
                                        </ul>
                                    </div>
                                    <div className="text-white text-xl p-5 pt-0 text-left">
                                        <h2>Certifications:</h2>
                                        <ul className="list-disc list-inside p-3">
                                            <li>AWS Certified Cloud Practitioner - In Progress</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                            <Card key="hobbies">
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h1 className="text-3xl text-white p-5">Hobbies</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto lg:grid-cols-2 p-5">
                                    <div className="flex justify-center">
                                            <Image
                                                src="/bygwins.png"
                                                width={118}
                                                height={160}
                                                className="rounded-lg cursor-pointer"
                                                alt="Gdowins Tuyishime Bygwins Instagram"
                                            />
                                        </div>
                                        <div className="flex justify-center">
                                            <Image
                                                src="/soccer.jpeg"
                                                width={160}
                                                height={160}
                                                className="rounded-lg"
                                                alt="Godwins Tuyishime playingSoccer"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-white text-xl p-5">
                                        I enjoy <Link
                                            href="https://www.instagram.com/bygwins/"
                                            target="_blank"
                                            className="hover:text-red-500"
                                        >painting</Link>, running, playing soccer, and reading.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full h-px bg-zinc-800" />
                </div>
            </div>
        </>
    );
}
