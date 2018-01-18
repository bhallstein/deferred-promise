//
// deferred-promise.js methods
// - return an initialised promise, and its resolve & reject methods
//


function deferred_promise() {
  let y, n
  let p = new Promise(function(_y, _n) {
    [y, n] = [_y, _n];
  });
  return { p, y, n };
}

module.exports = deferred_promise;
