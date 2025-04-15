import React from "react";
import PropTypes from "prop-types";
import DistributorCard from "./DistributorCard";
import ForecastChart from "./charts/ForecastChart";
import RegionalDistributionChart from "./charts/RegionalDistributionChart.jsx";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoMdDownload, IoMdPrint } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { BsCalendarMonth } from "react-icons/bs";
import { GiCargoShip } from "react-icons/gi";

const Dashboard = ({ distributor }) => {
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>{distributor.name} Dashboard</h1>
        <div className="dashboard-actions">
          <div className="date-range">
            <IoCalendarNumberOutline />
            <span className="">Last 30 days</span>
          </div>
          <div className="dashboard-actions-buttons">
            <button className="action-button">
              <IoMdDownload />
              <span>Export</span>
            </button>
            <button className="action-button">
              <IoMdPrint />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>
      <div className="metrics-container">
        <DistributorCard
          title="Last Month Shipments"
          value={formatNumber(distributor.lastMonthShipment)}
          icon={<FaRegCalendarCheck />}
          trend={
            distributor.lastMonthShipment > distributor.ytdAverageShipment
              ? "up"
              : "down"
          }
          trendValue={`${Math.abs((distributor.lastMonthShipment / distributor.ytdAverageShipment - 1) * 100).toFixed(1)}% from average`}
        />
        <DistributorCard
          title="Forecasted Shipments"
          value={formatNumber(distributor.forecastedShipment)}
          icon={<GiCargoShip />}
          trend={
            distributor.forecastedShipment > distributor.lastMonthShipment
              ? "up"
              : "down"
          }
          trendValue={`${Math.abs((distributor.forecastedShipment / distributor.lastMonthShipment - 1) * 100).toFixed(1)}% from last month`}
        />
        <DistributorCard
          title="YTD Monthly Average"
          value={formatNumber(distributor.ytdAverageShipment)}
          icon={<BsCalendarMonth />}
          trend="neutral"
          trendValue="Year to date average"
        />
        <DistributorCard
          title="On-Time Delivery"
          value={`${distributor.onTimeDelivery}%`}
          icon={<FaTruckFront />}
          trend={distributor.onTimeDelivery > 90 ? "up" : "down"}
          trendValue={
            distributor.onTimeDelivery > 90 ? "Good" : "Needs improvement"
          }
        />
      </div>
      <div className="charts-container">
        <div className="chart-card large">
          <div className="chart-header">
            <h3>Shipment Trend & Forecast</h3>
          </div>
          <ForecastChart
            historicalData={distributor.historicalShipments}
            forecastData={distributor.forecastData}
          />
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <h3>Distribution by Product</h3>
          </div>
          <RegionalDistributionChart data={distributor.topProducts} />
        </div>
      </div>
    </div>
  );
};

// Prop types validation
Dashboard.propTypes = {
  distributor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    lastMonthShipment: PropTypes.number.isRequired,
    forecastedShipment: PropTypes.number.isRequired,
    ytdAverageShipment: PropTypes.number.isRequired,
    onTimeDelivery: PropTypes.number.isRequired,
    historicalShipments: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      }),
    ).isRequired,
    forecastData: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      }),
    ).isRequired,
    topProducts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Dashboard;
