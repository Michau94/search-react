import "./ImageShow.css";

function ImageShow({ image, key }) {
  console.log(image);

  return (
    <div>
      <img className="img-show" src={image.urls.small} alt={key} />
      {/* <p>{image.alt_desription}</p> */}
    </div>
  );
}

export default ImageShow;
