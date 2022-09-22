import { LightningElement } from 'lwc';

export default class EmbeddedLWC extends LightningElement {

    compLoaded = false;

    connectedCallback() {

        // Creates the event on load
        //const selectedEvent = new Event('selected');

        // Dispatches the event.
        //this.dispatchEvent(selectedEvent);

        // Window method
        if (!this.compLoaded) {
            var payload = "ur mans";
            window.parent.postMessage(payload, '*');
            this.compLoaded = true;

            //Log
            console.log("SF Test: Fired selected event with payload '" + payload + "'");
        }

    }

}