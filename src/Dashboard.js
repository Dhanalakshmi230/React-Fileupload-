import React from 'react'
import TableComponent from './DataTable'

export default function Dashboard() {
    return (
        <div className='bg-light'>
            <div className='m-3'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h5 className='text-primary'>Dashboard</h5>
                        <p> <span className='text-primary'>Home &gt;</span><span> Quotation Followup sheet</span> </p>
                    </div>
                    <div className='d-flex gap-2'>
                        <button className='btn btn-secondary  rounded-0'>Pending Enquiry</button>
                        <button className='btn btn-secondary  rounded-0'>Pending Enquiry</button>
                        <button className='btn btn-secondary  rounded-0'>Pending Enquiry</button>
                        <button className='btn btn-secondary rounded-0'>Pending Enquiry</button>
                    </div>

                </div>

                <div className='card'>
                    <div className='d-flex gap-2 m-4 mb-4'>
                        <select className='selection'>
                            <option>Qty</option>
                            <option>Option 1.1</option>
                            <option>Option 1.2</option>
                        </select>

                        <select className='selection'>
                            <option>Select 2</option>
                            <option>Option 2.1</option>
                            <option>Option 2.2</option>
                        </select>

                        <select className='selection'>
                            <option>Select 3</option>
                            <option>Option 3.1</option>
                            <option>Option 3.2</option>
                        </select>

                        <select className='selection'>
                            <option>Select 4</option>
                            <option>Option 4.1</option>
                            <option>Option 4.2</option>
                        </select>
                    </div>
                    <TableComponent />
                </div>
            </div>
        </div>
    )
}
