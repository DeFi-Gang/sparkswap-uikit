import React, { FC, memo } from "react";
import styled from "styled-components";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import { Link } from "../../components/Link";
import { LinkIcon } from "./icons";
import Logo from "./Logo";

import { FOOTER_HEIGHT, FOOTER_HEIGHT_MOBILE } from "./config";
import { FooterLinks } from "./types";

const StyledFooter = styled.footer`
  width: 100%;
  border-top: 1px solid;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-top-color: ${({ theme }) => theme.colors.card};
  background: ${({ theme }) => theme.colors.gradients.main};
  height: ${FOOTER_HEIGHT_MOBILE}px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: ${FOOTER_HEIGHT}px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 15px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 30px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialLinksWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    align-items: flex-end;
  }
`;

const Rights = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

interface Props extends FooterLinks {
  logoLink: string;
}
const Footer: FC<Props> = ({ socialLinks, logoLink, docs }) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <Container>
        <Logo href={logoLink} isFooter />
        <RightBlock>
          <SocialLinksWrap>
            {socialLinks.map((social) => {
              const Icon = Icons[social.icon];
              const iconProps = { width: "32px", color: "textSubtle", style: { cursor: "pointer" } };

              return (
                <Link external key={social.label} href={social.href} aria-label={social.label}>
                  <Icon {...iconProps} />
                </Link>
              );
            })}
          </SocialLinksWrap>
          <SocialLinksWrap>
            {docs.map((doc) => {
              return (
                <Link external key={doc.title} href={doc.href} style={{ display: "flex", gap: "4px" }}>
                  {doc.title} <LinkIcon />
                </Link>
              );
            })}
          </SocialLinksWrap>
          <Rights> © {currentYear} SparkSwap. All rights reserved.</Rights>
        </RightBlock>
      </Container>
    </StyledFooter>
  );
};

export default memo(Footer);
