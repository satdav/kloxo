Event.observe(window,"load",function(){var a=kronolithNodes.length;for(var c=0;c<a;c++){var b=kronolithNodes[c];$(b).update(kronolith[b]);if(typeof Horde_ToolTips!="undefined"){(function(){var d=b;Horde_ToolTips.attachBehavior(d)})()}}Event.observe(window,"unload",Horde_ToolTips.out.bind(Horde_ToolTips))});