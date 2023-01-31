import { useEffect } from "react";
import { Rectangle } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { getDataFetch } from "../app/redux/actions";
import { RootState } from "../app/redux/store";

export const Data = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFetch());
  }, []);

  const data = useSelector((state: RootState) => state.data);
  const {left, top, right, bottom} = data.coordinates_bounding_box;

  return (
    <>
      <Rectangle
        bounds={[
          [left, top],
          [right, bottom],
        ]}
      />
    </>
  );
};
