const Tour = ({ tourData }) => {
  console.log(tourData);
  return (
    <div className="tour">
      <div className="card flex-row">
        <img
          src={
            tourData.image[0] ??
            "https://dulichsaigon.vn/wp-content/uploads/2019/09/default-placeholder-1024x1024-570x321.png"
          }
          className="card-img-top"
          alt="..."
        />
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
        </div>
      </div>
    </div>
  );
};

export default Tour;
