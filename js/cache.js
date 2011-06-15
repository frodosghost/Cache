/**
 *
 * Cache  : A Javascript Object for managing cache
 *
 * @author  James Rickard <james@frodosghost.com>
 * @version 1.0
 */
var Cache = {
  //Version
  version: 1.0,

  /* Private Variables */
  cached_objects: [],

  /**
   * Set an item into the cache
   *
   * @param String name  Attribute name
   * @param String value Attribute value
   */
  set: function(name, value) {
    this.cached_objects[name] = value;
  },

  /**
   * Returns a stored value if exists else passed default
   *
   * @param  String name          Attribute Name
   * @param  String default_value Default value to return if not set
   * @return Mixed
   */
  get: function(name, default_value) {
    default_value = (typeof default_value == 'undefined') ? null : default_value;

    return (typeof this.cached_objects[name] == 'undefined') ? default_value : this.cached_objects[name];
  },

  /**
   * Returns if the attribute is set
   */
  has: function(name) {
    return typeof this.cached_objects[name] != 'undefined'
  }

};
