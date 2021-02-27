(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{27:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(28),i=n.n(a),c=n(6),r=n(7),o=n(9),l=n(8),j=n(10),d=n(2),u=(n(39),n(0));var m=function(){return Object(u.jsxs)("div",{className:"Header",children:[Object(u.jsx)("p",{children:"Movie App"}),Object(u.jsx)("a",{href:"https://github.com/eehwan",target:"_blank",rel:"noopener noreferrer",children:"Github Link"})]})};n(41);var b=function(){return Object(u.jsxs)("div",{className:"Navigation",children:[Object(u.jsx)(j.b,{to:"/",children:"Home"}),Object(u.jsx)(j.b,{to:"/about",children:"About"})]})},h=n(16),v=n.n(h),p=n(33);n(48),n(49);var O=function(e){var t=e.id,n=e.year,s=e.title,a=e.summary,i=e.poster,c=e.genres;return Object(u.jsx)(j.b,{to:{pathname:"/detail:".concat(t),state:{key:t,id:t,year:n,title:s,summary:a,poster:i,genres:c}},children:Object(u.jsxs)("div",{className:"Movie",children:[Object(u.jsx)("img",{src:i,alt:"poster",title:s,className:"movie__poster"}),Object(u.jsxs)("div",{className:"movie__data",children:[Object(u.jsx)("div",{className:"movie__title",children:s}),Object(u.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))}),Object(u.jsx)("div",{className:"movie__summary",children:a.length>250?a.slice(0,250)+"...":a})]})]})})},x=n(34),f=n.n(x),y="https://yts-proxy.now.sh/list_movies.json",_=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoaded:!1,movies:[]},e.getMovies=Object(p.a)(v.a.mark((function t(){var n,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(y);case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoaded:!0});case 5:case"end":return t.stop()}}),t)}))),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.isLoaded;return Object(u.jsx)("div",{className:"Home",children:n?Object(u.jsx)("div",{className:"Movies",children:t.map((function(e){return Object(u.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))}):Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("p",{children:"loading..."})})})}}]),n}(s.Component),g=(n(68),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"About",children:Object(u.jsxs)("div",{children:["I made this website to try using front-end Framework.",Object(u.jsx)("br",{}),"This website is using reactJS for front-end Framework."]})})}}]),n}(s.Component)),N=(n(69),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location.state;if(!e)return null;var t=e.id,n=e.year,s=e.title,a=e.summary,i=e.poster,c=e.genres;return Object(u.jsxs)("div",{className:"Detail",children:[Object(u.jsxs)("div",{className:"top",children:[Object(u.jsx)("img",{src:i,alt:"poster",title:s,className:"detail__poster"}),Object(u.jsxs)("div",{className:"detail__data",children:[Object(u.jsxs)("div",{className:"firstLine",children:[Object(u.jsx)("div",{className:"detail__title",children:s}),Object(u.jsx)("div",{className:"detail__year",children:n})]}),Object(u.jsxs)("div",{className:"detail__ID",children:["MovieID : ",t]}),Object(u.jsx)("ul",{className:"detail__genres",children:c.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))})]})]}),Object(u.jsx)("div",{className:"detail__summary",children:a})]})}}]),n}(s.Component)),k=(n(70),n(27),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(b,{}),Object(u.jsx)(d.a,{exact:!0,path:"/",component:_}),Object(u.jsx)(d.a,{path:"/about",component:g}),Object(u.jsx)(d.a,{path:"/detail:id",component:N})]})}}]),n}(s.Component)),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};i.a.render(Object(u.jsx)(k,{}),document.getElementById("root")),w()}},[[71,1,2]]]);
//# sourceMappingURL=main.05b5427f.chunk.js.map