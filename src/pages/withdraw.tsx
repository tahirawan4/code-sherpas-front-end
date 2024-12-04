import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function Withdraw() {
  const [iban, setIban] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [message, setMessage] = useState<string | null>(null);

  const handleWithdraw = async () => {
    try {
      const response = await axios.post("http://localhost:3001/withdraw", { iban, amount });
      setMessage(`Withdraw successful! New balance: $${response.data.balance}`);
    } catch (error: any) {
      setMessage(error.response?.data.message || "Error making withdrawal.");
    }
  };

  return (
    <div style={pageStyle}>
      <Header />
      <h1 style={titleStyle}>Withdraw Money</h1>
      <input
        type="text"
        placeholder="IBAN"
        value={iban}
        onChange={(e) => setIban(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
        style={inputStyle}
      />
      <button onClick={handleWithdraw} style={buttonStyle}>
        Withdraw
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

