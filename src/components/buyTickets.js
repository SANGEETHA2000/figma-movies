import { React, useState } from 'react';
import homeBackground from '../assets/home_background.png';
import buyTickets1 from '../assets/buyTickets/image 1.png';
import vector from '../assets/buyTickets/Vector.png';
import pageNumber from '../assets/buyTickets/Group 16.png';
import exchange from '../assets/buyTickets/exchange 1.png';
import arrow2 from '../assets/buyTickets/Arrow 1.png';
import arrow1 from '../assets/buyTickets/Arrow 2.png';
import { useNavigate } from 'react-router-dom';

const BuyTickets = () => {

    const navigate = useNavigate();
    const onNextClicked = () => {
        const sessionName = sessionOptions.includes(selectedSessionValue) ? selectedSessionValue : '20.30 pm - 22.00pm';
        navigate('/ticket-details', {state : {sessionName: sessionName}})
    }
    const onBackClicked = () => {
        navigate('/movie-details')
    }

    const [isTheatreOpen, setisTheatreOpen] = useState(false);
    const [selectedTheatreValue, setselectedTheatreValue] = useState('Choose a Movie Theatre *');
    const [isSessionOpen, setisSessionOpen] = useState(false);
    const [selectedSessionValue, setselectedSessionValue] = useState('Select Session *');

    const theatreOptions = ['Theatre 1', 'Theatre 2', 'Theatre 3', 'Theatre 4'];
    const sessionOptions = ['Session 1', 'Session 2', 'Session 3', 'Session 4'];

    const toggleTheatreDropdown = () => {
        setisTheatreOpen(!isTheatreOpen);
    };

    const handleTheatreSelect = (option) => {
        setselectedTheatreValue(option);
        setisTheatreOpen(false);
    };

    const toggleSessionDropdown = () => {
        setisSessionOpen(!isSessionOpen);
    };

    const handleSessionSelect = (option) => {
        setselectedSessionValue(option);
        setisSessionOpen(false);
    };

    return (
        <div className='flex flex-col border justify-between relative' style={{ backgroundColor:'#0D0D0F', backgroundImage: `url(${homeBackground})`, height: '852px', width: '393px', fontFamily: "Inter" }}>
            <div className='flex flex-col gap-5 p-6'>
                <div className='flex flex-row gap-16 items-center'>
                    <button className='h-9 w-9 rounded-xl flex items-center justify-center bg-white' onClick={onBackClicked}>
                        <img src={vector} alt='back'/>
                    </button>
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
                <button className='rounded-xl bg-transparent border-4 flex flex-row justify-between items-center pl-12 pr-6' style={{ borderColor: 'rgba(108, 71, 219)', height : '65px', width: '351px', color:'rgba(108, 71, 219)' }} onClick={toggleTheatreDropdown}>
                    <span className='text-sm font-semibold'>{selectedTheatreValue}</span>
                    <img src={arrow1} alt="arrow1"/>
                </button>
                {isTheatreOpen && (
                    <ul className="absolute text-white rounded-lg max-h-60 overflow-y-auto z-10"
                        style={{ top: '462px', left: '20px', width: '355px', backgroundColor: 'rgba(108, 71, 219)' }}>
                        {theatreOptions.map((option) => (
                            <li
                                key={option}
                                className="px-4 py-2 cursor-pointer  opacity-70 hover:opacity-100"
                                onClick={() => handleTheatreSelect(option)}
                            >
                            {option}
                            </li>
                        ))}
                    </ul>
                )}
                <button className='rounded-xl bg-transparent border-4 flex flex-row justify-between items-center pl-12 pr-6' style={{ borderColor: 'rgba(108, 71, 219)', height : '65px', width: '351px', color:'rgba(108, 71, 219)' }} onClick={toggleSessionDropdown}>
                    <span className='text-sm font-semibold'>{selectedSessionValue}</span>
                    <img src={arrow1} alt="arrow1"/>
                </button>
                {isSessionOpen && (
                    <ul className="absolute text-white rounded-lg max-h-60 overflow-y-auto z-10"
                        style={{ top: '548px', left: '20px', width: '355px', backgroundColor: 'rgba(108, 71, 219)' }}>
                        {sessionOptions.map((option) => (
                            <li
                                key={option}
                                className="px-4 py-2 cursor-pointer  opacity-70 hover:opacity-100"
                                onClick={() => handleSessionSelect(option)}
                            >
                            {option}
                            </li>
                        ))}
                    </ul>
                )}
                <button className='rounded-xl bg-transparent border-4 flex flex-row justify-between items-center pl-12 pr-6' style={{ borderColor: 'rgba(108, 71, 219)', height : '65px', width: '351px', color:'rgba(108, 71, 219)' }}>
                    <span className='text-sm font-semibold'>Buffet Products</span>
                    <img src={arrow1} alt="arrow1"/>
                </button>
            </div>
            <div className='h-24 bg-black items-center justify-center flex'>
                <button className='rounded-xl bg-transparent flex flex-row items-center pl-12 pr-6 gap-32 justify-end' style={{ backgroundColor: 'rgba(108, 71, 219, 0.25)', height : '57px', width: '351px', color:'white' }} onClick={onNextClicked}>
                    <span className='font-semibold opacity-30 text-lg'>Next</span>
                    <img src={arrow2} alt="arrow2"/>
                </button>
            </div>
        </div>
    )
}

export default BuyTickets;