import React from "react";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { getUserAccount } from "@/actions/dashboard";
import AccountCard from "./_components/account-card";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import SearchBar from "./_components/SearchBar.jsx";
import FraudTable from "./_components/FraudTable";

async function DashboardPage() {
  return (
    <div className="px-5">
      <SearchBar />
      {/* <div className="bg-red-100 w-80">a</div>
      <div className="bg-red-100 w-20">a</div> */}
      <FraudTable />
    </div>
  );
}

export default DashboardPage;
