"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Lion System Solutions</li>
        <p className="px-4">
          I develop activities such as API connections, creation of components
          and views, and database management for an e-commerce platform using
          .NET, VUE, and SQL.
        </p>

        <li>Cuauhtemoc University</li>
        <p className="px-4">
          I carried out activities ranging from credentialing, access control,
          report generation, and support for administrative staff and teachers,
          to connecting cameras and security devices, and cabling.
        </p>
      </ul>
    ),
  },
  {
    title: "Languajes",
    id: "Languajes",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Python</li>
        <li>.NET</li>
        <li>SQL</li>
        <li>NOSQL</li>
      </ul>
    ),
  },
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>Tensorflow</li>
        <li>Pytorch</li>
        <li>Django</li>
        <li>Node</li>
        <li>Power Bi</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Autonomum University of Aguascalientes</li>
        <p className="px-4">
          I developed projects in areas of web programming such as a dating
          application with .Net and Angular; mobile development, such as a CRUD
          system; report generation using Power BI, Tableau, and Orange; machine
          learning algorithms with Python, such as emotion and facial detection;
          and a sentiment detector for tweets using web scraping.
        </p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am from Aguascalientes, Mexico, 23 years old, and have 2 years of
            experience in the technology field. I am very enthusiastic about
            learning, especially self-directed learning.{" "}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selecTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("Languajes")}
              active={tab === "Languajes"}
            >
              {" "}
              Programing Languajes{" "}
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
