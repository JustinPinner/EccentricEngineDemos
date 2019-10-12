// ball configuration 

export const ball = () => {
  return {
    type: 'ball',
    state: 'live',
    initialVelocity: {
      x: 0,
      y: 0
    },
    width: 100,
    height: 100,
    sprites: {},
    keys: {},
    update: (self) => {
      self.checkBounce();
    },
    soundEffects: {
      'bounce': {
        id: 'bounce',
        type: 'sawtooth',
        frequency: 800,
        volume: 1.0,
        duration: 120  
      }
    }
  };
};
