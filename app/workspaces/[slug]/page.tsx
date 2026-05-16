import { Suspense } from "react";
import GtmOsWorkspace from "@/components/workspace";

export default async function WorkspaceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <Suspense fallback={<div style={{background:'#0A0A0A',minHeight:'100vh'}} />}>
            <GtmOsWorkspace workspaceId={slug} />
        </Suspense>
        );
}
