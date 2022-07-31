

<a name="EcoBridge"></a>
# EcoBridge - Call For Code 2021 - IBM CALL FOR CODE 2021 - LATIN AMERICA FINALIST 

https://developer.ibm.com/callforcode/solutions/2021-solutions/

# Versions

1. [Español](https://github.com/EcoBridge-Team/EcoBridge/blob/master/README.es.md)
2. [English (Current)](https://github.com/EcoBridge-Team/EcoBridge)

Ecobridge is a platform that unites collectors of recyclable material with consumers seeking resources to manufacture their products. We seek to feed a database with collected materials to classify them by their ability to be recycled and provide more detailed information on each one. By joining these two users we facilitate the search for both by increasing the demand for these materials through our platform. Thus allowing the creation of a circular economy market that contributes to the decrease in the use of natural resources. At the same time, through the platform, we can provide any person or business with an endorsement of the resources they consume and also a certification of the carbon footprint by a recycling company if they wish.

# Content

1. [Videos](#video)
2. [Architecture](#Architecture)
3. [Roadmap](#roadmap)
5. [Start EcoBridge](#Getting_Started)
6. [Live Demo](#Live_Demo)
7. [Technologies](#Technologies)
7. [App Screenshots](#App_Screenshots)
8. [Team](#Team)
9. [Acknowledgments](#ackwoledgments)
10. [Bibliography](#bibliography)

<a name="video"></a>

# Videos
Watch the video below to understand EcoBridge's solution!
[![EcoBridge](https://user-images.githubusercontent.com/63655402/127741966-2328df5a-fcaa-49a3-bea3-5ff117a803eb.png)](https://youtu.be/FFFCDO3I4pY "EcoBridge")

Other Videos:

- [Video for the IEEE Bootcamp - Road to Call for Code 2021](https://www.youtube.com/watch?v=5d7UXzqnTlg)
- [Video of the closing event of the IEEE Bootcamp - Road to Call for Code 2021](https://video.ibm.com/recorded/130674173)
- [Demo Video - Hackathon Shawee](https://youtu.be/zRw-hnu7Pxc)
- [Pitch Video - Hackathon Shawee](https://youtu.be/zRw-hnu7Pxc)
- [Video of the Hackathon Shawee Closing Event 🥉](https://www.youtube.com/watch?v=1ppx6nQd1wo&t=2213s)


<a name="Architecture"></a>

# Architecture
![Architecture](https://user-images.githubusercontent.com/63655402/127728910-1f4f6ddd-2d23-405d-8605-ec9432270e74.jpg)


## "The History of a Query"

1. Fetch data from the Client.
2. Cache process and DB2 database query.
3. DB2 response to FastAPI.
4. Watson Discovery processing for classification and rating.
5. Response of data to the Client.

<a name="roadmap"></a>

#Roadmap
![RoadMap](https://user-images.githubusercontent.com/63655402/127637070-f97e56f8-8b72-483b-bcbf-ec9d3b5789ce.png)

<a name="Getting_Started"></a>
# Start EcoBridge

- [Backend](backend/README.md)
- [Frontend](frontend/README.md)

<a name="Live_Demo"> </a>
# Live Demo ⚡

- [Frontend DEMO](https://ecobridge.mybluemix.net)

- [API DEMO](https://ecobridge-api.mybluemix.net/docs)
<a name="Technologies"> </a>

# Technologies
![image](https://user-images.githubusercontent.com/63655402/124836069-f6219480-df47-11eb-8f1b-2355694d7ec5.png)

* [Next.js](https://flutter.dev/) - React.js framework for web applications.
* [FastAPI](https://nodejs.org/en/) - Python micro-framework for creating asynchronous APIs
* [CloudFoundry](https://firebase.google.com/) - Used for notifications and external authentification.
* [IBM DB2](https://www.ibm.com/cloud/databases-for-postgresql) - to store the data in a relational database (SQL).
* [Watson Discovery](https://www.ibm.com/cloud/machine-learning#:~:text=Deploy%20and%20run%20AI%20models,at%20scale%20across%20any%20cloud.) - for find keywords and discover relevant information easily.
* [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) - for the virtual assistant.
* [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio) - for the material classification model and its impact.
* [Tensorflow.js](https://www.tensorflow.org/js?hl=es-419) - for the material detection component.
* [ecoInvent](https://www.ecoinvent.org/home.html) - database with information on products and their life cycle.
* [Google Maps API](https://googlemaps.com/) - API used to obtain the geolocation of the person and nearby businesses.
* [Youtube API](https://youtube.com/) - API used for videos on the platform.

<a name="App_Screenshots"></a>
# App screenshots

### Landing Page

![image](https://user-images.githubusercontent.com/63655402/126871927-8c32ecce-5fc8-4b0c-9214-46325ac9c231.png)
![image](https://user-images.githubusercontent.com/63655402/126871932-ee94102b-bc01-4bba-b2c9-e5ba5a061057.png)


### Profile Page
![image](https://user-images.githubusercontent.com/63655402/126872384-36af17cf-26ec-4f3e-80a9-4da88ede0b2d.png)

### Events Page
![image](https://user-images.githubusercontent.com/63655402/126872271-6d88f39a-7347-40b8-88a5-1954f394624f.png)

### Resources Page
![image](https://user-images.githubusercontent.com/63655402/126871956-df2323aa-5e29-4a45-91e4-931911e558a7.png)

### Companies Page
![image](https://user-images.githubusercontent.com/63655402/127728243-79e0914b-ee2e-42b1-898f-248fd79cee28.png)
![image](https://user-images.githubusercontent.com/63655402/127728218-350cda16-e469-4c44-ac67-b0052ca78e39.png)

### Marketplace

![image](https://user-images.githubusercontent.com/63655402/126872043-fc0fb85b-f1de-4b7d-b326-5660b8efd12b.png)
![image](https://user-images.githubusercontent.com/63655402/126872179-1653a489-d30d-49bd-9745-49351744a264.png)


### Learning Platform
![image](https://user-images.githubusercontent.com/63655402/127728182-7956ff6f-99af-4763-999c-bc9e7c9df5f7.png)
![image](https://user-images.githubusercontent.com/63655402/127728200-ca22fb28-4eed-4cba-a896-8eedda816190.png)


### Login
![image](https://user-images.githubusercontent.com/63655402/126873047-00f42642-2589-4efa-925b-4621a93c38e6.png)

<a name="Team"> </a>

# Team ✒️👨🏽‍💻
* [**Alejandro De León**](https://www.alejoend.codes/) - Full Stack Developer
* [**Michael Knight**](https://www.linkedin.com/in/michaelkdev/) - Backend Developer
* [**Alek Rutherford**](https://www.linkedin.com/in/alek-rutherford-9726701b0/) - Full Stack Developer
* [**Aristides Isaza**](https://www.linkedin.com/in/manuela-marino-844229186/) - Product Manager - Tester
* [**José Regalado**](https://www.linkedin.com/in/jose-regalado-bb4974143/) - Dev Ops - Developer
<a name="ackwoledgments"> </a>

# Ackwoledgments
We want to thank you for all the motivation and help you gave us during our project journey.

* [Prof. María de Jesús](https://www.linkedin.com/in/elvira-mel%C3%A8ndez-835a2996/)
* [Elvira Melendez](https://www.linkedin.com/in/elvira-mel%C3%A8ndez-835a2996/)
* [Prof. Carmen Ortega](https://www.linkedin.com/in/carmen-ortega-r-56122232/)
* [Alexei Castillo](https://www.linkedin.com/in/blissearth/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKSW4sBOhnQdTOtBEPGkRGxouMM4xbNNaY)
* [Bliss Panama](https://blisspanama.com/)
* [Andrea](https://www.linkedin.com/in/carmen-ortega-r-56122232/)

and all the other people who gave us their attention and support in the development of our idea.


<a name="bibliography"></a>
# Bibliography

* [Material Circularity Indicator - Ellen MacArthur Foundation](https://www.ellenmacarthurfoundation.org/resources/apply/material-circularity-indicator)
* [What to Recycle? - Bliss Panamá](https://www.linkedin.com/in/elvira-mel%C3%A8ndez-835a2996/)
* [ISO 14001](https://www.iso.org/obp/ui/#iso:std:iso:14001:ed-3:v1:en)
* [BIEM Model](https://biemmodel.me/)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@ecosystem/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
