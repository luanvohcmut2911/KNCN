import React, { useEffect } from "react";

const SlidingPicture = () => {
  useEffect(() => {
    const floatingImage2 = document.getElementById("cook");
    const containerWidth = floatingImage2.parentNode.clientWidth + 100;
    function startAnimation() {
      setInterval(function () {
        var currentLeft =
          parseInt(floatingImage2.style.left, 10) || containerWidth;
        if (currentLeft <= -2500) {
          floatingImage2.style.left = containerWidth + "px";
          currentLeft = containerWidth;
        } else {
          currentLeft -= 2;
          floatingImage2.style.left = currentLeft + "px";
        }
      }, 10);
    }
    startAnimation();
  }, []);

  const textStyled = {
    color: "white",
    fontSize: "70px",
    textTransform: "uppercase",
    fontFamily:
      '"Champion Middlewt A", "Champion Middlewt B", Helvetica, sans-serif',
    WebkitTextFillColor: "transparent",
    WebkitTextStrokeWidth: "4px",
    WebkitTextStrokeColor: "#fff",
    fontWeight: "900",
  };

  const textContain = {
    position: "absolute",
    display: "block",
    bottom: "15vh",
    height: "40px",
    width: "fit-content",
    background: "transparent",
    zIndex: 2,
    padding: 0,
    whiteSpace: "nowrap",
  };

  return (
    <div id="cook" style={textContain}>
      <p style={textStyled}>bring the cinema to your bed</p>
    </div>
  );
};

export default SlidingPicture;
