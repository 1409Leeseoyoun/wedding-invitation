function Gallery() {
  const images = [
    "/웨딩.jpg",
    "/웨딩2.jpg",
    "/웨딩3.jpg",
  ];

  return (
    <div>
      <h2>우리의 추억</h2>
      <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`기념사진${index + 1}`}
            width="150"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;