import styled from "styled-components";
import Spinner from "react-spinner-material";
import { DEFAULT_BACKDROP_Z_INDEX } from "../app/constants";
import { theme } from "../app/theme";

export const LoadingSpinner = () => {
  return (
    <Backdrop zIndex={1050}>
      <LoadingWrapper>
        <Spinner
          radius={60}
          color={theme.color.white}
          stroke={4}
          visible
        />
      </LoadingWrapper>
    </Backdrop>
  );
};

const LoadingWrapper = styled.div`
  display: grid;
  place-items: center;
  padding-top: 42px;
`;

export const Backdrop = styled.div<{ zIndex: number }>`
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.blackTransparent40};
  z-index: ${({ zIndex }) => zIndex || DEFAULT_BACKDROP_Z_INDEX};
`;
