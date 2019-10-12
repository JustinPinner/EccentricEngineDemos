// main game definition, startup and custom activities

import { Engine, Vector2D, Point2D } from 'eccentric-engine/Engine';
import { Config } from './config/config';
import { Ball } from './model/ball';
import '../css/game.css';

const customLifecycle = {
  onSetup: (gameEngine) => {
    // Write your custom setup code here - runs after gameEngine's default setup
    // Also, pre-load any heavy custom images here - e.g.;
    // gameEngine.imageService.load('path/to/large/image');
  }, 
  onStart: (gameEngine) => {
    // Add your custom startup code here
    // The 'viewport' identifier is supplied via the config/game.js file
    const canvas = gameEngine.canvas('viewport');
    // Make sure we start drawing the ball somewhere within the viewport's visible area
    const rndStartLocation = new Point2D(
      Math.floor(Math.random() * (canvas.width - (2 * gameEngine.config.ball.width))) + gameEngine.config.ball.width, 
      Math.floor(Math.random() * (canvas.height- (2 * gameEngine.config.ball.height))) + gameEngine.config.ball.height
    );
    // Create a new Ball which extends the GameObject class provided by the engine
    const ball = new Ball(
      gameEngine.config.ball,
      rndStartLocation,
      gameEngine
    );
    // Give the new Ball object some direction, in the form of a 2D vector
    ball.setVelocity(new Vector2D(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)));  
  }, 
  onTick: (gameEngine) => {
    // Write custom global game state update code here
    // Every custom object that descends from a GameObject will have its updateAndDraw method executed by the
    // engine's execution of its internal tick function - that then calls out to your own code here
  }
};

// create an instance of Engine, using your configuration files
const game = new Engine(Config, customLifecycle);

// this is where the code actually gets started up - it'll run as soon as the page is loaded
(function() { 
  game.start();
})();
