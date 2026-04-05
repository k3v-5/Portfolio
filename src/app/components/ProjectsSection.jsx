"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";

const ProjectsData = [
  {
    id: 1,
    title: "Dating App",
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
      "Developed an e-commerce website using Next.js and PostgreSQL. The website allows users to browse products, add them to their cart, and checkout using a credit card. The website also includes an admin panel that allows the site owner to add, edit, and delete products.",
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
    title: "Sentiment Analysis",
    description:
      "Developed a sentiment analysis model using Python . The model analyzes text data such as tweets and news articles to determine whether the sentiment is positive, negative, or neutral.",
    image: "/images/projects/sentiment-analysis/principal.jpg",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/k3v-5/Sentiment-analysis",
    previewUrl: "https://github.com/k3v-5/Sentiment-analysis",
  },
];

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const cardsRef = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag),
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-anim",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );
    }, cardsRef);
    return () => ctx.revert();
  }, [tag]);

  return (
    <section id="proyectos" className="flex-col w-full relative z-10">
      <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
        <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
          // MODULE_04: PORTFOLIO
        </p>
        <h2 className="text-5xl lg:text-8xl font-black text-slate-900 uppercase italic tracking-tighter">
          Proyectos
        </h2>
      </div>

      {/* Menú de Filtros (Tabs) */}
      <div className="flex flex-wrap justify-center items-center gap-4 py-6 mb-8 w-full">
        {["All", "Web", "Data Science"].map((tagName) => (
          <button
            key={tagName}
            onClick={() => handleTagChange(tagName)}
            className={`${
              tag === tagName
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            } rounded-full px-6 py-2.5 text-xs font-bold font-mono uppercase tracking-widest transition-all shadow-sm`}
          >
            {tagName}
          </button>
        ))}
      </div>

      <div ref={cardsRef} className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card-anim bg-white/95 backdrop-blur-[20px] border border-black/5 p-8 md:p-10 rounded-[3rem] shadow-2xl block"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative group border border-slate-100">
                <div
                  className="w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    background: `url(${project.image}) center center`,
                    backgroundSize: "cover",
                  }}
                ></div>
                {/* OVERLAY CON ICONOS */}
                <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                  <Link
                    href={project.gitUrl}
                    target="_blank"
                    className="h-14 w-14 mr-4 border-2 flex items-center justify-center relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  >
                    <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
                  </Link>
                  <Link
                    href={project.previewUrl}
                    target="_blank"
                    className="h-14 w-14 border-2 flex items-center justify-center relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  >
                    <EyeIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
                  </Link>
                </div>
              </div>
              <h3 className="text-3xl font-black text-slate-900 uppercase italic">
                {project.title}
              </h3>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <p className="text-slate-400 font-mono text-[9px] mt-6 uppercase tracking-widest">
                {project.tag.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
