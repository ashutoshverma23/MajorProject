import React from "react";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./Reports.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Reports = () => {
  const { authUser } = useAuthContext();
  const [stressData, setStressData] = useState([]);
  console.log("stressData", stressData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/stress/fetch/${authUser._id}`); // Adjust API endpoint
        setStressData(response.data);
      } catch (error) {
        console.error("Error fetching stress data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2 className="heading-text-2">Stress Score Distribution</h2>
        <div className="piechat-object">
          <PieChart data={stressData} />
        </div>
      </div>
    </>
  );
};

export default Reports;
