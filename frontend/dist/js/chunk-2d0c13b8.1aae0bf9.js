(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c13b8"],{"44bd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"route_container"})},r=[],c=(n("99af"),n("c4b0")),o=n.n(c),i={name:"P",methods:{redirect:function(){var t=this,e=this.$route.params.id;this.axios.get("/api/v1/post/"+e).then((function(e){t.$router.push("/thread/".concat(e.data.Thread.slug,"/").concat(e.data.Thread.id,"/").concat(e.data.postNumber))})).catch(o()(this.$store))}},beforeRouteEnter:function(t,e,n){n((function(t){return t.redirect()}))}},s=i,u=n("2877"),d=Object(u["a"])(s,a,r,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c13b8.1aae0bf9.js.map