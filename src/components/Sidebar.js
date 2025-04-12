import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";

const Sidebar = ({
  distributors,
  selectedDistributor,
  setSelectedDistributor,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Distributors</h3>
      </div>
      <div className="distributor-list">
        {distributors.map((distributor) => (
          <div
            key={distributor.id}
            className={`distributor-item ${selectedDistributor && selectedDistributor.id === distributor.id ? "active" : ""}`}
            onClick={() => setSelectedDistributor(distributor)}
          >
            <div className="distributor-name">{distributor.name}</div>
            <div className={`status-indicator ${distributor.status}`}>
              {distributor.status}
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <button className="add-button">
          <FaPlus className="add-icon" />
          <span>Add Distributor</span>
        </button>
      </div>
    </div>
  );
};

// Prop types validation
Sidebar.propTypes = {
  distributors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedDistributor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedDistributor: PropTypes.func.isRequired,
};

export default Sidebar;
