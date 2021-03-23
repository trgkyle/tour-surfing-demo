import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { BACK_END } from "../config";
const TourModal = ({ tourData, setModal, fetchData }) => {
  const [show, setShow] = useState(true);
  const [tourEdit, setTourEdit] = useState(tourData);
  const handleClose = () => setModal(false);

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
    <div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Duyệt tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Tiêu đề
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={(e) => {
                    setTourEdit({ ...tourEdit, title: e.target.value });
                  }}
                  value={tourEdit.title}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="des" className="col-sm-2 col-form-label">
                Miêu tả
              </label>
              <div className="col-sm-10">
                <div
                  style={{ padding: "10px" }}
                  contentEditable="true"
                  type="text"
                  //   className="form-control"
                  id="des"
                  onChange={(e) => {
                    setTourEdit({ ...tourEdit, des: e.target.value });
                  }}
                  dangerouslySetInnerHTML={{ __html: tourEdit.des }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Giá
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="title"
                  onChange={(e) => {
                    setTourEdit({ ...tourEdit, price: e.target.value });
                  }}
                  value={tourEdit.price}
                />
              </div>
            </div>

            <div className="row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Ảnh
              </label>
              <div className="col-sm-10 row mb-4">
                {tourData.image.map((image) => {
                  return (
                    <div className="col-4">
                      <img
                        src={image}
                        className="card-img-top image-list"
                        alt="..."
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Nền tảng
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={tourEdit.platform}
                  disabled
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Đường dẫn
              </label>
              <div className="col-sm-10">
                <a target="_blank" href={tourData.link}>
                  {tourData.link}
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Lưu và đăng
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              censorTour(false, tourData.id);
            }}
          >
            Từ chối
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TourModal;
