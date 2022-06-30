import React from "react";
import {
  DivCreditSC,
  DivFooterShadowCS,
  DivFooterWrapCS,
  DivLinksSC,
  LinkFooterSC,
} from "../../styles/footer.styles";

const Footer = () => {
  return (
    <DivFooterWrapCS>
      <DivFooterShadowCS />
      <DivLinksSC>
        <LinkFooterSC to="/">Помощь</LinkFooterSC>
        <LinkFooterSC to="/">Политика безопасности</LinkFooterSC>
        <LinkFooterSC to="/">Условия пользования</LinkFooterSC>
        <LinkFooterSC to="/">Компания</LinkFooterSC>
      </DivLinksSC>
      <DivCreditSC>© 2022 SobCompany, Inc. All rights reserved.</DivCreditSC>
    </DivFooterWrapCS>
  );
};

export default Footer;
