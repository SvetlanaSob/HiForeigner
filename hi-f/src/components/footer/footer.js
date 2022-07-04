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
        <LinkFooterSC href="https://hinative.helpshift.com/a/hinative/?l=en">Помощь</LinkFooterSC>
        <LinkFooterSC href="https://support-en.hinative.com/privacy?_gl=1*1dszsk2*_ga*MTkwMTU4MzcyNi4xNjUyMjU2MTc0*_ga_JS61JLF900*MTY1Njk3MTUxMC45LjEuMTY1Njk3MTUyMi4w&_ga=2.68467160.855184401.1656971511-1901583726.1652256174">Политика безопасности</LinkFooterSC>
        <LinkFooterSC href="https://support-en.hinative.com/termsofuse?_gl=1*1k9wkaf*_ga*MTkwMTU4MzcyNi4xNjUyMjU2MTc0*_ga_JS61JLF900*MTY1Njk3MTUxMC45LjEuMTY1Njk3MTYyNy4w&_ga=2.68467160.855184401.1656971511-1901583726.1652256174">Условия пользования</LinkFooterSC>
        <LinkFooterSC href="https://lang-8.jp/en/">Компания</LinkFooterSC>
      </DivLinksSC>
      <DivCreditSC>© 2022 SobCompany, Inc. All rights reserved.</DivCreditSC>
    </DivFooterWrapCS>
  );
};

export default Footer;
