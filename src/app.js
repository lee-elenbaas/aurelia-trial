import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia Trial';
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',            nav: true, title:'Welcome' },
        { route: 'state',         moduleId: 'state/state-route',  nav: true },
        { route: 'flickr',        moduleId: 'flickr',             nav: true },
        { route: 'child-router',  moduleId: 'child-router',       nav: true, title:'Child Router' }
      ]);
    });
  }
}
