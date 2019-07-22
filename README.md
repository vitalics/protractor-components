# protractor-components
Simple component builder for protractor projects

## Installing
`npm i protractor-components`

## API

### `Component`
simple class that can get only the common things like `getText`, `getAttribute`, `getCssValue`, etc.

As protractor, all these common types return `Promise`

### `Collection`
Collection like `ElementArrayFinder`, but you can use `for await ... of` syntax

## Example

``` ts
    // component1.ts
    import { Component } from 'protractor-components';
    export class MyComponent extends Component {
        async getHeader(){
            return this.root.$('header').getText();
        }
    }

    // e2e.ts
    import { $ } from 'protractor';
    import { MyComponent } from './component1';

    describe('...', () =>{
        it('...', async ()=>{
            const myComponent = new MyComponent($('.container'));

            const header = await myComponent.getHeader();

            expect(typeof header).toBe('string');
        })
    })
```

## TODO

- [] JSDoc from protractor for `Component` and `Collection`
- [] more comprehensive types
- [] more common components(`Form`, `Selector`, `MultipleSelector`, `Checkbox`, `RadioButton`, `Input`(color picker, range, date, upload) , `Table`)
- [] add module `protractor-components/common`