import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function Transfer() {
  const [fromIban, setFromIban] = useState("");
  const [toIban, setToIban] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [message, setMessage] = useState<string | null>(null);

  const handleTransfer = async () => {
    try {
      const response = await axios.post("http://localhost:3001/transfer", { fromIban, toIban, amount });
      setMessage("Transfer successful!");
    } catch (error: any) {
      setMessage(error.response?.data.message || "Error making transfer.");
    }
  };

  return (
    <div style={pageStyle}>
      <Header />
      <h1 style={titleStyle}>Transfer Money</h1>
      <input
        type="text"
        placeholder="From IBAN"
        value={fromIban}
        onChange={(e) => setFromIban(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="To IBAN"
        value={toIban}
        onChange={(e) => setToIban(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
        style={inputStyle}
      />
      <button onClick={handleTransfer} style={buttonStyle}>
        Transfer
      </button>
      {message && <p style={{ color: "#4CAF50", marginTop: "20px" }}>{message}</p>}
    </div>
  );
}

const pageStyle = { fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" };
const titleStyle = { color: "#4CAF50", marginBottom: "20px" };
const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "80%",
};
const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

