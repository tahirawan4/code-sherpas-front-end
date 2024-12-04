import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

interface Transaction {
  amount: number;
  type: string;
  createdAt: string;
}

export default function Statement() {
  const [iban, setIban] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const fetchStatement = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/statement/${iban}`);
      setTransactions(response.data);
      setMessage(null);
    } catch (error: any) {
      setMessage(error.response?.data.message || "Error fetching statement.");
      setTransactions([]);
    }
  };

  return (
    <div style={pageStyle}>
      <Header />
      <h1 style={titleStyle}>Account Statement</h1>
      <input
        type="text"
        placeholder="Enter IBAN"
        value={iban}
        onChange={(e) => setIban(e.target.value)}
        style={inputStyle}
      />
      <button onClick={fetchStatement} style={buttonStyle}>
        Get Statement
      </button>
      {message && <p style={{ color: "red", marginTop: "20px" }}>{message}</p>}
      {transactions.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td style={tdStyle}>{new Date(transaction.createdAt).toLocaleDateString()}</td>
                <td style={tdStyle}>{transaction.type}</td>
                <td style={tdStyle}>${transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
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
  marginTop: "10px",
};
const tableStyle = { marginTop: "20px", width: "100%", borderCollapse: "collapse" };
const thStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  backgroundColor: "#f4f4f4",
  fontWeight: "bold",
};
const tdStyle = { border: "1px solid #ddd", padding: "10px" };

