import { Keys } from 'eccentric-engine/Engine';

const processor = (pressedKey, isPressed, host) => {
  switch (pressedKey) {
    case Keys.SPACE:
      if (host.gameEngine) {
        // end an event back to the engine to respond to your keypress - e.g.
        // host.gameEngine.eventSystem.dispatchEvent(host.gameEngine.id, {action: "PAUSE"});
      }
    case Keys.ARROWUP:
    case Keys.W:
      host.pressed.up = isPressed;
      break;
    case Keys.ARROWDOWN:
    case Keys.S:
      host.pressed.down = isPressed;
      break;
    case Keys.ARROWLEFT:
    case Keys.A:
      host.pressed.left = isPressed;
      host.ignore(Keys.ARROWLEFT, 500);
      host.ignore(Keys.A, 500);
      break;
    case Keys.ARROWRIGHT:
    case Keys.D:
      host.pressed.right = isPressed;
      host.ignore(Keys.ARROWRIGHT, 500);
      host.ignore(Keys.D, 500);
      break;
    case Keys.ENTER:
      host.pressed.enter = isPressed;
      break;
    case Keys.ESCAPE:
      debugger;
      break;  
  }
}

export { processor };
