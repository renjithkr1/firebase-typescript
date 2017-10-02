import { module } from 'angular';
import 'angularfire';
import childComponent from './child.component';
import childConfigure from './child.config';

const child = module('child', ['firebase.database'])
    .component('childComponent', childComponent)
    .config(childConfigure)
    .name;

export default child;