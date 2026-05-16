export default function Workspace({ params }: { params?: { slug?: string } }) {
  return (
        <div style={{ background: "#0A0A0A", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ color: "#fff", textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Workspace</h1>
            <p style={{ color: "#888" }}>Slug: {params?.slug}</p>
          </div>
        </div>
      );
}
