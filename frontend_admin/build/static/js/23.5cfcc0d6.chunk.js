(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{1067:function(e,t,n){"use strict";n.r(t);var s=n(199),a=n(732),c=n(1),o=n(22),i=n(1056),r=n(1060),u=n(941),d=n(943),l=n(1082),p=n(1086),f=n(740),h=(n(840),n(194)),m=n(796),b=n(20),g=["remember"];n(860);t.default=Object(h.b)()((function(e){var t=e.t,n=Object(c.useState)(!1),h=Object(a.a)(n,2),j=h[0],_=h[1],w=Object(o.h)().pathname.split("/")[4],O=Object(o.g)();Object(c.useEffect)((function(){w&&Object(m.g)(w,(function(e){200==e.status&&i.b.success(t("".concat(e.data.message))),200!==e.status&&(r.a.error({message:t("Notification"),description:t("".concat(e.message||"Verify failed")),placement:"bottomRight",duration:1.5}),O.push("/login"))}))}),[w]);return Object(b.jsxs)("div",{className:"login",style:{height:"100%",minHeight:"100%"},children:[Object(b.jsx)(u.a,{span:24,className:"login-container",children:Object(b.jsxs)(d.a,{lg:12,className:"left-side forgot-password",children:[Object(b.jsx)("h2",{children:t("Forgot Password")}),Object(b.jsxs)(l.a,{name:"normal_login",initialValues:{remember:!0},onFinish:function(e){e.remember;var n=Object(s.a)(e,g);_(!0),n.active_token=w,Object(m.f)(n,(function(e){200==e.status&&(r.a.success({message:t("Notification"),description:t("".concat(e.data.message," || 'Update password success succesfully'")),placement:"bottomRight",duration:1.5}),_(!1),O.push("/login")),200!==e.status&&(r.a.error({message:t("Notification"),description:t("".concat(e.message||"Update password success failed!")),placement:"bottomRight",duration:1.5}),_(!1))}))},className:"position-relative",children:[Object(b.jsx)("label",{htmlFor:"password",children:t("Password")}),Object(b.jsx)(l.a.Item,{name:"new_password",rules:[{required:!0,message:t("Please input your password!")}],children:Object(b.jsx)(p.a,{type:"password",placeholder:t("Password")})}),Object(b.jsx)("label",{htmlFor:"password",children:t("Confirm Password")}),Object(b.jsx)(l.a.Item,{name:"confirm_new_password",rules:[{required:!0,message:t("Please input your confirm password!")},function(e){var n=e.getFieldValue;return{validator:function(e,s){return s&&n("new_password")!==s?Promise.reject(new Error(t("Password does not match!"))):Promise.resolve()}}}],children:Object(b.jsx)(p.a,{type:"password",placeholder:t("Password")})}),Object(b.jsx)(f.a,{htmlType:"submit",className:"box-1",loading:j,children:t("Confirm")}),Object(b.jsx)(f.a,{htmlType:"button",onClick:function(){O.push("/login")},className:"box-2",children:t("Login")})]})]})}),Object(b.jsx)("div",{className:"footer",children:"Candles in the wind"})]})}))},738:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return r}));n(21),n(37);var s=n(6),a=(n(807),Object(s.b)());function c(e,t){var n=[];return e.forEach((function(e){e.permission?e.permission.includes(t)&&n.push(e):n.push(e)})),n}function o(e,t){var n=[];return e.forEach((function(e){e.permission?e.permission.includes(t)&&(e._children&&e._children.forEach((function(n,s){n.permission&&!n.permission.includes(t)&&e._children.splice(s,1)})),n.push(e)):(e._children&&e._children.forEach((function(n,s){n.permission&&!n.permission.includes(t)&&e._children.splice(s,1)})),n.push(e))})),n}function i(e){var t={email:e.email,role:e.role};localStorage.setItem("".concat("candle_in_the_wind","_user"),JSON.stringify(t))}function r(e){a.post("".concat("http://api.mosd.padisea.fun/api/admin/","auth/refresh"),{accessToken:localStorage.getItem("".concat("candle_in_the_wind","_access_token")),refreshToken:localStorage.getItem("".concat("candle_in_the_wind","_refresh_token"))}).then((function(t){localStorage.setItem("".concat("candle_in_the_wind","_access_token"),t.data.data.access_token),localStorage.setItem("".concat("candle_in_the_wind","_refresh_token"),t.data.data.refresh_token),e()})).catch((function(e){e.response&&[401,403,400,404].includes(e.response.status)&&u()}))}function u(){localStorage.removeItem("".concat("candle_in_the_wind","_user")),localStorage.removeItem("".concat("candle_in_the_wind","_access_token")),localStorage.removeItem("".concat("candle_in_the_wind","_refresh_token")),window.location.href="/login"}},796:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return l}));n(38);var s=n(6),a=n(738);function c(e){Object(s.b)().get("".concat("http://api.mosd.padisea.fun/api/admin/","user")).then((function(t){e(t)})).catch((function(t){t.response&&(403===t.response.status?Object(a.c)((function(){c(e)})):e(t.response.data))}))}function o(e,t){Object(s.b)().put("".concat("http://api.mosd.padisea.fun/api/admin/","user/change/profile"),e).then((function(e){t(e)})).catch((function(n){n.response&&(403===n.response.status?Object(a.c)((function(){o(e,t)})):t(n.response.data))}))}function i(e,t){var n=Object(s.b)();console.log(e),n.post("".concat("http://api.mosd.padisea.fun/api/admin/","auth/login"),e).then((function(e){t(e)})).catch((function(e){e.response&&t(e.response.data)}))}function r(e,t){Object(s.b)().post("".concat("http://api.mosd.padisea.fun/api/admin/","user/forgot-password"),e).then((function(e){t(e)})).catch((function(e){e.response&&t(e.response.data)}))}var u=function(e,t){Object(s.b)().get("".concat("http://api.mosd.padisea.fun/api/admin/","user/forgot-password/verify/").concat(e)).then((function(e){t(e)})).catch((function(e){e.response&&t(e.response.data)}))},d=function e(t,n){Object(s.b)().patch("".concat("http://api.mosd.padisea.fun/api/admin/","user/change/password"),t).then((function(e){n(e)})).catch((function(s){s.response&&(403===s.response.status?Object(a.c)((function(){e(t,n)})):n(s.response.data))}))},l=function e(t,n){Object(s.b)().post("".concat("http://api.mosd.padisea.fun/api/admin/","user/forgot-password/updatePassword"),t).then((function(e){n(e)})).catch((function(s){s.response&&(403===s.response.status?Object(a.c)((function(){e(t,n)})):n(s.response.data))}))}},807:function(e,t,n){"use strict";var s=n(849);!function(){var e}()},823:function(e,t,n){"use strict";var s=n(721),a=n(1),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},o=n(724),i=function(e,t){return a.createElement(o.a,Object(s.a)(Object(s.a)({},e),{},{ref:t,icon:c}))};i.displayName="SearchOutlined";t.a=a.forwardRef(i)},840:function(e,t,n){},941:function(e,t,n){"use strict";var s=n(1050);t.a=s.a},943:function(e,t,n){"use strict";var s=n(944);t.a=s.a}}]);
//# sourceMappingURL=23.5cfcc0d6.chunk.js.map