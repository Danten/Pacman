// Generated by CoffeeScript 1.8.0
(function() {
  define(["exports"], function(runtime) {
    runtime.ret = function(_) {
      return function(a) {
        return function() {
          return a;
        };
      };
    };
    runtime.getCanvas = function() {
      return document.getElementById('myCanvas');
    };
    runtime.getCtx = function(c) {
      return function() {
        return c.getContext('2d');
      };
    };
    runtime.alert = function(s) {
      return function() {
        return alert(s);
      };
    };
    runtime.addEventListner = function(cb) {
      return function() {
        return document.addEventListener('keydown', function(e) {
          return cb(e)();
        });
      };
    };
    runtime.mkRef = function(_A) {
      return function(v) {
        return function() {
          return {
            ref: v
          };
        };
      };
    };
    runtime.readRef = function(_A) {
      return function(r) {
        return function() {
          return r.ref;
        };
      };
    };
    runtime.writeRef = function(_A) {
      return function(r) {
        return function(v) {
          return function() {
            return r.ref = v;
          };
        };
      };
    };
    runtime.fillStyle = function(ctx) {
      return function(col) {
        return function() {
          return ctx.fillStyle = col;
        };
      };
    };
    runtime.fillRect = function(ctx) {
      return function(x) {
        return function(y) {
          return function(w) {
            return function(h) {
              return function() {
                return ctx.fillRect(x, y, w, h);
              };
            };
          };
        };
      };
    };
    runtime.setScoreText = function(s) {
      return function() {
        return document.getElementById('score').innerHTML = s;
      };
    };
    runtime.pacman = function(ctx) {
      return function(cx) {
        return function(cy) {
          return function(r) {
            return function(rot) {
              return function() {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, r, Math.PI / 6 + rot * Math.PI / 2, 2 * Math.PI - Math.PI / 6 + rot * Math.PI / 2, false);
                return ctx.fill();
              };
            };
          };
        };
      };
    };
    runtime.bind = function(_A) {
      return function(_B) {
        return function(a) {
          return function(b) {
            return function() {
              return b(a())();
            };
          };
        };
      };
    };
    return runtime;
  });

}).call(this);
