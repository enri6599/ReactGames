(this.webpackJsonpprogetto=this.webpackJsonpprogetto||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(1),c=n.n(s),i=n(27),a=n.n(i),l=(n(35),n(13)),o=n(14),u=n(16),j=n(15),h=(n(36),n(50)),b=n(49),d=n(48),x=n(51);function O(e,t){return m(e,t)+m(e,[-t[0],-t[1]])>=3}function m(e,t){for(var n=[e.lastInserted.colonna,e.lastInserted.riga],r=n[0],s=n[1],c=e.griglia,i=0,a=c[r][s];f(r,s)&&a===c[r][s];i++,r+=t[0],s+=t[1]);return i-1}function f(e,t){return e>=0&&e<7&&t>=0&&t<6}var p=function(e){return O(e,[1,0])||O(e,[0,1])||O(e,[1,1])||O(e,[1,-1])},g=n(11),v=n(12);function N(e){var t="f4square "+(e.valore?e.valore:"");return Object(r.jsx)("button",{onClick:e.onClick,className:t})}var k=function(e){for(var t=[],n=5;n>=0;n--){for(var s=[],c=function(t){s.push(Object(r.jsx)(d.a,{children:Object(r.jsx)(N,{onClick:function(){return e.onClick(t)},valore:e.griglia[t][n]})},t))},i=0;i<7;i++)c(i);t.push(Object(r.jsx)(b.a,{className:"flex-nowrap no-gutters",children:s},n))}return Object(r.jsx)(h.a,{className:"no-gutters",children:t})},y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={history:[{griglia:Array(7).fill(""),lastInserted:{riga:null,colonna:null}}],stepNum:0,xTurn:!0},r}return Object(o.a)(n,[{key:"handleClick",value:function(e){var t=this.state.stepNum,n=this.state.history.slice(0,t+1),r=n[n.length-1],s=r.griglia.slice();if(!(s[e].length>=6||t>6&&p(r))){var c={riga:s[e].length,colonna:e},i=s[e].concat(this.state.xTurn?"X":"O"),a=s.slice(0,e).concat(i,s.slice(e+1,s.length));this.setState({history:n.concat({griglia:a,lastInserted:c}),stepNum:t+1,xTurn:!this.state.xTurn})}}},{key:"modStep",value:function(e){1===Math.abs(e)&&this.setState({stepNum:this.state.stepNum+e,xTurn:!this.state.xTurn})}},{key:"ricomincia",value:function(){this.setState({history:[{griglia:Array(7).fill(""),lastInserted:{riga:null,colonna:null}}],stepNum:0,xTurn:!0})}},{key:"render",value:function(){var e,t=this,n=this.state.stepNum,s=this.state.history;e=n>6&&p(s[n])?" Ha vinto il "+(this.state.xTurn?"Giallo":"Rosso"):n>=42?" Pareggio":" Tocca al "+(this.state.xTurn?"Rosso":"Giallo");var c=" Turno: "+n,i=0===n,a=n===s.length-1;return Object(r.jsxs)(h.a,{className:"no-gutters mx-auto",fluid:!0,children:[Object(r.jsx)(b.a,{className:"no-gutters",children:Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(b.a,{className:"d-block no-gutters history",children:[Object(r.jsx)(x.a,{className:"d-inline",color:"primary",disabled:i,onClick:function(){return t.modStep(-1)},children:Object(r.jsx)(g.a,{icon:v.a})}),Object(r.jsx)(x.a,{className:"d-inline",color:"primary",disabled:a,onClick:function(){return t.modStep(1)},children:Object(r.jsx)(g.a,{icon:v.b})}),Object(r.jsx)(x.a,{className:"d-inline",color:"primary",onClick:function(){return t.ricomincia()},children:Object(r.jsx)(g.a,{icon:v.c})})]}),Object(r.jsx)(b.a,{className:"justify-content-center",children:c}),Object(r.jsx)(b.a,{className:"justify-content-center",children:e})]})}),Object(r.jsx)(b.a,{children:Object(r.jsx)(d.a,{className:"p-1 flex-grow-0 mx-auto",children:Object(r.jsx)(k,{onClick:function(e){return t.handleClick(e)},griglia:s[n].griglia})})})]})}}]),n}(s.Component),C=n(29),T=n(52);n(42);function w(e){var t="squareTris"+(e.selected?" selected":"");return Object(r.jsx)("button",{className:t,onClick:e.onClick,children:e.value})}var I=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderSquare",value:function(){for(var e=this,t=[],n=0;n<3;n++){for(var s=[],c=function(t){var c=3*n+t;s.push(Object(r.jsx)(w,{value:e.props.current.squares[c],onClick:function(){return e.props.onClick(c)},selected:e.props.current.buttonclicked===c||!!e.props.winline&&e.props.winline.some((function(e){return e===c}))},t))},i=0;i<3;i++)c(i);t.push(Object(r.jsx)(b.a,{className:"flex-nowrap no-gutters",children:s},n))}return t}},{key:"render",value:function(){return this.renderSquare()}}]),n}(s.Component);function S(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(C.a)(t[n],3),s=r[0],c=r[1],i=r[2];if(e[s]&&e[s]===e[c]&&e[s]===e[i])return{winner:e[s],winline:t[n]}}return null}var q=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null),buttonclicked:-1}],stepNumber:0,xIsNext:!0},r}return Object(o.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();S(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat({squares:n,buttonclicked:e}),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,s=n[this.state.stepNumber],c=S(s.squares),i=n.map((function(e,n){var s=n?"Mossa "+n:Object(r.jsxs)("i",{children:[Object(r.jsx)(g.a,{icon:v.c}),"  Ricomincia partita"]});return Object(r.jsx)("li",{children:Object(r.jsx)(x.a,{color:"primary",onClick:function(){return t.jumpTo(n)},children:s})},n)}));return e=c?"Vincitore: "+c.winner:9===this.state.stepNumber?"Pareggio":"Turno di "+(this.state.xIsNext?"X":"O"),Object(r.jsx)(h.a,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(d.a,{className:"mx-auto flex-grow-0",children:[Object(r.jsx)(T.a,{color:"primary",children:e}),Object(r.jsx)("div",{className:"mt-2",children:Object(r.jsx)(I,{current:s,onClick:function(e){return t.handleClick(e)},winline:c?c.winline:null})})]}),Object(r.jsx)(d.a,{md:!0,className:"d-block d-md-none",children:Object(r.jsx)("hr",{})}),Object(r.jsx)(d.a,{xs:"7",sm:"5",md:"4",lg:"3",className:"mx-auto history",children:Object(r.jsx)("ol",{children:i})})]})})}}]),n}(s.Component),F=n(19),P=n(4);var R=function(){return Object(r.jsx)("div",{className:"sito",children:Object(r.jsxs)(F.a,{children:[Object(r.jsx)("h1",{children:"Giochi in React"}),Object(r.jsxs)("ul",{className:"header",children:[Object(r.jsx)("li",{children:Object(r.jsx)(F.b,{to:"/",children:"Forza4"})},"h0"),Object(r.jsx)("li",{children:Object(r.jsx)(F.b,{to:"/Tris",children:"Tris"})},"h1")]}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)(P.c,{children:[Object(r.jsxs)(P.a,{exact:!0,path:"/",children:[" ",Object(r.jsx)(y,{})," "]}),Object(r.jsxs)(P.a,{path:"/Tris",children:[" ",Object(r.jsx)(q,{})," "]})]})})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))};n(45),n(46);a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),A()}},[[47,1,2]]]);
//# sourceMappingURL=main.d39501cc.chunk.js.map