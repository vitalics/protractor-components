import { $$ } from 'protractor';
import { Collection } from 'protractor-components';

import { Reason } from './reason.component';

export class ReasonCollection extends Collection<Reason>{
    constructor(){
        super($$('.row.first .span4'), Reason);
    }
}