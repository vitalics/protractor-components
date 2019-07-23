# protractor-components
Simple component builder for protractor projects

## Installing
`npm i protractor-components`

## API

### `Component`
simple class that can get only the common things like `getText`, `getAttribute`, `getCssValue`, etc.

As protractor, all these common types return `Promise`

`Component.prototype.root` - root element that find when you call constructor(`new` keyword). 

### `Collection`
Collection like `ElementArrayFinder`, but you can use `for await ... of` syntax

## Example

``` ts
// reason.component.ts
import { Component } from 'protractor-components';
import { $ } from 'protractor';

export class Reason extends Component {
    constructor() {
        super($('.row.first .span4'));
    }
    getHeader() {
        return this.$('.text-display-1').getText();
    }

    getBody() {
        return this.$('.text-body').getText();
    }
}


// e2e.ts
import { $ } from 'protractor';
import { Reason } from './reason.component';

describe('...', () =>{
    it('...', async ()=>{
        const reason = new Reason();
        const header = awaitreason.getHeader();
        expect(typeof header).toBe('string';
    })
})
```
`collection` example
``` ts
import { $$ } from 'protractor';
import { Collection } from 'protractor-components';

import { Reason } from './reason.component';

export class ReasonCollection extends Collection<Reason>{
    constructor(){
        super($$('.row.first .span4'), Reason);
    }
}
```


## TODO

- [] JSDoc from protractor for `Component` and `Collection`
- [] more comprehensive types
- [] more common components(`Form`, `Selector`, `MultipleSelector`, `Checkbox`, `RadioButton`, `Input`(color picker, range, date, upload) , `Table`)
- [] add module `protractor-components/common`
- [] add API for angular(window.ng.probe function) and react(resq library) components
