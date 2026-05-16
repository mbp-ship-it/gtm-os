import { Suspense } from "react";
import GtmOsWorkspace from "@/components/workspace";

export default function WorkspaceSlugPage({
    params,
}: {
    params: { slug: string };
}) {
    return (
          <Suspense fallback={<div style={{ background: "#0A0A0A", minHeight: "100vh" }} />}>
                  <GtmOsWorkspace workspaceId={params.slug} />
          </Suspense>
        );
}
