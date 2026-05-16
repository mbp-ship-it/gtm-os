/**
 * app/api/workspace/route.ts
 *
 * REST endpoints for workspace CRUD.
 * Phase 1: returns mock data.
 * Phase 4: proxy Anthropic API calls (BYOK — key passed in header).
 * Phase 5: Supabase persistence.
 *
 * Routes:
 *   GET  /api/workspace          — list all workspaces
 *   GET  /api/workspace?slug=x   — single workspace by slug
 *   POST /api/workspace          — create new workspace
 */

import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Workspace {
  slug: string;
  name: string;
  category: string;
  description: string;
  modulesRun: number;
  totalModules: number;
  tokenCount: string;
  lastUpdated: string;
  modules: string[];
  status: "active" | "archived";
  createdAt: string;
}

// ─── Mock store (replaced by Supabase in phase 5) ────────────────────────────

const MOCK_WORKSPACES: Workspace[] = [
  {
    slug: "agent-os",
    name: "The Agent OS",
    category: "Enterprise Software",
    description:
      "Coming-of-age enterprise agent platform. Category entry vs incumbent ITSM + hyperscaler copilots.",
    modulesRun: 3,
    totalModules: 14,
    tokenCount: "38.2K",
    lastUpdated: "2d ago",
    modules: ["Competitive Battlecard", "Messaging & Positioning", "Sales Enablement"],
    status: "active",
    createdAt: "2026-04-20T00:00:00Z",
  },
  {
    slug: "sovereign-vs-hyperscale",
    name: "Sovereign vs Hyperscale",
    category: "Cloud Infrastructure",
    description:
      "Regional cloud, regulated workloads. Data residency positioning against AWS / Azure / GCP.",
    modulesRun: 3,
    totalModules: 14,
    tokenCount: "26.4K",
    lastUpdated: "5d ago",
    modules: ["Competitive Battlecard", "Messaging & Positioning", "Launch Playbook"],
    status: "active",
    createdAt: "2026-04-15T00:00:00Z",
  },
  {
    slug: "framework-vs-platform",
    name: "Framework vs Platform",
    category: "AI Developer Tools",
    description:
      "Opinionated AI framework vs horizontal platform. Win/loss teardown + messaging pillars for a contested deal.",
    modulesRun: 3,
    totalModules: 14,
    tokenCount: "42.1K",
    lastUpdated: "1wk ago",
    modules: ["Win/Loss Analyzer", "Messaging & Positioning", "Competitive Battlecard"],
    status: "active",
    createdAt: "2026-04-10T00:00:00Z",
  },
];

// ─── GET ──────────────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const workspace = MOCK_WORKSPACES.find((w) => w.slug === slug);
    if (!workspace) {
      return NextResponse.json({ error: "Workspace not found" }, { status: 404 });
    }
    return NextResponse.json(workspace);
  }

  const category = searchParams.get("category");
  const filtered = category
    ? MOCK_WORKSPACES.filter((w) => w.category === category)
    : MOCK_WORKSPACES;

  return NextResponse.json({ workspaces: filtered, total: filtered.length });
}

// ─── POST ─────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, category, modules } = body;

    if (!name?.trim()) {
      return NextResponse.json({ error: "name is required" }, { status: 400 });
    }

    // Derive slug
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Phase 1: mock response — no persistence
    // Phase 5: insert into Supabase, return real record
    const workspace: Workspace = {
      slug,
      name: name.trim(),
      category: category ?? "Other",
      description: description ?? "",
      modulesRun: 0,
      totalModules: 14,
      tokenCount: "0",
      lastUpdated: "just now",
      modules: modules ?? [],
      status: "active",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(workspace, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

// ─── Phase 4 stub — module run ────────────────────────────────────────────────
//
// When wiring real AI calls, add a separate route:
//   POST /api/workspace/run
//     body: { slug, moduleId, inputs, model, effort }
//     headers: { x-api-key: <user's Anthropic key> }
//
// The route will:
//   1. Validate the API key header
//   2. Fetch workspace context from Supabase (phase 5) or mock
//   3. Build the module prompt with shared context
//   4. Stream Anthropic response back via ReadableStream
//   5. On completion, persist artifact + update run count
