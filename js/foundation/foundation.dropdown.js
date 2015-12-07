(function(e,t,n,r){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.0",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:false,hover_timeout:150,opened:function(){},closed:function(){}},init:function(t,n,r){Foundation.inherit(this,"throttle");e.extend(true,this.settings,n,r);this.bindings(n,r)},events:function(n){var r=this,i=r.S;i(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var n=i(this).data(r.attr_name(true)+"-init")||r.settings;if(!n.is_hover||Modernizr.touch){t.preventDefault();if(i(this).parent("[data-reveal-id]")){t.stopPropagation()}r.toggle(e(this))}}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=i(this),n,s;clearTimeout(r.timeout);if(t.data(r.data_attr())){n=i("#"+t.data(r.data_attr()));s=t}else{n=t;s=i("["+r.attr_name()+'="'+n.attr("id")+'"]')}var o=s.data(r.attr_name(true)+"-init")||r.settings;if(i(e.currentTarget).data(r.data_attr())&&o.is_hover){r.closeall.call(r)}if(o.is_hover)r.open.apply(r,[n,s])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=i(this);var n;if(t.data(r.data_attr())){n=t.data(r.data_attr(true)+"-init")||r.settings}else{var s=i("["+r.attr_name()+'="'+i(this).attr("id")+'"]'),n=s.data(r.attr_name(true)+"-init")||r.settings}r.timeout=setTimeout(function(){if(t.data(r.data_attr())){if(n.is_hover)r.close.call(r,i("#"+t.data(r.data_attr())))}else{if(n.is_hover)r.close.call(r,t)}}.bind(this),n.hover_timeout)}).on("click.fndtn.dropdown",function(t){var n=i(t.target).closest("["+r.attr_name()+"-content]");var s=n.find("a");if(s.length>0&&n.attr("aria-autoclose")!=="false"){r.close.call(r,i("["+r.attr_name()+"-content]"))}if(i(t.target).closest("["+r.attr_name()+"]").length>0){return}if(!i(t.target).data("revealId")&&n.length>0&&(i(t.target).is("["+r.attr_name()+"-content]")||e.contains(n.first()[0],t.target))){t.stopPropagation();return}r.close.call(r,i("["+r.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.closed.call(this)});i(t).off(".dropdown").on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50));this.resize()},close:function(t){var n=this;t.each(function(){var r=e("["+n.attr_name()+"="+t[0].id+"]")||e("aria-controls="+t[0].id+"]");r.attr("aria-expanded","false");if(n.S(this).hasClass(n.settings.active_class)){n.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(n.settings.active_class).prev("["+n.attr_name()+"]").removeClass(n.settings.active_class).removeData("target");n.S(this).trigger("closed").trigger("closed.fndtn.dropdown",[t])}});t.removeClass("f-open-"+this.attr_name(true))},closeall:function(){var t=this;e.each(t.S(".f-open-"+this.attr_name(true)),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t);e.prev("["+this.attr_name()+"]").addClass(this.settings.active_class);e.data("target",t.get(0)).trigger("opened").trigger("opened.fndtn.dropdown",[e,t]);e.attr("aria-hidden","false");t.attr("aria-expanded","true");e.focus();e.addClass("f-open-"+this.attr_name(true))},data_attr:function(){if(this.namespace.length>0){return this.namespace+"-"+this.name}return this.name},toggle:function(e){if(e.hasClass(this.settings.disabled_class)){return}var t=this.S("#"+e.data(this.data_attr()));if(t.length===0){return}this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t));if(t.hasClass(this.settings.active_class)){this.close.call(this,t);if(t.data("target")!==e.get(0))this.open.call(this,t,e)}else{this.open.call(this,t,e)}},resize:function(){var e=this.S("["+this.attr_name()+"-content].open"),t=this.S("["+this.attr_name()+'="'+e.attr("id")+'"]');if(e.length&&t.length){this.css(e,t)}},css:function(e,t){var n=Math.max((t.width()-e.width())/2,8),r=t.data(this.attr_name(true)+"-init")||this.settings;this.clear_idx();if(this.small()){var i=this.dirs.bottom.call(e,t,r);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:i.top});e.css(Foundation.rtl?"right":"left",n)}else{this.style(e,t,r)}return e},style:function(t,n,r){var i=e.extend({position:"absolute"},this.dirs[r.align].call(t,n,r));t.attr("style","").css(i)},dirs:{_base:function(e){var r=this.offsetParent(),i=r.offset(),s=e.offset();s.top-=i.top;s.left-=i.left;s.missRight=false;s.missTop=false;s.missLeft=false;s.leftRightFlag=false;var o;if(n.getElementsByClassName("row")[0]){o=n.getElementsByClassName("row")[0].clientWidth}else{o=t.outerWidth}var u=(t.outerWidth-o)/2;var a=o;if(!this.hasClass("mega")){if(e.offset().top<=this.outerHeight()){s.missTop=true;a=t.outerWidth-u;s.leftRightFlag=true}if(e.offset().left+this.outerWidth()>e.offset().left+u&&e.offset().left-u>this.outerWidth()){s.missRight=true;s.missLeft=false}if(e.offset().left-this.outerWidth()<=0){s.missLeft=true;s.missRight=false}}return s},top:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e);this.addClass("drop-top");if(r.missTop==true){r.top=r.top+e.outerHeight()+this.outerHeight();this.removeClass("drop-top")}if(r.missRight==true){r.left=r.left-this.outerWidth()+e.outerWidth()}if(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu)){n.adjust_pip(this,e,t,r)}if(Foundation.rtl){return{left:r.left-this.outerWidth()+e.outerWidth(),top:r.top-this.outerHeight()}}return{left:r.left,top:r.top-this.outerHeight()}},bottom:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e);if(r.missRight==true){r.left=r.left-this.outerWidth()+e.outerWidth()}if(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu)){n.adjust_pip(this,e,t,r)}if(n.rtl){return{left:r.left-this.outerWidth()+e.outerWidth(),top:r.top+e.outerHeight()}}return{left:r.left,top:r.top+e.outerHeight()}},left:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);this.addClass("drop-left");if(n.missLeft==true){n.left=n.left+this.outerWidth();n.top=n.top+e.outerHeight();this.removeClass("drop-left")}return{left:n.left-this.outerWidth(),top:n.top}},right:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);this.addClass("drop-right");if(n.missRight==true){n.left=n.left-this.outerWidth();n.top=n.top+e.outerHeight();this.removeClass("drop-right")}else{n.triggeredRight=true}var r=Foundation.libs.dropdown;if(e.outerWidth()<this.outerWidth()||r.small()||this.hasClass(t.mega_menu)){r.adjust_pip(this,e,t,n)}return{left:n.left+e.outerWidth(),top:n.top}}},adjust_pip:function(e,t,n,r){var i=Foundation.stylesheet,s=8;if(e.hasClass(n.mega_class)){s=r.left+t.outerWidth()/2-8}else if(this.small()){s+=r.left-8}this.rule_idx=i.cssRules.length;var o=".f-dropdown.open:before",u=".f-dropdown.open:after",a="left: "+s+"px;",f="left: "+(s-1)+"px;";if(r.missRight==true){s=e.outerWidth()-23;o=".f-dropdown.open:before",u=".f-dropdown.open:after",a="left: "+s+"px;",f="left: "+(s-1)+"px;"}if(r.triggeredRight==true){o=".f-dropdown.open:before",u=".f-dropdown.open:after",a="left:-12px;",f="left:-14px;"}if(i.insertRule){i.insertRule([o,"{",a,"}"].join(" "),this.rule_idx);i.insertRule([u,"{",f,"}"].join(" "),this.rule_idx+1)}else{i.addRule(o,a,this.rule_idx);i.addRule(u,f,this.rule_idx+1)}},clear_idx:function(){var e=Foundation.stylesheet;if(typeof this.rule_idx!=="undefined"){e.deleteRule(this.rule_idx);e.deleteRule(this.rule_idx);delete this.rule_idx}},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown");this.S("html, body").off(".fndtn.dropdown");this.S(t).off(".fndtn.dropdown");this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}})(jQuery,window,window.document)
