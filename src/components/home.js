import React from 'react';
import homeBackground from '../assets/home_background.png';
import profileIcon from '../assets/home/ben-sweet-2LowviVHZ-E-unsplash 1.png';
import notificationIcon from '../assets/home/notification 1.png';
import homeImg1 from '../assets/home/image 1.png';
import homeImg2 from '../assets/home/image 3.png';
import homeImg3 from '../assets/home/image 3-1.png';
import homeImg4 from '../assets/home/image 3-2.png';
import homeImg5 from '../assets/home/image 3-3.png';
import homeImg6 from '../assets/home/image 3-4.png';
import homeImg7 from '../assets/home/image 3-5.png';
import ellipse from '../assets/home/Ellipse 4.png'
import { useNavigate } from 'react-router-dom';
import heart from '../assets/home/heart 1.png';
import home from '../assets/home/Vector.png';
import ticket from '../assets/home/Group 28.png';

const Home = () => {
    const navigate = useNavigate();
    const onMovieClicked = () => {
        navigate('/movie-details')
    }

    return (
        <div className='flex flex-col border p-6 gap-10 relative' style={{ backgroundColor:'#0D0D0F', backgroundImage: `url(${homeBackground})`, height: '852px', width: '393px', fontFamily: "Inter" }}>
            <div className='flex flex-row justify-between items-center'>
                <img src={profileIcon} alt="profileIcon" className='h-12 w-12 rounded-full'/>
                <div className='flex flex-col text-white font-medium border-y-2 border-y-white px-2' style={{ fontSize: '14px' }}>
                    <span>FIGMA</span>
                    <span>MOVIE</span>
                </div>
                <div className='h-12 w-12 rounded-full border flex items-center justify-center' style={{ borderColor: "#4D3399" }}>
                    <img src={notificationIcon} alt="notificationIcon" className='h-6 w-6 rounded-full'/>
                </div>
                <img src={ellipse} alt="ellipse" className='rounded-full absolute' style={{ top: '30px', right: '23px' }}/>                
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-1 items-center'>
                    <img src={ellipse} alt="ellipse" className='rounded-full h-2 w-2'/>
                    <span className='text-white'>Highlights</span>
                </div>
                <button onClick={onMovieClicked}>
                    <img src={homeImg1} alt="homeImg1" className='rounded-xl relative'/>
                    <span className='left-8 absolute font-semibold text-xl text-white' style={{ bottom: '545px' }}>Kung Fu Panda 4</span>
                </button>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-1 items-center'>
                        <img src={ellipse} alt="ellipse" className='rounded-full h-2 w-2'/>
                        <span className='text-white'>New Movies In Theatres</span>
                    </div>
                    <span className='underline' style={{ color: '#4D3399', fontSize: "11.51px"}}>See All</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <img src={homeImg2} alt="homeImg2" className='rounded-xl'/>
                    <img src={homeImg3} alt="homeImg3" className='rounded-xl'/>
                    <img src={homeImg4} alt="homeImg4" className='rounded-l-xl'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-1 items-center'>
                        <img src={ellipse} alt="ellipse" className='rounded-full h-2 w-2'/>
                        <span className='text-white'>Coming Soon</span>
                    </div>
                    <span className='underline' style={{ color: '#4D3399', fontSize: "11.51px"}}>See All</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <img src={homeImg5} alt="homeImg5" className='rounded-xl'/>
                    <img src={homeImg6} alt="homeImg6" className='rounded-xl'/>
                    <img src={homeImg7} alt="homeImg7" className='rounded-l-xl'/>
                </div>
            </div>
            <div className='h-20 w-full items-center justify-between px-16 flex z-20 absolute bottom-0 left-0 rounded-t-full' style={{ backgroundColor: 'rgba(0,0,0,0.9)'}}>
                <img src={heart} alt="heart" className=''/>
                <img src={home} alt="home" className=''/>
                <img src={ticket} alt="ticket" className=''/>
            </div>
        </div>
    )
}

export default Home;