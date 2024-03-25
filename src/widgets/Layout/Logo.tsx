import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { LogoIcon } from "../../components/Svg";
import { LogoIcon as LogoWithText } from "./icons";

interface Props {
  href: string;
  isFooter?: boolean;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledWrapLogo = styled.div<{ isFooter: boolean | undefined; }>`
    display: flex;
    flex-direction: ${({ isFooter }) => (isFooter ? 'column' : 'row')};
    gap: 8px;
    align-items: center;
    ${({ theme }) => theme.mediaQueries.sm} {
      flex-direction: row;
    }
`;

const Logo: React.FC<Props> = ({ href, isFooter }) => {
  const isAbsoluteUrl = href.startsWith("http");
  // const innerLogo = <LogoIcon width={isFooter ? 171 : 92} />;

  const innerLogo = (
    <StyledWrapLogo isFooter={isFooter} >
      <LogoIcon width={isFooter ? 82 : 35} />
      <LogoWithText  />
    </StyledWrapLogo>
  );

  return (
    <>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Sparkswap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Sparkswap home page">
          {innerLogo}
        </StyledLink>
      )}
    </>
  );
};

Logo.defaultProps = {
  isFooter: false,
};

export default Logo;
