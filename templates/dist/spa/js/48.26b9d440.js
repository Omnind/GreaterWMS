(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"0354":function(e,t,n){"use strict";var a=n("3eb9"),o=n.n(a);t["default"]=o.a},"3eb9":function(e,t){},d42d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[n("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("q-btn-group",{attrs:{push:""}},[n("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}})],1),n("q-space"),n("q-btn-group",{attrs:{push:""}},[n("q-btn",{attrs:{color:"purple",label:e.$t("stock.view_stocklist.cyclecountresult")},on:{click:function(t){return e.ConfirmCount()}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n            "+e._s(e.$t("stock.view_stocklist.cyclecountresulttip"))+"\n          ")])],1)],1)]},proxy:!0},{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-td",{key:"bin_name",class:{"scan-background":""!==e.bin_scan&&e.bin_scan===t.row.bin_name},attrs:{props:t}},[e._v("\n          "+e._s(t.row.bin_name)+"\n        ")]),n("q-td",{key:"goods_code",attrs:{props:t}},[e._v("\n          "+e._s(t.row.goods_code)+"\n        ")]),n("q-td",{key:"physical_inventory",attrs:{props:t}},[e._v("\n          "+e._s(t.row.physical_inventory)+"\n        ")]),n("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:t}},[n("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"repeat"},on:{click:function(e){t.row.physical_inventory=0}}})],1)],1)]}}])})],1),[n("div",{staticClass:"q-pa-lg flex cordova-footer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.barscan,expression:"barscan"}],attrs:{id:"scannedBarcodes",type:"text",readonly:"",disabled:""},domProps:{value:e.barscan},on:{input:[function(t){t.target.composing||(e.barscan=t.target.value)},function(t){return e.datachange()}]}})])]],2)},o=[],s=n("3004"),c=n("3a34"),i=n.n(c),r=n("18d6");new i.a;function l(){Uplugin.getDeviceID("",(function(e){console.log(e)}),(function(e){console.log(e)}))}function d(){Uplugin.getBarcode("start",(function(e){document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=e,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input")),console.log(1,e)}),(function(e){console.log(e)}))}function u(){Uplugin.getBarcode("stop",(function(e){console.log(e)}),(function(e){console.log(e)}))}var g={name:"Pageurovo_cyclecount",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"physical_inventory",label:this.$t("stock.view_stocklist.physical_inventory"),field:"physical_inventory",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"10000"},screenq:this.$q.screen,IMEI:window.device,batteryStatus:"determining...",barscan:"",bin_scan:"",goods_scan:""}},methods:{datachange(){var e=this;console.log(3,document.getElementById("scannedBarcodes").value),e.$q.localStorage.has("auth")&&Object(s["e"])("scanner/?bar_code="+e.barscan,{}).then((t=>{console.log(2,t),e.barscan=t.results[0].code,"BINSET"===t.results[0].mode?(e.bin_scan=t.results[0].code,e.goods_scan=""):"GOODS"===t.results[0].mode&&(e.goods_scan=t.results[0].code,e.countAdd(e.goods_scan))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},countAdd(e){var t=this;t.table_list.filter((function(n,a,o){n.bin_name===t.bin_scan&&n.goods_code===e&&(t.table_list[a].physical_inventory+=1)}))},getList(){var e=this;e.$q.localStorage.has("auth")&&Object(s["e"])(e.pathname,{}).then((t=>{e.table_list=t.results})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.barscan="",e.bin_scan="",e.goods_scan="",e.getList()},ConfirmCount(){var e=this;r["a"].has("auth")&&Object(s["i"])(e.pathname,e.table_list).then((t=>{e.$q.notify({message:"Success Confirm Cycle Count",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},updateBatteryStatus(e){var t=this;t.batteryStatus=`Level: ${e.level}, plugged: ${e.isPlugged}`},scanEvents(){var e=this;document.addEventListener("deviceready",e.onDeviceReady,!1)},onDeviceReady(){d()},onPause:function(){u()},onResume(){}},created(){var e=this;e.$q.localStorage.has("openid")?e.openid=e.$q.localStorage.getItem("openid"):(e.openid="",e.$q.localStorage.set("openid","")),e.$q.localStorage.has("login_name")?e.login_name=e.$q.localStorage.getItem("login_name"):(e.login_name="",e.$q.localStorage.set("login_name","")),e.$q.localStorage.has("auth")?e.authin="1":e.authin="0"},mounted(){var e=this;window.addEventListener("batterystatus",e.updateBatteryStatus,!1),e.height=this.$q.screen.height-175+"px",e.barscan="",e.bin_scan="",e.goods_scan="",e.getList(),e.scanEvents(),l()},updated(){},beforeDestroy(){var e=this;window.removeEventListener("batterystatus",e.updateBatteryStatus,!1),window.removeEventListener("deviceready",e.onDeviceReady,!1)},destroyed(){}},p=g,h=n("42e1"),b=n("0354"),v=n("eaac"),_=n("e7a9"),m=n("9c40"),y=n("2c91"),f=n("05c0"),w=n("bd08"),q=n("db86"),$=n("eebe"),k=n.n($),S=Object(h["a"])(p,a,o,!1,null,null,null);"function"===typeof b["default"]&&Object(b["default"])(S);t["default"]=S.exports;k()(S,"components",{QTable:v["a"],QBtnGroup:_["a"],QBtn:m["a"],QSpace:y["a"],QTooltip:f["a"],QTr:w["a"],QTd:q["a"]})}}]);