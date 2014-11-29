/**
 * Created by wsf on 2014-11-29.
 * 扩展的object对象
 */
;(function(win){
    "use strict";
    function XObject(){
        Object.apply(this,arguments);
    }
    XObject.create = Object.create;
})(window);
