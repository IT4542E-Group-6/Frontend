(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{1066:function(e,n,t){"use strict";t.r(n);var c=t(199),a=t(732),o=t(1),s=t(22),i=t(1060),r=t(941),u=t(943),d=t(1082),l=t(1086),f=t(740),p=(t(891),t(840),t(6),t(194)),h=t(796),m=t(20),b=["remember"];t(860);n.default=Object(p.b)()((function(e){var n=e.t,t=Object(o.useState)(!1),p=Object(a.a)(t,2),_=p[0],g=p[1],j=Object(s.g)();return Object(m.jsxs)("div",{className:"login",style:{height:"100%",minHeight:"100%"},children:[Object(m.jsx)(r.a,{span:24,className:"login-container",children:Object(m.jsxs)(u.a,{lg:12,className:"left-side forgot-password",children:[Object(m.jsx)("h2",{children:n("Forgot Password")}),Object(m.jsxs)(d.a,{name:"normal_login",initialValues:{remember:!0},onFinish:function(e){e.remember;var t=Object(c.a)(e,b);g(!0),Object(h.a)(t,(function(e){var t;200==e.status&&(console.log(e),i.a.success({message:n("Notification"),description:n("".concat((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Send reset password confirmation email success succesfully")),placement:"bottomRight",duration:1.5}),g(!1));200!==e.status&&(console.log(e),i.a.error({message:n("Notification"),description:n("".concat(e.message||"Send email for recover password failed")),placement:"bottomRight",duration:1.5}),g(!1))}))},className:"position-relative",children:[Object(m.jsx)("label",{htmlFor:"email",children:n("Email")}),Object(m.jsx)(d.a.Item,{name:"email",rules:[{validator:function(e,n){if(n)return Promise.resolve()}}],children:Object(m.jsx)(l.a,{placeholder:n("Email")})}),Object(m.jsx)(f.a,{htmlType:"submit",className:"box-1",loading:_,children:n("Confirm")}),Object(m.jsx)(f.a,{htmlType:"button",onClick:function(){j.push("/login")},className:"box-2",loading:_,children:n("Login")})]})]})}),Object(m.jsx)("div",{className:"footer",children:"Candles in the wind"})]})}))},738:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return r}));t(21),t(37);var c=t(6),a=(t(807),Object(c.b)());function o(e,n){var t=[];return e.forEach((function(e){e.permission?e.permission.includes(n)&&t.push(e):t.push(e)})),t}function s(e,n){var t=[];return e.forEach((function(e){e.permission?e.permission.includes(n)&&(e._children&&e._children.forEach((function(t,c){t.permission&&!t.permission.includes(n)&&e._children.splice(c,1)})),t.push(e)):(e._children&&e._children.forEach((function(t,c){t.permission&&!t.permission.includes(n)&&e._children.splice(c,1)})),t.push(e))})),t}function i(e){var n={email:e.email,role:e.role};localStorage.setItem("".concat("candle_in_the_wind","_user"),JSON.stringify(n))}function r(e){a.post("".concat("http://api.mosd.padisea.fun/api/admin/","auth/refresh"),{accessToken:localStorage.getItem("".concat("candle_in_the_wind","_access_token")),refreshToken:localStorage.getItem("".concat("candle_in_the_wind","_refresh_token"))}).then((function(n){localStorage.setItem("".concat("candle_in_the_wind","_access_token"),n.data.data.access_token),localStorage.setItem("".concat("candle_in_the_wind","_refresh_token"),n.data.data.refresh_token),e()})).catch((function(e){e.response&&[401,403,400,404].includes(e.response.status)&&u()}))}function u(){localStorage.removeItem("".concat("candle_in_the_wind","_user")),localStorage.removeItem("".concat("candle_in_the_wind","_access_token")),localStorage.removeItem("".concat("candle_in_the_wind","_refresh_token")),window.location.href="/login"}},796:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"e",(function(){return s})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r})),t.d(n,"g",(function(){return u})),t.d(n,"d",(function(){return d})),t.d(n,"f",(function(){return l}));t(38);var c=t(6),a=t(738);function o(e){Object(c.b)().get("".concat("http://api.mosd.padisea.fun/api/admin/","user")).then((function(n){e(n)})).catch((function(n){n.response&&(403===n.response.status?Object(a.c)((function(){o(e)})):e(n.response.data))}))}function s(e,n){Object(c.b)().put("".concat("http://api.mosd.padisea.fun/api/admin/","user/change/profile"),e).then((function(e){n(e)})).catch((function(t){t.response&&(403===t.response.status?Object(a.c)((function(){s(e,n)})):n(t.response.data))}))}function i(e,n){var t=Object(c.b)();console.log(e),t.post("".concat("http://api.mosd.padisea.fun/api/admin/","auth/login"),e).then((function(e){n(e)})).catch((function(e){e.response&&n(e.response.data)}))}function r(e,n){Object(c.b)().post("".concat("http://api.mosd.padisea.fun/api/admin/","user/forgot-password"),e).then((function(e){n(e)})).catch((function(e){e.response&&n(e.response.data)}))}var u=function(e,n){Object(c.b)().get("".concat("http://api.mosd.padisea.fun/api/admin/","user/forgot-password/verify/").concat(e)).then((function(e){n(e)})).catch((function(e){e.response&&n(e.response.data)}))},d=function e(n,t){Object(c.b)().patch("".concat("http://api.mosd.padisea.fun/api/admin/","user/change/password"),n).then((function(e){t(e)})).catch((function(c){c.response&&(403===c.response.status?Object(a.c)((function(){e(n,t)})):t(c.response.data))}))},l=function e(n,t){Object(c.b)().post("".concat("http://api.mosd.padisea.fun/api/admin/","user/forgot-password/updatePassword"),n).then((function(e){t(e)})).catch((function(c){c.response&&(403===c.response.status?Object(a.c)((function(){e(n,t)})):t(c.response.data))}))}},807:function(e,n,t){"use strict";var c=t(849);!function(){var e}()},823:function(e,n,t){"use strict";var c=t(721),a=t(1),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},s=t(724),i=function(e,n){return a.createElement(s.a,Object(c.a)(Object(c.a)({},e),{},{ref:n,icon:o}))};i.displayName="SearchOutlined";n.a=a.forwardRef(i)},840:function(e,n,t){},891:function(e,n,t){"use strict";t.p},941:function(e,n,t){"use strict";var c=t(1050);n.a=c.a},943:function(e,n,t){"use strict";var c=t(944);n.a=c.a}}]);
//# sourceMappingURL=21.2b2bd8ab.chunk.js.map