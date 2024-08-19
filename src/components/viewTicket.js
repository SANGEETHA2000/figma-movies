import React from 'react';
import qrCode from '../assets/viewTicket/qr-code.png';
import ticketDetails from '../assets/viewTicket/Group 68.png';
import qrShade from '../assets/viewTicket/Rectangle 89.png';
import { useNavigate } from 'react-router-dom';

const ViewTicket = () => {
    const navigate = useNavigate();
    const onHomeClicked = () => {
        navigate('/home')
    }
    return (
        <div className='flex flex-col p-6 text-white relative justify-between items-center' style={{ backgroundImage: 'linear-gradient(#0D0D0F, #110F15, #1D172E, #1E1731)', height: '852px', width: '393px', fontFamily: "Inter" }}>
            <span>My Ticket</span>
            <div className='flex flex-col items-center justify-center gap-2'>
                <img src={qrCode} alt='qrCode'/>
                <span className='text-xs text-center px-5'>You can start enjoying the movie by scanning your ticket to the theater and canteen staff.</span>
            </div>
            <img src={ticketDetails} alt='ticketDetails'/>
            <button className='rounded-xl flex flex-row items-center justify-center mb-16' style={{ backgroundColor: 'rgba(16, 12, 27)', height : '45px', width: '351px', color:'white' }} onClick={onHomeClicked}>
                <span>Back to Home</span>
            </button>
            <img src={qrShade} alt='qrShade' className='absolute' style={{ top: '225px', left: '35px' }}/>
        </div>
    )
}

export default ViewTicket;