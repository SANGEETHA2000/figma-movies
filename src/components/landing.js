import React from 'react';
import loginBackground from '../assets/login_background.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const onSignInClicked = () => {
        navigate('/sign-in')
    }
    
    return (
        <div className='flex flex-col border' style={{ backgroundImage: `url(${loginBackground})`, height: '852px', width: '393px', fontFamily: "Inter" }}>
            <div className='flex items-end justify-center pb-11' style={{ height: '72%' }}>
                <div className='flex flex-col text-white font-medium border-y-2 border-y-white px-2' style={{ fontSize: '27.52px' }}>
                    <span>FIGMA</span>
                    <span>MOVIE</span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 pb-8' style={{ backgroundColor: 'rgba(49, 33, 99, 0.2)', height: '28%' }}>
                <button className='rounded-xl' style={{ backgroundColor: 'rgba(108, 71, 219, 0.4)', height : '57px', width: '351px', color:'white' }} onClick={onSignInClicked}>
                    <span className='text-xl'>Sign In</span>
                </button>
                <div className='flex flex-row opacity-40'>
                    <div className='flex self-center' style={{ backgroundColor: 'white', height: '1px', width: '135px'}}></div>
                    <span class="mx-2" style={{ lineHeight: "20px", fontSize: "15px", color: "white" }}>or</span>
                    <div className='flex self-center' style={{ backgroundColor: 'white', height: '1px', width: '135px'}}></div>
                </div>
                <button className='rounded-xl' style={{ backgroundColor: 'rgba(108, 71, 219, 0.4)', height : '57px', width: '351px', color:'white' }} onClick={onSignInClicked}>
                    <span className='text-xl'>Sign Up</span>
                </button>
            </div>        
        </div>
    )
}

export default Landing;