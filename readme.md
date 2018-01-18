# promise-pls.js

Return an initialised promise, along with its resolve & reject methods.

## Install:

`npm i promise-pls`


## Usage:

```js
import promise_pls from 'promise-pls';

function do_something() {
  let { p, y, n } = promise_pls();

  function cb(error) {
    if (error) {
      n(error);
    }
    else {
      y();
    }
  }

  run_task(cb);

  return p;
}

do_something()
  .then(function() {
    console.log('done!');
  })
  .catch(functoin(error) {
    console.log('error:', error);
  });
```


## Without promise-pls:

```js
let [y, n];
let p = new Promise(function(_y, _n) {
  [y, n] = [_y, _n];
});
```
