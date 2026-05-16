import { Suspense } from "react";
import CreateTarget from "@/components/create-target";

export default function NewWorkspacePage() {
    return (
          <Suspense fallback={<div style={{ background: "#0A0A0A", minHeight: "100vh" }} />}>
                  <CreateTarget />
          </Suspense>
        );
}
