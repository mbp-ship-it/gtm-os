/**
 * lib/fixtures/agent-os.ts
 *
 * Mock artifact data for "The Agent OS" workspace archetype.
 * These fixtures shape the artifact canvas until the real engine is wired in phase 4.
 * Data is abstract enough to read universally — no named companies per handoff v2 §9.
 */

export const AGENT_OS_FIXTURE = {
  // ─── Module 01 — Competitive Battlecard ────────────────────────────────────
  battlecard: {
    competitor: "The Incumbent ITSM Platform",
    category: "Enterprise Service Management",
    lastUpdated: "3d ago",
    oneLiner:
      "They digitized the ticket. We eliminated it. Their agents answer requests. Ours resolve the underlying condition before the user notices it.",

    whyWeWin: [
      "End-to-end action — not just retrieval. Incumbents surface answers inside a ticketing UI. We close the loop at the system level: provisioning, remediation, policy update, confirmation.",
      "Native multi-agent orchestration. Their AI bolt-on is a single-model assistant. Our architecture dispatches specialized sub-agents in parallel, with a shared context bus and rollback primitives.",
      "No-ticket-required experience. Users describe intent in natural language. The orchestrator plans, executes, verifies, and closes — without a human ever touching a queue.",
      "Governance that scales. Every agent action is logged with a full reasoning trace. Audit is native, not a reporting afterthought.",
    ],

    landmines: [
      {
        question:
          "What percentage of your service requests are resolved without any human involvement today?",
        why: "Forces disclosure of the routing vs. resolution gap. Their 'AI-powered' means AI surfaces to a human. Ours means AI closes.",
      },
      {
        question:
          "When an AI agent fails mid-workflow, how does the system recover — and who is accountable for the partial state?",
        why:
          "Exposes the absence of rollback primitives. Their bolt-on has no orchestration layer; partial failures create orphaned states.",
      },
      {
        question:
          "How does your product handle a workflow that requires actions across four different enterprise systems?",
        why:
          "Their assistant can read across systems. Ours acts across systems. The gap becomes visible instantly.",
      },
    ],

    objections: [
      {
        objection: "We already have AI in our ITSM.",
        response:
          "Most do. The question is whether that AI is resolving requests or routing them. Resolution requires action primitives across integrated systems — retrieval alone doesn't close tickets.",
      },
      {
        objection: "Switching ITSM platforms is a multi-year program.",
        response:
          "We're not asking you to switch ITSM. We sit above the ITSM layer as an orchestration plane — your existing platform stays in place. We add the action layer it was never designed to have.",
      },
      {
        objection: "How do we know AI decisions are auditable for compliance?",
        response:
          "Every action emits a structured reasoning trace to your SIEM of choice. You get immutable logs of what the agent did, why, and what it checked before acting. The incumbent's AI has no equivalent.",
      },
      {
        objection: "We negotiated a multi-year contract with the incumbent.",
        response:
          "Understood. We can start with a contained department or process — no rip-and-replace, no contract conflict. Proof in one quarter, expansion on your timeline.",
      },
    ],

    pricingIntel:
      "Incumbent charges per-seat plus a premium AI add-on module (~40% uplift on base contract). Many customers report paying for the AI tier but using <10% of its capabilities. Their AI roadmap is quarterly-release-cycle — no architectural changes planned.",

    trapQuestions: [
      "Walk me through what happens when an agent encounters a permission boundary mid-workflow.",
      "What's your model for handling confidential HR or finance requests versus IT requests — same agent, different guardrails?",
      "Which enterprise systems does your AI agent natively write back to — versus read-only integrations?",
      "How do you handle agent handoff to a human when confidence falls below threshold?",
      "What's the latency SLA for an end-to-end automated resolution on your platform today?",
    ],
  },

  // ─── Module 02 — Messaging & Positioning ──────────────────────────────────
  messaging: {
    product: "The Agent OS",
    positioningStatement:
      "For enterprise IT and ops teams managing scale they were never staffed to handle, The Agent OS is the orchestration platform that closes service requests without human intervention — not by routing smarter, but by acting directly.",

    messagingHierarchy: [
      {
        name: "Category Frame",
        headline: "The ticket era is ending.",
        body: "Every ITSM vendor has added AI. None of them have added agency. AI that surfaces answers inside a ticketing UI is still a ticketing UI. The category that emerges next isn't smarter service management — it's service management that executes.",
        proof: null,
      },
      {
        name: "Product Differentiation",
        headline: "Resolution, not retrieval.",
        body: "The Agent OS dispatches specialized sub-agents that coordinate across your enterprise systems — provisioning, policy, identity, finance — and close the loop at the system level. The user describes intent. The platform acts. The ticket never opens.",
        proof: "Customers report 73% reduction in mean time to resolution in the first 90 days. [VERIFY] [ADD PROOF POINT]",
      },
      {
        name: "Proof Points",
        headline: "Built for the audit, not around it.",
        body: "Every agent action emits a structured reasoning trace. Full intent, decision path, system calls, and outcome — immutable, queryable, exportable to your SIEM. Compliance teams stop chasing logs. They have them by default.",
        proof: "SOC 2 Type II in progress. [VERIFY]",
      },
      {
        name: "Persona — IT Director",
        headline: "You don't need more headcount. You need agents that act.",
        body: "Your team resolves 200 requests a week. 140 of them are identical. The Agent OS handles the repeatable tail — end to end, without escalation — so your team handles what actually requires judgment. Same headcount. Measurably different output.",
        proof: null,
      },
    ],
  },
} as const;

export type AgentOsFixture = typeof AGENT_OS_FIXTURE;
