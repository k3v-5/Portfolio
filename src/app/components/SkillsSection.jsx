import React from "react";

const skills = [
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "TypeScript",
  "Python",
  ".NET",
  "TensorFlow",
  "PyTorch",
  "Django",
  "Node.js",
  "SQL",
  "NoSQL",
  "Power BI",
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="grid-layout">
        <div className="content-card reveal-card">
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest">
            // MODULE_03: TECH_STACK
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase italic">
            Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
