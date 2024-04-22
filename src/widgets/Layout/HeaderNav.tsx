import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { NavHeaderEntry } from "./NavHeaderEntry";
import HeaderNavAccordion from "./HeaderNavAccordion";
import MenuLink from "./MenuLink";

import { HeaderNavProps, NavEntry } from "./types";

interface Props extends HeaderNavProps {
  handleOpenAccordion: (close?: boolean) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const HeaderNav: React.FC<Props> = ({ links, handleOpenAccordion }) => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleClick = useCallback(
    (index: number, fromAccordion?: boolean) => {
      setOpenAccordionIndex(openAccordionIndex === index ? null : index);
      if (!fromAccordion) {
        setOpenAccordionIndex(null);
        handleOpenAccordion(true);
      } else {
        handleOpenAccordion(openAccordionIndex === index);
      }
    },
    [handleOpenAccordion, openAccordionIndex]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && event.target && !ref.current.contains(event.target as Node)) {
        setOpenAccordionIndex(null);
        handleOpenAccordion(true);
      }
    },
    [ref, setOpenAccordionIndex, handleOpenAccordion]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  const isLinkActive = useCallback(
    (href: string) => {
      return location.pathname === href || (href !== "/" && !!href && location.pathname.startsWith(href));
    },
    [location.pathname]
  );

  const isParentActive = useCallback(
    (entry: NavEntry) => {
      if (!entry.items) return false;
      return entry.items.some((item) => isLinkActive(item.href));
    },
    [isLinkActive]
  );

  return (
    <Container>
      {links.map((entry, index) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <div ref={ref} key={entry.label}>
              <HeaderNavAccordion
                isOpen={openAccordionIndex === index}
                isActive={isParentActive(entry)}
                handleClick={() => handleClick(index, true)}
                key={entry.label}
                label={entry.label}
                className={calloutClass}
              >
                {entry.items.map((item) => (
                  <NavHeaderEntry
                    isInAccordion
                    key={item.label}
                    secondary
                    isActive={isLinkActive(item.href)}
                    onClick={() => handleClick(index)}
                  >
                    {item.openTab ? (
                      <MenuLink target="_blank" href={item.href}>
                        {item.label}
                      </MenuLink>
                    ) : (
                      <MenuLink href={item.href}>{item.label}</MenuLink>
                    )}
                  </NavHeaderEntry>
                ))}
              </HeaderNavAccordion>
            </div>
          );
        }
        return (
          <NavHeaderEntry
            key={entry.label}
            isActive={!!entry.href && isLinkActive(entry.href)}
            className={calloutClass}
          >
            {entry.openTab ? (
              <MenuLink target="_blank" href={entry.href} onClick={() => handleClick(index)}>
                {entry.label}
              </MenuLink>
            ) : (
              <MenuLink href={entry.href} onClick={() => handleClick(index)}>
                {entry.label}
              </MenuLink>
            )}
          </NavHeaderEntry>
        );
      })}
    </Container>
  );
};

export default HeaderNav;
