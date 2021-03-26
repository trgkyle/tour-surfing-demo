import { useState, useEffect } from "react";
import { BACK_END } from "../config";
const ConfigSystem = () => {
  const [tourLength, setTourLength] = useState(1);

  async function crawlTours(url) {
    try {
      const response = await fetch(BACK_END + url + "?crawlerLength=" + tourLength, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }).then((response) => response.json());
    } catch (e) {
      console.log("Error set crawler");
    }
  }

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          Nhập số lượng bài viết muốn thu thập
        </span>
        <input
          value={tourLength}
          onChange={(e) => {
            setTourLength(+e.target.value);
          }}
          type="number"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
      </div>
      <div className="btn-list">
        <button type="button" className="btn btn-primary" onClick={()=> {crawlTours("/facebook-crawler-active")}}>
          Thu thập Facebook
        </button>
        <button type="button" className="btn btn-secondary" onClick={()=> {crawlTours("/chotot-crawler-active")}}>
          Thu thập Chotot
        </button>
        <button type="button" className="btn btn-success" onClick={()=> {crawlTours("/travelcom-crawler-active")}}>
          Thu thập VietTravel
        </button>
      </div>

      <div className="row col mt-5">
        <span>Cài đặt thời gian dịch vụ thu thập</span>
      </div>
    </div>
  );
};

export default ConfigSystem;
