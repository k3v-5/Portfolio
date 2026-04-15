"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import CustomCursor from "../components/CustomCursor";
import MatrixBackground from "../components/MatrixBackground";

// Micro-componente para estandarizar los títulos de sección
const SectionHeading = ({ number, title }) => (
  <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic mb-3 md:mb-4 flex items-center tracking-tight">
    <span className="text-purple-500 font-mono text-sm md:text-base mr-4 tracking-widest opacity-80">
      {number}.
    </span>
    {title}
  </h2>
);

// Micro-componente para estandarizar los elementos de lista tipo terminal
const ListItem = ({ children }) => (
  <li className="flex items-start group">
    <span className="text-purple-500 mr-3 font-mono text-xs leading-relaxed mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
      {">>"}
    </span>
    <span className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
      {children}
    </span>
  </li>
);

export default function PrivacyPolicy() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Inicializamos Lenis para el Smooth Scroll
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const ctxGsap = gsap.context(() => {
      // Animación de la línea SVG
      const path = document.querySelector("#scroll-path");
      if (path) {
        const pathLength = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".scroll-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      }
    }, containerRef);

    return () => {
      ctxGsap.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen scroll-container">
      <MatrixBackground />
      <CustomCursor />

      {/* Línea SVG de fondo */}
      <div className="svg-line-container" style={{ opacity: 0.7 }}>
        <svg
          viewBox="0 0 2120 2590"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            id="scroll-path"
            d="M698.973 23.7537C844.473 293.254 1969.97 211.754 2033.97 425.754C2097.97 639.754 432.989 765.83 87.4731 964.754C-258.043 1163.68 1896.97 1777.25 2059.47 1221.25C2221.97 665.254 266.973 2102.75 87.4731 1666.25C-92.0268 1229.75 2102.48 2090.25 1841.47 2269.75C1580.47 2449.25 626.473 2539.25 626.473 2539.25 L 626.473 2590"
            stroke="#9F44C9"
            strokeWidth="100"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 relative z-10">
        <Link
          href="/"
          className="group inline-flex items-center text-slate-500 hover:text-purple-600 font-mono text-xs md:text-sm tracking-widest uppercase mb-12 transition-all duration-300"
        >
          <svg
            className="w-4 h-4 mr-3 transform group-hover:-translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {"// BACK_TO_HOME"}
        </Link>

        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-white/50 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
          {/* Header Section */}
          <div className="mb-4 border-b border-slate-100 pb-4">
            <p className="font-mono text-[10px] md:text-xs text-purple-500 mb-4 tracking-widest uppercase">
              {"// LEGAL_DOC: PRIVACY_POLICY"}
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter mb-8">
              Privacy Policy
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 lg:gap-24">
              <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed max-w-2xl">
                Thank you for using our applications and services. This Privacy
                Policy explains how we collect, use, store, and protect
                information when you use our digital services developed by Kevin
                Garrido and/or any associated brands, projects, or products.
              </p>
              <div className="bg-white/60 border border-white/40 px-5 py-4 rounded-2xl shrink-0 self-start md:self-auto backdrop-blur-sm shadow-sm">
                <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mb-1">
                  Last Updated
                </p>
                <p className="text-slate-900 font-bold text-sm">
                  April 14, 2026
                </p>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="">
            <section className="pt-4">
              <SectionHeading number="01" title="Information We May Collect" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mb-3">
                Depending on the application or service you use, we may collect:
              </p>
              <ul className="space-y-2 md:space-y-2.5">
                <ListItem>
                  <strong className="text-slate-900 font-medium">
                    Directly provided information:
                  </strong>{" "}
                  Such as name, email address, feedback, or support requests.
                </ListItem>
                <ListItem>
                  <strong className="text-slate-900 font-medium">
                    Device and technical data:
                  </strong>{" "}
                  Device model, operating system, language, and app version.
                </ListItem>
                <ListItem>
                  <strong className="text-slate-900 font-medium">
                    Usage analytics:
                  </strong>{" "}
                  Screens visited, features used, and technical errors.
                </ListItem>
                <ListItem>Information stored locally on your device.</ListItem>
                <ListItem>
                  Data required for specific features requested by the user.
                </ListItem>
              </ul>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="02" title="How We Use Information" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mb-3">
                We may use collected information to:
              </p>
              <ul className="space-y-2 md:space-y-2.5">
                <ListItem>
                  Provide and improve our applications and services.
                </ListItem>
                <ListItem>Save user settings and local preferences.</ListItem>
                <ListItem>Fix bugs and improve system performance.</ListItem>
                <ListItem>Provide customer or technical support.</ListItem>
                <ListItem>Develop new features and digital products.</ListItem>
                <ListItem>Comply with applicable legal obligations.</ListItem>
              </ul>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading
                number="03"
                title="Local Storage and Synchronization"
              />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                Some applications may store information locally on your device.
                In certain cases, data may also be synchronized with cloud
                services or authorized third parties depending on the features
                of each application.
              </p>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="04" title="Sharing of Information" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mb-3">
                We do not sell personal information. We may share data only in
                the following cases:
              </p>
              <ul className="space-y-2 md:space-y-2.5">
                <ListItem>
                  Technology providers required to operate the service.
                </ListItem>
                <ListItem>Analytics or performance tools.</ListItem>
                <ListItem>
                  Legal compliance or valid government requests.
                </ListItem>
                <ListItem>
                  Protection of rights, security, or fraud prevention.
                </ListItem>
              </ul>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="05" title="Third-Party Services" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                Our applications may integrate third-party services such as
                cloud storage, maps, analytics, payments, authentication,
                advertising, or external APIs. Each provider has its own privacy
                practices and policies which govern their data handling.
              </p>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="06" title="Security" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                We implement reasonable and modern measures to protect
                information. However, no system or transmission over the
                internet can be guaranteed as completely secure.
              </p>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="07" title="Data Retention" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                We retain information only for as long as necessary to operate
                the service, comply with legal obligations, resolve disputes, or
                support the intended functionality of our products.
              </p>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="08" title="Your Rights" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mb-3">
                Depending on your country or region, you may have rights to:
              </p>
              <ul className="space-y-2 md:space-y-2.5">
                <ListItem>Access your stored data.</ListItem>
                <ListItem>Request corrections to your information.</ListItem>
                <ListItem>Request deletion of your data.</ListItem>
                <ListItem>Restrict certain data processing uses.</ListItem>
                <ListItem>Withdraw consent where applicable.</ListItem>
              </ul>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="09" title="Children's Privacy" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                Our services are not intentionally directed to children without
                parental or guardian consent where required by law. If we become
                aware that we have collected data from children without proper
                consent, we will delete it.
              </p>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="10" title="Changes to This Policy" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                We may update this Privacy Policy from time to time. Changes
                become effective immediately when the updated version is
                published on this page or within the respective application.
              </p>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="11" title="Contact" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mb-3">
                For privacy-related questions or support inquiries, please
                contact:
              </p>
              <div className="bg-white/60 border border-white/40 p-6 rounded-2xl inline-block backdrop-blur-sm shadow-sm">
                <p className="font-bold text-slate-900 mb-1">Kevin Garrido</p>
                <a
                  href="mailto:kevingarrido711@gmail.com"
                  className="text-purple-500 hover:text-purple-600 transition-colors font-mono text-sm flex items-center group"
                >
                  kevingarrido711@gmail.com
                  <svg
                    className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <SectionHeading number="12" title="Scope" />
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                This Privacy Policy applies generally to current and future
                applications, tools, websites, and digital products developed by
                Kevin Garrido, associated brands, or related projects, unless a
                specific product explicitly provides its own separate privacy
                policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
