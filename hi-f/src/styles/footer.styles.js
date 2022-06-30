import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivFooterWrapCS = styled.div`
  //border: 1px solid red;
  display: grid;
  grid-template-rows: 180px auto auto;
  height: 430px;
  width: auto;
  background: black;
`;
export const DivFooterShadowCS = styled.div`
  //border: 1px solid red;
  display: grid;
  height: 0px;
  width: auto;
  box-shadow: 0px -10px 40px 50px black;
`;

export const DivLinksSC = styled.div`
  //border: 1px solid red;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  grid-gap: 100px;
`;

export const LinkFooterSC = styled(Link)`
  text-decoration: none;
  font-family: "Playfair Display";
  font-style: normal;
  font-size: 32px;
  line-height: 30px;
  //border: 1px solid blue;
  height: 30px;

  width: max-content;
  /* identical to box height, or 0px */
  color: #ffffff;
`;
export const DivCreditSC = styled.div`
  //border: 1px solid blue;
  text-decoration: none;
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 0%;
  /* identical to box height, or 0px */
  color: rgba(255, 255, 255, 0.7);
  height: 40px;
  width: auto;
  pointer-events: none;
`;
