import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios"; // Importing AxiosError type
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
        const response = await axios.get(
          "https://code-sherpas-484b9f1e5fb8.herokuapp.com/accounts"
        );
        setAccounts(response.data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setMessage(
            error.response?.data.message || "Error fetching accounts."
          );
        } else {
          setMessage("An unexpected error occurred.");
        }
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
                <td style={tdStyle}>
                  {new Date(account.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ color: "#4CAF50", marginTop: "20px" }}>
          No accounts found.
        </p>
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
const tableStyle = {
  marginTop: "20px",
  width: "100%",
  borderCollapse: "collapse" as const,
};
const thStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  backgroundColor: "#f4f4f4",
  fontWeight: "bold",
};
const tdStyle = { border: "1px solid #ddd", padding: "10px" };
