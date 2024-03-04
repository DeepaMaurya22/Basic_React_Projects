import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=5")
      .then((response) => response.json())
      .then((data) => {
        const imageUrls = data.map((item) => item.download_url);
        setImages(imageUrls);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="image-slider"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.length > 0 && (
          <>
            <button onClick={goToPrevImage}>Previous</button>
            <img
              style={{ width: "30rem" }}
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
            />
            <button onClick={goToNextImage}>Next</button>
          </>
        )}
      </div>
      <div
        className="image-navigation"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            className={index === currentImageIndex ? "active" : ""}
            onClick={() => goToImage(index)}
          >
            &#8226;
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
