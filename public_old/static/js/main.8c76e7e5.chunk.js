(this["webpackJsonpcr-web"]=this["webpackJsonpcr-web"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},74:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(16),s=a.n(n),l=(a(49),a(3)),r=(a(50),a(10)),d=a(8),o=a(7),j=a.n(o),b=a(9),h=function(e){return sessionStorage.getItem("user")?{type:"LOGIN",payload:sessionStorage.getItem("user")}:(sessionStorage.setItem("user",e),{type:"LOGIN",payload:e})},u=function(){return{type:"LOGOUT"}},x=function(){return{type:"RESETDASH",payload:null}},g="data:image/png;base64,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",p=(a(74),Object(b.b)((function(e){return{vehicleID:e.data.vehicleID,login:e.data.login,logout:e.data.logout,email:e.data.email,registeredUser:e.data.registeredUser,deletedUser:e.data.deletedUser,newemail:e.data.newemail}}),{logins:h,reset:function(){return{type:"RESET"}}})((function(e){e.logins;var t=e.login,a=e.logout,i=e.newemail,n=e.deletedUser;e.vehicleID;window.location.replace("/#/vehicles");var s=Object(c.useState)(""),d=Object(l.a)(s,2),o=(d[0],d[1],Object(c.useState)(!0)),j=Object(l.a)(o,2),b=(j[0],j[1],Object(c.useState)("")),h=Object(l.a)(b,2),u=(h[0],h[1]),x=Object(c.useState)(!1),g=Object(l.a)(x,2),p=(g[0],g[1]),O=Object(c.useState)(""),m=Object(l.a)(O,2),f=(m[0],m[1]);Object(r.g)();Object(c.useEffect)((function(){""!=n&&(f(!0),p(!1),u(!1)),!1===t&&!1===a&&(p(!0),u(!1),f(!1)),""!=i&&(u(!0),p(!1),f(!1))}),[]);return null}))),O=(a.p,a.p,a(79),a(0));var m=Object(b.b)((function(e){return{email:e.data.email}}),{logout:u})((function(e){return e.email,e.logout,Object(r.g)(),Object(O.jsx)("div",{style:{width:"75%",margin:"0 auto"},children:Object(O.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light",style:{paddingTop:"20px"},children:[Object(O.jsx)("img",{style:{marginLeft:"30px",marginRight:"25px"},src:g,height:25,width:130}),Object(O.jsx)("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsxs)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:[Object(O.jsx)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",id:"myDIV",children:Object(O.jsx)("li",{className:"nav-item btn",children:Object(O.jsx)(d.c,{activeStyle:{borderBottom:"2px solid black"},className:"nav-link text-dark",to:"/vehicles",children:"Vehicles"})})}),Object(O.jsxs)("form",{className:"form-inline my-2 my-lg-0",style:{marginRight:"70px"},children:[Object(O.jsx)(d.b,{className:"btn btn-outline-danger my-2 my-sm-0 buttoncolor",style:{textAlign:"center",fontWeight:"500",lineHeight:"1.5",borderRadius:"6px"},to:"/addvehicles",children:"+ New Vehicle"})," "]})]})]})})})),f=(a(81),a(98));var v=Object(b.b)((function(e){return{email:e.data.email,vehicleID:e.data.vehicleID}}),{startRides:function(e,t){return function(a){try{j.a.put("api/vehicles/"+t+"/checkout",{email:e,vechicle_id:t}).then((function(e){alert("AS"),console.log("Ride with vehicle '"+t+"' started correctly."),a({type:"STARTRIDE",payload:e})})).catch((function(e){console.log("Caught error:"),console.log(e)}))}catch(c){console.log("try/catch error caught."),console.log(c)}}},resetDash:x})((function(e){e.email;var t,a=e.vehicleID,i=(e.resetDash,Object(c.useState)([])),n=Object(l.a)(i,2),s=n[0],r=n[1],o=Object(c.useState)(""),b=Object(l.a)(o,2),h=b[0],u=b[1],x=Object(c.useState)(""),g=Object(l.a)(x,2),p=g[0],m=g[1];null!=a&&(t="NOT DELETED: "===a.slice(0,13)?'DID NOT DELETE VEHICLE "'+a.slice(13)+'" BECAUSE IT IS CURRENTLY IN USE.':"Deleted vehicle '"+a+"'."),Object(c.useEffect)((function(){j.a.get("/api/vehicles?max_vehicles=20").then((function(e){r(e.data),m(null!=a)})).catch((function(e){}))}),[a]);var v=function(){j.a.put("/api/vehicles/"+h+"/checkout",{vehicle_id:h}).then((function(e){})).catch((function(e){console.log("Exception caught and ignored. \ntag: ca5e0cab-fe71-4978-8092-45abeb8eff82\nerror: "+e+"\n\nMessage: "+e.message)}))};return Object(O.jsxs)("div",{className:"container",style:{paddingLeft:"0px",paddingRight:"0px"},children:[Object(O.jsx)("h1",{style:{margin:"20px",textAlign:"center"},children:"Vehicles"}),Object(O.jsxs)(f.a,{color:"warning",style:{padding:"20px"},isOpen:p,children:["'",t,"'"]}),Object(O.jsx)("p",{className:"text-left",children:"Below is a list of all* vehicles, their location, and their status."}),Object(O.jsx)("div",{className:"row",children:s.map((function(e){return Object(O.jsx)("div",{className:"col-lg-4 col-md-6",style:{display:"flex",justifyContent:"center",marginBottom:"25px"},children:Object(O.jsxs)("div",{className:"card",style:{width:"100%"},children:[Object(O.jsx)("div",{className:"topboders",style:{height:"170px"}}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"40px"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("h4",{className:"card-title text-left text-capitalize",children:e.vehicle_type})}),Object(O.jsx)("div",{children:e.in_use?Object(O.jsxs)("p",{className:"card-title text-right",children:[Object(O.jsx)("span",{style:{color:"#FF8C00"},children:"\u25cf"})," ","Unavailable"]}):Object(O.jsxs)("p",{className:"card-title text-right",children:[Object(O.jsx)("span",{style:{color:"lightgreen"},children:"\u25cf"})," ","Available"]})})]}),Object(O.jsx)(d.b,{to:"/vehicledetail/".concat(e.id),className:"btn btn-danger",style:{width:"80%",backgroundColor:"#FF3565",height:"calc(1.5em + 1.125rem + 2px)"},children:"See Vehicle"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{className:"text-left",children:"ID"}),Object(O.jsx)("p",{className:"card-text text-left",children:e.id}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"start"},children:[Object(O.jsxs)("div",{className:"text-left",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Longitude"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:Number.isInteger(e.last_longitude)?e.last_longitude+".0":e.last_longitude})})]}),Object(O.jsxs)("div",{className:"text-left",style:{marginLeft:"70px"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Latitude"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text text-left",children:Number.isInteger(e.last_latitude)?e.last_latitude+".0":e.last_latitude})})]}),Object(O.jsx)("input",{type:"hidden",value:e.vehicle_id})]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"start"},children:Object(O.jsx)("input",{type:"hidden",value:e.vehicle_id})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"start"},children:Object(O.jsxs)("div",{className:"text-left",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Battery"})}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{className:"card-text",children:[e.battery,"%"]})})]})})," ",Object(O.jsx)("hr",{}),e.in_use?null:Object(O.jsx)(d.b,{onClick:v,onFocus:function(){return u(e.id)},to:"/ridedetail/".concat(e.id,"/false"),className:"btn btn-danger",style:{width:"100%",backgroundColor:"#FF3565",height:"calc(1.5em + 1.125rem + 2px)"},children:"Start ride"})]})]})},e.id)}))}),Object(O.jsx)("p",{children:"* The query is limited to the first 20 vehicles in the table to ensure quick rendering, but there may be many more rows in the table."})]})}));a(89);var y=Object(b.b)((function(e){return{email:e.data.email}}),{endRides:function(e){return function(e){e({type:"ENDRIDE"})}}})((function(e){e.rides,e.endRides;var t=e.email,a=Object(c.useState)([]),i=Object(l.a)(a,2),n=i[0],s=i[1];return Object(c.useEffect)((function(){j.a.get("/api/rides?email="+sessionStorage.getItem("user")).then((function(e){s(e.data)}))}),[]),n?Object(O.jsxs)("div",{className:"container",style:{paddingLeft:"0px",paddingRight:"0px",minWidth:"1250px"},children:[Object(O.jsx)("h1",{style:{margin:"20px",textAlign:"center",fontSize:"42px"},children:"Rides"}),Object(O.jsxs)("p",{className:"text-center",children:["You are logged in as ",t,". Go to the"," ",Object(O.jsx)(d.b,{className:"text-danger",to:"/vehicles",children:"Vehicles"})," ","page to start a ride."]}),Object(O.jsx)("br",{}),n.map((function(e){return Object(O.jsxs)("div",{style:{width:"100%",lineHeight:"2",fontSize:"15px"},children:[Object(O.jsxs)("div",{className:"text",children:[Object(O.jsx)("div",{className:"text-left",style:{marginRight:"20px"},children:Object(O.jsxs)("h5",{children:["Vehicle ID: ",e.id]})}),Object(O.jsx)("div",{children:e.end_time?Object(O.jsxs)("p",{className:"card-title text-right",children:[Object(O.jsx)("span",{style:{color:"#FF8C00"},children:"\u25cf"})," Inactive"]}):Object(O.jsxs)("p",{className:"card-title text-right",children:[Object(O.jsx)("span",{style:{color:"lightgreen"},children:"\u25cf"})," Active"]})})]}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"start",alignItems:"center",alignSelf:"center"},children:[Object(O.jsxs)("div",{className:"text-left",style:{marginRight:"30px"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Start time"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:e.start_time})})]}),Object(O.jsxs)("div",{style:{marginLeft:"80px"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"End time"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:e.end_time?e.end_time:"None"})})]}),e.end_time?null:Object(O.jsx)(d.b,{to:"/ridedetail/".concat(e.id,"/true"),className:"btn btn-danger",style:{marginLeft:"80px",backgroundColor:"#FF3565",width:"10%",height:"calc(1.5em + 1.125rem + 2px)"},children:"View ride"})]}),Object(O.jsx)("hr",{})]},e.id)}))]}):null}));a(90);var N=Object(b.b)((function(e){return{vehicles:e.data.vehicles,email:e.data.email,newVehicleID:e.data.newVehicleID}}),{AddNewVehicleID:function(e){return{type:"NEWVEH",payload:e}}})((function(e){e.AddVehicle,e.newVehicleID;var t=e.AddNewVehicleID,a=Object(c.useState)("Bike"),i=Object(l.a)(a,2),n=i[0],s=i[1],o=Object(c.useState)(""),b=Object(l.a)(o,2),h=b[0],u=b[1],x=Object(c.useState)(""),g=Object(l.a)(x,2),p=g[0],m=g[1],f=Object(c.useState)(""),v=Object(l.a)(f,2),y=v[0],N=v[1],E=Object(r.g)(),S=Object(c.useState)(""),w=Object(l.a)(S,2),I=w[0],C=w[1],A=Object(c.useState)(""),D=Object(l.a)(A,2),R=D[0],L=D[1],V=Object(c.useState)(""),F=Object(l.a)(V,2),B=F[0],k=F[1],T=Object(c.useState)(!1),U=Object(l.a)(T,2),H=U[0],W=U[1],P=Object(c.useState)(!1),X=Object(l.a)(P,2),z=X[0],q=X[1],G=Object(c.useState)(!1),Q=Object(l.a)(G,2),J=Q[0],Y=Q[1],K=Object(c.useState)(!1),Z=Object(l.a)(K,2),M=(Z[0],Z[1],Object(c.useState)(!1)),_=Object(l.a)(M,2);return _[0],_[1],Object(O.jsxs)("div",{className:"container",style:{paddingLeft:"0px",paddingRight:"0px"},children:[Object(O.jsx)("h1",{style:{margin:"20px",textAlign:"center",fontSize:"43px"},children:"Add a vehicle"}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"start",alignItems:"center",marginTop:"20px",marginBottom:"90px",width:"800px"},children:Object(O.jsx)("div",{style:{width:"400px"},children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Type"}),Object(O.jsxs)("select",{className:"form-control",onChange:function(e){s(e.target.value)},style:{height:"calc(1.5em + 1.125rem + 2px)"},children:[Object(O.jsx)("option",{value:"Bike",children:"Bike"}),Object(O.jsx)("option",{value:"Scooter",children:"Scooter"}),Object(O.jsx)("option",{value:"Skateboard",children:"Skateboard"})]})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputPassword1",children:"Longitude"}),Object(O.jsx)("input",{onChange:function(e){u(e.target.value),isNaN(e.target.value)||""==e.target.value||e.target.value>180||e.target.value<-180?Y(!1):(Y(!0),k(!0))},style:{height:"calc(1.5em + 1.125rem + 2px)"},type:"text",class:"form-control"}),!1===B?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Longitude must be between -180 and 180."})}):null]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputPassword1",children:"Latitude"}),Object(O.jsx)("input",{onChange:function(e){m(e.target.value),isNaN(e.target.value)||""==e.target.value||e.target.value>90||e.target.value<-90?q(!1):(q(!0),L(!0))},style:{height:"calc(1.5em + 1.125rem + 2px)"},type:"text",class:"form-control"}),!1===R?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Latitude must be between -90 and 90."})}):null]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputPassword1",children:"Battery (percent)"}),Object(O.jsx)("input",{onChange:function(e){N(e.target.value),isNaN(e.target.value)||""==e.target.value||e.target.value>100||e.target.value<0||e.target.value.includes(".")?W(!1):(W(!0),C(!0))},style:{height:"calc(1.5em + 1.125rem + 2px)"},type:"text",class:"form-control"}),!1===I?Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Not a valid integer value"}),Object(O.jsx)("p",{children:"Battery (percent) must be between 0 and 100"})]}):null]}),Object(O.jsx)(d.b,{onMouseDown:function(e){e.preventDefault(),J||k(!1),z||L(!1),H||C(!1),J&&z&&H&&j.a.post("/api/vehicles/add",{vehicle_type:String(n),latitude:parseFloat(p),longitude:parseFloat(h),battery:Number(y)}).then((function(e){setTimeout((function(){t(e.data),E.push("/vehicledetail/".concat(e.data))}),1e3)})).catch((function(e){}))},class:"btn btn-danger form-control",style:{backgroundColor:"#FF3565",height:"calc(1.5em + 1.125rem + 2px)"},children:"Add vehicle"})]})})})]})}));var E=Object(b.b)((function(e){return{email:e.data.email}}),{deleteUserConfirm:function(e){return{type:"DELETEDUSER",payload:e}},logout:u})((function(e){var t=e.email,a=e.deleteUserConfirm,i=(e.logout,Object(c.useState)("")),n=Object(l.a)(i,2),s=n[0],o=n[1],b=Object(r.g)();return Object(c.useEffect)((function(){j.a.get("/api/users?email="+t).then((function(e){setTimeout((function(){o(e.data)}),1e3)})).catch((function(e){}))}),[]),s?Object(O.jsxs)("div",{className:"container",style:{paddingLeft:"0px",paddingRight:"0px"},children:[Object(O.jsxs)("h1",{style:{margin:"20px",fontWeight:"bold",textAlign:"center"},children:[s.user.first_name," ",s.user.last_name]}),Object(O.jsxs)("p",{style:{marginLeft:"40px"},children:["You are logged in as ",s.user.email]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"start",flexDirection:"column",textAlign:"left",border:"1px solid",borderColor:"#E9E9E9"},children:Object(O.jsxs)("table",{className:"table text-left",style:{border:"1px solid black",marginLeft:"50px",marginTop:"15px",width:"400px"},children:[Object(O.jsx)("tr",{children:Object(O.jsx)("td",{style:{textAlign:"center",height:"60px",padding:"30px",borderTopColor:"black",fontWeight:"700",color:"#737491"},children:"Phone Number(s)"})}),0!=s.user.phone_numbers.length?s.user.phone_numbers.map((function(e){return Object(O.jsx)("tr",{children:Object(O.jsx)("td",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"0px",borderTopColor:"black",color:"#737491"},children:e})})})):null]})}),Object(O.jsx)("div",{style:{padding:"20px",backgroundColor:"#FFF9F2",width:"18rem",marginTop:"30px"},children:Object(O.jsx)(d.b,{to:"/",className:"btn btn-danger",style:{backgroundColor:"#FF3565",width:"100%",height:"calc(1.5em + 1.125rem + 2px)"},onClick:function(){j.a.delete("/api/users/delete?email="+t).then((function(e){a(e.data),setTimeout((function(){sessionStorage.clear(),a(e.data)}),1500)})).catch((function(e){sessionStorage.clear(),b.push("/")})).then((function(){sessionStorage.clear(),b.push("/")}))},children:"Delete my account"})})]}):null})),S=(a(91),a(92),Object(b.b)((function(e){return{vehicles:e.data.vehicles,email:e.data.email,RideEndDetails:e.data.RideEndDetails,newVehicleID:e.data.newVehicleID}}),{removedVehicle:function(e){return{type:"REMOVEDVEHICLE",payload:e}},resetDash:x})((function(e){var t=e.match,a=(e.email,e.removedVehicle),i=e.newVehicleID,n=e.RideEndDetails,s=e.resetDash,r=Object(c.useState)(""),o=Object(l.a)(r,2),b=o[0],h=o[1],u=Object(c.useState)(""),x=Object(l.a)(u,2),g=x[0],p=x[1],m=Object(c.useState)(""),v=Object(l.a)(m,2),y=v[0],N=v[1];Object(c.useEffect)((function(){p(t.params.id),N(""!=i),j.a.get("/api/vehicles/"+t.params.id).then((function(e){h(e.data)})).catch((function(e){console.log("Exception caught and ignored. \ntag: 04c7e810-1382-4943-8b92-d4b0a9643409\nerror: {error}\n\nMessage: {error.message}")})).then((function(e){setTimeout((function(){N(!1),s()}),1e4)})),setTimeout((function(){s()}),1e4)}),[]);return b?Object(O.jsxs)("div",{style:{margin:"20px",textAlign:"center"},children:[Object(O.jsxs)("h1",{children:["Vehicle ",b.id]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(f.a,{color:"warning",style:{padding:"20px"},isOpen:n.length>0,children:n[0]}),Object(O.jsx)(f.a,{color:"warning",style:{padding:"20px"},isOpen:n.length>0,children:n[1]}),Object(O.jsxs)(f.a,{color:"warning",style:{padding:"20px"},isOpen:y,children:["Vehicle added id: ",i]})]}),Object(O.jsx)("div",{className:"col-lg-4 col-md-6 col-lg-6 container",style:{display:"flex",flexDirection:"column",alignItems:"start",marginBottom:"10px",width:"90%",marginRight:"30%"},children:Object(O.jsxs)("div",{className:"card",style:{margin:"20px",marginLeft:"-50px"},children:[Object(O.jsx)("div",{className:"topboders",style:{height:"170px"}}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("h4",{className:"card-title text-left text-capitalize",children:String(b.vehicle_type)})}),Object(O.jsx)("div",{children:b.in_use?Object(O.jsxs)("p",{className:"card-title text-right",children:[Object(O.jsx)("span",{style:{color:"#FF8C00"},children:"\u25cf"})," Unavailable"]}):Object(O.jsxs)("p",{className:"card-title text-right",children:[Object(O.jsx)("span",{style:{color:"lightgreen"},children:"\u25cf"})," Available"]})})]}),Object(O.jsx)("p",{className:"text-left",children:"ID"}),Object(O.jsx)("p",{className:"card-text text-left",children:b.id}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"start"},children:[Object(O.jsxs)("div",{className:"text-left",style:{marginRight:"60px"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Longitude"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text text-capitalize",children:b.last_longitude})})]}),Object(O.jsxs)("div",{className:"text-left",style:{marginLeft:"80px"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text text-left",children:"Latitude"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:b.last_latitude})})]}),Object(O.jsx)("input",{type:"hidden",value:"f"})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"start"},children:Object(O.jsxs)("div",{className:"text-left",style:{marginRight:"60px"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Battery"})}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{className:"card-text",children:[b.battery,"%"]})})]})}),Object(O.jsx)("hr",{}),b.in_use?null:Object(O.jsx)(d.b,{onClick:function(){try{j.a.put("/api/vehicles/"+g+"/checkout",{vehicle_id:g})}catch(e){console.log("Exception caught and ignored. \ntag: 1c9181a1-f39e-470c-99a2-f39dd8869fd1\nerror: {err}\n\nMessage: {err.message}")}},to:"/ridedetail/".concat(t.params.id,"/false"),className:"btn btn-danger",style:{width:"100%",backgroundColor:"#FF3565",height:"calc(1.5em + 1.125rem + 2px)",marginBottom:"5px"},children:"Start ride"}),Object(O.jsx)(d.b,{to:"/vehicles",className:"btn btn-danger",style:{width:"80%",backgroundColor:"#FF3565",marginTop:"15px",marginRight:"100%",height:"calc(1.5em + 1.125rem + 2px)"},onClick:function(){j.a.delete("/api/vehicles/"+t.params.id+"/delete").then((function(e){})).then((function(){a(t.params.id)})).catch((function(e){a("NOT DELETED: "+t.params.id),console.log("Generic error caught and assumed to be a vehicle thatwas not deleted because it is in use.\nerror: {error}\n\nmessage: {error.message}")}))},children:"Remove vehicle"})]})]})},b.id)]}):null}))),w=a(43),I=Object(b.b)((function(e){return{vehicles:e.data.vehicles,email:e.data.email}}),{rideEndedDetails:function(e){return{type:"RIDEENDED",payload:e}}})((function(e){var t=e.match,a=(e.email,e.rideEndedDetails),i=Object(c.useState)(""),n=Object(l.a)(i,2),s=n[0],r=n[1],o=Object(c.useState)(""),b=Object(l.a)(o,2),h=b[0],u=b[1],x=Object(c.useState)(""),g=Object(l.a)(x,2),p=g[0],m=g[1],f=Object(c.useState)(""),v=Object(l.a)(f,2),y=v[0],N=v[1],E=Object(c.useState)(""),S=Object(l.a)(E,2),I=S[0],C=S[1],A=Object(c.useState)(""),D=Object(l.a)(A,2),R=D[0],L=D[1],V=Object(c.useState)(""),F=Object(l.a)(V,2),B=F[0],k=F[1],T=Object(c.useState)(""),U=Object(l.a)(T,2),H=U[0],W=U[1],P=Object(c.useState)(!1),X=Object(l.a)(P,2),z=X[0],q=X[1],G=Object(c.useState)(!1),Q=Object(l.a)(G,2),J=Q[0],Y=Q[1],K=Object(c.useState)(!1),Z=Object(l.a)(K,2),M=Z[0],_=Z[1],$=Object(c.useState)(!1),ee=Object(l.a)($,2),te=ee[0],ae=ee[1];Object(c.useEffect)((function(){setTimeout((function(){try{j.a.get("/api/vehicles/"+t.params.id).then((function(e){N(e.data),C(e.data.id)}))}catch(e){console.log("Exception caught and ignored. \ntag: 5d241ac7-cddf-434f-bbc5-34cdc67e6c6a\nerror: {e}\n\nMessage: {e.message}")}}),1e3)}),[J,M,z,R,H,B]);return y?Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{className:"text-center",style:{marginTop:"30px",fontWeight:"600"},children:["Riding a ",y.vehicle_type]}),Object(O.jsxs)("div",{className:"container col-md-6",style:{marginRight:"35.8%"},children:["true"!=t.params.view?Object(O.jsxs)(w.a,{variant:"warning",children:["Ride started with vehicle ",t.params.id]},1):null,Object(O.jsxs)("h5",{style:{fontWeight:"500",fontSize:"22px",color:"black"},children:["Vehicle ID: ",y.id]}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"75%"},children:[Object(O.jsxs)("div",{className:"text-left",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Start Time"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:y.last_checkin})})]}),Object(O.jsxs)("div",{className:"text-left",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Longitude"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:y.last_longitude})})]}),Object(O.jsxs)("div",{className:"text-left",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Latitude"})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:y.last_latitude})})]}),Object(O.jsxs)("div",{className:"text-left",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"card-text",children:"Battery"})}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{className:"card-text",children:[y.battery,"%"]})})]}),Object(O.jsx)("input",{type:"hidden",value:y.id})]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"start",alignItems:"center",marginTop:"30px",marginBottom:"90px",lineHeight:"1.5"},children:Object(O.jsx)("div",{children:Object(O.jsxs)("form",{style:{width:"600px",justifyContent:"stretch",border:"1px solid #E9E9E9",padding:"15px"},children:[Object(O.jsx)("p",{children:"When you're finished riding, please input the following and end your ride:"}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Longitude"}),Object(O.jsx)("input",{style:{height:"calc(1.5em + 1.125rem + 2px)"},type:"email",onChange:function(e){r(e.target.value),isNaN(e.target.value)||""==e.target.value||e.target.value>180||e.target.value<-180?_(!1):(_(!0),W(!0))},class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),!1===H?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Longitude must be between -180 and 180."})}):null]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Latitude"}),Object(O.jsx)("input",{style:{height:"calc(1.5em + 1.125rem + 2px)"},type:"text",onChange:function(e){u(e.target.value),isNaN(e.target.value)||""==e.target.value||e.target.value>90||e.target.value<-90?Y(!1):(Y(!0),k(!0))},class:"form-control",id:"firstname","aria-describedby":"password"}),!1===B?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Latitude must be between -90 and 90."})}):null]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Battery (percent)"}),Object(O.jsx)("input",{style:{height:"calc(1.5em + 1.125rem + 2px)"},type:"text",required:!0,onChange:function(e){m(e.target.value),isNaN(e.target.value)||""==e.target.value||e.target.value>100||e.target.value<0||e.target.value.includes(".")?q(!1):(q(!0),L(!0))},class:"form-control",id:"lastname","aria-describedby":"password"}),!1===R?Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Not a valid integer value"}),Object(O.jsx)("p",{children:"Battery (percent) must be between 0 and 100"})]}):null]}),Object(O.jsx)(d.b,{to:te?"/vehicledetail/".concat(y.id):"#",onMouseDown:function(){if(M||W(!1),J||k(!1),z||L(!1),M&&J&&z)try{ae(!0),j.a.put("/api/vehicles/"+I+"/checkin",{longitude:s,latitude:h,battery:Number(p)}).then((function(e){a(e.data.messages)})).catch((function(e){console.log("Exception caught and ignored while ending a ride.\ntag: 4e77642f-a0ae-4c0e-b692-78f2b88d2417\nerror: {error}\n\nMessage: {error.message}")}))}catch(e){console.log("Exception caught and ignored while sending a /rides/end POST request. \ntag: b11e32c7-2f54-406b-b00c-6aa817bd4319\nerror: {e}\n\nMessage: {e.message}")}},type:"button",class:"btn btn-danger form-control",style:{height:"calc(1.5em + 1.125rem + 2px)",backgroundColor:"#FF3565"},children:"End Ride"})]})})})]})]}):null})),C=(a(94),Object(b.b)((function(e){return{email:e.data.email,registeredUser:e.data.registeredUser}}),{newRegistration:function(e){return{type:"NEWEMAIL",payload:e}}})((function(e){var t=e.newRegistration,a=Object(c.useState)(""),i=Object(l.a)(a,2),n=i[0],s=i[1],d=Object(c.useState)(""),o=Object(l.a)(d,2),b=o[0],h=o[1],u=Object(c.useState)([]),x=Object(l.a)(u,2),p=x[0],m=x[1],v=Object(c.useState)(""),y=Object(l.a)(v,2),N=y[0],E=y[1],S=Object(c.useState)(""),w=Object(l.a)(S,2),I=w[0],C=w[1],A=Object(c.useState)(""),D=Object(l.a)(A,2),R=D[0],L=D[1],V=Object(c.useState)(!1),F=Object(l.a)(V,2),B=(F[0],F[1]),k=Object(c.useState)(!1),T=Object(l.a)(k,2),U=T[0],H=T[1],W=Object(c.useState)(!1),P=Object(l.a)(W,2),X=P[0],z=P[1],q=Object(c.useState)(!1),G=Object(l.a)(q,2),Q=G[0],J=G[1],Y=Object(c.useState)(""),K=Object(l.a)(Y,2),Z=K[0],M=K[1],_=Object(c.useState)(""),$=Object(l.a)(_,2),ee=$[0],te=$[1],ae=Object(c.useState)(""),ce=Object(l.a)(ae,2),ie=ce[0],ne=ce[1],se=Object(r.g)();return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{className:"container",style:{marginLeft:"270px",height:"100vh"},children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{style:{lineHeight:"1.2",paddingTop:"100px"},children:[Object(O.jsx)("img",{src:g,style:{marginBottom:"50px"}}),Object(O.jsxs)("div",{style:{marginTop:"20px",lineHeight:"2"},children:[Object(O.jsx)("h1",{style:{fontWeight:"600",fontSize:"40px"},children:"Sign Up"}),Object(O.jsx)("div",{className:"col-6-lg",style:{width:"600px"},children:Object(O.jsxs)("form",{children:[N?Object(O.jsxs)(f.a,{color:"warning",style:{padding:"20px"},children:["Registration successful! You can now log in as ",R]}):null,!1===N?Object(O.jsx)(f.a,{color:"warning",style:{padding:"20px"},children:"Registration failed. Make sure that you choose a unique email!"}):null,!1===I?Object(O.jsx)(f.a,{color:"warning",style:{padding:"20px"},children:"Registration failed. Please fill out required fields!"}):null,Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Email"}),Object(O.jsx)("input",{type:"email",onChange:function(e){L(e.target.value),""==e.target.value?J(!1):(J(!0),ne(!0))},class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),!1===ie?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Please enter an email address."})}):null]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"First name:"}),Object(O.jsx)("input",{type:"text",onChange:function(e){h(e.target.value),""==e.target.value?H(!1):(H(!0),M(!0))},class:"form-control",id:"firstname","aria-describedby":"password"}),!1===Z?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Please enter your first name."})}):null]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Last name:"}),Object(O.jsx)("input",{type:"text",onChange:function(e){s(e.target.value),""==e.target.value?z(!1):(z(!0),te(!0))},class:"form-control",id:"lastname","aria-describedby":"password"}),!1===ee?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Please enter your last name."})}):null]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Phone number"}),Object(O.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)},class:"form-control",id:"password","aria-describedby":"password"})]}),Object(O.jsx)("button",{onClick:function(){if(Q||ne(!1),U||M(!1),X||te(!1),Q&&U&&X){t(String(R));try{j.a.post("/api/register",{email:String(R),last_name:String(n),first_name:String(b),phone_numbers:0!=p.length?p.split(","):[]}).then((function(){E(!0),B(!1),C(!0),se.push("/")})).catch((function(e){C(!0),E(!1),B(!1)}))}catch(e){C(!0),E(!1),B(!1)}}},type:"button",class:"btn btn-danger form-control",style:{backgroundColor:"#FF3565"},children:"Register"}),Object(O.jsxs)("p",{className:"text-center",style:{marginTop:"5px"},children:["Already have an account? ",Object(O.jsx)("a",{href:"/","data-dismiss":"modal",style:{color:"#FF3565"},children:"Log in"})]}),Object(O.jsx)("p",{style:{color:"#737491"},children:"* For multiple numbers, please separate with a comma."})]})})]})]}),Object(O.jsx)("p",{style:{position:"absolute",bottom:"0",marginLeft:"10px",fontSize:"14px",marginBottom:"40px",color:"#737491"},children:"\xa9 CockroachLabs"})]})})})})));var A=Object(b.b)((function(e){return{login:e.data.login,email:e.data.email,location:e.data.location}}),{logins:h})((function(e){var t=e.login,a=e.logins,i=(e.email,e.location),n=Object(c.useState)(""),s=Object(l.a)(n,2),o=s[0],j=s[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),u=h[0],x=h[1];return Object(c.useEffect)((function(){var e=sessionStorage.getItem("user");x(e),null!=e&&a(e),j("/"!=i&&"/register"!=i),console.log("Log in status :"+t)}),[o,i,u]),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(m,{}),Object(O.jsxs)(r.d,{children:[Object(O.jsx)(r.b,{exact:!0,path:"/",component:1!=t?function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(r.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(r.a,{to:"/"})}}),Object(O.jsx)(r.b,{path:"/",component:p})]})}:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(r.b,{path:"/vehicles",render:function(){return Object(O.jsx)(r.a,{to:"/vehicles"})}}),Object(O.jsx)(r.b,{path:"/",component:v})]})}}),Object(O.jsx)(r.b,{path:"/register",component:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(r.b,{exact:!0,path:"/register",render:function(){return Object(O.jsx)(r.a,{to:"/register"})}}),Object(O.jsx)(r.b,{path:"/register",component:C})]})}}),Object(O.jsx)(r.b,{path:"/vehicles",component:v}),Object(O.jsx)(r.b,{path:"/rides",component:y}),Object(O.jsx)(r.b,{path:"/addvehicles",component:N}),Object(O.jsx)(r.b,{path:"/vehicledetail/:id",component:S}),Object(O.jsx)(r.b,{path:"/vehicledetail",component:S}),Object(O.jsx)(r.b,{path:"/ridedetail/:id/:view",component:I}),Object(O.jsx)(r.b,{path:"/profile",component:E})]})]})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(19),R=a(42),L=a(6),V={vehicles:["Char","asd","afdaf","Char","asd","afdaf"],login:"",logout:"",email:"",newemail:"",deletedUser:"",registeredUser:"",ridestarted:"",rideended:"",vehicleID:null,newVehicleID:"",RideEndDetails:[],location:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETEDUSER":return sessionStorage.clear(),Object(L.a)(Object(L.a)({},e),{},{logout:"",login:"",deletedUser:t.payload.messages[0],email:null,newemail:""});case"LOCATION":return Object(L.a)(Object(L.a)({},e),{},{location:t.payload});case"VEHICLES":return Object(L.a)(Object(L.a)({},e),{},{vehicles:t.payload});case"NEWEMAIL":return Object(L.a)(Object(L.a)({},e),{},{newemail:t.payload});case"LOGIN":return Object(L.a)(Object(L.a)({},e),{},{login:!0,email:t.payload});case"INCORRECT":return Object(L.a)(Object(L.a)({},e),{},{login:!1});case"LOGOUT":return sessionStorage.clear(),Object(L.a)(Object(L.a)({},e),{},{login:!1,logout:!1,email:null,vehicles:["Char","asd","afdaf","Char","asd","afdaf"],newemail:"",deletedUser:"",registeredUser:"",ridestarted:"",rideended:"",vehicleID:null,newVehicleID:"",RideEndDetails:[]});case"RESET":return Object(L.a)(Object(L.a)({},e),{},{login:"",logout:"",email:null});case"REMOVEDVEHICLE":return Object(L.a)(Object(L.a)({},e),{},{vehicleID:t.payload});case"RESETDASH":return Object(L.a)(Object(L.a)({},e),{},{vehicleID:null,newVehicleID:"",RideEndDetails:[]});case"NEWVEH":return Object(L.a)(Object(L.a)({},e),{},{newVehicleID:t.payload});case"RIDEENDED":return Object(L.a)(Object(L.a)({},e),{},{RideEndDetails:t.payload});case"STARTRIDE":return Object(L.a)(Object(L.a)({},e),{},{ridestarted:!0});case"ENDRIDE":return Object(L.a)(Object(L.a)({},e),{},{rideended:!0});default:return e}},B=Object(D.b)({data:F}),k=[R.a],T=Object(D.c)(B,{},D.a.apply(void 0,k));s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(b.a,{store:T,children:Object(O.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[95,1,2]]]);
//# sourceMappingURL=main.8c76e7e5.chunk.js.map