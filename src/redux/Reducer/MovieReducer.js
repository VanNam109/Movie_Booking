import danhSachGheData from "../../data/danhSachGhe.json";
import * as MovieConstant from '../Constant/MovieConstant'

const movieState = {
  danhSachGhe: danhSachGheData,
};
export default (state = movieState, action) => {
  switch (action.type) {
    case MovieConstant.DAT_GHE_XEM_PHIM: {

    }
  }
  return { ...state };
};
