import danhSachGheData from "../../data/danhSachGhe.json";
import * as movieConstant from "../Constant/MovieConstant";

const movieState = {
  danhSachGhe: danhSachGheData,
  chonGhe: [],
};
export default (state = movieState, action) => {
  switch (action.type) {
    case movieConstant.DAT_GHE_XEM_PHIM: {
      let capNhatChonGhe = [...state.chonGhe];
      let { ghe } = action;
      let index = capNhatChonGhe.findIndex(
        (chonMucGhe) => chonMucGhe.soGhe === ghe.soGhe
      );
      if (index !== -1) {
        alert("ghế đã đặt");
      } else {
        capNhatChonGhe.push(ghe);
      }
      state.chonGhe = capNhatChonGhe;
      console.log(state.chonGhe);
      return { ...state };
    }
    case movieConstant.HUY_GHE_XEM_PHIM: {
      let capNhatChonGhe = [...state.chonGhe];
      let { datGhe } = action;
      let index = capNhatChonGhe.findIndex(
        (mucGheDaDat) => mucGheDaDat.soGhe === datGhe.soGhe
      );
      if (index !== -1) {
        capNhatChonGhe.splice(index, 1);
      }
      state.chonGhe = capNhatChonGhe;
      console.log(capNhatChonGhe);
    }
  }
  return { ...state, ...state.chosenChairList };
};
