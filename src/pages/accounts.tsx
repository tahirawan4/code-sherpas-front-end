import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

interface Account {
  iban: string;
  balance: number;
  createdAt: string;
}

export default function Accounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/accounts");
        setAccounts(response.data);
      } catch (error: any) {
        setMessage(error.response?.data.message || "Error fetching accounts.");
      }
    };
    fetchAccounts();
  }, []);

  return (
    <div style={pageStyle}>
      <Header />
      <h1 style={titleStyle}>All Accounts</h1>
      {message && <p style={{ color: "red" }}>{message}</p>}
      {accounts.length > 0 ? (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>IBAN</th>
              <th style={thStyle}>Balance</th>
              <th style={thStyle}>Created At</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <td style={tdStyle}>{account.iban}</td>
                <td style={tdStyle}>${account.balance}</td>
                <td style={tdStyle}>{new Date(account.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ color: "#4CAF50", marginTop: "20px" }}>No accounts found.</p>
      )}
    </div>
  );
}

const pageStyle = { fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" };
const titleStyle = { color: "#4CAF50", marginBottom: "20px" };
const tableStyle = { marginTop: "20px", width: "100%", borderCollapse: "collapse" };
const thStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  backgroundColor: "#f4f4f4",
  fontWeight: "bold",
};
const tdStyle = { border: "1px solid #ddd", padding: "10px" };

