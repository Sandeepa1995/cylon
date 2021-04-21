(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),l=(n(0),n(98)),o={id:"0.2.0",title:"Cylon Release 0.2.0",sidebar_label:"Cylon Release 0.2.0"},c={unversionedId:"release/0.2.0",id:"release/0.2.0",isDocsHomePage:!1,title:"Cylon Release 0.2.0",description:"Cylon 0.2.0 adds the following features. Please note that this release may not be backward",source:"@site/docs/release/cylon_release_0.2.0.md",sourceDirName:"release",slug:"/release/0.2.0",permalink:"/docs/release/0.2.0",editUrl:"https://github.com/cylondata/cylon/edit/master/docs/docs/release/cylon_release_0.2.0.md",version:"current",sidebar_label:"Cylon Release 0.2.0",frontMatter:{id:"0.2.0",title:"Cylon Release 0.2.0",sidebar_label:"Cylon Release 0.2.0"},sidebar:"someSidebar",previous:{title:"Cylon Release 0.3.0",permalink:"/docs/release/0.3.0"},next:{title:"Cylon Release 0.1.0",permalink:"/docs/release/0.1.0"}},i=[{value:"Major Features",id:"major-features",children:[{value:"C++",id:"c",children:[]},{value:"Python (Pycylon)",id:"python-pycylon",children:[]},{value:"Java (JCylon)",id:"java-jcylon",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"License",id:"license",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Cylon 0.2.0 adds the following features. Please note that this release may not be backward\ncompatible with v0.1.0."),Object(l.b)("h2",{id:"major-features"},"Major Features"),Object(l.b)("h3",{id:"c"},"C++"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Adding aggregates and group-by API"),Object(l.b)("li",{parentName:"ul"},"Creating tables using ",Object(l.b)("inlineCode",{parentName:"li"},"std::vector"),"s or ",Object(l.b)("inlineCode",{parentName:"li"},"cylon::Column"),"s"),Object(l.b)("li",{parentName:"ul"},"C++ API refactoring"),Object(l.b)("li",{parentName:"ul"},"Major performance improvements in the existing C++ API")),Object(l.b)("h3",{id:"python-pycylon"},"Python (Pycylon)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Extending Cython API for extended development for other Cython/Python libraries"),Object(l.b)("li",{parentName:"ul"},"Aggregates and Groupby addition"),Object(l.b)("li",{parentName:"ul"},"Column name-based relational algebra operations and aggregate/groupby ops addition"),Object(l.b)("li",{parentName:"ul"},"Major performance improvements in the existing Python API")),Object(l.b)("h3",{id:"java-jcylon"},"Java (JCylon)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Performance improvements")),Object(l.b)("p",null,"You can download source code from ",Object(l.b)("a",{parentName:"p",href:"https://github.com/cylondata/cylon/releases"},"Github")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/tree/0.2.0/cpp/src/examples"},"C++ examples")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/tree/0.2.0/python/examples"},"Python examples")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/tree/0.2.0/java/src/main/java/org/cylondata/cylon/examples"},"Java examples"))),Object(l.b)("h2",{id:"license"},"License"),Object(l.b)("p",null,"Licensed under the Apache License, Version 2.0: ",Object(l.b)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"http://www.apache.org/licenses/LICENSE-2.0")))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||l;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);