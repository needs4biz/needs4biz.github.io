(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{774:function(e,t,l){"use strict";l.r(t);l(33);var n=l(13),r={layout:"DashboardLayout",methods:{initMap:function(e){var map;map=document.getElementById("map-custom");var t=new e.maps.LatLng(40.748817,-73.985428),l={zoom:12,scrollwheel:!1,center:t,mapTypeId:e.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#5e72e4"},{visibility:"on"}]}]};map=new e.maps.Map(map,l);var marker=new e.maps.Marker({position:t,map:map,animation:e.maps.Animation.DROP,title:"Hello World!"}),n=new e.maps.InfoWindow({content:'<div class="info-window-content"><h2>Argon Dashboard PRO</h2><p>A beautiful premium dashboard for Bootstrap 4.</p></div>'});e.maps.event.addListener(marker,"click",(function(){n.open(map,marker)}))}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.e(48).then(l.t.bind(null,767,7));case 2:(n=(n=t.sent).default||n).KEY="YOUR_API_KEY",n.load((function(t){e.initMap(t)}));case 6:case"end":return t.stop()}}),t)})))()}},o=l(10),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("base-header",{staticClass:"pb-6"},[l("div",{staticClass:"row align-items-center py-4"},[l("div",{staticClass:"col-lg-6 col-7"},[l("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[e._v(e._s(e.$route.name))]),e._v(" "),l("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[l("route-breadcrumb")],1)]),e._v(" "),l("div",{staticClass:"col-lg-6 col-5 text-right"},[l("base-button",{attrs:{size:"sm",type:"neutral"}},[e._v("New")]),e._v(" "),l("base-button",{attrs:{size:"sm",type:"neutral"}},[e._v("Filters")])],1)])]),e._v(" "),e._m(0)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card border-0"},[t("div",{staticClass:"map-canvas",staticStyle:{height:"600px"},attrs:{id:"map-custom"}})])])])])}],!1,null,null,null);t.default=component.exports}}]);