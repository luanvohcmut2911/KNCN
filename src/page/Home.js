import React from "react";
// import SideBar from '../components/Sidebar'
import { Layout } from "antd";
import SlidingPicture from './SlidingPicture';
import { createSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const backgroundImageUrl = "https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const images = [
    { src: "https://wallpapercave.com/wp/wp3785670.jpg", alt: "Image 1" },
    { src: "https://images2.alphacoders.com/589/589251.jpg", alt: "Image 2" },
    { src: "https://images2.alphacoders.com/851/85182.jpg", alt: "Image 3" },
    { src: "https://images4.alphacoders.com/651/651375.jpg", alt: "Image 4" },
    { src: "https://images2.alphacoders.com/130/1306782.png", alt: "Image 5" },
    { src: "https://images4.alphacoders.com/653/653613.jpg", alt: "Image 6" },
    { src: "https://images7.alphacoders.com/550/550739.jpg", alt: "Image 7" },
  ];
  const slideImg = {
    marginBottom: "15px",
    cursor: "pointer",
    maxWidth: "100%",
    maxHeight: "100%",
    border: "solid 3px white",
    position: "flex",
    transition: "transform 1s ease-in-out"
  }
  useEffect(() => {
    const floatingImage2 = document.getElementById("cotan");
    let animation;

    function startAnimation() {
      animation = setInterval(function () {
        var currentBottom =
          parseInt(floatingImage2.style.bottom, 10) || 0;
        if (currentBottom <= -floatingImage2.offsetHeight) {
          clearInterval(animation);
          floatingImage2.style.display = "none";
          setTimeout(function () {
            floatingImage2.style.display = "block";
            floatingImage2.style.bottom = "2100vh";
            startAnimation(); // Start the animation again
          }, 30);
        } else {
          currentBottom -= 1;
          floatingImage2.style.bottom = currentBottom + "px";
        }
      }, 20);
    }

    floatingImage2.addEventListener("mouseenter", function () {
      clearInterval(animation);
    });

    floatingImage2.addEventListener("mouseleave", function () {
      startAnimation();
    });

    startAnimation();
  }, []);

  useEffect(() => {
    let slideIndex = 0;
    let timeoutId = null;

    function showSlides() {
      let slides = document.getElementsByClassName("slideshow-image");
      if (slides.length === 0) {
        timeoutId = setTimeout(showSlides, 100);
        return;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      timeoutId = setTimeout(showSlides, 3000);
    }

    showSlides();

    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  useEffect(() => {
    const floatingImage1 = document.getElementById("conan");
    let animation;

    function startAnimation() {
      animation = setInterval(function () {
        var currentBottom =
          parseInt(floatingImage1.style.bottom, 10) || 0;
        if (currentBottom >= 2000) {
          clearInterval(animation);
          floatingImage1.style.display = "none";
          setTimeout(function () {
            floatingImage1.style.display = "block";
            floatingImage1.style.bottom = "-500px";
            startAnimation(); // Start the animation again
          }, 30);
        } else {
          currentBottom += 1;
          floatingImage1.style.bottom = currentBottom + "px";

        }
      }, 20);
    }
    const containers = document.querySelectorAll(".conain-image");
    for (const container of containers) {
      container.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.13)";
      });
      container.addEventListener("click", ()=>{
        navigate({
          pathname: '/film',
          search: `${createSearchParams({
            ref: 'nv_home->film'
          })}`
        })
      })
      container.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    }




    floatingImage1.addEventListener("mouseenter", function () {
      clearInterval(animation);
    });

    floatingImage1.addEventListener("mouseleave", function () {
      startAnimation();
    });

    startAnimation();
  }, [navigate]);
  return (
    <Layout style={{ height: "100vh" }}>
      <section
        className="container"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <div
          className="conain"
          id="conan"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            left: "15vw",
            zIndex: "4"
          }}
        >
          <img className="conain-image" style={slideImg} src="https://images.alphacoders.com/301/301253.jpg" alt="mission" />
          <img className="conain-image" style={slideImg} src="https://images5.alphacoders.com/112/1125315.jpg" alt="gambit" />
          <img className="conain-image" style={slideImg} src="https://images4.alphacoders.com/646/646889.jpg" alt="godfather" />
          <img className="conain-image" style={slideImg} src="https://images2.alphacoders.com/817/817125.jpg" alt="spiderman" />
          <img className="conain-image" style={slideImg} src="https://images5.alphacoders.com/118/1188416.jpg" alt="spiderman" />
          <img className="conain-image" style={slideImg} src="https://wallpapercave.com/wp/wp6581266.jpg" alt="spiderman" />
        </div>
        <div
          className="conainn"
          id="cotan"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            right: "2vw",
            zIndex: "4"
          }}
        >
          <img className="conain-image" style={slideImg} src="https://images.alphacoders.com/869/869845.jpg" alt="mission" />
          <img className="conain-image" style={slideImg} src="https://wallpapercave.com/wp/wp383267.jpg" alt="gambit" />
          <img className="conain-image" style={slideImg} src="https://wallpapercave.com/wp/wp2016392.jpg" alt="godfather" />
          <img className="conain-image" style={slideImg} src="https://images8.alphacoders.com/123/1236928.jpg" alt="spiderman" />
          <img className="conain-image" style={slideImg} src="https://images8.alphacoders.com/104/1046291.jpg" alt="godfather" />
          <img className="conain-image" style={slideImg} src="https://images8.alphacoders.com/616/616460.jpg" alt="spiderman" />
        </div>
        <div
          className="slideshow-container"
          style={{
            position: "relative",
            margin: "auto",
            height: "80vh",
            width: "80vw",
            animation: "glow 15s ease-in-out infinite",
            borderTop: "none",
            borderRadius: "9px",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <SlidingPicture imageUrl="https://images8.alphacoders.com/632/632051.png" />
          <div className="slideshow">
            {images.map((image, index) => (
              <div
                key={index}
                className="slideshow-image fade"
                style={{
                  display: "block",
                  position: "absolute",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  zIndex: "1",
                  border: "3px solid white",
                  borderRadius: "9px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "9px"
                  }}
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
