(function(t){function e(e){for(var a,r,l=e[0],o=e[1],c=e[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,l=1;l<i.length;l++){var o=i[l];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},n=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0087":function(t,e){t.exports="data:image/png;base64,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"},"1f95":function(t,e,i){t.exports=i.p+"img/3a74ce3d0532b7773b174c45ca3bd05a_bigger.23bfe74b.png"},"3a30":function(t,e,i){t.exports=i.p+"img/r-michelle-tsang-500721-unsplash-min.052e4506.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header",{attrs:{socialIconClassesList:t.socialIconClassesList}}),i("TodaysPick"),i("Recipes"),i("CulinaryCollection"),i("FarmToTable"),i("Subscribe"),i("Footer",{attrs:{socialIconClassesList:t.socialIconClassesList}})],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"collection_container_fluid"},[i("div",{staticClass:"collection_container"},[t._m(0),i("div",{staticClass:"collection_cards_container"},t._l(t.collectionsList,(function(e,a){return i("div",{key:"collection"+a,staticClass:"collection_card"},[i("img",{attrs:{src:e.imgUrl,alt:""}}),i("h6",[t._v(t._s(e.title))])])})),0)])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"collection_title_container"},[i("h4",[t._v("CULINARY COLLECTION")]),i("p",[t._v("Aliquam erat voluptat. Ut quis ligula magna blandit finibus. Sunspendisse maximus lacus non nunc lacinia lobortis.")])])}],o={name:"CulinaryCollection",data:function(){return{collectionsList:[{imgUrl:i("7d67"),title:"BAKERY"},{imgUrl:i("7d67"),title:"BAKERY"},{imgUrl:i("7d67"),title:"BAKERY"},{imgUrl:i("7d67"),title:"BAKERY"},{imgUrl:i("7d67"),title:"BAKERY"},{imgUrl:i("7d67"),title:"BAKERY"},{imgUrl:i("7d67"),title:"BAKERY"},{imgUrl:i("7d67"),title:"BAKERY"}]}}},c=o,u=i("2877"),d=Object(u["a"])(c,r,l,!1,null,null,null),m=d.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"farm_to_table_container_fluid"},[a("div",{staticClass:"farm_to_table_container"},[t._m(0),a("div",{staticClass:"bottom_farm_to_table_container"},[a("div",{staticClass:"left_bottom_farm_to_table_container"},[a("div",{staticClass:"farm_to_table_card"},[a("img",{attrs:{src:t.selectedArticle.imageUrl,alt:""}}),a("div",{staticClass:"farm_to_table_card_text_container"},[a("h5",[t._v(t._s(t.selectedArticle.title))]),a("span",[t._v(t._s(t.selectedArticle.info))]),a("p",[t._v(" "+t._s(t.selectedArticle.text)+" ")]),t._m(1)])]),a("div",{staticClass:"article_card_container"},t._l(t.articlesList,(function(e,i){return a("div",{key:"farm_article"+i,staticClass:"article_card"},[a("div",{staticClass:"image_container"},[a("img",{attrs:{src:e.imageUrl,alt:""}})]),a("h5",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.info))])])})),0)]),a("div",{staticClass:"right_bottom_farm_to_table_container"},[t._m(2),a("div",{staticClass:"city_guides_container"},[a("img",{attrs:{src:i("dd7e"),alt:""}}),t._m(3),t._m(4),a("div",{staticClass:"div_with_border"})]),a("div",{staticClass:"social_section_container"},[a("input",{attrs:{type:"text",placeholder:"Search..."}}),a("h6",[t._v("Follow Us")]),a("div",{staticClass:"social_icons_container_row"},t._l(t.socialIconClassesList,(function(t,e){return a("div",{key:"socialIcon"+e,staticClass:"social_icon_container"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa ",class:t})])])})),0),t._m(5),a("div",{staticClass:"mini_article_posts_container"},t._l(t.articlesList,(function(e,i){return a("div",{key:"miniArticle"+i,staticClass:"mini_article_post"},[a("div",{staticClass:"image_container"},[a("img",{attrs:{src:e.imageUrl,alt:""}})]),a("div",{staticClass:"mini_article_text_container"},[a("h6",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.info))])])])})),0),t._m(6)])])])])])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upper_farm_to_table_container"},[i("div",{staticClass:"farm_to_table_title_container"},[i("h4",[t._v("FARM TO TABLE")]),i("p",[t._v("Aliquam erat voluptat. Ut quis ligula magna blandit finibus. Sunspendisse maximus lacus non nunc lacinia lobortis.")])]),i("div",{staticClass:"button_container"},[i("button",{attrs:{type:"button"}},[t._v("READ OUR BLOG "),i("i",{staticClass:"fa fa-archive",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex"},[i("a",{attrs:{href:"#"}},[t._v("Read more >")]),i("a",{staticClass:"ms-auto",attrs:{href:"#"}},[i("i",{staticClass:"fa fa-comments-o",attrs:{"aria-hidden":"true"}}),t._v(" 0")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view_recipes_container"},[i("h3",[t._v("VIEW OUR LATEST RECIPES")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city_guide_info"},[i("h4",[t._v("City Guide: Singapore")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city_guide_bottom_tag"},[i("p",[i("i",{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}}),t._v(" View all city guides")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic radio toggle button group"}},[i("input",{staticClass:"btn-check",attrs:{type:"radio",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""}}),i("label",{staticClass:"btn btn-outline-primary",attrs:{for:"btnradio1"}},[t._v("Popular")]),i("input",{staticClass:"btn-check",attrs:{type:"radio",name:"btnradio",id:"btnradio2",autocomplete:"off"}}),i("label",{staticClass:"btn btn-outline-primary",attrs:{for:"btnradio2"}},[t._v("Recent")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tweets_container"},[a("div",{staticClass:"title_container"},[a("h5",[a("strong",[t._v("Tweets")]),t._v(" by "),a("a",{attrs:{href:"#"}},[t._v("@Team_Fusion")])]),a("a",{staticClass:"ms-auto",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"tweet_post_container"},[a("div",{staticClass:"image_container"},[a("img",{attrs:{src:i("1f95"),alt:""}})]),a("div",{staticClass:"tweet_post_text_container"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",[a("h6",[t._v("Theme Fusion")]),a("a",{attrs:{href:"#"}},[t._v("@Theme_Fusion")])]),a("a",{staticClass:"ms-auto",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-twitter"})])]),a("p",[t._v(" Do you need sublime Wordpress hosting for your next website? Take advantage for exclusive partner offers that we have secured just for you, & launch your site in seconds with "),a("a",{attrs:{href:"#"}},[t._v("#avada")]),t._v(" on WP Engine hosting & get 30% Off this Black Friday "),a("br"),a("a",{attrs:{href:"#"}},[t._v("brt.ly/3lqLLE2")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("#BlackFriday2021")])]),a("div",{staticClass:"image_container"},[a("img",{attrs:{src:i("e4fd"),alt:""}})]),a("div",{staticClass:"tweet_post_options_container"},[a("div",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-heart-o"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-sign-out"})])]),a("a",{staticClass:"ms-auto",attrs:{href:"#"}},[t._v("21 "),a("i",{staticClass:"fa fa-thumbs-o-up"})])])])])])}],p={name:"FarmToTable",data:function(){return{articlesList:[{imageUrl:i("a12a"),title:"Food Corner: Top Japanese Restaurants for Sushi",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{imageUrl:i("823b"),title:"Roundup: My New Favourite Recipes For Healthy Living",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{imageUrl:i("6233"),title:"Why These Toasts with Tea are My New Favourite",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{imageUrl:i("6233"),title:"Why These Toasts with Tea are My New Favourite",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{imageUrl:i("6233"),title:"Why These Toasts with Tea are My New Favourite",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{imageUrl:i("6233"),title:"Why These Toasts with Tea are My New Favourite",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{imageUrl:i("6233"),title:"Why These Toasts with Tea are My New Favourite",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{imageUrl:i("6233"),title:"Why These Toasts with Tea are My New Favourite",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."}],selectedArticle:{imageUrl:i("a12a"),title:"Food Corner: Top Japanese Restaurants for Sushi",info:"By admin | March 25th, 2019",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},socialIconClassesList:["fa-facebook","fa-instagram","fa-twitter","fa-youtube-play","fa-pinterest"]}}},f=p,v=Object(u["a"])(f,A,g,!1,null,null,null),h=v.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex w-100 justify-content-center py-5"},[a("div",{staticClass:"logo_and_social_container"},[a("img",{attrs:{src:i("cb71"),alt:""}}),a("ul",t._l(t.socialIconClassesList,(function(t,e){return a("li",{key:"footerIcon"+e},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa ",class:t,attrs:{"aria-hidden":"true"}})])])})),0)]),a("div",{staticClass:"footer_links_container"},[a("ul",t._l(t.footerLinksList,(function(e,i){return a("li",{key:"link"+i},[a("a",{attrs:{href:"#"}},[t._v(t._s(e))])])})),0)]),a("div",{staticClass:"contact_container"},[a("h4",[t._v("Contact")]),a("ul",t._l(t.contactsList,(function(e,i){return a("li",{key:"contact"+i,staticClass:"d-flex"},[a("div",[a("i",{staticClass:"fa ",class:e.icon,attrs:{"aria-hidden":"true"}})]),a("span",[t._v(" "+t._s(e.text)+" ")])])})),0)]),t._m(0)])]),t._m(1)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"get_your_app_container"},[a("h4",[t._v("Get your app!")]),a("a",{attrs:{href:""}},[a("img",{attrs:{src:i("b0b8"),alt:""}})]),a("a",{attrs:{href:""}},[a("img",{attrs:{src:i("0087"),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid d-flex position-relative justify-content-center "},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-chevron-circle-up",attrs:{"aria-hidden":"true"}})]),i("span",[t._v("© Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All rights reserved | Powered by Wordpress")])])}],C={name:"Footer",props:{socialIconClassesList:Array},data:function(){return{footerLinksList:["Recipes","Places","Blog","About","Contact"],contactsList:[{icon:"fa-map-marker",text:"775 New York Ave, Brooklyn, Kings, New York 11203"},{icon:"fa-phone",text:"+ 0100-505-0000"},{icon:"fa-envelope",text:"info@your-domain.com"}]}}},B=C,_=Object(u["a"])(B,W,b,!1,null,null,null),y=_.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"container"},[i("div",{staticClass:"d-flex"},[t._m(0),i("ul",{staticClass:"ms-auto"},t._l(t.socialIconClassesList,(function(t,e){return i("li",{key:"icon"+e},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa ",class:t,attrs:{"aria-hidden":"true"}})])])})),0)]),t._m(1),i("div",{staticClass:"d-flex justify-content-center mt-3"},[i("ul",[t._l(t.navbarLinksList,(function(e,a){return i("li",{key:"navbarLink"+a},[i("a",{class:a===t.currentNavbarLinkId?"active":"",attrs:{href:"#"}},[t._v(t._s(e))])])})),t._m(2)],2)])])},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"#"}},[t._v("Download App")]),i("button",{attrs:{type:"button"}},[t._v("iOS")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("Advertise with us")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("img",{attrs:{src:i("8267"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])}],k={name:"Header",props:{socialIconClassesList:Array},data:function(){return{navbarLinksList:["Home","Recipes","Places","Blog","About","Contact"],currentNavbarLinkId:0}},computed:{}},E=k,M=Object(u["a"])(E,P,w,!1,null,null,null),x=M.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid recipes_container_fluid"},[i("div",{staticClass:"recipes_container"},[t._m(0),i("div",{staticClass:"container recipe_cards_container"},[i("div",{staticClass:"recipe_card"},[i("img",{attrs:{src:t.selectedRecipe.poster,alt:""}}),i("div",{staticClass:"recipe_card_text_container"},[i("h5",[t._v(t._s(t.selectedRecipe.title))]),i("span",[t._v(t._s(t.selectedRecipe.subtitle))]),i("p",[t._v(" "+t._s(t.selectedRecipe.text)+" ")]),i("button",{attrs:{type:"button"}},[t._v("LEARN MORE")])])]),i("div",{staticClass:"recipe_posters_container"},t._l(t.recipesList,(function(t,e){return i("img",{key:"recipe"+e,attrs:{src:t.poster,alt:""}})})),0)])])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recipe_title_container"},[i("h4",[t._v("POPULAR RECIPES")]),i("p",[t._v("Aliquam erat voluptat. Ut quis ligula magna blandit finibus. Sunspendisse maximus lacus non nunc lacinia lobortis.")])])}],H={name:"Recipes",data:function(){return{recipesList:[{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."},{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."}],selectedRecipe:{poster:i("f3ba"),title:"Lunch Favourite with Salad, Naan and Beans",subtitle:"Bakery, Featured, Healthy, Latest recipes, Staff Picks",text:"Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id."}}}},G=H,L=Object(u["a"])(G,O,S,!1,null,null,null),F=L.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"subscribe_container"},[t._m(0),i("div",t._l(t.imagesUrlList,(function(t,e){return i("img",{key:"subscribtionImageUrl"+e,attrs:{src:t,alt:""}})})),0)])},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container text-center"},[i("h3",[t._v("Subscribe & Receive A Free eBook")]),i("p",[t._v("Aliquam erat voluptat. Ut quis ligula a magna blandit finibus. Suspendisse maximus locus non nunc lacinia lobortis.")]),i("div",{staticClass:"mail_subscribtion_container"},[i("input",{attrs:{type:"email",name:"",id:"",placeholder:"Insert your email...*"}}),i("button",{attrs:{type:"submit"}},[t._v("SUBSCRIBE")])]),i("p",[t._v("Cras porlititur pelleritesque sem eu pretium.")])])}],R={name:"Subscribe",data:function(){return{imagesUrlList:[i("f3ba"),i("c306"),i("a21f"),i("3a30")]}}},T=R,J=Object(u["a"])(T,U,Z,!1,null,null,null),N=J.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todays_pick_container"},[t._m(0),i("div",{staticClass:"articles_choices_container"},[i("h5",[t._v("FOODIE JOURNAL")]),i("div",{staticClass:"d-flex"},t._l(t.articlesList,(function(e,a){return i("div",{key:"article"+a,staticClass:"article_card_container"},[i("div",{staticClass:"image_container"},[i("img",{attrs:{src:e.imageUrl,alt:""}})]),i("h5",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.info))])])})),0)])])},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todays_pick_background_container"},[i("div",{staticClass:"article"},[i("h3",[t._v("Food Corner: Top Japanese Restaurants for Sushi")]),i("p",[t._v("March 25, 2019")]),i("div",{staticClass:"article_tag"},[i("span",[t._v("TODAY'S PICK")])])])])}],Y={name:"TodaysPick",data:function(){return{articlesList:[{imageUrl:i("a12a"),title:"Food Corner: Top Japanese Restaurants for Sushi",info:"By admin | March 25th, 2019"},{imageUrl:i("823b"),title:"Roundup: My New Favourite Recipes For Healthy Living",info:"By admin | March 25th, 2019"},{imageUrl:i("6233"),title:"Why These Toasts with Tea are My New Favourite",info:"By admin | March 25th, 2019"}]}}},K=Y,j=Object(u["a"])(K,D,I,!1,null,null,null),z=j.exports,Q={name:"App",components:{Header:x,Footer:y,Subscribe:N,TodaysPick:z,Recipes:F,CulinaryCollection:m,FarmToTable:h},data:function(){return{socialIconClassesList:["fa-facebook","fa-instagram","fa-twitter","fa-youtube-play"]}}},V=Q,q=(i("5c0b"),Object(u["a"])(V,s,n,!1,null,null,null)),X=q.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},6233:function(t,e,i){t.exports=i.p+"img/fi-toasts.5518feb6.jpg"},"7d67":function(t,e){t.exports="data:image/png;base64,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"},"823b":function(t,e,i){t.exports=i.p+"img/fi-roundup.2ddf01bf.jpg"},8267:function(t,e,i){t.exports=i.p+"img/avada-food-logo.8eea4cfb.png"},"9c0c":function(t,e,i){},a12a:function(t,e,i){t.exports=i.p+"img/single-post-img3.80e82235.jpg"},a21f:function(t,e,i){t.exports=i.p+"img/r-rachel-park-366508-unsplash-min.d6ba09be.jpg"},b0b8:function(t,e){t.exports="data:image/png;base64,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"},c306:function(t,e,i){t.exports=i.p+"img/Mixed-fruits.ef529287.jpg"},cb71:function(t,e,i){t.exports=i.p+"img/avada-food-logo-mob-2x.94515a57.png"},dd7e:function(t,e,i){t.exports=i.p+"img/singapore-featured-image.7de394e5.jpg"},e4fd:function(t,e,i){t.exports=i.p+"img/En2TRxLW4AEiWUN.06d6ba07.jpeg"},f3ba:function(t,e,i){t.exports=i.p+"img/Yogurt-Nan.067abd8a.jpg"}});
//# sourceMappingURL=app.9d982022.js.map