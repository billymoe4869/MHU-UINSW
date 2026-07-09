"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ContentChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300} className={`focus:outline-0`}>
      <LineChart data={data} className="active:outline-0">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bulan" />
        <YAxis />
        <Tooltip />
        <Line type={`monotone`} dataKey={`jumlah`} stroke="#c8922b" strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
}
