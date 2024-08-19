import React from 'react';
import movieDetailsBackground from '../assets/movieDetails/image 2.png';
import movieDetailsImage1 from '../assets/movieDetails/image 4.png';
import vector from '../assets/movieDetails/Vector.png';
import favouriteIcon from '../assets/movieDetails/Group 5.png';
import playIcon from '../assets/movieDetails/play.png';
import rating from '../assets/movieDetails/Group 17.png';
import imdb from '../assets/movieDetails/imdb 1.png';
import ellipse from '../assets/movieDetails/Ellipse 4.png';
import movieDetailsImage2 from '../assets/movieDetails/image 1.png';
import movieDetailsImage3 from '../assets/movieDetails/image 1-1.png';
import arrow from '../assets/movieDetails/Arrow 1.png';

const MovieDetails = () => {
    
    return (
        <div className='flex flex-col border relative' style={{ backgroundColor:'#0D0D0F', height: '852px', width: '393px', fontFamily: "Inter" }}>           
            <div className='flex flex-col z-10 px-6 py-8 gap-5'>
                <div className='flex flex-row justify-between'>
                    <div className='h-9 w-9 rounded-xl flex items-center justify-center bg-white'>
                        <img src={vector} alt='back'/>
                    </div>
                    <div className='h-9 w-9 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <img src={favouriteIcon} alt='back'/>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <div className='h-14 w-14 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(255, 255, 255, 0.45)' }}>
                            <img src={playIcon} alt='play'/>
                    </div>
                </div>
                <div className='flex flex-col justify-center pt-20 pl-40'>
                    <span className='text-white font-semibold text-xl'>Kung Fu Panda 4</span>
                    <span className='text-white font-extralight text-xs pb-2'>DreamWorks Animation</span>
                    <img src={rating} alt='rating' className='h-5 w-32'/>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={imdb} alt='imdb' className='h-7 w-8'/>
                        <span className='text-white font-extralight text-xs'>8.1</span>
                    </div>
                </div>
            </div>
            <img src={movieDetailsBackground} alt='movieDetails1' className='w-full object-cover object-top z-0 top-0 left-0 absolute' style={{ height: '28%', overflow: 'hidden' }}/>
            <img src={movieDetailsImage1} alt='movieDetailsImage1' className='rounded-xl left-6 top-36 absolute'/>
            <div className='flex flex-col px-6 text-white gap-7'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-1 items-center'>
                        <img src={ellipse} alt="ellipse" className='rounded-full h-2 w-2'/>
                        <span>Movie Subject</span>
                    </div>
                    <div>
                        <span className='font-light opacity-90'>
                            After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm...
                        </span>
                        <span className='underline' style={{ color: '#4D3399' }}>See All</span>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-1 items-center'>
                        <img src={ellipse} alt="ellipse" className='rounded-full h-2 w-2'/>
                        <span>Images From the Movie</span>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <img src={movieDetailsImage2} alt="movieDetailsImage2" className='rounded-xl'/>
                        <img src={movieDetailsImage3} alt="movieDetailsImage3" className='rounded-l-xl'/>
                    </div>
                </div>
            </div>
            <div className='h-20 items-center justify-center flex z-20 px-5 absolute bottom-0 left-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)'}}>
                <button className='rounded-xl bg-transparent flex flex-row items-center pl-12 pr-6 gap-20 justify-end' style={{ backgroundColor: 'rgba(108, 71, 219)', height : '44px', width: '351px', color:'white' }}>
                    <span className='font-semibold text-lg'>Buy Ticket Now</span>
                    <img src={arrow} alt="arrow"/>
                </button>
            </div>
        </div>
    )
}

export default MovieDetails;