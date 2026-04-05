import React from "react";

export default function ContactSection() {
  return (
    <section id="contacto" className="justify-center">
      <div className="content-card reveal-card max-w-5xl w-full text-center border-4 border-slate-50 shadow-2xl mx-4">
        <p className="font-mono text-[10px] text-purple-500 mb-6 tracking-[0.5em]">
          &gt;&gt; SIGNAL_READY
        </p>
        <h2 className="text-6xl font-black mb-12 italic uppercase text-slate-900">
          Hablemos.
        </h2>
        <form
          className="space-y-6 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="IDENTITY"
              className="bg-slate-50 border border-slate-200 p-6 rounded-3xl font-mono text-xs outline-none focus:border-purple-500 transition-all text-slate-900"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-slate-50 border border-slate-200 p-6 rounded-3xl font-mono text-xs outline-none focus:border-purple-500 transition-all text-slate-900"
            />
          </div>
          <textarea
            placeholder="PAYLOAD"
            rows="4"
            className="w-full bg-slate-50 border border-slate-200 p-6 rounded-3xl font-mono text-xs outline-none focus:border-purple-500 transition-all text-slate-900"
          ></textarea>
          <button className="w-full bg-slate-900 py-6 rounded-3xl font-black font-mono text-[10px] uppercase tracking-[0.5em] hover:bg-purple-600 text-white transition-all transform active:scale-95 shadow-2xl">
            [ SEND_EXECUTE ]
          </button>
        </form>
      </div>
    </section>
  );
}
