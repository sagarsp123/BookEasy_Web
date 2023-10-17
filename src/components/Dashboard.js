import { useState } from "react";
import "../Styles/Styles.css";
import BarChart from "./BarChart";
import { UserData } from "../utils/Data";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

function Dashboard() {
  //console.log(UserData);
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Total Spending Monthly",
        data: UserData.map((data) => data.userGain),
        barPercentage: 0.3,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });

  return (
    <div>
      <div
        class="padding-left-10 padding-right-10 margin-top-50"
        style={{ marginBottom: "770px" }}
      >
        <div class="float-left margin-right-60">
          <MenuBar />
        </div>
        <div class="flexbox">
          <div class="dashboard-details margin-right-60">
            <div class="margin-top-20">Total Hotels Stayed</div>
            <div class="flex-center">4</div>
          </div>
          <div class="dashboard-details margin-right-60">
            <div class="margin-top-20">Total Rooms Booked</div>
            <div class="flex-center">24</div>
          </div>
          <div class="dashboard-details margin-right-60">
            <div class="margin-top-20">Total Expenses</div>
            <div class="flex-center">$280</div>
          </div>
        </div>
        <div class="margin-top-50">
          <BarChart chartData={userData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
