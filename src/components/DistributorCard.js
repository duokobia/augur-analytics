import React from "react";
import PropTypes from "prop-types";
import { FaArrowDown } from "react-icons/fa";

function DistributorCard({ title, value, trend, trendValue }) {
  return (
    <div className="metric-card">
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-value">{value}</div>
        <div className={`card-trend ${trend}`}>
          {trend === "up" && <i className="fas fa-arrow-up"></i>}
          {trend === "down" && <FaArrowDown className="arrow-down-icon" />}
          {trend === "neutral" && <i className="fas fa-minus"></i>}
          <span>{trendValue}</span>
        </div>
      </div>
    </div>
  );
}

// Prop types validation
DistributorCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(["up", "down", "neutral"]).isRequired,
  trendValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default DistributorCard;
