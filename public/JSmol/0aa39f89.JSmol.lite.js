(function (c, p) {
  "object" === typeof module && "object" === typeof module.exports ? module.exports = c.document ? p(c, !0) : function (c) {
    if (!c.document)throw Error("jQuery requires a window with a document");
    return p(c)
  } : p(c)
})("undefined" !== typeof window ? window : this, function (c, p) {
  function j(a) {
    var d = a.length, h = e.type(a);
    return "function" === h || e.isWindow(a) ? !1 : 1 === a.nodeType && d ? !0 : "array" === h || 0 === d || "number" === typeof d && 0 < d && d - 1 in a
  }

  function k(a, d, h) {
    if (e.isFunction(d))return e.grep(a, function (a, e) {
      return !!d.call(a,
          e, a) !== h
    });
    if (d.nodeType)return e.grep(a, function (a) {
      return a === d !== h
    });
    if ("string" === typeof d) {
      if (Uc.test(d))return e.filter(d, a, h);
      d = e.filter(d, a)
    }
    return e.grep(a, function (a) {
      return 0 <= e.inArray(a, d) !== h
    })
  }

  function l(a, d) {
    do a = a[d]; while (a && 1 !== a.nodeType);
    return a
  }

  function n() {
    u.addEventListener ? (u.removeEventListener("DOMContentLoaded", m, !1), c.removeEventListener("load", m, !1)) : (u.detachEvent("onreadystatechange", m), c.detachEvent("onload", m))
  }

  function m() {
    if (u.addEventListener || "load" === event.type ||
      "complete" === u.readyState)n(), e.ready()
  }

  function y(a, d, h) {
    if (void 0 === h && 1 === a.nodeType)if (h = "data-" + d.replace(Vc, "-$1").toLowerCase(), h = a.getAttribute(h), "string" === typeof h) {
      try {
        h = "true" === h ? !0 : "false" === h ? !1 : "null" === h ? null : +h + "" === h ? +h : Wc.test(h) ? e.parseJSON(h) : h
      } catch (r) {
      }
      e.data(a, d, h)
    } else h = void 0;
    return h
  }

  function b(a) {
    for (var d in a)if (!("data" === d && e.isEmptyObject(a[d])) && "toJSON" !== d)return !1;
    return !0
  }

  function f(a, d, h, r) {
    if (e.acceptData(a)) {
      var b = e.expando, c = a.nodeType, f = c ? e.cache : a, g =
        c ? a[b] : a[b] && b;
      if (g && f[g] && (r || f[g].data) || !(void 0 === h && "string" === typeof d)) {
        g || (g = c ? a[b] = V.pop() || e.guid++ : b);
        f[g] || (f[g] = c ? {} : {toJSON: e.noop});
        if ("object" === typeof d || "function" === typeof d)r ? f[g] = e.extend(f[g], d) : f[g].data = e.extend(f[g].data, d);
        a = f[g];
        r || (a.data || (a.data = {}), a = a.data);
        void 0 !== h && (a[e.camelCase(d)] = h);
        "string" === typeof d ? (h = a[d], null == h && (h = a[e.camelCase(d)])) : h = a;
        return h
      }
    }
  }

  function g(a, d, h) {
    if (e.acceptData(a)) {
      var r, c, I = a.nodeType, f = I ? e.cache : a, g = I ? a[e.expando] : e.expando;
      if (f[g]) {
        if (d &&
          (r = h ? f[g] : f[g].data)) {
          e.isArray(d) ? d = d.concat(e.map(d, e.camelCase)) : d in r ? d = [d] : (d = e.camelCase(d), d = d in r ? [d] : d.split(" "));
          for (c = d.length; c--;)delete r[d[c]];
          if (h ? !b(r) : !e.isEmptyObject(r))return
        }
        if (!h && (delete f[g].data, !b(f[g])))return;
        I ? e.cleanData([a], !0) : s.deleteExpando || f != f.window ? delete f[g] : f[g] = null
      }
    }
  }

  function q() {
    return !0
  }

  function t() {
    return !1
  }

  function D() {
    try {
      return u.activeElement
    } catch (a) {
    }
  }

  function G(a) {
    var d = Qb.split("|");
    a = a.createDocumentFragment();
    if (a.createElement)for (; d.length;)a.createElement(d.pop());
    return a
  }

  function C(a, d) {
    var h, r, b = 0, c = typeof a.getElementsByTagName !== M ? a.getElementsByTagName(d || "*") : typeof a.querySelectorAll !== M ? a.querySelectorAll(d || "*") : void 0;
    if (!c) {
      c = [];
      for (h = a.childNodes || a; null != (r = h[b]); b++)!d || e.nodeName(r, d) ? c.push(r) : e.merge(c, C(r, d))
    }
    return void 0 === d || d && e.nodeName(a, d) ? e.merge([a], c) : c
  }

  function N(a) {
    hb.test(a.type) && (a.defaultChecked = a.checked)
  }

  function Rb(a, d) {
    return e.nodeName(a, "table") && e.nodeName(11 !== d.nodeType ? d : d.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] ||
    a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function Sb(a) {
    a.type = (null !== e.find.attr(a, "type")) + "/" + a.type;
    return a
  }

  function wa(a) {
    var d = Xc.exec(a.type);
    d ? a.type = d[1] : a.removeAttribute("type");
    return a
  }

  function ib(a, d) {
    for (var h, r = 0; null != (h = a[r]); r++)e._data(h, "globalEval", !d || e._data(d[r], "globalEval"))
  }

  function Tb(a, d) {
    if (1 === d.nodeType && e.hasData(a)) {
      var h, r, b;
      r = e._data(a);
      var c = e._data(d, r), f = r.events;
      if (f)for (h in delete c.handle, c.events = {}, f) {
        r = 0;
        for (b = f[h].length; r < b; r++)e.event.add(d,
          h, f[h][r])
      }
      c.data && (c.data = e.extend({}, c.data))
    }
  }

  function Ub(a, d) {
    var h = e(d.createElement(a)).appendTo(d.body), r = c.getDefaultComputedStyle ? c.getDefaultComputedStyle(h[0]).display : e.css(h[0], "display");
    h.detach();
    return r
  }

  function Vb(a) {
    var d = u, h = Wb[a];
    if (!h) {
      h = Ub(a, d);
      if ("none" === h || !h)xa = (xa || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(d.documentElement), d = (xa[0].contentWindow || xa[0].contentDocument).document, d.write(), d.close(), h = Ub(a, d), xa.detach();
      Wb[a] = h
    }
    return h
  }

  function Xb(a,
              d) {
    return {
      get: function () {
        var h = a();
        if (null != h)if (h)delete this.get; else return (this.get = d).apply(this, arguments)
      }
    }
  }

  function Yb(a, d) {
    if (d in a)return d;
    for (var h = d.charAt(0).toUpperCase() + d.slice(1), r = d, e = Zb.length; e--;)if (d = Zb[e] + h, d in a)return d;
    return r
  }

  function $b(a, d) {
    for (var h, r, b, c = [], f = 0, g = a.length; f < g; f++)if (r = a[f], r.style)if (c[f] = e._data(r, "olddisplay"), h = r.style.display, d)!c[f] && "none" === h && (r.style.display = ""), "" === r.style.display && ya(r) && (c[f] = e._data(r, "olddisplay", Vb(r.nodeName)));
    else if (!c[f] && (b = ya(r), h && "none" !== h || !b))e._data(r, "olddisplay", b ? h : e.css(r, "display"));
    for (f = 0; f < g; f++)if (r = a[f], r.style && (!d || "none" === r.style.display || "" === r.style.display))r.style.display = d ? c[f] || "" : "none";
    return a
  }

  function ac(a, d, h) {
    return (a = Yc.exec(d)) ? Math.max(0, a[1] - (h || 0)) + (a[2] || "px") : d
  }

  function bc(a, d, h, r, b) {
    d = h === (r ? "border" : "content") ? 4 : "width" === d ? 1 : 0;
    for (var c = 0; 4 > d; d += 2)"margin" === h && (c += e.css(a, h + fa[d], !0, b)), r ? ("content" === h && (c -= e.css(a, "padding" + fa[d], !0, b)), "margin" !== h && (c -=
      e.css(a, "border" + fa[d] + "Width", !0, b))) : (c += e.css(a, "padding" + fa[d], !0, b), "padding" !== h && (c += e.css(a, "border" + fa[d] + "Width", !0, b)));
    return c
  }

  function cc(a, d, h) {
    var r = !0, b = "width" === d ? a.offsetWidth : a.offsetHeight, c = ga(a), f = s.boxSizing() && "border-box" === e.css(a, "boxSizing", !1, c);
    if (0 >= b || null == b) {
      b = ha(a, d, c);
      if (0 > b || null == b)b = a.style[d];
      if (Ha.test(b))return b;
      r = f && (s.boxSizingReliable() || b === a.style[d]);
      b = parseFloat(b) || 0
    }
    return b + bc(a, d, h || (f ? "border" : "content"), r, c) + "px"
  }

  function E(a, d, h, r, e) {
    return new E.prototype.init(a,
      d, h, r, e)
  }

  function dc() {
    setTimeout(function () {
      oa = void 0
    });
    return oa = e.now()
  }

  function Ia(a, d) {
    var h, r = {height: a}, e = 0;
    for (d = d ? 1 : 0; 4 > e; e += 2 - d)h = fa[e], r["margin" + h] = r["padding" + h] = a;
    d && (r.opacity = r.width = a);
    return r
  }

  function ec(a, d, h) {
    for (var r, e = (za[d] || []).concat(za["*"]), b = 0, c = e.length; b < c; b++)if (r = e[b].call(h, d, a))return r
  }

  function fc(a, d, h) {
    var r, b, c = 0, f = Ja.length, g = e.Deferred().always(function () {
      delete j.elem
    }), j = function () {
      if (b)return !1;
      for (var d = oa || dc(), d = Math.max(0, q.startTime + q.duration - d),
             h = 1 - (d / q.duration || 0), r = 0, e = q.tweens.length; r < e; r++)q.tweens[r].run(h);
      g.notifyWith(a, [q, h, d]);
      if (1 > h && e)return d;
      g.resolveWith(a, [q]);
      return !1
    }, q = g.promise({
      elem: a,
      props: e.extend({}, d),
      opts: e.extend(!0, {specialEasing: {}}, h),
      originalProperties: d,
      originalOptions: h,
      startTime: oa || dc(),
      duration: h.duration,
      tweens: [],
      createTween: function (d, h) {
        var r = e.Tween(a, q.opts, d, h, q.opts.specialEasing[d] || q.opts.easing);
        q.tweens.push(r);
        return r
      },
      stop: function (d) {
        var h = 0, r = d ? q.tweens.length : 0;
        if (b)return this;
        for (b = !0; h < r; h++)q.tweens[h].run(1);
        d ? g.resolveWith(a, [q, d]) : g.rejectWith(a, [q, d]);
        return this
      }
    });
    d = q.props;
    h = q.opts.specialEasing;
    var k, Ka, l, t;
    for (r in d)if (k = e.camelCase(r), Ka = h[k], l = d[r], e.isArray(l) && (Ka = l[1], l = d[r] = l[0]), r !== k && (d[k] = l, delete d[r]), (t = e.cssHooks[k]) && "expand"in t)for (r in l = t.expand(l), delete d[k], l)r in d || (d[r] = l[r], h[r] = Ka); else h[k] = Ka;
    for (; c < f; c++)if (r = Ja[c].call(q, a, d, q.opts))return r;
    e.map(d, ec, q);
    e.isFunction(q.opts.start) && q.opts.start.call(a, q);
    e.fx.timer(e.extend(j, {
      elem: a,
      anim: q, queue: q.opts.queue
    }));
    return q.progress(q.opts.progress).done(q.opts.done, q.opts.complete).fail(q.opts.fail).always(q.opts.always)
  }

  function gc(a) {
    return function (d, h) {
      "string" !== typeof d && (h = d, d = "*");
      var r, b = 0, c = d.toLowerCase().match(T) || [];
      if (e.isFunction(h))for (; r = c[b++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (a[r] = a[r] || []).unshift(h)) : (a[r] = a[r] || []).push(h)
    }
  }

  function hc(a, d, h, r) {
    function b(g) {
      var j;
      c[g] = !0;
      e.each(a[g] || [], function (a, e) {
        var g = e(d, h, r);
        if ("string" === typeof g && !f && !c[g])return d.dataTypes.unshift(g),
          b(g), !1;
        if (f)return !(j = g)
      });
      return j
    }

    var c = {}, f = a === jb;
    return b(d.dataTypes[0]) || !c["*"] && b("*")
  }

  function kb(a, d) {
    var h, r, b = e.ajaxSettings.flatOptions || {};
    for (r in d)void 0 !== d[r] && ((b[r] ? a : h || (h = {}))[r] = d[r]);
    h && e.extend(!0, a, h);
    return a
  }

  function lb(a, d, h, r) {
    var b;
    if (e.isArray(d))e.each(d, function (d, e) {
      h || $c.test(a) ? r(a, e) : lb(a + "[" + ("object" === typeof e ? d : "") + "]", e, h, r)
    }); else if (!h && "object" === e.type(d))for (b in d)lb(a + "[" + b + "]", d[b], h, r); else r(a, d)
  }

  function mb(a) {
    try {
      return a ? new c.ActiveXObject("Microsoft.XMLHTTP") :
        new c.XMLHttpRequest
    } catch (d) {
    }
  }

  function ic() {
    try {
      return new c.XMLHttpRequest
    } catch (a) {
    }
  }

  function jc(a) {
    return e.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }

  var V = [], W = V.slice, kc = V.concat, nb = V.push, lc = V.indexOf, La = {}, ad = La.toString, pa = La.hasOwnProperty, ob = "".trim, s = {}, e = function (a, d) {
    return new e.fn.init(a, d)
  }, bd = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, cd = /^-ms-/, dd = /-([\da-z])/gi, ed = function (a, d) {
    return d.toUpperCase()
  };
  e.fn = e.prototype = {
    jquery: "1.11.0", constructor: e, selector: "", length: 0,
    toArray: function () {
      return W.call(this)
    }, get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : W.call(this)
    }, pushStack: function (a) {
      a = e.merge(this.constructor(), a);
      a.prevObject = this;
      a.context = this.context;
      return a
    }, each: function (a, d) {
      return e.each(this, a, d)
    }, map: function (a) {
      return this.pushStack(e.map(this, function (d, h) {
        return a.call(d, h, d)
      }))
    }, slice: function () {
      return this.pushStack(W.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (a) {
      var d =
        this.length;
      a = +a + (0 > a ? d : 0);
      return this.pushStack(0 <= a && a < d ? [this[a]] : [])
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: nb, sort: V.sort, splice: V.splice
  };
  e.extend = e.fn.extend = function () {
    var a, d, h, r, b, c = arguments[0] || {}, f = 1, g = arguments.length, j = !1;
    "boolean" === typeof c && (j = c, c = arguments[f] || {}, f++);
    "object" !== typeof c && !e.isFunction(c) && (c = {});
    f === g && (c = this, f--);
    for (; f < g; f++)if (null != (b = arguments[f]))for (r in b)a = c[r], h = b[r], c !== h && (j && h && (e.isPlainObject(h) || (d = e.isArray(h))) ?
      (d ? (d = !1, a = a && e.isArray(a) ? a : []) : a = a && e.isPlainObject(a) ? a : {}, c[r] = e.extend(j, a, h)) : void 0 !== h && (c[r] = h));
    return c
  };
  e.extend({
    expando: "jQuery" + ("1.11.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw Error(a);
    }, noop: function () {
    }, isFunction: function (a) {
      return "function" === e.type(a)
    }, isArray: Array.isArray || function (a) {
      return "array" === e.type(a)
    }, isWindow: function (a) {
      return null != a && a == a.window
    }, isNumeric: function (a) {
      return 0 <= a - parseFloat(a)
    }, isEmptyObject: function (a) {
      for (var d in a)return !1;
      return !0
    }, isPlainObject: function (a) {
      var d;
      if (!a || "object" !== e.type(a) || a.nodeType || e.isWindow(a))return !1;
      try {
        if (a.constructor && !pa.call(a, "constructor") && !pa.call(a.constructor.prototype, "isPrototypeOf"))return !1
      } catch (h) {
        return !1
      }
      if (s.ownLast)for (d in a)return pa.call(a, d);
      for (d in a);
      return void 0 === d || pa.call(a, d)
    }, type: function (a) {
      return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? La[ad.call(a)] || "object" : typeof a
    }, globalEval: function (a) {
      a && e.trim(a) && (c.execScript || function (a) {
        c.eval.call(c,
          a)
      })(a)
    }, camelCase: function (a) {
      return a.replace(cd, "ms-").replace(dd, ed)
    }, nodeName: function (a, d) {
      return a.nodeName && a.nodeName.toLowerCase() === d.toLowerCase()
    }, each: function (a, d, h) {
      var r, e = 0, b = a.length;
      r = j(a);
      if (h)if (r)for (; e < b && !(r = d.apply(a[e], h), !1 === r); e++); else for (e in a) {
        if (r = d.apply(a[e], h), !1 === r)break
      } else if (r)for (; e < b && !(r = d.call(a[e], e, a[e]), !1 === r); e++); else for (e in a)if (r = d.call(a[e], e, a[e]), !1 === r)break;
      return a
    }, trim: ob && !ob.call("\ufeff\u00a0") ? function (a) {
      return null == a ? "" : ob.call(a)
    } :
      function (a) {
        return null == a ? "" : (a + "").replace(bd, "")
      }, makeArray: function (a, d) {
      var h = d || [];
      null != a && (j(Object(a)) ? e.merge(h, "string" === typeof a ? [a] : a) : nb.call(h, a));
      return h
    }, inArray: function (a, d, h) {
      var e;
      if (d) {
        if (lc)return lc.call(d, a, h);
        e = d.length;
        for (h = h ? 0 > h ? Math.max(0, e + h) : h : 0; h < e; h++)if (h in d && d[h] === a)return h
      }
      return -1
    }, merge: function (a, d) {
      for (var h = +d.length, e = 0, b = a.length; e < h;)a[b++] = d[e++];
      if (h !== h)for (; void 0 !== d[e];)a[b++] = d[e++];
      a.length = b;
      return a
    }, grep: function (a, d, h) {
      for (var e = [], b =
        0, c = a.length, f = !h; b < c; b++)h = !d(a[b], b), h !== f && e.push(a[b]);
      return e
    }, map: function (a, d, h) {
      var e, b = 0, c = a.length, f = [];
      if (j(a))for (; b < c; b++)e = d(a[b], b, h), null != e && f.push(e); else for (b in a)e = d(a[b], b, h), null != e && f.push(e);
      return kc.apply([], f)
    }, guid: 1, proxy: function (a, d) {
      var h, r;
      "string" === typeof d && (r = a[d], d = a, a = r);
      if (e.isFunction(a))return h = W.call(arguments, 2), r = function () {
        return a.apply(d || this, h.concat(W.call(arguments)))
      }, r.guid = a.guid = a.guid || e.guid++, r
    }, now: function () {
      return +new Date
    }, support: s
  });
  e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, d) {
    La["[object " + d + "]"] = d.toLowerCase()
  });
  var pb = c, x = function (a, d, h, e) {
      var b, c, f, g, j;
      (d ? d.ownerDocument || d : O) !== F && X(d);
      d = d || F;
      h = h || [];
      if (!a || "string" !== typeof a)return h;
      if (1 !== (g = d.nodeType) && 9 !== g)return [];
      if (S && !e) {
        if (b = fd.exec(a))if (f = b[1])if (9 === g)if ((c = d.getElementById(f)) && c.parentNode) {
          if (c.id === f)return h.push(c), h
        } else return h; else {
          if (d.ownerDocument && (c = d.ownerDocument.getElementById(f)) && Aa(d,
              c) && c.id === f)return h.push(c), h
        } else {
          if (b[2])return Y.apply(h, d.getElementsByTagName(a)), h;
          if ((f = b[3]) && v.getElementsByClassName && d.getElementsByClassName)return Y.apply(h, d.getElementsByClassName(f)), h
        }
        if (v.qsa && (!H || !H.test(a))) {
          c = b = A;
          f = d;
          j = 9 === g && a;
          if (1 === g && "object" !== d.nodeName.toLowerCase()) {
            g = Ma(a);
            (b = d.getAttribute("id")) ? c = b.replace(gd, "\\$&") : d.setAttribute("id", c);
            c = "[id='" + c + "'] ";
            for (f = g.length; f--;)g[f] = c + Na(g[f]);
            f = qb.test(a) && rb(d.parentNode) || d;
            j = g.join(",")
          }
          if (j)try {
            return Y.apply(h,
              f.querySelectorAll(j)), h
          } catch (q) {
          } finally {
            b || d.removeAttribute("id")
          }
        }
      }
      var k;
      a:{
        a = a.replace(Oa, "$1");
        c = Ma(a);
        if (!e && 1 === c.length) {
          b = c[0] = c[0].slice(0);
          if (2 < b.length && "ID" === (k = b[0]).type && v.getById && 9 === d.nodeType && S && w.relative[b[1].type]) {
            d = (w.find.ID(k.matches[0].replace(Z, $), d) || [])[0];
            if (!d) {
              k = h;
              break a
            }
            a = a.slice(b.shift().value.length)
          }
          for (g = Pa.needsContext.test(a) ? 0 : b.length; g--;) {
            k = b[g];
            if (w.relative[f = k.type])break;
            if (f = w.find[f])if (e = f(k.matches[0].replace(Z, $), qb.test(b[0].type) && rb(d.parentNode) ||
                d)) {
              b.splice(g, 1);
              a = e.length && Na(b);
              if (!a) {
                Y.apply(h, e);
                k = h;
                break a
              }
              break
            }
          }
        }
        sb(a, c)(e, d, !S, h, qb.test(a) && rb(d.parentNode) || d);
        k = h
      }
      return k
    }, tb = function () {
      function a(h, e) {
        d.push(h + " ") > w.cacheLength && delete a[d.shift()];
        return a[h + " "] = e
      }

      var d = [];
      return a
    }, P = function (a) {
      a[A] = !0;
      return a
    }, Q = function (a) {
      var d = F.createElement("div");
      try {
        return !!a(d)
      } catch (h) {
        return !1
      } finally {
        d.parentNode && d.parentNode.removeChild(d)
      }
    }, ub = function (a, d) {
      for (var h = a.split("|"), e = a.length; e--;)w.attrHandle[h[e]] = d
    }, nc = function (a,
                      d) {
      var h = d && a, e = h && 1 === a.nodeType && 1 === d.nodeType && (~d.sourceIndex || mc) - (~a.sourceIndex || mc);
      if (e)return e;
      if (h)for (; h = h.nextSibling;)if (h === d)return -1;
      return a ? 1 : -1
    }, hd = function (a) {
      return function (d) {
        return "input" === d.nodeName.toLowerCase() && d.type === a
      }
    }, id = function (a) {
      return function (d) {
        var h = d.nodeName.toLowerCase();
        return ("input" === h || "button" === h) && d.type === a
      }
    }, ia = function (a) {
      return P(function (d) {
        d = +d;
        return P(function (h, e) {
          for (var b, c = a([], h.length, d), f = c.length; f--;)if (h[b = c[f]])h[b] = !(e[b] =
            h[b])
        })
      })
    }, rb = function (a) {
      return a && typeof a.getElementsByTagName !== qa && a
    }, oc = function () {
    }, Ma = function (a, d) {
      var h, e, b, c, f, g, j;
      if (f = pc[a + " "])return d ? 0 : f.slice(0);
      f = a;
      g = [];
      for (j = w.preFilter; f;) {
        if (!h || (e = jd.exec(f)))e && (f = f.slice(e[0].length) || f), g.push(b = []);
        h = !1;
        if (e = kd.exec(f))h = e.shift(), b.push({value: h, type: e[0].replace(Oa, " ")}), f = f.slice(h.length);
        for (c in w.filter)if ((e = Pa[c].exec(f)) && (!j[c] || (e = j[c](e))))h = e.shift(), b.push({
          value: h,
          type: c,
          matches: e
        }), f = f.slice(h.length);
        if (!h)break
      }
      return d ?
        f.length : f ? x.error(a) : pc(a, g).slice(0)
    }, Na = function (a) {
      for (var d = 0, h = a.length, e = ""; d < h; d++)e += a[d].value;
      return e
    }, vb = function (a, d, h) {
      var e = d.dir, b = h && "parentNode" === e, c = ld++;
      return d.first ? function (d, h, c) {
        for (; d = d[e];)if (1 === d.nodeType || b)return a(d, h, c)
      } : function (d, h, f) {
        var g, j, q = [R, c];
        if (f)for (; d = d[e];) {
          if ((1 === d.nodeType || b) && a(d, h, f))return !0
        } else for (; d = d[e];)if (1 === d.nodeType || b) {
          j = d[A] || (d[A] = {});
          if ((g = j[e]) && g[0] === R && g[1] === c)return q[2] = g[2];
          j[e] = q;
          if (q[2] = a(d, h, f))return !0
        }
      }
    }, wb = function (a) {
      return 1 <
      a.length ? function (d, h, e) {
        for (var b = a.length; b--;)if (!a[b](d, h, e))return !1;
        return !0
      } : a[0]
    }, Qa = function (a, d, h, e, b) {
      for (var c, f = [], g = 0, j = a.length, q = null != d; g < j; g++)if (c = a[g])if (!h || h(c, e, b))f.push(c), q && d.push(g);
      return f
    }, xb = function (a, d, h, e, b, c) {
      e && !e[A] && (e = xb(e));
      b && !b[A] && (b = xb(b, c));
      return P(function (c, f, g, I) {
        var j, q, k = [], l = [], t = f.length, n;
        if (!(n = c)) {
          n = d || "*";
          for (var m = g.nodeType ? [g] : g, p = [], s = 0, D = m.length; s < D; s++)x(n, m[s], p);
          n = p
        }
        n = a && (c || !d) ? Qa(n, k, a, g, I) : n;
        m = h ? b || (c ? a : t || e) ? [] : f : n;
        h && h(n, m, g,
          I);
        if (e) {
          j = Qa(m, l);
          e(j, [], g, I);
          for (g = j.length; g--;)if (q = j[g])m[l[g]] = !(n[l[g]] = q)
        }
        if (c) {
          if (b || a) {
            if (b) {
              j = [];
              for (g = m.length; g--;)if (q = m[g])j.push(n[g] = q);
              b(null, m = [], j, I)
            }
            for (g = m.length; g--;)if ((q = m[g]) && -1 < (j = b ? ja.call(c, q) : k[g]))c[j] = !(f[j] = q)
          }
        } else m = Qa(m === f ? m.splice(t, m.length) : m), b ? b(null, f, m, I) : Y.apply(f, m)
      })
    }, yb = function (a) {
      var d, h, e, b = a.length, c = w.relative[a[0].type];
      h = c || w.relative[" "];
      for (var f = c ? 1 : 0, g = vb(function (a) {
        return a === d
      }, h, !0), j = vb(function (a) {
        return -1 < ja.call(d, a)
      }, h, !0), q = [function (a,
                                h, e) {
        return !c && (e || h !== Ra) || ((d = h).nodeType ? g(a, h, e) : j(a, h, e))
      }]; f < b; f++)if (h = w.relative[a[f].type])q = [vb(wb(q), h)]; else {
        h = w.filter[a[f].type].apply(null, a[f].matches);
        if (h[A]) {
          for (e = ++f; e < b && !w.relative[a[e].type]; e++);
          return xb(1 < f && wb(q), 1 < f && Na(a.slice(0, f - 1).concat({value: " " === a[f - 2].type ? "*" : ""})).replace(Oa, "$1"), h, f < e && yb(a.slice(f, e)), e < b && yb(a = a.slice(e)), e < b && Na(a))
        }
        q.push(h)
      }
      return wb(q)
    }, ra, v, w, Sa, qc, sb, Ra, aa, sa, X, F, U, S, H, ka, Ta, Aa, A = "sizzle" + -new Date, O = pb.document, R = 0, ld = 0, rc = tb(),
    pc = tb(), sc = tb(), zb = function (a, d) {
      a === d && (sa = !0);
      return 0
    }, qa = "undefined", mc = -2147483648, md = {}.hasOwnProperty, ba = [], nd = ba.pop, od = ba.push, Y = ba.push, tc = ba.slice, ja = ba.indexOf || function (a) {
        for (var d = 0, h = this.length; d < h; d++)if (this[d] === a)return d;
        return -1
      }, uc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), vc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + uc + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", Ab = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
      vc.replace(3, 8) + ")*)|.*)\\)|)", Oa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), jd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, kd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, pd = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), qd = RegExp(Ab), rd = RegExp("^" + uc + "$"), Pa = {
      ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
      ATTR: RegExp("^" + vc),
      PSEUDO: RegExp("^" + Ab),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
      bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
      needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
        "i")
    }, sd = /^(?:input|select|textarea|button)$/i, td = /^h\d$/i, Ba = /^[^{]+\{\s*\[native \w/, fd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, qb = /[+~]/, gd = /'|\\/g, Z = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), $ = function (a, d, h) {
      a = "0x" + d - 65536;
      return a !== a || h ? d : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
    };
  try {
    Y.apply(ba = tc.call(O.childNodes), O.childNodes), ba[O.childNodes.length].nodeType
  } catch ($d) {
    Y = {
      apply: ba.length ? function (a, d) {
        od.apply(a, tc.call(d))
      } :
        function (a, d) {
          for (var h = a.length, e = 0; a[h++] = d[e++];);
          a.length = h - 1
        }
    }
  }
  v = x.support = {};
  qc = x.isXML = function (a) {
    return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
  };
  X = x.setDocument = function (a) {
    var d = a ? a.ownerDocument || a : O;
    a = d.defaultView;
    if (d === F || 9 !== d.nodeType || !d.documentElement)return F;
    F = d;
    U = d.documentElement;
    S = !qc(d);
    a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function () {
      X()
    }, !1) : a.attachEvent && a.attachEvent("onunload", function () {
      X()
    }));
    v.attributes = Q(function (a) {
      a.className =
        "i";
      return !a.getAttribute("className")
    });
    v.getElementsByTagName = Q(function (a) {
      a.appendChild(d.createComment(""));
      return !a.getElementsByTagName("*").length
    });
    v.getElementsByClassName = Ba.test(d.getElementsByClassName) && Q(function (a) {
        a.innerHTML = "<div class='a'></div><div class='a i'></div>";
        a.firstChild.className = "i";
        return 2 === a.getElementsByClassName("i").length
      });
    v.getById = Q(function (a) {
      U.appendChild(a).id = A;
      return !d.getElementsByName || !d.getElementsByName(A).length
    });
    v.getById ? (w.find.ID = function (a,
                                       d) {
      if (typeof d.getElementById !== qa && S) {
        var e = d.getElementById(a);
        return e && e.parentNode ? [e] : []
      }
    }, w.filter.ID = function (a) {
      var d = a.replace(Z, $);
      return function (a) {
        return a.getAttribute("id") === d
      }
    }) : (delete w.find.ID, w.filter.ID = function (a) {
      var d = a.replace(Z, $);
      return function (a) {
        return (a = typeof a.getAttributeNode !== qa && a.getAttributeNode("id")) && a.value === d
      }
    });
    w.find.TAG = v.getElementsByTagName ? function (a, d) {
      if (typeof d.getElementsByTagName !== qa)return d.getElementsByTagName(a)
    } : function (a, d) {
      var e,
        b = [], c = 0, f = d.getElementsByTagName(a);
      if ("*" === a) {
        for (; e = f[c++];)1 === e.nodeType && b.push(e);
        return b
      }
      return f
    };
    w.find.CLASS = v.getElementsByClassName && function (a, d) {
        if (typeof d.getElementsByClassName !== qa && S)return d.getElementsByClassName(a)
      };
    ka = [];
    H = [];
    if (v.qsa = Ba.test(d.querySelectorAll))Q(function (a) {
      a.innerHTML = "<select t=''><option selected=''></option></select>";
      a.querySelectorAll("[t^='']").length && H.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
      a.querySelectorAll("[selected]").length || H.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
      a.querySelectorAll(":checked").length || H.push(":checked")
    }), Q(function (a) {
      var e = d.createElement("input");
      e.setAttribute("type", "hidden");
      a.appendChild(e).setAttribute("name", "D");
      a.querySelectorAll("[name=d]").length && H.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
      a.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled");
      a.querySelectorAll("*,:x");
      H.push(",.*:")
    });
    (v.matchesSelector = Ba.test(Ta = U.webkitMatchesSelector || U.mozMatchesSelector || U.oMatchesSelector || U.msMatchesSelector)) && Q(function (a) {
      v.disconnectedMatch =
        Ta.call(a, "div");
      Ta.call(a, "[s!='']:x");
      ka.push("!=", Ab)
    });
    H = H.length && RegExp(H.join("|"));
    ka = ka.length && RegExp(ka.join("|"));
    Aa = (a = Ba.test(U.compareDocumentPosition)) || Ba.test(U.contains) ? function (a, d) {
      var e = 9 === a.nodeType ? a.documentElement : a, b = d && d.parentNode;
      return a === b || !(!b || !(1 === b.nodeType && (e.contains ? e.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) & 16)))
    } : function (a, d) {
      if (d)for (; d = d.parentNode;)if (d === a)return !0;
      return !1
    };
    zb = a ? function (a, e) {
      if (a === e)return sa = !0, 0;
      var b =
        !a.compareDocumentPosition - !e.compareDocumentPosition;
      if (b)return b;
      b = (a.ownerDocument || a) === (e.ownerDocument || e) ? a.compareDocumentPosition(e) : 1;
      return b & 1 || !v.sortDetached && e.compareDocumentPosition(a) === b ? a === d || a.ownerDocument === O && Aa(O, a) ? -1 : e === d || e.ownerDocument === O && Aa(O, e) ? 1 : aa ? ja.call(aa, a) - ja.call(aa, e) : 0 : b & 4 ? -1 : 1
    } : function (a, e) {
      if (a === e)return sa = !0, 0;
      var b, c = 0;
      b = a.parentNode;
      var f = e.parentNode, g = [a], j = [e];
      if (!b || !f)return a === d ? -1 : e === d ? 1 : b ? -1 : f ? 1 : aa ? ja.call(aa, a) - ja.call(aa, e) : 0;
      if (b ===
        f)return nc(a, e);
      for (b = a; b = b.parentNode;)g.unshift(b);
      for (b = e; b = b.parentNode;)j.unshift(b);
      for (; g[c] === j[c];)c++;
      return c ? nc(g[c], j[c]) : g[c] === O ? -1 : j[c] === O ? 1 : 0
    };
    return d
  };
  x.matches = function (a, d) {
    return x(a, null, null, d)
  };
  x.matchesSelector = function (a, d) {
    (a.ownerDocument || a) !== F && X(a);
    d = d.replace(pd, "='$1']");
    if (v.matchesSelector && S && (!ka || !ka.test(d)) && (!H || !H.test(d)))try {
      var h = Ta.call(a, d);
      if (h || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)return h
    } catch (e) {
    }
    return 0 < x(d, F, null, [a]).length
  };
  x.contains = function (a, d) {
    (a.ownerDocument || a) !== F && X(a);
    return Aa(a, d)
  };
  x.attr = function (a, d) {
    (a.ownerDocument || a) !== F && X(a);
    var h = w.attrHandle[d.toLowerCase()], h = h && md.call(w.attrHandle, d.toLowerCase()) ? h(a, d, !S) : void 0;
    return void 0 !== h ? h : v.attributes || !S ? a.getAttribute(d) : (h = a.getAttributeNode(d)) && h.specified ? h.value : null
  };
  x.error = function (a) {
    throw Error("Syntax error, unrecognized expression: " + a);
  };
  x.uniqueSort = function (a) {
    var d, h = [], e = 0, b = 0;
    sa = !v.detectDuplicates;
    aa = !v.sortStable && a.slice(0);
    a.sort(zb);
    if (sa) {
      for (; d = a[b++];)d === a[b] && (e = h.push(b));
      for (; e--;)a.splice(h[e], 1)
    }
    aa = null;
    return a
  };
  Sa = x.getText = function (a) {
    var d, h = "", e = 0;
    if (d = a.nodeType)if (1 === d || 9 === d || 11 === d) {
      if ("string" === typeof a.textContent)return a.textContent;
      for (a = a.firstChild; a; a = a.nextSibling)h += Sa(a)
    } else {
      if (3 === d || 4 === d)return a.nodeValue
    } else for (; d = a[e++];)h += Sa(d);
    return h
  };
  w = x.selectors = {
    cacheLength: 50, createPseudo: P, match: Pa, attrHandle: {}, find: {}, relative: {
      ">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"},
      "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}
    }, preFilter: {
      ATTR: function (a) {
        a[1] = a[1].replace(Z, $);
        a[3] = (a[4] || a[5] || "").replace(Z, $);
        "~=" === a[2] && (a[3] = " " + a[3] + " ");
        return a.slice(0, 4)
      }, CHILD: function (a) {
        a[1] = a[1].toLowerCase();
        "nth" === a[1].slice(0, 3) ? (a[3] || x.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && x.error(a[0]);
        return a
      }, PSEUDO: function (a) {
        var d, h = !a[5] && a[2];
        if (Pa.CHILD.test(a[0]))return null;
        if (a[3] && void 0 !==
          a[4])a[2] = a[4]; else if (h && qd.test(h) && (d = Ma(h, !0)) && (d = h.indexOf(")", h.length - d) - h.length))a[0] = a[0].slice(0, d), a[2] = h.slice(0, d);
        return a.slice(0, 3)
      }
    }, filter: {
      TAG: function (a) {
        var d = a.replace(Z, $).toLowerCase();
        return "*" === a ? function () {
          return !0
        } : function (a) {
          return a.nodeName && a.nodeName.toLowerCase() === d
        }
      }, CLASS: function (a) {
        var d = rc[a + " "];
        return d || (d = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && rc(a, function (a) {
            return d.test("string" === typeof a.className && a.className || typeof a.getAttribute !==
              qa && a.getAttribute("class") || "")
          })
      }, ATTR: function (a, d, h) {
        return function (e) {
          e = x.attr(e, a);
          if (null == e)return "!=" === d;
          if (!d)return !0;
          e += "";
          return "=" === d ? e === h : "!=" === d ? e !== h : "^=" === d ? h && 0 === e.indexOf(h) : "*=" === d ? h && -1 < e.indexOf(h) : "$=" === d ? h && e.slice(-h.length) === h : "~=" === d ? -1 < (" " + e + " ").indexOf(h) : "|=" === d ? e === h || e.slice(0, h.length + 1) === h + "-" : !1
        }
      }, CHILD: function (a, d, h, e, b) {
        var c = "nth" !== a.slice(0, 3), f = "last" !== a.slice(-4), g = "of-type" === d;
        return 1 === e && 0 === b ? function (a) {
          return !!a.parentNode
        } : function (d,
                      h, j) {
          var q, k, l, t, n;
          h = c !== f ? "nextSibling" : "previousSibling";
          var m = d.parentNode, p = g && d.nodeName.toLowerCase();
          j = !j && !g;
          if (m) {
            if (c) {
              for (; h;) {
                for (k = d; k = k[h];)if (g ? k.nodeName.toLowerCase() === p : 1 === k.nodeType)return !1;
                n = h = "only" === a && !n && "nextSibling"
              }
              return !0
            }
            n = [f ? m.firstChild : m.lastChild];
            if (f && j) {
              j = m[A] || (m[A] = {});
              q = j[a] || [];
              t = q[0] === R && q[1];
              l = q[0] === R && q[2];
              for (k = t && m.childNodes[t]; k = ++t && k && k[h] || (l = t = 0) || n.pop();)if (1 === k.nodeType && ++l && k === d) {
                j[a] = [R, t, l];
                break
              }
            } else if (j && (q = (d[A] || (d[A] = {}))[a]) &&
              q[0] === R)l = q[1]; else for (; k = ++t && k && k[h] || (l = t = 0) || n.pop();)if ((g ? k.nodeName.toLowerCase() === p : 1 === k.nodeType) && ++l)if (j && ((k[A] || (k[A] = {}))[a] = [R, l]), k === d)break;
            l -= b;
            return l === e || 0 === l % e && 0 <= l / e
          }
        }
      }, PSEUDO: function (a, d) {
        var h, e = w.pseudos[a] || w.setFilters[a.toLowerCase()] || x.error("unsupported pseudo: " + a);
        return e[A] ? e(d) : 1 < e.length ? (h = [a, a, "", d], w.setFilters.hasOwnProperty(a.toLowerCase()) ? P(function (a, h) {
          for (var b, c = e(a, d), f = c.length; f--;)b = ja.call(a, c[f]), a[b] = !(h[b] = c[f])
        }) : function (a) {
          return e(a,
            0, h)
        }) : e
      }
    }, pseudos: {
      not: P(function (a) {
        var d = [], h = [], e = sb(a.replace(Oa, "$1"));
        return e[A] ? P(function (a, d, h, b) {
          b = e(a, null, b, []);
          for (var c = a.length; c--;)if (h = b[c])a[c] = !(d[c] = h)
        }) : function (a, b, c) {
          d[0] = a;
          e(d, null, c, h);
          return !h.pop()
        }
      }), has: P(function (a) {
        return function (d) {
          return 0 < x(a, d).length
        }
      }), contains: P(function (a) {
        return function (d) {
          return -1 < (d.textContent || d.innerText || Sa(d)).indexOf(a)
        }
      }), lang: P(function (a) {
        rd.test(a || "") || x.error("unsupported lang: " + a);
        a = a.replace(Z, $).toLowerCase();
        return function (d) {
          var h;
          do if (h = S ? d.lang : d.getAttribute("xml:lang") || d.getAttribute("lang"))return h = h.toLowerCase(), h === a || 0 === h.indexOf(a + "-"); while ((d = d.parentNode) && 1 === d.nodeType);
          return !1
        }
      }), target: function (a) {
        var d = pb.location && pb.location.hash;
        return d && d.slice(1) === a.id
      }, root: function (a) {
        return a === U
      }, focus: function (a) {
        return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex)
      }, enabled: function (a) {
        return !1 === a.disabled
      }, disabled: function (a) {
        return !0 === a.disabled
      }, checked: function (a) {
        var d =
          a.nodeName.toLowerCase();
        return "input" === d && !!a.checked || "option" === d && !!a.selected
      }, selected: function (a) {
        a.parentNode && a.parentNode.selectedIndex;
        return !0 === a.selected
      }, empty: function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType)return !1;
        return !0
      }, parent: function (a) {
        return !w.pseudos.empty(a)
      }, header: function (a) {
        return td.test(a.nodeName)
      }, input: function (a) {
        return sd.test(a.nodeName)
      }, button: function (a) {
        var d = a.nodeName.toLowerCase();
        return "input" === d && "button" === a.type || "button" === d
      },
      text: function (a) {
        var d;
        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (d = a.getAttribute("type")) || "text" === d.toLowerCase())
      }, first: ia(function () {
        return [0]
      }), last: ia(function (a, d) {
        return [d - 1]
      }), eq: ia(function (a, d, h) {
        return [0 > h ? h + d : h]
      }), even: ia(function (a, d) {
        for (var h = 0; h < d; h += 2)a.push(h);
        return a
      }), odd: ia(function (a, d) {
        for (var h = 1; h < d; h += 2)a.push(h);
        return a
      }), lt: ia(function (a, d, h) {
        for (d = 0 > h ? h + d : h; 0 <= --d;)a.push(d);
        return a
      }), gt: ia(function (a, d, h) {
        for (h = 0 > h ? h + d : h; ++h < d;)a.push(h);
        return a
      })
    }
  };
  w.pseudos.nth = w.pseudos.eq;
  for (ra in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})w.pseudos[ra] = hd(ra);
  for (ra in{submit: !0, reset: !0})w.pseudos[ra] = id(ra);
  oc.prototype = w.filters = w.pseudos;
  w.setFilters = new oc;
  sb = x.compile = function (a, d) {
    var h, e = [], b = [], c = sc[a + " "];
    if (!c) {
      d || (d = Ma(a));
      for (h = d.length; h--;)c = yb(d[h]), c[A] ? e.push(c) : b.push(c);
      var f = 0 < e.length, g = 0 < b.length;
      h = function (a, d, h, c, I) {
        var j, q, k, l = 0, t = "0", n = a && [], m = [], p = Ra, s = a || g && w.find.TAG("*", I), D = R += null == p ? 1 : Math.random() ||
        0.1, u = s.length;
        for (I && (Ra = d !== F && d); t !== u && null != (j = s[t]); t++) {
          if (g && j) {
            for (q = 0; k = b[q++];)if (k(j, d, h)) {
              c.push(j);
              break
            }
            I && (R = D)
          }
          f && ((j = !k && j) && l--, a && n.push(j))
        }
        l += t;
        if (f && t !== l) {
          for (q = 0; k = e[q++];)k(n, m, d, h);
          if (a) {
            if (0 < l)for (; t--;)!n[t] && !m[t] && (m[t] = nd.call(c));
            m = Qa(m)
          }
          Y.apply(c, m);
          I && (!a && 0 < m.length && 1 < l + e.length) && x.uniqueSort(c)
        }
        I && (R = D, Ra = p);
        return n
      };
      h = f ? P(h) : h;
      c = sc(a, h)
    }
    return c
  };
  v.sortStable = A.split("").sort(zb).join("") === A;
  v.detectDuplicates = !!sa;
  X();
  v.sortDetached = Q(function (a) {
    return a.compareDocumentPosition(F.createElement("div")) &
      1
  });
  Q(function (a) {
    a.innerHTML = "<a href='#'></a>";
    return "#" === a.firstChild.getAttribute("href")
  }) || ub("type|href|height|width", function (a, d, h) {
    if (!h)return a.getAttribute(d, "type" === d.toLowerCase() ? 1 : 2)
  });
  (!v.attributes || !Q(function (a) {
    a.innerHTML = "<input/>";
    a.firstChild.setAttribute("value", "");
    return "" === a.firstChild.getAttribute("value")
  })) && ub("value", function (a, d, h) {
    if (!h && "input" === a.nodeName.toLowerCase())return a.defaultValue
  });
  Q(function (a) {
    return null == a.getAttribute("disabled")
  }) || ub("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    function (a, d, h) {
      var e;
      if (!h)return !0 === a[d] ? d.toLowerCase() : (e = a.getAttributeNode(d)) && e.specified ? e.value : null
    });
  e.find = x;
  e.expr = x.selectors;
  e.expr[":"] = e.expr.pseudos;
  e.unique = x.uniqueSort;
  e.text = x.getText;
  e.isXMLDoc = x.isXML;
  e.contains = x.contains;
  var wc = e.expr.match.needsContext, xc = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Uc = /^.[^:#\[\.,]*$/;
  e.filter = function (a, d, h) {
    var b = d[0];
    h && (a = ":not(" + a + ")");
    return 1 === d.length && 1 === b.nodeType ? e.find.matchesSelector(b, a) ? [b] : [] : e.find.matches(a, e.grep(d, function (a) {
      return 1 ===
        a.nodeType
    }))
  };
  e.fn.extend({
    find: function (a) {
      var d, h = [], b = this, c = b.length;
      if ("string" !== typeof a)return this.pushStack(e(a).filter(function () {
        for (d = 0; d < c; d++)if (e.contains(b[d], this))return !0
      }));
      for (d = 0; d < c; d++)e.find(a, b[d], h);
      h = this.pushStack(1 < c ? e.unique(h) : h);
      h.selector = this.selector ? this.selector + " " + a : a;
      return h
    }, filter: function (a) {
      return this.pushStack(k(this, a || [], !1))
    }, not: function (a) {
      return this.pushStack(k(this, a || [], !0))
    }, is: function (a) {
      return !!k(this, "string" === typeof a && wc.test(a) ? e(a) :
      a || [], !1).length
    }
  });
  var Ca, u = c.document, ud = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (e.fn.init = function (a, d) {
    var h, b;
    if (!a)return this;
    if ("string" === typeof a) {
      if ((h = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : ud.exec(a)) && (h[1] || !d)) {
        if (h[1]) {
          if (d = d instanceof e ? d[0] : d, e.merge(this, e.parseHTML(h[1], d && d.nodeType ? d.ownerDocument || d : u, !0)), xc.test(h[1]) && e.isPlainObject(d))for (h in d)if (e.isFunction(this[h]))this[h](d[h]); else this.attr(h, d[h])
        } else {
          if ((b = u.getElementById(h[2])) &&
            b.parentNode) {
            if (b.id !== h[2])return Ca.find(a);
            this.length = 1;
            this[0] = b
          }
          this.context = u;
          this.selector = a
        }
        return this
      }
      return !d || d.jquery ? (d || Ca).find(a) : this.constructor(d).find(a)
    }
    if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
    if (e.isFunction(a))return "undefined" !== typeof Ca.ready ? Ca.ready(a) : a(e);
    void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
    return e.makeArray(a, this)
  }).prototype = e.fn;
  Ca = e(u);
  var vd = /^(?:parents|prev(?:Until|All))/, wd = {
    children: !0, contents: !0,
    next: !0, prev: !0
  };
  e.extend({
    dir: function (a, d, h) {
      var b = [];
      for (a = a[d]; a && 9 !== a.nodeType && (void 0 === h || 1 !== a.nodeType || !e(a).is(h));)1 === a.nodeType && b.push(a), a = a[d];
      return b
    }, sibling: function (a, d) {
      for (var h = []; a; a = a.nextSibling)1 === a.nodeType && a !== d && h.push(a);
      return h
    }
  });
  e.fn.extend({
    has: function (a) {
      var d, h = e(a, this), b = h.length;
      return this.filter(function () {
        for (d = 0; d < b; d++)if (e.contains(this, h[d]))return !0
      })
    }, closest: function (a, d) {
      for (var h, b = 0, c = this.length, f = [], g = wc.test(a) || "string" !== typeof a ? e(a,
        d || this.context) : 0; b < c; b++)for (h = this[b]; h && h !== d; h = h.parentNode)if (11 > h.nodeType && (g ? -1 < g.index(h) : 1 === h.nodeType && e.find.matchesSelector(h, a))) {
        f.push(h);
        break
      }
      return this.pushStack(1 < f.length ? e.unique(f) : f)
    }, index: function (a) {
      return !a ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof a ? e.inArray(this[0], e(a)) : e.inArray(a.jquery ? a[0] : a, this)
    }, add: function (a, d) {
      return this.pushStack(e.unique(e.merge(this.get(), e(a, d))))
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject :
        this.prevObject.filter(a))
    }
  });
  e.each({
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null
    }, parents: function (a) {
      return e.dir(a, "parentNode")
    }, parentsUntil: function (a, d, h) {
      return e.dir(a, "parentNode", h)
    }, next: function (a) {
      return l(a, "nextSibling")
    }, prev: function (a) {
      return l(a, "previousSibling")
    }, nextAll: function (a) {
      return e.dir(a, "nextSibling")
    }, prevAll: function (a) {
      return e.dir(a, "previousSibling")
    }, nextUntil: function (a, d, h) {
      return e.dir(a, "nextSibling", h)
    }, prevUntil: function (a, d, h) {
      return e.dir(a,
        "previousSibling", h)
    }, siblings: function (a) {
      return e.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
      return e.sibling(a.firstChild)
    }, contents: function (a) {
      return e.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : e.merge([], a.childNodes)
    }
  }, function (a, d) {
    e.fn[a] = function (h, b) {
      var c = e.map(this, d, h);
      "Until" !== a.slice(-5) && (b = h);
      b && "string" === typeof b && (c = e.filter(b, c));
      1 < this.length && (wd[a] || (c = e.unique(c)), vd.test(a) && (c = c.reverse()));
      return this.pushStack(c)
    }
  });
  var T = /\S+/g,
    yc = {};
  e.Callbacks = function (a) {
    var d;
    if ("string" === typeof a) {
      if (!(d = yc[a])) {
        d = a;
        var h = yc[d] = {};
        e.each(d.match(T) || [], function (a, d) {
          h[d] = !0
        });
        d = h
      }
    } else d = e.extend({}, a);
    a = d;
    var b, c, f, g, j, q, k = [], l = !a.once && [], t = function (d) {
      c = a.memory && d;
      f = !0;
      j = q || 0;
      q = 0;
      g = k.length;
      for (b = !0; k && j < g; j++)if (!1 === k[j].apply(d[0], d[1]) && a.stopOnFalse) {
        c = !1;
        break
      }
      b = !1;
      k && (l ? l.length && t(l.shift()) : c ? k = [] : n.disable())
    }, n = {
      add: function () {
        if (k) {
          var d = k.length;
          (function Zc(d) {
            e.each(d, function (d, h) {
              var b = e.type(h);
              "function" === b ?
              (!a.unique || !n.has(h)) && k.push(h) : h && (h.length && "string" !== b) && Zc(h)
            })
          })(arguments);
          b ? g = k.length : c && (q = d, t(c))
        }
        return this
      }, remove: function () {
        k && e.each(arguments, function (a, d) {
          for (var h; -1 < (h = e.inArray(d, k, h));)k.splice(h, 1), b && (h <= g && g--, h <= j && j--)
        });
        return this
      }, has: function (a) {
        return a ? -1 < e.inArray(a, k) : !(!k || !k.length)
      }, empty: function () {
        k = [];
        g = 0;
        return this
      }, disable: function () {
        k = l = c = void 0;
        return this
      }, disabled: function () {
        return !k
      }, lock: function () {
        l = void 0;
        c || n.disable();
        return this
      }, locked: function () {
        return !l
      },
      fireWith: function (a, d) {
        if (k && (!f || l))d = d || [], d = [a, d.slice ? d.slice() : d], b ? l.push(d) : t(d);
        return this
      }, fire: function () {
        n.fireWith(this, arguments);
        return this
      }, fired: function () {
        return !!f
      }
    };
    return n
  };
  e.extend({
    Deferred: function (a) {
      var d = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]], h = "pending", b = {
        state: function () {
          return h
        }, always: function () {
          c.done(arguments).fail(arguments);
          return this
        }, then: function () {
          var a =
            arguments;
          return e.Deferred(function (h) {
            e.each(d, function (d, f) {
              var g = e.isFunction(a[d]) && a[d];
              c[f[1]](function () {
                var a = g && g.apply(this, arguments);
                if (a && e.isFunction(a.promise))a.promise().done(h.resolve).fail(h.reject).progress(h.notify); else h[f[0] + "With"](this === b ? h.promise() : this, g ? [a] : arguments)
              })
            });
            a = null
          }).promise()
        }, promise: function (a) {
          return null != a ? e.extend(a, b) : b
        }
      }, c = {};
      b.pipe = b.then;
      e.each(d, function (a, e) {
        var f = e[2], g = e[3];
        b[e[1]] = f.add;
        g && f.add(function () {
          h = g
        }, d[a ^ 1][2].disable, d[2][2].lock);
        c[e[0]] = function () {
          c[e[0] + "With"](this === c ? b : this, arguments);
          return this
        };
        c[e[0] + "With"] = f.fireWith
      });
      b.promise(c);
      a && a.call(c, c);
      return c
    }, when: function (a) {
      var d = 0, h = W.call(arguments), b = h.length, c = 1 !== b || a && e.isFunction(a.promise) ? b : 0, f = 1 === c ? a : e.Deferred(), g = function (a, d, h) {
        return function (e) {
          d[a] = this;
          h[a] = 1 < arguments.length ? W.call(arguments) : e;
          h === j ? f.notifyWith(d, h) : --c || f.resolveWith(d, h)
        }
      }, j, q, k;
      if (1 < b) {
        j = Array(b);
        q = Array(b);
        for (k = Array(b); d < b; d++)h[d] && e.isFunction(h[d].promise) ? h[d].promise().done(g(d,
          k, h)).fail(f.reject).progress(g(d, q, j)) : --c
      }
      c || f.resolveWith(k, h);
      return f.promise()
    }
  });
  var Ua;
  e.fn.ready = function (a) {
    e.ready.promise().done(a);
    return this
  };
  e.extend({
    isReady: !1, readyWait: 1, holdReady: function (a) {
      a ? e.readyWait++ : e.ready(!0)
    }, ready: function (a) {
      if (!(!0 === a ? --e.readyWait : e.isReady)) {
        if (!u.body)return setTimeout(e.ready);
        e.isReady = !0;
        !0 !== a && 0 < --e.readyWait || (Ua.resolveWith(u, [e]), e.fn.trigger && e(u).trigger("ready").off("ready"))
      }
    }
  });
  e.ready.promise = function (a) {
    if (!Ua)if (Ua = e.Deferred(),
      "complete" === u.readyState)setTimeout(e.ready); else if (u.addEventListener)u.addEventListener("DOMContentLoaded", m, !1), c.addEventListener("load", m, !1); else {
      u.attachEvent("onreadystatechange", m);
      c.attachEvent("onload", m);
      var d = !1;
      try {
        d = null == c.frameElement && u.documentElement
      } catch (h) {
      }
      d && d.doScroll && function K() {
        if (!e.isReady) {
          try {
            d.doScroll("left")
          } catch (a) {
            return setTimeout(K, 50)
          }
          n();
          e.ready()
        }
      }()
    }
    return Ua.promise(a)
  };
  var M = "undefined", zc;
  for (zc in e(s))break;
  s.ownLast = "0" !== zc;
  s.inlineBlockNeedsLayout = !1;
  e(function () {
    var a, d, h = u.getElementsByTagName("body")[0];
    if (h) {
      a = u.createElement("div");
      a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
      d = u.createElement("div");
      h.appendChild(a).appendChild(d);
      if (typeof d.style.zoom !== M && (d.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", s.inlineBlockNeedsLayout = 3 === d.offsetWidth))h.style.zoom = 1;
      h.removeChild(a)
    }
  });
  var xd = u.createElement("div");
  if (null == s.deleteExpando) {
    s.deleteExpando = !0;
    try {
      delete xd.test
    } catch (ae) {
      s.deleteExpando = !1
    }
  }
  e.acceptData = function (a) {
    var d = e.noData[(a.nodeName + " ").toLowerCase()], h = +a.nodeType || 1;
    return 1 !== h && 9 !== h ? !1 : !d || !0 !== d && a.getAttribute("classid") === d
  };
  var Wc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Vc = /([A-Z])/g;
  e.extend({
    cache: {},
    noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
    hasData: function (a) {
      a = a.nodeType ? e.cache[a[e.expando]] : a[e.expando];
      return !!a && !b(a)
    },
    data: function (a, d, h) {
      return f(a, d, h)
    },
    removeData: function (a,
                          d) {
      return g(a, d)
    },
    _data: function (a, d, h) {
      return f(a, d, h, !0)
    },
    _removeData: function (a, d) {
      return g(a, d, !0)
    }
  });
  e.fn.extend({
    data: function (a, d) {
      var h, b, c, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (c = e.data(f), 1 === f.nodeType && !e._data(f, "parsedAttrs"))) {
          for (h = g.length; h--;)b = g[h].name, 0 === b.indexOf("data-") && (b = e.camelCase(b.slice(5)), y(f, b, c[b]));
          e._data(f, "parsedAttrs", !0)
        }
        return c
      }
      return "object" === typeof a ? this.each(function () {
        e.data(this, a)
      }) : 1 < arguments.length ? this.each(function () {
        e.data(this,
          a, d)
      }) : f ? y(f, a, e.data(f, a)) : void 0
    }, removeData: function (a) {
      return this.each(function () {
        e.removeData(this, a)
      })
    }
  });
  e.extend({
    queue: function (a, d, h) {
      var b;
      if (a)return d = (d || "fx") + "queue", b = e._data(a, d), h && (!b || e.isArray(h) ? b = e._data(a, d, e.makeArray(h)) : b.push(h)), b || []
    }, dequeue: function (a, d) {
      d = d || "fx";
      var h = e.queue(a, d), b = h.length, c = h.shift(), f = e._queueHooks(a, d), g = function () {
        e.dequeue(a, d)
      };
      "inprogress" === c && (c = h.shift(), b--);
      c && ("fx" === d && h.unshift("inprogress"), delete f.stop, c.call(a, g, f));
      !b && f &&
      f.empty.fire()
    }, _queueHooks: function (a, d) {
      var h = d + "queueHooks";
      return e._data(a, h) || e._data(a, h, {
          empty: e.Callbacks("once memory").add(function () {
            e._removeData(a, d + "queue");
            e._removeData(a, h)
          })
        })
    }
  });
  e.fn.extend({
    queue: function (a, d) {
      var h = 2;
      "string" !== typeof a && (d = a, a = "fx", h--);
      return arguments.length < h ? e.queue(this[0], a) : void 0 === d ? this : this.each(function () {
        var h = e.queue(this, a, d);
        e._queueHooks(this, a);
        "fx" === a && "inprogress" !== h[0] && e.dequeue(this, a)
      })
    }, dequeue: function (a) {
      return this.each(function () {
        e.dequeue(this,
          a)
      })
    }, clearQueue: function (a) {
      return this.queue(a || "fx", [])
    }, promise: function (a, d) {
      var h, b = 1, c = e.Deferred(), f = this, g = this.length, j = function () {
        --b || c.resolveWith(f, [f])
      };
      "string" !== typeof a && (d = a, a = void 0);
      for (a = a || "fx"; g--;)if ((h = e._data(f[g], a + "queueHooks")) && h.empty)b++, h.empty.add(j);
      j();
      return c.promise(d)
    }
  });
  var Va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, fa = ["Top", "Right", "Bottom", "Left"], ya = function (a, d) {
    a = d || a;
    return "none" === e.css(a, "display") || !e.contains(a.ownerDocument, a)
  }, la = e.access =
    function (a, d, h, b, c, f, g) {
      var j = 0, q = a.length, k = null == h;
      if ("object" === e.type(h))for (j in c = !0, h)e.access(a, d, j, h[j], !0, f, g); else if (void 0 !== b && (c = !0, e.isFunction(b) || (g = !0), k && (g ? (d.call(a, b), d = null) : (k = d, d = function (a, d, h) {
          return k.call(e(a), h)
        })), d))for (; j < q; j++)d(a[j], h, g ? b : b.call(a[j], j, d(a[j], h)));
      return c ? a : k ? d.call(a) : q ? d(a[0], h) : f
    }, hb = /^(?:checkbox|radio)$/i, Bb = u.createDocumentFragment(), B = u.createElement("div"), Da = u.createElement("input");
  B.setAttribute("className", "t");
  B.innerHTML = "  <link/><table></table><a href='/a'>a</a>";
  s.leadingWhitespace = 3 === B.firstChild.nodeType;
  s.tbody = !B.getElementsByTagName("tbody").length;
  s.htmlSerialize = !!B.getElementsByTagName("link").length;
  s.html5Clone = "<:nav></:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML;
  Da.type = "checkbox";
  Da.checked = !0;
  Bb.appendChild(Da);
  s.appendChecked = Da.checked;
  B.innerHTML = "<textarea>x</textarea>";
  s.noCloneChecked = !!B.cloneNode(!0).lastChild.defaultValue;
  Bb.appendChild(B);
  B.innerHTML = "<input type='radio' checked='checked' name='t'/>";
  s.checkClone = B.cloneNode(!0).cloneNode(!0).lastChild.checked;
  s.noCloneEvent = !0;
  B.attachEvent && (B.attachEvent("onclick", function () {
    s.noCloneEvent = !1
  }), B.cloneNode(!0).click());
  if (null == s.deleteExpando) {
    s.deleteExpando = !0;
    try {
      delete B.test
    } catch (be) {
      s.deleteExpando = !1
    }
  }
  var Bb = B = Da = null, Wa, Xa, Ac = u.createElement("div");
  for (Wa in{
    submit: !0,
    change: !0,
    focusin: !0
  })if (Xa = "on" + Wa, !(s[Wa + "Bubbles"] = Xa in c))Ac.setAttribute(Xa, "t"), s[Wa + "Bubbles"] = !1 === Ac.attributes[Xa].expando;
  var Cb = /^(?:input|select|textarea)$/i, yd = /^key/, zd = /^(?:mouse|contextmenu)|click/, Bc = /^(?:focusinfocus|focusoutblur)$/,
    Cc = /^([^.]*)(?:\.(.+)|)$/;
  e.event = {
    global: {},
    add: function (a, d, h, b, c) {
      var f, g, j, q, k, l, t, n, m;
      if (j = e._data(a)) {
        h.handler && (q = h, h = q.handler, c = q.selector);
        h.guid || (h.guid = e.guid++);
        if (!(g = j.events))g = j.events = {};
        if (!(k = j.handle))k = j.handle = function (a) {
          return typeof e !== M && (!a || e.event.triggered !== a.type) ? e.event.dispatch.apply(k.elem, arguments) : void 0
        }, k.elem = a;
        d = (d || "").match(T) || [""];
        for (j = d.length; j--;)if (f = Cc.exec(d[j]) || [], n = l = f[1], m = (f[2] || "").split(".").sort(), n) {
          f = e.event.special[n] || {};
          n = (c ? f.delegateType :
              f.bindType) || n;
          f = e.event.special[n] || {};
          l = e.extend({
            type: n,
            origType: l,
            data: b,
            handler: h,
            guid: h.guid,
            selector: c,
            needsContext: c && e.expr.match.needsContext.test(c),
            namespace: m.join(".")
          }, q);
          if (!(t = g[n]))if (t = g[n] = [], t.delegateCount = 0, !f.setup || !1 === f.setup.call(a, b, m, k))a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k);
          f.add && (f.add.call(a, l), l.handler.guid || (l.handler.guid = h.guid));
          c ? t.splice(t.delegateCount++, 0, l) : t.push(l);
          e.event.global[n] = !0
        }
        a = null
      }
    },
    remove: function (a,
                      d, h, b, c) {
      var f, g, j, q, k, l, t, n, m, p, s, D = e.hasData(a) && e._data(a);
      if (D && (l = D.events)) {
        d = (d || "").match(T) || [""];
        for (k = d.length; k--;)if (j = Cc.exec(d[k]) || [], m = s = j[1], p = (j[2] || "").split(".").sort(), m) {
          t = e.event.special[m] || {};
          m = (b ? t.delegateType : t.bindType) || m;
          n = l[m] || [];
          j = j[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for (q = f = n.length; f--;)if (g = n[f], (c || s === g.origType) && (!h || h.guid === g.guid) && (!j || j.test(g.namespace)) && (!b || b === g.selector || "**" === b && g.selector))n.splice(f, 1), g.selector && n.delegateCount--,
          t.remove && t.remove.call(a, g);
          q && !n.length && ((!t.teardown || !1 === t.teardown.call(a, p, D.handle)) && e.removeEvent(a, m, D.handle), delete l[m])
        } else for (m in l)e.event.remove(a, m + d[k], h, b, !0);
        e.isEmptyObject(l) && (delete D.handle, e._removeData(a, "events"))
      }
    },
    trigger: function (a, d, h, b) {
      var f, g, j, q, k, l, t = [h || u], n = pa.call(a, "type") ? a.type : a;
      k = pa.call(a, "namespace") ? a.namespace.split(".") : [];
      j = f = h = h || u;
      if (!(3 === h.nodeType || 8 === h.nodeType) && !Bc.test(n + e.event.triggered))if (0 <= n.indexOf(".") && (k = n.split("."), n = k.shift(),
          k.sort()), g = 0 > n.indexOf(":") && "on" + n, a = a[e.expando] ? a : new e.Event(n, "object" === typeof a && a), a.isTrigger = b ? 2 : 3, a.namespace = k.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = h), d = null == d ? [a] : e.makeArray(d, [a]), k = e.event.special[n] || {}, b || !(k.trigger && !1 === k.trigger.apply(h, d))) {
        if (!b && !k.noBubble && !e.isWindow(h)) {
          q = k.delegateType || n;
          Bc.test(q + n) || (j = j.parentNode);
          for (; j; j = j.parentNode)t.push(j), f = j;
          if (f === (h.ownerDocument ||
            u))t.push(f.defaultView || f.parentWindow || c)
        }
        for (l = 0; (j = t[l++]) && !a.isPropagationStopped();)if (a.type = 1 < l ? q : k.bindType || n, (f = (e._data(j, "events") || {})[a.type] && e._data(j, "handle")) && f.apply(j, d), (f = g && j[g]) && f.apply && e.acceptData(j))a.result = f.apply(j, d), !1 === a.result && a.preventDefault();
        a.type = n;
        if (!b && !a.isDefaultPrevented() && (!k._default || !1 === k._default.apply(t.pop(), d)) && e.acceptData(h) && g && h[n] && !e.isWindow(h)) {
          (f = h[g]) && (h[g] = null);
          e.event.triggered = n;
          try {
            h[n]()
          } catch (m) {
          }
          e.event.triggered = void 0;
          f && (h[g] = f)
        }
        return a.result
      }
    },
    dispatch: function (a) {
      a = e.event.fix(a);
      var d, h, b, c, f = [], g = W.call(arguments);
      d = (e._data(this, "events") || {})[a.type] || [];
      var j = e.event.special[a.type] || {};
      g[0] = a;
      a.delegateTarget = this;
      if (!(j.preDispatch && !1 === j.preDispatch.call(this, a))) {
        f = e.event.handlers.call(this, a, d);
        for (d = 0; (b = f[d++]) && !a.isPropagationStopped();) {
          a.currentTarget = b.elem;
          for (c = 0; (h = b.handlers[c++]) && !a.isImmediatePropagationStopped();)if (!a.namespace_re || a.namespace_re.test(h.namespace))if (a.handleObj =
              h, a.data = h.data, h = ((e.event.special[h.origType] || {}).handle || h.handler).apply(b.elem, g), void 0 !== h && !1 === (a.result = h))a.preventDefault(), a.stopPropagation()
        }
        j.postDispatch && j.postDispatch.call(this, a);
        return a.result
      }
    },
    handlers: function (a, d) {
      var h, b, c, f, g = [], j = d.delegateCount, q = a.target;
      if (j && q.nodeType && (!a.button || "click" !== a.type))for (; q != this; q = q.parentNode || this)if (1 === q.nodeType && (!0 !== q.disabled || "click" !== a.type)) {
        c = [];
        for (f = 0; f < j; f++)b = d[f], h = b.selector + " ", void 0 === c[h] && (c[h] = b.needsContext ?
        0 <= e(h, this).index(q) : e.find(h, this, null, [q]).length), c[h] && c.push(b);
        c.length && g.push({elem: q, handlers: c})
      }
      j < d.length && g.push({elem: this, handlers: d.slice(j)});
      return g
    },
    fix: function (a) {
      if (a[e.expando])return a;
      var d, h, b;
      d = a.type;
      var c = a, f = this.fixHooks[d];
      f || (this.fixHooks[d] = f = zd.test(d) ? this.mouseHooks : yd.test(d) ? this.keyHooks : {});
      b = f.props ? this.props.concat(f.props) : this.props;
      a = new e.Event(c);
      for (d = b.length; d--;)h = b[d], a[h] = c[h];
      a.target || (a.target = c.srcElement || u);
      3 === a.target.nodeType && (a.target =
        a.target.parentNode);
      a.metaKey = !!a.metaKey;
      return f.filter ? f.filter(a, c) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: ["char", "charCode", "key", "keyCode"], filter: function (a, d) {
        null == a.which && (a.which = null != d.charCode ? d.charCode : d.keyCode);
        return a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a,
                        d) {
        var h, b, e = d.button, c = d.fromElement;
        null == a.pageX && null != d.clientX && (h = a.target.ownerDocument || u, b = h.documentElement, h = h.body, a.pageX = d.clientX + (b && b.scrollLeft || h && h.scrollLeft || 0) - (b && b.clientLeft || h && h.clientLeft || 0), a.pageY = d.clientY + (b && b.scrollTop || h && h.scrollTop || 0) - (b && b.clientTop || h && h.clientTop || 0));
        !a.relatedTarget && c && (a.relatedTarget = c === a.target ? d.toElement : c);
        !a.which && void 0 !== e && (a.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0);
        return a
      }
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          if (this !==
            D() && this.focus)try {
            return this.focus(), !1
          } catch (a) {
          }
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          if (this === D() && this.blur)return this.blur(), !1
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          if (e.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
        }, _default: function (a) {
          return e.nodeName(a.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function (a, d, h, b) {
      a = e.extend(new e.Event, h, {
        type: a,
        isSimulated: !0, originalEvent: {}
      });
      b ? e.event.trigger(a, null, d) : e.event.dispatch.call(d, a);
      a.isDefaultPrevented() && h.preventDefault()
    }
  };
  e.removeEvent = u.removeEventListener ? function (a, d, h) {
    a.removeEventListener && a.removeEventListener(d, h, !1)
  } : function (a, d, h) {
    d = "on" + d;
    a.detachEvent && (typeof a[d] === M && (a[d] = null), a.detachEvent(d, h))
  };
  e.Event = function (a, d) {
    if (!(this instanceof e.Event))return new e.Event(a, d);
    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 ===
    a.defaultPrevented && (!1 === a.returnValue || a.getPreventDefault && a.getPreventDefault()) ? q : t) : this.type = a;
    d && e.extend(this, d);
    this.timeStamp = a && a.timeStamp || e.now();
    this[e.expando] = !0
  };
  e.Event.prototype = {
    isDefaultPrevented: t, isPropagationStopped: t, isImmediatePropagationStopped: t, preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = q;
      a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    }, stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = q;
      a && (a.stopPropagation &&
      a.stopPropagation(), a.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = q;
      this.stopPropagation()
    }
  };
  e.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, d) {
    e.event.special[a] = {
      delegateType: d, bindType: d, handle: function (a) {
        var b, c = a.relatedTarget, f = a.handleObj;
        if (!c || c !== this && !e.contains(this, c))a.type = f.origType, b = f.handler.apply(this, arguments), a.type = d;
        return b
      }
    }
  });
  s.submitBubbles || (e.event.special.submit = {
    setup: function () {
      if (e.nodeName(this, "form"))return !1;
      e.event.add(this, "click._submit keypress._submit", function (a) {
        a = a.target;
        if ((a = e.nodeName(a, "input") || e.nodeName(a, "button") ? a.form : void 0) && !e._data(a, "submitBubbles"))e.event.add(a, "submit._submit", function (a) {
          a._submit_bubble = !0
        }), e._data(a, "submitBubbles", !0)
      })
    }, postDispatch: function (a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && e.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
      if (e.nodeName(this, "form"))return !1;
      e.event.remove(this, "._submit")
    }
  });
  s.changeBubbles || (e.event.special.change = {
    setup: function () {
      if (Cb.test(this.nodeName)) {
        if ("checkbox" === this.type || "radio" === this.type)e.event.add(this, "propertychange._change", function (a) {
          "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
        }), e.event.add(this, "click._change", function (a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1);
          e.event.simulate("change", this, a, !0)
        });
        return !1
      }
      e.event.add(this, "beforeactivate._change", function (a) {
        a = a.target;
        Cb.test(a.nodeName) && !e._data(a,
          "changeBubbles") && (e.event.add(a, "change._change", function (a) {
          this.parentNode && (!a.isSimulated && !a.isTrigger) && e.event.simulate("change", this.parentNode, a, !0)
        }), e._data(a, "changeBubbles", !0))
      })
    }, handle: function (a) {
      var d = a.target;
      if (this !== d || a.isSimulated || a.isTrigger || "radio" !== d.type && "checkbox" !== d.type)return a.handleObj.handler.apply(this, arguments)
    }, teardown: function () {
      e.event.remove(this, "._change");
      return !Cb.test(this.nodeName)
    }
  });
  s.focusinBubbles || e.each({focus: "focusin", blur: "focusout"},
    function (a, d) {
      var h = function (a) {
        e.event.simulate(d, a.target, e.event.fix(a), !0)
      };
      e.event.special[d] = {
        setup: function () {
          var b = this.ownerDocument || this, c = e._data(b, d);
          c || b.addEventListener(a, h, !0);
          e._data(b, d, (c || 0) + 1)
        }, teardown: function () {
          var b = this.ownerDocument || this, c = e._data(b, d) - 1;
          c ? e._data(b, d, c) : (b.removeEventListener(a, h, !0), e._removeData(b, d))
        }
      }
    });
  e.fn.extend({
    on: function (a, d, h, b, c) {
      var f, g;
      if ("object" === typeof a) {
        "string" !== typeof d && (h = h || d, d = void 0);
        for (f in a)this.on(f, d, h, a[f], c);
        return this
      }
      null ==
      h && null == b ? (b = d, h = d = void 0) : null == b && ("string" === typeof d ? (b = h, h = void 0) : (b = h, h = d, d = void 0));
      if (!1 === b)b = t; else if (!b)return this;
      1 === c && (g = b, b = function (a) {
        e().off(a);
        return g.apply(this, arguments)
      }, b.guid = g.guid || (g.guid = e.guid++));
      return this.each(function () {
        e.event.add(this, a, b, h, d)
      })
    }, one: function (a, d, h, b) {
      return this.on(a, d, h, b, 1)
    }, off: function (a, d, h) {
      var b;
      if (a && a.preventDefault && a.handleObj)return b = a.handleObj, e(a.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector,
        b.handler), this;
      if ("object" === typeof a) {
        for (b in a)this.off(b, d, a[b]);
        return this
      }
      if (!1 === d || "function" === typeof d)h = d, d = void 0;
      !1 === h && (h = t);
      return this.each(function () {
        e.event.remove(this, a, h, d)
      })
    }, trigger: function (a, d) {
      return this.each(function () {
        e.event.trigger(a, d, this)
      })
    }, triggerHandler: function (a, d) {
      var h = this[0];
      if (h)return e.event.trigger(a, d, h, !0)
    }
  });
  var Qb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ad = / jQuery\d+="(?:null|\d+)"/g, Dc = RegExp("<(?:" + Qb + ")[\\s/>]", "i"), Db = /^\s+/, Ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fc = /<([\w:]+)/, Gc = /<tbody/i, Bd = /<|&#?\w+;/, Cd = /<(?:script|style|link)/i, Dd = /checked\s*(?:[^=]|=\s*.checked.)/i, Hc = /^$|\/(?:java|ecma)script/i, Xc = /^true\/(.*)/, Ed = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, L = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>",
        "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: s.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Eb = G(u).appendChild(u.createElement("div"));
  L.optgroup = L.option;
  L.tbody = L.tfoot = L.colgroup = L.caption = L.thead;
  L.th = L.td;
  e.extend({
    clone: function (a, d, h) {
      var b, c, f, g, j, q = e.contains(a.ownerDocument, a);
      s.html5Clone || e.isXMLDoc(a) || !Dc.test("<" +
        a.nodeName + ">") ? f = a.cloneNode(!0) : (Eb.innerHTML = a.outerHTML, Eb.removeChild(f = Eb.firstChild));
      if ((!s.noCloneEvent || !s.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !e.isXMLDoc(a)) {
        b = C(f);
        j = C(a);
        for (g = 0; null != (c = j[g]); ++g)if (b[g]) {
          var k = b[g], l = void 0, t = void 0, n = void 0;
          if (1 === k.nodeType) {
            l = k.nodeName.toLowerCase();
            if (!s.noCloneEvent && k[e.expando]) {
              n = e._data(k);
              for (t in n.events)e.removeEvent(k, t, n.handle);
              k.removeAttribute(e.expando)
            }
            if ("script" === l && k.text !== c.text)Sb(k).text = c.text, wa(k); else if ("object" ===
              l)k.parentNode && (k.outerHTML = c.outerHTML), s.html5Clone && (c.innerHTML && !e.trim(k.innerHTML)) && (k.innerHTML = c.innerHTML); else if ("input" === l && hb.test(c.type))k.defaultChecked = k.checked = c.checked, k.value !== c.value && (k.value = c.value); else if ("option" === l)k.defaultSelected = k.selected = c.defaultSelected; else if ("input" === l || "textarea" === l)k.defaultValue = c.defaultValue
          }
        }
      }
      if (d)if (h) {
        j = j || C(a);
        b = b || C(f);
        for (g = 0; null != (c = j[g]); g++)Tb(c, b[g])
      } else Tb(a, f);
      b = C(f, "script");
      0 < b.length && ib(b, !q && C(a, "script"));
      return f
    },
    buildFragment: function (a, d, b, c) {
      for (var f, g, j, k, q, l, t = a.length, n = G(d), m = [], p = 0; p < t; p++)if ((g = a[p]) || 0 === g)if ("object" === e.type(g))e.merge(m, g.nodeType ? [g] : g); else if (Bd.test(g)) {
        j = j || n.appendChild(d.createElement("div"));
        k = (Fc.exec(g) || ["", ""])[1].toLowerCase();
        l = L[k] || L._default;
        j.innerHTML = l[1] + g.replace(Ec, "<$1></$2>") + l[2];
        for (f = l[0]; f--;)j = j.lastChild;
        !s.leadingWhitespace && Db.test(g) && m.push(d.createTextNode(Db.exec(g)[0]));
        if (!s.tbody)for (f = (g = "table" === k && !Gc.test(g) ? j.firstChild : "<table>" ===
          l[1] && !Gc.test(g) ? j : 0) && g.childNodes.length; f--;)e.nodeName(q = g.childNodes[f], "tbody") && !q.childNodes.length && g.removeChild(q);
        e.merge(m, j.childNodes);
        for (j.textContent = ""; j.firstChild;)j.removeChild(j.firstChild);
        j = n.lastChild
      } else m.push(d.createTextNode(g));
      j && n.removeChild(j);
      s.appendChecked || e.grep(C(m, "input"), N);
      for (p = 0; g = m[p++];)if (!(c && -1 !== e.inArray(g, c)) && (a = e.contains(g.ownerDocument, g), j = C(n.appendChild(g), "script"), a && ib(j), b))for (f = 0; g = j[f++];)Hc.test(g.type || "") && b.push(g);
      return n
    },
    cleanData: function (a, d) {
      for (var b, c, f, g, j = 0, k = e.expando, q = e.cache, l = s.deleteExpando, t = e.event.special; null != (b = a[j]); j++)if (d || e.acceptData(b))if (g = (f = b[k]) && q[f]) {
        if (g.events)for (c in g.events)t[c] ? e.event.remove(b, c) : e.removeEvent(b, c, g.handle);
        q[f] && (delete q[f], l ? delete b[k] : typeof b.removeAttribute !== M ? b.removeAttribute(k) : b[k] = null, V.push(f))
      }
    }
  });
  e.fn.extend({
    text: function (a) {
      return la(this, function (a) {
          return void 0 === a ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(a))
        },
        null, a, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (a) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Rb(this, a).appendChild(a)
      })
    }, prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var d = Rb(this, a);
          d.insertBefore(a, d.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    }, after: function () {
      return this.domManip(arguments,
        function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
    }, remove: function (a, d) {
      for (var b, c = a ? e.filter(a, this) : this, f = 0; null != (b = c[f]); f++)!d && 1 === b.nodeType && e.cleanData(C(b)), b.parentNode && (d && e.contains(b.ownerDocument, b) && ib(C(b, "script")), b.parentNode.removeChild(b));
      return this
    }, empty: function () {
      for (var a, d = 0; null != (a = this[d]); d++) {
        for (1 === a.nodeType && e.cleanData(C(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
        a.options && e.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function (a, d) {
      a = null == a ? !1 : a;
      d = null == d ? a : d;
      return this.map(function () {
        return e.clone(this, a, d)
      })
    }, html: function (a) {
      return la(this, function (a) {
        var b = this[0] || {}, c = 0, f = this.length;
        if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(Ad, "") : void 0;
        if ("string" === typeof a && !Cd.test(a) && (s.htmlSerialize || !Dc.test(a)) && (s.leadingWhitespace || !Db.test(a)) && !L[(Fc.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(Ec, "<$1></$2>");
          try {
            for (; c < f; c++)b = this[c] || {}, 1 === b.nodeType && (e.cleanData(C(b, !1)), b.innerHTML =
              a);
            b = 0
          } catch (g) {
          }
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    }, replaceWith: function () {
      var a = arguments[0];
      this.domManip(arguments, function (d) {
        a = this.parentNode;
        e.cleanData(C(this));
        a && a.replaceChild(d, this)
      });
      return a && (a.length || a.nodeType) ? this : this.remove()
    }, detach: function (a) {
      return this.remove(a, !0)
    }, domManip: function (a, d) {
      a = kc.apply([], a);
      var b, c, f, g, j = 0, k = this.length, q = this, l = k - 1, t = a[0], n = e.isFunction(t);
      if (n || 1 < k && "string" === typeof t && !s.checkClone && Dd.test(t))return this.each(function (b) {
        var h =
          q.eq(b);
        n && (a[0] = t.call(this, b, h.html()));
        h.domManip(a, d)
      });
      if (k && (g = e.buildFragment(a, this[0].ownerDocument, !1, this), b = g.firstChild, 1 === g.childNodes.length && (g = b), b)) {
        f = e.map(C(g, "script"), Sb);
        for (c = f.length; j < k; j++)b = g, j !== l && (b = e.clone(b, !0, !0), c && e.merge(f, C(b, "script"))), d.call(this[j], b, j);
        if (c) {
          g = f[f.length - 1].ownerDocument;
          e.map(f, wa);
          for (j = 0; j < c; j++)if (b = f[j], Hc.test(b.type || "") && !e._data(b, "globalEval") && e.contains(g, b))b.src ? e._evalUrl && e._evalUrl(b.src) : e.globalEval((b.text || b.textContent ||
          b.innerHTML || "").replace(Ed, ""))
        }
        g = b = null
      }
      return this
    }
  });
  e.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, d) {
    e.fn[a] = function (a) {
      for (var b = 0, c = [], f = e(a), g = f.length - 1; b <= g; b++)a = b === g ? this : this.clone(!0), e(f[b])[d](a), nb.apply(c, a.get());
      return this.pushStack(c)
    }
  });
  var xa, Wb = {}, Ea, Ya, ta = u.createElement("div");
  ta.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
  Ea = ta.getElementsByTagName("a")[0];
  Ea.style.cssText = "float:left;opacity:.5";
  s.opacity = /^0.5/.test(Ea.style.opacity);
  s.cssFloat = !!Ea.style.cssFloat;
  ta.style.backgroundClip = "content-box";
  ta.cloneNode(!0).style.backgroundClip = "";
  s.clearCloneStyle = "content-box" === ta.style.backgroundClip;
  Ea = ta = null;
  s.shrinkWrapBlocks = function () {
    var a, d, b;
    if (null == Ya) {
      a = u.getElementsByTagName("body")[0];
      if (!a)return;
      d = u.createElement("div");
      b = u.createElement("div");
      a.appendChild(d).appendChild(b);
      Ya = !1;
      typeof b.style.zoom !== M && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",
        b.innerHTML = "<div></div>", b.firstChild.style.width = "5px", Ya = 3 !== b.offsetWidth);
      a.removeChild(d)
    }
    return Ya
  };
  var Ic = /^margin/, Ha = RegExp("^(" + Va + ")(?!px)[a-z%]+$", "i"), ga, ha, Fd = /^(top|right|bottom|left)$/;
  c.getComputedStyle ? (ga = function (a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null)
  }, ha = function (a, d, b) {
    var c, f, g = a.style;
    f = (b = b || ga(a)) ? b.getPropertyValue(d) || b[d] : void 0;
    b && ("" === f && !e.contains(a.ownerDocument, a) && (f = e.style(a, d)), Ha.test(f) && Ic.test(d) && (a = g.width, d = g.minWidth, c = g.maxWidth,
      g.minWidth = g.maxWidth = g.width = f, f = b.width, g.width = a, g.minWidth = d, g.maxWidth = c));
    return void 0 === f ? f : f + ""
  }) : u.documentElement.currentStyle && (ga = function (a) {
    return a.currentStyle
  }, ha = function (a, d, b) {
    var e, c, f, g = a.style;
    f = (b = b || ga(a)) ? b[d] : void 0;
    null == f && (g && g[d]) && (f = g[d]);
    if (Ha.test(f) && !Fd.test(d)) {
      b = g.left;
      if (c = (e = a.runtimeStyle) && e.left)e.left = a.currentStyle.left;
      g.left = "fontSize" === d ? "1em" : f;
      f = g.pixelLeft + "px";
      g.left = b;
      c && (e.left = c)
    }
    return void 0 === f ? f : f + "" || "auto"
  });
  var Hb = function () {
    var a, d,
      b = u.getElementsByTagName("body")[0];
    b && (a = u.createElement("div"), d = u.createElement("div"), a.style.cssText = Fb, b.appendChild(a).appendChild(d), d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", e.swap(b, null != b.style.zoom ? {zoom: 1} : {}, function () {
      Gb = 4 === d.offsetWidth
    }), Za = !0, $a = !1, ab = !0, c.getComputedStyle && ($a = "1%" !== (c.getComputedStyle(d, null) || {}).top, Za = "4px" === (c.getComputedStyle(d,
        null) || {width: "4px"}).width), b.removeChild(a), d = b = null)
  }, Fa, bb, Gb, Za, $a, ab, ua = u.createElement("div"), Fb = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
  ua.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
  Fa = ua.getElementsByTagName("a")[0];
  Fa.style.cssText = "float:left;opacity:.5";
  s.opacity = /^0.5/.test(Fa.style.opacity);
  s.cssFloat = !!Fa.style.cssFloat;
  ua.style.backgroundClip = "content-box";
  ua.cloneNode(!0).style.backgroundClip = "";
  s.clearCloneStyle = "content-box" ===
    ua.style.backgroundClip;
  Fa = ua = null;
  e.extend(s, {
    reliableHiddenOffsets: function () {
      if (null != bb)return bb;
      var a, d, b;
      d = u.createElement("div");
      var e = u.getElementsByTagName("body")[0];
      if (e)return d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = u.createElement("div"), a.style.cssText = Fb, e.appendChild(a).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = d.getElementsByTagName("td"), d[0].style.cssText = "padding:0;margin:0;border:0;display:none",
        b = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", bb = b && 0 === d[0].offsetHeight, e.removeChild(a), bb
    }, boxSizing: function () {
      null == Gb && Hb();
      return Gb
    }, boxSizingReliable: function () {
      null == Za && Hb();
      return Za
    }, pixelPosition: function () {
      null == $a && Hb();
      return $a
    }, reliableMarginRight: function () {
      var a, d, b, e;
      if (null == ab && c.getComputedStyle) {
        a = u.getElementsByTagName("body")[0];
        if (!a)return;
        d = u.createElement("div");
        b = u.createElement("div");
        d.style.cssText = Fb;
        a.appendChild(d).appendChild(b);
        e =
          b.appendChild(u.createElement("div"));
        e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        e.style.marginRight = e.style.width = "0";
        b.style.width = "1px";
        ab = !parseFloat((c.getComputedStyle(e, null) || {}).marginRight);
        a.removeChild(d)
      }
      return ab
    }
  });
  e.swap = function (a, d, b, e) {
    var c, f = {};
    for (c in d)f[c] = a.style[c], a.style[c] = d[c];
    b = b.apply(a, e || []);
    for (c in d)a.style[c] = f[c];
    return b
  };
  var Ib = /alpha\([^)]*\)/i,
    Gd = /opacity\s*=\s*([^)]*)/, Hd = /^(none|table(?!-c[ea]).+)/, Yc = RegExp("^(" + Va + ")(.*)$", "i"), Id = RegExp("^([+-])=(" + Va + ")", "i"), Jd = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    }, Jc = {letterSpacing: 0, fontWeight: 400}, Zb = ["Webkit", "O", "Moz", "ms"];
  e.extend({
    cssHooks: {
      opacity: {
        get: function (a, d) {
          if (d) {
            var b = ha(a, "opacity");
            return "" === b ? "1" : b
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": s.cssFloat ?
        "cssFloat" : "styleFloat"
    },
    style: function (a, d, b, c) {
      if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
        var f, g, j, k = e.camelCase(d), q = a.style;
        d = e.cssProps[k] || (e.cssProps[k] = Yb(q, k));
        j = e.cssHooks[d] || e.cssHooks[k];
        if (void 0 !== b) {
          g = typeof b;
          if ("string" === g && (f = Id.exec(b)))b = (f[1] + 1) * f[2] + parseFloat(e.css(a, d)), g = "number";
          if (!(null == b || b !== b))if ("number" === g && !e.cssNumber[k] && (b += "px"), !s.clearCloneStyle && ("" === b && 0 === d.indexOf("background")) && (q[d] = "inherit"), !j || !("set"in j) || void 0 !== (b = j.set(a, b, c)))try {
            q[d] =
              "", q[d] = b
          } catch (l) {
          }
        } else return j && "get"in j && void 0 !== (f = j.get(a, !1, c)) ? f : q[d]
      }
    },
    css: function (a, d, b, c) {
      var f, g;
      g = e.camelCase(d);
      d = e.cssProps[g] || (e.cssProps[g] = Yb(a.style, g));
      (g = e.cssHooks[d] || e.cssHooks[g]) && "get"in g && (f = g.get(a, !0, b));
      void 0 === f && (f = ha(a, d, c));
      "normal" === f && d in Jc && (f = Jc[d]);
      return "" === b || b ? (a = parseFloat(f), !0 === b || e.isNumeric(a) ? a || 0 : f) : f
    }
  });
  e.each(["height", "width"], function (a, d) {
    e.cssHooks[d] = {
      get: function (a, b, c) {
        if (b)return 0 === a.offsetWidth && Hd.test(e.css(a, "display")) ?
          e.swap(a, Jd, function () {
            return cc(a, d, c)
          }) : cc(a, d, c)
      }, set: function (a, b, c) {
        var f = c && ga(a);
        return ac(a, b, c ? bc(a, d, c, s.boxSizing() && "border-box" === e.css(a, "boxSizing", !1, f), f) : 0)
      }
    }
  });
  s.opacity || (e.cssHooks.opacity = {
    get: function (a, d) {
      return Gd.test((d && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : d ? "1" : ""
    }, set: function (a, d) {
      var b = a.style, c = a.currentStyle, f = e.isNumeric(d) ? "alpha(opacity=" + 100 * d + ")" : "", g = c && c.filter || b.filter || "";
      b.zoom = 1;
      if ((1 <= d || "" === d) && "" ===
        e.trim(g.replace(Ib, "")) && b.removeAttribute)if (b.removeAttribute("filter"), "" === d || c && !c.filter)return;
      b.filter = Ib.test(g) ? g.replace(Ib, f) : g + " " + f
    }
  });
  e.cssHooks.marginRight = Xb(s.reliableMarginRight, function (a, d) {
    if (d)return e.swap(a, {display: "inline-block"}, ha, [a, "marginRight"])
  });
  e.each({margin: "", padding: "", border: "Width"}, function (a, d) {
    e.cssHooks[a + d] = {
      expand: function (b) {
        var e = 0, c = {};
        for (b = "string" === typeof b ? b.split(" ") : [b]; 4 > e; e++)c[a + fa[e] + d] = b[e] || b[e - 2] || b[0];
        return c
      }
    };
    Ic.test(a) || (e.cssHooks[a +
    d].set = ac)
  });
  e.fn.extend({
    css: function (a, d) {
      return la(this, function (a, d, b) {
        var c, f = {}, g = 0;
        if (e.isArray(d)) {
          b = ga(a);
          for (c = d.length; g < c; g++)f[d[g]] = e.css(a, d[g], !1, b);
          return f
        }
        return void 0 !== b ? e.style(a, d, b) : e.css(a, d)
      }, a, d, 1 < arguments.length)
    }, show: function () {
      return $b(this, !0)
    }, hide: function () {
      return $b(this)
    }, toggle: function (a) {
      return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () {
        ya(this) ? e(this).show() : e(this).hide()
      })
    }
  });
  e.Tween = E;
  E.prototype = {
    constructor: E, init: function (a,
                                    d, b, c, f, g) {
      this.elem = a;
      this.prop = b;
      this.easing = f || "swing";
      this.options = d;
      this.start = this.now = this.cur();
      this.end = c;
      this.unit = g || (e.cssNumber[b] ? "" : "px")
    }, cur: function () {
      var a = E.propHooks[this.prop];
      return a && a.get ? a.get(this) : E.propHooks._default.get(this)
    }, run: function (a) {
      var d, b = E.propHooks[this.prop];
      this.pos = this.options.duration ? d = e.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : d = a;
      this.now = (this.end - this.start) * d + this.start;
      this.options.step && this.options.step.call(this.elem,
        this.now, this);
      b && b.set ? b.set(this) : E.propHooks._default.set(this);
      return this
    }
  };
  E.prototype.init.prototype = E.prototype;
  E.propHooks = {
    _default: {
      get: function (a) {
        if (null != a.elem[a.prop] && (!a.elem.style || null == a.elem.style[a.prop]))return a.elem[a.prop];
        a = e.css(a.elem, a.prop, "");
        return !a || "auto" === a ? 0 : a
      }, set: function (a) {
        if (e.fx.step[a.prop])e.fx.step[a.prop](a); else a.elem.style && (null != a.elem.style[e.cssProps[a.prop]] || e.cssHooks[a.prop]) ? e.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  };
  E.propHooks.scrollTop =
    E.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
    };
  e.easing = {
    linear: function (a) {
      return a
    }, swing: function (a) {
      return 0.5 - Math.cos(a * Math.PI) / 2
    }
  };
  e.fx = E.prototype.init;
  e.fx.step = {};
  var oa, cb, Kd = /^(?:toggle|show|hide)$/, Kc = RegExp("^(?:([+-])=|)(" + Va + ")([a-z%]*)$", "i"), Ld = /queueHooks$/, Ja = [function (a, d, b) {
    var c, f, g, j, k, q, l = this, t = {}, n = a.style, m = a.nodeType && ya(a), p = e._data(a, "fxshow");
    b.queue || (j = e._queueHooks(a, "fx"), null == j.unqueued && (j.unqueued = 0, k = j.empty.fire,
      j.empty.fire = function () {
        j.unqueued || k()
      }), j.unqueued++, l.always(function () {
      l.always(function () {
        j.unqueued--;
        e.queue(a, "fx").length || j.empty.fire()
      })
    }));
    if (1 === a.nodeType && ("height"in d || "width"in d))b.overflow = [n.overflow, n.overflowX, n.overflowY], f = e.css(a, "display"), q = Vb(a.nodeName), "none" === f && (f = q), "inline" === f && "none" === e.css(a, "float") && (!s.inlineBlockNeedsLayout || "inline" === q ? n.display = "inline-block" : n.zoom = 1);
    b.overflow && (n.overflow = "hidden", s.shrinkWrapBlocks() || l.always(function () {
      n.overflow =
        b.overflow[0];
      n.overflowX = b.overflow[1];
      n.overflowY = b.overflow[2]
    }));
    for (c in d)if (f = d[c], Kd.exec(f)) {
      delete d[c];
      g = g || "toggle" === f;
      if (f === (m ? "hide" : "show"))if ("show" === f && p && void 0 !== p[c])m = !0; else continue;
      t[c] = p && p[c] || e.style(a, c)
    }
    if (!e.isEmptyObject(t))for (c in p ? "hidden"in p && (m = p.hidden) : p = e._data(a, "fxshow", {}), g && (p.hidden = !m), m ? e(a).show() : l.done(function () {
      e(a).hide()
    }), l.done(function () {
      var d;
      e._removeData(a, "fxshow");
      for (d in t)e.style(a, d, t[d])
    }), t)d = ec(m ? p[c] : 0, c, l), c in p || (p[c] = d.start,
    m && (d.end = d.start, d.start = "width" === c || "height" === c ? 1 : 0))
  }], za = {
    "*": [function (a, d) {
      var b = this.createTween(a, d), c = b.cur(), f = Kc.exec(d), g = f && f[3] || (e.cssNumber[a] ? "" : "px"), j = (e.cssNumber[a] || "px" !== g && +c) && Kc.exec(e.css(b.elem, a)), k = 1, q = 20;
      if (j && j[3] !== g) {
        g = g || j[3];
        f = f || [];
        j = +c || 1;
        do k = k || ".5", j /= k, e.style(b.elem, a, j + g); while (k !== (k = b.cur() / c) && 1 !== k && --q)
      }
      f && (j = b.start = +j || +c || 0, b.unit = g, b.end = f[1] ? j + (f[1] + 1) * f[2] : +f[2]);
      return b
    }]
  };
  e.Animation = e.extend(fc, {
    tweener: function (a, d) {
      e.isFunction(a) ? (d =
        a, a = ["*"]) : a = a.split(" ");
      for (var b, c = 0, f = a.length; c < f; c++)b = a[c], za[b] = za[b] || [], za[b].unshift(d)
    }, prefilter: function (a, d) {
      d ? Ja.unshift(a) : Ja.push(a)
    }
  });
  e.speed = function (a, d, b) {
    var c = a && "object" === typeof a ? e.extend({}, a) : {
      complete: b || !b && d || e.isFunction(a) && a,
      duration: a,
      easing: b && d || d && !e.isFunction(d) && d
    };
    c.duration = e.fx.off ? 0 : "number" === typeof c.duration ? c.duration : c.duration in e.fx.speeds ? e.fx.speeds[c.duration] : e.fx.speeds._default;
    if (null == c.queue || !0 === c.queue)c.queue = "fx";
    c.old = c.complete;
    c.complete = function () {
      e.isFunction(c.old) && c.old.call(this);
      c.queue && e.dequeue(this, c.queue)
    };
    return c
  };
  e.fn.extend({
    fadeTo: function (a, d, b, e) {
      return this.filter(ya).css("opacity", 0).show().end().animate({opacity: d}, a, b, e)
    }, animate: function (a, d, b, c) {
      var f = e.isEmptyObject(a), g = e.speed(d, b, c);
      d = function () {
        var d = fc(this, e.extend({}, a), g);
        (f || e._data(this, "finish")) && d.stop(!0)
      };
      d.finish = d;
      return f || !1 === g.queue ? this.each(d) : this.queue(g.queue, d)
    }, stop: function (a, d, b) {
      var c = function (a) {
        var d = a.stop;
        delete a.stop;
        d(b)
      };
      "string" !== typeof a && (b = d, d = a, a = void 0);
      d && !1 !== a && this.queue(a || "fx", []);
      return this.each(function () {
        var d = !0, f = null != a && a + "queueHooks", g = e.timers, j = e._data(this);
        if (f)j[f] && j[f].stop && c(j[f]); else for (f in j)j[f] && (j[f].stop && Ld.test(f)) && c(j[f]);
        for (f = g.length; f--;)if (g[f].elem === this && (null == a || g[f].queue === a))g[f].anim.stop(b), d = !1, g.splice(f, 1);
        (d || !b) && e.dequeue(this, a)
      })
    }, finish: function (a) {
      !1 !== a && (a = a || "fx");
      return this.each(function () {
        var d, b = e._data(this), c = b[a + "queue"];
        d = b[a + "queueHooks"];
        var f = e.timers, g = c ? c.length : 0;
        b.finish = !0;
        e.queue(this, a, []);
        d && d.stop && d.stop.call(this, !0);
        for (d = f.length; d--;)f[d].elem === this && f[d].queue === a && (f[d].anim.stop(!0), f.splice(d, 1));
        for (d = 0; d < g; d++)c[d] && c[d].finish && c[d].finish.call(this);
        delete b.finish
      })
    }
  });
  e.each(["toggle", "show", "hide"], function (a, d) {
    var b = e.fn[d];
    e.fn[d] = function (a, c, e) {
      return null == a || "boolean" === typeof a ? b.apply(this, arguments) : this.animate(Ia(d, !0), a, c, e)
    }
  });
  e.each({
    slideDown: Ia("show"), slideUp: Ia("hide"), slideToggle: Ia("toggle"),
    fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}
  }, function (a, d) {
    e.fn[a] = function (a, b, c) {
      return this.animate(d, a, b, c)
    }
  });
  e.timers = [];
  e.fx.tick = function () {
    var a, d = e.timers, b = 0;
    for (oa = e.now(); b < d.length; b++)a = d[b], !a() && d[b] === a && d.splice(b--, 1);
    d.length || e.fx.stop();
    oa = void 0
  };
  e.fx.timer = function (a) {
    e.timers.push(a);
    a() ? e.fx.start() : e.timers.pop()
  };
  e.fx.interval = 13;
  e.fx.start = function () {
    cb || (cb = setInterval(e.fx.tick, e.fx.interval))
  };
  e.fx.stop = function () {
    clearInterval(cb);
    cb = null
  };
  e.fx.speeds = {slow: 600, fast: 200, _default: 400};
  e.fn.delay = function (a, d) {
    a = e.fx ? e.fx.speeds[a] || a : a;
    return this.queue(d || "fx", function (d, b) {
      var c = setTimeout(d, a);
      b.stop = function () {
        clearTimeout(c)
      }
    })
  };
  var db, ca, Jb, Kb, Ga = u.createElement("div");
  Ga.setAttribute("className", "t");
  Ga.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
  db = Ga.getElementsByTagName("a")[0];
  Jb = u.createElement("select");
  Kb = Jb.appendChild(u.createElement("option"));
  ca = Ga.getElementsByTagName("input")[0];
  db.style.cssText = "top:1px";
  s.getSetAttribute = "t" !== Ga.className;
  s.style = /top/.test(db.getAttribute("style"));
  s.hrefNormalized = "/a" === db.getAttribute("href");
  s.checkOn = !!ca.value;
  s.optSelected = Kb.selected;
  s.enctype = !!u.createElement("form").enctype;
  Jb.disabled = !0;
  s.optDisabled = !Kb.disabled;
  ca = u.createElement("input");
  ca.setAttribute("value", "");
  s.input = "" === ca.getAttribute("value");
  ca.value = "t";
  ca.setAttribute("type", "radio");
  s.radioValue = "t" === ca.value;
  var Md = /\r/g;
  e.fn.extend({
    val: function (a) {
      var d,
        b, c, f = this[0];
      if (arguments.length)return c = e.isFunction(a), this.each(function (b) {
        if (1 === this.nodeType && (b = c ? a.call(this, b, e(this).val()) : a, null == b ? b = "" : "number" === typeof b ? b += "" : e.isArray(b) && (b = e.map(b, function (a) {
            return null == a ? "" : a + ""
          })), d = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !d || !("set"in d) || void 0 === d.set(this, b, "value")))this.value = b
      });
      if (f) {
        if ((d = e.valHooks[f.type] || e.valHooks[f.nodeName.toLowerCase()]) && "get"in d && void 0 !== (b = d.get(f, "value")))return b;
        b = f.value;
        return "string" === typeof b ? b.replace(Md, "") : null == b ? "" : b
      }
    }
  });
  e.extend({
    valHooks: {
      option: {
        get: function (a) {
          var d = e.find.attr(a, "value");
          return null != d ? d : e.text(a)
        }
      }, select: {
        get: function (a) {
          for (var d, b = a.options, c = a.selectedIndex, f = (a = "select-one" === a.type || 0 > c) ? null : [], g = a ? c + 1 : b.length, j = 0 > c ? g : a ? c : 0; j < g; j++)if (d = b[j], (d.selected || j === c) && (s.optDisabled ? !d.disabled : null === d.getAttribute("disabled")) && (!d.parentNode.disabled || !e.nodeName(d.parentNode, "optgroup"))) {
            d = e(d).val();
            if (a)return d;
            f.push(d)
          }
          return f
        },
        set: function (a, d) {
          for (var b, c, f = a.options, g = e.makeArray(d), j = f.length; j--;)if (c = f[j], 0 <= e.inArray(e.valHooks.option.get(c), g))try {
            c.selected = b = !0
          } catch (k) {
            c.scrollHeight
          } else c.selected = !1;
          b || (a.selectedIndex = -1);
          return f
        }
      }
    }
  });
  e.each(["radio", "checkbox"], function () {
    e.valHooks[this] = {
      set: function (a, d) {
        if (e.isArray(d))return a.checked = 0 <= e.inArray(e(a).val(), d)
      }
    };
    s.checkOn || (e.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var va, Lc, da = e.expr.attrHandle, Lb = /^(?:checked|selected)$/i,
    ma = s.getSetAttribute, eb = s.input;
  e.fn.extend({
    attr: function (a, d) {
      return la(this, e.attr, a, d, 1 < arguments.length)
    }, removeAttr: function (a) {
      return this.each(function () {
        e.removeAttr(this, a)
      })
    }
  });
  e.extend({
    attr: function (a, d, b) {
      var c, f, g = a.nodeType;
      if (a && !(3 === g || 8 === g || 2 === g)) {
        if (typeof a.getAttribute === M)return e.prop(a, d, b);
        if (1 !== g || !e.isXMLDoc(a))d = d.toLowerCase(), c = e.attrHooks[d] || (e.expr.match.bool.test(d) ? Lc : va);
        if (void 0 !== b)if (null === b)e.removeAttr(a, d); else {
          if (c && "set"in c && void 0 !== (f = c.set(a,
              b, d)))return f;
          a.setAttribute(d, b + "");
          return b
        } else {
          if (c && "get"in c && null !== (f = c.get(a, d)))return f;
          f = e.find.attr(a, d);
          return null == f ? void 0 : f
        }
      }
    }, removeAttr: function (a, d) {
      var b, c, f = 0, g = d && d.match(T);
      if (g && 1 === a.nodeType)for (; b = g[f++];)c = e.propFix[b] || b, e.expr.match.bool.test(b) ? eb && ma || !Lb.test(b) ? a[c] = !1 : a[e.camelCase("default-" + b)] = a[c] = !1 : e.attr(a, b, ""), a.removeAttribute(ma ? b : c)
    }, attrHooks: {
      type: {
        set: function (a, d) {
          if (!s.radioValue && "radio" === d && e.nodeName(a, "input")) {
            var b = a.value;
            a.setAttribute("type",
              d);
            b && (a.value = b);
            return d
          }
        }
      }
    }
  });
  Lc = {
    set: function (a, d, b) {
      !1 === d ? e.removeAttr(a, b) : eb && ma || !Lb.test(b) ? a.setAttribute(!ma && e.propFix[b] || b, b) : a[e.camelCase("default-" + b)] = a[b] = !0;
      return b
    }
  };
  e.each(e.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = da[b] || e.find.attr;
    da[b] = eb && ma || !Lb.test(b) ? function (a, b, d) {
      var e, f;
      d || (f = da[b], da[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, da[b] = f);
      return e
    } : function (a, b, d) {
      if (!d)return a[e.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  });
  if (!eb || !ma)e.attrHooks.value =
  {
    set: function (a, b, c) {
      if (e.nodeName(a, "input"))a.defaultValue = b; else return va && va.set(a, b, c)
    }
  };
  ma || (va = {
    set: function (a, b, c) {
      var e = a.getAttributeNode(c);
      e || a.setAttributeNode(e = a.ownerDocument.createAttribute(c));
      e.value = b += "";
      if ("value" === c || b === a.getAttribute(c))return b
    }
  }, da.id = da.name = da.coords = function (a, b, c) {
    var e;
    if (!c)return (e = a.getAttributeNode(b)) && "" !== e.value ? e.value : null
  }, e.valHooks.button = {
    get: function (a, b) {
      var c = a.getAttributeNode(b);
      if (c && c.specified)return c.value
    }, set: va.set
  }, e.attrHooks.contenteditable =
  {
    set: function (a, b, c) {
      va.set(a, "" === b ? !1 : b, c)
    }
  }, e.each(["width", "height"], function (a, b) {
    e.attrHooks[b] = {
      set: function (a, c) {
        if ("" === c)return a.setAttribute(b, "auto"), c
      }
    }
  }));
  s.style || (e.attrHooks.style = {
    get: function (a) {
      return a.style.cssText || void 0
    }, set: function (a, b) {
      return a.style.cssText = b + ""
    }
  });
  var Nd = /^(?:input|select|textarea|button|object)$/i, Od = /^(?:a|area)$/i;
  e.fn.extend({
    prop: function (a, b) {
      return la(this, e.prop, a, b, 1 < arguments.length)
    }, removeProp: function (a) {
      a = e.propFix[a] || a;
      return this.each(function () {
        try {
          this[a] = void 0, delete this[a]
        } catch (b) {
        }
      })
    }
  });
  e.extend({
    propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
      var f, g, j;
      j = a.nodeType;
      if (a && !(3 === j || 8 === j || 2 === j)) {
        if (j = 1 !== j || !e.isXMLDoc(a))b = e.propFix[b] || b, g = e.propHooks[b];
        return void 0 !== c ? g && "set"in g && void 0 !== (f = g.set(a, c, b)) ? f : a[b] = c : g && "get"in g && null !== (f = g.get(a, b)) ? f : a[b]
      }
    }, propHooks: {
      tabIndex: {
        get: function (a) {
          var b = e.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : Nd.test(a.nodeName) || Od.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }
  });
  s.hrefNormalized ||
  e.each(["href", "src"], function (a, b) {
    e.propHooks[b] = {
      get: function (a) {
        return a.getAttribute(b, 4)
      }
    }
  });
  s.optSelected || (e.propHooks.selected = {
    get: function (a) {
      if (a = a.parentNode)a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
      return null
    }
  });
  e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
    e.propFix[this.toLowerCase()] = this
  });
  s.enctype || (e.propFix.enctype = "encoding");
  var Mb = /[\t\r\n\f]/g;
  e.fn.extend({
    addClass: function (a) {
      var b,
        c, f, g, j, k = 0, q = this.length;
      b = "string" === typeof a && a;
      if (e.isFunction(a))return this.each(function (b) {
        e(this).addClass(a.call(this, b, this.className))
      });
      if (b)for (b = (a || "").match(T) || []; k < q; k++)if (c = this[k], f = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Mb, " ") : " ")) {
        for (j = 0; g = b[j++];)0 > f.indexOf(" " + g + " ") && (f += g + " ");
        f = e.trim(f);
        c.className !== f && (c.className = f)
      }
      return this
    }, removeClass: function (a) {
      var b, c, f, g, j, k = 0, q = this.length;
      b = 0 === arguments.length || "string" === typeof a && a;
      if (e.isFunction(a))return this.each(function (b) {
        e(this).removeClass(a.call(this,
          b, this.className))
      });
      if (b)for (b = (a || "").match(T) || []; k < q; k++)if (c = this[k], f = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Mb, " ") : "")) {
        for (j = 0; g = b[j++];)for (; 0 <= f.indexOf(" " + g + " ");)f = f.replace(" " + g + " ", " ");
        f = a ? e.trim(f) : "";
        c.className !== f && (c.className = f)
      }
      return this
    }, toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : e.isFunction(a) ? this.each(function (c) {
        e(this).toggleClass(a.call(this, c, this.className, b), b)
      }) :
        this.each(function () {
          if ("string" === c)for (var b, d = 0, f = e(this), g = a.match(T) || []; b = g[d++];)f.hasClass(b) ? f.removeClass(b) : f.addClass(b); else if (c === M || "boolean" === c)this.className && e._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : e._data(this, "__className__") || ""
        })
    }, hasClass: function (a) {
      a = " " + a + " ";
      for (var b = 0, c = this.length; b < c; b++)if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Mb, " ").indexOf(a))return !0;
      return !1
    }
  });
  e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function (a, b) {
      e.fn[b] = function (a, c) {
        return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
      }
    });
  e.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }, bind: function (a, b, c) {
      return this.on(a, null, b, c)
    }, unbind: function (a, b) {
      return this.off(a, null, b)
    }, delegate: function (a, b, c, e) {
      return this.on(b, a, c, e)
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var Nb = e.now(), Ob = /\?/, Pd = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  e.parseJSON = function (a) {
    if (c.JSON && c.JSON.parse)return c.JSON.parse(a + "");
    var b, f = null, g = e.trim(a + "");
    return g && !e.trim(g.replace(Pd, function (a, c, e, g) {
      b && c && (f = 0);
      if (0 === f)return a;
      b = e || c;
      f += !g - !e;
      return ""
    })) ? Function("return " + g)() : e.error("Invalid JSON: " + a)
  };
  e.parseXML = function (a) {
    var b, f;
    if (!a || "string" !== typeof a)return null;
    try {
      c.DOMParser ? (f = new DOMParser, b = f.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
    } catch (g) {
      b = void 0
    }
    (!b || !b.documentElement ||
    b.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + a);
    return b
  };
  var na, ea, Qd = /#.*$/, Mc = /([?&])_=[^&]*/, Rd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Sd = /^(?:GET|HEAD)$/, Td = /^\/\//, Nc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Oc = {}, jb = {}, Pc = "*/".concat("*");
  try {
    ea = location.href
  } catch (ce) {
    ea = u.createElement("a"), ea.href = "", ea = ea.href
  }
  na = Nc.exec(ea.toLowerCase()) || [];
  e.extend({
    active: 0, lastModified: {}, etag: {}, ajaxSettings: {
      url: ea,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(na[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Pc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": e.parseJSON, "text xml": e.parseXML},
      flatOptions: {url: !0, context: !0}
    }, ajaxSetup: function (a, b) {
      return b ? kb(kb(a,
        e.ajaxSettings), b) : kb(e.ajaxSettings, a)
    }, ajaxPrefilter: gc(Oc), ajaxTransport: gc(jb), ajax: function (a, b) {
      function c(a, b, d, f) {
        var g, h, n, r;
        r = b;
        if (2 !== C) {
          C = 2;
          q && clearTimeout(q);
          t = void 0;
          k = f || "";
          z.readyState = 0 < a ? 4 : 0;
          f = 200 <= a && 300 > a || 304 === a;
          if (d) {
            n = m;
            for (var G = z, K, w, x, v, A = n.contents, N = n.dataTypes; "*" === N[0];)N.shift(), void 0 === w && (w = n.mimeType || G.getResponseHeader("Content-Type"));
            if (w)for (v in A)if (A[v] && A[v].test(w)) {
              N.unshift(v);
              break
            }
            if (N[0]in d)x = N[0]; else {
              for (v in d) {
                if (!N[0] || n.converters[v + " " + N[0]]) {
                  x =
                    v;
                  break
                }
                K || (K = v)
              }
              x = x || K
            }
            x ? (x !== N[0] && N.unshift(x), n = d[x]) : n = void 0
          }
          a:{
            d = m;
            K = n;
            w = z;
            x = f;
            var F, B, E, G = {}, A = d.dataTypes.slice();
            if (A[1])for (B in d.converters)G[B.toLowerCase()] = d.converters[B];
            for (v = A.shift(); v;)if (d.responseFields[v] && (w[d.responseFields[v]] = K), !E && (x && d.dataFilter) && (K = d.dataFilter(K, d.dataType)), E = v, v = A.shift())if ("*" === v)v = E; else if ("*" !== E && E !== v) {
              B = G[E + " " + v] || G["* " + v];
              if (!B)for (F in G)if (n = F.split(" "), n[1] === v && (B = G[E + " " + n[0]] || G["* " + n[0]])) {
                !0 === B ? B = G[F] : !0 !== G[F] && (v = n[0],
                  A.unshift(n[1]));
                break
              }
              if (!0 !== B)if (B && d["throws"])K = B(K); else try {
                K = B(K)
              } catch (H) {
                n = {state: "parsererror", error: B ? H : "No conversion from " + E + " to " + v};
                break a
              }
            }
            n = {state: "success", data: K}
          }
          if (f)m.ifModified && ((r = z.getResponseHeader("Last-Modified")) && (e.lastModified[j] = r), (r = z.getResponseHeader("etag")) && (e.etag[j] = r)), 204 === a || "HEAD" === m.type ? r = "nocontent" : 304 === a ? r = "notmodified" : (r = n.state, g = n.data, h = n.error, f = !h); else if (h = r, a || !r)r = "error", 0 > a && (a = 0);
          z.status = a;
          z.statusText = (b || r) + "";
          f ? s.resolveWith(p,
            [g, r, z]) : s.rejectWith(p, [z, r, h]);
          z.statusCode(y);
          y = void 0;
          l && D.trigger(f ? "ajaxSuccess" : "ajaxError", [z, m, f ? g : h]);
          u.fireWith(p, [z, r]);
          l && (D.trigger("ajaxComplete", [z, m]), --e.active || e.event.trigger("ajaxStop"))
        }
      }

      "object" === typeof a && (b = a, a = void 0);
      b = b || {};
      var f, g, j, k, q, l, t, n, m = e.ajaxSetup({}, b), p = m.context || m, D = m.context && (p.nodeType || p.jquery) ? e(p) : e.event, s = e.Deferred(), u = e.Callbacks("once memory"), y = m.statusCode || {}, G = {}, w = {}, C = 0, x = "canceled", z = {
        readyState: 0, getResponseHeader: function (a) {
          var b;
          if (2 ===
            C) {
            if (!n)for (n = {}; b = Rd.exec(k);)n[b[1].toLowerCase()] = b[2];
            b = n[a.toLowerCase()]
          }
          return null == b ? null : b
        }, getAllResponseHeaders: function () {
          return 2 === C ? k : null
        }, setRequestHeader: function (a, b) {
          var d = a.toLowerCase();
          C || (a = w[d] = w[d] || a, G[a] = b);
          return this
        }, overrideMimeType: function (a) {
          C || (m.mimeType = a);
          return this
        }, statusCode: function (a) {
          var b;
          if (a)if (2 > C)for (b in a)y[b] = [y[b], a[b]]; else z.always(a[z.status]);
          return this
        }, abort: function (a) {
          a = a || x;
          t && t.abort(a);
          c(0, a);
          return this
        }
      };
      s.promise(z).complete =
        u.add;
      z.success = z.done;
      z.error = z.fail;
      m.url = ((a || m.url || ea) + "").replace(Qd, "").replace(Td, na[1] + "//");
      m.type = b.method || b.type || m.method || m.type;
      m.dataTypes = e.trim(m.dataType || "*").toLowerCase().match(T) || [""];
      null == m.crossDomain && (f = Nc.exec(m.url.toLowerCase()), m.crossDomain = !(!f || !(f[1] !== na[1] || f[2] !== na[2] || (f[3] || ("http:" === f[1] ? "80" : "443")) !== (na[3] || ("http:" === na[1] ? "80" : "443")))));
      m.data && (m.processData && "string" !== typeof m.data) && (m.data = e.param(m.data, m.traditional));
      hc(Oc, m, b, z);
      if (2 ===
        C)return z;
      (l = m.global) && 0 === e.active++ && e.event.trigger("ajaxStart");
      m.type = m.type.toUpperCase();
      m.hasContent = !Sd.test(m.type);
      j = m.url;
      m.hasContent || (m.data && (j = m.url += (Ob.test(j) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Mc.test(j) ? j.replace(Mc, "$1_=" + Nb++) : j + (Ob.test(j) ? "&" : "?") + "_=" + Nb++));
      m.ifModified && (e.lastModified[j] && z.setRequestHeader("If-Modified-Since", e.lastModified[j]), e.etag[j] && z.setRequestHeader("If-None-Match", e.etag[j]));
      (m.data && m.hasContent && !1 !== m.contentType || b.contentType) &&
      z.setRequestHeader("Content-Type", m.contentType);
      z.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Pc + "; q=0.01" : "") : m.accepts["*"]);
      for (g in m.headers)z.setRequestHeader(g, m.headers[g]);
      if (m.beforeSend && (!1 === m.beforeSend.call(p, z, m) || 2 === C))return z.abort();
      x = "abort";
      for (g in{success: 1, error: 1, complete: 1})z[g](m[g]);
      if (t = hc(jb, m, b, z)) {
        z.readyState = 1;
        l && D.trigger("ajaxSend", [z, m]);
        m.async && 0 < m.timeout && (q = setTimeout(function () {
            z.abort("timeout")
          },
          m.timeout));
        try {
          C = 1, t.send(G, c)
        } catch (v) {
          if (2 > C)c(-1, v); else throw v;
        }
      } else c(-1, "No Transport");
      return z
    }, getJSON: function (a, b, c) {
      return e.get(a, b, c, "json")
    }, getScript: function (a, b) {
      return e.get(a, void 0, b, "script")
    }
  });
  e.each(["get", "post"], function (a, b) {
    e[b] = function (a, c, f, g) {
      e.isFunction(c) && (g = g || f, f = c, c = void 0);
      return e.ajax({url: a, type: b, dataType: g, data: c, success: f})
    }
  });
  e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
    e.fn[b] = function (a) {
      return this.on(b,
        a)
    }
  });
  e._evalUrl = function (a) {
    return e.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
  };
  e.fn.extend({
    wrapAll: function (a) {
      if (e.isFunction(a))return this.each(function (b) {
        e(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = e(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]);
        b.map(function () {
          for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    }, wrapInner: function (a) {
      return e.isFunction(a) ?
        this.each(function (b) {
          e(this).wrapInner(a.call(this, b))
        }) : this.each(function () {
        var b = e(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    }, wrap: function (a) {
      var b = e.isFunction(a);
      return this.each(function (c) {
        e(this).wrapAll(b ? a.call(this, c) : a)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  e.expr.filters.hidden = function (a) {
    return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !s.reliableHiddenOffsets() && "none" === (a.style &&
      a.style.display || e.css(a, "display"))
  };
  e.expr.filters.visible = function (a) {
    return !e.expr.filters.hidden(a)
  };
  var Ud = /%20/g, $c = /\[\]$/, Qc = /\r?\n/g, Vd = /^(?:submit|button|image|reset|file)$/i, Wd = /^(?:input|select|textarea|keygen)/i;
  e.param = function (a, b) {
    var c, f = [], g = function (a, b) {
      b = e.isFunction(b) ? b() : null == b ? "" : b;
      f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
    };
    void 0 === b && (b = e.ajaxSettings && e.ajaxSettings.traditional);
    if (e.isArray(a) || a.jquery && !e.isPlainObject(a))e.each(a, function () {
      g(this.name,
        this.value)
    }); else for (c in a)lb(c, a[c], b, g);
    return f.join("&").replace(Ud, "+")
  };
  e.fn.extend({
    serialize: function () {
      return e.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var a = e.prop(this, "elements");
        return a ? e.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !e(this).is(":disabled") && Wd.test(this.nodeName) && !Vd.test(a) && (this.checked || !hb.test(a))
      }).map(function (a, b) {
        var c = e(this).val();
        return null == c ? null : e.isArray(c) ? e.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(Qc, "\r\n")
          }
        }) : {name: b.name, value: c.replace(Qc, "\r\n")}
      }).get()
    }
  });
  e.ajaxSettings.xhr = void 0 !== c.ActiveXObject ? function () {
    var a;
    if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && ic()))a:{
      try {
        a = new c.ActiveXObject("Microsoft.XMLHTTP");
        break a
      } catch (b) {
      }
      a = void 0
    }
    return a
  } : ic;
  e.ajaxSettings.xhr = void 0 === c.ActiveXObject ? mb : function () {
    return (this.url == u.location || 0 == this.url.indexOf("http") || !this.isLocal) && /^(get|post|head|put|delete|options)$/i.test(this.type) &&
      mb() || mb(1)
  };
  var Xd = 0, fb = {}, gb = e.ajaxSettings.xhr();
  if (c.ActiveXObject)e(c).on("unload", function () {
    for (var a in fb)fb[a](void 0, !0)
  });
  s.cors = !!gb && "withCredentials"in gb;
  (gb = s.ajax = !!gb) && e.ajaxTransport(function (a) {
    if (!a.crossDomain || s.cors) {
      var b;
      return {
        send: function (c, f) {
          var g, j = a.xhr(), k = ++Xd;
          j.open(a.type, a.url, a.async, a.username, a.password);
          if (a.xhrFields)for (g in a.xhrFields)j[g] = a.xhrFields[g];
          a.mimeType && j.overrideMimeType && j.overrideMimeType(a.mimeType);
          !a.crossDomain && !c["X-Requested-With"] &&
          (c["X-Requested-With"] = "XMLHttpRequest");
          for (g in c)void 0 !== c[g] && j.setRequestHeader(g, c[g] + "");
          j.send(a.hasContent && a.data || null);
          b = function (c, g) {
            var h, q, l;
            if (b && (g || 4 === j.readyState))if (delete fb[k], b = void 0, j.onreadystatechange = e.noop, g)4 !== j.readyState && j.abort(); else {
              l = {};
              h = j.status;
              "string" === typeof j.responseText && (l.text = j.responseText);
              try {
                q = j.statusText
              } catch (m) {
                q = ""
              }
              !h && a.isLocal && !a.crossDomain ? h = l.text ? 200 : 404 : 1223 === h && (h = 204)
            }
            l && f(h, q, l, j.getAllResponseHeaders())
          };
          a.async ? 4 === j.readyState ?
            setTimeout(b) : j.onreadystatechange = fb[k] = b : b()
        }, abort: function () {
          b && b(void 0, !0)
        }
      }
    }
  });
  e.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function (a) {
        e.globalEval(a);
        return a
      }
    }
  });
  e.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1);
    a.crossDomain && (a.type = "GET", a.global = !1)
  });
  e.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c = u.head || e("head")[0] ||
        u.documentElement;
      return {
        send: function (e, f) {
          b = u.createElement("script");
          b.async = !0;
          a.scriptCharset && (b.charset = a.scriptCharset);
          b.src = a.url;
          b.onload = b.onreadystatechange = function (a, c) {
            if (c || !b.readyState || /loaded|complete/.test(b.readyState))b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success")
          };
          c.insertBefore(b, c.firstChild)
        }, abort: function () {
          if (b)b.onload(void 0, !0)
        }
      }
    }
  });
  var Rc = [], Pb = /(=)\?(?=&|$)|\?\?/;
  e.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var a =
        Rc.pop() || e.expando + "_" + Nb++;
      this[a] = !0;
      return a
    }
  });
  e.ajaxPrefilter("json jsonp", function (a, b, f) {
    var g, j, k, q = !1 !== a.jsonp && (Pb.test(a.url) ? "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Pb.test(a.data) && "data");
    if (q || "jsonp" === a.dataTypes[0])return g = a.jsonpCallback = e.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, q ? a[q] = a[q].replace(Pb, "$1" + g) : !1 !== a.jsonp && (a.url += (Ob.test(a.url) ? "&" : "?") + a.jsonp + "=" + g), a.converters["script json"] =
      function () {
        k || e.error(g + " was not called");
        return k[0]
      }, a.dataTypes[0] = "json", j = c[g], c[g] = function () {
      k = arguments
    }, f.always(function () {
      c[g] = j;
      a[g] && (a.jsonpCallback = b.jsonpCallback, Rc.push(g));
      k && e.isFunction(j) && j(k[0]);
      k = j = void 0
    }), "script"
  });
  e.parseHTML = function (a, b, c) {
    if (!a || "string" !== typeof a)return null;
    "boolean" === typeof b && (c = b, b = !1);
    b = b || u;
    var f = xc.exec(a);
    c = !c && [];
    if (f)return [b.createElement(f[1])];
    f = e.buildFragment([a], b, c);
    c && c.length && e(c).remove();
    return e.merge([], f.childNodes)
  };
  var Sc =
    e.fn.load;
  e.fn.load = function (a, b, c) {
    if ("string" !== typeof a && Sc)return Sc.apply(this, arguments);
    var f, g, j, k = this, q = a.indexOf(" ");
    0 <= q && (f = a.slice(q, a.length), a = a.slice(0, q));
    e.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (j = "POST");
    0 < k.length && e.ajax({url: a, type: j, dataType: "html", data: b}).done(function (a) {
      g = arguments;
      k.html(f ? e("<div>").append(e.parseHTML(a)).find(f) : a)
    }).complete(c && function (a, b) {
        k.each(c, g || [a.responseText, b, a])
      });
    return this
  };
  e.expr.filters.animated = function (a) {
    return e.grep(e.timers,
      function (b) {
        return a === b.elem
      }).length
  };
  var Tc = c.document.documentElement;
  e.offset = {
    setOffset: function (a, b, c) {
      var f, g, j, k = e.css(a, "position"), q = e(a), l = {};
      "static" === k && (a.style.position = "relative");
      j = q.offset();
      g = e.css(a, "top");
      f = e.css(a, "left");
      ("absolute" === k || "fixed" === k) && -1 < e.inArray("auto", [g, f]) ? (f = q.position(), g = f.top, f = f.left) : (g = parseFloat(g) || 0, f = parseFloat(f) || 0);
      e.isFunction(b) && (b = b.call(a, c, j));
      null != b.top && (l.top = b.top - j.top + g);
      null != b.left && (l.left = b.left - j.left + f);
      "using"in b ? b.using.call(a,
        l) : q.css(l)
    }
  };
  e.fn.extend({
    offset: function (a) {
      if (arguments.length)return void 0 === a ? this : this.each(function (b) {
        e.offset.setOffset(this, a, b)
      });
      var b, c, f = {top: 0, left: 0}, g = (c = this[0]) && c.ownerDocument;
      if (g) {
        b = g.documentElement;
        if (!e.contains(b, c))return f;
        typeof c.getBoundingClientRect !== M && (f = c.getBoundingClientRect());
        c = jc(g);
        return {
          top: f.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
          left: f.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        }
      }
    }, position: function () {
      if (this[0]) {
        var a, b, c = {
          top: 0,
          left: 0
        }, f = this[0];
        "fixed" === e.css(f, "position") ? b = f.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), e.nodeName(a[0], "html") || (c = a.offset()), c.top += e.css(a[0], "borderTopWidth", !0), c.left += e.css(a[0], "borderLeftWidth", !0));
        return {top: b.top - c.top - e.css(f, "marginTop", !0), left: b.left - c.left - e.css(f, "marginLeft", !0)}
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var a = this.offsetParent || Tc; a && !e.nodeName(a, "html") && "static" === e.css(a, "position");)a = a.offsetParent;
        return a || Tc
      })
    }
  });
  e.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
    var c = /Y/.test(b);
    e.fn[a] = function (f) {
      return la(this, function (a, f, g) {
        var j = jc(a);
        if (void 0 === g)return j ? b in j ? j[b] : j.document.documentElement[f] : a[f];
        j ? j.scrollTo(!c ? g : e(j).scrollLeft(), c ? g : e(j).scrollTop()) : a[f] = g
      }, a, f, arguments.length, null)
    }
  });
  e.each(["top", "left"], function (a, b) {
    e.cssHooks[b] = Xb(s.pixelPosition, function (a, c) {
      if (c)return c = ha(a, b), Ha.test(c) ? e(a).position()[b] + "px" : c
    })
  });
  e.each({Height: "height", Width: "width"},
    function (a, b) {
      e.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, f) {
        e.fn[f] = function (f, g) {
          var j = arguments.length && (c || "boolean" !== typeof f), k = c || (!0 === f || !0 === g ? "margin" : "border");
          return la(this, function (b, c, d) {
            return e.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === d ? e.css(b, c, k) : e.style(b, c, d, k)
          }, b, j ? f : void 0, j, null)
        }
      })
    });
  e.fn.size = function () {
    return this.length
  };
  e.fn.andSelf = e.fn.addBack;
  "function" === typeof define && define.amd && define("jquery", [], function () {
    return e
  });
  var Yd = c.jQuery, Zd = c.$;
  e.noConflict = function (a) {
    c.$ === e && (c.$ = Zd);
    a && c.jQuery === e && (c.jQuery = Yd);
    return e
  };
  typeof p === M && (c.jQuery = c.$ = e);
  return e
});
(function (c) {
  function p(c) {
    try {
      return c ? new window.ActiveXObject("Microsoft.XMLHTTP") : new window.XMLHttpRequest
    } catch (k) {
    }
  }

  c.ajaxSettings.xhr = void 0 === window.ActiveXObject ? p : function () {
    return (this.url == document.location || 0 == this.url.indexOf("http") || !this.isLocal) && /^(get|post|head|put|delete|options)$/i.test(this.type) && p() || p(1)
  };
  c.extend(c.support, {iecors: !!window.XDomainRequest});
  c.support.iecors ? c.ajaxTransport(function (c) {
    return {
      send: function (k, l) {
        var n = new window.XDomainRequest;
        n.onload = function () {
          l(200,
            "OK", {text: n.responseText}, {"Content-Type": n.contentType})
        };
        c.xhrFields && (n.onerror = c.xhrFields.error, n.ontimeout = c.xhrFields.timeout);
        n.open(c.type, c.url);
        n.send(c.hasContent && c.data || null)
      }, abort: function () {
        xdr.abort()
      }
    }
  }) : (c.ajaxSetup({
    accepts: {binary: "text/plain; charset=x-user-defined"},
    responseFields: {binary: "response"}
  }), c.ajaxTransport("binary", function (c) {
    var k;
    return {
      send: function (l, n) {
        var m = c.xhr();
        m.open(c.type, c.url, c.async);
        var p = !1;
        try {
          m.hasOwnProperty("responseType") && (m.responseType =
            "arraybuffer", p = !0)
        } catch (b) {
        }
        try {
          !p && m.overrideMimeType && m.overrideMimeType("text/plain; charset=x-user-defined")
        } catch (f) {
        }
        !c.crossDomain && !l["X-Requested-With"] && (l["X-Requested-With"] = "XMLHttpRequest");
        try {
          for (var g in l)m.setRequestHeader(g, l[g])
        } catch (q) {
        }
        m.send(c.hasContent && c.data || null);
        k = function () {
          var b = m.status, f = "", g = m.getAllResponseHeaders(), q = {};
          try {
            if (k && 4 === m.readyState) {
              k = void 0;
              try {
                q.text = "string" === typeof m.responseText ? m.responseText : null
              } catch (l) {
              }
              try {
                q.binary = m.response
              } catch (p) {
              }
              try {
                f =
                  m.statusText
              } catch (y) {
                f = ""
              }
              !b && c.isLocal && !c.crossDomain ? b = q.text ? 200 : 404 : 1223 === b && (b = 204);
              n(b, f, q, g)
            }
          } catch (wa) {
            alert(wa), n(-1, wa)
          }
        };
        c.async ? 4 === m.readyState ? setTimeout(k) : m.onreadystatechange = k : k()
      }, abort: function () {
      }
    }
  }))
})(jQuery);
(function (c, p, j, k) {
  function l(j, l) {
    function y(f) {
      c(b).each(function () {
        self.Jmol && (0 <= l.indexOf("mouseup") || 0 <= l.indexOf("touchend")) && Jmol._setMouseOwner(null);
        var b = c(this);
        this !== f.target && !b.has(f.target).length && b.triggerHandler(l, [f.target, f])
      })
    }

    l = l || j + k;
    var b = c(), f = j + "." + l + "-special-event";
    c.event.special[l] = {
      setup: function () {
        b = b.add(this);
        1 === b.length && c(p).bind(f, y)
      }, teardown: function () {
        self.Jmol && Jmol._setMouseOwner(null);
        b = b.not(this);
        0 === b.length && c(p).unbind(f)
      }, add: function (b) {
        var c =
          b.handler;
        b.handler = function (b, f) {
          b.target = f;
          c.apply(this, arguments)
        }
      }
    }
  }

  c.map(j.split(" "), function (c) {
    l(c)
  });
  l("focusin", "focus" + k);
  l("focusout", "blur" + k)
})(jQuery, document, "click mousemove mouseup touchmove touchend", "outjsmol");
"undefined" == typeof jQuery && alert("Note -- JSmoljQuery is required for JSmol, but it's not defined.");
self.Jmol || (Jmol = {});
Jmol._version || (Jmol = function (c) {
  var p = function (c) {
    return {
      header: c++,
      rear: c++,
      main: c++,
      image: c++,
      front: c++,
      fileOpener: c++,
      coverImage: c++,
      dialog: c++,
      menu: c + 9E4,
      console: c + 91E3,
      monitorZIndex: c + 99999
    }
  }, p = {
    _version: "JSmol 14.2.3 July 23, 2014",
    _alertNoBinary: !0,
    _allowedJmolSize: [25, 2048, 300],
    _fileCache: null,
    _jarFile: null,
    _j2sPath: null,
    _use: null,
    _j2sLoadMonitorOpacity: 90,
    _applets: {},
    _asynchronous: !0,
    _ajaxQueue: [],
    _getZOrders: p,
    _z: p(Jmol.z || 9E3),
    _debugCode: !0,
    db: {
      _databasePrefixes: "$=:",
      _fileLoadScript: ";if (_loadScript = '' && defaultLoadScript == '' && _filetype == 'Pdb') { select protein or nucleic;cartoons Only;color structure; select * };",
      _nciLoadScript: ";n = ({molecule=1}.length < {molecule=2}.length ? 2 : 1); select molecule=n;display selected;center selected;",
      _pubChemLoadScript: "",
      _DirectDatabaseCalls: {
        "cactus.nci.nih.gov": "%URL",
        "www.rcsb.org": "%URL",
        "pdbe.org": "%URL",
        "www.ebi.ac.uk": "%URL",
        "wwwdev.ebi.ac.uk": "%URL",
        "pubchem.ncbi.nlm.nih.gov": "%URL",
        "http://www.nmrdb.org/tools/jmol/predict.php": "%URL",
        $: "http://cactus.nci.nih.gov/chemical/structure/%FILENCI/file?format=sdf&get3d=True",
        $$: "http://cactus.nci.nih.gov/chemical/structure/%FILENCI/file?format=sdf",
        "=": "http://www.rcsb.org/pdb/files/%FILE.pdb",
        "*": "http://www.ebi.ac.uk/pdbe/entry-files/download/%FILE.cif",
        "==": "http://www.rcsb.org/pdb/files/ligand/%FILE.cif",
        ":": "http://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/%FILE/SDF?record_type=3d"
      },
      _restQueryUrl: "http://www.rcsb.org/pdb/rest/search",
      _restQueryXml: "<orgPdbQuery><queryType>org.pdb.query.simple.AdvancedKeywordQuery</queryType><description>Text Search</description><keywords>QUERY</keywords></orgPdbQuery>",
      _restReportUrl: "http://www.pdb.org/pdb/rest/customReport?pdbids=IDLIST&customReportColumns=structureId,structureTitle"
    },
    _debugAlert: !1,
    _document: c,
    _isXHTML: !1,
    _lastAppletID: null,
    _mousePageX: null,
    _mouseOwner: null,
    _serverUrl: "http://your.server.here/jsmol.php",
    _syncId: ("" + Math.random()).substring(3),
    _touching: !1,
    _XhtmlElement: null,
    _XhtmlAppendChild: !1
  };
  c = c.location.href.toLowerCase();
  p._httpProto = 0 == c.indexOf("https") ? "https://" : "http://";
  p._isFile = 0 == c.indexOf("file:");
  p._ajaxTestSite = p._httpProto + "google.com";
  c = p._isFile || 0 == c.indexOf("http://localhost") || 0 == c.indexOf("http://127.");
  p._tracker = "http://" == p._httpProto && !c && "http://chemapps.stolaf.edu/jmol/JmolTracker.htm?id=UA-45940799-1";
  p._isChrome = 0 <= navigator.userAgent.toLowerCase().indexOf("chrome");
  p._isSafari = !p._isChrome && 0 <= navigator.userAgent.toLowerCase().indexOf("safari");
  p._isMsie = void 0 !== window.ActiveXObject;
  p._useDataURI = !p._isSafari && !p._isMsie;
  for (var j in Jmol)p[j] = Jmol[j];
  return p
}(document, Jmol));
(function (c, p) {
  c.$ = function (b, c) {
    null == b && alert(c + arguments.callee.caller.toString());
    return p(c ? "#" + b._id + "_" + c : b)
  };
  c._$ = function (b) {
    return "string" == typeof b ? p("#" + b) : b
  };
  c.$ajax = function (b) {
    c._ajaxCall = b.url;
    b.cache = "NO" != b.cache;
    0 == b.url.indexOf("http://pubchem.ncbi.nlm.nih") && (b.url = "https://" + b.url.substring(7));
    return p.ajax(b)
  };
  c._getNCIInfo = function (b, f) {
    "name" == f && (f = "names");
    url = "http://cactus.nci.nih.gov/chemical/structure/" + b + "/" + f;
    return c._getFileData(url)
  };
  c.$appEvent = function (b, f, g,
                          j) {
    b = c.$(b, f);
    b.off(g) && j && b.on(g, j)
  };
  c.$resize = function (b) {
    return p(window).resize(b)
  };
  c.$after = function (b, c) {
    return p(b).after(c)
  };
  c.$bind = function (b, c, g) {
    return g ? p(b).bind(c, g) : p(b).unbind(c)
  };
  c.$closest = function (b, c) {
    return p(b).closest(c)
  };
  c.$get = function (b, c) {
    return p(b).get(c)
  };
  c.$documentOff = function (b, c) {
    return p(document).off(b, "#" + c)
  };
  c.$documentOn = function (b, c, g) {
    return p(document).on(b, "#" + c, g)
  };
  c.$getAncestorDiv = function (b, c) {
    return p("div." + c + ":has(#" + b + ")")[0]
  };
  c.$supportsIECrossDomainScripting =
    function () {
      return p.support.iecors
    };
  c.$attr = function (b, f, g) {
    return c._$(b).attr(f, g)
  };
  c.$css = function (b, f) {
    return c._$(b).css(f)
  };
  c.$find = function (b, f) {
    return c._$(b).find(f)
  };
  c.$focus = function (b) {
    return c._$(b).focus()
  };
  c.$html = function (b, f) {
    return c._$(b).html(f)
  };
  c.$offset = function (b) {
    return c._$(b).offset()
  };
  c.$windowOn = function (b, c) {
    return p(window).on(b, c)
  };
  c.$prop = function (b, f, g) {
    var j = c._$(b);
    return 3 == arguments.length ? j.prop(f, g) : j.prop(f)
  };
  c.$remove = function (b) {
    return c._$(b).remove()
  };
  c.$scrollTo = function (b, f) {
    var g = c._$(b);
    return g.scrollTop(0 > f ? g[0].scrollHeight : f)
  };
  c.$setEnabled = function (b, f) {
    return c._$(b).attr("disabled", f ? null : "disabled")
  };
  c.$setSize = function (b, f, g) {
    return c._$(b).width(f).height(g)
  };
  c.$setVisible = function (b, f) {
    var g = c._$(b);
    return f ? g.show() : g.hide()
  };
  c.$submit = function (b) {
    return c._$(b).submit()
  };
  c.$val = function (b, f) {
    var g = c._$(b);
    return 1 == arguments.length ? g.val() : g.val(f)
  };
  c._clearVars = function () {
    delete jQuery;
    delete p;
    delete c;
    delete SwingController;
    delete J;
    delete JM;
    delete JS;
    delete JSV;
    delete JU;
    delete JV;
    delete java;
    delete javajs;
    delete Clazz;
    delete c$
  };
  var j = document, k = window, l = {};
  l.ua = navigator.userAgent.toLowerCase();
  var n;
  a:{
    n = ["linux", "unix", "mac", "win"];
    for (var m = n.length; m--;)if (-1 != l.ua.indexOf(n[m])) {
      n = n[m];
      break a
    }
    n = "unknown"
  }
  l.os = n;
  l.browser = function () {
    for (var b = l.ua, c = "konqueror webkit omniweb opera webtv icab msie mozilla".split(" "), g = 0; g < c.length; g++)if (0 <= b.indexOf(c[g]))return c[g];
    return "unknown"
  };
  l.browserName = l.browser();
  l.browserVersion = parseFloat(l.ua.substring(l.ua.indexOf(l.browserName) + l.browserName.length + 1));
  l.supportsXhr2 = function () {
    return p.support.cors || p.support.iecors
  };
  l.allowDestroy = "msie" != l.browserName;
  l.allowHTML5 = "msie" != l.browserName || 0 > navigator.appVersion.indexOf("MSIE 8");
  l.getDefaultLanguage = function () {
    return navigator.language || navigator.userLanguage || "en-US"
  };
  l._webGLtest = 0;
  l.supportsWebGL = function () {
    if (!c.featureDetection._webGLtest) {
      var b;
      c.featureDetection._webGLtest = k.WebGLRenderingContext &&
      ((b = j.createElement("canvas")).getContext("webgl") || b.getContext("experimental-webgl")) ? 1 : -1
    }
    return 0 < c.featureDetection._webGLtest
  };
  l.supportsLocalization = function () {
    for (var b = j.getElementsByTagName("meta"), c = b.length; 0 <= --c;)if (0 <= b[c].outerHTML.toLowerCase().indexOf("utf-8"))return !0;
    return !1
  };
  l.supportsJava = function () {
    c.featureDetection._javaEnabled || (c.featureDetection._javaEnabled = c._isMsie ? navigator.javaEnabled() ? 1 : -1 : navigator.javaEnabled() && (!navigator.mimeTypes || navigator.mimeTypes["application/x-java-applet"]) ?
      1 : -1);
    return 0 < c.featureDetection._javaEnabled
  };
  l.compliantBrowser = function () {
    var b = !!j.getElementById, c = l.os;
    if ("opera" == l.browserName && 7.54 >= l.browserVersion && "mac" == c || "webkit" == l.browserName && 125.12 > l.browserVersion || "msie" == l.browserName && "mac" == c || "konqueror" == l.browserName && 3.3 >= l.browserVersion)b = !1;
    return b
  };
  l.isFullyCompliant = function () {
    return l.compliantBrowser() && l.supportsJava()
  };
  l.useIEObject = "win" == l.os && "msie" == l.browserName && 5.5 <= l.browserVersion;
  l.useHtml4Object = "mozilla" == l.browserName &&
    5 <= l.browserVersion || "opera" == l.browserName && 8 <= l.browserVersion || "webkit" == l.browserName;
  l.hasFileReader = k.File && k.FileReader;
  c.featureDetection = l;
  c._ajax = function (b) {
    if (!b.async)return c.$ajax(b).responseText;
    c._ajaxQueue.push(b);
    1 == c._ajaxQueue.length && c._ajaxDone()
  };
  c._ajaxDone = function () {
    var b = c._ajaxQueue.shift();
    b && c.$ajax(b)
  };
  c._grabberOptions = [["$", "NCI(small molecules)"], [":", "PubChem(small molecules)"], ["=", "RCSB(macromolecules)"], ["*", "PDBe(macromolecules)"]];
  c._getGrabberOptions = function (b) {
    if (0 ==
      c._grabberOptions.length)return "";
    var f = '<input type="text" id="ID_query" onfocus="jQuery(this).select()" onkeypress="if(13==event.which){Jmol._applets[\'ID\']._search();return false}" size="32" value="" />', g = '<button id="ID_submit" onclick="Jmol._applets[\'ID\']._search()">Search</button></nobr>';
    1 == c._grabberOptions.length ? (f = "<nobr>" + f + '<span style="display:none">', g = "</span>" + g) : f += "<br /><nobr>";
    for (var f = f + '<select id="ID_select">', j = 0; j < c._grabberOptions.length; j++)var k = c._grabberOptions[j],
      f = f + ('<option value="' + k[0] + '" ' + (0 == j ? "selected" : "") + ">" + k[1] + "</option>");
    f = (f + "</select>" + g).replace(/ID/g, b._id);
    return "<br />" + f
  };
  c._getScriptForDatabase = function (b) {
    return "$" == b ? c.db._nciLoadScript : ":" == b ? c.db._pubChemLoadScript : c.db._fileLoadScript
  };
  c._setInfo = function (b, c, g) {
    var j = [], k = "";
    if (0 == g.indexOf("ERROR"))k = g; else switch (c) {
      case "=":
        c = g.split("<dimStructure.structureId>");
        j = ["<table>"];
        for (g = 1; g < c.length; g++)j.push('<tr><td valign=top><a href="javascript:Jmol.search(' + b._id + ",'=" +
          c[g].substring(0, 4) + "')\">" + c[g].substring(0, 4) + "</a></td>"), j.push("<td>" + c[g].split("Title>")[1].split("</")[0] + "</td></tr>");
        j.push("</table>");
        k = c.length - 1 + " matches";
        break;
      case "$":
      case ":":
        break;
      default:
        return
    }
    b._infoHeader = k;
    b._info = j.join("");
    b._showInfo(!0)
  };
  c._loadSuccess = function (b, f) {
    f && (c._ajaxDone(), f(b))
  };
  c._loadError = function (b) {
    c._ajaxDone();
    c.say("Error connecting to server: " + c._ajaxCall);
    null != b && b()
  };
  c._isDatabaseCall = function (b) {
    return 0 <= c.db._databasePrefixes.indexOf(b.substring(0,
        1))
  };
  c._getDirectDatabaseCall = function (b, f) {
    if (f && !c.featureDetection.supportsXhr2())return b;
    var g = 2, j, k = c.db._DirectDatabaseCalls[b.substring(0, g)];
    k || (k = c.db._DirectDatabaseCalls[j = b.substring(0, --g)]);
    k && (":" == j ? (j = b.toLowerCase(), isNaN(parseInt(b.substring(1))) ? 0 == j.indexOf(":smiles:") ? (k += "?POST?smiles=" + b.substring(8), b = "smiles") : 0 == j.indexOf(":cid:") ? b = "cid/" + b.substring(5) : (0 == j.indexOf(":name:") ? b = b.substring(5) : 0 == j.indexOf(":cas:") && (b = b.substring(4)), b = "name/" + encodeURIComponent(b.substring(g))) :
      b = "cid/" + b.substring(1)) : b = encodeURIComponent(b.substring(g)), 0 <= k.indexOf("FILENCI") ? (b = b.replace(/\%2F/g, "/"), b = k.replace(/\%FILENCI/, b)) : b = k.replace(/\%FILE/, b));
    return b
  };
  c._getRawDataFromServer = function (b, f, g, j, k, l) {
    b = "?call=getRawDataFromDatabase&database=" + b + (0 <= f.indexOf("?POST?") ? "?POST?" : "") + "&query=" + encodeURIComponent(f) + (k ? "&encoding=base64" : "") + (l ? "" : "&script=" + encodeURIComponent(c._getScriptForDatabase(b)));
    return c._contactServer(b, g, j)
  };
  c._checkFileName = function (b, f, g) {
    c._isDatabaseCall(f) &&
    (g && c._setQueryTerm(b, f), f = c._getDirectDatabaseCall(f, !0), c._isDatabaseCall(f) && (f = c._getDirectDatabaseCall(f, !1), g && (g[0] = !0)));
    return f
  };
  c._checkCache = function (b, f, g) {
    if (b._cacheFiles && c._fileCache && !f.endsWith(".js")) {
      if (b = c._fileCache[f])return System.out.println("using " + b.length + " bytes of cached data for " + f), g(b), null;
      g = function (b, f) {
        g(c._fileCache[b] = f)
      }
    }
    return g
  };
  c._loadFileData = function (b, f, g, j) {
    var k = [];
    f = c._checkFileName(b, f, k);
    g = c._checkCache(b, f, g);
    k[0] ? c._getRawDataFromServer("_",
      f, g, j) : (b = {
      type: "GET", dataType: "text", url: f, async: c._asynchronous, success: function (b) {
        c._loadSuccess(b, g)
      }, error: function () {
        c._loadError(j)
      }
    }, c._checkAjaxPost(b), c._ajax(b))
  };
  c._getInfoFromDatabase = function (b, f, g) {
    if ("====" == f) {
      var j = c.db._restQueryXml.replace(/QUERY/, g), j = {
        dataType: "text",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: c.db._restQueryUrl,
        data: encodeURIComponent(j) + "&req=browser",
        success: function (j) {
          c._ajaxDone();
          c._extractInfoFromRCSB(b, f, g, j)
        },
        error: function () {
          c._loadError(null)
        },
        async: c._asynchronous
      };
      return c._ajax(j)
    }
    g = "?call=getInfoFromDatabase&database=" + f + "&query=" + encodeURIComponent(g);
    return c._contactServer(g, function (g) {
      c._setInfo(b, f, g)
    })
  };
  c._extractInfoFromRCSB = function (b, f, g, j) {
    var k = j.length / 5;
    if (0 != k && 4 == g.length && 1 != k) {
      g = g.toUpperCase();
      var l = j.indexOf(g);
      0 < l && 0 <= "123456789".indexOf(g.substring(0, 1)) && (j = g + "," + j.substring(0, l) + j.substring(l + 5));
      50 < k && (j = j.substring(0, 250));
      j = j.replace(/\n/g, ",");
      j = c._restReportUrl.replace(/IDLIST/, j);
      c._loadFileData(b, j, function (g) {
        c._setInfo(b,
          f, g)
      })
    }
  };
  c._checkAjaxPost = function (b) {
    var c = b.url.indexOf("?POST?");
    0 < c && (b.data = b.url.substring(c + 6), b.url = b.url.substring(0, c), b.type = "POST", b.contentType = "application/x-www-form-urlencoded")
  };
  c._contactServer = function (b, f, g) {
    b = {
      dataType: "text", type: "GET", url: c._serverUrl + b, success: function (b) {
        c._loadSuccess(b, f)
      }, error: function () {
        c._loadError(g)
      }, async: f ? c._asynchronous : !1
    };
    c._checkAjaxPost(b);
    return c._ajax(b)
  };
  c._setQueryTerm = function (b, f) {
    if (f && b._hasOptions && "http://" != f.substring(0, 7)) {
      if (c._isDatabaseCall(f)) {
        var g =
          f.substring(0, 1);
        f = f.substring(1);
        f.substring(0, 1) == g && 0 <= "=$".indexOf(g) && (f = f.substring(1));
        var j = c._getElement(b, "select");
        if (j && j.options)for (var k = 0; k < j.options.length; k++)j[k].value == g && (j[k].selected = !0)
      }
      c.$val(c.$(b, "query"), f)
    }
  };
  c._search = function (b, f, g) {
    1 < arguments.length || (f = null);
    c._setQueryTerm(b, f);
    f || (f = c.$val(c.$(b, "query")));
    0 == f.indexOf("!") ? b._script(f.substring(1)) : (f && (f = f.replace(/\"/g, "")), b._showInfo(!1), c._searchMol(b, f, g, !0))
  };
  c._searchMol = function (b, f, g, j) {
    var k;
    c._isDatabaseCall(f) ?
      (k = f.substring(0, 1), f = f.substring(1)) : k = b._hasOptions ? c.$val(c.$(b, "select")) : "$";
    "=" == k && 3 == f.length && (f = "=" + f);
    var l = k + f;
    if (f && !(0 > l.indexOf("?") && l == b._thisJmolModel)) {
      b._thisJmolModel = l;
      var m;
      j && null != b._viewSet && null != (m = c.View.__findView(b._viewSet, {chemID: l})) ? c.View.__setView(m, b, !1) : ("$" == k || ":" == k ? b._jmolFileType = "MOL" : "=" == k && (b._jmolFileType = "PDB"), b._searchDatabase(f, k, g))
    }
  };
  c._searchDatabase = function (b, f, g, j) {
    b._showInfo(!1);
    return 0 <= f.indexOf("?") ? (c._getInfoFromDatabase(b, g, f.split("?")[0]),
      !0) : c.db._DirectDatabaseCalls[g] ? (b._loadFile(g + f, j), !0) : !1
  };
  c._syncBinaryOK = "?";
  c._canSyncBinary = function (b) {
    if (self.VBArray)return c._syncBinaryOK = !1;
    if ("?" != c._syncBinaryOK)return c._syncBinaryOK;
    c._syncBinaryOK = !0;
    try {
      var f = new window.XMLHttpRequest;
      f.open("text", c._ajaxTestSite, !1);
      f.hasOwnProperty("responseType") ? f.responseType = "arraybuffer" : f.overrideMimeType && f.overrideMimeType("text/plain; charset=x-user-defined")
    } catch (g) {
      return System.out.println("JSmolCore.js: synchronous binary file transfer is requested but not available"),
      c._alertNoBinary && !b && alert("JSmolCore.js: synchronous binary file transfer is requested but not available"), c._syncBinaryOK = !1
    }
    return !0
  };
  c._binaryTypes = ".gz .jpg .png .zip .jmol .bin .smol .spartan .mrc .pse .map .omap".split(" ");
  c._isBinaryUrl = function (b) {
    for (var f = c._binaryTypes.length; 0 <= --f;)if (0 <= b.indexOf(c._binaryTypes[f]))return !0;
    return !1
  };
  c._getFileData = function (b, f) {
    var g = c._isBinaryUrl(b) ? "binary" : "text", j = 0 <= b.indexOf("pdb.gz") && 0 == b.indexOf("http://www.rcsb.org/pdb/files/"), k = "binary" ==
      g && !c._canSyncBinary(j);
    k && j && (b = b.replace(/pdb\.gz/, "pdb"), k = !1, g = "text");
    j = 0 <= b.indexOf("?POST?");
    0 == b.indexOf("file:/") && 0 != b.indexOf("file:///") && (b = "file://" + b.substring(5));
    var l = 0 > b.indexOf("://") || 0 == b.indexOf(document.location.protocol) && 0 <= b.indexOf(document.location.host), m = c._isDirectCall(b), n = !l && c.$supportsIECrossDomainScripting();
    if (!f || k)if (n || k || !l && !m)return c._getRawDataFromServer("_", b, f, f, k, !0);
    b = b.replace(/file:\/\/\/\//, "file://");
    var p = {dataType: g, async: !!f};
    j ? (p.type = "POST",
      p.url = b.split("?POST?")[0], p.data = b.split("?POST?")[1]) : (p.type = "GET", p.url = b);
    f && (p.success = function () {
      f(c._xhrReturn(p.xhr))
    }, p.error = function () {
      f(xhr.statusText)
    });
    p.xhr = c.$ajax(p);
    if (!f)return c._xhrReturn(p.xhr)
  };
  c._xhrReturn = function (b) {
    return !b.responseText || self.Clazz && Clazz.instanceOf(b.response, self.ArrayBuffer) ? b.response || b.statusText : b.responseText
  };
  c._isDirectCall = function (b) {
    for (var f in c.db._DirectDatabaseCalls)if (0 <= f.indexOf(".") && 0 <= b.indexOf(f))return !0;
    return !1
  };
  c._cleanFileData =
    function (b) {
      return 0 <= b.indexOf("\r") && 0 <= b.indexOf("\n") ? b.replace(/\r\n/g, "\n") : 0 <= b.indexOf("\r") ? b.replace(/\r/g, "\n") : b
    };
  c._getFileType = function (b) {
    var c = b.substring(0, 1);
    if ("$" == c || ":" == c)return "MOL";
    if ("=" == c)return "=" == b.substring(1, 2) ? "LCIF" : "PDB";
    b = b.split(".").pop().toUpperCase();
    return b.substring(0, Math.min(b.length, 3))
  };
  c._getZ = function (b, f) {
    return b && b._z && b._z[f] || c._z[f]
  };
  c._incrZ = function (b, f) {
    return b && b._z && ++b._z[f] || ++c._z[f]
  };
  c._loadFileAsynchronously = function (b, f, g, j) {
    if (0 !=
      g.indexOf("?")) {
      g = c._checkFileName(f, g);
      var k = function (f) {
        c._setData(b, g, f, j)
      }, k = c._checkCache(f, g, k);
      return null == k ? null : c._getFileData(g, k)
    }
    if (!c.featureDetection.hasFileReader)return b.setData("Local file reading is not enabled in your browser", null, j);
    f._localReader || (k = '<div id="ID" style="z-index:' + c._getZ(f, "fileOpener") + ';position:absolute;background:#E0E0E0;left:10px;top:10px"><div style="margin:5px 5px 5px 5px;"><input type="file" id="ID_files" /><button id="ID_loadfile">load</button><button id="ID_cancel">cancel</button></div><div>',
      c.$after("#" + f._id + "_appletdiv", k.replace(/ID/g, f._id + "_localReader")), f._localReader = c.$(f, "localReader"));
    c.$appEvent(f, "localReader_loadfile", "click");
    c.$appEvent(f, "localReader_loadfile", "click", function () {
      var g = c.$(f, "localReader_files")[0].files[0], k = new FileReader;
      k.onloadend = function (k) {
        k.target.readyState == FileReader.DONE && (c.$css(c.$(f, "localReader"), {display: "none"}), c._setData(b, g.name, k.target.result, j))
      };
      k.readAsArrayBuffer(g)
    });
    c.$appEvent(f, "localReader_cancel", "click");
    c.$appEvent(f,
      "localReader_cancel", "click", function () {
        c.$css(c.$(f, "localReader"), {display: "none"});
        b.setData(null, j)
      });
    c.$css(c.$(f, "localReader"), {display: "block"})
  };
  c._setData = function (b, f, g, j) {
    g = c._strToBytes(g);
    0 <= f.indexOf(".jdx") && c.Cache.put("cache://" + f, g);
    b.setData(f, g, j)
  };
  c._toBytes = function (b) {
    if ("string" == typeof b)return b.getBytes();
    b = new Uint8Array(b);
    for (var c = Clazz.newByteArray(b.length, 0), g = b.length; 0 <= --g;)c[g] = b[g];
    return c
  };
  c._doAjax = function (b, f, g) {
    b = b.toString();
    if (null != g)return c._saveFile(b,
      g);
    f && (b += "?POST?" + f);
    f = c._getFileData(b);
    return c._processData(f, c._isBinaryUrl(b))
  };
  c._saveFile = function (b, f, g, j) {
    if (c._localFileSaveFunction && c._localFileSaveFunction(b, f))return "OK";
    b = b.substring(b.lastIndexOf("/") + 1);
    g || (g = 0 <= b.indexOf(".pdf") ? "application/pdf" : 0 <= b.indexOf(".png") ? "image/png" : 0 <= b.indexOf(".jpg") ? "image/jpg" : "");
    var k = "string" == typeof f;
    k || (f = (JU ? JU : J.util).Base64.getBase64(f).toString());
    j || (j = k ? "" : "base64");
    (k = c._serverUrl) && 0 <= k.indexOf("your.server") && (k = "");
    c._useDataURI || !k ? (j || (f = btoa(f)), j = document.createElement("a"), j.href = "data:" + g + ";base64," + f, j.type = g || "text/plain", j.download = b, j.target = "_blank", p("body").append(j), j.click(), j.remove()) : (c._formdiv || (c.$after("body", '<div id="__jsmolformdiv__" style="display:none">\t\t\t\t\t\t<form id="__jsmolform__" method="post" target="_blank" action="">\t\t\t\t\t\t<input name="call" value="saveFile"/>\t\t\t\t\t\t<input id="__jsmolmimetype__" name="mimetype" value=""/>\t\t\t\t\t\t<input id="__jsmolencoding__" name="encoding" value=""/>\t\t\t\t\t\t<input id="__jsmolfilename__" name="filename" value=""/>\t\t\t\t\t\t<textarea id="__jsmoldata__" name="data"></textarea>\t\t\t\t\t\t</form>\t\t\t\t\t\t</div>'),
      c._formdiv = "__jsmolform__"), c.$attr(c._formdiv, "action", k + "?" + (new Date).getMilliseconds()), c.$val("__jsmoldata__", f), c.$val("__jsmolfilename__", b), c.$val("__jsmolmimetype__", g), c.$val("__jsmolencoding__", j), c.$submit("__jsmolform__"), c.$val("__jsmoldata__", ""), c.$val("__jsmolfilename__", ""));
    return "OK"
  };
  c._processData = function (b, f) {
    "undefined" == typeof b && (b = "", f = !1);
    f && (f = c._canSyncBinary());
    return f ? c._strToBytes(b) : JU.SB.newS(b)
  };
  c._strToBytes = function (b) {
    if (Clazz.instanceOf(b, self.ArrayBuffer))return c._toBytes(b);
    for (var f = Clazz.newByteArray(b.length, 0), g = b.length; 0 <= --g;)f[g] = b.charCodeAt(g) & 255;
    return f
  };
  c._setConsoleDiv = function (b) {
    self.Clazz && Clazz.setConsoleDiv(b)
  };
  c._registerApplet = function (b, f) {
    return window[b] = c._applets[b] = c._applets[f] = c._applets[b + "__" + c._syncId + "__"] = f
  };
  c._readyCallback = function (b, f, g, j) {
    b = b.split("_object")[0];
    g = g.booleanValue ? g.booleanValue() : g;
    c._track(c._applets[b])._readyCallback(b, f, g, j)
  };
  c._getWrapper = function (b, f) {
    var g;
    if (f) {
      var j = "";
      b._coverImage && (g = ' onclick="Jmol.coverApplet(ID, false)" title="' +
        b._coverTitle + '"', j = '<image id="ID_coverclickgo" src="' + b._j2sPath + '/img/play_make_live.jpg" style="width:25px;height:25px;position:absolute;bottom:10px;left:10px;z-index:' + c._getZ(b, "coverImage") + ';opacity:0.5;"' + g + " />", j = '<div id="ID_coverdiv" style="background-color:red;z-index:' + c._getZ(b, "coverImage") + ';width:100%;height:100%;display:inline;position:absolute;top:0px;left:0px"><image id="ID_coverimage" src="' + b._coverImage + '" style="width:100%;height:100%"' + g + "/>" + j + "</div>");
      g = '...<div id="ID_appletinfotablediv" style="width:Wpx;height:Hpx;position:relative;font-size:14px;text-align:left">IMG......<div id="ID_appletdiv" style="z-index:' +
        c._getZ(b, "header") + ';width:100%;height:100%;position:absolute;top:0px;left:0px;">';
      var k = b._height, l = b._width;
      if ("string" !== typeof k || 0 > k.indexOf("%"))k += "px";
      if ("string" !== typeof l || 0 > l.indexOf("%"))l += "px";
      g = g.replace(/IMG/, j).replace(/Hpx/g, k).replace(/Wpx/g, l)
    } else g = '......</div>......<div id="ID_2dappletdiv" style="position:absolute;width:100%;height:100%;overflow:hidden;display:none"></div>......<div id="ID_infotablediv" style="width:100%;height:100%;position:absolute;top:0px;left:0px">.........<div id="ID_infoheaderdiv" style="height:20px;width:100%;background:yellow;display:none"><span id="ID_infoheaderspan"></span><span id="ID_infocheckboxspan" style="position:absolute;text-align:right;right:1px;"><a href="javascript:Jmol.showInfo(ID,false)">[x]</a></span></div>.........<div id="ID_infodiv" style="position:absolute;top:20px;bottom:0px;width:100%;height:100%;overflow:auto"></div>......</div>...</div>';
    return g.replace(/\.\.\./g, "").replace(/[\n\r]/g, "").replace(/ID/g, b._id)
  };
  c._documentWrite = function (b) {
    if (c._document) {
      if (c._isXHTML && !c._XhtmlElement) {
        var f = document.getElementsByTagName("script");
        c._XhtmlElement = f.item(f.length - 1);
        c._XhtmlAppendChild = !1
      }
      c._XhtmlElement ? c._domWrite(b) : c._document.write(b)
    }
    return b
  };
  c._domWrite = function (b) {
    for (var f = [0]; f[0] < b.length;) {
      var g = c._getDomElement(b, f);
      if (!g)break;
      c._XhtmlAppendChild ? c._XhtmlElement.appendChild(g) : c._XhtmlElement.parentNode.insertBefore(g,
        _jmol.XhtmlElement)
    }
  };
  c._getDomElement = function (b, c) {
    var g = document.createElement("span");
    g.innerHTML = b;
    c[0] = b.length;
    return g
  };
  c._setObject = function (b, f, g) {
    b._id = f;
    b.__Info = {};
    g.z && g.zIndexBase && (c._z = c._getZOrders(g.zIndexBase));
    for (var j in g)b.__Info[j] = g[j];
    (b._z = g.z) || g.zIndexBase && (b._z = b.__Info.z = c._getZOrders(g.zIndexBase));
    b._width = g.width;
    b._height = g.height;
    b._noscript = !b._isJava && g.noscript;
    b._console = g.console;
    b._cacheFiles = !!g.cacheFiles;
    b._viewSet = null == g.viewSet || b._isJava ? null : "Set" +
    g.viewSet;
    null != b._viewSet && (c.View.__init(b), b._currentView = null);
    !c._fileCache && b._cacheFiles && (c._fileCache = {});
    b._console || (b._console = b._id + "_infodiv");
    "none" == b._console && (b._console = null);
    b._color = g.color ? g.color.replace(/0x/, "#") : "#FFFFFF";
    b._disableInitialConsole = g.disableInitialConsole;
    b._noMonitor = g.disableJ2SLoadMonitor;
    c._j2sPath && (g.j2sPath = c._j2sPath);
    b._j2sPath = g.j2sPath;
    b._deferApplet = g.deferApplet;
    b._deferUncover = g.deferUncover;
    b._coverImage = !b._isJava && g.coverImage;
    b._isCovered = !!b._coverImage;
    b._coverScript = g.coverScript;
    b._coverTitle = g.coverTitle;
    b._coverTitle || (b._coverTitle = b._deferApplet ? "activate 3D model" : "3D model is loading...");
    b._containerWidth = b._width + (b._width == parseFloat(b._width) ? "px" : "");
    b._containerHeight = b._height + (b._height == parseFloat(b._height) ? "px" : "");
    b._info = "";
    b._infoHeader = b._jmolType + ' "' + b._id + '"';
    b._hasOptions = g.addSelectionOptions;
    b._defaultModel = g.defaultModel;
    b._readyScript = g.script ? g.script : "";
    b._readyFunction = g.readyFunction;
    b._coverImage && !b._deferApplet && (b._readyScript += ";javascript " + f + "._displayCoverImage(false)");
    b._src = g.src
  };
  c._addDefaultInfo = function (b, f) {
    for (var g in f)"undefined" == typeof b[g] && (b[g] = f[g]);
    c._use && (b.use = c._use);
    0 <= b.use.indexOf("SIGNED") && (0 > b.jarFile.indexOf("Signed") && (b.jarFile = b.jarFile.replace(/Applet/, "AppletSigned")), b.use = b.use.replace(/SIGNED/, "JAVA"), b.isSigned = !0)
  };
  c._syncedApplets = [];
  c._syncedCommands = [];
  c._syncedReady = [];
  c._syncReady = !1;
  c._isJmolJSVSync = !1;
  c._setReady = function (b) {
    c._syncedReady[b] =
      1;
    for (var f = 0, g = 0; g < c._syncedApplets.length; g++) {
      if (c._syncedApplets[g] == b._id)c._syncedApplets[g] = b, c._syncedReady[g] = 1; else if (!c._syncedReady[g])continue;
      f++
    }
    f == c._syncedApplets.length && c._setSyncReady()
  };
  c._setDestroy = function (b) {
    c.featureDetection.allowDestroy && c.$windowOn("beforeunload", function () {
      c._destroy(b)
    })
  };
  c._destroy = function (b) {
    try {
      b._applet && b._applet.destroy();
      b._applet = null;
      c._unsetMouse(b._canvas);
      b._canvas = null;
      for (var f = 0, g = 0; g < c._syncedApplets.length; g++)c._syncedApplets[g] ==
      b && (c._syncedApplets[g] = null), c._syncedApplets[g] && f++;
      0 < f || c._clearVars()
    } catch (j) {
    }
  };
  c._setSyncReady = function () {
    c._syncReady = !0;
    for (var b = "", f = 0; f < c._syncedApplets.length; f++)c._syncedCommands[f] && (b += "Jmol.script(Jmol._syncedApplets[" + f + "], Jmol._syncedCommands[" + f + "]);");
    setTimeout(b, 50)
  };
  c._mySyncCallback = function (b, f) {
    app = c._applets[b];
    if (app._viewSet)c.View.updateFromSync(app, f); else {
      if (!c._syncReady || !c._isJmolJSVSync)return 1;
      for (var g = 0; g < c._syncedApplets.length; g++)0 <= f.indexOf(c._syncedApplets[g]._syncKeyword) &&
      c._syncedApplets[g]._syncScript(f);
      return 0
    }
  };
  c._getElement = function (b, c) {
    return document.getElementById(b._id + "_" + c) || {}
  };
  c._evalJSON = function (b, c) {
    b += "";
    if (!b)return [];
    if ("{" != b.charAt(0))return 0 <= b.indexOf(" | ") && (b = b.replace(/\ \|\ /g, "\n")), b;
    var g = (new Function("return " + b))();
    return !g ? null : c && void 0 != g[c] ? g[c] : g
  };
  c._sortMessages = function (b) {
    function c(b, f) {
      return b[0] < f[0] ? 1 : b[0] > f[0] ? -1 : 0
    }

    if (!b || "object" != typeof b)return [];
    for (var g = [], j = b.length - 1; 0 <= j; j--)for (var k = 0, l = b[j].length; k < l; k++)g[g.length] =
      b[j][k];
    if (0 != g.length)return g = g.sort(c)
  };
  c._setMouseOwner = function (b, f) {
    null == b || f ? c._mouseOwner = b : c._mouseOwner == b && (c._mouseOwner = null)
  };
  c._jsGetMouseModifiers = function (b) {
    var c = 0;
    switch (b.button) {
      case 0:
        c = 16;
        break;
      case 1:
        c = 8;
        break;
      case 2:
        c = 4
    }
    b.shiftKey && (c += 1);
    b.altKey && (c += 8);
    b.ctrlKey && (c += 2);
    return c
  };
  c._jsGetXY = function (b, f) {
    if (!b.applet._ready || c._touching && 0 > f.type.indexOf("touch"))return !1;
    f.preventDefault();
    var g = c.$offset(b.id), j, k = f.originalEvent;
    f.pageX || (f.pageX = k.pageX);
    f.pageY ||
    (f.pageY = k.pageY);
    c._mousePageX = f.pageX;
    c._mousePageY = f.pageY;
    k.targetTouches && k.targetTouches[0] ? (j = k.targetTouches[0].pageX - g.left, g = k.targetTouches[0].pageY - g.top) : k.changedTouches ? (j = k.changedTouches[0].pageX - g.left, g = k.changedTouches[0].pageY - g.top) : (j = f.pageX - g.left, g = f.pageY - g.top);
    return void 0 == j ? null : [Math.round(j), Math.round(g), c._jsGetMouseModifiers(f)]
  };
  c._gestureUpdate = function (b, f) {
    f.stopPropagation();
    f.preventDefault();
    var g = f.originalEvent;
    switch (f.type) {
      case "touchstart":
        c._touching = !0;
        break;
      case "touchend":
        c._touching = !1
    }
    if (!g.touches || 2 != g.touches.length)return !1;
    switch (f.type) {
      case "touchstart":
        b._touches = [[], []];
        break;
      case "touchmove":
        var j = c.$offset(b.id), k = b._touches[0], l = b._touches[1];
        k.push([g.touches[0].pageX - j.left, g.touches[0].pageY - j.top]);
        l.push([g.touches[1].pageX - j.left, g.touches[1].pageY - j.top]);
        g = k.length;
        3 < g && (k.shift(), l.shift());
        2 <= g && b.applet._processGesture(b._touches)
    }
    return !0
  };
  c._jsSetMouse = function (b) {
    c.$bind(b, "mousedown touchstart", function (f) {
      c._setMouseOwner(b,
        !0);
      f.stopPropagation();
      f.preventDefault();
      b.isDragging = !0;
      if ("touchstart" == f.type && c._gestureUpdate(b, f))return !1;
      c._setConsoleDiv(b.applet._console);
      var g = c._jsGetXY(b, f);
      if (!g)return !1;
      2 != f.button && c.Swing.hideMenus(b.applet);
      b.applet._processEvent(501, g);
      return !1
    });
    c.$bind(b, "mouseup touchend", function (f) {
      c._setMouseOwner(null);
      f.stopPropagation();
      f.preventDefault();
      b.isDragging = !1;
      if ("touchend" == f.type && c._gestureUpdate(b, f))return !1;
      f = c._jsGetXY(b, f);
      if (!f)return !1;
      b.applet._processEvent(502,
        f);
      return !1
    });
    c.$bind(b, "mousemove touchmove", function (f) {
      return c._mouseOwner && c._mouseOwner != b && c._mouseOwner.isDragging ? (c._mouseOwner.mouseMove(f), !1) : c._drag(b, f)
    });
    c._drag = function (b, g) {
      g.stopPropagation();
      g.preventDefault();
      if ("touchmove" == g.type && c._gestureUpdate(b, g))return !1;
      var j = c._jsGetXY(b, g);
      if (!j)return !1;
      b.isDragging || (j[2] = 0);
      b.applet._processEvent(b.isDragging ? 506 : 503, j);
      return !1
    };
    c.$bind(b, "DOMMouseScroll mousewheel", function (f) {
      f.stopPropagation();
      f.preventDefault();
      b.isDragging = !1;
      var g = f.originalEvent, g = g.detail ? g.detail : ("mac" == c.featureDetection.os ? 1 : -1) * g.wheelDelta;
      f = c._jsGetMouseModifiers(f);
      b.applet._processEvent(-1, [0 > g ? -1 : 1, 0, f]);
      return !1
    });
    c.$bind(b, "contextmenu", function () {
      return !1
    });
    c.$bind(b, "mouseout", function (f) {
      b.applet._applet && b.applet._applet.startHoverWatcher(!1);
      c._jsGetXY(b, f);
      return !1
    });
    c.$bind(b, "mouseenter", function (f) {
      b.applet._applet && b.applet._applet.startHoverWatcher(!0);
      if (0 === f.buttons || 0 === f.which) {
        b.isDragging = !1;
        f = c._jsGetXY(b, f);
        if (!f)return !1;
        b.applet._processEvent(504, f);
        b.applet._processEvent(502, f);
        return !1
      }
    });
    c.$bind(b, "mousemoveoutjsmol", function (f, g, j) {
      if (b == c._mouseOwner && b.isDragging)return c._drag(b, j)
    });
    b.applet._is2D && c.$resize(function () {
      b.applet && b.applet._resize()
    });
    c.$bind("body", "mouseup touchend", function () {
      b.applet && (b.isDragging = !1);
      c._setMouseOwner(null)
    })
  };
  c._jsUnsetMouse = function (b) {
    b.applet = null;
    c.$bind(b, "mousedown touchstart mousemove touchmove mouseup touchend DOMMouseScroll mousewheel contextmenu mouseout mouseenter",
      null);
    c._setMouseOwner(null)
  };
  c.Swing = {count: 0, menuInitialized: 0, menuCounter: 0, htDialogs: {}};
  var y = c.Swing;
  SwingController = y;
  y.setDraggable = function (b) {
    b = b.prototype;
    b.setContainer || (b.setContainer = function (b) {
      this.container = b;
      b.obj = this;
      this.ignoreMouse = this.isDragging = !1;
      var g = this;
      b.bind("mousedown touchstart", function (b) {
        if (g.ignoreMouse)return g.ignoreMouse = !1, !0;
        c._setMouseOwner(g, !0);
        g.isDragging = !0;
        g.pageX = b.pageX;
        g.pageY = b.pageY;
        return !1
      });
      b.bind("mousemove touchmove", function (b) {
        if (g.isDragging &&
          c._mouseOwner == g)return g.mouseMove(b), !1
      });
      b.bind("mouseup touchend", function (b) {
        g.mouseUp(b);
        c._setMouseOwner(null)
      })
    }, b.mouseUp = function (b) {
      if (this.isDragging && c._mouseOwner == this)return this.pageX0 += b.pageX - this.pageX, this.pageY0 += b.pageY - this.pageY, this.isDragging = !1;
      c._setMouseOwner(null)
    }, b.setPosition = function () {
      if (null === c._mousePageX) {
        var b = c.$offset(this.applet._id + "_" + (this.applet._is2D ? "canvas2d" : "canvas"));
        c._mousePageX = b.left;
        c._mousePageY = b.top
      }
      this.pageX0 = c._mousePageX;
      this.pageY0 =
        c._mousePageY;
      this.container.css({top: c._mousePageY + "px", left: c._mousePageX + "px"})
    }, b.mouseMove = function (b) {
      this.isDragging && c._mouseOwner == this && (this.timestamp = System.currentTimeMillis(), this.container.css({
        top: this.pageY0 + (b.pageY - this.pageY) + "px",
        left: this.pageX0 + (b.pageX - this.pageX) + "px"
      }))
    }, b.dragBind = function (b) {
      this.applet._ignoreMouse = !b;
      this.container.unbind("mousemoveoutjsmol");
      this.container.unbind("touchmoveoutjsmol");
      this.container.unbind("mouseupoutjsmol");
      this.container.unbind("touchendoutjsmol");
      c._setMouseOwner(null);
      if (b) {
        var g = this;
        this.container.bind("mousemoveoutjsmol touchmoveoutjsmol", function (b, c, f) {
          g.mouseMove(f)
        });
        this.container.bind("mouseupoutjsmol touchendoutjsmol", function (b, c, f) {
          g.mouseUp(f)
        })
      }
    })
  };
  y.JSDialog = function () {
  };
  y.setDraggable(y.JSDialog);
  y.getScreenDimensions = function (b) {
    b.width = p(window).width();
    b.height = p(window).height()
  };
  y.dispose = function (b) {
    c.$remove(b.id + "_mover");
    delete y.htDialogs[b.id];
    b.container.obj.dragBind(!1)
  };
  y.register = function (b, c) {
    b.id = c + ++y.count;
    y.htDialogs[b.id] = b
  };
  y.setDialog = function (b) {
    c._setMouseOwner(null);
    c.$remove(b.id);
    var f = b.id + "_mover", g = c._$(f), j;
    g[0] ? (g.html(b.html), j = g[0].jd) : (c.$after("body", "<div id='" + f + "' style='position:absolute;left:0px;top:0px;'>" + b.html + "</div>"), j = new y.JSDialog, g = c._$(f), b.container = g, j.applet = b.manager.vwr.html5Applet, j.setContainer(g), j.dialog = b, j.setPosition(), j.dragBind(!0), g[0].jd = j);
    c.$bind("#" + b.id + " .JButton", "mousedown touchstart", function () {
      j.ignoreMouse = !0
    });
    c.$bind("#" + b.id + " .JComboBox",
      "mousedown touchstart", function () {
        j.ignoreMouse = !0
      });
    c.$bind("#" + b.id + " .JCheckBox", "mousedown touchstart", function () {
      j.ignoreMouse = !0
    });
    c.$bind("#" + b.id + " .JTextField", "mousedown touchstart", function () {
      j.ignoreMouse = !0
    });
    c.$bind("#" + b.id + " .JTable", "mousedown touchstart", function () {
      j.ignoreMouse = !0
    });
    c.$bind("#" + b.id + " .JScrollPane", "mousedown touchstart", function () {
      j.ignoreMouse = !0
    });
    c.$bind("#" + b.id + " .JEditorPane", "mousedown touchstart", function () {
      j.ignoreMouse = !0
    })
  };
  y.setSelected = function (b) {
    c.$prop(b.id,
      "checked", !!b.selected)
  };
  y.setSelectedIndex = function (b) {
    c.$prop(b.id, "selectedIndex", b.selectedIndex)
  };
  y.setText = function (b) {
    c.$prop(b.id, "value", b.text)
  };
  y.setVisible = function (b) {
    c.$setVisible(b.id, b.visible)
  };
  y.setEnabled = function (b) {
    c.$setEnabled(b.id, b.enabled)
  };
  y.click = function (b, f) {
    var g = y.htDialogs[b.id];
    if (g) {
      var j = g.toString();
      if (0 <= j.indexOf("JCheck"))g.selected = b.checked; else if (0 <= j.indexOf("JCombo"))g.selectedIndex = b.selectedIndex; else if (null != g.text && (g.text = b.value, f && 13 != (f.charCode ||
        f.keyCode)))return
    }
    j = y.htDialogs[c.$getAncestorDiv(b.id, "JDialog").id];
    j.manager.actionPerformed(g ? g.name : j.registryKey + "/" + b.id)
  };
  y.setFront = function (b) {
    var f = b.manager.vwr.html5Applet;
    b.zIndex != c._getZ(f, "dialog") && (b.zIndex = c._incrZ(f, "dialog"));
    b.container && ((b.container[0] || b.container).style.zIndex = b.zIndex)
  };
  y.hideMenus = function (b) {
    if (b = b._menus)for (var c in b)b[c].visible && y.hideMenu(b[c])
  };
  y.windowClosing = function (b) {
    b = y.htDialogs[c.$getAncestorDiv(b.id, "JDialog").id];
    b.registryKey ? b.manager.processWindowClosing(b.registryKey) :
      b.dispose()
  };
  c._track = function (b) {
    if (c._tracker) {
      try {
        var f = '<iframe style="display:none" width="0" height="0" frameborder="0" tabindex="-1" src="' + (c._tracker + "&applet=" + b._jmolType + "&version=" + c._version + "&appver=" + self.___JmolVersion + "&url=" + encodeURIComponent(document.location.href)) + '"></iframe>';
        c.$after("body", f)
      } catch (g) {
      }
      delete c._tracker
    }
    return b
  };
  c.getProfile = function () {
    window["j2s.doProfile"] = !0;
    if (self.Clazz && self.JSON)return Clazz._profile || (Clazz._profile = {}), Clazz.getProfile()
  };
  c._getInChIKey =
    function (b, c) {
      0 <= c.indexOf("MOL=") && c.split("MOL=")[1].split('"')
    };
  c._getAttr = function (b, c) {
    var g = b.indexOf(c + "=");
    return 0 <= g && 0 <= (g = b.indexOf('"', g)) ? b.substring(g + 1, b.indexOf('"', g + 1)) : null
  };
  c.User = {viewUpdatedCallback: null};
  c.View = {count: 0, applets: {}, sets: {}};
  (function (b) {
    b.updateView = function (f, g) {
      if (null != f._viewSet) {
        g.chemID || (f._searchQuery = null);
        g.data || (g.data = "N/A");
        g.type = f._viewType;
        if (null == (f._currentView = b.__findView(f._viewSet, g)))f._currentView = b.__createViewSet(f._viewSet, g.chemID,
          g.viewID || g.chemID);
        f._currentView[g.type].data = g.data;
        f._currentView[g.type].smiles = f._getSmiles();
        c.User.viewUpdatedCallback && c.User.viewUpdatedCallback(f, "updateView");
        b.__setView(f._currentView, f, !1)
      }
    };
    b.updateFromSync = function (f, g) {
      f._updateMsg = g;
      var j = c._getAttr(g, "sourceID") || c._getAttr(g, "file");
      if (j) {
        var k = b.__findView(f._viewSet, {viewID: j});
        if (null == k)return c.updateView(f, g);
        k != f._currentView && b.__setView(k, f, !0);
        var l = (j = c._getAttr(g, "atoms")) && 0 <= g.indexOf("selectionhalos ON") ? eval("[" +
          j + "]") : [];
        setTimeout(function () {
          f._currentView == k && b.updateAtomPick(f, l)
        }, 10);
        c.User.viewUpdatedCallback && c.User.viewUpdatedCallback(f, "updateFromSync")
      }
    };
    b.updateAtomPick = function (b, g) {
      var j = b._currentView;
      if (null != j) {
        for (var k in j)"info" != k && j[k].applet != b && j[k].applet._updateAtomPick(g);
        c.User.viewUpdatedCallback && c.User.viewUpdatedCallback(b, "updateAtomPick")
      }
    };
    b.dumpViews = function (c) {
      var g = b.sets[c];
      if (g) {
        var j = "View set " + c + ":\n";
        c = b.applets[c];
        for (var k in c)j += "\napplet " + c[k]._id + " currentView=" +
          (c[k]._currentView ? c[k]._currentView.info.viewID : null);
        for (k = g.length; 0 <= --k;) {
          c = g[k];
          var j = j + ("\n\n<b>view=" + k + " viewID=" + c.info.viewID + " chemID=" + c.info.chemID + "</b>\n"), l, m;
          for (m in c)"info" != m && (j += "\nview=" + k + " type=" + m + " applet=" + ((l = c[m]).applet ? l.applet._id : null) + " SMILES=" + l.smiles + "\n atomMap=" + JSON.stringify(l.atomMap) + "\n data=\n" + l.data + "\n")
        }
        return j
      }
    };
    b.__init = function (c) {
      var g = c._viewSet, j = b.applets;
      j[g] || (j[g] = {});
      j[g][c._viewType] = c
    };
    b.__findView = function (c, g) {
      var j = b.sets[c];
      null ==
      j && (j = b.sets[c] = []);
      for (var k = j.length; 0 <= --k;) {
        var l = j[k];
        if (g.viewID) {
          if (l.info.viewID == g.viewID)return l
        } else {
          if (null != g.chemID && g.chemID == l.info.chemID)return l;
          for (var m in l)if ("info" != m && (null != g.data && null != l[m].data ? g.data == l[m].data : g.type == m))return l
        }
      }
      return null
    };
    b.__createViewSet = function (f, g, j) {
      b.count++;
      g = {info: {chemID: g, viewID: j || "model_" + b.count}};
      for (var k in c._applets)j = c._applets[k], j._viewSet == f && (g[j._viewType] = {applet: j, data: null});
      b.sets[f].push(g);
      return g
    };
    b.__setView =
      function (b, c, j) {
        for (var k in b)if ("info" != k) {
          var l = b[k], m = l.applet, n = j || null != m && "<modified>" == m._molData;
          if (!(null == m || m == c && !n)) {
            var p = null == l.data, y = null != m._currentView;
            m._currentView = b;
            if (!y || !(b[k].data == l.data && !p & !n))if (m._loadModelFromView(b), p)break
          }
        }
      }
  })(c.View);
  c.Cache = {fileCache: {}};
  c.Cache.get = function (b) {
    return c.Cache.fileCache[b]
  };
  c.Cache.put = function (b, f) {
    c.Cache.fileCache[b] = f
  };
  c.Cache.setDragDrop = function (b) {
    c.$appEvent(b, "appletdiv", "dragover", function (b) {
      b = b.originalEvent;
      b.stopPropagation();
      b.preventDefault();
      b.dataTransfer.dropEffect = "copy"
    });
    c.$appEvent(b, "appletdiv", "drop", function (f) {
      var g = f.originalEvent;
      g.stopPropagation();
      g.preventDefault();
      var j = g.dataTransfer.files[0];
      if (null == j)try {
        j = "" + g.dataTransfer.getData("text"), (0 == j.indexOf("file:/") || 0 == j.indexOf("http:/")) && b._scriptLoad(j)
      } catch (k) {
      } else g = new FileReader, g.onloadend = function (g) {
        if (g.target.readyState == FileReader.DONE) {
          var k = "cache://DROP_" + j.name;
          g = c._toBytes(g.target.result);
          b._applet.cacheFileByName("cache://DROP_*",
            !1);
          "JSV" == b._viewType || k.endsWith(".jdx") ? c.Cache.put(k, g) : b._applet.cachePut(k, g);
          (g = c._jsGetXY(b._canvas, f)) && (!b._applet.setStatusDragDropped || b._applet.setStatusDragDropped(0, g[0], g[1], k)) && b._applet.openFileAsyncSpecial(k, 1)
        }
      }, g.readAsArrayBuffer(j)
    })
  }
})(Jmol, jQuery);
Jmol._debugCode = !1;
Jmol._grabberOptions = [["$", "NCI(small molecules)"], [":", "PubChem(small molecules)"]];
Jmol.say = function (c) {
  alert(c)
};
Jmol._TMApplet = function (c, p, j) {
  this._uniqueId = ("" + Math.random()).substring(3);
  this._id = c;
  this._is2D = !0;
  this._isJava = !1;
  this._ready = !0;
  this._mouseDown = !1;
  this._jmolType = "Jmol._Canvas2D (TwirlyMol)";
  if (j)return this;
  this._createCanvas(c, p);
  return this
};
Jmol._TMApplet._getApplet = function (c, p, j) {
  if (!Jmol.featureDetection.allowHTML5)return null;
  j || (j = !1);
  p || (p = {});
  Jmol._addDefaultInfo(p, {
    color: "#FFFFFF",
    width: 300,
    height: 300,
    addSelectionOptions: !1,
    serverURL: "http://your.server.here/jsmol.php",
    defaultModel: "",
    readyFunction: null,
    use: "HTML5",
    bondWidth: 5,
    shadeAtoms: !1,
    zoomScaling: 1.5,
    pinchScaling: 2,
    mouseDragFactor: 0.5,
    touchDragFactor: 0.15,
    multipleBondSpacing: 4,
    spinRateX: 0,
    spinRateY: 0.5,
    spinFPS: 20,
    spin: !1,
    noscript: !0,
    debug: !1
  });
  p = new Jmol._TMApplet(c, p,
    j);
  return j ? p : Jmol._registerApplet(c, p)
};
Jmol.getTMApplet = Jmol._TMApplet._getApplet;
(function (c) {
  c._CPK = "#FF1493 #FFFFFF #D9FFFF #CC80FF #C2FF00 #FFB5B5 #909090 #3050F8 #FF0D0D #90E050 #B3E3F5 #AB5CF2 #8AFF00 #BFA6A6 #F0C8A0 #FF8000 #FFFF30 #1FF01F #80D1E3 #8F40D4 #3DFF00 #E6E6E6 #BFC2C7 #A6A6AB #8A99C7 #9C7AC7 #E06633 #F090A0 #50D050 #C88033 #7D80B0 #C28F8F #668F8F #BD80E3 #FFA100 #A62929 #5CB8D1 #702EB0 #00FF00 #94FFFF #94E0E0 #73C2C9 #54B5B5 #3B9E9E #248F8F #0A7D8C #006985 #C0C0C0 #FFD98F #A67573 #668080 #9E63B5 #D47A00 #940094 #429EB0 #57178F #00C900".split(" ");
  c._elem = "X H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es".split(" ");
  c._elemNo = {};
  var p = c.prototype;
  p.spin = function (c) {
    this.__Info.spin = c;
    this._spin(c)
  };
  p._spin = function (c) {
    this._spinThread && clearTimeout(this._spinThread);
    if (0 == this.spinFPS || 0 == this.spinRateX && 0 == this.spinRateY)c = !1;
    if (c) {
      var k = this;
      c = 1E3 / this.spinFPS;
      this._mouseDown || (this._rotate(this.spinRateY, this.spinRateX), this._draw());
      this._spinThread = setTimeout(function () {
        k._spin(!0)
      }, c)
    }
  };
  p._initParams = function () {
    this.zoom = this.__Info.defaultZoom || 100;
    this.doSpin = this.__Info.spin || !1;
    this.center2D = [this._canvas.width /
    2, this._canvas.height / 2, 0];
    this._getCenterAndRadius();
    this.rotation = new c.M3;
    this.shadeAtoms = !1;
    this._setParams()
  };
  p._setParams = function () {
    this.bondWidth = this.__Info.bondWidth || 5;
    this.zoomScaling = this.__Info.zoomScaling || 1.5;
    this.pinchScaling = this.__Info.pinchScaling || 1;
    this.mouseDragFactor = this.__Info.mouseDragFactor || 0.5;
    this.touchDragFactor = this.__Info.touchDragFactor || 0.15;
    this.multipleBondSpacing = this.__Info.multipleBondSpacing || 4;
    this.spinRateX = this.__Info.spinRateX || 0;
    this.spinRateY = this.__Info.spinRateY ||
      0;
    this.spinFPS = this.__Info.spinFPS || 0;
    var c = this.shadeAtoms;
    (this.shadeAtoms = this.__Info.shadeAtoms || !1) && !c && this._setAtomShades()
  };
  p._setAtomShades = function () {
    if (this.atoms)for (var c = this.atoms.length; 0 <= --c;)this.atoms[c].color50 = this._getColor(this.atoms[c].color, 0.5)
  };
  p._createCanvas = function (c, k) {
    Jmol._setObject(this, c, k);
    this._color = this._color.replace(/0x/, "#");
    var l = Jmol._getWrapper(this, !0);
    Jmol._document ? (Jmol._documentWrite(l), this._createCanvas2d(!1), l = "") : l += '<script type="text/javascript">' +
      c + "._createCanvas2d(false)\x3c/script>";
    l += Jmol._getWrapper(this, !1);
    k.addSelectionOptions && (l += Jmol._getGrabberOptions(this, ""));
    Jmol._debugAlert && !Jmol._document && alert(l);
    this._code = Jmol._documentWrite(l)
  };
  p._readyCallback = function (c, k, l, n) {
    l && (Jmol._setDestroy(this), this._ready = !0, c = this._readyScript, this._applet = n, this._defaultModel ? this._search(this._defaultModel, c ? ";" + c : "") : this._src && this._loadFile(this._src), this._showInfo(!0), this._showInfo(!1), this._readyFunction && this._readyFunction(this),
      Jmol._setReady(this))
  };
  p._createCanvas2d = function (c) {
    var k = document.createElement("canvas"), l = Jmol.$(this, "appletdiv");
    c && (l[0].removeChild(this._canvas), Jmol._jsUnsetMouse(this._canvas));
    c = Math.round(l.width());
    var n = Math.round(l.height());
    k.applet = this;
    this._canvas = k;
    k.style.width = "100%";
    k.style.height = "100%";
    k.width = c;
    k.height = n;
    k.id = this._id + "_canvas2d";
    l.append(k);
    setTimeout(this._id + "._start()", 10)
  };
  p._start = function () {
    Jmol._jsSetMouse(this._canvas);
    this._defaultModel ? Jmol._search(this, this._defaultModel) :
    this._src && this._loadFile(this._src);
    this._showInfo(!0);
    this._showInfo(!1)
  };
  p._search = function (c, k) {
    Jmol._search(this, c, k)
  };
  p._searchDatabase = function (c, k, l) {
    this._showInfo(!1);
    0 <= c.indexOf("?") ? Jmol._getInfoFromDatabase(this, k, c.split("?")[0]) : this._loadFile(k + c, l)
  };
  p.__loadModel = function (c) {
    this._spin(!1);
    "''" == c && (c = this._mol);
    c ? (this._parse(c), this._initParams(), this._draw(), this._showInfo(!1), this.doSpin && this._spin(!0)) : alert("No model data.")
  };
  p._showInfo = function (c) {
    Jmol.$html(Jmol.$(this,
      "infoheaderspan"), this._infoHeader);
    this._info && Jmol.$html(Jmol.$(this, "infodiv"), this._info);
    !this._isInfoVisible != !c && (this._isInfoVisible = c, Jmol.$setVisible(Jmol.$(this, "infotablediv"), c), Jmol.$setVisible(Jmol.$(this, "infoheaderdiv"), c), this._show(!c))
  };
  p._show = function (c) {
    Jmol.$setVisible(Jmol.$(this, "appletdiv"), c);
    c && this._draw()
  };
  p._resize = function () {
    var c = "__resizeTimeout_" + this._id;
    Jmol[c] && clearTimeout(Jmol[c]);
    var k = this;
    Jmol[c] = setTimeout(function () {
      k._draw();
      Jmol[c] = null
    }, 100)
  };
  p._canScript =
    function () {
      return !1
    };
  p._loadFile = function (c) {
    this._showInfo(!1);
    this._thisJmolModel = c;
    var k = this;
    Jmol._loadFileData(this, c, function (c) {
      k.__loadModel(c)
    })
  };
  p._processEvent = function (c, k) {
    switch (c) {
      case 502:
      case 503:
        this._mouseDown = !1;
      default:
        return;
      case 501:
        this._mouseX = k[0];
        this._mouseY = k[1];
        this._mouseDown = !0;
        return;
      case 506:
        var l = k[0] - this._mouseX, n = k[1] - this._mouseY, l = 0 > l ? -1 : 0 < l ? 1 : 0, n = 0 > n ? -1 : 0 < n ? 1 : 0;
        switch (k[2]) {
          case 17:
            this._zoomBy(n);
            break;
          case 24:
            this.center2D[0] += l;
            this.center2D[1] += n;
            break;
          default:
            this._rotate(l, n)
        }
        this._mouseX = k[0];
        this._mouseY = k[1];
        break;
      case -1:
        this._zoomBy(k[1])
    }
    this._draw()
  };
  p._processGesture = function (j) {
    if (!(2 > j[0].length)) {
      var k = j[0], l = j[1], n = k[0], m = k[l.length - 1];
      j = n[0];
      var p = m[0], n = n[1], m = m[1], b = [p - j, m - n, 0], f = c._length(b), g = l[0], q = l[l.length - 1], l = g[0], t = q[0], g = g[1], q = q[1], D = [t - l, q - g, 0], G = c._length(D);
      3 > f || 3 > G || (c._scale(b, 1 / f), c._scale(D, 1 / G), b = c._dot(b, D), 0.8 < b ? (j = Math.round(p - k[k.length - 2][0]), k = Math.round(m - k[k.length - 2][1]), this.center2D[0] += j, this.center2D[1] +=
        k) : -0.8 > b && (b = [l - j, g - n, 0], D = [t - p, q - m, 0], k = c._length(D) - c._length(b), this.zoom += (0 > k ? -1 : 1) * this.pinchScaling), this._draw())
    }
  };
  p._zoomBy = function (c) {
    this.zoom += c * this.zoomScaling;
    5 > this.zoom && (this.zoom = 5);
    500 < this.zoom && (this.zoom = 500)
  };
  p._getRotationScaling = function () {
    return [1 / Math.max(this._canvas.width, 500) * this.mouseDragFactor * c.deg_per_radian, 1 / Math.max(this._canvas.height, 500) * this.mouseDragFactor * c.deg_per_radian]
  };
  p._rotate = function (j, k) {
    var l = this._getRotationScaling();
    k && (c._m3.rotX(k * l[1]),
      this.rotation.mul(c._m3));
    j && (c._m3.rotY(j * l[0]), this.rotation.mul(c._m3))
  };
  p._getCenterAndRadius = function () {
    Math.min(this._canvas.width, this._canvas.height);
    for (var j = [999999, 999999, 999999], k = [-999999, -999999, -999999], l = this.atoms.length; 0 <= --l;)for (var n = 3; 0 <= --n;) {
      var m = this.atoms[l].xyz[n];
      m < j[n] && (j[n] = m);
      m > k[n] && (k[n] = m)
    }
    m = [0, 0, 0];
    for (n = 3; 0 <= --n;)m[n] = (k[n] + j[n]) / 2;
    j = 0;
    for (l = this.atoms.length; 0 <= --l;)k = this.atoms[l], k = c._distance(k.xyz, m) + (1 == k.elemNo ? 1 : 1.5), k > j && (j = k);
    this.center = m;
    this.modelRadius =
      0 == j ? 10 : j
  };
  p._setScreenCoords = function () {
    for (var c = this.center, k = this.rotation, l = this.center2D, n = Math.min(this._canvas.width, this._canvas.height) / 2 / this.modelRadius * this.zoom / 100, m = this.atoms.length; 0 <= --m;) {
      var p = this.atoms[m];
      this._transform(p.xyz, p.sxyz, c, k, n, l);
      p.srad = n * p.radius
    }
    for (m = this.bonds.length; 0 <= --m;)p = this.bonds[m], this._transform(p.xyz, p.sxyz, c, k, n, l), this._transform(p.pts[0], p.spts[0], c, k, n, l), this._transform(p.pts[1], p.spts[1], c, k, n, l)
  };
  p._transform = function (j, k, l, n, m, p) {
    for (var b =
      c._temp1, f = c._temp2, g = 3; 0 <= --g;)b[g] = (j[g] - l[g]) * m;
    n.transform(b, f);
    f[1] = -f[1];
    f[2] = -f[2];
    for (g = 3; 0 <= --g;)k[g] = f[g] + p[g]
  };
  p._parse = function (c) {
    this._parseSDF(c)
  };
  p._parseSDF = function (j) {
    this._mol = j;
    if (!c._elemNo.H)for (var k = c._elem.length; 0 <= --k;)c._elemNo[c._elem[k]] = k;
    j = j.split("\n");
    var l = 3, n = j[l++];
    this.nAtoms = parseFloat(n.substring(0, 3));
    this.nBonds = parseFloat(n.substring(3, 6));
    this.atoms = Array(this.nAtoms);
    this.bonds = Array(this.nBonds);
    this.elements = Array(this.nAtoms + this.nBonds);
    for (var m =
      0, p, b, f, k = 0; k < this.nAtoms; k++) {
      n = j[l++];
      p = parseFloat(n.substring(0, 10));
      b = parseFloat(n.substring(10, 20));
      f = parseFloat(n.substring(20, 30));
      var n = n.substring(31, 34).replace(/\s+/g, ""), n = c._elemNo[n] || 0, g = 1 == n ? 0.23 : 0.35, q = c._CPK[n] || c._CPK[0];
      this.elements[m++] = this.atoms[k] = {
        type: 0,
        elemNo: n,
        xyz: [p, b, f],
        sxyz: [0, 0, 0],
        radius: g,
        color: q,
        color50: q
      }
    }
    for (k = 0; k < this.nBonds; k++) {
      n = j[l++];
      p = this.atoms[parseFloat(n.substring(0, 3)) - 1];
      b = this.atoms[parseFloat(n.substring(3, 6)) - 1];
      f = Math.abs(parseFloat(n.substring(6,
        9)));
      switch (f) {
        case 4:
        case 5:
        case 6:
        case 8:
          f = 1;
          break;
        case 7:
          f = 2
      }
      n = c._getPointAlong(p.xyz, b.xyz, 0.5);
      q = c._distance(p.xyz, n);
      g = p.radius < q ? c._getPointAlong(p.xyz, n, p.radius / q) : [0, 0, 99999];
      q = b.radius < q ? c._getPointAlong(b.xyz, n, b.radius / q) : [0, 0, 99999];
      this.elements[m++] = this.bonds[k] = {
        type: 1,
        atoms: [p, b],
        xyz: n,
        pts: [g, q],
        sxyz: [0, 0, 0],
        spts: [[0, 0, 0], [0, 0, 0]],
        order: f,
        color: 0
      }
    }
  };
  p._getColor = function (c, k) {
    "#FFFFFF" == c && (c = "#D0D0D0");
    var l = parseInt("0x" + c.substring(1), 16), n = l >> 16 & 255, m = l >> 8 & 255, l = l & 255;
    255 != n &&
    (n += Math.floor((255 - n) * k));
    255 != m && (m += Math.floor((255 - m) * k));
    255 != l && (l += Math.floor((255 - l) * k));
    n = "000000" + (n << 16 | m << 8 | l).toString(16);
    return "#" + n.substring(n.length - 6, n.length)
  };
  p._draw = function () {
    if (this.atoms) {
      this._setParams();
      this._setScreenCoords();
      var j = this.elements;
      j.sort(c._zorder);
      var k = this._canvas.getContext("2d");
      k.fillStyle = this._color;
      k.fillRect(0, 0, this._canvas.width, this._canvas.height);
      for (var l = j.length; 0 <= --l;) {
        var n = j[l];
        0 == n.type ? this._drawAtom(k, n) : this._drawBond(k, n)
      }
    }
  };
  p._drawAtom = function (j, k) {
    j.beginPath();
    if (this.shadeAtoms) {
      var l = k.srad / 4, l = j.createRadialGradient(k.sxyz[0] - l, k.sxyz[1] - l, l, k.sxyz[0], k.sxyz[1], k.srad);
      l.addColorStop(0, k.color50);
      l.addColorStop(1, "#FFFFFF" == k.color ? "#D0D0D0" : k.color);
      j.fillStyle = l;
      j.arc(k.sxyz[0], k.sxyz[1], k.srad, 0, c._pi2);
      j.fill()
    } else j.fillStyle = k.color, j.arc(k.sxyz[0], k.sxyz[1], k.srad, 0, c._pi2), j.fill(), j.strokeStyle = "#000000", j.lineWidth = 1, j.stroke()
  };
  p._drawBond = function (c, k) {
    99999 != k.pts[0][2] && this._drawBondLines(c, k, k.spts[0],
      k.atoms[0].color);
    99999 != k.pts[1][2] && this._drawBondLines(c, k, k.spts[1], k.atoms[1].color)
  };
  p._drawBondLines = function (j, k, l, n) {
    var m = c._temp;
    m.width = this.bondWidth;
    m.color = k.color ? k.color : n;
    if (1 == k.order)m.pt1 = l, m.pt2 = k.sxyz, this._drawLine(j, m); else {
      m.pt1 = c._temp1;
      m.pt2 = c._temp2;
      m.pta = l;
      m.ptb = k.sxyz;
      m.dx = m.ptb[0] - m.pta[0];
      m.dy = m.ptb[1] - m.pta[1];
      m.mag2d = Math.round(Math.sqrt(m.dx * m.dx + m.dy * m.dy));
      m.bondOrder = k.order;
      for (this._resetAxisCoordinates(m); 0 < m.bondOrder;)this._drawLine(j, m), m.bondOrder--, this._stepAxisCoordinates(m)
    }
  };
  p._drawLine = function (c, k) {
    c.beginPath();
    c.strokeStyle = k.color;
    c.moveTo(k.pt1[0], k.pt1[1]);
    c.lineTo(k.pt2[0], k.pt2[1]);
    c.lineWidth = k.width;
    c.stroke()
  };
  p._resetAxisCoordinates = function (c) {
    var k = c.mag2d >> 3;
    1 != this.multipleBondSpacing && (k *= this.multipleBondSpacing);
    k = c.width + k;
    c.dxStep = Math.round(k * c.dy / c.mag2d);
    c.dyStep = Math.round(k * -c.dx / c.mag2d);
    c.pt1[0] = c.pta[0];
    c.pt1[1] = c.pta[1];
    c.pt2[0] = c.ptb[0];
    c.pt2[1] = c.ptb[1];
    k = c.bondOrder - 1;
    c.pt1[0] -= Math.round(c.dxStep * k / 2);
    c.pt1[1] -= Math.round(c.dyStep * k /
      2);
    c.pt2[0] -= Math.round(c.dxStep * k / 2);
    c.pt2[1] -= Math.round(c.dyStep * k / 2)
  };
  p._stepAxisCoordinates = function (c) {
    c.pt1[0] += c.dxStep;
    c.pt1[1] += c.dyStep;
    c.pt2[0] += c.dxStep;
    c.pt2[1] += c.dyStep
  };
  c._distance = function (c, k) {
    for (var l = 0, n = 3; 0 <= --n;)var m = c[n] - k[n], l = l + m * m;
    return Math.sqrt(l)
  };
  c._dot = function (c, k) {
    for (var l = 0, n = 3; 0 <= --n;)l += c[n] * k[n];
    return l
  };
  c._setPt = function (c, k) {
    for (var l = 3; 0 <= --l;)k[l] = c[l];
    return k
  };
  c._scale = function (c, k) {
    for (var l = 3; 0 <= --l;)c[l] *= k
  };
  c._length = function (c) {
    for (var k = 0, l = 3; 0 <= --l;)k += c[l] * c[l];
    return Math.sqrt(k)
  };
  c._getPointAlong = function (c, k, l) {
    return [(k[0] - c[0]) * l + c[0], (k[1] - c[1]) * l + c[1], (k[2] - c[2]) * l + c[2]]
  };
  c._zorder = function (c, k) {
    var l = c.sxyz[2], n = k.sxyz[2];
    return l < n ? -1 : l > n ? 1 : 0
  };
  c.M3 = function () {
    this.m00 = 1;
    this.m10 = this.m02 = this.m01 = 0;
    this.m11 = 1;
    this.m21 = this.m20 = this.m12 = 0;
    this.m22 = 1
  };
  c.M3.prototype.set = function (c, k, l, n, m, p, b, f, g) {
    this.m00 = c;
    this.m01 = k;
    this.m02 = l;
    this.m10 = n;
    this.m11 = m;
    this.m12 = p;
    this.m20 = b;
    this.m21 = f;
    this.m22 = g
  };
  c.M3.prototype.transform = function (c,
                                       k) {
    k[0] = this.m00 * c[0] + this.m01 * c[1] + this.m02 * c[2];
    k[1] = this.m10 * c[0] + this.m11 * c[1] + this.m12 * c[2];
    k[2] = this.m20 * c[0] + this.m21 * c[1] + this.m22 * c[2]
  };
  c.M3.prototype.rotX = function (c) {
    var k = Math.cos(c);
    c = Math.sin(c);
    this.m00 = 1;
    this.m10 = this.m02 = this.m01 = 0;
    this.m11 = k;
    this.m12 = -c;
    this.m20 = 0;
    this.m21 = c;
    this.m22 = k
  };
  c.M3.prototype.rotY = function (c) {
    var k = Math.cos(c);
    c = Math.sin(c);
    this.m00 = k;
    this.m01 = 0;
    this.m02 = c;
    this.m10 = 0;
    this.m11 = 1;
    this.m12 = 0;
    this.m20 = -c;
    this.m21 = 0;
    this.m22 = k
  };
  c.M3.prototype.mul = function (c) {
    this.set(c.m00 *
      this.m00 + c.m01 * this.m10 + c.m02 * this.m20, c.m00 * this.m01 + c.m01 * this.m11 + c.m02 * this.m21, c.m00 * this.m02 + c.m01 * this.m12 + c.m02 * this.m22, c.m10 * this.m00 + c.m11 * this.m10 + c.m12 * this.m20, c.m10 * this.m01 + c.m11 * this.m11 + c.m12 * this.m21, c.m10 * this.m02 + c.m11 * this.m12 + c.m12 * this.m22, c.m20 * this.m00 + c.m21 * this.m10 + c.m22 * this.m20, c.m20 * this.m01 + c.m21 * this.m11 + c.m22 * this.m21, c.m20 * this.m02 + c.m21 * this.m12 + c.m22 * this.m22)
  };
  c._pi2 = 2 * Math.PI;
  c.deg_per_radian = 180 / Math.PI;
  c._z3 = [0, 0, 0];
  c._temp1 = [0, 0, 0];
  c._temp2 = [0, 0, 0];
  c._temp =
  {};
  c._m3 = new c.M3
})(Jmol._TMApplet);
