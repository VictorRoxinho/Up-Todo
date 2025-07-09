// Para fins de estudo, a estilização aqui é feita com um único Styled Component, que é o Container.
// O Container contém as classes para os elementos internos, como .left, .right...

import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  .left {
    flex: 4;
    display: flex;
    flex-direction: column;
  }

  .right {
    flex: 1;
    padding: 2rem 1rem;
    background: #f5f7fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("/images/right-bar.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  .logo,
  .skip {
    display: flex;
    align-items: center;
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto 0;
    margin-top: 10rem;
    padding: 2rem;
    gap: 2rem;
  }

  .steps-indicator {
    display: flex;
    gap: 1rem;
  }

  .step-indicator {
    width: 6rem;
    height: 0.5rem;
    background-color: #ccc;
  }

  .step-indicator.active {
    background-color: #4067ec;
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: #fff;
  }

  .step {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    gap: 1rem;
  }

  .circle {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background-color: transparent;
    border: solid 3px #fff;
  }

  .circle.active {
    background-color: #fff;
    border-color: #4067ec;
  }

  button {
    cursor: pointer;
  }

  .skip-button {
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    border: solid 1px #212121;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 2px;
    background-color: transparent;
    cursor: pointer;
  }

  .avancar {
    width: 15rem;
    height: 2.5rem;
    padding: 0;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: #4067ec;
    color: #fff;
    cursor: pointer;
  }
  .skip-button:hover {
    background-color: #4067ec;
    color: #fff;
    border: solid 1px #fff;
    transition: background 0.35s;
  }

  .avancar:hover {
    background-color: #284ab8;
    transition: background 0.35s;
  }

  .avancar:active,
  .skip-button:active {
    transform: scale(0.99);
    filter: brightness(0.92);
    transition: transform 0.1s, filter 0.1s;
  }
`;

function LandingSections() {
  const heroTexts = [
    {
      img: "/images/highlights-1.svg",
      title: "Manage your tasks",
      desc: "Organize your tasks efficiently with UpTodo. Create, manage, and track your tasks seamlessly.",
      btn: "Avançar",
    },
    {
      img: "/images/highlights-2.svg",
      title: "Set priorities",
      desc: "Prioritize your tasks to focus on what matters most. UpTodo helps you stay organized and productive.",
      btn: "Avançar",
    },
    {
      img: "/images/highlights-3.svg",
      title: "Track progress",
      desc: "Monitor your task completion and stay on top of your goals with UpTodo's intuitive tracking features.",
      btn: "Avançar",
    },
    {
      img: "/images/highlights-3.svg",
      title: "Hora de começar",
      desc: "Estamos prontos para te ajudar a organizar suas tarefas. Faça login e comece agora mesmo!",
      btn: "Fazer login",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < heroTexts.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Container>
      <div className="left">
        <div className="topbar">
          <div className="logo">
            <img src="/icons/upTodo-box.svg" alt="" style={{ width: "4rem" }} />
            <h2>UpTodo</h2>
          </div>
          <div className="skip">
            <h3>Já conhece como funciona?</h3>
            <button className="skip-button">Pular</button>
          </div>
        </div>
        <div className="hero">
          <img
            src={heroTexts[currentStep].img}
            alt=""
            style={{ width: "15rem" }}
          />
          <h1>{heroTexts[currentStep].title}</h1>
          <h3>{heroTexts[currentStep].desc}</h3>
          <div className="steps-indicator">
            {heroTexts.map((_, index) => (
              <div
                key={index}
                className={`step-indicator ${
                  index <= currentStep ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
          <button className="avancar" onClick={handleNextStep}>
            {heroTexts[currentStep].btn}
          </button>
        </div>
      </div>
      <div className="right">
        <div className="steps">
          {heroTexts.map((step, index) => (
            <div className="step" key={index}>
              <div
                className={`circle ${index <= currentStep ? "active" : ""}`}
              ></div>
              <h2
                style={
                  index + 1 <= currentStep
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                {step.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default LandingSections;
