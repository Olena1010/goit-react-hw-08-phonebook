import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding: 20px 10px;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 80vh;
  // margin-top: 10px;
  height: 76vh;
  margin-top: -35px;
  box-shadow: 6px 7px 43px 4px rgba(0, 0, 0, 1);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  /* border: 1px solid rgba(255, 255, 255, 1); */
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Header = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 60px;
  margin-bottom: 55px;
  margin-top: 75px;
`