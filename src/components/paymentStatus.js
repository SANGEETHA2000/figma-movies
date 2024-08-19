import React from 'react';
import pageNumber from '../assets/paymentStatus/Group 16.png';
import success from '../assets/paymentStatus/checked 1.png';
import paymentBg from '../assets/paymentStatus/Group 12.png';
import check from '../assets/paymentStatus/check 3.png';

const TicketDetails = () => {
    return (
        <div className='flex flex-col p-6 text-white relative justify-between items-center' style={{ backgroundImage: 'linear-gradient(#0D0D0F, #110F15, #1D172E, #1E1731)', height: '852px', width: '393px', fontFamily: "Inter" }}>
            <div>
                <img src={pageNumber} alt='pageNumber'/>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <img src={success} alt='success'/>
                <span className='text-2xl'>Payment Successful</span>
                <span className='text-xs text-center px-5'>We have sent a copy of your ticket to your e-mail address. You can check your ticket in the My Tickets section on the homepage.</span>
            </div>
            <div className='items-center justify-center flex flex-col gap-4 pb-14'>
                <button className='rounded-xl flex flex-row items-center pl-12 pr-6 gap-32 justify-center' style={{ backgroundColor: 'rgba(67, 46, 137)', height : '45px', width: '351px', color:'white' }}>
                    <span>View Ticket</span>
                </button>
                <button className='rounded-xl flex flex-row items-center pl-12 pr-6 gap-32 justify-center' style={{ backgroundColor: 'rgba(16, 12, 27)', height : '45px', width: '351px', color:'white' }}>
                    <span>Back to Home</span>
                </button>
            </div>
            <img src={paymentBg} alt="paymentBg" className='absolute top-0 left-0'/>
            <img src={check} alt="check" className='absolute top-8' style={{ left: '132px' }}/>
            <img src={check} alt="check" className='absolute top-8' style={{ left: '172px' }}/>
            <img src={check} alt="check" className='absolute top-8' style={{ left: '212px' }}/>
        </div>
    )
}

export default TicketDetails;