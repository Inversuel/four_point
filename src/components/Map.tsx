import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import {
  MAP_DEFAULT_ZOOM,
  MAP_SOURCE_URL,
  MAP_VENDOR_NAME,
  MAP_VENDOR_URL,
} from "../app/constants";
import { useSelector } from "react-redux";
import { RootState } from "../app/redux/store";

export const Map = () => {
  const { left, top, right, bottom } = useSelector(
    (state: RootState) => state.data.coordinates_bounding_box
  );

  const xc = (left + right) / 2;
  const yc = (top + bottom) / 2;

  // bottom
  // :
  // 52.007250267011806
  // left
  // :
  // 18.598005648833407
  // right
  // :
  // 18.60799421388831
  // top
  // :
  // 52.01169407130751
  return (
    <>
      <StyledMapContainer
        center={[xc, yc]}
        zoom={MAP_DEFAULT_ZOOM}
        scrollWheelZoom={true}
      >
        <TileLayer
          url={MAP_SOURCE_URL}
          attribution={`&copy; '<a href=${MAP_VENDOR_URL}>${MAP_VENDOR_NAME}</a>'`}
        />
        <Outlet />
      </StyledMapContainer>
    </>
  );
};

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;
