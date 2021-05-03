import styled from "styled-components";
import { layout, flexbox } from "styled-system";

const BaseFlexContainer = styled.div`
  box-sizing: border-box;
  appearance: none;
  ${flexbox};
  ${layout};
`;

export const Box = styled(BaseFlexContainer)`
  border-radius: 0.2rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: 100%;
  padding: 1rem;
`;

// flex-direction: ${({ direction }) =>
//   direction === "col" ? "column" : "row"};
// justify-content: ${({ direction, vSpacing, hSpacing }) =>
//   direction === "col" ? vSpacing : hSpacing};
// align-items: ${({ direction, hSpacing, vSpacing }) =>
//   direction === "col" ? hSpacing : vSpacing};
