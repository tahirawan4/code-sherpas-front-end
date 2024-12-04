import { useState } from "react";
import axios, { AxiosError } from "axios"; // Import AxiosError type
import Header from "../components/Header";

export default function Transfer() {
  const [fromIban, setFromIban] = useState("");
  const [toIban, setToIban] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [message, setMessage] = useState<string | null>(null);

  const handleTransfer = async () => {
    try {
      await axios.post(
        "https://code-sherpas-484b9f1e5fb8.herokuapp.com/transfer",
        {
          fromIban,
          toIban,
          amount,
        }
      );
      setMessage("Transfer successful!");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setMessage(error.response?.data.message || "Error making transfer.");
      } else {
        setMessage("An unexpected error occurred.");
      }
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
        onChange={(e) =>
          setAmount(e.target.value ? parseFloat(e.target.value) : "")
        }
        style={inputStyle}
      />
      <button onClick={handleTransfer} style={buttonStyle}>
        Transfer
      </button>
      {message && (
        <p style={{ color: "#4CAF50", marginTop: "20px" }}>{message}</p>
      )}
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  color: "#4CAF50",
  marginBottom: "20px",
};

const inputStyle: React.CSSProperties = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "80%",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
