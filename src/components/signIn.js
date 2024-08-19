import React from 'react';
import loginBackground from '../assets/login_background.png';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const onSignInClicked = () => {
        navigate('/home')
    }
    
    return (
        <div className='flex flex-col border' style={{ backgroundImage: `url(${loginBackground})`, height: '852px', width: '393px', fontFamily: "Inter" }}>
            <div className='flex justify-center items-end pb-11' style={{ height: '60%' }}>
                <div className='flex flex-col text-white font-medium border-y-2 border-y-white px-2' style={{ fontSize: '27.52px' }}>
                    <span>FIGMA</span>
                    <span>MOVIE</span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 pb-3' style={{ backgroundColor: 'rgba(49, 33, 99, 0.2)', height: '40%' }}>
                <input type="email" placeholder='E-mail' className='rounded-xl px-4 text-xl opacity-80' style={{ height : '57px', width: '351px', color: "rgba(255, 255, 255, 0.27)", backgroundColor: '#282729' }}/>
                <input type="password" placeholder='Password' className='rounded-xl px-4 text-xl opacity-80' style={{ height : '57px', width: '351px', color: "rgba(255, 255, 255, 0.27)", backgroundColor: '#282729' }}/>
                <div className='p-5'>
                    <button className='rounded-xl' style={{ backgroundColor: 'rgba(108, 71, 219, 0.4)', height : '57px', width: '351px', color:'white' }} onClick={onSignInClicked}>
                        <span className='text-xl'>Sign In</span>
                    </button>
                </div>
                <span className='text-white pt-3 text-xs'>Don't you have an account? <span style={{ color: 'rgba(108, 71, 219)' }}>Sign Up</span> Now!</span>
            </div>        
        </div>
    )
}

export default SignIn;