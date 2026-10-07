"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useClipboardCopy } from "../hooks/useClipboardCopy";
import AvailabilityBadge from "./contact/AvailabilityBadge";
import CopyEmailButton from "./contact/CopyEmailButton";
import SocialLinks from "./contact/SocialLinks";

const CONTACT_EMAIL = "kevingarrido711@gmail.com";

export default function ContactSection() {
  const { t } = useLanguage();
  const contact = t.contact;
  const { copied, copy } = useClipboardCopy(2000);

  return (
    <section id="contact" className="justify-center !min-h-0 !py-10 lg:!py-14">
      <div className="content-card reveal-card max-w-5xl w-full text-center border-4 border-slate-50 dark:border-slate-800 shadow-2xl mx-4 relative overflow-hidden">
        <AvailabilityBadge badge={contact.badge} />

        <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 md:mb-6 tracking-[0.5em] mt-12 md:mt-0">
          {contact.eyebrow}
        </p>
        <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8 italic uppercase text-slate-900 dark:text-white">
          {contact.heading}
        </h2>
        <div className="text-slate-500 dark:text-slate-300 font-light text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          {contact.body}
        </div>

        <CopyEmailButton
          email={CONTACT_EMAIL}
          copied={copied}
          onCopy={() => copy(CONTACT_EMAIL)}
          copyHint={contact.copyHint}
          copiedHint={contact.copiedHint}
          openMailLabel={contact.openMail}
        />

        <SocialLinks label={contact.otherOptions} />
      </div>
    </section>
  );
}
