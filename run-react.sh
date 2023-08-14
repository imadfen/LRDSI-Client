#!/bin/bash


echo "installing react dependencies.."
npm install --legacy-peer-deps
echo -e "react dependencies installed\n\nstarting the App.."

chmod +x node_modules/.bin/react-scripts

npm start
