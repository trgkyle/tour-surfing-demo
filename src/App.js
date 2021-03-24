import logo from "./logo.svg";
import "./App.css";
import Tour from "./Tour/TourOne";
import { useState } from "react";
import TourManage from "./TourManage/TourManage";
import TourPending from "./ToutPending/TourPending";
import ConfigSystem from "./ConfigSystem/ConfigSystem";
function App() {
  const [active, setActive] = useState("tour-list");
  const renderContent = () => {
    switch (active) {
      case "tour-list":
        return <TourManage />;
      case "tour-pending":
        return <TourPending />;
      case "config":
        return <ConfigSystem />;
    }
  };
  return (
    <div className="App">
      {/* <header className="App-header">a
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="container">
        <div className="mt-5">
          <p className="h1">Demo Hệ thống thu thập dữ liệu tour du lịch</p>
        </div>
        <div>
          <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  active === "tour-list" ? "active" : null
                }`}
                onClick={() => {
                  setActive("tour-list");
                }}
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Danh sách tour
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  active === "tour-pending" ? "active" : null
                }`}
                onClick={() => {
                  setActive("tour-pending");
                }}
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Danh sách tour chờ kiểm duyệt
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${active === "config" ? "active" : null}`}
                onClick={() => {
                  setActive("config");
                }}
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Cài đặt hệ thống
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="tour-wrapper">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
