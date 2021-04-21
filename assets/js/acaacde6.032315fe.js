(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),i=(t(0),t(98)),o={id:"compile",title:"Compiling",sidebar_label:"Compiling"},l={unversionedId:"compile",id:"compile",isDocsHomePage:!0,title:"Compiling",description:"Cylon has C++ core, Java and Python bindings. You can compile these in three steps.",source:"@site/docs/compile.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/cylondata/cylon/edit/master/docs/docs/compile.md",version:"current",sidebar_label:"Compiling",frontMatter:{id:"compile",title:"Compiling",sidebar_label:"Compiling"},sidebar:"someSidebar",next:{title:"Conda",permalink:"/docs/conda"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Python Environment",id:"python-environment",children:[{value:"Create a virtual environment",id:"create-a-virtual-environment",children:[]}]},{value:"OpenMPI",id:"openmpi",children:[{value:"From source",id:"from-source",children:[]},{value:"Installing with package manager",id:"installing-with-package-manager",children:[]}]},{value:"Building Cylon From Source",id:"building-cylon-from-source",children:[{value:"Build C++ APIs",id:"build-c-apis",children:[]},{value:"Build Python APIs",id:"build-python-apis",children:[]},{value:"Updating <code>LD_LIBRARY_PATH</code>",id:"updating-ld_library_path",children:[]},{value:"Running Tests",id:"running-tests",children:[]}]},{value:"Building Cylon using PyArrow from Python-pip",id:"building-cylon-using-pyarrow-from-python-pip",children:[]}],c={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Cylon has C++ core, Java and Python bindings. You can compile these in three steps."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Here are the prerequisites for compiling Cylon."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"CMake 3.16.5"),Object(i.b)("li",{parentName:"ol"},"OpenMPI 4.0.1 or higher"),Object(i.b)("li",{parentName:"ol"},"Python 3.7 or higher"),Object(i.b)("li",{parentName:"ol"},"C++ 14 or higher")),Object(i.b)("h2",{id:"python-environment"},"Python Environment"),Object(i.b)("p",null,"Because Cylon build Apache Arrow with it, we need to specify a Python environment to the build."),Object(i.b)("p",null,"If you're using a virtual environment, make sure to set the virtual environment path. Or you can specify /usr as\nthe path if you're installing in the system path."),Object(i.b)("h3",{id:"create-a-virtual-environment"},"Create a virtual environment"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cd  $HOME/cylon\npython3 -m venv ENV\nsource ENV/bin/activate\n")),Object(i.b)("p",null,"Here after we assume your Python ENV path is,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"}," $HOME/cylon/ENV\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},"Note: User must install Pyarrow with the Cylon build to use Cylon APIs.\nDo not use a prior installed pyarrow in your python environment.\nUninstall it before running the setup.\n")),Object(i.b)("h2",{id:"openmpi"},"OpenMPI"),Object(i.b)("h3",{id:"from-source"},"From source"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We recommend using ",Object(i.b)("inlineCode",{parentName:"p"},"OpenMPI 4.0.1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download OpenMPI 4.0.1 from ",Object(i.b)("a",{parentName:"p",href:"https://download.open-mpi.org/release/open-mpi/v4.0/openmpi-4.0.1.tar.gz"},"https://download.open-mpi.org/release/open-mpi/v4.0/openmpi-4.0.1.tar.gz"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Extract the archive to a folder named ",Object(i.b)("inlineCode",{parentName:"p"},"openmpi-4.0.1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Also create a directory named ",Object(i.b)("inlineCode",{parentName:"p"},"build")," in some location. We will use this to install OpenMPI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the following environment variables"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"BUILD=<path-to-build-directory>\nOMPI_401=<path-to-openmpi-4.0.1-directory>\nPATH=$BUILD/bin:$PATH\nLD_LIBRARY_PATH=$BUILD/lib:$LD_LIBRARY_PATH\nexport BUILD OMPI_401 PATH LD_LIBRARY_PATH\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The instructions to build OpenMPI depend on the platform. Therefore, we highly recommend looking into the ",Object(i.b)("inlineCode",{parentName:"p"},"$OMPI_401/INSTALL")," file. Platform specific build files are available in ",Object(i.b)("inlineCode",{parentName:"p"},"$OMPI_401/contrib/platform")," directory.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In general, please specify ",Object(i.b)("inlineCode",{parentName:"p"},"--prefix=$BUILD")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-mpi-java")," as arguments to ",Object(i.b)("inlineCode",{parentName:"p"},"configure")," script. If Infiniband is available ","(","highly recommended",")"," specify ",Object(i.b)("inlineCode",{parentName:"p"},"--with-verbs=<path-to-verbs-installation>"),". Usually, the path to verbs installation is ",Object(i.b)("inlineCode",{parentName:"p"},"/usr"),". In summary, the following commands will build OpenMPI for a Linux system."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"cd $OMPI_401\n./configure --prefix=$BUILD --enable-mpi-java\nmake -j 8;make install\n")))),Object(i.b)("h3",{id:"installing-with-package-manager"},"Installing with package manager"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt install libopenmpi-dev\n")),Object(i.b)("h2",{id:"building-cylon-from-source"},"Building Cylon From Source"),Object(i.b)("p",null,"We have provided a build script to make the build process easier. It is found in Cylon source root directory.\nPlease note that Cylon will build Apache Arrow (both ",Object(i.b)("inlineCode",{parentName:"p"},"libarrow")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pyarrow"),") alongside Cylon.  "),Object(i.b)("h3",{id:"build-c-apis"},"Build C++ APIs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./build.sh -pyenv <path to your environment> -bpath <path to cmake build directory> --cpp [--release | --debug]\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./build.sh -pyenv $HOME/cylon/ENV -bpath $HOME/cylon/build --cpp --release\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},"Note: The default build mode is release \n")),Object(i.b)("h3",{id:"build-python-apis"},"Build Python APIs"),Object(i.b)("p",null,"Cylon provides Python APIs with Cython."),Object(i.b)("p",null,"If you're building for the first time, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"--all")," option in build.\nIf you'have already built cpp and want to compile the your changes to the API,\ndo the following,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./build.sh -pyenv <path to your environment> -bpath <path to cmake build directory> --python\n")),Object(i.b)("p",null,"Note: You only need to do ",Object(i.b)("inlineCode",{parentName:"p"},"--python")," just once after the initial C++ build. If you develop the\nCython or Python APIs, use ",Object(i.b)("inlineCode",{parentName:"p"},"--cython")," flag instead."),Object(i.b)("h3",{id:"updating-ld_library_path"},"Updating ",Object(i.b)("inlineCode",{parentName:"h3"},"LD_LIBRARY_PATH")),Object(i.b)("p",null,"Before running the code in the base path of the cloned repo\nrun the following command. Or add this to your ",Object(i.b)("inlineCode",{parentName:"p"},"bashrc"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"export LD_LIBRARY_PATH=<path to cmake build dir>/arrow/install/lib:<path to cmake build dir>/lib:$LD_LIBRARY_PATH\n")),Object(i.b)("h3",{id:"running-tests"},"Running Tests"),Object(i.b)("p",null,"You can run Cylon tests as follows. "),Object(i.b)("p",null,"For C++ tests "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./build.sh -pyenv <path to your environment> -bpath <path to cmake build directory> --cpp --test\n")),Object(i.b)("p",null,"For Python tests "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./build.sh -pyenv <path to your environment> -bpath <path to cmake build directory> --python --pytest\n")),Object(i.b)("h2",{id:"building-cylon-using-pyarrow-from-python-pip"},"Building Cylon using PyArrow from Python-pip"),Object(i.b)("p",null,"Instead of building Cylon and Apache Arrow together, you can use ",Object(i.b)("a",{parentName:"p",href:"https://pypi.org/project/pyarrow/"},Object(i.b)("inlineCode",{parentName:"a"},"pyarrow")," distribution from",Object(i.b)("inlineCode",{parentName:"a"},"pip"))," as follows.\nThis will build Cylon C++ and Python APIs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv <path to your env>\nsource <path to your env>/bin/activate \npip install pyarrow==2.0.0\n\ncd <cylon source dir>\n./build.sh -pyenv <path to your env> -bpath <path to cmake build dir> --python_with_pyarrow  [--test | --pytest]\n")))}b.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=b(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return t?r.a.createElement(m,l(l({ref:n},c),{},{components:t})):r.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);