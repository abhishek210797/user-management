webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},"4uzM":function(e,t){e.exports='<h2 class="page-header" >Login</h2>\n<form class="form-signin" (submit)="onLoginSubmit()">\n        <div class="form-group">\n          <label for="Username">Username</label>\n          <input type="text" class="form-control" placeholder="Enter Username" [(ngModel)]="username" name="username">\n        </div>\n        <div class="form-group">\n        <label for="Password">Password</label>\n        <input type="password" class="form-control" placeholder=" Enter Password" [(ngModel)]="password" name="password">\n        </div>\n        <div class="checkbox">\n          <label>\n            <input type="checkbox" value="remember-me"> Remember me\n          </label>\n        </div>\n        <input class="btn btn-lg btn-primary" type="submit" value="Login">\n</form>\n'},"7mpY":function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},"99MX":function(e,t){e.exports='<div class="jumbotron text-center">\n  <h1>Admin Portal</h1>\n  <p class="lead">Welcome</p>\n  <div>\n    <a class="btn btn-primary" [routerLink]="[\'/userlist\']">User List</a> \n  </div>\n</div>\n\n'},"9yv/":function(e,t){e.exports='<div *ngIf="user">\n  <h2 class="page-header">{{user.name}}</h2>\n  <ul class="list-group">\n    <li class="list-group-item">Username : {{user.username}}</li>\n    <li class="list-group-item">Email : {{user.email}}</li>\n  </ul>\n</div>\n\n'},HdoV:function(e,t){e.exports='<h2 class="page-header">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n'},MBay:function(e,t){e.exports='<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">\n      <a class="navbar-brand" href="#"></a>\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n      </button>\n\n      <div class="collapse navbar-collapse" id="navbarsExampleDefault">\n        <ul class="navbar-nav mr-auto">\n          <li class="nav-item" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}">\n            <a class="nav-link" [routerLink]="[\'/\']">Home <span></span></a>\n          </li>\n        </ul>\n        <ul class="navbar-nav ml-auto">\n          <li class="nav-item" *ngIf="authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}">\n            <a class="nav-link" [routerLink]="[\'/dashboard\']">Dashboard </a>\n          </li>\n          <li class="nav-item" *ngIf="authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}">\n            <a class="nav-link" [routerLink]="[\'/profile\']">Profile </a>\n          </li>\n          <li class="nav-item" *ngIf="!authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}">\n            <a class="nav-link" [routerLink]="[\'/login\']">Login </a>\n          </li>\n          <li class="nav-item" *ngIf="!authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}">\n            <a class="nav-link" [routerLink]="[\'/register\']">Register</a>\n          </li>\n          <li class="nav-item" *ngIf="authService.loggedIn()"><a class="nav-link" (click)="onLogoutClick()" href="#">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n'},UyjQ:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},"W/D/":function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},YuZA:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="YuZA"},auOE:function(e,t){e.exports='<div class="jumbotron text-center">\n  <h1>Login Portal</h1>\n  <p class="lead">Welcome to our Web application</p>\n  <div>\n    <a class="btn btn-primary" [routerLink]="[\'/register\']">Register</a> <a class="btn btn-dark" [routerLink]="[\'/login\']">Login</a>  <a class="btn btn-dark" [routerLink]="[\'/admin\']">Admin</a>\n  </div>\n</div>\n\n'},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("LMZF"),r=n("x8Hs"),a=n("RyBE"),s=n("0nO6"),i=n("TMwh"),c=n("UHIZ"),l=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},u=function(){function e(){this.title="app"}return e=l([Object(o.Component)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]})],e)}(),p=(n("GQSG"),n("W4CS")),f=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(e){this.http=e,this.isDev=!0}return e.prototype.registerUser=function(e){var t=new i.Headers;return t.append("Content-Type","application/json"),this.http.post("users/register",e,{headers:t}).map(function(e){return e.json()})},e.prototype.authenticateUser=function(e){var t=new i.Headers;return t.append("Content-Type","application/json"),this.http.post("users/authenticate",e,{headers:t}).map(function(e){return e.json()})},e.prototype.getProfile=function(){var e=new i.Headers;return this.loadToken(),e.append("Authorization",this.authToken),e.append("Content-Type","application/json"),this.http.get("users/profile",{headers:e}).map(function(e){return e.json()})},e.prototype.storeUserData=function(e,t){localStorage.setItem("id_token",e),localStorage.setItem("user",JSON.stringify(t)),this.authToken=e,this.user=t},e.prototype.loadToken=function(){var e=localStorage.getItem("id_token");this.authToken=e},e.prototype.loggedIn=function(){return Object(p.tokenNotExpired)("id_token")},e.prototype.logout=function(){this.authToken=null,this.user=null,localStorage.clear()},e=f([Object(o.Injectable)(),d("design:paramtypes",[i.Http])],e)}(),m=n("0pMh"),g=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},v=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(){function e(e,t,n){this.authService=e,this.router=t,this.flashMessage=n}return e.prototype.ngOnInit=function(){},e.prototype.onLogoutClick=function(){return this.authService.logout(),this.flashMessage.show("You are logged out",{cssClass:"alert-success",timeout:3e3}),this.router.navigate(["/login"]),!1},e=g([Object(o.Component)({selector:"app-navbar",template:n("MBay"),styles:[n("W/D/")]}),v("design:paramtypes",[h,c.a,m.FlashMessagesService])],e)}(),y=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},j=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(){function e(e,t,n){this.authService=e,this.router=t,this.flashMessage=n}return e.prototype.ngOnInit=function(){},e.prototype.onLoginSubmit=function(){var e=this,t={username:this.username,password:this.password};this.authService.authenticateUser(t).subscribe(function(t){t.success?(e.authService.storeUserData(t.token,t.user),e.flashMessage.show("You are now logged in",{cssClass:"alert-success",timeout:5e3}),e.router.navigate(["dashboard"])):(e.flashMessage.show(t.msg,{cssClass:"alert-danger",timeout:5e3}),e.router.navigate(["login"]))})},e=y([Object(o.Component)({selector:"app-login",template:n("4uzM"),styles:[n("v8Xq")]}),j("design:paramtypes",[h,c.a,m.FlashMessagesService])],e)}(),O=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},x=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(){function e(){}return e.prototype.validateRegister=function(e){return void 0!=e.name&&void 0!=e.email&&void 0!=e.username&&void 0!=e.password},e.prototype.validateEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},e=O([Object(o.Injectable)(),x("design:paramtypes",[])],e)}(),P=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},_=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(){function e(e,t,n,o){this.validateService=e,this.authService=t,this.router=n,this.flashMessage=o}return e.prototype.ngOnInit=function(){},e.prototype.onRegisterSubmit=function(){var e=this,t={name:this.name,email:this.email,username:this.username,password:this.password};return this.validateService.validateRegister(t)?this.validateService.validateEmail(t.email)?void this.authService.registerUser(t).subscribe(function(t){t.success?(e.flashMessage.show("You are now registered and can now login",{cssClass:"alert-success",timeout:3e3}),e.router.navigate(["/login"])):(e.flashMessage.show("Something went wrong",{cssClass:"alert-danger",timeout:3e3}),e.router.navigate(["/register"]))}):(this.flashMessage.show("Please use a valid email",{cssClass:"alert-danger",timeout:3e3}),!1):(this.flashMessage.show("Please fill in all fields",{cssClass:"alert-danger",timeout:3e3}),!1)},e=P([Object(o.Component)({selector:"app-register",template:n("rWB6"),styles:[n("iHxj")]}),_("design:paramtypes",[w,h,c.a,m.FlashMessagesService])],e)}(),S=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},M=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},L=function(){function e(){}return e.prototype.ngOnInit=function(){},e=S([Object(o.Component)({selector:"app-home",template:n("auOE"),styles:[n("j7C0")]}),M("design:paramtypes",[])],e)}(),I=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},C=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(){function e(){}return e.prototype.ngOnInit=function(){},e=I([Object(o.Component)({selector:"app-dashboard",template:n("HdoV"),styles:[n("cnme")]}),C("design:paramtypes",[])],e)}(),A=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},E=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Y=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.ngOnInit=function(){var e=this;this.authService.getProfile().subscribe(function(t){e.user=t.user},function(e){return console.log(e),!1})},e=A([Object(o.Component)({selector:"app-profile",template:n("9yv/"),styles:[n("d8OR")]}),E("design:paramtypes",[h,c.a])],e)}(),U=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},H=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(){function e(e,t){this.router=e,this.flashMessage=t}return e.prototype.ngOnInit=function(){},e.prototype.onLoginSubmit=function(){"Admin"==this.username&&"a"==this.password?(this.flashMessage.show("You are now logged in",{cssClass:"alert-success",timeout:5e3}),this.router.navigate(["admindashboard"])):this.router.navigate(["admin"])},e=U([Object(o.Component)({selector:"app-admin",template:n("i/Pj"),styles:[n("7mpY")]}),H("design:paramtypes",[c.a,m.FlashMessagesService])],e)}(),W=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},N=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},F=function(){function e(){}return e.prototype.ngOnInit=function(){},e=W([Object(o.Component)({selector:"app-admindashboard",template:n("99MX"),styles:[n("jCqt")]}),N("design:paramtypes",[])],e)}(),Z=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},z=[{path:"admin",component:T,children:[{path:"admindashboard",component:F}]}],B=function(){function e(){}return e=Z([Object(o.NgModule)({imports:[c.b.forRoot(z)],exports:[c.b]})],e)}(),q=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},J=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},X=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.canActivate=function(){return!!this.authService.loggedIn()||(this.router.navigate(["/login"]),!1)},e=q([Object(o.Injectable)(),J("design:paramtypes",[h,c.a])],e)}(),Q=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},G=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},V=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.ngOnInit=function(){var e=this;this.authService.getProfile().subscribe(function(t){e.user=t.user},function(e){return console.log(e),!1})},e=Q([Object(o.Component)({selector:"app-userlist",template:n("kjjv"),styles:[n("UyjQ")]}),G("design:paramtypes",[h,c.a])],e)}(),$=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},K=[{path:"",component:L},{path:"register",component:k},{path:"login",component:R},{path:"dashboard",component:D,canActivate:[X]},{path:"profile",component:Y,canActivate:[X]},{path:"admindashboard",component:F},{path:"userlist",component:V}],ee=function(){function e(){}return e=$([Object(o.NgModule)({declarations:[u,b,R,k,L,D,Y,T,F,V],imports:[a.a,s.a,i.HttpModule,c.b.forRoot(K),m.FlashMessagesModule.forRoot(),B],providers:[w,h,X],bootstrap:[u]})],e)}();Object(o.enableProdMode)(),Object(r.a)().bootstrapModule(ee).catch(function(e){return console.log(e)})},cnme:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},d8OR:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},efyd:function(e,t){e.exports='<app-navbar></app-navbar>\n<div class="container">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n'},hxJY:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},"i/Pj":function(e,t){e.exports='<h2 class="page-header" >Admin Login</h2>\n<form class="form-signin" (submit)="onLoginSubmit()">\n        <div class="form-group">\n          <label for="Username">Username</label>\n          <input type="text" class="form-control" placeholder="Enter Username" [(ngModel)]="username" name="username">\n        </div>\n        <div class="form-group">\n        <label for="Password">Password</label>\n        <input type="password" class="form-control" placeholder=" Enter Password" [(ngModel)]="password" name="password">\n        </div>\n        <div class="checkbox">\n          <label>\n            <input type="checkbox" value="remember-me"> Remember me\n          </label>\n        </div>\n        <input class="btn btn-lg btn-primary" type="submit" value="Login">\n</form>\n'},iHxj:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},j7C0:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},jCqt:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},kjjv:function(e,t){e.exports='<div class="row">\n  <div class="col s12">\n    <div class="card">\n      <div class="card-content white-text">\n        <div class="row">\n          \n          <div class="col s7">\n              <table class="responsive-table highlight">\n                  <thead>\n                    <tr>\n                      <th>Name</th>\n                      <th>Position</th>\n                      <th>Office</th>\n                      <th></th>\n                    </tr>\n                  </thead>\n                  <tr *ngIf="user">\n                    <td>{{user.name}}</td>\n                    <td>{{emp.position}}</td>\n                    <td>{{emp.office}}</td>\n                    <td>\n                        <a class="action-btn" (click)="onEdit(emp)">\n                          <i class="material-icons">edit</i>\n                        </a>\n                        <a class="action-btn" (click)="onDelete(emp._id,employeeForm)">\n                          <i class="material-icons">delete</i>\n                        </a>\n                      </td>\n                  </tr>\n                </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>'},rWB6:function(e,t){e.exports='<div>\n<h2 class="page-header">Register</h2>\n<form (submit)="onRegisterSubmit()" >\n  <div class="form-group">\n    <label for="name">Name</label>\n    <input type="text" [(ngModel)]="name" name="name" class="form-control" id="name" placeholder="Enter Name">\n  </div>\n  <div class="form-group">\n    <label for="username">Username</label>\n    <input type="text" [(ngModel)]="username" name="username" class="form-control" id="username" placeholder="Enter Username">\n  </div>\n  <div class="form-group">\n    <label for="email">Email</label>\n    <input type="email" [(ngModel)]="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">\n    <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>\n  </div>\n  <div class="form-group">\n    <label for="password">Password</label>\n    <input type="password" [(ngModel)]="password" name="password" class="form-control" id="password" placeholder=" Enter Password">\n  </div>\n  <input type="submit" class="btn btn-primary" value="Submit">\n</form>\n</div>\n'},v8Xq:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()}},[0]);