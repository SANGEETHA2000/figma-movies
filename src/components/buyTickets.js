import React from 'react';
import homeBackground from '../assets/home_background.png';
import buyTickets1 from '../assets/buyTickets/image 1.png';
import vector from '../assets/buyTickets/Vector.png';
import pageNumber from '../assets/buyTickets/Group 16.png';
import exchange from '../assets/buyTickets/exchange 1.png';
import arrow2 from '../assets/buyTickets/Arrow 1.png';
import arrow1 from '../assets/buyTickets/Arrow 2.png';

const BuyTickets = () => {
    return (
        <div className='flex flex-col border justify-between relative' style={{ backgroundColor:'#0D0D0F', backgroundImage: `url(${homeBackground})`, height: '852px', width: '393px', fontFamily: "Inter" }}>
            <div className='flex flex-col gap-5 p-6'>
                <div className='flex flex-row gap-16 items-center'>
                    <div className='h-9 w-9 rounded-xl flex items-center justify-center bg-white'>
                        <img src={vector} alt='back'/>
                    </div>
                    <img src={pageNumber} alt='pageno' className='h-7 w-36'/>
                </div>
                <img src={buyTickets1} alt="buyTickets1" className='rounded-xl'/>
                <div className='absolute flex flex-row justify-between items-center p-2 rounded-b-xl' style={{ top: '245px', backgroundColor: 'rgba(0, 0, 0, 0.75)', width: '343px' }}>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-xl text-white'>Kung Fu Panda 4</span>
                        <span className='text-white font-extralight text-xs'>DreamWorks Animation</span>
                    </div>
                    <img src={exchange} alt="exchange" className='rounded-xl h-5 w-5'/>
                </div>
                <span className='text-white font-extralight pb-4' style={{ fontSize: '13px' }}>You need to select the mandatory fields (*) to proceed to the checkout page.</span>
                <button className='rounded-xl bg-transparent border-4 flex flex-row justify-between items-center pl-12 pr-6' style={{ borderColor: 'rgba(108, 71, 219)', height : '65px', width: '351px', color:'rgba(108, 71, 219)' }}>
                    <span className='text-sm font-semibold'>Choose a Movie Theatre *</span>
                    <img src={arrow1} alt="arrow1"/>
                </button>
                <button className='rounded-xl bg-transparent border-4 flex flex-row justify-between items-center pl-12 pr-6' style={{ borderColor: 'rgba(108, 71, 219)', height : '65px', width: '351px', color:'rgba(108, 71, 219)' }}>
                    <span className='text-sm font-semibold'>Select Session *</span>
                    <img src={arrow1} alt="arrow1"/>
                </button>
                <button className='rounded-xl bg-transparent border-4 flex flex-row justify-between items-center pl-12 pr-6' style={{ borderColor: 'rgba(108, 71, 219)', height : '65px', width: '351px', color:'rgba(108, 71, 219)' }}>
                    <span className='text-sm font-semibold'>Buffet Products</span>
                    <img src={arrow1} alt="arrow1"/>
                </button>
            </div>
            <div className='h-24 bg-black items-center justify-center flex'>
                <button className='rounded-xl bg-transparent flex flex-row items-center pl-12 pr-6 gap-32 justify-end' style={{ backgroundColor: 'rgba(108, 71, 219, 0.25)', height : '57px', width: '351px', color:'white' }}>
                    <span className='font-semibold opacity-30 text-lg'>Next</span>
                    <img src={arrow2} alt="arrow2"/>
                </button>
            </div>
        </div>
    )
}

export default BuyTickets;