## Ball - An Eccentric Engine Demo

## Instructions

Install npm and any required dependencies for your OS (see the main [README](https://github.com/JustinPinner/EccentricEngineDemos/blob/master/README.md) for more details)

This has been tested with several desktop browsers, and as you might expect some are better than others. Chrome, Firefox and Safari seem to be pretty much ok, but Edge and mobile versions of those big three either partially work or don't run at all. At some point I'll try to fix those up, but in the meantime three working browsers is probably enough to get started with.

You'll find a `compile.sh` script in this project's directory, but before you can execute that, you'll have to switch to the project directory, e.g. `% cd ~/path/to/your/cloned/source/Ball` and run these commands (based on MacOS - your OS may be different)
*  npm install eccentric-engine
*  npm install --save-dev webpack 
*  npm install -D webpack-cli

then, to pick up any stragglers, simply run:
*  npm install

and if everything goes well, you'll be able to run the `compile.sh` script. That will create a `dist` directory, and should tell you the full path to that, so you can copy and paste it into your browser's URL bar to run the compiled demo.

## Ball

This is an exercise in getting set up with EccentricEngine and using it in a simple 'game'.

The objective is to draw a ball (in two dimensions, so just a circle really) on the screen and have it bounce around within the confines of the browser's viewport.


