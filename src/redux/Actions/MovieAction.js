import * as movieConstant from "../Constant/MovieConstant";
export function chonGhe(ghe) {
  return {
    type: movieConstant.DAT_GHE_XEM_PHIM,
    ghe,
  };
}
export function huyGhe (datGhe){
  return {
    type : movieConstant.HUY_GHE_XEM_PHIM,
    datGhe,
  }
}
