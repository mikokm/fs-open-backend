(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(14),a=t.n(r),o=t(3),i=t(0),u=function(e){return Object(i.jsxs)(i.Fragment,{children:["filter shown with ",Object(i.jsx)("input",{value:e.filterText,onChange:e.handleFilterChange})]})},s=function(e){var n=e.notification;return console.log(n),null===n?null:Object(i.jsx)("div",{className:n.isError?"error":"notification",children:n.message})},l=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Add new"}),Object(i.jsxs)("form",{onSubmit:e.addPerson,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})]})},d=function(e){var n=e.persons,t=e.deletePerson;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Numbers"}),n.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:[e.name," ",e.number]}),Object(i.jsx)("button",{onClick:function(){return t(e.id,e.name)},children:"delete"})]},e.name)}))]})},j=t(4),b=t.n(j),h="/api/persons",f={getAll:function(){return b.a.get(h)},create:function(e){return b.a.post(h,e)},update:function(e,n){return b.a.put("".concat(h,"/").concat(e),n)},delete:function(e){return b.a.delete("".concat(h,"/").concat(e))}},m=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1];Object(c.useEffect)((function(){f.getAll().then((function(e){return r(e.data)}))}),[]);var a=Object(c.useState)(""),j=Object(o.a)(a,2),b=j[0],h=j[1],m=Object(c.useState)(""),O=Object(o.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),w=v[0],C=v[1],N=Object(c.useState)(null),k=Object(o.a)(N,2),F=k[0],S=k[1],P=function(e,n){S({message:e,isError:n}),setTimeout((function(){return S(null)}),2e3)};return console.log(F),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(s,{notification:F}),Object(i.jsx)(u,{filterText:b,handleFilterChange:function(e){h(e.target.value)}}),Object(i.jsx)(l,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===p})),c={name:p,number:w};if(n){var a="".concat(p," is already added to phonebook, replace the old number with a new one?");window.confirm(a)&&f.update(n.id,c).then((function(e){console.log("here"),r(t.map((function(n){return n.name!==p?n:e.data}))),x(""),C(""),P("Updated ".concat(p),!1)})).catch((function(e){P(e.response.data.error,!0)}))}else f.create(c).then((function(e){r(t.concat(e.data)),x(""),C(""),P("Added ".concat(p),!1)})).catch((function(e){P(e.response.data.error,!0)}))},newName:p,handleNameChange:function(e){x(e.target.value)},newNumber:w,handleNumberChange:function(e){C(e.target.value)}}),Object(i.jsx)(d,{persons:t.filter((function(e){return e.name.toUpperCase().includes(b.toUpperCase())})),deletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&(f.delete(e),r(t.filter((function(n){return n.id!==e}))),P("Deleted ".concat(n),!1))}})]})};t(38);a.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.76ebc601.chunk.js.map