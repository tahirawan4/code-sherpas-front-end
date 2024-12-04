import { useState } from "react";
import axios, { AxiosError } from "axios"; // Importing AxiosError type
import Header from "../components/Header";

export default function Deposit() {
  const [iban, setIban] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [message, setMessage] = useState<string | null>(null);

  const handleDeposit = async () => {
    try {
      const response = await axios.post(
        "https://code-sherpas-484b9f1e5fb8.herokuapp.com/deposit",
        {
          iban,
          amount,
        }
      );
      setMessage(`Deposit successful! New balance: $${response.data.balance}`);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setMessage(error.response?.data.message || "Error making deposit.");
      } else {
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div style={pageStyle}>
      <Header />
      <h1 style={titleStyle}>Deposit Money</h1>
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
        onChange={(e) =>
          setAmount(e.target.value ? parseFloat(e.target.value) : "")
        }
        style={inputStyle}
      />
      <button onClick={handleDeposit} style={buttonStyle}>
        Deposit
      </button>
      {message && (
        <p style={{ color: "#4CAF50", marginTop: "20px" }}>{message}</p>
      )}
    </div>
  );
}

const pageStyle = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  textAlign: "center" as const,
};
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
