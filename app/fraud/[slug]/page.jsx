"use client";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useParams } from "next/navigation";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  { isFraudster: true, username: "john_doe", transactions: 15, reason: "Suspicious transactions" },
  { isFraudster: false, username: "jane_smith", transactions: 30, reason: "Legitimate user" },
  { isFraudster: true, username: "fraud_guy", transactions: 22, reason: "Multiple chargebacks" },
  { isFraudster: false, username: "legit_user", transactions: 40, reason: "Verified identity" },
];

export default function UserDetails() {
  const params = useParams();
  const user = data.find((u) => u.username === params.slug);
  const [isBlocked, setIsBlocked] = useState(false);

  if (!user) {
    return (
      <div className="mt-32 text-center text-red-500 text-xl font-semibold">
        🚫 User not found
      </div>
    );
  }

  const handleBlockUser = () => {
    if (window.confirm(`Are you sure you want to block ${user.username}?`)) {
      setIsBlocked(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full flex flex-col items-center space-y-6">
        {/* User Info */}
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 capitalize">
            {user.username.replace("_", " ")}
          </h1>
          <p className="text-lg mt-4">
            <strong className="text-gray-700">Fraudulent:</strong>{" "}
            <span className={`font-semibold ${user.isFraudster ? "text-red-500" : "text-green-500"}`}>
              {user.isFraudster ? "Yes" : "No"}
            </span>
          </p>
          <p className="text-lg mt-2">
            <strong className="text-gray-700">Reason:</strong>{" "}
            <span className="text-gray-600">{user.reason}</span>
          </p>
        </div>

        {/* Doughnut Chart */}
        <div className="w-64 h-64">
          <Doughnut
            data={{
              labels: ["Fraud", "Legit"],
              datasets: [
                {
                  label: "Fraud Rate",
                  data: [user.isFraudster ? 80 : 20, user.isFraudster ? 20 : 80],
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

        {/* Block User Button */}
        {!isBlocked ? (
          <button
            onClick={handleBlockUser}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
          >
            🚫 Block User
          </button>
        ) : (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
            ✅ User Blocked
          </div>
        )}
      </div>
    </div>
  );
}
