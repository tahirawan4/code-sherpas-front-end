import Link from "next/link";

export default function Header() {
  return (
    <header style={headerStyle}>
      <Link href="/" style={buttonStyle}>
        Home
      </Link>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "#f4f4f4",
  borderBottom: "1px solid #ddd",
};

const buttonStyle = {
  textDecoration: "none",
  color: "#fff",
  backgroundColor: "#4CAF50",
  padding: "10px 20px",
  borderRadius: "5px",
  fontSize: "1rem",
  textTransform: "uppercase" as const,
  transition: "all 0.3s ease",
  border: "none",
};
