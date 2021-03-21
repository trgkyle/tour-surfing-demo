import logo from "./logo.svg";
import "./App.css";
import Tour from "./Tour/Tour";
import { useState } from "react";
function App() {
  const [active, setActive] = useState("tour-list");
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
      <body>
        <div class="container">
          <div class="mt-5">
            <p class="h1">Demo Hệ thống thu thập dữ liệu tour du lịch</p>
          </div>
          <div>
            <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
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
              <li class="nav-item" role="presentation">
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
              <li class="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    active === "config" ? "active" : null
                  }`}
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
                  Đồng hồ hệ thống
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row row-cols-1 row-cols-md-4 g-4 tour-wrapper">
                  <Tour />
                  <Tour />
                  <Tour />
                  <Tour />
                  <Tour />
                  <Tour />
                  <Tour />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                Placeholder content for the tab panel. This one relates to the
                home tab. Takes you miles high, so high, 'cause she’s got that
                one international smile. There's a stranger in my bed, there's a
                pounding in my head. Oh, no. In another life I would make you
                stay. ‘Cause I, I’m capable of anything. Suiting up for my
                crowning battle. Used to steal your parents' liquor and climb to
                the roof. Tone, tan fit and ready, turn it up cause its gettin'
                heavy. Her love is like a drug. I guess that I forgot I had a
                choice.
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                Placeholder content for the tab panel. This one relates to the
                home tab. Takes you miles high, so high, 'cause she’s got that
                one international smile. There's a stranger in my bed, there's a
                pounding in my head. Oh, no. In another life I would make you
                stay. ‘Cause I, I’m capable of anything. Suiting up for my
                crowning battle. Used to steal your parents' liquor and climb to
                the roof. Tone, tan fit and ready, turn it up cause its gettin'
                heavy. Her love is like a drug. I guess that I forgot I had a
                choice.
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
