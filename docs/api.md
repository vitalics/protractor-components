## Image

common component that can have `src`, `alt`, `width` or `height`

### Example 
```ts
import { $ } from 'protractor';
import { Image } from 'protractor-components/common';

const videoImg1 = new Image($('img.video'));

expect(await videoImg1.src).toBe('videos/video1.mp4');
```

Properties `src`, `alt`, `width` or `height` are `Promise` and you should use `async/await` syntax or `then` chain

These Properties has only `get` accessor. That means that you cannot set any value