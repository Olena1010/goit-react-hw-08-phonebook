import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding: 10px 10px;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  height: 70vh;
  margin-top: 10px;
  box-shadow: 6px 7px 43px 4px rgba(0, 0, 0, 1);
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    320deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 18, 246, 1) 100%
  );
  background: -webkit-linear-gradient(
    320deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 18, 246, 1) 100%
  );
  background: linear-gradient(
    320deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 18, 246, 1) 100%
  );
  & h1 {
    margin-bottom: 20px;
  }
`;

export const InfoWrapper = styled.div`
text-align: left;
width: 100%;
padding: 10px;
`;

export const Info = styled.p`
margin: 0;
margin-top: 10px;
`