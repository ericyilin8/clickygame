(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),c=n.n(o),r=n(2),s=n(3),l=n(5),u=n(4),p=n(6),g=(n(15),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).clickedOn=function(){n.props.clicked?n.props.reset():(n.props.updateClicked(n.props.index),n.props.shuffle(),n.props.incScore())},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{onClick:function(){return e.clickedOn()},src:this.props.image})))}}]),t}(i.a.Component));n(16);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};n(17);var m=function(e){return i.a.createElement("h1",{className:"title"},e.children)},h=n(1),f=[];h.forEach(function(e){e.clicked=!1,f.push(e)});var k=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={cardArr:h,score:0,topScore:0},n.shuffle=function(){for(var e=n.state.cardArr,t=[];e.length>0;){var a=Math.floor(Math.random()*e.length),i=e.splice(a,1);t.push(i[0])}t.forEach(function(t){e.push(t)})},n.incScore=function(){n.setState(function(e){return{score:n.state.score+1}}),console.log(f)},n.reset=function(){n.state.score>n.state.topScore&&n.setState(function(e){return{topScore:n.state.score}}),n.setState(function(e){return{score:0}}),h.splice(0,h.length),f.forEach(function(e){e.clicked=!1,h.push(e)}),n.setState(function(e){return{cardArr:h}})},n.updateClicked=function(e){var t=n.state.cardArr;t[e].clicked=!0,n.setState(function(e){return{cardArr:t}})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(m,null,"Clicky Game: Earn a point for clicking a picture once. Click a picture twice and start over!"),i.a.createElement("div",{style:{width:"100%"}},"Score:",this.state.score,i.a.createElement("br",null),"High Score:",this.state.topScore),this.state.cardArr.map(function(t,n){return i.a.createElement(g,{key:n,index:n,shuffle:e.shuffle,incScore:e.incScore,reset:e.reset,image:t.image,clicked:t.clicked,updateClicked:e.updateClicked})}))}}]),t}(a.Component);n(18);c.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c542dc66.chunk.js.map