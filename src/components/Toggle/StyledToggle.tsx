import styled from "styled-components";

export const Handle = styled.div<{ checked: boolean }>`
  background-color: ${({ theme, checked }) => theme.colors[checked ? "secondaryBright" : "card"]};
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 6px;
  position: absolute;
  top: 6px;
  transition: left 200ms ease-in;
  width: 28px;
  z-index: 1;
  box-shadow: ${({ theme }) => theme.shadows.focus};
`;

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - 34px);
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  position: relative;
  transition: background-color 200ms;
  width: 72px;
`;

export default StyledToggle;
