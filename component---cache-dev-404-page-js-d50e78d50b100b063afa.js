(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(51),i=n.n(o),s=n(0),u=n.n(s),l=n(4),c=n.n(l),p=n(153),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showCustom404:!1},n.showCustom404=n.showCustom404.bind(i()(i()(n))),n}r()(t,e);var n=t.prototype;return n.showCustom404=function(){this.setState({showCustom404:!0})},n.render=function(){var e,t=this.props.location.pathname,n=this.props.pages.filter(function(e){return!/^\/dev-404-page\/$/.test(e.path)});return e="/"===t?"src/pages/index.js":"/"===t.slice(-1)?"src/pages"+t.slice(0,-1)+".js":"src/pages"+t+".js",this.state.showCustom404?this.props.custom404:u.a.createElement("div",null,u.a.createElement("h1",null,"Gatsby.js development 404 page"),u.a.createElement("p",null,"There's not a page yet at ",u.a.createElement("code",null,t)),this.props.custom404?u.a.createElement("p",null,u.a.createElement("button",{onClick:this.showCustom404},"Preview custom 404 page")):u.a.createElement("p",null,"A custom 404 page wasn't detected - if you would like to add one, create a component in your site directory at ",u.a.createElement("code",null,"src/pages/404.js"),"."),u.a.createElement("p",null,"Create a React.js component in your site directory at"," ",u.a.createElement("code",null,e)," ","and this page will automatically refresh to show the new page component you created."),n.length>0&&u.a.createElement("div",null,u.a.createElement("p",null,"If you were trying to reach another page, perhaps you can find it below."),u.a.createElement("h2",null,"Pages (",n.length,")"),u.a.createElement("ul",null,n.map(function(e){return u.a.createElement("li",{key:e.path},u.a.createElement(p.Link,{to:e.path},e.path))}))))},t}(u.a.Component);d.propTypes={pages:c.a.arrayOf(c.a.object),custom404:c.a.element,location:c.a.object},t.default=d},151:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(156)),o=a(n(78)),i=a(n(7)),s=a(n(51)),u=a(n(52)),l=a(n(4)),c=a(n(0)),p=n(22),d=n(153);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return c.default.createElement(p.Link,(0,o.default)({to:v,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},153:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(151),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(155),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},156:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},158:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(55),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---cache-dev-404-page-js-d50e78d50b100b063afa.js.map