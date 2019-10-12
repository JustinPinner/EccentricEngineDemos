
import { game } from './game';
import { ball } from './ball';

class Config {
  constructor(customLifecycle) {
    this._game = game();
    this._ball = ball();
    this._game.lifeCycle = {
      onSetup: customLifecycle.onSetup,
      onStart: customLifecycle.onStart,
      onTick: customLifecycle.onTick
    };
  };
  get game() {
    return this._game;
  };
  get ball() {
    return this._ball;
  }
  get debugEngine() {
    return this._game.debugEngine;
  }
}

export {
  Config
};
