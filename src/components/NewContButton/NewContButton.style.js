import styled from 'styled-components';

export const NewContButton = styled.button`
  display: block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  font-size: 28px;
  font-family: fantasy;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #ff69b4 0%, #c71585 100%);
  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%),
    0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%),
    inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  padding: 0 0.5em;
  border-radius: 0.3em;
  color: #fff;
  height: 3em;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
      0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0;
    transform: translateY(-0.1em);
  }

  &:active {
    box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
    transform: translateY(0em);
  }
`;
