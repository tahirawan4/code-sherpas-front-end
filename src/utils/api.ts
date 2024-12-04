import axios from "axios";

const API_BASE_URL = "https://code-sherpas-484b9f1e5fb8.herokuapp.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const depositMoney = (data: { iban: string; amount: number }) =>
  api.post("/deposit", data);

export const withdrawMoney = (data: { iban: string; amount: number }) =>
  api.post("/withdraw", data);

export const transferMoney = (data: {
  fromIban: string;
  toIban: string;
  amount: number;
}) => api.post("/transfer", data);

export const getStatement = (iban: string) => api.get(`/statement/${iban}`);
