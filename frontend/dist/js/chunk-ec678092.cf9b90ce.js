(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec678092"],{"05e8":function(e,s,t){},"28eb":function(e,s,t){"use strict";var a=t("4bf4"),r=t.n(a);r.a},"4bf4":function(e,s,t){},"713f":function(e,s,t){},"73b2":function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"user_placeholder"},[t("div",{staticClass:"user_placeholder__avatar"}),t("div",{staticClass:"user_placeholder__username"})])}],i={name:"UserPlaceholder"},n=i,l=(t("a4a1"),t("2877")),d=Object(l["a"])(n,a,r,!1,null,"538c905c",null);s["a"]=d.exports},"82e1":function(e,s,t){"use strict";var a=t("713f"),r=t.n(a);r.a},"90f5":function(e,s,t){"use strict";var a=t("05e8"),r=t.n(a);r.a},"93e1":function(e,s,t){},9870:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"thread_display_placeholder"},[t("div",{staticClass:"thread_display_placeholder__icon"}),t("div",{staticStyle:{width:"100%"}},[t("div",{staticClass:"thread_display_placeholder__header"},[t("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--15"}),t("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--33"})]),t("div",{staticClass:"thread_display_placeholder__replies_bar"},[t("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--20"}),t("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--5"})]),t("div",{staticClass:"thread_display_placeholder__content"},[t("div",{staticClass:"thread_display_placeholder__bar"}),t("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--58"})])])])}],i={name:"ThreadDisplayPlaceholder"},n=i,l=(t("ad2c"),t("2877")),d=Object(l["a"])(n,a,r,!1,null,"3ef4b836",null);s["a"]=d.exports},a4a1:function(e,s,t){"use strict";var a=t("93e1"),r=t.n(a);r.a},ac51:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"user_display",on:{click:function(s){return e.$router.push("/user/"+e.user.username)}}},[t("avatar-icon",{attrs:{user:e.user,size:"small"}}),t("div",{staticClass:"user_display__username"},[e._v(" "+e._s(e.user.username)+" ")])],1)},r=[],i=t("9098"),n={name:"UserDisplay",props:["user"],components:{AvatarIcon:i["a"]}},l=n,d=(t("90f5"),t("2877")),c=Object(d["a"])(l,a,r,!1,null,"cb3c8d9a",null);s["a"]=c.exports},ad2c:function(e,s,t){"use strict";var a=t("b162"),r=t.n(a);r.a},b162:function(e,s,t){},bd28:function(e,s,t){"use strict";var a=t("bc3a"),r=t.n(a);s["a"]=function(e,s){"userPosts"===e||"userThreads"===e?r.a.get("/api/v1/user/"+s).then((function(s){return r.a.post("/api/v1/log",{route:e,resourceId:s.data.id})})).catch(console.log):r.a.post("/api/v1/log",{route:e,resourceId:s}).catch(console.log)}},ce34:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"thread_display"},[t("avatar-icon",{ref:"avatar",staticClass:"thread_display__icon",attrs:{user:e.thread.User,size:"small"},on:{click:e.goToUser}}),t("div",{staticStyle:{width:"calc(100% - 3rem)"},on:{click:e.goToThread}},[t("div",{staticClass:"thread_display__header"},[t("span",{staticClass:"thread_display__name"},[e._v(" "+e._s(e.thread.name)+" ")]),t("div",{staticClass:"thread_display__meta_bar"},[t("div",[e._v(" By "),t("span",{ref:"username",staticClass:"thread_display__username"},[e._v(e._s(e._f("truncateMid")(e.threadUsername,25)))]),e._v(" in "),t("span",{ref:"category",staticClass:"thread_display__category"},[e._v(e._s(e.thread.Category.name))]),e._v(" · "),t("span",{staticClass:"thread_display__date"},[e._v(e._s(e._f("formatDate")(e.thread.createdAt)))])])])]),t("div",{staticClass:"thread_display__replies_bar"},[2===e.thread.Posts.length?t("div",{staticClass:"thread_display__latest_reply"},[t("font-awesome-icon",{attrs:{icon:["fa","reply"],"fixed-width":""}}),t("span",{staticClass:"thread_display__latest_reply__text"},[e._v("Latest reply by ")]),t("span",{staticClass:"thread_display__username"},[e._v(e._s(e.replyUsername))]),e._v(" · "),t("span",{staticClass:"thread_display__date"},[e._v(e._s(e._f("formatDate")(e.thread.Posts[1].createdAt)))])],1):t("span",{staticStyle:{cursor:"default"}},[e._v("No replies")]),t("div",{staticClass:"thread_display__replies",attrs:{title:"Replies to thread"}},[t("font-awesome-icon",{attrs:{icon:["far","comment"],"fixed-width":""}}),e._v(" "+e._s(e.thread.postsCount-1)+" ")],1)]),t("div",{staticClass:"thread_display__content"},[e._v(" "+e._s(e._f("truncate")(e._f("stripTags")(e.thread.Posts[0].content),150))+" ")])])],1)},r=[],i=t("9098"),n={name:"ThreadDisplay",props:["thread"],components:{AvatarIcon:i["a"]},computed:{threadUsername:function(){return this.thread.User?this.thread.User.username:"[deleted]"},replyUsername:function(){return this.thread.Posts[1].User?this.thread.Posts[1].User.username:"[deleted]"}},methods:{goToUser:function(){this.$router.push("/user/"+this.thread.User.username)},goToThread:function(){this.$router.push("/thread/"+this.thread.slug+"/"+this.thread.id)}}},l=n,d=(t("82e1"),t("2877")),c=Object(d["a"])(l,a,r,!1,null,"6bf65f18",null);s["a"]=c.exports},da3f:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"route_container"},[t("h1",[e._v("Search results for '"+e._s(e.$route.params.q)+"'")]),t("transition",{attrs:{name:"fade",mode:"out-in"}},[e.threads&&e.threads.length&&!e.loadingThreads?t("div",{key:"results",staticClass:"search__results"},[t("h2",[e._v("Threads")]),e._l(e.threads.slice(0,3),(function(e){return t("thread-display",{key:"search-thread-"+e.id,attrs:{thread:e}})})),e.threads.length>e.$store.state.MinQueryLength-1?t("div",{staticClass:"search__more search__item",on:{click:function(s){return e.$router.push("/search/threads/"+e.$route.params.q)}}},[t("font-awesome-icon",{attrs:{icon:["fa","comments"],"fixed-width":""}}),e._v(" View all matching threads ")],1):e._e()],2):e._e(),e.loadingThreads?t("div",{key:"loading"},[t("h2",[e._v("Threads")]),t("thread-display-placeholder")],1):e._e()]),t("transition",{attrs:{name:"fade",mode:"out-in"}},[e.users&&e.users.length&&!e.loadingUsers?t("div",{key:"results",staticClass:"search__results"},[t("h2",[e._v("Users")]),e._l(e.users.slice(0,5),(function(e){return t("user-display",{key:"search-user-"+e.id,attrs:{user:e}})})),e.users.length>5?t("div",{staticClass:"search__item search__more",on:{click:function(s){return e.$router.push("/search/users/"+e.$route.params.q)}}},[t("font-awesome-icon",{attrs:{icon:["fa","user"],"fixed-width":""}}),e._v(" View all matching users ")],1):e._e()],2):e._e(),e.loadingUsers?t("div",{key:"loading"},[t("h2",[e._v("Users")]),t("user-placeholder")],1):e._e(),e.showNoResults||e.queryTooShort?t("div",{key:"no results",staticClass:"overlay_message search__overlay_message"},[t("font-awesome-icon",{attrs:{icon:["fa","exclamation-circle"]}}),e._v(" "+e._s(e.queryTooShort?"Search term is too short":"No results found")+" ")],1):e._e()])],1)},r=[],i=t("ac51"),n=t("73b2"),l=t("ce34"),d=t("9870"),c=t("c4b0"),o=t.n(c),h=t("bd28"),_={name:"Search",components:{UserDisplay:i["a"],UserPlaceholder:n["a"],ThreadDisplay:l["a"],ThreadDisplayPlaceholder:d["a"]},data:function(){return{threads:[],loadingThreads:!1,users:[],loadingUsers:!1}},computed:{showNoResults:function(){return!this.loadingUsers&&!this.loadingThreads&&!this.threads.length&&!this.users.length},queryTooShort:function(){return this.$route.params.q.length<this.$store.state.MinQueryLength}},methods:{getUsers:function(){var e=this;this.loadingUsers=!0,this.axios.get("/api/v1/search/user?q="+this.$route.params.q).then((function(s){e.loadingUsers=!1,e.users=s.data.users})).catch(o()(this.$store))},getThreads:function(){var e=this;this.loadingThreads=!0,this.axios.get("/api/v1/search/thread?q="+this.$route.params.q).then((function(s){e.loadingThreads=!1,e.threads=s.data.threads})).catch(o()(this.$store))},getResults:function(){this.queryTooShort||(this.$store.dispatch("setTitle","Search | "+this.$route.params.q),this.getThreads(),this.getUsers())}},watch:{"$route.params":"getResults"},mounted:function(){this.$store.dispatch("setTitle","Search | "+this.$route.params.q),this.getResults(),Object(h["a"])("search")}},u=_,p=(t("28eb"),t("2877")),f=Object(p["a"])(u,a,r,!1,null,"ca42a798",null);s["default"]=f.exports}}]);
//# sourceMappingURL=chunk-ec678092.cf9b90ce.js.map