import styled from "styled-components";
import { typography } from "styled-system";

const BaseH1 = styled.h1`
  ${typography};
`;

export const Header = styled(BaseH1)`
  font-size: ${({ theme }) => theme.fontSize["extra-large"]};
  font-weight: 800;
`;

export const SubHeader = styled(BaseH1)`
  font-size: ${({ theme }) => theme.fontSize.large};

  font-size: 1.2rem;
  color: rgb(51, 51, 51);
  font-weight: 800;
  padding: 0.5rem 0;
  padding-bottom: 0;
  font-weight: 800;
`;

export const Subtitle = styled(BaseH1)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding-bottom: 1rem;
  font-weight: 500;
`;

export const Text = styled(BaseH1)`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 300;
`;
