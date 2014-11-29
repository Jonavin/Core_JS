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
    var xobj = new XObject();

    alert(XObject.create);
    alert(Object.create)
    alert("扩展的object:"+new Object().create);
})(window);
