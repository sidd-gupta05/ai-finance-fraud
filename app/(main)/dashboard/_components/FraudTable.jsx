"use client";
import { useRouter } from "next/navigation";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  { isFraudster: true, username: "john_doe", transactions: 15 },
  { isFraudster: false, username: "jane_smith", transactions: 30 },
  { isFraudster: true, username: "fraud_guy", transactions: 22 },
  { isFraudster: false, username: "legit_user", transactions: 40 },
];

export default function FraudTable() {
  const router = useRouter();

  const handleRowClick = (username) => {
    router.push(`/fraud/${username}`);
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row justify-between w-full min-h-screen bg-gray-100">
      {/* Table Section */}
      <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fraud Detection Table</h2>
        <Table className="border">
          <TableHeader>
            <TableRow className="bg-gray-200">
              <TableHead className="p-3 text-left text-gray-700">Username</TableHead>
              <TableHead className="p-3 text-left text-gray-700">Transactions</TableHead>
              <TableHead className="p-3 text-left text-gray-700">Fraud Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                className={`cursor-pointer transition-all duration-200 ${
                  item.isFraudster ? "bg-red-100 hover:bg-red-200" : "hover:bg-gray-100"
                }`}
                onClick={() => handleRowClick(item.username)}
              >
                <TableCell className="p-4 font-medium">{item.username.replace("_", " ")}</TableCell>
                <TableCell className="p-4">{item.transactions}</TableCell>
                <TableCell
                  className={`p-4 font-semibold ${
                    item.isFraudster ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {item.isFraudster ? "Fraud" : "Legit"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Chart Section */}
      <div className="w-full lg:w-1/3 flex justify-center items-center mt-8 lg:mt-0">
        <div className=" rounded-lg p-6 w-full max-w-sm">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Fraud Distribution</h2>
          <Doughnut
            data={{
              labels: ["Fraud", "Legit"],
              datasets: [
                {
                  label: "Poll",
                  data: [
                    data.filter((user) => user.isFraudster).length,
                    data.filter((user) => !user.isFraudster).length,
                  ],
                  backgroundColor: ["#ef4444", "#10b981"],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
