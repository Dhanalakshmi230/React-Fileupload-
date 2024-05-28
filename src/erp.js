import React from 'react';
import './erp.css'
import TableComponent from './DataTable';
import Dashboard from './Dashboard';

export default function Erp() {
  return (
      <div>
        <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#"><b className='intech'>Intech ERP</b></a>
</nav>
          <div className='row'>
              <div className='col-lg-2 bg-light'>
                  <div className='d-flex  justify-content-between'>
                      <span className='imgBack mx-auto'>
                      <img src='https://play-lh.googleusercontent.com/bTjUXfgtmtC0G1xuKUAAlKoGQQAjlRc9it2rrOFakxLlNTdx16nbpMcR9VHNSSmoOw=w526-h296-rw' height={'55px'} style={{borderRadius:'50%'}} />
                          
                      </span>
                      <div >
                      <span className=''>R.Natchathra</span>
                      <p>OE,123</p>
                      </div>
                  </div>
                  <div className='border-bottom'>
                      <p className='m-3'><b>Address Book</b></p>
                  </div>
                  <div className='border-bottom'>
                      <p className='m-3'><b>Price & stock</b></p>
                  </div>
                  <div className='border-bottom'>
                      <p className='m-3'><b>Qtn Reports</b></p>
                  </div>
                  <div className='border-bottom'>
                      <p className='m-3'><b>DRS</b></p>
                  </div>
                  <div className='border-bottom'>
                      <p className='m-3'><b>Address Book App</b><span>0</span></p>
                  </div>
                  <div className='m-1'>
                      <p className='text-primary'><b>MID value(L)</b></p>
                      <table className='table table-bordered'>
                          <tr>
                              <th>Received</th>
                              <th>Dropped</th>
                              <th>Lost</th>
                          </tr>
                          <tr>
                              <th>0</th>
                              <th>2.38</th>
                              <th>0</th>
                          </tr>
                      </table>
                  </div>
                  <div className='m-3'>
                      <p className='text-primary'><b>Qtn Pending-Perpetual</b></p>
                      <table className='table table-bordered'>
                          <tr>
                              <th>Qty</th>
                              <th>Value(L)</th>
                          </tr>
                          <tr>
                              <th>89</th>
                              <th>136.72(L)</th>
                          </tr>
                      </table>
                  </div>
                  <div className='m-3'>
                      <p className='text-primary'><b> SO Pending-Perpetual</b></p>
                      <table className='table table-bordered'>
                      <tr>
                              <th>Qty</th>
                              <th>Value(L)</th>
                          </tr>
                          <tr>
                              <th>0</th>
                              <th>0</th>
                          </tr>
                      </table>
                  </div>
                  <div className='m-3'>
                      <p className='text-primary'><b>PO Expected-value(L)</b></p>
                      <table className='table table-bordered'>
                      <tr>
                              <th>Qty</th>
                              <th>Value(L)</th>
                          </tr>
                          <tr>
                              <th>47</th>
                              <th>40.91</th>
                          </tr>
                      </table>
                  </div>
              </div>
              <div className='col-lg-10 '>
                  <Dashboard/>
              </div>
      </div>
    </div>
  )
}
