# API
## Etapes de déploiement
###### Environnement (Linux)
* Node.js et NPM
  - sudo apt-get update
  - sudo apt-get install nodejs
  - sudo apt-get install npm
* PM2 
  - npm install pm2 -g
  
###### Déploiement de l'api
* cd ~
* git clone https://github.com/ayadibaha/poc-api.git
* cd poc-api
* npm i --production
* pm2 start --name "backend" npm -- start --exp-backoff-restart-delay=0
---
Pour vérifier l'état du serveur:
* pm2 ls
---
Pour voir les logs du serveur:
* pm2 logs backend

###### Déploiement continu
* cd ~/poc-api
* npm i --production
* pm2 restart backend
