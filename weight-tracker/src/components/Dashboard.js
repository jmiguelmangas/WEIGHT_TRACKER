import React from 'react';
import RegisterEntity from './RegisterEntity';
import AddWeightRecord from './AddWeightRecord';
import ViewData from './ViewData';
import ModifyEntity from './ModifyEntity';
import ModifyWeightRecord from './ModifyWeightRecord';
import DeleteEntity from './DeleteEntity';
import './Dashboard.css';
import ThemeToggle from './ThemeToggle';

function Dashboard({ refresh, setRefresh, selectedEntity, setSelectedEntity }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1>Tracker</h1>
        </div>
        <ThemeToggle />
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#register">Register</a></li>
            <li><a href="#add-weight">Add Weight</a></li>
            <li><a href="#view-data">View Data</a></li>
            <li><a href="#modify-entity">Modify Entity</a></li>
            <li><a href="#modify-weight">Modify Weight</a></li>
            <li><a href="#delete-entity">Delete Entity</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <section id="register" className="section">
          <RegisterEntity refresh={refresh} setRefresh={setRefresh} />
        </section>
        <section id="add-weight" className="section">
          <AddWeightRecord refresh={refresh} setRefresh={setRefresh} selectedEntity={selectedEntity} />
        </section>
        <section id="view-data" className="section">
          <ViewData refresh={refresh} setRefresh={setRefresh} selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} />
        </section>
        <section id="modify-entity" className="section">
          <ModifyEntity refresh={refresh} setRefresh={setRefresh} />
        </section>
        <section id="modify-weight" className="section">
          <ModifyWeightRecord refresh={refresh} setRefresh={setRefresh} />
        </section>
        <section id="delete-entity" className="section">
          <DeleteEntity refresh={refresh} setRefresh={setRefresh} />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
