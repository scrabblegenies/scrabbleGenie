(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/windows.23d5e9bf.png"},27:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},49:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=(a(32),a(26)),s=a(2),i=a(3),u=a(6),m=a(4),h=a(9),p=a(5),d=a(24),E=a.n(d),b=(a(49),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",onChange:this.props.onChange,value:this.props.firstLetter,maxLength:"20",placeholder:"start typing something"})))}}]),t}(n.Component)),f=(a(50),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={time:new Date},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return r.a.createElement("div",{className:"clock"},r.a.createElement("p",null,this.state.time.toLocaleTimeString()))}}]),t}(n.Component)),g=a(11),v=a(8),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,this.props.globalError?r.a.createElement("p",{className:"letterOrNumber"},"Please enter a letter or number"):this.props.wholeWordResult.map(function(t,a){return r.a.createElement("li",{key:a,className:"autocompleteItem",tabindex:"0",onClick:e.props.handleClick},t)}))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.props.returnError?r.a.createElement("div",{class:"errorPopup",id:"error"},r.a.createElement("div",{class:"topBanner"},r.a.createElement("p",{class:"error"},"ERROR"),r.a.createElement("button",{class:"x",onClick:this.props.closePopup},"X")),r.a.createElement("p",{class:"errorMessage"},"The word you have entered has no results.")):null)}}]),t}(n.Component),j=a(25),k=a.n(j),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"startButton",onMouseDown:this.props.handleMouseDown},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{className:"windows",src:k.a,alt:"retro windows logo"})),r.a.createElement("p",{className:"start"},"Start"))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="startMenu hide";return this.props.menuVisibility&&(e="startMenu show"),r.a.createElement("div",{className:e},r.a.createElement("div",{className:"sideBanner"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/RobertJinChun"},"Robert Chun")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/Lobst3rDev"},"Geoff Grossman")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/LC_butWithCode"},"Laura Chuang")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/beckyiscoding"},"Becky Robinson")),r.a.createElement("li",{className:"datamuse"},r.a.createElement("a",{href:"https://www.datamuse.com/api/"},"Made using the Datamuse API."))))}}]),t}(n.Component),N=r.a.createElement(g.a,{"aria-hidden":"true",icon:v.a}),M=r.a.createElement(g.a,{"aria-hidden":"true",icon:v.c}),D=r.a.createElement(g.a,{"aria-hidden":"true",icon:v.b}),R=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).closePopup=function(){e.setState({returnError:!1})},e.handleClick=function(t){e.setState({selectedItem:t.target.innerText},function(){console.log(e.state.selectedItem)})},e.handleTextChange=function(t){var a=t.target.value,n=RegExp("([sA-Za-z0-9])"),r=Object(c.a)(a),o=!1;r.map(function(e){return!0===!n.test(e)&&(o=!0),o}),r.length>0&&!1===o?(e.axiosCall(a),e.setState({globalError:!1},function(){})):e.setState({globalError:!0},function(){})},e.axiosCall=function(e){var t=this,a=[],n=!1;E()({url:"http://api.datamuse.com/sug?max=10&k=VQE6va&s=".concat(e),method:"GET"}).then(function(e){e.data.map(function(e,t){return a.push(e.word)}),console.log(a),t.setState({wholeWordResult:a},function(){console.log(t.state.wholeWordResult.length),n=0===t.state.wholeWordResult.length}),t.setState({returnError:n},function(){})}).catch(function(e){})},e.state={isLoading:!0,globalError:!1,returnError:!1,wholeWordResult:[],wholeWord:[],filteredArray:[],visible:!1},e.handleMouseDown=e.handleMouseDown.bind(Object(h.a)(e)),e.toggleMenu=e.toggleMenu.bind(Object(h.a)(e)),e.handleClick=e.handleClick.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleMouseDown",value:function(e){console.log("clicked",e.target),this.toggleMenu(),e.stopPropagation()}},{key:"toggleMenu",value:function(){this.setState({visible:!this.state.visible}),console.log(this.state.visible)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"tabBar"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement("p",{class:"icon"},N),r.a.createElement("p",{class:"icon"},M),r.a.createElement("p",{class:"icon"},D))),r.a.createElement("div",{className:"searchEngine"},r.a.createElement("h1",null,"Autocomplete"),r.a.createElement("div",{className:"inputsContainer"},r.a.createElement("div",{className:"userInput"},r.a.createElement(b,{id:"userInput",onChange:this.handleTextChange,data:this.state.data})),r.a.createElement("div",{className:"userOutput"},r.a.createElement(w,{wholeWordResult:this.state.wholeWordResult,globalError:this.state.globalError,handleClick:this.handleClick})),r.a.createElement(O,{returnError:this.state.returnError,closePopup:this.closePopup}))))),r.a.createElement("footer",null,r.a.createElement(y,{handleMouseDown:this.handleMouseDown}),r.a.createElement(C,{menuVisibility:this.state.visible}),r.a.createElement(f,{className:"clock"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.388de686.chunk.js.map