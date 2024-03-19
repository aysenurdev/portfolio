import {Particles} from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, {useCallback} from 'react';


const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) =>{
await loadFull(engine);
  }, []);

const particlesLoaded = useCallback(async () => {}, []);

return (

  <Particles
  className='w-full h-full absolute translate-z-0'
   id='tsparticles' 
    init={particlesInit} 
    loaded={particlesLoaded} 
    options={{
    fullScreen: {enable:false},
    background: {
      color: {
        value: '',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onclick:{
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
       },
       resize: true,
    },
       modes:{
        push:{
          quantity: 90
        },
        
        repulse: {
          distance: 200,
          duration: 0.4,
        }
      }
     },
     particles:{
      color:{
        value:'#e68e2e'
      },
      links:{
        color: '#f5d393',
        distance: 150,
        enable: true,
        opacity: 0.5,
        with: 1
      },
      collisions: {
        enable: true,
     },
     move:{
      direction: 'none',
      enable: true,
      outModes: {
        default: 'circle'
      },
      random: false,
      speed: 1,
      straight: false
     },

     number:{
      density :{
        enable: true,
        area: 600
       },
       value:30
     },
     shape:{
       type: 'star'
     },
     size:{
      value:{min: 3, max: 5},
      },
     },
     detectRetina: true,
  }} 
/>
);
};

export default ParticlesContainer;
