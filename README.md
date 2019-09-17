# Bitfaced Web Application

An Open Sourced Community Driven Web Application built using Node.js, Express, [React](https://reactjs.org/), [Next.js](https://nextjs.org/), and [Evergreen-UI](https://evergreen.segment.com/components) and hosted with [AWS Free-tier tech](https://aws.amazon.com/free/).

-- [**Bitfaced Web App**](https://bitfaced.com)

[![buddy pipeline](https://app.buddy.works/naed11/bitfaced-web-app/pipelines/pipeline/210988/badge.svg?token=1f813d5ab3f0d84aacfcf867ab5568a428c4d69cb8ef30b1f1784d0a3eb9f59b "buddy pipeline")](https://app.buddy.works/naed11/bitfaced-web-app/pipelines/pipeline/210988)


Prerequisites
-----

1. Node and NPM 
  - [Learn more about Node and NPM](https://github.com/naed11/BitFaced-Web-App/wiki/Learn-More-About-Node.js-and-npm)
  - [Download Here for Install](https://nodejs.org/en/download/)
2. [Git](https://git-scm.com/)
  - [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - [Helpful Git commands](https://www.atlassian.com/dam/jcr:8132028b-024f-4b6b-953e-e68fcce0c5fa/atlassian-git-cheatsheet.pdf)

Setting Up Workspace
-----

Navigate into the desired workspace and install location

`cd ~/workspace`

Clone the git repro from Github

`git clone https://github.com/naed11/BitFaced-Web-App.git`

move into the repro

`cd BitFaced-Web-App`

Install the needed node_modules

`npm install`

Install pm2 globally for testing prod like builds (might require sudo)

`npm install -g pm2`

Starting the app for development
-----

`npm run dev`

Now visit [http://localhost:3000](http://localhost:3000) to see the BitFaced web application running in development mode locally on your machine.

Starting the app for production
-----

`npm run build`

`npm run start`

Now visit [http://localhost](http://localhost) to see the BitFaced web application running in production mode locally on your machine.

Creating Feature Branches and Submitting Pull Requests
-----

We encourage and praise community contributions, please learn more about the contributing process here: [Bitfaced Contributing Info](https://github.com/naed11/Bitfaced-Web-App/blob/master/CONTRIBUTING.md)
