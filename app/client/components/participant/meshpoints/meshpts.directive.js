'use strict';

angular
    .module('sm.participant')
    .directive('participantImg', participantImg);

function participantImg(){
		var directive = {
			link: link,
      templateUrl:'/client/components/participant/meshpoints/meshpts.html',
    	restrict: 'E'
    };
    return directive;
    function link(scope, element, attrs){
    	angular.element(document).ready(function () {
            var links = [];
            var links_count = 32;
            var connects_time = 240;
            var connects_count = 2;
            var theme_start = { X:150, Y:150, W:300, H:300 };

            function limit_number(min, cur, max) {
                if (cur < min) return min;
                if (cur > max) return max;
                return cur;
            }

            function print_rgba(r, g, b, a) { return "rgba("+r+","+g+","+b+","+a+")"; }

            function Linker()
            {
                var connects = [];
                for (var i=0;i<connects_count;i++) connects.push(Connector());

                    var start_x = Math.random() * theme_start.W;
                var start_y = Math.random() * theme_start.H;

                return {
                    X: start_x,
                    Y: start_y,
                    TX: start_x,
                    TY: start_y,
                    NewJob: function() {
                        var tx = this.X + Math.random() * 200 - 100;
                        var ty = this.Y + Math.random() * 200 - 100;

                        this.TX = limit_number(Math.random() * 50, tx, theme_start.W - Math.random() * 50);
                        this.TY = limit_number(Math.random() * 50, ty, theme_start.H - Math.random() * 50);
                    },
                    Moving: function() { return Math.sqrt(Math.pow(this.TX - this.X, 2) + Math.pow(this.TY - this.Y, 2)) > 1; },
                    Connectors: connects
                };
            }

            function Connector()
            {
                return { 
                    Time:-1,
                    Target:null,
                    NewJob:function(){ this.Target = Math.floor(Math.random() * links_count); this.Time = Math.random() * connects_time; }
                };
            }

            function init() {
                for (var i = 0; i < links_count; i++) links.push(Linker());
                    window.requestAnimationFrame(draw);
            }

            function draw()
            {
                for (var i = 0; i < links_count; i++) {
                    if (!links[i].Moving()) links[i].NewJob();
                    links[i].X += (links[i].TX - links[i].X) / 24;
                    links[i].Y += (links[i].TY - links[i].Y) / 24;

                    for(var j=0;j<links[i].Connectors.length;j++) {
                        if (links[i].Connectors[j].Time < 0) links[i].Connectors[j].NewJob();
                        links[i].Connectors[j].Time -= 1;
                    }
                }

                var canvas = document.getElementById('frame');
                if (canvas.getContext)
                {
                    var ctx = canvas.getContext('2d');
                    canvas.width = window.innerWidth;
                    canvas.height = 300;

                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.clearRect(0, 0, theme_start.W, theme_start.H);
                    ctx.strokeStyle = "#C0BFBE";
                    ctx.fillStyle = "#C0BFBE";

                    for (var i=0; i<links_count; i++) {
                        for(var j=0;j<links[i].Connectors.length;j++) {
                            var connect = links[links[i].Connectors[j].Target];

                            var linesPath = new Path2D();
                            linesPath.moveTo(links[i].X, links[i].Y);
                            linesPath.lineTo(connect.X, connect.Y);
                            ctx.strokeStyle = print_rgba(98, 98, 98, limit_number(.3, links[i].Connectors[j].Time / 100, 1));
                            ctx.stroke(linesPath);
                        }
                    }

                    var arcPath = new Path2D();
                    for (var i=0; i<links_count; i++) {
                        arcPath.moveTo(links[i].X, links[i].Y);
                        arcPath.arc(links[i].X, links[i].Y, 4, 0, Math.PI * 2, true);
                    }
                    ctx.fill(arcPath);
                    ctx.stroke(arcPath);
                }

                window.requestAnimationFrame(draw);
            }

            init();

        });
    }


}