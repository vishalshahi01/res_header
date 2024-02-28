import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <div className={visible ? "navbar" : "navbar hidden"}>
        <div className="navbar-container">
          <h2 className="brand">Animals</h2>
          <div
            className="toggle-button"
            onClick={() => setNavOpen(!navOpen)}
          >
            <div className={navOpen ? "hamburger open" : "hamburger"}></div>
            <div className={navOpen ? "hamburger open" : "hamburger"}></div>
            <div className={navOpen ? "hamburger open" : "hamburger"}></div>
          </div>
          <div className={navOpen ? "nav-links open" : "nav-links"}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Species</a>
            <a href="#projects">Future</a>
          </div>
        </div>
      </div>
      <div className="content">
        {/*  */}

        <section id="home">
          <h1>Animal</h1>
          <h4>
            The diversity of animals in the Amazon rainforest is astounding,
            ranging from colorful macaws to elusive jaguars.
          </h4>
          <h4>
            Animals play a significant role in our lives, contributing to our
            well-being through various means such as companionship, agriculture,
            scientific research, ecosystem services, and even cultural and
            spiritual significance, profoundly influencing our daily experiences
            and shaping our understanding of the world around us.
          </h4>
          <div className="home-content">
            <img
              src={
                "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
              }
              alt="About "
              className="animal-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D%3D"
              }
              alt="About "
              className="animal-image"
            />
          </div>
          <div className="description">
            <h4>
              The diversity of animals across the globe encompasses an
              astonishing array of species, ranging from microscopic organisms
              inhabiting the depths of the ocean to majestic land-dwelling
              mammals roaming vast savannas and dense forests.
            </h4>
          </div>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>Animals</p>
          <div className="about-content">
            <img
              src={
                "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9uJTIwZm9yZXN0fGVufDB8fDB8fHww"
              }
              alt="About "
              className="animal-image"
            />
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1687428986398-680991836374?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVwdGlsZXN8ZW58MHx8MHx8fDA%3D"
              }
              alt="About "
              className="animal-image"
            />
          </div>
          <div className="description">
            <h3>Who We Are</h3>
            <p>
              We are a passionate team dedicated to providing top-quality
              services to our clients. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam vel magna at justo ultricies accumsan.
            </p>
            <p>
              Our mission is to deliver innovative solutions that exceed our
              clients' expectations and drive success.
            </p>
          </div>
        </section>

        <section id="skills">
          <h2>Types of Species</h2>
          <div className="home-content">
            <div className="home-content2">
              <img
                src={
                  "https://images.unsplash.com/photo-1599597437147-150934b5d2e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D"
                }
                alt="About "
                className="animal-image"
              />
              <p>Mammals</p>
            </div>
            <div className="home-content2">
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1687191004390-5bd34561cba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlyZHN8ZW58MHx8MHx8fDA%3D"
                }
                alt="About "
                className="animal-image"
              />
              <p>Birds</p>
            </div>
            <div className="home-content2">
              <img
                src={
                  "https://images.unsplash.com/photo-1571386697993-ed96590fc965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVwdGlsc3xlbnwwfHwwfHx8MA%3D%3D"
                }
                alt="About "
                className="animal-image"
              />
              <p>Reptiles</p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Future of Animals</h2>
          <p>Challenges affecting animal populations.</p>
          <div className="projects-list">
            <ul>
              <li>
                <h4>Deforestation Impact Analysis</h4>
                <p>
                  An analysis project aimed at understanding the impact of
                  deforestation on various animal species and their habitats.
                  The project explores the consequences of deforestation,
                  including habitat loss, fragmentation, and its contribution to
                  species decline and extinction.
                </p>
              </li>
              <li>
                <h4>Extinct Species Documentation</h4>
                <p>
                  A comprehensive documentation effort focusing on species that
                  have become extinct due to various human activities, including
                  habitat destruction, pollution, and overexploitation. The
                  project aims to raise awareness about the importance of
                  conservation efforts to prevent further species loss.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
