import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  render() {
    const { danhSachGhe } = this.props;
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
          {danhSachGhe.map((danhSachGhe, index) => {
            let hangGheDau = index == 0 ? "hangGheDau" : "ghe";
            return (
              <div key={index} className="d-flex align-items-center flex-row">
                <div className="hangGheDau">{danhSachGhe.hang}</div>
                <div className="d-flex flex-row ">
                  {danhSachGhe.danhSachGhe.map((danhSachGhe, index) => {
                    return (
                      <div
                        key={index}
                        className={hangGheDau}
                        onClick={() => console.log("gheDat")}
                      >
                        {danhSachGhe.soGhe}
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
  };
};
export default connect(mapStateToProps, null)(DanhSachGhe);
