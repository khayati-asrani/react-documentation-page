(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{40:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(4),r=n(6),s=n(5),c=n(7),i=n(0),l=n.n(i),u=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"Constants",class:"main-section"},l.a.createElement("header",{class:"header9"},"Constants"),l.a.createElement("article",null,l.a.createElement("p",null,"You can create a read-only, named constant with the const keyword. The syntax of a constant identifier is the same as for a variable identifier: it must start with a letter, underscore or dollar sign and can contain alphabetic, numeric, or underscore characters."),l.a.createElement("code",null,"const PI = 3.14;"),l.a.createElement("p",null,"A constant cannot change value through assignment or be re-declared while the script is running. It has to be initialized to a value."),l.a.createElement("p",null,"The scope rules for constants are the same as those for let block scope variables. If the const keyword is omitted, the identifier is assumed to represent a variable."),l.a.createElement("p",null,"You cannot declare a constant with the same name as a function or variable in the same scope. For example:"),l.a.createElement("code",null,"// THIS WILL CAUSE AN ERROR\n    function f() {};\n    const f = 5;\n    // THIS WILL CAUSE AN ERROR ALSO\n    function f() {\n    const g = 5;\n    var g;\n    //statements\n    }"),"However, object attributes are not protected, so the following statement is executed without problems.",l.a.createElement("code",null,'const MY_OBJECT = {"key": "value"};\n    MY_OBJECT.key = "otherValue"')))}}]),t}(l.a.Component);t.default=u}}]);
//# sourceMappingURL=9.2d303e92.chunk.js.map