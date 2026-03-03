import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Aidan's Tax Tracker</h1>
      <p>Welcome to your Tax Command Center.</p>

      <div style={{ marginTop: "30px" }}>
        <Link href="/week">
          <button style={{ padding: "10px 20px", marginRight: "10px" }}>
            Add New Week
          </button>
        </Link>

        <Link href="/dashboard">
          <button style={{ padding: "10px 20px" }}>View Dashboard</button>
        </Link>
      </div>
    </main>
  );
}