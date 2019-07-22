import { Component } from 'protractor-components';
import { $ } from 'protractor';

export class Reason extends Component {
    constructor() {
        super($('.row.first .span4'));
    }
    getHeader() {
        return this.root.$('.text-display-1').getText();
    }

    getBody() {
        return this.root.$('.text-body').getText();
    }
}