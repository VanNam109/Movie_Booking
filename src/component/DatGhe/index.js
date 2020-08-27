import React, { Component } from "react";
import { connect } from "react-redux";
import * as MovieAction from "../../redux/Actions/MovieAction";

class DatGhe extends Component {
  renderGheDaDat = () => {
    let { danhSachChonGhe, huyGhe } = this.props;
    return danhSachChonGhe?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia}</td>
          <td>
            <button className="btn btn-danger" onClick={() => huyGhe(item)}>
              Hủy
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.danhSachChonGhe);
    return (
      <div>
        <div className="bookingMovie__heading--mid">Danh sách ghế bạn chọn</div>
        <div>
          <div className="d-flex align-items-center text-light mb-2">
            <div className="gheDuocChon mr-2" />
            <span>ghế đã đặt</span>
          </div>
          <div className="d-flex align-items-center text-light mb-2">
            <div className="gheDangChon mr-2" />
            <span>ghế đang chọn</span>
          </div>
          <div className="d-flex align-items-center text-light mb-2">
            <div className="gheChuaChon mr-2" />
            <span>ghế chưa đặt</span>
          </div>
        </div>
        <table className="table table-bordered text-light">
          <thead>
            <tr className="text-center">
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
            {this.renderGheDaDat()}
          </thead>
          <tbody>
            <tr className="text-right">
              <td></td>
              <td></td>
              <td>
                <p>
                  Tổng Tiền :
                  {this.props.danhSachChonGhe.reduce((tongTien, ghe) => {
                    return (tongTien += ghe.gia);
                  }, 0)}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachChonGhe: state.MovieReducer.chonGhe,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (gheDaDat) => {
      dispatch(MovieAction.huyGhe(gheDaDat));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DatGhe);
