import React from "react";
import PropTypes from "prop-types";
import DistributorCard from "./DistributorCard";
import ForecastChart from "./charts/ForecastChart";

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
            <i className="fas fa-calendar"></i>
            <span>Last 30 days</span>
          </div>
          <div className="dashboard-actions-buttons">
            <button className="action-button">
              <i className="fas fa-download"></i>
              <span>Export</span>
            </button>
            <button className="action-button">
              <i className="fas fa-print"></i>
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>
      <div className="metrics-container">
        <DistributorCard
          title="Last Month Shipments"
          value={formatNumber(distributor.lastMonthShipment)}
          icon="fa-box"
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
          icon="fa-chart-line"
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
          icon="fa-calendar-check"
          trend="neutral"
          trendValue="Year to date average"
        />
        <DistributorCard
          title="On-Time Delivery"
          value={`${distributor.onTimeDelivery}%`}
          icon="fa-truck"
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
            <div className="chart-actions">
              <button className="chart-action-button">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <ForecastChart
            historicalData={distributor.historicalShipments}
            forecastData={distributor.forecastData}
          />
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
  }).isRequired,
};

export default Dashboard;
