"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const ProjectsData = [
    {
        id: 1,
        title: "Proyecto 1",
        description: "Proyecto 1 descripcion",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Proyecto 2",
        description: "Proyecto 2 descripcion",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Proyecto 3",
        description: "Proyecto 3 descripcion",
        image: "/images/projects/3.jpg",
        tag: "All",
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