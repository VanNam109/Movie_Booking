import React from 'react';
import logo from './logo.svg';
import './App.css';
import DanhSachGhe from './component/DanhSachGhe';
import DatGhe from './component/DatGhe';
import './assets/styles/BaiTapBookingTicket.css';
function App() {
  return (
    <div className="movieBackground">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 mx-auto">
            <DanhSachGhe />
          </div>
          <div className="col-5">
            <DatGhe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
