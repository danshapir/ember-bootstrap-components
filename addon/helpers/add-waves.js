import Ember from 'ember';

export function addWaves(params, hash) {
  let wavesClass = hash.wavesClass || 'waves-light';
  if (hash.ignorePointer) {
    wavesClass += ' waves-pointer-none'
  }
  return Ember.String.htmlSafe(`<div class="waves-container waves-effect ${wavesClass}"></div>`);
}

export default Ember.Helper.helper(addWaves);
