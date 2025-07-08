// Para fins de estudo, a estilização aqui é feita com um único Styled Component, que é o Container.
// O Container contém as classes para os elementos internos, como .left, .right...

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
    img {
      width: 15rem;
    }
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
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
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
          <img src="/images/highlights-1.svg" alt="" />
          <h1>Manage your tasks</h1>
          <h3>
            Organize your tasks efficiently with UpTodo. Create, manage, and
            track your tasks seamlessly.
          </h3>
          <div className="steps-indicator">
            <div className="step-indicator"></div>
            <div className="step-indicator"></div>
            <div className="step-indicator"></div>
          </div>
          <button className="avancar">Avançar</button>
        </div>
      </div>
      <div className="right">
        <div className="steps">
          <div className="step">
            <div className="circle"></div>
            <h2>Manage your tasks</h2>
          </div>
          <div className="step">
            <div className="circle"></div>
            <h2>Task title</h2>
          </div>
          <div className="step">
            <div className="circle"></div>
            <h2>Task title</h2>
          </div>
          <div className="step">
            <div className="circle"></div>
            <h2>Task title</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LandingSections;
