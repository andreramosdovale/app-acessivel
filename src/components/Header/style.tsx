import styled from "styled-components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  padding: 20px;
  text-align: center;
`;

export { Header };
