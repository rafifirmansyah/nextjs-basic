(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6066:function(e,i,a){"use strict";a.d(i,{Z:function(){return q}});var t=a(5893),s=a(9008),u=a(1664),o=a(3111),n=a.n(o);function r(){return(0,t.jsx)("header",{className:n().container,children:(0,t.jsxs)("ul",{className:n().list,children:[(0,t.jsx)("li",{className:n().item,children:(0,t.jsx)(u.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{className:n().item,children:(0,t.jsx)(u.default,{href:"/blog",children:(0,t.jsx)("a",{children:"Blog"})})}),(0,t.jsx)("li",{className:n().item,children:(0,t.jsx)(u.default,{href:"/users",children:(0,t.jsx)("a",{children:"Users"})})})]})})}var l=a(9696),m=a.n(l);function c(){return(0,t.jsx)("div",{children:(0,t.jsx)("p",{className:m().title,children:"made with love @cisauk"})})}var d=a(3342),p=a.n(d);function q(e){var i=e.children,a=e.pageTitle;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.default,{children:[(0,t.jsxs)("title",{children:["NextJS Basic | ",a]}),(0,t.jsx)("meta",{name:"description",content:"Website NextJS Basic"})]}),(0,t.jsxs)("div",{className:p().container,children:[(0,t.jsx)(r,{}),(0,t.jsx)("div",{className:p().content,children:i}),(0,t.jsx)(c,{})]})]})}},9917:function(e,i,a){"use strict";var t=a(3848),s=a(3115);i.default=function(e){var i=e.src,a=e.sizes,s=e.unoptimized,r=void 0!==s&&s,m=e.priority,c=void 0!==m&&m,q=e.loading,b=e.lazyBoundary,v=void 0===b?"200px":b,g=e.className,h=e.quality,x=e.width,y=e.height,j=e.objectFit,_=e.objectPosition,L=e.onLoadingComplete,N=e.loader,I=void 0===N?E:N,O=e.placeholder,S=void 0===O?"empty":O,k=e.blurDataURL,z=function(e,i){if(null==e)return{};var a,t,s=function(e,i){if(null==e)return{};var a,t,s={},u=Object.keys(e);for(t=0;t<u.length;t++)a=u[t],i.indexOf(a)>=0||(s[a]=e[a]);return s}(e,i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)a=u[t],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=a?"responsive":"intrinsic";"layout"in z&&(z.layout&&(D=z.layout),delete z.layout);var R="";if(function(e){return"object"===typeof e&&(f(e)||function(e){return void 0!==e.src}(e))}(i)){var P=f(i)?i.default:i;if(!P.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(P)));if(k=k||P.blurDataURL,R=P.src,(!D||"fill"!==D)&&(y=y||P.height,x=x||P.width,!P.height||!P.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(P)))}i="string"===typeof i?i:R;var M=A(x),T=A(y),C=A(h),B=!c&&("lazy"===q||"undefined"===typeof q);i.startsWith("data:")&&(r=!0,B=!1);p.has(i)&&(B=!1);0;var F,H,U,V=l.useIntersection({rootMargin:v,disabled:!B}),W=t(V,2),Q=W[0],J=W[1],K=!B||J,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:_},Z="blur"===S?{filter:"blur(20px)",backgroundSize:j||"cover",backgroundImage:'url("'.concat(k,'")'),backgroundPosition:_||"0% 0%"}:{};if("fill"===D)F={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof M&&"undefined"!==typeof T){var G=T/M,Y=isNaN(G)?"100%":"".concat(100*G,"%");"responsive"===D?(F={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={display:"block",boxSizing:"border-box",paddingTop:Y}):"intrinsic"===D?(F={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={boxSizing:"border-box",display:"block",maxWidth:"100%"},U='<svg width="'.concat(M,'" height="').concat(T,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(F={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:M,height:T})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};K&&($=w({src:i,unoptimized:r,layout:D,width:M,quality:C,sizes:a,loader:I}));var ee=i;return u.default.createElement("div",{style:F},H?u.default.createElement("div",{style:H},U?u.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(n.toBase64(U))}):null):null,!K&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},z,w({src:i,unoptimized:r,layout:D,width:M,quality:C,sizes:a,loader:I}),{decoding:"async","data-nimg":!0,style:X,className:g}))),u.default.createElement("img",Object.assign({},z,$,{decoding:"async","data-nimg":!0,className:g,ref:function(e){Q(e),function(e,i,a,t){if(!e)return;var s=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===a&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(i),t){var s=e.naturalWidth,u=e.naturalHeight;t({naturalWidth:s,naturalHeight:u})}}))};e.complete?s():e.onload=s}(e,ee,S,L)},style:d({},X,Z)})),c?u.default.createElement(o.default,null,u.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var u=c(a(7294)),o=c(a(639)),n=a(8997),r=a(5809),l=a(7426);function m(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function c(e){return e&&e.__esModule?e:{default:e}}function d(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(i){m(e,i,a[i])}))}return e}var p=new Set;var q=new Map([["default",function(e){var i=e.root,a=e.src,t=e.width,s=e.quality;0;return"".concat(i,"?url=").concat(encodeURIComponent(a),"&w=").concat(t,"&q=").concat(s||75)}],["imgix",function(e){var i=e.root,a=e.src,t=e.width,s=e.quality,u=new URL("".concat(i).concat(j(a))),o=u.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||t.toString()),s&&o.set("q",s.toString());return u.href}],["cloudinary",function(e){var i=e.root,a=e.src,t=e.width,s=e.quality,u=["f_auto","c_limit","w_"+t,"q_"+(s||"auto")].join(",")+"/";return"".concat(i).concat(u).concat(j(a))}],["akamai",function(e){var i=e.root,a=e.src,t=e.width;return"".concat(i).concat(j(a),"?imwidth=").concat(t)}],["custom",function(e){var i=e.src;throw new Error('Image with src "'.concat(i,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function f(e){return void 0!==e.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||r.imageConfigDefault,v=b.deviceSizes,g=b.imageSizes,h=b.loader,x=b.path,y=(b.domains,[].concat(s(v),s(g)));function w(e){var i=e.src,a=e.unoptimized,t=e.layout,u=e.width,o=e.quality,n=e.sizes,r=e.loader;if(a)return{src:i,srcSet:void 0,sizes:void 0};var l=function(e,i,a){if(a&&("fill"===i||"responsive"===i)){for(var t,u=/(^|\s)(1?\d?\d)vw/g,o=[];t=u.exec(a);t)o.push(parseInt(t[2]));if(o.length){var n=.01*Math.min.apply(Math,o);return{widths:y.filter((function(e){return e>=v[0]*n})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===i||"responsive"===i?{widths:v,kind:"w"}:{widths:s(new Set([e,2*e].map((function(e){return y.find((function(i){return i>=e}))||y[y.length-1]})))),kind:"x"}}(u,t,n),m=l.widths,c=l.kind,d=m.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:m.map((function(e,a){return"".concat(r({src:i,quality:o,width:e})," ").concat("w"===c?e:a+1).concat(c)})).join(", "),src:r({src:i,quality:o,width:m[d]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var i=q.get(h);if(i)return i(d({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(r.VALID_LOADERS.join(", "),". Received: ").concat(h))}function j(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,i){return e-i})),y.sort((function(e,i){return e-i}))},2167:function(e,i,a){"use strict";var t=a(3848);i.default=void 0;var s,u=(s=a(7294))&&s.__esModule?s:{default:s},o=a(1063),n=a(4651),r=a(7426);var l={};function m(e,i,a,t){if(e&&o.isLocalURL(i)){e.prefetch(i,a,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[i+"%"+a+(s?"%"+s:"")]=!0}}var c=function(e){var i,a=!1!==e.prefetch,s=n.useRouter(),c=u.default.useMemo((function(){var i=o.resolveHref(s,e.href,!0),a=t(i,2),u=a[0],n=a[1];return{href:u,as:e.as?o.resolveHref(s,e.as):n||u}}),[s,e.href,e.as]),d=c.href,p=c.as,q=e.children,f=e.replace,b=e.shallow,v=e.scroll,g=e.locale;"string"===typeof q&&(q=u.default.createElement("a",null,q));var h=(i=u.default.Children.only(q))&&"object"===typeof i&&i.ref,x=r.useIntersection({rootMargin:"200px"}),y=t(x,2),w=y[0],A=y[1],E=u.default.useCallback((function(e){w(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,w]);u.default.useEffect((function(){var e=A&&a&&o.isLocalURL(d),i="undefined"!==typeof g?g:s&&s.locale,t=l[d+"%"+p+(i?"%"+i:"")];e&&!t&&m(s,d,p,{locale:i})}),[p,d,A,g,a,s]);var j={ref:E,onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||function(e,i,a,t,s,u,n,r){("A"!==e.currentTarget.nodeName||!function(e){var i=e.currentTarget.target;return i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(a))&&(e.preventDefault(),null==n&&t.indexOf("#")>=0&&(n=!1),i[s?"replace":"push"](a,t,{shallow:u,locale:r,scroll:n}))}(e,s,d,p,f,b,v,g)},onMouseEnter:function(e){o.isLocalURL(d)&&(i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),m(s,d,p,{priority:!0}))}};if(e.passHref||"a"===i.type&&!("href"in i.props)){var _="undefined"!==typeof g?g:s&&s.locale,L=s&&s.isLocaleDomain&&o.getDomainLocale(p,_,s&&s.locales,s&&s.domainLocales);j.href=L||o.addBasePath(o.addLocale(p,_,s&&s.defaultLocale))}return u.default.cloneElement(i,j)};i.default=c},7426:function(e,i,a){"use strict";var t=a(3848);Object.defineProperty(i,"__esModule",{value:!0}),i.useIntersection=function(e){var i=e.rootMargin,a=e.disabled||!o,r=s.useRef(),l=s.useState(!1),m=t(l,2),c=m[0],d=m[1],p=s.useCallback((function(e){r.current&&(r.current(),r.current=void 0),a||c||e&&e.tagName&&(r.current=function(e,i,a){var t=function(e){var i=e.rootMargin||"",a=n.get(i);if(a)return a;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var i=t.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;i&&a&&i(a)}))}),e);return n.set(i,a={id:i,observer:s,elements:t}),a}(a),s=t.id,u=t.observer,o=t.elements;return o.set(e,i),u.observe(e),function(){o.delete(e),u.unobserve(e),0===o.size&&(u.disconnect(),n.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:i}))}),[a,i,c]);return s.useEffect((function(){if(!o&&!c){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[c]),[p,c]};var s=a(7294),u=a(3447),o="undefined"!==typeof IntersectionObserver;var n=new Map},8997:function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.toBase64=function(e){return window.btoa(e)}},2562:function(e,i,a){"use strict";a.r(i);var t=a(5893),s=a(5675),u=a(4476),o=a.n(u),n=a(6066);i.default=function(){return(0,t.jsxs)(n.Z,{pageTitle:"Home Page",children:[(0,t.jsx)(s.default,{src:"/images/profile.png",width:200,height:200}),(0,t.jsx)("h1",{className:o()["title-homepage"],children:"Welcome Rafi"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)(s.default,{src:"/images/nuxtjs.png",width:100,height:100}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)(s.default,{src:"/images/react.png",width:100,height:100}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate tempora dolor facere, assumenda doloremque nihil fugit placeat asperiores, adipisci hic aspernatur. Aspernatur, aperiam quas reprehenderit quae animi aut! Blanditiis, dolores? Excepturi, perspiciatis quia totam sint praesentium minus commodi consequuntur exercitationem asperiores illum delectus ea perferendis amet assumenda inventore autem possimus reiciendis esse quidem quos omnis facilis laboriosam? Fugit, voluptatem omnis. Neque delectus fuga in enim velit nesciunt veniam commodi eligendi, nobis obcaecati sapiente ipsam consectetur quos sit praesentium dolore modi cupiditate omnis minima quasi! Eveniet exercitationem ex error facere optio? Molestias, quae illum id placeat deleniti fugiat! Placeat minima mollitia repellat, excepturi rerum debitis. Laborum distinctio modi quia neque quas quisquam dolores quae blanditiis voluptatem, natus placeat officiis vitae cumque? Non voluptatum eveniet illo praesentium excepturi dignissimos ducimus alias eos, corporis nihil? Cum nisi soluta tempora atque quam dicta a voluptatem voluptate voluptatum, iusto placeat veritatis nulla possimus, minus quasi? Iure eligendi nobis alias sapiente eos placeat obcaecati perferendis incidunt expedita voluptatibus tenetur accusamus dolorem harum, veniam, blanditiis mollitia ipsum odit, ut sunt architecto quisquam quibusdam sed repudiandae porro. Excepturi. Recusandae dicta sapiente, ex laborum debitis ducimus aliquid explicabo placeat ea. Ab quaerat vel molestiae iste. Omnis blanditiis impedit alias quam consequuntur ipsum, debitis quae voluptas quaerat temporibus. Deleniti, placeat? Temporibus fugiat dolorum ullam quas necessitatibus consequuntur ex provident ea ad veniam obcaecati quisquam laboriosam quos, inventore explicabo nesciunt ab perferendis eaque. Tenetur fugiat laboriosam iste officia recusandae sed dignissimos? Exercitationem, temporibus. Iste saepe molestiae totam eveniet officiis! Dignissimos quo at eius minus aperiam illo veniam itaque neque aut odio deleniti reprehenderit ab quis unde quidem, accusantium delectus non doloremque. At commodi molestias cumque vitae eveniet. Qui doloribus quaerat numquam debitis officiis aut mollitia. Asperiores praesentium rerum quo perspiciatis eligendi, quasi, id earum quas optio, sunt blanditiis nesciunt facilis consequatur."}),(0,t.jsx)(s.default,{src:"/images/next.jpeg",width:100,height:100})]})}},5301:function(e,i,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(2562)}])},9696:function(e){e.exports={title:"Footer_title__8WFkX"}},3111:function(e){e.exports={container:"Header_container__3BetX",list:"Header_list__3eyR4",item:"Header_item__1qvUh"}},4476:function(e){e.exports={"title-homepage":"Home_title-homepage__1Hria"}},3342:function(e){e.exports={container:"Layout_container__1SPwL",content:"Layout_content__ITFy4"}},5809:function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.imageConfigDefault=i.VALID_LOADERS=void 0;i.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];i.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,i,a){e.exports=a(639)},5675:function(e,i,a){e.exports=a(9917)},1664:function(e,i,a){e.exports=a(2167)}},function(e){e.O(0,[774,888,179],(function(){return i=5301,e(e.s=i);var i}));var i=e.O();_N_E=i}]);