import DS from "ember-data";
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: config.apiURL,
  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function(store, snapshot){
    return true;
  }
});
