import { Suspense } from "react";
import WorkspacesIndex from "@/components/workspaces-index";

export default function WorkspacesPage() {
    return (
          <Suspense fallback={<div style={{ background: "#0A0A0A", minHeight: "100vh" }} />}>
                  <WorkspacesIndex />
          </Suspense>
        );
}
