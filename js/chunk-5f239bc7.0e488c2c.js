(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f239bc7"],{"138c":function(t,e,o){},"1c59":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post",class:{"post--highlighted":t.highlight,"post--selected":t.selected},on:{mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},click:t.goToPost}},[o("div",{staticClass:"post__quote",class:{"post__quote--show":t.showQuote&&t.allowQuote&&t.showReply&&t.$store.state.username},style:{left:t.quoteX+"px",top:t.quoteY+"px"},on:{mousedown:t.emitReply}},[o("font-awesome-icon",{staticClass:"post__quote__icon",attrs:{icon:["fa","quote-right"]}}),t._v(" Quote post ")],1),o("font-awesome-icon",{staticClass:"post__remove_icon",class:{"post__remove_icon--show":t.showSelect&&!t.post.removed},attrs:{icon:["fa","check"]},on:{click:function(e){return e.stopPropagation(),t.toggleSelected(e)}}}),o("modal-window",{on:{click:function(t){t.stopPropagation()}},model:{value:t.showShareModal,callback:function(e){t.showShareModal=e},expression:"showShareModal"}},[o("div",{attrs:{slot:"main"},slot:"main"},[o("p",[t._v("Copy this URL to share the post")]),o("fancy-input",{attrs:{placeholder:"Post URL",value:t.postURL,width:"100%"}})],1),o("button",{staticClass:"button button--modal",attrs:{slot:"footer"},on:{click:function(e){return e.stopPropagation(),t.setShareModalState(!1)}},slot:"footer"},[t._v("OK")])]),o("report-post-modal",{attrs:{"post-id":t.post.id},model:{value:t.showReportPostModal,callback:function(e){t.showReportPostModal=e},expression:"showReportPostModal"}}),o("div",{staticClass:"post__meta_data"},[o("div",{staticStyle:{display:"inline-flex"}},[o("avatar-icon",{staticClass:"post__avatar",attrs:{user:t.post.User}}),t.showThread?o("div",{staticClass:"post__thread",on:{click:function(e){return e.stopPropagation(),t.goToThread(e)}}},[t._v(" In thread "),o("span",{staticClass:"post__thread__name"},[t._v(t._s(t._f("truncateMid")(t.post.Thread.name,50)))]),t._v(" · ")]):o("div",{staticClass:"post__user"},[t._v(" "+t._s(t.username)+" "),t.post.User&&t.post.User.admin?o("span",{staticClass:"admin_badge"},[t._v("admin")]):t._e()]),t.post.replyingToUsername?o("replying-to",{staticStyle:{"margin-right":"0.5rem"},attrs:{replyId:t.post.replyId,username:t.post.replyingToUsername},on:{click:function(e){return t.$emit("goToPost",t.post.replyId,!0)}}}):t._e()],1),o("div",{staticClass:"post__date"},[t._v(t._s(t._f("formatDate")(t.post.createdAt,"time|date",", ")))])]),o("div",{staticClass:"post__date post__date--mobile"},[t._v(t._s(t._f("formatDate")(t.post.createdAt,"time|date",", ")))]),o("div",{staticClass:"post__content",attrs:{tabindex:"-1"},domProps:{innerHTML:t._s(t.postContentHTML)},on:{mouseup:t.setShowQuote,blur:function(e){t.showQuote=!1}}}),o("div",{staticClass:"post__footer"},[o("div",{staticClass:"post__footer_group"},[o("div",{staticClass:"post__footer_sub_group"},[t.showReply?o("heart-button",{attrs:{post:t.post}}):t._e()],1),t.post.Replies.length?o("div",{staticClass:"post__footer_sub_group"},[o("span",{staticClass:"post__footer_sub_group__text post__footer_sub_group__text--replies"},[t._v("replies")]),t._l(t.post.Replies,(function(e,s){return o("post-reply",{key:"post-reply-"+e.postNumber,attrs:{post:e,hover:t.hover,first:0===s},on:{click:function(o){return t.$emit("goToPost",e.postNumber)}}})}))],2):t._e()]),t.post.removed?t._e():o("div",{staticClass:"post__footer_group post__actions",class:{"post__actions--show":t.showActions}},[o("div",{staticClass:"post__action post__share",on:{click:function(e){return e.stopPropagation(),t.setShareModalState(!0)}}},[t._v("share")]),t.$store.state.username?o("div",{staticClass:"post__action",on:{click:function(e){return e.stopPropagation(),t.setShowReportPostModal(!0)}}},[t._v(" report ")]):t._e(),t.$store.state.username&&t.showReply?o("div",{staticClass:"post__action post__reply",on:{click:function(e){return e.stopPropagation(),t.$emit("reply",t.post.id,t.username)}}},[t._v(" reply ")]):t._e()])]),o("div",{staticClass:"post__replies"})],1)},n=[],a=(o("99af"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("info-tooltip",{staticClass:"post_reply",class:{"post_reply--hover":t.hover,"post_reply--first":t.first}},[o("template",{slot:"content"},[o("div",{staticStyle:{"margin-top":"-0.25rem"}},[o("div",{staticClass:"post_reply__username"},[t._v(t._s(t.user.username))]),o("div",{staticClass:"post_reply__date"},[t._v(t._s(t._f("formatDate")(t.post.createdAt,"date|time"," - ")))])]),o("div",{staticClass:"post_reply__content"},[t._v(t._s(t._f("truncate")(t._f("stripTags")(t.post.content),100)))])]),o("div",{staticClass:"post_reply__display",attrs:{slot:"display"},on:{click:function(e){return e.stopPropagation(),t.$emit("click")}},slot:"display"},[o("div",{staticClass:"post_reply__letter",style:{"background-color":t.user.color}},[t._v(" "+t._s(t.user.letter)+" ")])])],2)}),i=[],r=o("44ea"),l={name:"PostReply",props:["post","hover","first"],components:{InfoTooltip:r["a"]},computed:{user:function(){return this.post.User?Object.assign({letter:this.post.User.username[0]},this.post.User):{letter:" ",color:null,username:"[deleted]"}}}},c=l,p=(o("dd92"),o("2877")),u=Object(p["a"])(c,a,i,!1,null,null,null),d=u.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"heart_button"},[o("modal-window",{attrs:{"close-button":!0,"hide-footer":!0,"no-padding":!0},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[o("div",{staticClass:"heart_button__modal",attrs:{slot:"main"},slot:"main"},[o("div",{staticClass:"heart_button__modal__header"},[t._v("Likes")]),t._l(t.likes,(function(e){return o("div",{key:"heart-user-"+e.id,staticClass:"heart_button__modal__user",on:{click:function(o){return t.$router.push("/user/"+e.username)}}},[o("avatar-icon",{attrs:{user:e,size:"small"}}),o("div",{staticClass:"heart_button__modal__username"},[t._v(t._s(e.username))])],1)})),t.likes.length?t._e():o("div",{staticClass:"heart_button__modal__empty"},[t._v(" No likes ")])],2)]),o("font-awesome-icon",{staticClass:"heart_button__heart",class:{"heart_button__heart--unlikeable":!t.likeable,"heart_button__heart--liked":t.liked},attrs:{icon:["fa","heart"]},on:{click:t.changeLike}}),o("span",{staticClass:"heart_button__count",on:{click:function(e){t.showModal=!0}}},[t._v(t._s(t.likes.length))])],1)},_=[],f=(o("45fc"),o("a434"),o("6307")),m=o("9098"),v=o("c4b0"),g=o.n(v),b={name:"HeartButton",props:["post"],components:{ModalWindow:f["a"],AvatarIcon:m["a"]},data:function(){return{likes:this.post.Likes,showModal:!1}},computed:{likeable:function(){var t=this.post.User?this.post.User.username:null;return this.$store.state.username&&t!==this.$store.state.username},liked:function(){var t=this;return this.likes.some((function(e){return e.username===t.$store.state.username}))}},methods:{getIndexOfUser:function(){for(var t,e=0;e<this.likes.length;e++){var o=this.likes[e];if(o.username===this.$store.state.username){t=e;break}}return t},changeLike:function(){var t=this,e=this.post.id;this.likeable&&(this.liked?this.axios.delete("/api/v1/post/"+e+"/like").then((function(){t.likes.splice(t.getIndexOfUser(),1)})).catch(g()(this.$store)):this.axios.put("/api/v1/post/"+e+"/like").then((function(){return t.axios.get("/api/v1/user/"+t.$store.state.username)})).then((function(e){t.likes.push(e.data)})).catch(g()(this.$store)))}}},w=b,y=(o("fc6b"),Object(p["a"])(w,h,_,!1,null,"a1749664",null)),C=y.exports,k=o("80e3"),S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("info-tooltip",{staticClass:"replying_to",on:{hover:t.loadPost}},[o("template",{slot:"content"},[o("div",{staticStyle:{"margin-top":"-0.25rem"}},[t.post?o("div",{staticClass:"replying_to__username"},[t._v(t._s(t.postUsername))]):t._e(),t.post?o("div",{staticClass:"replying_to__date"},[t._v(t._s(t._f("formatDate")(t.post.createdAt,"date|time"," - ")))]):t._e()]),t.post?o("div",{staticClass:"replying_to__content"},[t._v(t._s(t._f("truncate")(t._f("stripTags")(t.post.content),100)))]):[t._v("Loading...")]],2),o("div",{staticClass:"replying_to__display",attrs:{slot:"display"},on:{click:function(e){return e.stopPropagation(),t.$emit("click")}},slot:"display"},[o("font-awesome-icon",{staticClass:"replying_to__icon",attrs:{icon:["fa","reply"]}}),t._v(" "+t._s(t.username||"[deleted]")+" ")],1)],2)},M=[],$={name:"ReplyingTo",props:["replyId","username"],components:{InfoTooltip:r["a"]},data:function(){return{post:null}},computed:{postUsername:function(){return this.post.User?this.post.User.username:"[deleted]"}},methods:{loadPost:function(){var t=this;this.post||this.axios.get("/api/v1/post/"+this.replyId).then((function(e){t.post=e.data})).catch(g()(this.$store))}}},T=$,P=(o("acf9"),Object(p["a"])(T,S,M,!1,null,null,null)),x=P.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"report_post_modal"},[o("modal-window",{attrs:{loading:t.loading},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[o("div",{staticClass:"report_post_modal__modal",attrs:{slot:"main"},slot:"main"},[o("h3",[t._v("Report this post")]),o("div",{staticClass:"report_post_modal--margin"},[t._v("Select a reason for reporting this post below:")]),o("select-button",{staticClass:"report_post_modal--margin",attrs:{options:t.reportOptions,"touch-disabled":!0},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}})],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("button",{staticClass:"button button--modal",on:{click:function(e){return e.stopPropagation(),t.submitReport(e)}}},[t._v("Submit")]),o("button",{staticClass:"button button--modal",on:{click:function(e){return e.stopPropagation(),t.setShowModal(!1)}}},[t._v("Cancel")])])])],1)},O=[],U=o("5016"),j={name:"ReportPostModal",props:["value","post-id"],components:{ModalWindow:f["a"],SelectButton:U["a"]},data:function(){return{showModal:!1,loading:!1,selectedOption:0,reportOptions:[{name:"Reason for reporting",disabled:!0},{name:"Spam",value:"spam"},{name:"Inappropriate content",value:"inappropriate"},{name:"Harassment",value:"harassment"}]}},methods:{setShowModal:function(t){this.showModal=t},submitReport:function(){var t=this;this.selectedOption&&(this.loading=!0,this.axios.post("/api/v1/report",{postId:this.postId,reason:this.selectedOption}).then((function(){t.setShowModal(!1),t.selectedOption=0,t.loading=!1})).catch((function(e){t.loading=!1,g()(t.$store)(e)})))}},watch:{value:function(t){this.showModal=t,this.$emit("input",t)},showModal:function(t){this.$emit("input",t)}}},q=j,I=(o("74e4"),Object(p["a"])(q,R,O,!1,null,"4122dcc2",null)),L=I.exports,E={name:"ThreadPost",props:["post","highlight","showReply","showThread","showSelect","clickForPost","allowQuote"],components:{PostReply:d,ModalWindow:f["a"],FancyInput:k["a"],ReplyingTo:x,AvatarIcon:m["a"],HeartButton:C,ReportPostModal:L},data:function(){var t=this.post;return{hover:!1,showShareModal:!1,showReportPostModal:!1,postURL:"".concat(location.origin,"/p/").concat(t.id),selected:!1,showQuote:!1,quoteX:0,quoteY:0,quoteSelection:"",postContentHTML:t.content}},computed:{username:function(){return this.post.User?this.post.User.username:"[deleted]"},showActions:function(){return this.hover||this.showShareModal||this.showReportPostModal}},methods:{emitReply:function(){this.showQuote=!1,this.$emit("reply",this.post.id,this.username,this.quoteSelection)},setShowQuote:function(){var t=this.$el.getBoundingClientRect(),e=window.getSelection(),o=e.getRangeAt(0).getBoundingClientRect(),s=e.toString();s.length?(this.quoteY=o.top-t.top-30,this.quoteX=o.left-t.left,this.quoteSelection="> "+s.replace(/\n/g,"\n> ")+"\n\n",this.showQuote=!0):this.showQuote=!1},setShareModalState:function(t){this.showShareModal=t},setShowReportPostModal:function(t){this.showReportPostModal=t},goToThread:function(){this.$router.push("/thread/".concat(this.post.Thread.slug,"/").concat(this.post.Thread.id))},goToPost:function(){this.clickForPost&&this.$router.push("/thread/"+this.post.Thread.slug+"/"+this.post.Thread.id+"/"+this.post.postNumber)},toggleSelected:function(){this.selected=!this.selected,this.$emit("selected",this.post.id)}},watch:{showSelect:function(){this.selected&&this.$emit("selected",this.post.id),this.selected=!1}},mounted:function(){var t=this;this.$linkExpander(this.post.content,(function(e){return t.postContentHTML=e}))}},Q=E,A=(o("ba57"),Object(p["a"])(Q,s,n,!1,null,"06e0255c",null));e["a"]=A.exports},4273:function(t,e,o){"use strict";var s=o("8bc6"),n=o.n(s);n.a},"45fc":function(t,e,o){"use strict";var s=o("23e7"),n=o("b727").some,a=o("a640"),i=o("ae40"),r=a("some"),l=i("some");s({target:"Array",proto:!0,forced:!r||!l},{some:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"4ef1":function(t,e,o){},"5c93":function(t,e,o){},"74e4":function(t,e,o){"use strict";var s=o("ea53"),n=o.n(s);n.a},"84a2":function(t,e,o){(function(e){var o="Expected a function",s=NaN,n="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,d=p||u||Function("return this")(),h=Object.prototype,_=h.toString,f=Math.max,m=Math.min,v=function(){return d.Date.now()};function g(t,e,s){var n,a,i,r,l,c,p=0,u=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError(o);function _(e){var o=n,s=a;return n=a=void 0,p=e,r=t.apply(s,o),r}function g(t){return p=t,l=setTimeout(C,e),u?_(t):r}function b(t){var o=t-c,s=t-p,n=e-o;return d?m(n,i-s):n}function y(t){var o=t-c,s=t-p;return void 0===c||o>=e||o<0||d&&s>=i}function C(){var t=v();if(y(t))return S(t);l=setTimeout(C,b(t))}function S(t){return l=void 0,h&&n?_(t):(n=a=void 0,r)}function M(){void 0!==l&&clearTimeout(l),p=0,n=c=a=l=void 0}function $(){return void 0===l?r:S(v())}function T(){var t=v(),o=y(t);if(n=arguments,a=this,c=t,o){if(void 0===l)return g(c);if(d)return l=setTimeout(C,e),_(c)}return void 0===l&&(l=setTimeout(C,e)),r}return e=k(e)||0,w(s)&&(u=!!s.leading,d="maxWait"in s,i=d?f(k(s.maxWait)||0,e):i,h="trailing"in s?!!s.trailing:h),T.cancel=M,T.flush=$,T}function b(t,e,s){var n=!0,a=!0;if("function"!=typeof t)throw new TypeError(o);return w(s)&&(n="leading"in s?!!s.leading:n,a="trailing"in s?!!s.trailing:a),g(t,e,{leading:n,maxWait:e,trailing:a})}function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){return!!t&&"object"==typeof t}function C(t){return"symbol"==typeof t||y(t)&&_.call(t)==n}function k(t){if("number"==typeof t)return t;if(C(t))return s;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=r.test(t);return o||l.test(t)?c(t.slice(2),o?2:8):i.test(t)?s:+t}t.exports=b}).call(this,o("c8ba"))},8674:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"scroll_load"},[t._t("default")],2)},n=[],a=o("84a2"),i=o.n(a),r={name:"ScrollLoad",props:["loading","query-selector","padding-bottom","padding-top"],computed:{element:function(){return this.querySelector?document.querySelector(this.querySelector):null}},methods:{onScroll:i()((function(){var t,e,o=this.paddingBottom||300,s=this.paddingTop||150;this.loading||(this.element?(t=Math.floor(this.element.scrollTop+this.element.getBoundingClientRect().height+o-this.element.scrollHeight),e=s-this.element.scrollTop):(t=window.innerHeight+window.pageYOffset+o-document.body.scrollHeight,e=s-document.body.scrollTop),t>0?this.$emit("loadNext"):e>0&&this.$emit("loadPrevious"))}))},mounted:function(){(this.element||window).addEventListener("scroll",this.onScroll)},destroyed:function(){(this.element||window).removeEventListener("scroll",this.onScroll)}},l=r,c=o("2877"),p=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=p.exports},"8bc6":function(t,e,o){},"93b7":function(t,e,o){},acf9:function(t,e,o){"use strict";var s=o("4ef1"),n=o.n(s);n.a},ba57:function(t,e,o){"use strict";var s=o("5c93"),n=o.n(s);n.a},dd92:function(t,e,o){"use strict";var s=o("138c"),n=o.n(s);n.a},ea53:function(t,e,o){},eba0:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post_placeholder"},[o("div",{staticClass:"post_placeholder__meta_data"},[o("div",{staticClass:"post_placeholder__avatar_icon"}),o("div",{staticClass:"post_placeholder__bar post_placeholder__bar--thin post_placeholder__bar--33"})]),o("div",{staticClass:"post_placeholder__content"},[o("div",{staticClass:"post_placeholder__bar post_placeholder__bar--58"}),o("div",{staticClass:"post_placeholder__bar post_placeholder__bar--66"}),o("div",{staticClass:"post_placeholder__bar post_placeholder__bar--50"})])])}],a={name:"ThreadPostPlaceholder"},i=a,r=(o("4273"),o("2877")),l=Object(r["a"])(i,s,n,!1,null,"6505f411",null);e["a"]=l.exports},fc6b:function(t,e,o){"use strict";var s=o("93b7"),n=o.n(s);n.a}}]);
//# sourceMappingURL=chunk-5f239bc7.0e488c2c.js.map