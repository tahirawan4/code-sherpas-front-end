import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2rem", color: "#4CAF50" }}>Banking App</h1>
      </header>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Link href="/deposit" style={linkStyle}>
          Deposit
        </Link>
        <Link href="/withdraw" style={linkStyle}>
          Withdraw
        </Link>
        <Link href="/transfer" style={linkStyle}>
          Transfer
        </Link>
        <Link href="/statement" style={linkStyle}>
          Account Statement
        </Link>
        <Link href="/create-account" style={linkStyle}>
          Create New Account
        </Link>
        <Link href="/accounts" style={linkStyle}>
          All Accounts
        </Link>
      </nav>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  fontSize: "1.2rem",
  color: "#4CAF50",
  border: "1px solid #4CAF50",
  borderRadius: "5px",
  padding: "10px 20px",
  textAlign: "center",
  width: "200px",
  display: "block",
  textTransform: "uppercase",
  transition: "all 0.3s ease",
};
