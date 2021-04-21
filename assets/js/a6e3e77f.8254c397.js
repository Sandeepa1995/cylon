(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(8),o=(t(0),t(98)),c={id:"conda",title:"Conda",sidebar_label:"Conda"},l={unversionedId:"conda",id:"conda",isDocsHomePage:!1,title:"Conda",description:"PyCylon can be built using Conda. There are Conda packages for libcylon and pycylon.",source:"@site/docs/conda.md",sourceDirName:".",slug:"/conda",permalink:"/docs/conda",editUrl:"https://github.com/cylondata/cylon/edit/master/docs/docs/conda.md",version:"current",sidebar_label:"Conda",frontMatter:{id:"conda",title:"Conda",sidebar_label:"Conda"},sidebar:"someSidebar",previous:{title:"Compiling",permalink:"/docs/"},next:{title:"Architecture",permalink:"/docs/arch"}},i=[{value:"Installing from Conda",id:"installing-from-conda",children:[]},{value:"Building in a Conda environment",id:"building-in-a-conda-environment",children:[{value:"Install Conda &amp; Prerequisites",id:"install-conda--prerequisites",children:[]},{value:"Build Cylon",id:"build-cylon",children:[]}]}],d={toc:i};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"PyCylon can be built using Conda. There are Conda packages for libcylon and pycylon. "),Object(o.b)("h2",{id:"installing-from-conda"},"Installing from Conda"),Object(o.b)("p",null,"The following command will install the latest version of Cylon. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"conda create -n cylon-0.4.0 -c cylondata pycylon python=3.7\nconda activate cylon-0.4.0\n")),Object(o.b)("h2",{id:"building-in-a-conda-environment"},"Building in a Conda environment"),Object(o.b)("p",null,"We need Ubuntu 16.04 or higher to build Cylon"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ubuntu 16.04 or higher")),Object(o.b)("h3",{id:"install-conda--prerequisites"},"Install Conda & Prerequisites"),Object(o.b)("p",null,"First download and install Conda for your Linux distribution."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade\nsudo apt install wget git build-essential\n")),Object(o.b)("p",null,"Here are some commands used to install conda"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wget https://repo.anaconda.com/archive/Anaconda3-2020.11-Linux-x86_64.sh\nchmod +x Anaconda3-2020.11-Linux-x86_64.sh\n./Anaconda3-2020.11-Linux-x86_64.sh\n")),Object(o.b)("p",null,"Activate conda environment."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'eval "$(~/anaconda3/bin/conda shell.bash hook)"\nconda install conda-build\n')),Object(o.b)("h3",{id:"build-cylon"},"Build Cylon"),Object(o.b)("p",null,"Here are the commands to build Cylon using the conda-build"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cylondata/cylon.git\ncd cylon\n\nconda create --name build_env python=3.7\nconda activate build_env\n\nconda-build conda/recipes/cylon/\nconda-build conda/recipes/pycylon/\n")))}u.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),u=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(t),p=a,m=s["".concat(c,".").concat(p)]||s[p]||b[p]||o;return t?r.a.createElement(m,l(l({ref:n},d),{},{components:t})):r.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var d=2;d<o;d++)c[d]=t[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);