(this.webpackJsonpprogetto=this.webpackJsonpprogetto||[]).push([[0],{35:function(t,e,n){},36:function(t,e,n){},42:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var r=n(2),s=n(1),c=n.n(s),i=n(27),a=n.n(i),l=(n(35),n(13)),o=n(14),u=n(16),j=n(15),h=(n(36),n(49)),b=n(48),d=n(50);function x(t,e){return O(t,e)+O(t,[-e[0],-e[1]])>=3}function O(t,e){for(var n=[t.lastInserted.colonna,t.lastInserted.riga],r=n[0],s=n[1],c=t.griglia,i=0,a=c[r][s];f(r,s)&&a===c[r][s];i++,r+=e[0],s+=e[1]);return i-1}function f(t,e){return t>=0&&t<7&&e>=0&&e<6}var m=function(t){return x(t,[1,0])||x(t,[0,1])||x(t,[1,1])||x(t,[1,-1])},p=n(11),g=n(12);function v(t){var e="f4square "+(t.valore?t.valore:"");return Object(r.jsx)("button",{onClick:t.onClick,className:e})}var N=function(t){for(var e=[],n=5;n>=0;n--){for(var s=[],c=function(e){s.push(Object(r.jsx)(b.a,{children:Object(r.jsx)(v,{onClick:function(){return t.onClick(e)},valore:t.griglia[e][n]})},e))},i=0;i<7;i++)c(i);e.push(Object(r.jsx)(h.a,{className:"flex-nowrap no-gutters",children:s},n))}return e},k=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).state={history:[{griglia:Array(7).fill(""),lastInserted:{riga:null,colonna:null}}],stepNum:0,xTurn:!0},r}return Object(o.a)(n,[{key:"handleClick",value:function(t){var e=this.state.stepNum,n=this.state.history.slice(0,e+1),r=n[n.length-1],s=r.griglia.slice();if(!(s[t].length>=6)&&!(e>6&&m(r))){var c={riga:s[t].length,colonna:t},i=s[t].concat(this.state.xTurn?"X":"O"),a=s.slice(0,t).concat(i,s.slice(t+1,s.length));this.setState({history:n.concat({griglia:a,lastInserted:c}),stepNum:e+1,xTurn:!this.state.xTurn})}}},{key:"modStep",value:function(t){1===Math.abs(t)&&this.setState({stepNum:this.state.stepNum+t,xTurn:!this.state.xTurn})}},{key:"ricomincia",value:function(){this.setState({history:[{griglia:Array(7).fill(""),lastInserted:{riga:null,colonna:null}}],stepNum:0,xTurn:!0,win:!1})}},{key:"render",value:function(){var t,e=this,n=this.state.stepNum,s=this.state.history;t=n>6&&m(s[n])?" Ha vinto il "+(this.state.xTurn?"Giallo":"Rosso"):n>=42?" Pareggio":" Tocca al "+(this.state.xTurn?"Rosso":"Giallo");var c=" Turno: "+n,i=0===n,a=n===s.length-1;return Object(r.jsxs)("div",{children:[Object(r.jsx)(h.a,{className:"no-gutters",children:Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(h.a,{className:"d-block no-gutters history",children:[Object(r.jsx)(d.a,{className:"d-inline",color:"primary",disabled:i,onClick:function(){return e.modStep(-1)},children:Object(r.jsx)(p.a,{icon:g.a})}),Object(r.jsx)(d.a,{className:"d-inline",color:"primary",disabled:a,onClick:function(){return e.modStep(1)},children:Object(r.jsx)(p.a,{icon:g.b})}),Object(r.jsx)(d.a,{className:"d-inline",color:"primary",onClick:function(){return e.ricomincia()},children:Object(r.jsx)(p.a,{icon:g.c})})]}),Object(r.jsx)(h.a,{className:"justify-content-center no-gutters",children:c}),Object(r.jsx)(h.a,{className:"justify-content-center no-gutters",children:t})]})}),Object(r.jsx)(h.a,{className:"no-gutters",children:Object(r.jsx)(b.a,{className:"p-1 flex-grow-0 mx-auto",children:Object(r.jsx)(N,{onClick:function(t){return e.handleClick(t)},griglia:s[n].griglia})})})]})}}]),n}(s.Component),y=n(29),C=n(51),T=n(52);n(42);function w(t){var e="squareTris"+(t.selected?" selected":"");return Object(r.jsx)("button",{className:e,onClick:t.onClick,children:t.value})}var I=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"renderSquare",value:function(){for(var t=this,e=[],n=0;n<3;n++){for(var s=[],c=function(e){var c=3*n+e;s.push(Object(r.jsx)(w,{value:t.props.current.squares[c],onClick:function(){return t.props.onClick(c)},selected:t.props.current.buttonclicked===c||!!t.props.winline&&t.props.winline.some((function(t){return t===c}))},e))},i=0;i<3;i++)c(i);e.push(Object(r.jsx)(h.a,{className:"flex-nowrap no-gutters",children:s},n))}return e}},{key:"render",value:function(){return this.renderSquare()}}]),n}(s.Component);function S(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var r=Object(y.a)(e[n],3),s=r[0],c=r[1],i=r[2];if(t[s]&&t[s]===t[c]&&t[s]===t[i])return{winner:t[s],winline:e[n]}}return null}var q=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).state={history:[{squares:Array(9).fill(null),buttonclicked:-1}],stepNumber:0,xIsNext:!0},r}return Object(o.a)(n,[{key:"handleClick",value:function(t){var e=this.state.history.slice(0,this.state.stepNumber+1),n=e[e.length-1].squares.slice();S(n)||n[t]||(n[t]=this.state.xIsNext?"X":"O",this.setState({history:e.concat({squares:n,buttonclicked:t}),stepNumber:e.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(t){this.setState({stepNumber:t,xIsNext:t%2===0})}},{key:"render",value:function(){var t,e=this,n=this.state.history,s=n[this.state.stepNumber],c=S(s.squares),i=n.map((function(t,n){var s=n?"Mossa "+n:Object(r.jsxs)("i",{children:[Object(r.jsx)(p.a,{icon:g.c}),"  Ricomincia partita"]});return Object(r.jsx)("li",{children:Object(r.jsx)(d.a,{color:"primary",onClick:function(){return e.jumpTo(n)},children:s})},n)}));return t=c?"Vincitore: "+c.winner:9===this.state.stepNumber?"Pareggio":"Turno di "+(this.state.xIsNext?"X":"O"),Object(r.jsx)(C.a,{children:Object(r.jsxs)(h.a,{children:[Object(r.jsxs)(b.a,{className:"mx-auto flex-grow-0",children:[Object(r.jsx)(T.a,{color:"primary",children:t}),Object(r.jsx)("div",{className:"mt-2",children:Object(r.jsx)(I,{current:s,onClick:function(t){return e.handleClick(t)},winline:c?c.winline:null})})]}),Object(r.jsx)(b.a,{md:!0,className:"d-block d-md-none",children:Object(r.jsx)("hr",{})}),Object(r.jsx)(b.a,{xs:"7",sm:"5",md:"4",lg:"3",className:"mx-auto history",children:Object(r.jsx)("ol",{children:i})})]})})}}]),n}(s.Component),F=n(19),P=n(4);var R=function(){return Object(r.jsx)("div",{className:"sito",children:Object(r.jsxs)(F.a,{children:[Object(r.jsx)("h1",{children:"Giochi in React"}),Object(r.jsxs)("ul",{className:"header",children:[Object(r.jsx)("li",{children:Object(r.jsx)(F.b,{to:"/",children:"Forza4"})},"h0"),Object(r.jsx)("li",{children:Object(r.jsx)(F.b,{to:"/Tris",children:"Tris"})},"h1")]}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)(P.c,{children:[Object(r.jsxs)(P.a,{exact:!0,path:"/",children:[" ",Object(r.jsx)(k,{})," "]}),Object(r.jsxs)(P.a,{path:"/Tris",children:[" ",Object(r.jsx)(q,{})," "]})]})})]})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),s(t),c(t),i(t)}))};n(45),n(46);a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),A()}},[[47,1,2]]]);
//# sourceMappingURL=main.2483f39c.chunk.js.map