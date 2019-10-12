// gameConfig

import { processor as keyProcessor } from '../ui/keyProcessor';

export const game = () => {
  return {
    debugEngine: (location.search.indexOf('debug') > -1) ? true : false,
    version: 1.0,
    fps: 30,
    canvasses: {
      foreground: {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        wrapper: {
          selector: '#fgdiv',
          style: {
            background: 'rgba(0,0,0,0.8)' // black with a hint of transparency
          }
        },
        canvas: {
          selector: '#fgcanvas'
        },
        alias: 'viewport'
      }
    },
    enableKeyboardUI: true,
    keyProcessor: keyProcessor,
    enableGamepadUI: true,
    lifeCycle: {},
    eventListener: (engine, evt) => {}
  };
};
