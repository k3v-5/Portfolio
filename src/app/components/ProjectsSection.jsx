"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const ProjectsData = [
    {
        id: 1,
        title: "Dating Aplication",
        description: "Developed a dating application using Angular, .NET and sql. The application allows users to create an account, upload photos, and search for other users based on their preferences. The application also includes a chat feature that allows users to communicate with each other in real-time.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Ecommerce Website",
        description: "Developed an e-commerce website using Nextjs and PostgreSQL. The website allows users to browse products, add them to their cart, and checkout using a credit card. The website also includes an admin panel that allows the site owner to add, edit, and delete products.",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Crypto Tracker",
        description: "Developed a cryptocurrency tracker using React and the CoinGecko API. The tracker allows users to search for cryptocurrencies and view their current price, market cap, and trading volume. The tracker also includes a watchlist feature that allows users to save their favorite cryptocurrencies.",
        image: "/images/projects/3.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Data Science Project",
        description: "Developed a cryptocurrency tracker using React and the CoinGecko API. The tracker allows users to search for cryptocurrencies and view their current price, market cap, and trading volume. The tracker also includes a watchlist feature that allows users to save their favorite cryptocurrencies.",
        image: "/images/projects/3.jpg",
        tag: ["All", "Data Science"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Data Science Project",
        description: "Developed a cryptocurrency tracker using React and the CoinGecko API. The tracker allows users to search for cryptocurrencies and view their current price, market cap, and trading volume. The tracker also includes a watchlist feature that allows users to save their favorite cryptocurrencies.",
        image: "/images/projects/3.jpg",
        tag: ["All", "Data Science"],
        gitUrl: "/",
        previewUrl: "/",
    }

]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = ProjectsData.filter((project)=>
        project.tag.includes(tag)
        );

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
                My projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Data Science"
                    isSelected={tag === "Data Science"}
                />
                
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection