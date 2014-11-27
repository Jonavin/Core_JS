/**
 * Created by Administrator on 2014/11/27.
 */
;(function (win){
    "use strict";
    function log(msg){
        console.log(msg);
    }
    function dir(obj){
        console.dir(obj)
    }
    var obj = new Object;
    /**
     * 原型对象
     */
    log(obj.__proto__);//new出来的对象才能访问 (object)
    log(Object.__proto__);//function
    log(obj.prototype)//undefined
    log(Object.prototype);//构造函数访问
    log(obj.__proto__ === Object.prototype);//true
    log(obj.__proto__=== Object.__proto__);//false
    log(obj.propertyIsEnumerable("create"))//false,判断对象的属性是否可以for in 遍历
    log(Object.propertyIsEnumerable == obj.propertyIsEnumerable);//true
    for(var i in Object){
        alert(i);//不能遍历
    }

    function myObject (){
        this.constructor = 0;
        this.name = arguments[0];
        log(this.__proto__===myObject.prototype);//true
        log(this.prototype)//undefined
        this.__proto__ = {};
    }


    var myobj = new myObject("myobj");
   // Object.preventExtensions(myObject);//如果加了这句下边会报错
    myObject.staticAtr = "myObject";//这种定义更符合静态属性的定义
    Object.preventExtensions(myobj);//这样的话不会报错
    obj.test = "test";
    log(myObject.propertyIsEnumerable("staticAtr"))//true
    log(myObject.setPropertyIsEnumerable);//undefined
    for(var i in myObject){
        log(i);//能遍历自定义属性
    }
    log(myObject.prototype === Object.prototype);//false
    dir(myObject.__proto__);
    dir(Object.__proto__);
    log(myObject.__proto__ === Object.__proto__)//true 所有对象的静态__proto__是相等的



    /**
     * 构造函数
     */
})(window);