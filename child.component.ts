import { IComponentController, IComponentOptions } from 'angular';
import * as firebase from 'firebase';
import './child.component.scss';
class ChildController implements IComponentController {
    constructor($firebaseArray) {
        const config = {
            apiKey: "AIzaSyCxqC3YiexaNaq9Bx2PoNLFQgpSSId5AIs",
            authDomain: "trackme-95b14.firebaseapp.com",
            databaseURL: "https://trackme-95b14.firebaseio.com",
            projectId: "trackme-95b14",
            storageBucket: "trackme-95b14.appspot.com",
            messagingSenderId: "238200982954"
        };
        firebase.initializeApp(config);
        var object;
        const rootRef = firebase.database().ref().child('todos');
        console.log($firebaseArray(rootRef));
        object = $firebaseArray(rootRef);
        console.log(rootRef);
    }

}

const childComponent: IComponentOptions = {
    controller: ChildController,
    template: require('./child.component.html') as string
};

export default childComponent;