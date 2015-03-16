import {Router} from 'aurelia-router';
import {States} from './states';

export class StateRouter{
  static inject() { return [Router, States]; }
  constructor(router, states){
    this.heading = 'state';
    this.router = router;
    this.states = states
    router.configure(config => {
      config.map(states.map((e, i)=> { route: i, moduleId: 'state-route', name: true, title: e });
    });
  }
}
