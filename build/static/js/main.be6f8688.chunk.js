(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(51)},37:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),c=n.n(r),i=(n(37),n(5)),u=n(6),s=n(8),A=n(7),l=n(9),p=n(16),m=n.n(p),d="SET_AUTHED_USER",h="RESET_AUTHED_USER";var b=n(4),f=n(1),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={id:null,toHome:!1},n.handleChange=function(e){var t=e.target.value;n.setState(function(){return{id:t}})},n.handleClick=function(e){var t=n.state.id;(0,n.props.dispatch)(function(e){return{type:d,id:e}}(t)),n.setState(function(){return{toHome:!0}})},n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:h})}},{key:"render",value:function(){var e=this,t=this.props.users,n=this.state,a=n.toHome,r=n.id,c=r||"-1",i=(this.props.location.state||{from:{pathname:"/home"}}).from;return a?o.a.createElement(f.a,{to:i}):o.a.createElement("div",{className:"log-in"},o.a.createElement("h3",null,"Welcome to ",o.a.createElement("span",null,"Would You Rather"),"App !"),o.a.createElement("p",null,"Please select a user to log-in"),o.a.createElement("select",{onChange:function(t){return e.handleChange(t)},value:c},o.a.createElement("option",{disabled:!0,value:"-1"},"Select a user..."),Object.keys(t).map(function(e){return o.a.createElement("option",{value:e,key:e},t[e].name)})),o.a.createElement("button",{onClick:function(t){return e.handleClick(t)},disabled:null===r},"Log-in"))}}]),t}(a.Component);var j=Object(f.f)(Object(b.connect)(function(e){return{users:e.users}})(v)),O=n(13),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.asker;return o.a.createElement("div",{className:"question"},o.a.createElement("img",{src:"".concat(n.avatarURL),alt:"avatar"}),o.a.createElement("p",null,n.name," asks:"),o.a.createElement("h4",null,"Would you rather.."),o.a.createElement("span",null,"...",t.optionOne.text,"..."),o.a.createElement("button",null,"View question details"))}}]),t}(a.Component);var q=Object(b.connect)(function(e,t){var n=e.users,a=e.questions[t.id];return{asker:a?n[a.author]:null,question:a}})(E),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={answered:!1},n.handleClick=function(e){n.setState(function(){return{answered:e}})},n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.questions,a=t.authedUser,r=this.state.answered,c=Object.values(n),i=(c=r?c.filter(function(e){return e.optionOne.votes.includes(a)||e.optionTwo.votes.includes(a)}):c.filter(function(e){return!e.optionOne.votes.includes(a)&&!e.optionTwo.votes.includes(a)})).sort(function(e,t){return t.timestamp-e.timestamp});return o.a.createElement("div",{className:"home"},o.a.createElement("button",{onClick:function(t){return e.handleClick(!1)}},"Unanswered Questions"),o.a.createElement("button",{onClick:function(t){return e.handleClick(!0)}},"Answered Questions"),o.a.createElement("ul",null,i.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(O.b,{to:"questions/".concat(e.id)},o.a.createElement(q,{id:e.id})))})))}}]),t}(a.Component);var w=Object(b.connect)(function(e){return{authedUser:e.authedUser,questions:e.questions}})(y),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.list.sort(function(e,t){return t.score-e.score});return o.a.createElement("div",{className:"leaderboard"},o.a.createElement("ul",null,e.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("img",{src:"".concat(e.avatarURL),alt:"avatar"}),o.a.createElement("p",null,e.name),o.a.createElement("h3",null,"# of answered questions:"," ",o.a.createElement("span",null,Object.values(e.answers).length)),o.a.createElement("h3",null,"# of asked questions: ",o.a.createElement("span",null,e.questions.length)),o.a.createElement("h3",null,"Total Score: ",o.a.createElement("span",null,e.score)))})))}}]),t}(a.Component);var g=Object(b.connect)(function(e){var t=e.users,n=Object.values(t);return n.map(function(e){return e.score=e.questions.length+Object.values(e.answers).length}),{list:n}})(x),S=n(30),U=n(10),k=n(3),T={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"data:image/jpeg;base64,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",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},N={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function V(e){return new Promise(function(t,n){var a=e.author,o=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout(function(){N=Object(k.a)({},N,Object(U.a)({},o.id,o)),T=Object(k.a)({},T,Object(U.a)({},a,Object(k.a)({},T[a],{questions:T[a].questions.concat([o.id])}))),t(o)},1e3)})}function R(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,o){setTimeout(function(){T=Object(k.a)({},T,Object(U.a)({},t,Object(k.a)({},T[t],{answers:Object(k.a)({},T[t].answers,Object(U.a)({},n,a))}))),N=Object(k.a)({},N,Object(U.a)({},n,Object(k.a)({},N[n],Object(U.a)({},a,Object(k.a)({},N[n][a],{votes:N[n][a].votes.concat([t])}))))),e()},500)})}(e)}var J="RECEIVE_QUESTIONS",L="ADD_QUESTION",C="ANSWER_QUESTION";function z(e,t){return function(n,a){n(Object(p.showLoading)());var o,r=a().authedUser;return(o={optionOneText:e,optionTwoText:t,author:r},V(o)).then(function(e){n(function(e){return{type:L,question:e}}(e)),n(Object(p.hideLoading)())}).catch(function(){console.error("Error in adding question"),alert("Error saving the question,try again")})}}function G(e){return function(t){return t(Object(p.showLoading)()),R(e).then(function(){t(function(e){return{type:C,info:e}}(e)),t(Object(p.hideLoading)())}).catch(function(){console.error("Error in answering question"),alert("Error saving the question answer,try again")})}}var X="RECEIVE_USERS";function K(){return function(e){e(Object(p.showLoading)()),Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(k.a)({},N))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(k.a)({},T))},1e3)})]).then(function(e){var t=Object(S.a)(e,2);return{questions:t[0],users:t[1]}}).then(function(t){var n=t.questions,a=t.users;e(function(e){return{type:J,questions:e}}(n)),e(function(e){return{type:X,users:e}}(a)),e(Object(p.hideLoading)())})}}var W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authedUser,n=e.users[t];return o.a.createElement("nav",{className:"nav-bar"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(O.c,{to:"/home"},"Home")),o.a.createElement("li",null,o.a.createElement(O.c,{to:"/add"},"New Question")),o.a.createElement("li",null,o.a.createElement(O.c,{to:"/leaderboard"},"Leaderboard")),o.a.createElement("li",{className:"user"},o.a.createElement("img",{src:n.avatarURL,alt:"avatar"}),o.a.createElement("p",null,"Hello, ",o.a.createElement("span",null,n.name)),o.a.createElement(O.c,{to:"/",exact:!0},"Log-out"))))}}]),t}(a.Component);var F=Object(b.connect)(function(e){return{authedUser:e.authedUser,users:e.users}})(W),H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={answer:""},n.handleVote=function(e){n.setState(function(){return{answer:e}})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.answer,a=n.props,o=a.dispatch,r=a.id;o(G({authedUser:a.authedUser,qid:r,answer:t}))},n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.answered,a=t.question,r=t.percentage1,c=t.percentage2,i=t.users,u=t.votes1,s=t.votes2,A=t.totalVotes,l=t.id,p=t.authedUser,m=a?i[a.author]:null,d=a?i[p].answers[l]:null;return a?o.a.createElement("div",{className:"question-page"},o.a.createElement("img",{alt:"avatar",src:"".concat(m.avatarURL)}),n?o.a.createElement("p",null,"Asked by ",o.a.createElement("span",null,m.name)):o.a.createElement("p",null,o.a.createElement("span",null,m.name," "),"asks:"),n?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Results:"),o.a.createElement("h4",{className:"optionOne"===d?"bold":null},a.optionOne.text),o.a.createElement("div",null,u," out of ",A," votes"),o.a.createElement("div",null,"Percentage: ",r,"%"),o.a.createElement("br",null),o.a.createElement("h4",{className:"optionTwo"===d?"bold":null},a.optionTwo.text),o.a.createElement("div",null,s," out of ",A," votes"),o.a.createElement("div",null,"Percentage: ",c,"%")):o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Would you rather..?"),o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{type:"radio",onClick:function(t){return e.handleVote("optionOne")},id:"ip1",name:"option"}),o.a.createElement("label",{htmlFor:"ip1"},a.optionOne.text),o.a.createElement("input",{type:"radio",onClick:function(t){return e.handleVote("optionTwo")},id:"ip2",name:"option"}),o.a.createElement("label",{htmlFor:"ip2"},a.optionTwo.text),o.a.createElement("button",{type:"submit",disabled:""===this.state.answer},"Submit")))):o.a.createElement(f.a,{to:"/not-found"})}}]),t}(a.Component);var M=Object(b.connect)(function(e,t){var n=e.authedUser,a=e.users,o=e.questions,r=t.match.params.id,c=o[r],i=!!c&&(c.optionOne.votes.includes(n)||c.optionTwo.votes.includes(n)),u=c&&c.optionOne.votes?c.optionOne.votes.length:0,s=c&&c.optionTwo.votes?c.optionTwo.votes.length:0,A=u+s;return{answered:i,question:c,percentage1:(u/A*100).toFixed(1),percentage2:(s/A*100).toFixed(1),users:a,votes1:u,votes2:s,totalVotes:A,id:r,authedUser:n}})(H),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={toHome:!1,text1:"",text2:""},n.handleSubmit=function(e){e.preventDefault();var t=n.props.dispatch,a=n.state;t(z(a.text1,a.text2)),n.setState(function(){return{toHome:!0}})},n.handleChange=function(e,t){var a=e.target.value;"text1"===t?n.setState(function(){return{text1:a}}):n.setState(function(){return{text2:a}})},n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.toHome?o.a.createElement(f.a,{to:"/home"}):o.a.createElement("div",{className:"new-question"},o.a.createElement("h2",null,"Would you rather..."),o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{name:"optionOne",placeholder:"Option 1 ...",onChange:function(t){return e.handleChange(t,"text1")},value:this.state.text1,type:"text"}),o.a.createElement("span",null,"Or"),o.a.createElement("input",{name:"optionTwo",placeholder:"Option 2 ...",onChange:function(t){return e.handleChange(t,"text2")},value:this.state.text2,type:"text"}),o.a.createElement("button",{type:"submit"},"Add Poll")))}}]),t}(a.Component),I=Object(b.connect)()(D),Y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"not-found"},o.a.createElement("h3",null,"404 Error:Not Found"))}}]),t}(a.Component),Z=n(31);var B=Object(f.f)(Object(b.connect)(function(e){return{authedUser:e.authedUser}})(function(e){var t=e.component,n=Object(Z.a)(e,["component"]);return o.a.createElement(f.b,Object.assign({},n,{render:function(e){return n.authedUser?o.a.createElement(t,e):o.a.createElement(f.a,{to:{pathname:"/",state:{from:e.location}}})}}))})),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(K())}},{key:"render",value:function(){var e=this.props.authedUser;return o.a.createElement(O.a,null,o.a.createElement(a.Fragment,null,o.a.createElement(m.a,null),null!==e&&o.a.createElement(F,null),o.a.createElement("div",{className:"app"},o.a.createElement(f.b,{path:"/",exact:!0,component:j}),o.a.createElement(B,{path:"/home",component:w}),o.a.createElement(B,{path:"/leaderboard",component:g}),o.a.createElement(B,{path:"/questions/:id",component:M}),o.a.createElement(B,{path:"/add",component:I}),o.a.createElement(f.b,{path:"/not-found",component:Y}))))}}]),t}(a.Component);var Q=Object(b.connect)(function(e){return{authedUser:e.authedUser}})(P),_=n(18);var $=Object(_.combineReducers)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.id;case h:return null;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(k.a)({},e,t.users);case L:return Object(k.a)({},e,Object(U.a)({},t.question.author,Object(k.a)({},e[t.question.author],{questions:e[t.question.author].questions.concat([t.question.id])})));case C:return Object(k.a)({},e,Object(U.a)({},t.info.authedUser,Object(k.a)({},e[t.info.authedUser],{answers:Object(k.a)({},e[t.info.authedUser].answers,Object(U.a)({},t.info.qid,t.info.answer))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(k.a)({},e,t.questions);case L:return Object(k.a)({},e,Object(U.a)({},t.question.id,t.question));case C:return Object(k.a)({},e,Object(U.a)({},t.info.qid,Object(k.a)({},e[t.info.qid],Object(U.a)({},t.info.answer,Object(k.a)({},e[t.info.qid][t.info.answer],{votes:e[t.info.qid][t.info.answer].votes.concat([t.info.authedUser])})))));default:return e}},loadingBar:p.loadingBarReducer}),ee=n(28),te=function(e){return function(t){return function(n){console.group(n.type),console.log("The action is:",n);var a=t(n);return console.log("The new state is:",e.getState()),console.groupEnd(),a}}},ne=Object(_.applyMiddleware)(ee.a,te),ae=n(29),oe=Object(_.createStore)($,Object(ae.composeWithDevTools)(ne));c.a.render(o.a.createElement(b.Provider,{store:oe},o.a.createElement(Q,null)),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.be6f8688.chunk.js.map