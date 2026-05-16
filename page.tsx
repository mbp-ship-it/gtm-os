/**
 * app/page.tsx — Landing page
 *
 * Renders the locked GtmOsLanding component.
 * Source: components/landing/GtmOsLanding.tsx (migrated from landing_v2.jsx)
 *
 * NOTE: Move the JSX export from landing_v2.jsx into
 * components/landing/GtmOsLanding.tsx and update the import below.
 * The component is a client component (uses useState) — keep the
 * 'use client' directive at the top of that file.
 */

import { Suspense } from "react";
// TODO: Move landing_v2.jsx → components/landing/GtmOsLanding.tsx
// import GtmOsLanding from "@/components/landing/GtmOsLanding";

export default function HomePage() {
  return (
    <Suspense fallback={<div style={{ background: "#0A0A0A", minHeight: "100vh" }} />}>
      {/*
        Replace the placeholder below with:
        <GtmOsLanding />
        once landing_v2.jsx is migrated to components/landing/GtmOsLanding.tsx
      */}
      <div
        style={{
          background: "#0A0A0A",
          color: "#EDEDED",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Geist, -apple-system, sans-serif",
          fontSize: "0.875rem",
          gap: "0.5rem",
        }}
      >
        <span style={{ color: "#6B6B6B", fontFamily: "Geist Mono, monospace", fontSize: "0.75rem" }}>
          gtm-os
        </span>
        <span style={{ color: "#4A4A4A" }}>—</span>
        <span style={{ color: "#A0A0A0" }}>
          Drop <code style={{ color: "#E8B44C", fontSize: "0.75rem" }}>landing_v2.jsx</code> into{" "}
          <code style={{ color: "#E8B44C", fontSize: "0.75rem" }}>components/landing/GtmOsLanding.tsx</code> and
          uncomment the import above.
        </span>
      </div>
    </Suspense>
  );
}
