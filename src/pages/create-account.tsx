import { useState } from "react";
import axios, { AxiosError } from "axios"; // Importing AxiosError type
import Header from "../components/Header";

export default function CreateAccount() {
  const [initialBalance, setInitialBalance] = useState<number | "">("");
  const [iban, setIban] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post(
        "https://code-sherpas-484b9f1e5fb8.herokuapp.com/create-account",
        {
          initialBalance: initialBalance || 0,
        }
      );
      setIban(response.data.iban);
      setMessage("Account created successfully!");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setMessage(error.response?.data.message || "Error creating account.");
      } else {
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div style={pageStyle}>
      <Header />
      <h1 style={titleStyle}>Create New Account</h1>
      <input
        type="number"
        placeholder="Initial Balance"
        value={initialBalance}
        onChange={(e) =>
          setInitialBalance(e.target.value ? parseFloat(e.target.value) : "")
        }
        style={inputStyle}
      />
      <button onClick={handleCreateAccount} style={buttonStyle}>
        Create Account
      </button>
      {iban && (
        <p style={{ color: "#4CAF50", marginTop: "20px" }}>
          Account created successfully! IBAN: <strong>{iban}</strong>
        </p>
      )}
      {message && !iban && (
        <p style={{ color: "red", marginTop: "20px" }}>{message}</p>
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
  marginTop: "10px",
};
