import React, { Component } from "react";
import { connect } from "react-redux";
import * as movieAction from "../../redux/Actions/MovieAction";
class DanhSachGhe extends Component {
  render() {
    const { danhSachGhe, chonGhe } = this.props;
    console.log(danhSachGhe);
    return (
      <div>
        <div className="bookingMovie__heading--large">
          Đặt vé xem phim cyberlearn.vn
        </div>
        <div className="text-white text-center font-weight-bold">Màn hình</div>
        <div className="screen"></div>
        <div>Màn hình</div>
        <div className="d-flex align-items-center text-center flex-column">
          {danhSachGhe?.map((danhSachGhe, index) => {
            let gheHangDau = index == 0 ? "hangGheDau" : "ghe";
            return (
              <div key={index} className="d-flex align-items-center flex-row">
                <div className="firstChar">{danhSachGhe.hang}</div>
                <div className="d-flex flex-row  ">
                  {danhSachGhe?.danhSachGhe.map((ghe, i) => {
                    let gheDat = ghe.daDat;
                    let indexGhe = chonGhe.findIndex(
                      (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
                    );
                    let classGheDangDat = indexGhe !== -1 ? "gheDangChon" : "";
                    return gheDat ? (
                      <div key={i} className={`${gheHangDau} gheDuocChon`}>
                        {ghe.soGhe}
                      </div>
                    ) : (
                      <div
                        key={i}
                        className={`${gheHangDau} ${classGheDangDat}`}
                        onClick={() => this.props.chonGheNgoi(ghe)}
                      >
                        {ghe.soGhe}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.MovieReducer.danhSachGhe,
    chonGhe: state.MovieReducer.chonGhe,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    chonGheNgoi: (ghe) => {
      dispatch(movieAction.chonGhe(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);
