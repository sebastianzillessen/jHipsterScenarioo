# jhipsterScenarioo
(JHipster 4.14.3)
This application is used to show how the integration of jHipster and [Scenarioo](http://www.scenarioo.org) can be easily fullfilled with protractor tests.

# Demo
## Steps after the regular installation
- `yarn install`
- `yarn add scenarioo-js -D`
- add the scenarioo-js configuration to your `protractor.conf.js`:
    `scenarioo.setupJasmineReporter(jasmine, {...})`
- extend your tests with the final save-step of scenarioo: `afterEach(scenarioo.saveLastStep);`
- extend your page objects with new Typescript decorator: `stepAnnotation` (written by me, about to be included in the newest Scanrioo version)


## How to demo it
- `./gradlew bootRun` in one terminal
- `yarn e2e` in another terminal
- see the results in the scenarioo-viewer via docker container:
    `sudo docker run -it --rm --name scenarioo -p 8081:8080 -v <ABSOLUTE-PATH>/jhipster-scenarioo/scenarioReports:/docu scenarioo/webapp:3.0.0`
- visit [http://localhost:8081/scenarioo](http://localhost:8081/scenarioo) 


## Testing

To launch your application's tests, run:

    ./gradlew test

### Client tests

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    yarn test

UI end-to-end tests are powered by [Protractor][], which is built on top of WebDriverJS. They're located in [src/test/javascript/e2e](src/test/javascript/e2e)
and can be run by starting Spring Boot in one terminal (`./gradlew bootRun`) and running the tests (`yarn run e2e`) in a second one.

For more information, refer to the [Running tests page][].

### End 2 End tests

    ./gradlew bootRun #run this in a seperate terminal
    yarn e2e
    
# Scenarioo

[Scenarioo](http://www.scenarioo.org) was integrated in this demo application to evaluate if this is easily possible.
For this the page objects have been extended with a [Typescript Decorator](http://www.typescriptlang.org/docs/handbook/decorators.html) to save the different steps automatically. 
The [scenariooJs](https://github.com/scenarioo/scenarioo-js) library has been used in combination with protractor.



[JHipster Homepage and latest documentation]: http://www.jhipster.tech
[JHipster 4.14.3 archive]: http://www.jhipster.tech/documentation-archive/v4.14.3

[Using JHipster in development]: http://www.jhipster.tech/documentation-archive/v4.14.3/development/
[Using Docker and Docker-Compose]: http://www.jhipster.tech/documentation-archive/v4.14.3/docker-compose
[Using JHipster in production]: http://www.jhipster.tech/documentation-archive/v4.14.3/production/
[Running tests page]: http://www.jhipster.tech/documentation-archive/v4.14.3/running-tests/
[Setting up Continuous Integration]: http://www.jhipster.tech/documentation-archive/v4.14.3/setting-up-ci/


[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
[Angular CLI]: https://cli.angular.io/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Leaflet]: http://leafletjs.com/
[DefinitelyTyped]: http://definitelytyped.org/
