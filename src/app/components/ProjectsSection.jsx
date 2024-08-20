"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "Dating Aplication",
    description:
      "Developed a dating application using Angular, .NET and sql. The application allows users to create an account, upload photos, and search for other users based on their preferences. The application also includes a chat feature that allows users to communicate with each other in real-time.",
    image: "/images/projects/dating-app/principal.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/k3v-5/CitasApp",
    previewUrl: "https://github.com/k3v-5/CitasApp",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description:
      "Developed an e-commerce website using Nextjs and PostgreSQL. The website allows users to browse products, add them to their cart, and checkout using a credit card. The website also includes an admin panel that allows the site owner to add, edit, and delete products.",
    image: "/images/projects/tesla-shop/principal.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Crypto Tracker",
    description:
      "Developed a cryptocurrency tracker using React and the CoinGecko API. The tracker allows users to search for cryptocurrencies and view their current price, market cap, and trading volume. The tracker also includes a watchlist feature that allows users to save their favorite cryptocurrencies.",
    image: "/images/projects/crypto-tracker/principal.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/k3v-5/CryptoTracker",
    previewUrl: "https://cryptotrackerkg.netlify.app/",
  },
  {
    id: 4,
    title: "Covid-19 Data Analysis",
    description:
      "Analyzed Covid-19 data using Python and the Pandas library. The analysis included calculating the total number of cases, deaths, and recoveries for each country. The analysis also included creating visualizations such as bar charts and line graphs to help visualize the data.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Data Science"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Emotion Detection",
    description:
      "Developed an emotion detection model using Python and the OpenCV library. The model uses a webcam to capture a user's face and then uses a pre-trained deep learning model to detect the user's emotion. The model then displays the user's emotion on the screen.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Data Science"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Sentiment Analysis",
    description:
      "Developed a sentiment analysis model using Python . The model analyzes text data such as tweets and news articles to determine whether the sentiment is positive, negative, or neutral.",
    image: "/images/projects/sentiment-analysis/principal.jpg",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/k3v-5/Sentiment-analysis",
    previewUrl: "https://github.com/k3v-5/Sentiment-analysis",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
  );
};

export default ProjectsSection;
