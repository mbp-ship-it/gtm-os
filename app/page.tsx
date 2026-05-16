import { Suspense } from "react";
import GtmOsLanding from "@/components/landing/GtmOsLanding";

export default function HomePage() {
  return (
    <Suspense fallback={<div style={{ background: "#0A0A0A", minHeight: "100vh" }} />}>
      <GtmOsLanding />
    </Suspense>
  );
}
