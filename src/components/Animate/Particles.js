/* eslint-disable react/react-in-jsx-scope */
import Particles from 'react-tsparticles';

const BgParticles = () => {
  return (
    <>
      <Particles
        id='tsparticles'
        style={{
          position: 'absolute',
          zIndex: -5,
        }}
        options={{
          background: {
            color: {
              value: 'linear-gradient(to right, #61045F, #AA076B)',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 4,
                opacity: 0.2,
                size: 60,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#0000',
            },

            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'triangle',
            },
            size: {
              random: true,
              value: 7,
            },
            width: {
              value: 100,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default BgParticles;
