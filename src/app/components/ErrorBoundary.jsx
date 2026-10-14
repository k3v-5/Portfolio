"use client";

import React from "react";

/**
 * ErrorBoundary - Componente de protección contra fallos en tiempo de ejecución.
 * Cumple con el principio de robustez y resiliencia en arquitecturas modernas,
 * aislando fallos en subárboles de componentes sin comprometer la aplicación completa.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[ErrorBoundary caught an error]:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === "function"
          ? this.props.fallback({ error: this.state.error, reset: this.handleReset })
          : this.props.fallback;
      }

      const sectionTitle = this.props.sectionName || "SUBSYSTEM";

      return (
        <div className="w-full my-6 p-6 rounded-xl border border-red-500/20 bg-red-950/10 backdrop-blur-sm font-mono text-left text-xs">
          <div className="flex items-center justify-between mb-3 border-b border-red-500/10 pb-2">
            <span className="text-red-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {`// SYSTEM_FAILSAFE: [${sectionTitle}]`}
            </span>
            <button
              onClick={this.handleReset}
              className="px-2.5 py-1 text-[10px] tracking-widest uppercase bg-red-500/10 hover:bg-red-500/20 text-red-300 rounded border border-red-500/30 transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
          <p className="text-stone-400 mb-2 leading-relaxed">
            Se contuvo una anomalía en este subsistema para preservar la estabilidad general del sistema.
          </p>
          {process.env.NODE_ENV !== "production" && this.state.error && (
            <pre className="mt-2 p-2 bg-black/40 rounded text-red-300/80 overflow-x-auto text-[10px]">
              {this.state.error.message || String(this.state.error)}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
