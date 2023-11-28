"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Skills",
        id: "skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDb</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Express</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Autonum University of Aguascalientes</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content:(
            <ul className='list-disc pl-2'>
                <li>Cuauhtemoc University</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam modi esse reprehenderit maxime placeat consequuntur nesciunt harum, delectus, tempora, error facilis nulla dolores nam hic qui vel dignissimos obcaecati?
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selecTab={() => handleTabChange("skills")}
                            active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selecTab={() => handleTabChange("education")}
                            active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selecTab={() => handleTabChange("experience")}
                            active={tab === "experience"}>
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t)=> t.id===tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection