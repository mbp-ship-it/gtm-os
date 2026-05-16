'use client';

import React, { useState } from "react";
import { ArrowUpRight, Github, Terminal, FileText, Target, Layers, Zap, Lock, ArrowRight, Circle, Minus } from "lucide-react";

type Workspace = {
  name: string;
  domain: string;
  category: string;
  modules: string[];
  updated: string;
  tokens: string;
  empty?: boolean;
};

type Module = {
  num: string;
  name: string;
  desc: string;
  replaces: string;
  extension?: boolean;
};

export default function GtmOsLanding() {
  const [hoveredWorkspace, setHoveredWorkspace] = useState<number | null>(null);

  const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@300;400;500&display=swap');
    .font-serif { font-family: 'Instrument Serif', serif; font-weight: 400; letter-spacing: -0.01em; }
    .font-sans { font-family: 'Geist', -apple-system, sans-serif; }
    .font-mono { font-family: 'Geist Mono', 'JetBrains Mono', monospace; }
    body, html { background: #0A0A0A; }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-up-1 { animation: fadeUp 0.6s 0.1s backwards ease-out; }
    .fade-up-2 { animation: fadeUp 0.6s 0.25s backwards ease-out; }
    .fade-up-3 { animation: fadeUp 0.6s 0.4s backwards ease-out; }
    .fade-up-4 { animation: fadeUp 0.6s 0.55s backwards ease-out; }
    .fade-up-5 { animation: fadeUp 0.6s 0.7s backwards ease-out; }
    .grain::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      opacity: 0.04;
      z-index: 1;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }
  `;

  const workspaces: Workspace[] = [
    {
      name: "The Agent OS",
      domain: "coming-of-age enterprise agent platform",
      category: "Category entry vs incumbent ITSM + hyperscaler copilots",
      modules: ["Competitive Battlecard", "Messaging & Positioning", "Sales Enablement"],
      updated: "3 days ago",
      tokens: "38.2K",
    },
    {
      name: "Sovereign vs Hyperscale",
      domain: "regional cloud, regulated workloads",
      category: "Data residency positioning against AWS / Azure / GCP",
      modules: ["Competitive Battlecard", "Messaging & Positioning", "Launch Playbook"],
      updated: "1 week ago",
      tokens: "26.4K",
    },
    {
      name: "Framework vs Platform",
      domain: "opinionated AI framework vs horizontal platform",
      category: "Win/loss teardown + messaging pillars for a contested deal",
      modules: ["Win/Loss Analyzer", "Messaging & Positioning", "Competitive Battlecard"],
      updated: "2 weeks ago",
      tokens: "42.1K",
    },
  ];

  const modules: Module[] = [
    { num: "01", name: "Competitive Battlecard", desc: "Competitor → evidence-backed battlecard with landmines, trap questions, objection handling, and pricing intel. Refuses fabrication.", replaces: "4–6 hrs of research" },
    { num: "02", name: "Messaging & Positioning", desc: "Product + alternatives → four-layer messaging hierarchy stress-tested for differentiation, grounded in buyer evidence.", replaces: "2 weeks of back-and-forth" },
    { num: "03", name: "Product Launch Playbook", desc: "Launch scope → tier-calibrated brief with workback schedule, RACI, asset matrix, and go / no-go gates.", replaces: "Generic launch templates" },
    { num: "04", name: "Sales Enablement Assets", desc: "Deal stage + persona → one-pagers, demo scripts, ROI models, objection guides. Matched to where the deal actually is.", replaces: "Starting from blank" },
    { num: "05", name: "Win/Loss Analyzer", desc: "Deal data → strategic recommendations with statistical rigor. Separates stated reasons from root causes.", replaces: "Quarterly CSV dumps" },
    { num: "06", name: "Pricing & Packaging", desc: "Product + competitors → value metric selection, tier architecture, migration plan. Never cost-plus.", replaces: "Founder gut-feel pricing" },
    { num: "07", name: "Customer Story Generator", desc: "Interview transcript → case study, pull quotes, reference profile, video brief. Refuses to publish without approval.", replaces: "Agency-written case studies" },
    { num: "08", name: "Analyst Relations Brief", desc: "Analyst context → briefing deck, RFI response, MQ/Wave positioning. Honest scoring, no roadmap claims.", replaces: "Scrambled briefing prep" },
    { num: "09", name: "RFP Analyzer", desc: "RFP document → requirement extraction, capability mapping, gap analysis, win themes, risk flags. Operator-in-the-procurement-room work.", replaces: "Weekend-killing manual work", extension: true },
    { num: "10", name: "POC Playbook", desc: "Target + use case → POC scope, timeline compression plan, success criteria, handoff-to-sales template. Forward-engineering muscle.", replaces: "6-week POC cycles", extension: true },
    { num: "11", name: "Partner Co-Sell Brief", desc: "Hyperscaler / ISV / GSI → joint value prop, co-sell motion design, marketplace listing, competency alignment.", replaces: "Vague partner conversations", extension: true },
    { num: "12", name: "Thought Leadership Engine", desc: "Executive whitepapers and series. Strategic-read diagnosis, narrative frame pivot from source material, tension mapping, series coordination, LLM handoff orchestration.", replaces: "Whitepapers that die on arrival", extension: true },
    { num: "13", name: "Content Machine", desc: "Two modes: SEO long-form blogs with keyword + link cluster architecture, or multi-platform creator engine with pillar frameworks across LinkedIn, IG, and shorts.", replaces: "Agency content that doesn't land", extension: true },
  ];

  return (
    <div className="grain min-h-screen relative" style={{ background: "#0A0A0A", color: "#EDEDED" }}>
      <style>{fontStyles}</style>

      {/* Nav */}
      <nav className="font-sans relative z-10 border-b" style={{ borderColor: "#1C1C1C" }}>
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center border rounded-sm" style={{ borderColor: "#3A3A3A" }}>
              <Terminal size={13} style={{ color: "#E8B44C" }} strokeWidth={2} />
            </div>
            <span className="font-mono text-sm tracking-tight" style={{ color: "#EDEDED" }}>gtm-os</span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded" style={{ background: "#1C1C1C", color: "#8A6B2E" }}>v0.1</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-sans">
            <a href="#modules" className="transition" style={{ color: "#A0A0A0" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#EDEDED")} onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}>Modules</a>
            <a href="#workspaces" style={{ color: "#A0A0A0" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#EDEDED")} onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}>Workspaces</a>
            <a href="#" style={{ color: "#A0A0A0" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#EDEDED")} onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}>Docs</a>
            <a href="#" className="flex items-center gap-1.5" style={{ color: "#A0A0A0" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#EDEDED")} onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}>
              <Github size={14} strokeWidth={2} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 pt-24 pb-32">
        <div className="max-w-4xl">
          <div className="fade-up-1 flex items-center gap-3 mb-10 font-mono text-xs" style={{ color: "#6B6B6B" }}>
            <span className="flex items-center gap-1.5">
              <Circle size={6} fill="#E8B44C" stroke="none" />
              <span>OPEN SOURCE</span>
            </span>
            <Minus size={12} strokeWidth={1} />
            <span>MIT</span>
            <Minus size={12} strokeWidth={1} />
            <span>BRING YOUR OWN KEY</span>
          </div>

          <h1 className="fade-up-2 font-serif text-[84px] leading-[0.94] tracking-tight mb-10" style={{ color: "#EDEDED" }}>
            Your GTM workspace.
            <br />
            <span style={{ color: "#A0A0A0" }}>Your models.</span>
            <br />
            <span style={{ color: "#A0A0A0" }}>Your data.</span>{" "}
            <span style={{ color: "#E8B44C" }}>Your keys.</span>
          </h1>

          <p className="fade-up-3 font-sans text-lg leading-relaxed max-w-2xl mb-12" style={{ color: "#A0A0A0" }}>
            Thirteen specialist modules — the PMM fundamentals plus the operator work that lives outside the job description. RFPs, POCs, partner motions, thought leadership, content ops. Coordinated by an orchestrator, running as a single persistent workspace. Point it at any target, get the full GTM stack back.
          </p>

          <div className="fade-up-4 flex items-center gap-3">
            <button className="group font-sans text-sm px-5 py-3 flex items-center gap-2 transition-all rounded-sm" style={{ background: "#E8B44C", color: "#0A0A0A" }}>
              <span className="font-medium">Explore a workspace</span>
              <ArrowRight size={15} strokeWidth={2.25} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="group font-sans text-sm px-5 py-3 flex items-center gap-2 transition-all rounded-sm border" style={{ borderColor: "#3A3A3A", color: "#EDEDED" }}>
              <Github size={15} strokeWidth={2} />
              <span>Clone the repo</span>
              <ArrowUpRight size={13} strokeWidth={2} style={{ color: "#8A6B2E" }} />
            </button>
          </div>
        </div>

        {/* Sidebar spec sheet - decorative data panel */}
        <div className="fade-up-5 absolute right-8 top-32 hidden xl:block">
          <div className="font-mono text-[10px] space-y-1 text-right" style={{ color: "#4A4A4A" }}>
            <div>STACK / next.js · python</div>
            <div>LICENSE / mit</div>
            <div>AUTH / google oauth</div>
            <div>PROVIDERS / anthropic, openai, local</div>
            <div>MODEL / user-selected</div>
            <div>KEY / user-supplied</div>
            <div>DATA / user-owned</div>
            <div>COST / $0 to host</div>
          </div>
        </div>
      </section>

      {/* Thesis — three principles */}
      <section className="relative z-10 border-t" style={{ borderColor: "#1C1C1C" }}>
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="font-mono text-xs mb-12 flex items-center gap-3" style={{ color: "#6B6B6B" }}>
            <span>§01</span>
            <Minus size={12} strokeWidth={1} />
            <span>PRINCIPLES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="mb-5">
                <Target size={22} strokeWidth={1.5} style={{ color: "#E8B44C" }} />
              </div>
              <h3 className="font-serif text-2xl mb-4 leading-tight" style={{ color: "#EDEDED" }}>Targets are first-class.</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                Most GTM tools treat the company you're chasing as a parameter inside a prompt. Here, every target gets a persistent workspace. Run Module 01, it lives in the workspace. Module 03 pulls from it. Module 04 chains off both. You never re-enter context.
              </p>
            </div>

            <div>
              <div className="mb-5">
                <Layers size={22} strokeWidth={1.5} style={{ color: "#E8B44C" }} />
              </div>
              <h3 className="font-serif text-2xl mb-4 leading-tight" style={{ color: "#EDEDED" }}>Artifacts, not chat.</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                A battlecard is a document, not a message bubble. A competitive brief is a report, not a conversation turn. Outputs render as real deliverables: typographically composed, exportable, regenerable. The kind of work you'd actually hand to sales.
              </p>
            </div>

            <div>
              <div className="mb-5">
                <Zap size={22} strokeWidth={1.5} style={{ color: "#E8B44C" }} />
              </div>
              <h3 className="font-serif text-2xl mb-4 leading-tight" style={{ color: "#EDEDED" }}>Context chains across modules.</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                Competitive intel feeds positioning. Positioning feeds battlecards. Buyer signals feed the next competitive run. Each module reads from and writes to the target's shared context — so insights compound instead of resetting. This is the thing a prompt library cannot do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured workspaces */}
      <section id="workspaces" className="relative z-10 border-t" style={{ borderColor: "#1C1C1C" }}>
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="font-mono text-xs mb-4 flex items-center gap-3" style={{ color: "#6B6B6B" }}>
                <span>§02</span>
                <Minus size={12} strokeWidth={1} />
                <span>SHOWCASE</span>
              </div>
              <h2 className="font-serif text-5xl tracking-tight" style={{ color: "#EDEDED" }}>
                Three archetypes. Real outputs.
              </h2>
            </div>
            <p className="font-sans text-sm max-w-sm" style={{ color: "#A0A0A0" }}>
              Common GTM situations every operator recognizes, run through the stack. Click any workspace to read the full generated brief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workspaces.map((ws, i) => (
              <div
                key={i}
                className="group p-6 border cursor-pointer transition-all"
                style={{
                  borderColor: hoveredWorkspace === i ? "#3A3A3A" : "#1C1C1C",
                  background: hoveredWorkspace === i ? "#141414" : "transparent",
                  opacity: ws.empty ? 0.5 : 1,
                }}
                onMouseEnter={() => setHoveredWorkspace(i)}
                onMouseLeave={() => setHoveredWorkspace(null)}
              >
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="font-mono text-[10px] mb-2" style={{ color: "#6B6B6B" }}>
                      WORKSPACE / {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-serif text-2xl leading-tight" style={{ color: "#EDEDED" }}>
                      {ws.name}
                    </h3>
                    <div className="font-mono text-xs mt-1" style={{ color: "#6B6B6B" }}>
                      {ws.domain}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    style={{ color: hoveredWorkspace === i ? "#E8B44C" : "#4A4A4A" }}
                    className="transition-colors"
                  />
                </div>

                <div className="font-sans text-xs mb-6" style={{ color: "#A0A0A0" }}>
                  {ws.category}
                </div>

                <div className="space-y-1.5 mb-8">
                  {ws.modules.map((m, j) => (
                    <div key={j} className="flex items-center gap-2 font-mono text-[11px]" style={{ color: "#A0A0A0" }}>
                      <Circle size={5} fill={ws.empty ? "#4A4A4A" : "#E8B44C"} stroke="none" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t flex items-center justify-between font-mono text-[10px]" style={{ borderColor: "#1C1C1C", color: "#6B6B6B" }}>
                  <span>{ws.updated}</span>
                  <span>{ws.tokens} tokens</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module index */}
      <section id="modules" className="relative z-10 border-t" style={{ borderColor: "#1C1C1C" }}>
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="font-mono text-xs mb-4 flex items-center gap-3" style={{ color: "#6B6B6B" }}>
                <span>§03</span>
                <Minus size={12} strokeWidth={1} />
                <span>MODULES</span>
              </div>
              <h2 className="font-serif text-5xl tracking-tight mb-4" style={{ color: "#EDEDED" }}>
                Thirteen modules. One orchestrator.
              </h2>
              <p className="font-sans text-sm max-w-xl" style={{ color: "#A0A0A0" }}>
                Eight PMM fundamentals and five operator extensions — the non-traditional GTM work that lives outside the job description. Each module has phase-gated workflows, refusal rules, and shared context. Run them standalone or let the orchestrator sequence them into full programs.
              </p>
            </div>
          </div>

          <div className="border-t" style={{ borderColor: "#1C1C1C" }}>
            {modules.map((m, i) => (
              <React.Fragment key={i}>
                {m.extension && (i === 0 || !modules[i - 1].extension) && (
                  <div className="grid grid-cols-12 gap-6 py-5 border-b" style={{ borderColor: "#1C1C1C" }}>
                    <div className="col-span-12 flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-[0.15em]" style={{ color: "#E8B44C" }}>
                        ◆ OPERATOR EXTENSIONS
                      </span>
                      <div className="flex-1 h-px" style={{ background: "#1C1C1C" }} />
                      <span className="font-mono text-[10px]" style={{ color: "#6B6B6B" }}>
                        non-traditional PMM muscle
                      </span>
                    </div>
                  </div>
                )}

                <div
                  className="group grid grid-cols-12 gap-6 py-8 border-b transition-all"
                  style={{ borderColor: "#1C1C1C" }}
                >
                  <div className="col-span-1">
                    <div className="font-mono text-xs" style={{ color: m.extension ? "#E8B44C" : "#4A4A4A" }}>{m.num}</div>
                  </div>
                  <div className="col-span-3">
                    <h4 className="font-serif text-xl" style={{ color: "#EDEDED" }}>{m.name}</h4>
                  </div>
                  <div className="col-span-6">
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>{m.desc}</p>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className="font-mono text-[10px] mb-1" style={{ color: "#6B6B6B" }}>REPLACES</div>
                    <div className="font-sans text-xs" style={{ color: "#8A6B2E" }}>{m.replaces}</div>
                  </div>
                </div>
              </React.Fragment>
            ))}

            {/* Orchestrator — styled distinctly */}
            <div className="group grid grid-cols-12 gap-6 py-8 border-b transition-all" style={{ borderColor: "#1C1C1C", background: "rgba(232, 180, 76, 0.03)" }}>
              <div className="col-span-1">
                <div className="font-mono text-xs" style={{ color: "#E8B44C" }}>★</div>
              </div>
              <div className="col-span-3">
                <h4 className="font-serif text-xl" style={{ color: "#EDEDED" }}>PMM Workflow</h4>
                <div className="font-mono text-[10px] mt-1.5 tracking-wider" style={{ color: "#E8B44C" }}>
                  ORCHESTRATOR
                </div>
              </div>
              <div className="col-span-6">
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                  Sequences the thirteen modules into coherent programs — launch, market entry, quarterly cycle, competitive response, new-PMM onboarding. Maintains shared state across modules so insights compound instead of resetting.
                </p>
              </div>
              <div className="col-span-2 text-right">
                <div className="font-mono text-[10px] mb-1" style={{ color: "#6B6B6B" }}>REPLACES</div>
                <div className="font-sans text-xs" style={{ color: "#8A6B2E" }}>Tribal knowledge that dies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 border-t" style={{ borderColor: "#1C1C1C" }}>
        <div className="max-w-6xl mx-auto px-8 py-32 text-center">
          <h2 className="font-serif text-6xl tracking-tight mb-8 leading-[0.95]" style={{ color: "#EDEDED" }}>
            Forty-five seconds from
            <br />
            <span style={{ color: "#E8B44C" }}>clone to competitive brief.</span>
          </h2>
          <p className="font-sans text-base max-w-lg mx-auto mb-10" style={{ color: "#A0A0A0" }}>
            Clone the repo. Paste a key from your model provider. Point it at a company. Read the output.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="group font-sans text-sm px-6 py-3 flex items-center gap-2 rounded-sm" style={{ background: "#E8B44C", color: "#0A0A0A" }}>
              <Zap size={15} strokeWidth={2.25} fill="#0A0A0A" />
              <span className="font-medium">Try the playground</span>
            </button>
            <button className="group font-sans text-sm px-6 py-3 flex items-center gap-2 rounded-sm border" style={{ borderColor: "#3A3A3A", color: "#EDEDED" }}>
              <Github size={15} strokeWidth={2} />
              <span>View on GitHub</span>
              <ArrowUpRight size={13} strokeWidth={2} style={{ color: "#8A6B2E" }} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t" style={{ borderColor: "#1C1C1C" }}>
        <div className="max-w-6xl mx-auto px-8 py-10 flex items-center justify-between">
          <div className="flex items-center gap-6 font-mono text-[11px]" style={{ color: "#6B6B6B" }}>
            <div className="flex items-center gap-2">
              <Terminal size={11} strokeWidth={2} style={{ color: "#8A6B2E" }} />
              <span>gtm-os / v0.1</span>
            </div>
            <span>MIT</span>
            <span>Built by MP</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]" style={{ color: "#6B6B6B" }}>
            <a href="#" className="hover:text-white transition">Docs</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Changelog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
