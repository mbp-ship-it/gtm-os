"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  ChevronRight,
  Play,
  Loader,
  Check,
  X,
} from "lucide-react";
import { ThemeToggle } from "./theme";

/* ============================================================ */
/*  GTM-OS · LANDING PAGE                                       */
/*  Lightfield-shaped IA · Anduril discipline · light default   */
/* ============================================================ */

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-fg">
      <div className="grain" />

      <Nav />

      <main className="relative z-10">
        <Hero />
        <AntiVillain />
        <WatchItRun />
        <Foundations />
        <WhatYouCanDo />
        <ModuleLibrary />
        <RecipeStack />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

/* ============================================================ */
/*  NAV                                                         */
/* ============================================================ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="/" className="flex items-baseline gap-2">
          <span className="font-display text-[20px] tracking-tighter-2" style={{ fontWeight: 700 }}>gtm-os</span>
          <span className="font-mono text-[10px] tracking-widest uppercase text-fg-dim">v0.1</span>
        </a>

        <div className="flex items-center gap-7 text-[13px]" style={{ fontWeight: 500 }}>
          <a href="#library" className="text-fg-muted hover:text-fg transition-colors">Modules</a>
          <a href="/workspaces" className="text-fg-muted hover:text-fg transition-colors">Workspaces</a>
          <a href="#recipes" className="text-fg-muted hover:text-fg transition-colors">Recipes</a>
          <a href="https://github.com" className="text-fg-muted hover:text-fg transition-colors flex items-center gap-1.5">
            <Github size={13} strokeWidth={1.8} /> GitHub
          </a>
          <ThemeToggle />
          <a
            href="/workspaces/axiom-agents"
            className="px-4 py-2 rounded-md transition-all text-[12px]"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Try the demo
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================ */
/*  HERO                                                        */
/* ============================================================ */

function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="font-mono text-[11px] tracking-widest uppercase text-fg-dim mb-6 fade-up fade-up-1">
          OPEN SOURCE · MIT LICENSED · BRING YOUR OWN API KEY
        </div>

        {/* Headline */}
        <h1
          className="font-display text-[64px] md:text-[88px] lg:text-[104px] tracking-tighter-3 leading-[0.95] mb-6 fade-up fade-up-2"
          style={{ fontWeight: 800, maxWidth: "1100px" }}
        >
          The operating system<br />
          for go-to-market.
        </h1>

        {/* Sub */}
        <p
          className="text-[18px] md:text-[20px] leading-[1.5] text-fg-muted max-w-[640px] mb-10 fade-up fade-up-3"
          style={{ fontWeight: 400 }}
        >
          Thirteen skills. One orchestrator. Context that chains automatically between them. Run against a target company, get a populated workspace of artifacts that read like deliverables.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 mb-20 fade-up fade-up-4">
          <a
            href="/workspaces/axiom-agents"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[14px] transition-all"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Try the demo <ArrowRight size={14} strokeWidth={2} />
          </a>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[14px] transition-all border"
            style={{
              borderColor: "var(--border-strong)",
              color: "var(--fg)",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Github size={14} strokeWidth={2} /> View on GitHub
          </a>
        </div>

        {/* Hero product mockup */}
        <div className="fade-up fade-up-5">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      {/* Background workspace mockup */}
      <div
        className="relative rounded-lg overflow-hidden border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border-strong)",
          aspectRatio: "16 / 9",
          maxHeight: "640px",
        }}
      >
        {/* Mock workspace chrome */}
        <div
          className="absolute inset-x-0 top-0 h-10 border-b flex items-center px-4 gap-2"
          style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="font-mono text-[10px] text-fg-dim tracking-wider">
              gtm-os · axiom-agents workspace
            </div>
          </div>
        </div>

        {/* Three-column layout */}
        <div className="absolute inset-0 top-10 grid grid-cols-[200px_1fr_220px]">
          {/* Left rail */}
          <div
            className="border-r p-4 space-y-1.5 overflow-hidden"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="font-mono text-[9px] tracking-widest uppercase text-fg-dim mb-3">§ MODULES</div>
            {[
              { num: "01", name: "Competitive Battlecard", state: "complete" },
              { num: "02", name: "Messaging & Positioning", state: "complete" },
              { num: "03", name: "Launch Playbook", state: "complete" },
              { num: "04", name: "Sales Enablement", state: "complete" },
              { num: "05", name: "Win/Loss Analyzer", state: "complete" },
              { num: "06", name: "Pricing & Packaging", state: "running" },
              { num: "07", name: "Customer Story", state: "queued" },
              { num: "08", name: "POC Playbook", state: "queued" },
            ].map((m) => (
              <div
                key={m.num}
                className="flex items-center gap-2 py-1 px-1.5 rounded"
                style={{
                  background: m.state === "running" ? "var(--accent-soft)" : "transparent",
                  borderLeft: m.state === "running" ? "1.5px solid var(--accent)" : "1.5px solid transparent",
                }}
              >
                <span className="font-mono text-[9px] text-fg-dim w-4">{m.num}</span>
                <span
                  className="text-[10.5px] truncate flex-1"
                  style={{ color: m.state === "complete" || m.state === "running" ? "var(--fg)" : "var(--fg-dim)" }}
                >
                  {m.name}
                </span>
                {m.state === "complete" && (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                )}
                {m.state === "running" && (
                  <Loader size={9} strokeWidth={2.5} className="spin-slow" style={{ color: "var(--accent)" }} />
                )}
                {m.state === "queued" && (
                  <span className="w-1.5 h-1.5 rounded-full border" style={{ borderColor: "var(--fg-very-dim)" }} />
                )}
              </div>
            ))}
          </div>

          {/* Center artifact preview */}
          <div className="p-6 overflow-hidden relative" style={{ background: "var(--bg)" }}>
            <div className="font-mono text-[9px] tracking-widest uppercase text-accent mb-2">§ 05 · WIN/LOSS ANALYZER</div>
            <div className="text-[22px] font-semibold tracking-tighter-2 mb-1" style={{ color: "var(--fg)", fontWeight: 700 }}>
              Stated reason vs root cause
            </div>
            <div className="font-mono text-[10px] text-fg-dim mb-5">Q1 2026 cohort · n=23 · pattern-level synthesis</div>

            {/* Mini divergence table */}
            <div className="space-y-2">
              {[
                { label: "Pacific Crest", stated: "Build flexibility", root: "Vendor relationship overhang", tag: "Loss" },
                { label: "Meridian Industrial", stated: "Better technical fit", root: "Security review was decisive", tag: "Win" },
                { label: "Hartwell Logistics", stated: "Need to standardize", root: "Mid-ELA bundle inertia", tag: "Loss" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[100px_1fr_1fr_60px] gap-3 py-2 border-b text-[11px]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: row.tag === "Win" ? "var(--ok)" : "var(--accent)" }}
                    />
                    <span style={{ color: "var(--fg)" }}>{row.label}</span>
                  </div>
                  <div className="text-fg-dim">{row.stated}</div>
                  <div style={{ color: "var(--fg)" }}>{row.root}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-fg-dim text-right">
                    {row.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right rail */}
          <div
            className="border-l p-4 overflow-hidden"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="font-mono text-[9px] tracking-widest uppercase text-fg-dim mb-3">§ RUN METADATA</div>
            <div className="space-y-2 text-[10px]">
              <div className="flex justify-between"><span className="text-fg-dim">Model</span><span style={{ color: "var(--fg)" }}>Opus 4.7</span></div>
              <div className="flex justify-between"><span className="text-fg-dim">Effort</span><span style={{ color: "var(--fg)" }}>xhigh</span></div>
              <div className="flex justify-between"><span className="text-fg-dim">Tokens</span><span className="font-mono" style={{ color: "var(--fg)" }}>16.4K</span></div>
              <div className="flex justify-between"><span className="text-fg-dim">Duration</span><span className="font-mono" style={{ color: "var(--fg)" }}>52s</span></div>
              <div className="flex justify-between"><span className="text-fg-dim">Flags</span><span style={{ color: "var(--accent)" }}>4</span></div>
            </div>

            <div className="mt-6 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="font-mono text-[9px] tracking-widest uppercase text-fg-dim mb-2">§ DEPENDS ON</div>
              <div className="text-[10px] space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-fg-dim">01</span>
                  <span style={{ color: "var(--fg)" }}>ServiceNow</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-fg-dim">02</span>
                  <span style={{ color: "var(--fg)" }}>Messaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating orchestrator chip */}
      <div
        className="absolute -top-6 left-12 lg:left-24 px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 fade-up fade-up-5"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-strong)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <Loader size={14} strokeWidth={2.5} className="spin-slow" style={{ color: "var(--accent)" }} />
        <div>
          <div className="font-mono text-[9px] tracking-widest uppercase text-fg-dim">◆ ORCHESTRATOR</div>
          <div className="text-[12px]" style={{ color: "var(--fg)", fontWeight: 500 }}>Running · Deal Desk Package</div>
        </div>
        <div className="font-mono text-[10px] ml-3 text-fg-dim">3 of 4 modules</div>
      </div>
    </div>
  );
}

/* ============================================================ */
/*  ANTI-VILLAIN INTRO                                          */
/* ============================================================ */

function AntiVillain() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
          <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim lg:pt-2">
            INTRODUCING GTM-OS
          </div>

          <div className="max-w-[680px] space-y-6 text-[18px] leading-[1.6] text-fg">
            <p>
              <span style={{ color: "var(--fg-dim)", fontWeight: 400 }}>Traditional GTM tools expect you to</span> <span style={{ color: "var(--fg)", fontWeight: 500 }}>draft battlecards from blank, hold competitive intel in your head, and reinvent messaging every time a competitor releases a feature.</span> They're built to record work after it's done — not to encode the discipline that produces good work in the first place.
            </p>

            <p>
              <span style={{ fontWeight: 600 }}>gtm-os is the operating system marketers run their thinking on.</span> Skills carry the discipline. Context chains between them automatically. Every artifact is a deliverable — not a chat transcript, not a slide template, not a generic AI output.
            </p>

            <p style={{ fontSize: 22, fontWeight: 600, color: "var(--fg)", letterSpacing: "-0.02em" }}>
              You operate. The skills carry the discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  WATCH IT RUN                                                */
/* ============================================================ */

function WatchItRun() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div
          className="relative rounded-2xl overflow-hidden border"
          style={{
            background: "#0A0A0A",
            borderColor: "#1C1C1C",
            aspectRatio: "21 / 9",
            minHeight: "480px",
          }}
        >
          {/* Dark mode preserved here for product-presence moment */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center px-6">
              <div className="font-mono text-[11px] tracking-widest uppercase mb-6" style={{ color: "#A08148" }}>
                ◆ ORCHESTRATOR · LIVE
              </div>

              <h2
                className="text-[56px] md:text-[80px] lg:text-[96px] mb-8 tracking-tighter-3"
                style={{ color: "#EDEDED", fontWeight: 800, lineHeight: 0.95 }}
              >
                Watch a recipe run.
              </h2>

              <p className="text-[16px] mb-10 max-w-[560px] mx-auto" style={{ color: "#A0A0A0" }}>
                Pick a recipe. Watch the chain execute. Modules light up, context propagates, and a package of artifacts lands at the end.
              </p>

              <a
                href="/workspaces/axiom-agents"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[14px] transition-all"
                style={{
                  background: "#E8B44C",
                  color: "#0A0A0A",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F0C268")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E8B44C")}
              >
                <Play size={14} strokeWidth={2} fill="#0A0A0A" /> Run a recipe
              </a>
            </div>
          </div>

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, transparent 49%, rgba(232,180,76,0.06) 50%, transparent 51%, transparent 100%)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  FOUNDATIONS                                                 */
/* ============================================================ */

function Foundations() {
  const principles = [
    {
      tag: "01",
      title: "Targets are first-class.",
      body: "A workspace is one company. Modules run inside the workspace's context. Nothing leaks between targets. Switch workspaces, get a different operating context.",
    },
    {
      tag: "02",
      title: "Artifacts, not chat.",
      body: "Every module produces a document a marketer would hand to someone — battlecard, messaging architecture, customer story, RFP analysis. They render as deliverables, with section markers, evidence flags, and approval state.",
    },
    {
      tag: "03",
      title: "Context chains.",
      body: "Run the battlecard, then run messaging. Messaging inherits the competitive context automatically. The orchestrator sequences modules into recipes so the chain runs end-to-end with one command.",
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim mb-3">FOUNDATIONS</div>
        <h2 className="text-[40px] md:text-[56px] mb-16 tracking-tighter-2 max-w-[800px]" style={{ fontWeight: 700, lineHeight: 1.02 }}>
          Three principles structure everything.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
          {principles.map((p) => (
            <div key={p.tag}>
              <div className="font-mono text-[28px] text-accent mb-4" style={{ fontWeight: 500 }}>{p.tag}</div>
              <h3 className="text-[22px] mb-3 tracking-tighter-2" style={{ fontWeight: 600 }}>{p.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-fg-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  WHAT YOU CAN DO                                             */
/* ============================================================ */

function WhatYouCanDo() {
  const features = [
    {
      tag: "01",
      title: "A competitive read that's actually a battlecard.",
      body: "Three-competitor coverage out of the box, with sub-tab navigation. Trap questions, objection handlers, pricing intel, and the rare-as-gold 'when we lose' section. Every claim flagged for evidence.",
      mockup: "battlecard",
    },
    {
      tag: "02",
      title: "Messaging stress-tested against the competition.",
      body: "Four-layer hierarchy — category positioning, differentiated value, proof pillars, persona quotes. Each layer cross-referenced to the competitive intel that justifies it. Honest about which claims still need proof.",
      mockup: "messaging",
    },
    {
      tag: "03",
      title: "Win/loss that distinguishes stated reason from root cause.",
      body: "Pattern-level synthesis across your closed-won and closed-lost cohort. Surfaces what buyers told you in debriefs — and what they actually decided on. Recommended actions tied to specific upstream skills.",
      mockup: "winloss",
    },
    {
      tag: "04",
      title: "Customer stories with approval state visible.",
      body: "Every story opens with what it's approved for: internal reference, analyst briefing, public case study, press. Most case study tools never disclose this. This one makes it the first thing.",
      mockup: "customer",
    },
    {
      tag: "05",
      title: "RFP analysis with seeding fingerprint.",
      body: "Reconnaissance memo before requirement extraction. Capability mapping with honest gap acknowledgment. Bid/no-bid scoring across six dimensions. Detects which competitor's marketing language seeded the requirements.",
      mockup: "rfp",
    },
    {
      tag: "06",
      title: "An orchestrator that runs whole programs.",
      body: "Five recipes shipped: Category Entry Sprint, Deal Desk Package, Launch Moment, Competitive Response, Onboarding. Each chains 4-5 modules with automatic context propagation and gate-checking between steps.",
      mockup: "orchestrator",
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim mb-3">CAPABILITIES</div>
        <h2 className="text-[40px] md:text-[56px] mb-20 tracking-tighter-2 max-w-[900px]" style={{ fontWeight: 700, lineHeight: 1.02 }}>
          What you can do with gtm-os.
        </h2>

        <div className="space-y-24 lg:space-y-32">
          {features.map((f, i) => (
            <div
              key={f.tag}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:[direction:ltr]">
                <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim mb-3">
                  {f.tag} / 06
                </div>
                <h3 className="text-[28px] md:text-[36px] mb-5 tracking-tighter-2" style={{ fontWeight: 600, lineHeight: 1.1 }}>
                  {f.title}
                </h3>
                <p className="text-[16px] leading-[1.65] text-fg-muted max-w-[520px]">
                  {f.body}
                </p>
              </div>

              <div className="lg:[direction:ltr]">
                <FeatureMockup variant={f.mockup} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureMockup({ variant }: { variant: string }) {
  const base = {
    background: "var(--surface)",
    border: "1px solid var(--border-strong)",
    borderRadius: "10px",
    overflow: "hidden",
  };

  if (variant === "battlecard") {
    return (
      <div style={base} className="shadow-md">
        <div className="flex border-b" style={{ borderColor: "var(--border)" }}>
          {["ServiceNow", "Atlassian", "Salesforce"].map((c, i) => (
            <div
              key={c}
              className="px-4 py-3 text-[11px] flex-1 text-center"
              style={{
                borderBottom: i === 0 ? "2px solid var(--accent)" : "2px solid transparent",
                color: i === 0 ? "var(--fg)" : "var(--fg-dim)",
                fontWeight: i === 0 ? 500 : 400,
              }}
            >
              {c}
            </div>
          ))}
        </div>
        <div className="p-5 space-y-4">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-fg-dim mb-1.5">§ EXECUTIVE</div>
            <div className="text-[14px]" style={{ color: "var(--fg)", fontWeight: 600 }}>Bundle pull-through, expanding agent surface</div>
            <div className="text-[11px] text-fg-muted leading-[1.5] mt-1">ServiceNow rides Now Platform incumbency to bundle Now Assist with existing ELA renewals. Premium pricing offset by relationship continuity.</div>
          </div>
          <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
            <div className="font-mono text-[9px] uppercase tracking-widest text-fg-dim mb-1.5">§ LANDMINES</div>
            <div className="space-y-1.5">
              {["ELA renewal trap (preempts standalone evals)", "Now Platform workflow lock-in", "CISO comfort with incumbent"].map((l) => (
                <div key={l} className="text-[11.5px] text-fg-muted flex gap-2">
                  <span className="text-accent">—</span> {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "messaging") {
    return (
      <div style={base} className="shadow-md p-6">
        <div className="font-mono text-[9px] uppercase tracking-widest text-fg-dim mb-3">§ LAYER 1 · CATEGORY POSITIONING</div>
        <div
          className="text-[16px] mb-5 pl-3 border-l-2"
          style={{ borderColor: "var(--accent)", color: "var(--fg)", fontWeight: 500 }}
        >
          The trusted agent operating system for the enterprise — the platform you keep when the model-of-the-year changes.
        </div>

        <div className="font-mono text-[9px] uppercase tracking-widest text-fg-dim mb-3">§ LAYER 2 · DIFFERENTIATED VALUE</div>
        <div className="space-y-3">
          {[
            { n: "01", t: "Trust kernel", d: "Permission earned through demonstrated reliability" },
            { n: "02", t: "Adaptive factory", d: "Agents tailored per enterprise, not template-deployed" },
            { n: "03", t: "Collective intelligence", d: "Organizational context that compounds with use" },
          ].map((p) => (
            <div key={p.n} className="flex gap-3">
              <div className="font-mono text-[10px] text-accent" style={{ fontWeight: 500 }}>{p.n}</div>
              <div>
                <div className="text-[13px]" style={{ color: "var(--fg)", fontWeight: 600 }}>{p.t}</div>
                <div className="text-[11.5px] text-fg-muted leading-[1.5]">{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "winloss") {
    return (
      <div style={base} className="shadow-md p-6">
        <div className="font-mono text-[9px] uppercase tracking-widest text-fg-dim mb-1">§ DIVERGENCE MAP · n=23</div>
        <div className="text-[14px] mb-4" style={{ color: "var(--fg)", fontWeight: 600 }}>Stated reason ≠ Root cause</div>
        <div className="space-y-2.5">
          {[
            { type: "Loss", stated: "Build flexibility · own architecture", root: "Vendor relationship overhang from active ELA renewal" },
            { type: "Win", stated: "Better technical fit · trust kernel", root: "Security review was decisive · CISO veto over incumbent" },
            { type: "Loss", stated: "Not right time for new vendor", root: "Internal champion lost authority in week 6 reorg" },
            { type: "Win", stated: "Pricing predictability at scale", root: "Architecture won where incumbent couldn't deploy" },
          ].map((row, i) => (
            <div key={i} className="py-2 border-b last:border-0" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: row.type === "Win" ? "var(--ok)" : "var(--err)" }} />
                <span className="font-mono text-[9px] uppercase tracking-wider text-fg-dim">{row.type}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[11.5px]">
                <div className="text-fg-muted italic">"{row.stated}"</div>
                <div style={{ color: "var(--fg)" }}>{row.root}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "customer") {
    return (
      <div style={base} className="shadow-md p-6">
        <div className="font-mono text-[9px] uppercase tracking-widest text-fg-dim mb-3">§ APPROVAL POSTURE</div>
        <div className="space-y-2.5 mb-5">
          {[
            { use: "Internal sales reference", state: "Approved", color: "var(--ok)" },
            { use: "Analyst briefing", state: "Approved", color: "var(--ok)" },
            { use: "Public case study", state: "Pending Q3", color: "var(--warn)" },
            { use: "Press / PR", state: "Not approved", color: "var(--err)" },
            { use: "Conference keynote", state: "Not approved", color: "var(--err)" },
          ].map((row) => (
            <div key={row.use} className="flex items-center justify-between text-[12px]">
              <span className="text-fg-muted">{row.use}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: row.color, fontWeight: 500 }}>
                {row.state}
              </span>
            </div>
          ))}
        </div>
        <div
          className="text-[12.5px] pt-4 border-t italic"
          style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
        >
          "We picked you because the trust kernel let our CISO write the policy and trust the platform to enforce it."
          <div className="font-mono text-[10px] not-italic mt-1.5 text-fg-dim">— CAO, Meridian Industrial</div>
        </div>
      </div>
    );
  }

  if (variant === "rfp") {
    return (
      <div style={base} className="shadow-md p-6">
        <div className="font-mono text-[9px] uppercase tracking-widest text-fg-dim mb-3">§ BID / NO-BID SCORING</div>
        <div className="space-y-2 mb-5">
          {[
            { dim: "Capability fit", w: 20, s: 9.0 },
            { dim: "Strategic fit", w: 15, s: 9.5 },
            { dim: "Win probability", w: 20, s: 8.0 },
            { dim: "Deal economics", w: 15, s: 8.5 },
            { dim: "Competitive positioning", w: 15, s: 7.0 },
            { dim: "Resource availability", w: 15, s: 8.0 },
          ].map((row) => (
            <div key={row.dim} className="grid grid-cols-[1fr_36px_60px] gap-2 text-[11.5px] items-center">
              <span className="text-fg-muted">{row.dim}</span>
              <span className="font-mono text-[10px] text-fg-dim text-right">{row.w}%</span>
              <div className="flex items-center gap-1.5 justify-end">
                <div className="w-12 h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                  <div className="h-full" style={{ width: `${row.s * 10}%`, background: "var(--accent)" }} />
                </div>
                <span className="font-mono text-[10px]" style={{ color: "var(--fg)", fontWeight: 500 }}>{row.s}</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex items-center justify-between pt-4 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-fg-dim">TOTAL</div>
            <div className="text-[20px]" style={{ color: "var(--accent)", fontWeight: 700 }}>83.6 / 100</div>
          </div>
          <div className="px-3 py-1.5 rounded text-[10.5px] font-mono uppercase tracking-wider" style={{ background: "var(--accent-soft)", color: "var(--accent)", fontWeight: 500 }}>
            ▸ Confident bid
          </div>
        </div>
      </div>
    );
  }

  if (variant === "orchestrator") {
    return (
      <div style={base} className="shadow-md p-6">
        <div className="font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>◆ DEAL DESK PACKAGE</div>
        <div className="space-y-2">
          {[
            { num: "01", name: "Competitive Battlecard", state: "complete" },
            { num: "09", name: "RFP Analyzer", state: "complete" },
            { num: "08", name: "POC Playbook", state: "running" },
            { num: "06", name: "Pricing & Packaging", state: "queued" },
          ].map((s, i) => (
            <div
              key={s.num}
              className="flex items-center gap-3 px-3 py-2.5"
              style={{
                background: s.state === "running" ? "var(--accent-soft)" : "transparent",
                border: "1px solid var(--border)",
                borderLeft:
                  s.state === "complete"
                    ? "2px solid var(--ok)"
                    : s.state === "running"
                    ? "2px solid var(--accent)"
                    : "2px solid var(--border-strong)",
              }}
            >
              <span className="font-mono text-[9px] text-fg-dim">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-[10px] text-accent">§{s.num}</span>
              <span className="text-[12px] flex-1" style={{ color: s.state !== "queued" ? "var(--fg)" : "var(--fg-dim)" }}>
                {s.name}
              </span>
              {s.state === "complete" && <Check size={11} strokeWidth={2.5} style={{ color: "var(--ok)" }} />}
              {s.state === "running" && <Loader size={11} strokeWidth={2.5} className="spin-slow" style={{ color: "var(--accent)" }} />}
              {s.state === "queued" && <span className="text-[9px] font-mono text-fg-dim uppercase tracking-wider">queued</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

/* ============================================================ */
/*  MODULE LIBRARY                                              */
/* ============================================================ */

function ModuleLibrary() {
  const core = [
    { num: "01", name: "Competitive Battlecard" },
    { num: "02", name: "Messaging & Positioning" },
    { num: "03", name: "Launch Playbook" },
    { num: "04", name: "Sales Enablement" },
    { num: "05", name: "Win/Loss Analyzer" },
    { num: "06", name: "Pricing & Packaging" },
    { num: "07", name: "Customer Story" },
    { num: "08", name: "Analyst Relations Brief" },
  ];
  const extensions = [
    { num: "09", name: "RFP Analyzer" },
    { num: "10", name: "POC Playbook" },
    { num: "11", name: "Thought Leadership Engine" },
    { num: "12", name: "Content Machine" },
    { num: "13", name: "Partner Co-Sell Brief" },
  ];

  return (
    <section id="library" className="py-24 lg:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim mb-3">THE LIBRARY</div>
        <h2 className="text-[40px] md:text-[56px] mb-3 tracking-tighter-2 max-w-[800px]" style={{ fontWeight: 700, lineHeight: 1.02 }}>
          Thirteen skills. One orchestrator.
        </h2>
        <p className="text-[17px] text-fg-muted mb-16 max-w-[640px]">
          Eight core skills cover the foundational GTM artifact surface. Five operator extensions encode opinionated, deal-shaped discipline.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-12">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim mb-4">§ CORE</div>
            <div className="space-y-0">
              {core.map((m) => (
                <ModuleRow key={m.num} num={m.num} name={m.name} />
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>◆ OPERATOR EXTENSIONS</div>
            <div className="space-y-0">
              {extensions.map((m) => (
                <ModuleRow key={m.num} num={m.num} name={m.name} accent />
              ))}
            </div>

            <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="font-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>◆ ORCHESTRATOR</div>
              <ModuleRow num="◆" name="PMM Workflow · Sequence modules into recipes" accent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleRow({ num, name, accent }: { num: string; name: string; accent?: boolean }) {
  return (
    <div
      className="flex items-center justify-between py-3 border-b transition-colors"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] text-fg-dim w-6">{num}</span>
        <span className="text-[14.5px]" style={{ color: "var(--fg)", fontWeight: 500 }}>{name}</span>
      </div>
      <ChevronRight size={14} strokeWidth={1.5} className="text-fg-very-dim" />
    </div>
  );
}

/* ============================================================ */
/*  RECIPE STACK                                                */
/* ============================================================ */

function RecipeStack() {
  const recipes = [
    {
      name: "Category Entry Sprint",
      desc: "Foundational artifact set for entering or repositioning in a category.",
      chain: ["01", "02", "07", "04", "08"],
    },
    {
      name: "Deal Desk Package",
      desc: "Single named enterprise opportunity. Competitive intel through pricing posture.",
      chain: ["01", "09", "08", "06"],
    },
    {
      name: "Launch Moment",
      desc: "Tier-calibrated GA launch. Messaging refresh through TOFU content cadence.",
      chain: ["02", "03", "11", "12"],
    },
    {
      name: "Competitive Response",
      desc: "Reactive 2-4 week window after a major competitor move.",
      chain: ["01", "05", "02", "04"],
    },
    {
      name: "Onboarding",
      desc: "First 60-90 days for a new marketer. Foundational artifact set, fast.",
      chain: ["01", "02", "07", "04"],
    },
  ];

  return (
    <section id="recipes" className="py-24 lg:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim mb-3">RECIPES</div>
        <h2 className="text-[40px] md:text-[56px] mb-3 tracking-tighter-2 max-w-[800px]" style={{ fontWeight: 700, lineHeight: 1.02 }}>
          Five recipes shipped.
        </h2>
        <p className="text-[17px] text-fg-muted mb-16 max-w-[680px]">
          Recipes sequence skills with explicit context propagation. The orchestrator handles the chain, gate checks, and reconciliation.
        </p>

        <div className="space-y-3">
          {recipes.map((r) => (
            <div
              key={r.name}
              className="rounded-lg p-6 transition-all"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-border)";
                e.currentTarget.style.background = "var(--surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--surface)";
              }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-[20px] mb-1.5 tracking-tighter-2" style={{ fontWeight: 600 }}>{r.name}</h3>
                  <p className="text-[14px] text-fg-muted">{r.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  {r.chain.map((c, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <ChevronRight size={10} strokeWidth={1.5} className="text-fg-very-dim" />}
                      <span style={{ color: "var(--accent)" }}>§{c}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  FINAL CTA                                                   */
/* ============================================================ */

function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 text-center">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <h2
          className="text-[48px] md:text-[80px] lg:text-[96px] tracking-tighter-3 mb-6 max-w-[1000px] mx-auto"
          style={{ fontWeight: 800, lineHeight: 0.98 }}
        >
          Clone the repo. Run your<br />first artifact in 90 seconds.
        </h2>
        <p className="text-[18px] text-fg-muted mb-10 max-w-[560px] mx-auto">
          Open source. MIT licensed. Self-hosted. Bring your own API key.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a
            href="/workspaces/axiom-agents"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[14px] transition-all"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Try the demo <ArrowRight size={14} strokeWidth={2} />
          </a>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[14px] transition-all border"
            style={{
              borderColor: "var(--border-strong)",
              color: "var(--fg)",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Github size={14} strokeWidth={2} /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  FOOTER                                                      */
/* ============================================================ */

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-[20px] tracking-tighter-2" style={{ fontWeight: 700 }}>gtm-os</span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-fg-dim">v0.1</span>
            </div>
            <p className="text-[14px] text-fg-muted max-w-[400px] leading-[1.6]">
              An open-source operating system for go-to-market. Built by an operator, for operators.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim mb-4">PRODUCT</div>
            <div className="space-y-2.5 text-[14px]">
              <a href="#library" className="block text-fg-muted hover:text-fg transition-colors">Modules</a>
              <a href="/workspaces" className="block text-fg-muted hover:text-fg transition-colors">Workspaces</a>
              <a href="#recipes" className="block text-fg-muted hover:text-fg transition-colors">Recipes</a>
              <a href="/" className="block text-fg-muted hover:text-fg transition-colors">Docs</a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-fg-dim mb-4">CONNECT</div>
            <div className="space-y-2.5 text-[14px]">
              <a href="https://github.com" className="block text-fg-muted hover:text-fg transition-colors">GitHub</a>
              <a href="#" className="block text-fg-muted hover:text-fg transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex items-center justify-between text-[12px] text-fg-dim border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div>© 2026 gtm-os · MIT licensed</div>
          <div className="font-mono uppercase tracking-widest text-[10px]">Built by an operator</div>
        </div>
      </div>
    </footer>
  );
}
