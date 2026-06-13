"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: 40, textAlign: "center", fontFamily: "Georgia, serif" }}>
      <p style={{ color: "#1a0900", marginBottom: 16 }}>Something went wrong.</p>
      <button onClick={reset} style={{ fontFamily: "Georgia, serif", cursor: "pointer" }}>Try again</button>
    </div>
  );
}
