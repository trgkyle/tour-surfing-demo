import { useState } from "react";
import { BACK_END } from "../config";
import TourModal from "../ToutPending/TourModal";
const Tour = ({ tourData, fetchData }) => {
  const [modalShow, setModalShow] = useState(false);

  async function censorTour(status, tourID) {
    try {
      const response = await fetch(
        BACK_END + "/censor-tour" + "?status=" + status + "&tourID=" + tourID,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
      ).then((response) => response.json());
      fetchData();
    } catch (e) {
      console.log("Error get data");
    }
  }

  return (
    <div className="tour">
      {modalShow && (
        <TourModal
          fetchData={fetchData}
          tourData={tourData}
          setModal={(e) => setModalShow(e)}
        />
      )}
      <div className="card flex-row">
        <div className="card-img-top">
          {tourData.image.map((image, index) => {
            return <img src={image} className="card-img-top" alt="..." />;
          })}

          {/* <img
            src={
              tourData.image[0] ??
              "https://dulichsaigon.vn/wp-content/uploads/2019/09/default-placeholder-1024x1024-570x321.png"
            }
            className="card-img-top"
            alt="..."
          /> */}
        </div>
        <div className="card-body">
          <h5 className="card-title">{tourData.title}</h5>
          <div
            className="card-content"
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: tourData.des }}
          ></div>
          <p className="card-text">
            <small className="text-muted">
              Nền tảng: <b>{tourData.platform}</b>
            </small>
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </p>
          <div className="btn-list">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setModalShow(true);
              }}
            >
              Xem xét
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                censorTour(false, tourData.id);
              }}
            >
              Từ chối
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
