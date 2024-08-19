import React from 'react';
import vector from '../assets/ticketDetails/Vector.png';
import pageNumber from '../assets/ticketDetails/Group 16.png';
import arrow1 from '../assets/ticketDetails/Arrow 1.png';
import screen from '../assets/ticketDetails/Group 29.png';
import ellipse from '../assets/ticketDetails/Ellipse 4.png';
import plus from '../assets/ticketDetails/Group 38.png';
import minus from '../assets/ticketDetails/Group 39.png';
import check from '../assets/ticketDetails/check 3.png';
import { useNavigate } from 'react-router-dom';

const TicketDetails = () => {

    const navigate = useNavigate();
    const onPaymentClicked = () => {
        navigate('/payment-status')
    }
    const onBackClicked = () => {
        navigate('/buy-tickets')
    }

    return (
        <div className='flex relative' style={{ backgroundImage: 'linear-gradient(#0D0D0F, #110F15, #1D172E)', height: '852px', width: '393px', fontFamily: "Inter" }}>
            <div className='flex flex-col p-6 text-white z-10'>
                <div className='flex flex-row gap-16 items-center pb-6'>
                    <button className='h-9 w-9 rounded-xl flex items-center justify-center bg-white' onClick={onBackClicked}>
                        <img src={vector} alt='back'/>
                    </button>
                    <img src={pageNumber} alt='pageno' className='h-7 w-36'/>
                </div>
                <img src={screen} alt='screen' className='pb-8'/>
                <div className='grid grid-cols-12 gap-2 pb-8'>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='col-start-11' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-12' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-11' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-12' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#C66E1D" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#C66E1D" }}></button>
                    <button className='col-start-11' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-12' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-11' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='col-start-12' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                </div>
                <div className='grid grid-cols-12 gap-2 pb-8'>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-11' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-12' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-11' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-12' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-11' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='col-start-12' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "#6C47DB" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-11' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                    <button className='col-start-12' style={{ width: '25px', height: '25px', borderRadius: '5px', backgroundColor: "rgba(255, 255, 255, 0.53)" }}></button>
                </div>
                <div className='flex flex-row gap-1 items-center'>
                    <img src={ellipse} alt="ellipse" className='rounded-full h-2 w-2'/>
                    <span>Ticket Details</span>
                </div>
                <div className='flex flex-row bg-black px-4 rounded-xl'>
                    <div className='flex flex-row items-center justify-between w-1/2 pr-4 py-3'>
                        <img src={plus} alt='plus'/>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-xl font-medium'>2</span>
                            <span className='' style={{ fontSize: '10px' }}>ADULT</span>
                        </div>
                        <img src={minus} alt='minus'/>
                    </div>
                    <div className='h-full opacity-75' style={{ backgroundColor: 'white', width: '1px'}}></div>
                    <div className='flex flex-row items-center justify-between w-1/2 pl-4 py-3'>
                        <img src={plus} alt='plus'/>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-xl font-medium'>0</span>
                            <span style={{ fontSize: '10px' }}>CHILD</span>
                        </div>
                        <img src={minus} alt='minus'/>
                    </div>
                </div>
                <div className='flex flex-row bg-black mt-3 rounded-xl'>
                    <div className='flex flex-col gap-2 p-6' style={{ width: '65%' }}>
                        <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.37)' }}>Movie: Kung Fu Panda 4</span>
                        <span className="pb-1" style={{ fontSize: '10px' }}>Ticket Count: 2 Adult <span style={{ color: '#33B528' }}>( $40 )</span></span>
                        <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.37)' }}>Session: 20.30 pm - 22.00pm</span>
                        <span className="pb-1" style={{ fontSize: '10px' }}>Seat Number: C3, C4</span>
                        <span className="pb-1" style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.37)' }}>Buffet Products: None ( $0 )</span>
                        <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.37)' }}>Movie Theatre: Cinema Village</span>
                    </div>
                    <div className='h-full opacity-75' style={{ backgroundColor: 'white', width: '1px'}}></div>
                    <div className='flex flex-col items-center p-6 gap-10' style={{ width: '35%' }}>
                        <span style={{ fontSize: '10px' }} className='underline'>Total amount</span>
                        <span style={{ color: '#33B528' }} className='font-semibold text-4xl'>$40</span>
                    </div>
                </div>
            </div>
            <div className='h-28 bg-black items-center justify-center flex z-20 px-5 py-8 absolute bottom-0 left-0'>
                <button className='rounded-xl bg-transparent flex flex-row items-center pl-12 pr-6 gap-20 justify-end' style={{ backgroundColor: 'rgba(108, 71, 219)', height : '57px', width: '351px', color:'white' }} onClick={onPaymentClicked}>
                    <span className='font-semibold text-lg'>Payment Options</span>
                    <img src={arrow1} alt="arrow1"/>
                </button>
            </div>
            <img src={check} alt="check" className='absolute top-9 z-30' style={{ left: '132px' }}/>
        </div>
    )
    
}

export default TicketDetails;