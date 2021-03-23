import { useState, useEffect } from "react";
import { BACK_END } from "../config";
import TourTwo from "../Tour/TourTwo";
import TourModal from "./TourModal";

const TourPending = () => {
  const [tourList, setTourList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(BACK_END + "/tours-pending", {
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
      setTourList(response);
    } catch (e) {
      console.log("Error get data");
    }
  };

  const renderTourList = () => {
    if (tourList.length) {
      return tourList.map((tour, index) => {
        return <TourTwo fetchData={fetchData} key={index} tourData={tour} />;
      });
    }
    return null;
  };
  console.log(tourList);
  return (
    <div>
      {tourList ? (
        <div className="row">{renderTourList()}</div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPending;
