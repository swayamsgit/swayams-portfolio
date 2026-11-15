var Cp = Object.defineProperty;
var Np = (e, t, n) => t in e ? Cp(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var J = (e, t, n) => Np(e, typeof t != "symbol" ? t + "" : t, n);

function Pp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i && Object.defineProperty(e, l, i.get ? i : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
})();

function Lp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var bu = {
        exports: {}
    },
    di = {},
    ec = {
        exports: {}
    },
    K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr = Symbol.for("react.element"),
    jp = Symbol.for("react.portal"),
    Rp = Symbol.for("react.fragment"),
    Tp = Symbol.for("react.strict_mode"),
    Mp = Symbol.for("react.profiler"),
    Ip = Symbol.for("react.provider"),
    Op = Symbol.for("react.context"),
    $p = Symbol.for("react.forward_ref"),
    Ap = Symbol.for("react.suspense"),
    Up = Symbol.for("react.memo"),
    zp = Symbol.for("react.lazy"),
    xa = Symbol.iterator;

function Fp(e) {
    return e === null || typeof e != "object" ? null : (e = xa && e[xa] || e["@@iterator"], typeof e == "function" ? e : null)
}
var tc = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    nc = Object.assign,
    rc = {};

function rr(e, t, n) {
    this.props = e, this.context = t, this.refs = rc, this.updater = n || tc
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
rr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function lc() {}
lc.prototype = rr.prototype;

function ds(e, t, n) {
    this.props = e, this.context = t, this.refs = rc, this.updater = n || tc
}
var ps = ds.prototype = new lc;
ps.constructor = ds;
nc(ps, rr.prototype);
ps.isPureReactComponent = !0;
var Ea = Array.isArray,
    ic = Object.prototype.hasOwnProperty,
    hs = {
        current: null
    },
    oc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function sc(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) ic.call(t, r) && !oc.hasOwnProperty(r) && (l[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) l.children = n;
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
    return {
        $$typeof: Jr,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: hs.current
    }
}

function Dp(e, t) {
    return {
        $$typeof: Jr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function ms(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Jr
}

function Bp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ca = /\/+/g;

function Ii(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Bp("" + e.key) : t.toString(36)
}

function Cl(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Jr:
                case jp:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + Ii(o, 0) : r, Ea(l) ? (n = "", e != null && (n = e.replace(Ca, "$&/") + "/"), Cl(l, t, n, "", function(u) {
        return u
    })) : l != null && (ms(l) && (l = Dp(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ca, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Ea(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var a = r + Ii(i, s);
            o += Cl(i, t, n, a, l)
        } else if (a = Fp(e), typeof a == "function")
            for (e = a.call(e), s = 0; !(i = e.next()).done;) i = i.value, a = r + Ii(i, s++), o += Cl(i, t, n, a, l);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function ol(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Cl(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }), r
}

function Wp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var je = {
        current: null
    },
    Nl = {
        transition: null
    },
    Kp = {
        ReactCurrentDispatcher: je,
        ReactCurrentBatchConfig: Nl,
        ReactCurrentOwner: hs
    };

function ac() {
    throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
    map: ol,
    forEach: function(e, t, n) {
        ol(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ol(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ol(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ms(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = rr;
K.Fragment = Rp;
K.Profiler = Mp;
K.PureComponent = ds;
K.StrictMode = Tp;
K.Suspense = Ap;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp;
K.act = ac;
K.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = nc({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, o = hs.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (a in t) ic.call(t, a) && !oc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: Jr,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
};
K.createContext = function(e) {
    return e = {
        $$typeof: Op,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Ip,
        _context: e
    }, e.Consumer = e
};
K.createElement = sc;
K.createFactory = function(e) {
    var t = sc.bind(null, e);
    return t.type = e, t
};
K.createRef = function() {
    return {
        current: null
    }
};
K.forwardRef = function(e) {
    return {
        $$typeof: $p,
        render: e
    }
};
K.isValidElement = ms;
K.lazy = function(e) {
    return {
        $$typeof: zp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Wp
    }
};
K.memo = function(e, t) {
    return {
        $$typeof: Up,
        type: e,
        compare: t === void 0 ? null : t
    }
};
K.startTransition = function(e) {
    var t = Nl.transition;
    Nl.transition = {};
    try {
        e()
    } finally {
        Nl.transition = t
    }
};
K.unstable_act = ac;
K.useCallback = function(e, t) {
    return je.current.useCallback(e, t)
};
K.useContext = function(e) {
    return je.current.useContext(e)
};
K.useDebugValue = function() {};
K.useDeferredValue = function(e) {
    return je.current.useDeferredValue(e)
};
K.useEffect = function(e, t) {
    return je.current.useEffect(e, t)
};
K.useId = function() {
    return je.current.useId()
};
K.useImperativeHandle = function(e, t, n) {
    return je.current.useImperativeHandle(e, t, n)
};
K.useInsertionEffect = function(e, t) {
    return je.current.useInsertionEffect(e, t)
};
K.useLayoutEffect = function(e, t) {
    return je.current.useLayoutEffect(e, t)
};
K.useMemo = function(e, t) {
    return je.current.useMemo(e, t)
};
K.useReducer = function(e, t, n) {
    return je.current.useReducer(e, t, n)
};
K.useRef = function(e) {
    return je.current.useRef(e)
};
K.useState = function(e) {
    return je.current.useState(e)
};
K.useSyncExternalStore = function(e, t, n) {
    return je.current.useSyncExternalStore(e, t, n)
};
K.useTransition = function() {
    return je.current.useTransition()
};
K.version = "18.3.1";
ec.exports = K;
var N = ec.exports;
const uc = Lp(N),
    Vp = Pp({
        __proto__: null,
        default: uc
    }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hp = N,
    Qp = Symbol.for("react.element"),
    Yp = Symbol.for("react.fragment"),
    qp = Object.prototype.hasOwnProperty,
    Gp = Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Xp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function cc(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) qp.call(t, r) && !Xp.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Qp,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Gp.current
    }
}
di.Fragment = Yp;
di.jsx = cc;
di.jsxs = cc;
bu.exports = di;
var m = bu.exports,
    fc = {
        exports: {}
    },
    We = {},
    dc = {
        exports: {}
    },
    pc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(I, B) {
        var W = I.length;
        I.push(B);
        e: for (; 0 < W;) {
            var ee = W - 1 >>> 1,
                se = I[ee];
            if (0 < l(se, B)) I[ee] = B, I[W] = se, W = ee;
            else break e
        }
    }

    function n(I) {
        return I.length === 0 ? null : I[0]
    }

    function r(I) {
        if (I.length === 0) return null;
        var B = I[0],
            W = I.pop();
        if (W !== B) {
            I[0] = W;
            e: for (var ee = 0, se = I.length, Lt = se >>> 1; ee < Lt;) {
                var dt = 2 * (ee + 1) - 1,
                    Nn = I[dt],
                    pt = dt + 1,
                    ht = I[pt];
                if (0 > l(Nn, W)) pt < se && 0 > l(ht, Nn) ? (I[ee] = ht, I[pt] = W, ee = pt) : (I[ee] = Nn, I[dt] = W, ee = dt);
                else if (pt < se && 0 > l(ht, W)) I[ee] = ht, I[pt] = W, ee = pt;
                else break e
            }
        }
        return B
    }

    function l(I, B) {
        var W = I.sortIndex - B.sortIndex;
        return W !== 0 ? W : I.id - B.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            s = o.now();
        e.unstable_now = function() {
            return o.now() - s
        }
    }
    var a = [],
        u = [],
        c = 1,
        p = null,
        f = 3,
        _ = !1,
        g = !1,
        w = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(I) {
        for (var B = n(u); B !== null;) {
            if (B.callback === null) r(u);
            else if (B.startTime <= I) r(u), B.sortIndex = B.expirationTime, t(a, B);
            else break;
            B = n(u)
        }
    }

    function C(I) {
        if (w = !1, v(I), !g)
            if (n(a) !== null) g = !0, Pt(R);
            else {
                var B = n(u);
                B !== null && Cn(C, B.startTime - I)
            }
    }

    function R(I, B) {
        g = !1, w && (w = !1, h(M), M = -1), _ = !0;
        var W = f;
        try {
            for (v(B), p = n(a); p !== null && (!(p.expirationTime > B) || I && !V());) {
                var ee = p.callback;
                if (typeof ee == "function") {
                    p.callback = null, f = p.priorityLevel;
                    var se = ee(p.expirationTime <= B);
                    B = e.unstable_now(), typeof se == "function" ? p.callback = se : p === n(a) && r(a), v(B)
                } else r(a);
                p = n(a)
            }
            if (p !== null) var Lt = !0;
            else {
                var dt = n(u);
                dt !== null && Cn(C, dt.startTime - B), Lt = !1
            }
            return Lt
        } finally {
            p = null, f = W, _ = !1
        }
    }
    var P = !1,
        j = null,
        M = -1,
        Q = 5,
        $ = -1;

    function V() {
        return !(e.unstable_now() - $ < Q)
    }

    function Te() {
        if (j !== null) {
            var I = e.unstable_now();
            $ = I;
            var B = !0;
            try {
                B = j(!0, I)
            } finally {
                B ? ft() : (P = !1, j = null)
            }
        } else P = !1
    }
    var ft;
    if (typeof d == "function") ft = function() {
        d(Te)
    };
    else if (typeof MessageChannel < "u") {
        var Nt = new MessageChannel,
            En = Nt.port2;
        Nt.port1.onmessage = Te, ft = function() {
            En.postMessage(null)
        }
    } else ft = function() {
        E(Te, 0)
    };

    function Pt(I) {
        j = I, P || (P = !0, ft())
    }

    function Cn(I, B) {
        M = E(function() {
            I(e.unstable_now())
        }, B)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
        I.callback = null
    }, e.unstable_continueExecution = function() {
        g || _ || (g = !0, Pt(R))
    }, e.unstable_forceFrameRate = function(I) {
        0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < I ? Math.floor(1e3 / I) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return f
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(I) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var B = 3;
                break;
            default:
                B = f
        }
        var W = f;
        f = B;
        try {
            return I()
        } finally {
            f = W
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(I, B) {
        switch (I) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                I = 3
        }
        var W = f;
        f = I;
        try {
            return B()
        } finally {
            f = W
        }
    }, e.unstable_scheduleCallback = function(I, B, W) {
        var ee = e.unstable_now();
        switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ee + W : ee) : W = ee, I) {
            case 1:
                var se = -1;
                break;
            case 2:
                se = 250;
                break;
            case 5:
                se = 1073741823;
                break;
            case 4:
                se = 1e4;
                break;
            default:
                se = 5e3
        }
        return se = W + se, I = {
            id: c++,
            callback: B,
            priorityLevel: I,
            startTime: W,
            expirationTime: se,
            sortIndex: -1
        }, W > ee ? (I.sortIndex = W, t(u, I), n(a) === null && I === n(u) && (w ? (h(M), M = -1) : w = !0, Cn(C, W - ee))) : (I.sortIndex = se, t(a, I), g || _ || (g = !0, Pt(R))), I
    }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(I) {
        var B = f;
        return function() {
            var W = f;
            f = B;
            try {
                return I.apply(this, arguments)
            } finally {
                f = W
            }
        }
    }
})(pc);
dc.exports = pc;
var Zp = dc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp = N,
    Be = Zp;

function L(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var hc = new Set,
    Mr = {};

function wn(e, t) {
    qn(e, t), qn(e + "Capture", t)
}

function qn(e, t) {
    for (Mr[e] = t, e = 0; e < t.length; e++) hc.add(t[e])
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ho = Object.prototype.hasOwnProperty,
    bp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Na = {},
    Pa = {};

function eh(e) {
    return ho.call(Pa, e) ? !0 : ho.call(Na, e) ? !1 : bp.test(e) ? Pa[e] = !0 : (Na[e] = !0, !1)
}

function th(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function nh(e, t, n, r) {
    if (t === null || typeof t > "u" || th(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Re(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    we[e] = new Re(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    we[t] = new Re(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    we[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    we[e] = new Re(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    we[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    we[e] = new Re(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    we[e] = new Re(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    we[e] = new Re(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    we[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var gs = /[\-:]([a-z])/g;

function vs(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(gs, vs);
    we[t] = new Re(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(gs, vs);
    we[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(gs, vs);
    we[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    we[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
we.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    we[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ys(e, t, n, r) {
    var l = we.hasOwnProperty(t) ? we[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (nh(t, n, l, r) && (n = null), r || l === null ? eh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ct = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    sl = Symbol.for("react.element"),
    Rn = Symbol.for("react.portal"),
    Tn = Symbol.for("react.fragment"),
    _s = Symbol.for("react.strict_mode"),
    mo = Symbol.for("react.profiler"),
    mc = Symbol.for("react.provider"),
    gc = Symbol.for("react.context"),
    ws = Symbol.for("react.forward_ref"),
    go = Symbol.for("react.suspense"),
    vo = Symbol.for("react.suspense_list"),
    ks = Symbol.for("react.memo"),
    Mt = Symbol.for("react.lazy"),
    vc = Symbol.for("react.offscreen"),
    La = Symbol.iterator;

function ar(e) {
    return e === null || typeof e != "object" ? null : (e = La && e[La] || e["@@iterator"], typeof e == "function" ? e : null)
}
var re = Object.assign,
    Oi;

function yr(e) {
    if (Oi === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Oi = t && t[1] || ""
    }
    return `
` + Oi + e
}
var $i = !1;

function Ai(e, t) {
    if (!e || $i) return "";
    $i = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var l = u.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, s = i.length - 1; 1 <= o && 0 <= s && l[o] !== i[s];) s--;
            for (; 1 <= o && 0 <= s; o--, s--)
                if (l[o] !== i[s]) {
                    if (o !== 1 || s !== 1)
                        do
                            if (o--, s--, 0 > s || l[o] !== i[s]) {
                                var a = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            } while (1 <= o && 0 <= s);
                    break
                }
        }
    } finally {
        $i = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? yr(e) : ""
}

function rh(e) {
    switch (e.tag) {
        case 5:
            return yr(e.type);
        case 16:
            return yr("Lazy");
        case 13:
            return yr("Suspense");
        case 19:
            return yr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ai(e.type, !1), e;
        case 11:
            return e = Ai(e.type.render, !1), e;
        case 1:
            return e = Ai(e.type, !0), e;
        default:
            return ""
    }
}

function yo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Tn:
            return "Fragment";
        case Rn:
            return "Portal";
        case mo:
            return "Profiler";
        case _s:
            return "StrictMode";
        case go:
            return "Suspense";
        case vo:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case gc:
            return (e.displayName || "Context") + ".Consumer";
        case mc:
            return (e._context.displayName || "Context") + ".Provider";
        case ws:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ks:
            return t = e.displayName || null, t !== null ? t : yo(e.type) || "Memo";
        case Mt:
            t = e._payload, e = e._init;
            try {
                return yo(e(t))
            } catch {}
    }
    return null
}

function lh(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return yo(t);
        case 8:
            return t === _s ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Xt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function yc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function ih(e) {
    var t = yc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function al(e) {
    e._valueTracker || (e._valueTracker = ih(e))
}

function _c(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = yc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Dl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function _o(e, t) {
    var n = t.checked;
    return re({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function ja(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Xt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function wc(e, t) {
    t = t.checked, t != null && ys(e, "checked", t, !1)
}

function wo(e, t) {
    wc(e, t);
    var n = Xt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ko(e, t.type, n) : t.hasOwnProperty("defaultValue") && ko(e, t.type, Xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ra(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ko(e, t, n) {
    (t !== "number" || Dl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var _r = Array.isArray;

function Wn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Xt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function So(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
    return re({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Ta(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(L(92));
            if (_r(n)) {
                if (1 < n.length) throw Error(L(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Xt(n)
    }
}

function kc(e, t) {
    var n = Xt(t.value),
        r = Xt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ma(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Sc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function xo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Sc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ul, xc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ul = ul || document.createElement("div"), ul.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ul.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Ir(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var xr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    oh = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function(e) {
    oh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), xr[t] = xr[e]
    })
});

function Ec(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px"
}

function Cc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Ec(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var sh = re({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Eo(e, t) {
    if (t) {
        if (sh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(L(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(L(62))
    }
}

function Co(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var No = null;

function Ss(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Po = null,
    Kn = null,
    Vn = null;

function Ia(e) {
    if (e = tl(e)) {
        if (typeof Po != "function") throw Error(L(280));
        var t = e.stateNode;
        t && (t = vi(t), Po(e.stateNode, e.type, t))
    }
}

function Nc(e) {
    Kn ? Vn ? Vn.push(e) : Vn = [e] : Kn = e
}

function Pc() {
    if (Kn) {
        var e = Kn,
            t = Vn;
        if (Vn = Kn = null, Ia(e), t)
            for (e = 0; e < t.length; e++) Ia(t[e])
    }
}

function Lc(e, t) {
    return e(t)
}

function jc() {}
var Ui = !1;

function Rc(e, t, n) {
    if (Ui) return e(t, n);
    Ui = !0;
    try {
        return Lc(e, t, n)
    } finally {
        Ui = !1, (Kn !== null || Vn !== null) && (jc(), Pc())
    }
}

function Or(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = vi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(L(231, t, typeof n));
    return n
}
var Lo = !1;
if (kt) try {
    var ur = {};
    Object.defineProperty(ur, "passive", {
        get: function() {
            Lo = !0
        }
    }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur)
} catch {
    Lo = !1
}

function ah(e, t, n, r, l, i, o, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Er = !1,
    Bl = null,
    Wl = !1,
    jo = null,
    uh = {
        onError: function(e) {
            Er = !0, Bl = e
        }
    };

function ch(e, t, n, r, l, i, o, s, a) {
    Er = !1, Bl = null, ah.apply(uh, arguments)
}

function fh(e, t, n, r, l, i, o, s, a) {
    if (ch.apply(this, arguments), Er) {
        if (Er) {
            var u = Bl;
            Er = !1, Bl = null
        } else throw Error(L(198));
        Wl || (Wl = !0, jo = u)
    }
}

function kn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Tc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Oa(e) {
    if (kn(e) !== e) throw Error(L(188))
}

function dh(e) {
    var t = e.alternate;
    if (!t) {
        if (t = kn(e), t === null) throw Error(L(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return Oa(l), e;
                if (i === r) return Oa(l), t;
                i = i.sibling
            }
            throw Error(L(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var o = !1, s = l.child; s;) {
                if (s === n) {
                    o = !0, n = l, r = i;
                    break
                }
                if (s === r) {
                    o = !0, r = l, n = i;
                    break
                }
                s = s.sibling
            }
            if (!o) {
                for (s = i.child; s;) {
                    if (s === n) {
                        o = !0, n = i, r = l;
                        break
                    }
                    if (s === r) {
                        o = !0, r = i, n = l;
                        break
                    }
                    s = s.sibling
                }
                if (!o) throw Error(L(189))
            }
        }
        if (n.alternate !== r) throw Error(L(190))
    }
    if (n.tag !== 3) throw Error(L(188));
    return n.stateNode.current === n ? e : t
}

function Mc(e) {
    return e = dh(e), e !== null ? Ic(e) : null
}

function Ic(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Ic(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Oc = Be.unstable_scheduleCallback,
    $a = Be.unstable_cancelCallback,
    ph = Be.unstable_shouldYield,
    hh = Be.unstable_requestPaint,
    oe = Be.unstable_now,
    mh = Be.unstable_getCurrentPriorityLevel,
    xs = Be.unstable_ImmediatePriority,
    $c = Be.unstable_UserBlockingPriority,
    Kl = Be.unstable_NormalPriority,
    gh = Be.unstable_LowPriority,
    Ac = Be.unstable_IdlePriority,
    pi = null,
    ut = null;

function vh(e) {
    if (ut && typeof ut.onCommitFiberRoot == "function") try {
        ut.onCommitFiberRoot(pi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : wh,
    yh = Math.log,
    _h = Math.LN2;

function wh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yh(e) / _h | 0) | 0
}
var cl = 64,
    fl = 4194304;

function wr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Vl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var s = o & ~l;
        s !== 0 ? r = wr(s) : (i &= o, i !== 0 && (r = wr(i)))
    } else o = n & ~l, o !== 0 ? r = wr(o) : i !== 0 && (r = wr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - nt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function kh(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Sh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - nt(i),
            s = 1 << o,
            a = l[o];
        a === -1 ? (!(s & n) || s & r) && (l[o] = kh(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s
    }
}

function Ro(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Uc() {
    var e = cl;
    return cl <<= 1, !(cl & 4194240) && (cl = 64), e
}

function zi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function br(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n
}

function xh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - nt(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function Es(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - nt(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var q = 0;

function zc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Fc, Cs, Dc, Bc, Wc, To = !1,
    dl = [],
    Bt = null,
    Wt = null,
    Kt = null,
    $r = new Map,
    Ar = new Map,
    At = [],
    Eh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Aa(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Bt = null;
            break;
        case "dragenter":
        case "dragleave":
            Wt = null;
            break;
        case "mouseover":
        case "mouseout":
            Kt = null;
            break;
        case "pointerover":
        case "pointerout":
            $r.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ar.delete(t.pointerId)
    }
}

function cr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = tl(t), t !== null && Cs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Ch(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Bt = cr(Bt, e, t, n, r, l), !0;
        case "dragenter":
            return Wt = cr(Wt, e, t, n, r, l), !0;
        case "mouseover":
            return Kt = cr(Kt, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return $r.set(i, cr($r.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, Ar.set(i, cr(Ar.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Kc(e) {
    var t = un(e.target);
    if (t !== null) {
        var n = kn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Tc(n), t !== null) {
                    e.blockedOn = t, Wc(e.priority, function() {
                        Dc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Pl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            No = r, n.target.dispatchEvent(r), No = null
        } else return t = tl(n), t !== null && Cs(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Ua(e, t, n) {
    Pl(e) && n.delete(t)
}

function Nh() {
    To = !1, Bt !== null && Pl(Bt) && (Bt = null), Wt !== null && Pl(Wt) && (Wt = null), Kt !== null && Pl(Kt) && (Kt = null), $r.forEach(Ua), Ar.forEach(Ua)
}

function fr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, To || (To = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Nh)))
}

function Ur(e) {
    function t(l) {
        return fr(l, e)
    }
    if (0 < dl.length) {
        fr(dl[0], e);
        for (var n = 1; n < dl.length; n++) {
            var r = dl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Bt !== null && fr(Bt, e), Wt !== null && fr(Wt, e), Kt !== null && fr(Kt, e), $r.forEach(t), Ar.forEach(t), n = 0; n < At.length; n++) r = At[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < At.length && (n = At[0], n.blockedOn === null);) Kc(n), n.blockedOn === null && At.shift()
}
var Hn = Ct.ReactCurrentBatchConfig,
    Hl = !0;

function Ph(e, t, n, r) {
    var l = q,
        i = Hn.transition;
    Hn.transition = null;
    try {
        q = 1, Ns(e, t, n, r)
    } finally {
        q = l, Hn.transition = i
    }
}

function Lh(e, t, n, r) {
    var l = q,
        i = Hn.transition;
    Hn.transition = null;
    try {
        q = 4, Ns(e, t, n, r)
    } finally {
        q = l, Hn.transition = i
    }
}

function Ns(e, t, n, r) {
    if (Hl) {
        var l = Mo(e, t, n, r);
        if (l === null) qi(e, t, r, Ql, n), Aa(e, r);
        else if (Ch(l, e, t, n, r)) r.stopPropagation();
        else if (Aa(e, r), t & 4 && -1 < Eh.indexOf(e)) {
            for (; l !== null;) {
                var i = tl(l);
                if (i !== null && Fc(i), i = Mo(e, t, n, r), i === null && qi(e, t, r, Ql, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else qi(e, t, r, null, n)
    }
}
var Ql = null;

function Mo(e, t, n, r) {
    if (Ql = null, e = Ss(r), e = un(e), e !== null)
        if (t = kn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Tc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Ql = e, null
}

function Vc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (mh()) {
                case xs:
                    return 1;
                case $c:
                    return 4;
                case Kl:
                case gh:
                    return 16;
                case Ac:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var zt = null,
    Ps = null,
    Ll = null;

function Hc() {
    if (Ll) return Ll;
    var e, t = Ps,
        n = t.length,
        r, l = "value" in zt ? zt.value : zt.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return Ll = l.slice(e, 1 < r ? 1 - r : void 0)
}

function jl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function pl() {
    return !0
}

function za() {
    return !1
}

function Ke(e) {
    function t(n, r, l, i, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pl : za, this.isPropagationStopped = za, this
    }
    return re(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pl)
        },
        persist: function() {},
        isPersistent: pl
    }), t
}
var lr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Ls = Ke(lr),
    el = re({}, lr, {
        view: 0,
        detail: 0
    }),
    jh = Ke(el),
    Fi, Di, dr, hi = re({}, el, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: js,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== dr && (dr && e.type === "mousemove" ? (Fi = e.screenX - dr.screenX, Di = e.screenY - dr.screenY) : Di = Fi = 0, dr = e), Fi)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Di
        }
    }),
    Fa = Ke(hi),
    Rh = re({}, hi, {
        dataTransfer: 0
    }),
    Th = Ke(Rh),
    Mh = re({}, el, {
        relatedTarget: 0
    }),
    Bi = Ke(Mh),
    Ih = re({}, lr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Oh = Ke(Ih),
    $h = re({}, lr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Ah = Ke($h),
    Uh = re({}, lr, {
        data: 0
    }),
    Da = Ke(Uh),
    zh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Fh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Dh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Bh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Dh[e]) ? !!t[e] : !1
}

function js() {
    return Bh
}
var Wh = re({}, el, {
        key: function(e) {
            if (e.key) {
                var t = zh[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = jl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: js,
        charCode: function(e) {
            return e.type === "keypress" ? jl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Kh = Ke(Wh),
    Vh = re({}, hi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Ba = Ke(Vh),
    Hh = re({}, el, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: js
    }),
    Qh = Ke(Hh),
    Yh = re({}, lr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    qh = Ke(Yh),
    Gh = re({}, hi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Xh = Ke(Gh),
    Zh = [9, 13, 27, 32],
    Rs = kt && "CompositionEvent" in window,
    Cr = null;
kt && "documentMode" in document && (Cr = document.documentMode);
var Jh = kt && "TextEvent" in window && !Cr,
    Qc = kt && (!Rs || Cr && 8 < Cr && 11 >= Cr),
    Wa = " ",
    Ka = !1;

function Yc(e, t) {
    switch (e) {
        case "keyup":
            return Zh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function qc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Mn = !1;

function bh(e, t) {
    switch (e) {
        case "compositionend":
            return qc(t);
        case "keypress":
            return t.which !== 32 ? null : (Ka = !0, Wa);
        case "textInput":
            return e = t.data, e === Wa && Ka ? null : e;
        default:
            return null
    }
}

function em(e, t) {
    if (Mn) return e === "compositionend" || !Rs && Yc(e, t) ? (e = Hc(), Ll = Ps = zt = null, Mn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Qc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var tm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Va(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tm[e.type] : t === "textarea"
}

function Gc(e, t, n, r) {
    Nc(r), t = Yl(t, "onChange"), 0 < t.length && (n = new Ls("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Nr = null,
    zr = null;

function nm(e) {
    sf(e, 0)
}

function mi(e) {
    var t = $n(e);
    if (_c(t)) return e
}

function rm(e, t) {
    if (e === "change") return t
}
var Xc = !1;
if (kt) {
    var Wi;
    if (kt) {
        var Ki = "oninput" in document;
        if (!Ki) {
            var Ha = document.createElement("div");
            Ha.setAttribute("oninput", "return;"), Ki = typeof Ha.oninput == "function"
        }
        Wi = Ki
    } else Wi = !1;
    Xc = Wi && (!document.documentMode || 9 < document.documentMode)
}

function Qa() {
    Nr && (Nr.detachEvent("onpropertychange", Zc), zr = Nr = null)
}

function Zc(e) {
    if (e.propertyName === "value" && mi(zr)) {
        var t = [];
        Gc(t, zr, e, Ss(e)), Rc(nm, t)
    }
}

function lm(e, t, n) {
    e === "focusin" ? (Qa(), Nr = t, zr = n, Nr.attachEvent("onpropertychange", Zc)) : e === "focusout" && Qa()
}

function im(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return mi(zr)
}

function om(e, t) {
    if (e === "click") return mi(t)
}

function sm(e, t) {
    if (e === "input" || e === "change") return mi(t)
}

function am(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var lt = typeof Object.is == "function" ? Object.is : am;

function Fr(e, t) {
    if (lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ho.call(t, l) || !lt(e[l], t[l])) return !1
    }
    return !0
}

function Ya(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function qa(e, t) {
    var n = Ya(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ya(n)
    }
}

function Jc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function bc() {
    for (var e = window, t = Dl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Dl(e.document)
    }
    return t
}

function Ts(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function um(e) {
    var t = bc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Jc(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ts(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = qa(n, i);
                var o = qa(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var cm = kt && "documentMode" in document && 11 >= document.documentMode,
    In = null,
    Io = null,
    Pr = null,
    Oo = !1;

function Ga(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo || In == null || In !== Dl(r) || (r = In, "selectionStart" in r && Ts(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Pr && Fr(Pr, r) || (Pr = r, r = Yl(Io, "onSelect"), 0 < r.length && (t = new Ls("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = In)))
}

function hl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var On = {
        animationend: hl("Animation", "AnimationEnd"),
        animationiteration: hl("Animation", "AnimationIteration"),
        animationstart: hl("Animation", "AnimationStart"),
        transitionend: hl("Transition", "TransitionEnd")
    },
    Vi = {},
    ef = {};
kt && (ef = document.createElement("div").style, "AnimationEvent" in window || (delete On.animationend.animation, delete On.animationiteration.animation, delete On.animationstart.animation), "TransitionEvent" in window || delete On.transitionend.transition);

function gi(e) {
    if (Vi[e]) return Vi[e];
    if (!On[e]) return e;
    var t = On[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ef) return Vi[e] = t[n];
    return e
}
var tf = gi("animationend"),
    nf = gi("animationiteration"),
    rf = gi("animationstart"),
    lf = gi("transitionend"),
    of = new Map,
    Xa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Jt(e, t) {
    of.set(e, t), wn(t, [e])
}
for (var Hi = 0; Hi < Xa.length; Hi++) {
    var Qi = Xa[Hi],
        fm = Qi.toLowerCase(),
        dm = Qi[0].toUpperCase() + Qi.slice(1);
    Jt(fm, "on" + dm)
}
Jt(tf, "onAnimationEnd");
Jt(nf, "onAnimationIteration");
Jt(rf, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(lf, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    pm = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));

function Za(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, fh(r, t, void 0, e), e.currentTarget = null
}

function sf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o],
                        a = s.instance,
                        u = s.currentTarget;
                    if (s = s.listener, a !== i && l.isPropagationStopped()) break e;
                    Za(l, s, u), i = a
                } else
                    for (o = 0; o < r.length; o++) {
                        if (s = r[o], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && l.isPropagationStopped()) break e;
                        Za(l, s, u), i = a
                    }
        }
    }
    if (Wl) throw e = jo, Wl = !1, jo = null, e
}

function X(e, t) {
    var n = t[Fo];
    n === void 0 && (n = t[Fo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (af(t, e, 2, !1), n.add(r))
}

function Yi(e, t, n) {
    var r = 0;
    t && (r |= 4), af(n, e, r, t)
}
var ml = "_reactListening" + Math.random().toString(36).slice(2);

function Dr(e) {
    if (!e[ml]) {
        e[ml] = !0, hc.forEach(function(n) {
            n !== "selectionchange" && (pm.has(n) || Yi(n, !1, e), Yi(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ml] || (t[ml] = !0, Yi("selectionchange", !1, t))
    }
}

function af(e, t, n, r) {
    switch (Vc(t)) {
        case 1:
            var l = Ph;
            break;
        case 4:
            l = Lh;
            break;
        default:
            l = Ns
    }
    n = l.bind(null, t, n, e), l = void 0, !Lo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function qi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === l || s.nodeType === 8 && s.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var a = o.tag;
                    if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
                    o = o.return
                }
            for (; s !== null;) {
                if (o = un(s), o === null) return;
                if (a = o.tag, a === 5 || a === 6) {
                    r = i = o;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Rc(function() {
        var u = i,
            c = Ss(n),
            p = [];
        e: {
            var f = of.get(e);
            if (f !== void 0) {
                var _ = Ls,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (jl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        _ = Kh;
                        break;
                    case "focusin":
                        g = "focus", _ = Bi;
                        break;
                    case "focusout":
                        g = "blur", _ = Bi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        _ = Bi;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        _ = Fa;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        _ = Th;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        _ = Qh;
                        break;
                    case tf:
                    case nf:
                    case rf:
                        _ = Oh;
                        break;
                    case lf:
                        _ = qh;
                        break;
                    case "scroll":
                        _ = jh;
                        break;
                    case "wheel":
                        _ = Xh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        _ = Ah;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        _ = Ba
                }
                var w = (t & 4) !== 0,
                    E = !w && e === "scroll",
                    h = w ? f !== null ? f + "Capture" : null : f;
                w = [];
                for (var d = u, v; d !== null;) {
                    v = d;
                    var C = v.stateNode;
                    if (v.tag === 5 && C !== null && (v = C, h !== null && (C = Or(d, h), C != null && w.push(Br(d, C, v)))), E) break;
                    d = d.return
                }
                0 < w.length && (f = new _(f, g, null, n, c), p.push({
                    event: f,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", f && n !== No && (g = n.relatedTarget || n.fromElement) && (un(g) || g[St])) break e;
                if ((_ || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, _ ? (g = n.relatedTarget || n.toElement, _ = u, g = g ? un(g) : null, g !== null && (E = kn(g), g !== E || g.tag !== 5 && g.tag !== 6) && (g = null)) : (_ = null, g = u), _ !== g)) {
                    if (w = Fa, C = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = Ba, C = "onPointerLeave", h = "onPointerEnter", d = "pointer"), E = _ == null ? f : $n(_), v = g == null ? f : $n(g), f = new w(C, d + "leave", _, n, c), f.target = E, f.relatedTarget = v, C = null, un(c) === u && (w = new w(h, d + "enter", g, n, c), w.target = v, w.relatedTarget = E, C = w), E = C, _ && g) t: {
                        for (w = _, h = g, d = 0, v = w; v; v = Ln(v)) d++;
                        for (v = 0, C = h; C; C = Ln(C)) v++;
                        for (; 0 < d - v;) w = Ln(w),
                        d--;
                        for (; 0 < v - d;) h = Ln(h),
                        v--;
                        for (; d--;) {
                            if (w === h || h !== null && w === h.alternate) break t;
                            w = Ln(w), h = Ln(h)
                        }
                        w = null
                    }
                    else w = null;
                    _ !== null && Ja(p, f, _, w, !1), g !== null && E !== null && Ja(p, E, g, w, !0)
                }
            }
            e: {
                if (f = u ? $n(u) : window, _ = f.nodeName && f.nodeName.toLowerCase(), _ === "select" || _ === "input" && f.type === "file") var R = rm;
                else if (Va(f))
                    if (Xc) R = sm;
                    else {
                        R = im;
                        var P = lm
                    }
                else(_ = f.nodeName) && _.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (R = om);
                if (R && (R = R(e, u))) {
                    Gc(p, R, n, c);
                    break e
                }
                P && P(e, f, u),
                e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && ko(f, "number", f.value)
            }
            switch (P = u ? $n(u) : window, e) {
                case "focusin":
                    (Va(P) || P.contentEditable === "true") && (In = P, Io = u, Pr = null);
                    break;
                case "focusout":
                    Pr = Io = In = null;
                    break;
                case "mousedown":
                    Oo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Oo = !1, Ga(p, n, c);
                    break;
                case "selectionchange":
                    if (cm) break;
                case "keydown":
                case "keyup":
                    Ga(p, n, c)
            }
            var j;
            if (Rs) e: {
                switch (e) {
                    case "compositionstart":
                        var M = "onCompositionStart";
                        break e;
                    case "compositionend":
                        M = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        M = "onCompositionUpdate";
                        break e
                }
                M = void 0
            }
            else Mn ? Yc(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");M && (Qc && n.locale !== "ko" && (Mn || M !== "onCompositionStart" ? M === "onCompositionEnd" && Mn && (j = Hc()) : (zt = c, Ps = "value" in zt ? zt.value : zt.textContent, Mn = !0)), P = Yl(u, M), 0 < P.length && (M = new Da(M, e, null, n, c), p.push({
                event: M,
                listeners: P
            }), j ? M.data = j : (j = qc(n), j !== null && (M.data = j)))),
            (j = Jh ? bh(e, n) : em(e, n)) && (u = Yl(u, "onBeforeInput"), 0 < u.length && (c = new Da("onBeforeInput", "beforeinput", null, n, c), p.push({
                event: c,
                listeners: u
            }), c.data = j))
        }
        sf(p, t)
    })
}

function Br(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Yl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = Or(e, n), i != null && r.unshift(Br(e, i, l)), i = Or(e, t), i != null && r.push(Br(e, i, l))), e = e.return
    }
    return r
}

function Ln(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Ja(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
            a = s.alternate,
            u = s.stateNode;
        if (a !== null && a === r) break;
        s.tag === 5 && u !== null && (s = u, l ? (a = Or(n, i), a != null && o.unshift(Br(n, a, s))) : l || (a = Or(n, i), a != null && o.push(Br(n, a, s)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var hm = /\r\n?/g,
    mm = /\u0000|\uFFFD/g;

function ba(e) {
    return (typeof e == "string" ? e : "" + e).replace(hm, `
`).replace(mm, "")
}

function gl(e, t, n) {
    if (t = ba(t), ba(e) !== t && n) throw Error(L(425))
}

function ql() {}
var $o = null,
    Ao = null;

function Uo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var zo = typeof setTimeout == "function" ? setTimeout : void 0,
    gm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    eu = typeof Promise == "function" ? Promise : void 0,
    vm = typeof queueMicrotask == "function" ? queueMicrotask : typeof eu < "u" ? function(e) {
        return eu.resolve(null).then(e).catch(ym)
    } : zo;

function ym(e) {
    setTimeout(function() {
        throw e
    })
}

function Gi(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Ur(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Ur(t)
}

function Vt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function tu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ir = Math.random().toString(36).slice(2),
    at = "__reactFiber$" + ir,
    Wr = "__reactProps$" + ir,
    St = "__reactContainer$" + ir,
    Fo = "__reactEvents$" + ir,
    _m = "__reactListeners$" + ir,
    wm = "__reactHandles$" + ir;

function un(e) {
    var t = e[at];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[St] || n[at]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = tu(e); e !== null;) {
                    if (n = e[at]) return n;
                    e = tu(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function tl(e) {
    return e = e[at] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function $n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(L(33))
}

function vi(e) {
    return e[Wr] || null
}
var Do = [],
    An = -1;

function bt(e) {
    return {
        current: e
    }
}

function Z(e) {
    0 > An || (e.current = Do[An], Do[An] = null, An--)
}

function G(e, t) {
    An++, Do[An] = e.current, e.current = t
}
var Zt = {},
    Ce = bt(Zt),
    Oe = bt(!1),
    mn = Zt;

function Gn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function $e(e) {
    return e = e.childContextTypes, e != null
}

function Gl() {
    Z(Oe), Z(Ce)
}

function nu(e, t, n) {
    if (Ce.current !== Zt) throw Error(L(168));
    G(Ce, t), G(Oe, n)
}

function uf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(L(108, lh(e) || "Unknown", l));
    return re({}, n, r)
}

function Xl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, mn = Ce.current, G(Ce, e), G(Oe, Oe.current), !0
}

function ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(L(169));
    n ? (e = uf(e, t, mn), r.__reactInternalMemoizedMergedChildContext = e, Z(Oe), Z(Ce), G(Ce, e)) : Z(Oe), G(Oe, n)
}
var gt = null,
    yi = !1,
    Xi = !1;

function cf(e) {
    gt === null ? gt = [e] : gt.push(e)
}

function km(e) {
    yi = !0, cf(e)
}

function en() {
    if (!Xi && gt !== null) {
        Xi = !0;
        var e = 0,
            t = q;
        try {
            var n = gt;
            for (q = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            gt = null, yi = !1
        } catch (l) {
            throw gt !== null && (gt = gt.slice(e + 1)), Oc(xs, en), l
        } finally {
            q = t, Xi = !1
        }
    }
    return null
}
var Un = [],
    zn = 0,
    Zl = null,
    Jl = 0,
    He = [],
    Qe = 0,
    gn = null,
    yt = 1,
    _t = "";

function on(e, t) {
    Un[zn++] = Jl, Un[zn++] = Zl, Zl = e, Jl = t
}

function ff(e, t, n) {
    He[Qe++] = yt, He[Qe++] = _t, He[Qe++] = gn, gn = e;
    var r = yt;
    e = _t;
    var l = 32 - nt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - nt(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, yt = 1 << 32 - nt(t) + l | n << l | r, _t = i + e
    } else yt = 1 << i | n << l | r, _t = e
}

function Ms(e) {
    e.return !== null && (on(e, 1), ff(e, 1, 0))
}

function Is(e) {
    for (; e === Zl;) Zl = Un[--zn], Un[zn] = null, Jl = Un[--zn], Un[zn] = null;
    for (; e === gn;) gn = He[--Qe], He[Qe] = null, _t = He[--Qe], He[Qe] = null, yt = He[--Qe], He[Qe] = null
}
var De = null,
    Fe = null,
    b = !1,
    tt = null;

function df(e, t) {
    var n = Ye(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function lu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Fe = Vt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Fe = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = gn !== null ? {
                id: yt,
                overflow: _t
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Fe = null, !0) : !1;
        default:
            return !1
    }
}

function Bo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Wo(e) {
    if (b) {
        var t = Fe;
        if (t) {
            var n = t;
            if (!lu(e, t)) {
                if (Bo(e)) throw Error(L(418));
                t = Vt(n.nextSibling);
                var r = De;
                t && lu(e, t) ? df(r, n) : (e.flags = e.flags & -4097 | 2, b = !1, De = e)
            }
        } else {
            if (Bo(e)) throw Error(L(418));
            e.flags = e.flags & -4097 | 2, b = !1, De = e
        }
    }
}

function iu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    De = e
}

function vl(e) {
    if (e !== De) return !1;
    if (!b) return iu(e), b = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Uo(e.type, e.memoizedProps)), t && (t = Fe)) {
        if (Bo(e)) throw pf(), Error(L(418));
        for (; t;) df(e, t), t = Vt(t.nextSibling)
    }
    if (iu(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Fe = Vt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Fe = null
        }
    } else Fe = De ? Vt(e.stateNode.nextSibling) : null;
    return !0
}

function pf() {
    for (var e = Fe; e;) e = Vt(e.nextSibling)
}

function Xn() {
    Fe = De = null, b = !1
}

function Os(e) {
    tt === null ? tt = [e] : tt.push(e)
}
var Sm = Ct.ReactCurrentBatchConfig;

function pr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(L(309));
                var r = n.stateNode
            }
            if (!r) throw Error(L(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var s = l.refs;
                o === null ? delete s[i] : s[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(L(284));
        if (!n._owner) throw Error(L(290, e))
    }
    return e
}

function yl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function ou(e) {
    var t = e._init;
    return t(e._payload)
}

function hf(e) {
    function t(h, d) {
        if (e) {
            var v = h.deletions;
            v === null ? (h.deletions = [d], h.flags |= 16) : v.push(d)
        }
    }

    function n(h, d) {
        if (!e) return null;
        for (; d !== null;) t(h, d), d = d.sibling;
        return null
    }

    function r(h, d) {
        for (h = new Map; d !== null;) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
        return h
    }

    function l(h, d) {
        return h = qt(h, d), h.index = 0, h.sibling = null, h
    }

    function i(h, d, v) {
        return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < d ? (h.flags |= 2, d) : v) : (h.flags |= 2, d)) : (h.flags |= 1048576, d)
    }

    function o(h) {
        return e && h.alternate === null && (h.flags |= 2), h
    }

    function s(h, d, v, C) {
        return d === null || d.tag !== 6 ? (d = ro(v, h.mode, C), d.return = h, d) : (d = l(d, v), d.return = h, d)
    }

    function a(h, d, v, C) {
        var R = v.type;
        return R === Tn ? c(h, d, v.props.children, C, v.key) : d !== null && (d.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Mt && ou(R) === d.type) ? (C = l(d, v.props), C.ref = pr(h, d, v), C.return = h, C) : (C = Al(v.type, v.key, v.props, null, h.mode, C), C.ref = pr(h, d, v), C.return = h, C)
    }

    function u(h, d, v, C) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = lo(v, h.mode, C), d.return = h, d) : (d = l(d, v.children || []), d.return = h, d)
    }

    function c(h, d, v, C, R) {
        return d === null || d.tag !== 7 ? (d = pn(v, h.mode, C, R), d.return = h, d) : (d = l(d, v), d.return = h, d)
    }

    function p(h, d, v) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = ro("" + d, h.mode, v), d.return = h, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case sl:
                    return v = Al(d.type, d.key, d.props, null, h.mode, v), v.ref = pr(h, null, d), v.return = h, v;
                case Rn:
                    return d = lo(d, h.mode, v), d.return = h, d;
                case Mt:
                    var C = d._init;
                    return p(h, C(d._payload), v)
            }
            if (_r(d) || ar(d)) return d = pn(d, h.mode, v, null), d.return = h, d;
            yl(h, d)
        }
        return null
    }

    function f(h, d, v, C) {
        var R = d !== null ? d.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return R !== null ? null : s(h, d, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case sl:
                    return v.key === R ? a(h, d, v, C) : null;
                case Rn:
                    return v.key === R ? u(h, d, v, C) : null;
                case Mt:
                    return R = v._init, f(h, d, R(v._payload), C)
            }
            if (_r(v) || ar(v)) return R !== null ? null : c(h, d, v, C, null);
            yl(h, v)
        }
        return null
    }

    function _(h, d, v, C, R) {
        if (typeof C == "string" && C !== "" || typeof C == "number") return h = h.get(v) || null, s(d, h, "" + C, R);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case sl:
                    return h = h.get(C.key === null ? v : C.key) || null, a(d, h, C, R);
                case Rn:
                    return h = h.get(C.key === null ? v : C.key) || null, u(d, h, C, R);
                case Mt:
                    var P = C._init;
                    return _(h, d, v, P(C._payload), R)
            }
            if (_r(C) || ar(C)) return h = h.get(v) || null, c(d, h, C, R, null);
            yl(d, C)
        }
        return null
    }

    function g(h, d, v, C) {
        for (var R = null, P = null, j = d, M = d = 0, Q = null; j !== null && M < v.length; M++) {
            j.index > M ? (Q = j, j = null) : Q = j.sibling;
            var $ = f(h, j, v[M], C);
            if ($ === null) {
                j === null && (j = Q);
                break
            }
            e && j && $.alternate === null && t(h, j), d = i($, d, M), P === null ? R = $ : P.sibling = $, P = $, j = Q
        }
        if (M === v.length) return n(h, j), b && on(h, M), R;
        if (j === null) {
            for (; M < v.length; M++) j = p(h, v[M], C), j !== null && (d = i(j, d, M), P === null ? R = j : P.sibling = j, P = j);
            return b && on(h, M), R
        }
        for (j = r(h, j); M < v.length; M++) Q = _(j, h, M, v[M], C), Q !== null && (e && Q.alternate !== null && j.delete(Q.key === null ? M : Q.key), d = i(Q, d, M), P === null ? R = Q : P.sibling = Q, P = Q);
        return e && j.forEach(function(V) {
            return t(h, V)
        }), b && on(h, M), R
    }

    function w(h, d, v, C) {
        var R = ar(v);
        if (typeof R != "function") throw Error(L(150));
        if (v = R.call(v), v == null) throw Error(L(151));
        for (var P = R = null, j = d, M = d = 0, Q = null, $ = v.next(); j !== null && !$.done; M++, $ = v.next()) {
            j.index > M ? (Q = j, j = null) : Q = j.sibling;
            var V = f(h, j, $.value, C);
            if (V === null) {
                j === null && (j = Q);
                break
            }
            e && j && V.alternate === null && t(h, j), d = i(V, d, M), P === null ? R = V : P.sibling = V, P = V, j = Q
        }
        if ($.done) return n(h, j), b && on(h, M), R;
        if (j === null) {
            for (; !$.done; M++, $ = v.next()) $ = p(h, $.value, C), $ !== null && (d = i($, d, M), P === null ? R = $ : P.sibling = $, P = $);
            return b && on(h, M), R
        }
        for (j = r(h, j); !$.done; M++, $ = v.next()) $ = _(j, h, M, $.value, C), $ !== null && (e && $.alternate !== null && j.delete($.key === null ? M : $.key), d = i($, d, M), P === null ? R = $ : P.sibling = $, P = $);
        return e && j.forEach(function(Te) {
            return t(h, Te)
        }), b && on(h, M), R
    }

    function E(h, d, v, C) {
        if (typeof v == "object" && v !== null && v.type === Tn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case sl:
                    e: {
                        for (var R = v.key, P = d; P !== null;) {
                            if (P.key === R) {
                                if (R = v.type, R === Tn) {
                                    if (P.tag === 7) {
                                        n(h, P.sibling), d = l(P, v.props.children), d.return = h, h = d;
                                        break e
                                    }
                                } else if (P.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Mt && ou(R) === P.type) {
                                    n(h, P.sibling), d = l(P, v.props), d.ref = pr(h, P, v), d.return = h, h = d;
                                    break e
                                }
                                n(h, P);
                                break
                            } else t(h, P);
                            P = P.sibling
                        }
                        v.type === Tn ? (d = pn(v.props.children, h.mode, C, v.key), d.return = h, h = d) : (C = Al(v.type, v.key, v.props, null, h.mode, C), C.ref = pr(h, d, v), C.return = h, h = C)
                    }
                    return o(h);
                case Rn:
                    e: {
                        for (P = v.key; d !== null;) {
                            if (d.key === P)
                                if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                                    n(h, d.sibling), d = l(d, v.children || []), d.return = h, h = d;
                                    break e
                                } else {
                                    n(h, d);
                                    break
                                }
                            else t(h, d);
                            d = d.sibling
                        }
                        d = lo(v, h.mode, C),
                        d.return = h,
                        h = d
                    }
                    return o(h);
                case Mt:
                    return P = v._init, E(h, d, P(v._payload), C)
            }
            if (_r(v)) return g(h, d, v, C);
            if (ar(v)) return w(h, d, v, C);
            yl(h, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, d !== null && d.tag === 6 ? (n(h, d.sibling), d = l(d, v), d.return = h, h = d) : (n(h, d), d = ro(v, h.mode, C), d.return = h, h = d), o(h)) : n(h, d)
    }
    return E
}
var Zn = hf(!0),
    mf = hf(!1),
    bl = bt(null),
    ei = null,
    Fn = null,
    $s = null;

function As() {
    $s = Fn = ei = null
}

function Us(e) {
    var t = bl.current;
    Z(bl), e._currentValue = t
}

function Ko(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Qn(e, t) {
    ei = e, $s = Fn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null)
}

function Ge(e) {
    var t = e._currentValue;
    if ($s !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Fn === null) {
            if (ei === null) throw Error(L(308));
            Fn = e, ei.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Fn = Fn.next = e;
    return t
}
var cn = null;

function zs(e) {
    cn === null ? cn = [e] : cn.push(e)
}

function gf(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, zs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, xt(e, r)
}

function xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var It = !1;

function Fs(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function vf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function wt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Ht(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, H & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, xt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, zs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, xt(e, n)
}

function Rl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Es(e, n)
    }
}

function su(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ti(e, t, n, r) {
    var l = e.updateQueue;
    It = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        s = l.shared.pending;
    if (s !== null) {
        l.shared.pending = null;
        var a = s,
            u = a.next;
        a.next = null, o === null ? i = u : o.next = u, o = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== o && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var p = l.baseState;
        o = 0, c = u = a = null, s = i;
        do {
            var f = s.lane,
                _ = s.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: _,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var g = e,
                        w = s;
                    switch (f = t, _ = n, w.tag) {
                        case 1:
                            if (g = w.payload, typeof g == "function") {
                                p = g.call(_, p, f);
                                break e
                            }
                            p = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = w.payload, f = typeof g == "function" ? g.call(_, p, f) : g, f == null) break e;
                            p = re({}, p, f);
                            break e;
                        case 2:
                            It = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = l.effects, f === null ? l.effects = [s] : f.push(s))
            } else _ = {
                eventTime: _,
                lane: f,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, c === null ? (u = c = _, a = p) : c = c.next = _, o |= f;
            if (s = s.next, s === null) {
                if (s = l.shared.pending, s === null) break;
                f = s, s = f.next, f.next = null, l.lastBaseUpdate = f, l.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = p), l.baseState = a, l.firstBaseUpdate = u, l.lastBaseUpdate = c, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        yn |= o, e.lanes = o, e.memoizedState = p
    }
}

function au(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(L(191, l));
                l.call(r)
            }
        }
}
var nl = {},
    ct = bt(nl),
    Kr = bt(nl),
    Vr = bt(nl);

function fn(e) {
    if (e === nl) throw Error(L(174));
    return e
}

function Ds(e, t) {
    switch (G(Vr, t), G(Kr, e), G(ct, nl), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : xo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xo(t, e)
    }
    Z(ct), G(ct, t)
}

function Jn() {
    Z(ct), Z(Kr), Z(Vr)
}

function yf(e) {
    fn(Vr.current);
    var t = fn(ct.current),
        n = xo(t, e.type);
    t !== n && (G(Kr, e), G(ct, n))
}

function Bs(e) {
    Kr.current === e && (Z(ct), Z(Kr))
}
var te = bt(0);

function ni(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Zi = [];

function Ws() {
    for (var e = 0; e < Zi.length; e++) Zi[e]._workInProgressVersionPrimary = null;
    Zi.length = 0
}
var Tl = Ct.ReactCurrentDispatcher,
    Ji = Ct.ReactCurrentBatchConfig,
    vn = 0,
    ne = null,
    fe = null,
    me = null,
    ri = !1,
    Lr = !1,
    Hr = 0,
    xm = 0;

function ke() {
    throw Error(L(321))
}

function Ks(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!lt(e[n], t[n])) return !1;
    return !0
}

function Vs(e, t, n, r, l, i) {
    if (vn = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Tl.current = e === null || e.memoizedState === null ? Pm : Lm, e = n(r, l), Lr) {
        i = 0;
        do {
            if (Lr = !1, Hr = 0, 25 <= i) throw Error(L(301));
            i += 1, me = fe = null, t.updateQueue = null, Tl.current = jm, e = n(r, l)
        } while (Lr)
    }
    if (Tl.current = li, t = fe !== null && fe.next !== null, vn = 0, me = fe = ne = null, ri = !1, t) throw Error(L(300));
    return e
}

function Hs() {
    var e = Hr !== 0;
    return Hr = 0, e
}

function st() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return me === null ? ne.memoizedState = me = e : me = me.next = e, me
}

function Xe() {
    if (fe === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = fe.next;
    var t = me === null ? ne.memoizedState : me.next;
    if (t !== null) me = t, fe = e;
    else {
        if (e === null) throw Error(L(310));
        fe = e, e = {
            memoizedState: fe.memoizedState,
            baseState: fe.baseState,
            baseQueue: fe.baseQueue,
            queue: fe.queue,
            next: null
        }, me === null ? ne.memoizedState = me = e : me = me.next = e
    }
    return me
}

function Qr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function bi(e) {
    var t = Xe(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = fe,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var s = o = null,
            a = null,
            u = i;
        do {
            var c = u.lane;
            if ((vn & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (s = a = p, o = r) : a = a.next = p, ne.lanes |= c, yn |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? o = r : a.next = s, lt(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, ne.lanes |= i, yn |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function eo(e) {
    var t = Xe(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        lt(i, t.memoizedState) || (Ie = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function _f() {}

function wf(e, t) {
    var n = ne,
        r = Xe(),
        l = t(),
        i = !lt(r.memoizedState, l);
    if (i && (r.memoizedState = l, Ie = !0), r = r.queue, Qs(xf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || me !== null && me.memoizedState.tag & 1) {
        if (n.flags |= 2048, Yr(9, Sf.bind(null, n, r, l, t), void 0, null), ge === null) throw Error(L(349));
        vn & 30 || kf(n, t, l)
    }
    return l
}

function kf(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ne.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Sf(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ef(t) && Cf(e)
}

function xf(e, t, n) {
    return n(function() {
        Ef(t) && Cf(e)
    })
}

function Ef(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !lt(e, n)
    } catch {
        return !0
    }
}

function Cf(e) {
    var t = xt(e, 1);
    t !== null && rt(t, e, 1, -1)
}

function uu(e) {
    var t = st();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Nm.bind(null, ne, e), [t.memoizedState, e]
}

function Yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ne.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Nf() {
    return Xe().memoizedState
}

function Ml(e, t, n, r) {
    var l = st();
    ne.flags |= e, l.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r)
}

function _i(e, t, n, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (fe !== null) {
        var o = fe.memoizedState;
        if (i = o.destroy, r !== null && Ks(r, o.deps)) {
            l.memoizedState = Yr(t, n, i, r);
            return
        }
    }
    ne.flags |= e, l.memoizedState = Yr(1 | t, n, i, r)
}

function cu(e, t) {
    return Ml(8390656, 8, e, t)
}

function Qs(e, t) {
    return _i(2048, 8, e, t)
}

function Pf(e, t) {
    return _i(4, 2, e, t)
}

function Lf(e, t) {
    return _i(4, 4, e, t)
}

function jf(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Rf(e, t, n) {
    return n = n != null ? n.concat([e]) : null, _i(4, 4, jf.bind(null, t, e), n)
}

function Ys() {}

function Tf(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ks(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Mf(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ks(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function If(e, t, n) {
    return vn & 21 ? (lt(n, t) || (n = Uc(), ne.lanes |= n, yn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n)
}

function Em(e, t) {
    var n = q;
    q = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ji.transition;
    Ji.transition = {};
    try {
        e(!1), t()
    } finally {
        q = n, Ji.transition = r
    }
}

function Of() {
    return Xe().memoizedState
}

function Cm(e, t, n) {
    var r = Yt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, $f(e)) Af(t, n);
    else if (n = gf(e, t, n, r), n !== null) {
        var l = Le();
        rt(n, e, r, l), Uf(n, t, r)
    }
}

function Nm(e, t, n) {
    var r = Yt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if ($f(e)) Af(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState,
                s = i(o, n);
            if (l.hasEagerState = !0, l.eagerState = s, lt(s, o)) {
                var a = t.interleaved;
                a === null ? (l.next = l, zs(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = gf(e, t, l, r), n !== null && (l = Le(), rt(n, e, r, l), Uf(n, t, r))
    }
}

function $f(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne
}

function Af(e, t) {
    Lr = ri = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Uf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Es(e, n)
    }
}
var li = {
        readContext: Ge,
        useCallback: ke,
        useContext: ke,
        useEffect: ke,
        useImperativeHandle: ke,
        useInsertionEffect: ke,
        useLayoutEffect: ke,
        useMemo: ke,
        useReducer: ke,
        useRef: ke,
        useState: ke,
        useDebugValue: ke,
        useDeferredValue: ke,
        useTransition: ke,
        useMutableSource: ke,
        useSyncExternalStore: ke,
        useId: ke,
        unstable_isNewReconciler: !1
    },
    Pm = {
        readContext: Ge,
        useCallback: function(e, t) {
            return st().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ge,
        useEffect: cu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ml(4194308, 4, jf.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ml(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ml(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = st();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = st();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Cm.bind(null, ne, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = st();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: uu,
        useDebugValue: Ys,
        useDeferredValue: function(e) {
            return st().memoizedState = e
        },
        useTransition: function() {
            var e = uu(!1),
                t = e[0];
            return e = Em.bind(null, e[1]), st().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ne,
                l = st();
            if (b) {
                if (n === void 0) throw Error(L(407));
                n = n()
            } else {
                if (n = t(), ge === null) throw Error(L(349));
                vn & 30 || kf(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, cu(xf.bind(null, r, i, e), [e]), r.flags |= 2048, Yr(9, Sf.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = st(),
                t = ge.identifierPrefix;
            if (b) {
                var n = _t,
                    r = yt;
                n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = xm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Lm = {
        readContext: Ge,
        useCallback: Tf,
        useContext: Ge,
        useEffect: Qs,
        useImperativeHandle: Rf,
        useInsertionEffect: Pf,
        useLayoutEffect: Lf,
        useMemo: Mf,
        useReducer: bi,
        useRef: Nf,
        useState: function() {
            return bi(Qr)
        },
        useDebugValue: Ys,
        useDeferredValue: function(e) {
            var t = Xe();
            return If(t, fe.memoizedState, e)
        },
        useTransition: function() {
            var e = bi(Qr)[0],
                t = Xe().memoizedState;
            return [e, t]
        },
        useMutableSource: _f,
        useSyncExternalStore: wf,
        useId: Of,
        unstable_isNewReconciler: !1
    },
    jm = {
        readContext: Ge,
        useCallback: Tf,
        useContext: Ge,
        useEffect: Qs,
        useImperativeHandle: Rf,
        useInsertionEffect: Pf,
        useLayoutEffect: Lf,
        useMemo: Mf,
        useReducer: eo,
        useRef: Nf,
        useState: function() {
            return eo(Qr)
        },
        useDebugValue: Ys,
        useDeferredValue: function(e) {
            var t = Xe();
            return fe === null ? t.memoizedState = e : If(t, fe.memoizedState, e)
        },
        useTransition: function() {
            var e = eo(Qr)[0],
                t = Xe().memoizedState;
            return [e, t]
        },
        useMutableSource: _f,
        useSyncExternalStore: wf,
        useId: Of,
        unstable_isNewReconciler: !1
    };

function be(e, t) {
    if (e && e.defaultProps) {
        t = re({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Vo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var wi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? kn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le(),
            l = Yt(e),
            i = wt(r, l);
        i.payload = t, n != null && (i.callback = n), t = Ht(e, i, l), t !== null && (rt(t, e, l, r), Rl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le(),
            l = Yt(e),
            i = wt(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ht(e, i, l), t !== null && (rt(t, e, l, r), Rl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Le(),
            r = Yt(e),
            l = wt(n, r);
        l.tag = 2, t != null && (l.callback = t), t = Ht(e, l, r), t !== null && (rt(t, e, r, n), Rl(t, e, r))
    }
};

function fu(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(l, i) : !0
}

function zf(e, t, n) {
    var r = !1,
        l = Zt,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ge(i) : (l = $e(t) ? mn : Ce.current, r = t.contextTypes, i = (r = r != null) ? Gn(e, l) : Zt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function du(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wi.enqueueReplaceState(t, t.state, null)
}

function Ho(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Fs(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Ge(i) : (i = $e(t) ? mn : Ce.current, l.context = Gn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Vo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && wi.enqueueReplaceState(l, l.state, null), ti(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function bn(e, t) {
    try {
        var n = "",
            r = t;
        do n += rh(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function to(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Qo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Rm = typeof WeakMap == "function" ? WeakMap : Map;

function Ff(e, t, n) {
    n = wt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        oi || (oi = !0, ns = r), Qo(e, t)
    }, n
}

function Df(e, t, n) {
    n = wt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Qo(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Qo(e, t), typeof r != "function" && (Qt === null ? Qt = new Set([this]) : Qt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function pu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Rm;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Vm.bind(null, e, t, n), t.then(e, e))
}

function hu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function mu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1), t.tag = 2, Ht(n, t, 1))), n.lanes |= 1), e)
}
var Tm = Ct.ReactCurrentOwner,
    Ie = !1;

function Pe(e, t, n, r) {
    t.child = e === null ? mf(t, null, n, r) : Zn(t, e.child, n, r)
}

function gu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Qn(t, l), r = Vs(e, t, n, r, i, l), n = Hs(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (b && n && Ms(t), t.flags |= 1, Pe(e, t, r, l), t.child)
}

function vu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !ta(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Bf(e, t, i, r, l)) : (e = Al(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Fr, n(o, r) && e.ref === t.ref) return Et(e, t, l)
    }
    return t.flags |= 1, e = qt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Bf(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Fr(i, r) && e.ref === t.ref)
            if (Ie = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ie = !0);
            else return t.lanes = e.lanes, Et(e, t, l)
    }
    return Yo(e, t, n, r, l)
}

function Wf(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, G(Bn, ze), ze |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, G(Bn, ze), ze |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, G(Bn, ze), ze |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, G(Bn, ze), ze |= r;
    return Pe(e, t, l, n), t.child
}

function Kf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Yo(e, t, n, r, l) {
    var i = $e(n) ? mn : Ce.current;
    return i = Gn(t, i), Qn(t, l), n = Vs(e, t, n, r, i, l), r = Hs(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (b && r && Ms(t), t.flags |= 1, Pe(e, t, n, l), t.child)
}

function yu(e, t, n, r, l) {
    if ($e(n)) {
        var i = !0;
        Xl(t)
    } else i = !1;
    if (Qn(t, l), t.stateNode === null) Il(e, t), zf(t, n, r), Ho(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            s = t.memoizedProps;
        o.props = s;
        var a = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Ge(u) : (u = $e(n) ? mn : Ce.current, u = Gn(t, u));
        var c = n.getDerivedStateFromProps,
            p = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== u) && du(t, o, r, u), It = !1;
        var f = t.memoizedState;
        o.state = f, ti(t, r, o, l), a = t.memoizedState, s !== r || f !== a || Oe.current || It ? (typeof c == "function" && (Vo(t, n, c, r), a = t.memoizedState), (s = It || fu(t, n, s, r, f, a, u)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, vf(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : be(t.type, s), o.props = u, p = t.pendingProps, f = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ge(a) : (a = $e(n) ? mn : Ce.current, a = Gn(t, a));
        var _ = n.getDerivedStateFromProps;
        (c = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== p || f !== a) && du(t, o, r, a), It = !1, f = t.memoizedState, o.state = f, ti(t, r, o, l);
        var g = t.memoizedState;
        s !== p || f !== g || Oe.current || It ? (typeof _ == "function" && (Vo(t, n, _, r), g = t.memoizedState), (u = It || fu(t, n, u, r, f, g, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return qo(e, t, n, r, i, l)
}

function qo(e, t, n, r, l, i) {
    Kf(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && ru(t, n, !1), Et(e, t, i);
    r = t.stateNode, Tm.current = t;
    var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Zn(t, e.child, null, i), t.child = Zn(t, null, s, i)) : Pe(e, t, s, i), t.memoizedState = r.state, l && ru(t, n, !0), t.child
}

function Vf(e) {
    var t = e.stateNode;
    t.pendingContext ? nu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nu(e, t.context, !1), Ds(e, t.containerInfo)
}

function _u(e, t, n, r, l) {
    return Xn(), Os(l), t.flags |= 256, Pe(e, t, n, r), t.child
}
var Go = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Xo(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Hf(e, t, n) {
    var r = t.pendingProps,
        l = te.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        s;
    if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(te, l & 1), e === null) return Wo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = xi(o, r, 0, null), e = pn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Xo(n), t.memoizedState = Go, e) : qs(t, o));
    if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Mm(e, t, o, r, s, l, n);
    if (i) {
        i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = qt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = qt(s, i) : (i = pn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Xo(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Go, r
    }
    return i = e.child, e = i.sibling, r = qt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function qs(e, t) {
    return t = xi({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function _l(e, t, n, r) {
    return r !== null && Os(r), Zn(t, e.child, null, n), e = qs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Mm(e, t, n, r, l, i, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = to(Error(L(422))), _l(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = xi({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = pn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Zn(t, e.child, null, o), t.child.memoizedState = Xo(o), t.memoizedState = Go, i);
    if (!(t.mode & 1)) return _l(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
        return r = s, i = Error(L(419)), r = to(i, r, void 0), _l(e, t, o, r)
    }
    if (s = (o & e.childLanes) !== 0, Ie || s) {
        if (r = ge, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, xt(e, l), rt(r, e, l, -1))
        }
        return ea(), r = to(Error(L(421))), _l(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Fe = Vt(l.nextSibling), De = t, b = !0, tt = null, e !== null && (He[Qe++] = yt, He[Qe++] = _t, He[Qe++] = gn, yt = e.id, _t = e.overflow, gn = t), t = qs(t, r.children), t.flags |= 4096, t)
}

function wu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ko(e.return, t, n)
}

function no(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function Qf(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (Pe(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && wu(e, n, t);
            else if (e.tag === 19) wu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (G(te, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && ni(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), no(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && ni(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            no(t, !0, n, null, i);
            break;
        case "together":
            no(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Il(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Et(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), yn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(L(153));
    if (t.child !== null) {
        for (e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = qt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Im(e, t, n) {
    switch (t.tag) {
        case 3:
            Vf(t), Xn();
            break;
        case 5:
            yf(t);
            break;
        case 1:
            $e(t.type) && Xl(t);
            break;
        case 4:
            Ds(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            G(bl, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (G(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hf(e, t, n) : (G(te, te.current & 1), e = Et(e, t, n), e !== null ? e.sibling : null);
            G(te, te.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Qf(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(te, te.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Wf(e, t, n)
    }
    return Et(e, t, n)
}
var Yf, Zo, qf, Gf;
Yf = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Zo = function() {};
qf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, fn(ct.current);
        var i = null;
        switch (n) {
            case "input":
                l = _o(e, l), r = _o(e, r), i = [];
                break;
            case "select":
                l = re({}, l, {
                    value: void 0
                }), r = re({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = So(e, l), r = So(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ql)
        }
        Eo(n, r);
        var o;
        n = null;
        for (u in l)
            if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
                if (u === "style") {
                    var s = l[u];
                    for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = l != null ? l[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null))
                if (u === "style")
                    if (s) {
                        for (o in s) !s.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in a) a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}), n[o] = a[o])
                    } else n || (i || (i = []), i.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Mr.hasOwnProperty(u) ? (a != null && u === "onScroll" && X("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Gf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function hr(e, t) {
    if (!b) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Om(e, t, n) {
    var r = t.pendingProps;
    switch (Is(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Se(t), null;
        case 1:
            return $e(t.type) && Gl(), Se(t), null;
        case 3:
            return r = t.stateNode, Jn(), Z(Oe), Z(Ce), Ws(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (is(tt), tt = null))), Zo(e, t), Se(t), null;
        case 5:
            Bs(t);
            var l = fn(Vr.current);
            if (n = t.type, e !== null && t.stateNode != null) qf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(L(166));
                    return Se(t), null
                }
                if (e = fn(ct.current), vl(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[at] = t, r[Wr] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            X("cancel", r), X("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            X("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < kr.length; l++) X(kr[l], r);
                            break;
                        case "source":
                            X("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            X("error", r), X("load", r);
                            break;
                        case "details":
                            X("toggle", r);
                            break;
                        case "input":
                            ja(r, i), X("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, X("invalid", r);
                            break;
                        case "textarea":
                            Ta(r, i), X("invalid", r)
                    }
                    Eo(n, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var s = i[o];
                            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && gl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && gl(r.textContent, s, e), l = ["children", "" + s]) : Mr.hasOwnProperty(o) && s != null && o === "onScroll" && X("scroll", r)
                        } switch (n) {
                        case "input":
                            al(r), Ra(r, i, !0);
                            break;
                        case "textarea":
                            al(r), Ma(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ql)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[at] = t, e[Wr] = r, Yf(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = Co(n, r), n) {
                            case "dialog":
                                X("cancel", e), X("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                X("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < kr.length; l++) X(kr[l], e);
                                l = r;
                                break;
                            case "source":
                                X("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                X("error", e), X("load", e), l = r;
                                break;
                            case "details":
                                X("toggle", e), l = r;
                                break;
                            case "input":
                                ja(e, r), l = _o(e, r), X("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = re({}, r, {
                                    value: void 0
                                }), X("invalid", e);
                                break;
                            case "textarea":
                                Ta(e, r), l = So(e, r), X("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        Eo(n, l),
                        s = l;
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var a = s[i];
                                i === "style" ? Cc(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && xc(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ir(e, a) : typeof a == "number" && Ir(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Mr.hasOwnProperty(i) ? a != null && i === "onScroll" && X("scroll", e) : a != null && ys(e, i, a, o))
                            } switch (n) {
                            case "input":
                                al(e), Ra(e, r, !1);
                                break;
                            case "textarea":
                                al(e), Ma(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Wn(e, !!r.multiple, i, !1) : r.defaultValue != null && Wn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = ql)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Se(t), null;
        case 6:
            if (e && t.stateNode != null) Gf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
                if (n = fn(Vr.current), fn(ct.current), vl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (i = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
                        case 3:
                            gl(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && gl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r
            }
            return Se(t), null;
        case 13:
            if (Z(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (b && Fe !== null && t.mode & 1 && !(t.flags & 128)) pf(), Xn(), t.flags |= 98560, i = !1;
                else if (i = vl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(L(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(L(317));
                        i[at] = t
                    } else Xn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Se(t), i = !1
                } else tt !== null && (is(tt), tt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? de === 0 && (de = 3) : ea())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
        case 4:
            return Jn(), Zo(e, t), e === null && Dr(t.stateNode.containerInfo), Se(t), null;
        case 10:
            return Us(t.type._context), Se(t), null;
        case 17:
            return $e(t.type) && Gl(), Se(t), null;
        case 19:
            if (Z(te), i = t.memoizedState, i === null) return Se(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) hr(i, !1);
                else {
                    if (de !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = ni(e), o !== null) {
                                for (t.flags |= 128, hr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return G(te, te.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && oe() > er && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ni(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !b) return Se(t), null
                    } else 2 * oe() - i.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = oe(), t.sibling = null, n = te.current, G(te, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
        case 22:
        case 23:
            return bs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ze & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(L(156, t.tag))
}

function $m(e, t) {
    switch (Is(t), t.tag) {
        case 1:
            return $e(t.type) && Gl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Jn(), Z(Oe), Z(Ce), Ws(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Bs(t), null;
        case 13:
            if (Z(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(L(340));
                Xn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Z(te), null;
        case 4:
            return Jn(), null;
        case 10:
            return Us(t.type._context), null;
        case 22:
        case 23:
            return bs(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var wl = !1,
    Ee = !1,
    Am = typeof WeakSet == "function" ? WeakSet : Set,
    O = null;

function Dn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            le(e, t, r)
        } else n.current = null
}

function Jo(e, t, n) {
    try {
        n()
    } catch (r) {
        le(e, t, r)
    }
}
var ku = !1;

function Um(e, t) {
    if ($o = Hl, e = bc(), Ts(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    s = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    p = e,
                    f = null;
                t: for (;;) {
                    for (var _; p !== n || l !== 0 && p.nodeType !== 3 || (s = o + l), p !== i || r !== 0 && p.nodeType !== 3 || (a = o + r), p.nodeType === 3 && (o += p.nodeValue.length), (_ = p.firstChild) !== null;) f = p, p = _;
                    for (;;) {
                        if (p === e) break t;
                        if (f === n && ++u === l && (s = o), f === i && ++c === r && (a = o), (_ = p.nextSibling) !== null) break;
                        p = f, f = p.parentNode
                    }
                    p = _
                }
                n = s === -1 || a === -1 ? null : {
                    start: s,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ao = {
            focusedElem: e,
            selectionRange: n
        }, Hl = !1, O = t; O !== null;)
        if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
        else
            for (; O !== null;) {
                t = O;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var w = g.memoizedProps,
                                    E = g.memoizedState,
                                    h = t.stateNode,
                                    d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : be(t.type, w), E);
                                h.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(L(163))
                    }
                } catch (C) {
                    le(t, t.return, C)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, O = e;
                    break
                }
                O = t.return
            }
    return g = ku, ku = !1, g
}

function jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && Jo(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function ki(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function bo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Xf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[Wr], delete t[Fo], delete t[_m], delete t[wm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Zf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Su(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Zf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function es(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ql));
    else if (r !== 4 && (e = e.child, e !== null))
        for (es(e, t, n), e = e.sibling; e !== null;) es(e, t, n), e = e.sibling
}

function ts(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (ts(e, t, n), e = e.sibling; e !== null;) ts(e, t, n), e = e.sibling
}
var ye = null,
    et = !1;

function jt(e, t, n) {
    for (n = n.child; n !== null;) Jf(e, t, n), n = n.sibling
}

function Jf(e, t, n) {
    if (ut && typeof ut.onCommitFiberUnmount == "function") try {
        ut.onCommitFiberUnmount(pi, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Ee || Dn(n, t);
        case 6:
            var r = ye,
                l = et;
            ye = null, jt(e, t, n), ye = r, et = l, ye !== null && (et ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
            break;
        case 18:
            ye !== null && (et ? (e = ye, n = n.stateNode, e.nodeType === 8 ? Gi(e.parentNode, n) : e.nodeType === 1 && Gi(e, n), Ur(e)) : Gi(ye, n.stateNode));
            break;
        case 4:
            r = ye, l = et, ye = n.stateNode.containerInfo, et = !0, jt(e, t, n), ye = r, et = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && (i & 2 || i & 4) && Jo(n, t, o), l = l.next
                } while (l !== r)
            }
            jt(e, t, n);
            break;
        case 1:
            if (!Ee && (Dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                le(n, t, s)
            }
            jt(e, t, n);
            break;
        case 21:
            jt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, jt(e, t, n), Ee = r) : jt(e, t, n);
            break;
        default:
            jt(e, t, n)
    }
}

function xu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Am), t.forEach(function(r) {
            var l = Qm.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Je(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    s = o;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            ye = s.stateNode, et = !1;
                            break e;
                        case 3:
                            ye = s.stateNode.containerInfo, et = !0;
                            break e;
                        case 4:
                            ye = s.stateNode.containerInfo, et = !0;
                            break e
                    }
                    s = s.return
                }
                if (ye === null) throw Error(L(160));
                Jf(i, o, l), ye = null, et = !1;
                var a = l.alternate;
                a !== null && (a.return = null), l.return = null
            } catch (u) {
                le(l, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) bf(t, e), t = t.sibling
}

function bf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Je(t, e), ot(e), r & 4) {
                try {
                    jr(3, e, e.return), ki(3, e)
                } catch (w) {
                    le(e, e.return, w)
                }
                try {
                    jr(5, e, e.return)
                } catch (w) {
                    le(e, e.return, w)
                }
            }
            break;
        case 1:
            Je(t, e), ot(e), r & 512 && n !== null && Dn(n, n.return);
            break;
        case 5:
            if (Je(t, e), ot(e), r & 512 && n !== null && Dn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Ir(l, "")
                } catch (w) {
                    le(e, e.return, w)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    s = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    s === "input" && i.type === "radio" && i.name != null && wc(l, i), Co(s, o);
                    var u = Co(s, i);
                    for (o = 0; o < a.length; o += 2) {
                        var c = a[o],
                            p = a[o + 1];
                        c === "style" ? Cc(l, p) : c === "dangerouslySetInnerHTML" ? xc(l, p) : c === "children" ? Ir(l, p) : ys(l, c, p, u)
                    }
                    switch (s) {
                        case "input":
                            wo(l, i);
                            break;
                        case "textarea":
                            kc(l, i);
                            break;
                        case "select":
                            var f = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var _ = i.value;
                            _ != null ? Wn(l, !!i.multiple, _, !1) : f !== !!i.multiple && (i.defaultValue != null ? Wn(l, !!i.multiple, i.defaultValue, !0) : Wn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Wr] = i
                } catch (w) {
                    le(e, e.return, w)
                }
            }
            break;
        case 6:
            if (Je(t, e), ot(e), r & 4) {
                if (e.stateNode === null) throw Error(L(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (w) {
                    le(e, e.return, w)
                }
            }
            break;
        case 3:
            if (Je(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Ur(t.containerInfo)
            } catch (w) {
                le(e, e.return, w)
            }
            break;
        case 4:
            Je(t, e), ot(e);
            break;
        case 13:
            Je(t, e), ot(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Zs = oe())), r & 4 && xu(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (u = Ee) || c, Je(t, e), Ee = u) : Je(t, e), ot(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (O = e, c = e.child; c !== null;) {
                        for (p = O = c; O !== null;) {
                            switch (f = O, _ = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    jr(4, f, f.return);
                                    break;
                                case 1:
                                    Dn(f, f.return);
                                    var g = f.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                        } catch (w) {
                                            le(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Dn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Cu(p);
                                        continue
                                    }
                            }
                            _ !== null ? (_.return = f, O = _) : Cu(p)
                        }
                        c = c.sibling
                    }
                e: for (c = null, p = e;;) {
                    if (p.tag === 5) {
                        if (c === null) {
                            c = p;
                            try {
                                l = p.stateNode, u ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, a = p.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Ec("display", o))
                            } catch (w) {
                                le(e, e.return, w)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (c === null) try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (w) {
                            le(e, e.return, w)
                        }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === e) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e) break e;
                        c === p && (c = null), p = p.return
                    }
                    c === p && (c = null), p.sibling.return = p.return, p = p.sibling
                }
            }
            break;
        case 19:
            Je(t, e), ot(e), r & 4 && xu(e);
            break;
        case 21:
            break;
        default:
            Je(t, e), ot(e)
    }
}

function ot(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Zf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(L(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Ir(l, ""), r.flags &= -33);
                    var i = Su(e);
                    ts(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        s = Su(e);
                    es(e, s, o);
                    break;
                default:
                    throw Error(L(161))
            }
        }
        catch (a) {
            le(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function zm(e, t, n) {
    O = e, ed(e)
}

function ed(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null;) {
        var l = O,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || wl;
            if (!o) {
                var s = l.alternate,
                    a = s !== null && s.memoizedState !== null || Ee;
                s = wl;
                var u = Ee;
                if (wl = o, (Ee = a) && !u)
                    for (O = l; O !== null;) o = O, a = o.child, o.tag === 22 && o.memoizedState !== null ? Nu(l) : a !== null ? (a.return = o, O = a) : Nu(l);
                for (; i !== null;) O = i, ed(i), i = i.sibling;
                O = l, wl = s, Ee = u
            }
            Eu(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, O = i) : Eu(e)
    }
}

function Eu(e) {
    for (; O !== null;) {
        var t = O;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ee || ki(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ee)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var i = t.updateQueue;
                        i !== null && au(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            au(t, o, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var p = c.dehydrated;
                                    p !== null && Ur(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(L(163))
                }
                Ee || t.flags & 512 && bo(t)
            } catch (f) {
                le(t, t.return, f)
            }
        }
        if (t === e) {
            O = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, O = n;
            break
        }
        O = t.return
    }
}

function Cu(e) {
    for (; O !== null;) {
        var t = O;
        if (t === e) {
            O = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, O = n;
            break
        }
        O = t.return
    }
}

function Nu(e) {
    for (; O !== null;) {
        var t = O;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ki(4, t)
                    } catch (a) {
                        le(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            le(t, l, a)
                        }
                    }
                    var i = t.return;
                    try {
                        bo(t)
                    } catch (a) {
                        le(t, i, a)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        bo(t)
                    } catch (a) {
                        le(t, o, a)
                    }
            }
        } catch (a) {
            le(t, t.return, a)
        }
        if (t === e) {
            O = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, O = s;
            break
        }
        O = t.return
    }
}
var Fm = Math.ceil,
    ii = Ct.ReactCurrentDispatcher,
    Gs = Ct.ReactCurrentOwner,
    qe = Ct.ReactCurrentBatchConfig,
    H = 0,
    ge = null,
    ue = null,
    _e = 0,
    ze = 0,
    Bn = bt(0),
    de = 0,
    qr = null,
    yn = 0,
    Si = 0,
    Xs = 0,
    Rr = null,
    Me = null,
    Zs = 0,
    er = 1 / 0,
    mt = null,
    oi = !1,
    ns = null,
    Qt = null,
    kl = !1,
    Ft = null,
    si = 0,
    Tr = 0,
    rs = null,
    Ol = -1,
    $l = 0;

function Le() {
    return H & 6 ? oe() : Ol !== -1 ? Ol : Ol = oe()
}

function Yt(e) {
    return e.mode & 1 ? H & 2 && _e !== 0 ? _e & -_e : Sm.transition !== null ? ($l === 0 && ($l = Uc()), $l) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vc(e.type)), e) : 1
}

function rt(e, t, n, r) {
    if (50 < Tr) throw Tr = 0, rs = null, Error(L(185));
    br(e, n, r), (!(H & 2) || e !== ge) && (e === ge && (!(H & 2) && (Si |= n), de === 4 && Ut(e, _e)), Ae(e, r), n === 1 && H === 0 && !(t.mode & 1) && (er = oe() + 500, yi && en()))
}

function Ae(e, t) {
    var n = e.callbackNode;
    Sh(e, t);
    var r = Vl(e, e === ge ? _e : 0);
    if (r === 0) n !== null && $a(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && $a(n), t === 1) e.tag === 0 ? km(Pu.bind(null, e)) : cf(Pu.bind(null, e)), vm(function() {
            !(H & 6) && en()
        }), n = null;
        else {
            switch (zc(r)) {
                case 1:
                    n = xs;
                    break;
                case 4:
                    n = $c;
                    break;
                case 16:
                    n = Kl;
                    break;
                case 536870912:
                    n = Ac;
                    break;
                default:
                    n = Kl
            }
            n = ad(n, td.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function td(e, t) {
    if (Ol = -1, $l = 0, H & 6) throw Error(L(327));
    var n = e.callbackNode;
    if (Yn() && e.callbackNode !== n) return null;
    var r = Vl(e, e === ge ? _e : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ai(e, r);
    else {
        t = r;
        var l = H;
        H |= 2;
        var i = rd();
        (ge !== e || _e !== t) && (mt = null, er = oe() + 500, dn(e, t));
        do try {
            Wm();
            break
        } catch (s) {
            nd(e, s)
        }
        while (!0);
        As(), ii.current = i, H = l, ue !== null ? t = 0 : (ge = null, _e = 0, t = de)
    }
    if (t !== 0) {
        if (t === 2 && (l = Ro(e), l !== 0 && (r = l, t = ls(e, l))), t === 1) throw n = qr, dn(e, 0), Ut(e, r), Ae(e, oe()), n;
        if (t === 6) Ut(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !Dm(l) && (t = ai(e, r), t === 2 && (i = Ro(e), i !== 0 && (r = i, t = ls(e, i))), t === 1)) throw n = qr, dn(e, 0), Ut(e, r), Ae(e, oe()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(L(345));
                case 2:
                    sn(e, Me, mt);
                    break;
                case 3:
                    if (Ut(e, r), (r & 130023424) === r && (t = Zs + 500 - oe(), 10 < t)) {
                        if (Vl(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            Le(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = zo(sn.bind(null, e, Me, mt), t);
                        break
                    }
                    sn(e, Me, mt);
                    break;
                case 4:
                    if (Ut(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - nt(r);
                        i = 1 << o, o = t[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Fm(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = zo(sn.bind(null, e, Me, mt), r);
                        break
                    }
                    sn(e, Me, mt);
                    break;
                case 5:
                    sn(e, Me, mt);
                    break;
                default:
                    throw Error(L(329))
            }
        }
    }
    return Ae(e, oe()), e.callbackNode === n ? td.bind(null, e) : null
}

function ls(e, t) {
    var n = Rr;
    return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = ai(e, t), e !== 2 && (t = Me, Me = n, t !== null && is(t)), e
}

function is(e) {
    Me === null ? Me = e : Me.push.apply(Me, e)
}

function Dm(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!lt(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Ut(e, t) {
    for (t &= ~Xs, t &= ~Si, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - nt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Pu(e) {
    if (H & 6) throw Error(L(327));
    Yn();
    var t = Vl(e, 0);
    if (!(t & 1)) return Ae(e, oe()), null;
    var n = ai(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ro(e);
        r !== 0 && (t = r, n = ls(e, r))
    }
    if (n === 1) throw n = qr, dn(e, 0), Ut(e, t), Ae(e, oe()), n;
    if (n === 6) throw Error(L(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Me, mt), Ae(e, oe()), null
}

function Js(e, t) {
    var n = H;
    H |= 1;
    try {
        return e(t)
    } finally {
        H = n, H === 0 && (er = oe() + 500, yi && en())
    }
}

function _n(e) {
    Ft !== null && Ft.tag === 0 && !(H & 6) && Yn();
    var t = H;
    H |= 1;
    var n = qe.transition,
        r = q;
    try {
        if (qe.transition = null, q = 1, e) return e()
    } finally {
        q = r, qe.transition = n, H = t, !(H & 6) && en()
    }
}

function bs() {
    ze = Bn.current, Z(Bn)
}

function dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, gm(n)), ue !== null)
        for (n = ue.return; n !== null;) {
            var r = n;
            switch (Is(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Gl();
                    break;
                case 3:
                    Jn(), Z(Oe), Z(Ce), Ws();
                    break;
                case 5:
                    Bs(r);
                    break;
                case 4:
                    Jn();
                    break;
                case 13:
                    Z(te);
                    break;
                case 19:
                    Z(te);
                    break;
                case 10:
                    Us(r.type._context);
                    break;
                case 22:
                case 23:
                    bs()
            }
            n = n.return
        }
    if (ge = e, ue = e = qt(e.current, null), _e = ze = t, de = 0, qr = null, Xs = Si = yn = 0, Me = Rr = null, cn !== null) {
        for (t = 0; t < cn.length; t++)
            if (n = cn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                n.pending = r
            } cn = null
    }
    return e
}

function nd(e, t) {
    do {
        var n = ue;
        try {
            if (As(), Tl.current = li, ri) {
                for (var r = ne.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                ri = !1
            }
            if (vn = 0, me = fe = ne = null, Lr = !1, Hr = 0, Gs.current = null, n === null || n.return === null) {
                de = 1, qr = t, ue = null;
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    s = n,
                    a = t;
                if (t = _e, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = s,
                        p = c.tag;
                    if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var _ = hu(o);
                    if (_ !== null) {
                        _.flags &= -257, mu(_, o, s, i, t), _.mode & 1 && pu(i, u, t), t = _, a = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var w = new Set;
                            w.add(a), t.updateQueue = w
                        } else g.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            pu(i, u, t), ea();
                            break e
                        }
                        a = Error(L(426))
                    }
                } else if (b && s.mode & 1) {
                    var E = hu(o);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), mu(E, o, s, i, t), Os(bn(a, s));
                        break e
                    }
                }
                i = a = bn(a, s),
                de !== 4 && (de = 2),
                Rr === null ? Rr = [i] : Rr.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var h = Ff(i, a, t);
                            su(i, h);
                            break e;
                        case 1:
                            s = a;
                            var d = i.type,
                                v = i.stateNode;
                            if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Qt === null || !Qt.has(v)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var C = Df(i, s, t);
                                su(i, C);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            id(n)
        } catch (R) {
            t = R, ue === n && n !== null && (ue = n = n.return);
            continue
        }
        break
    } while (!0)
}

function rd() {
    var e = ii.current;
    return ii.current = li, e === null ? li : e
}

function ea() {
    (de === 0 || de === 3 || de === 2) && (de = 4), ge === null || !(yn & 268435455) && !(Si & 268435455) || Ut(ge, _e)
}

function ai(e, t) {
    var n = H;
    H |= 2;
    var r = rd();
    (ge !== e || _e !== t) && (mt = null, dn(e, t));
    do try {
        Bm();
        break
    } catch (l) {
        nd(e, l)
    }
    while (!0);
    if (As(), H = n, ii.current = r, ue !== null) throw Error(L(261));
    return ge = null, _e = 0, de
}

function Bm() {
    for (; ue !== null;) ld(ue)
}

function Wm() {
    for (; ue !== null && !ph();) ld(ue)
}

function ld(e) {
    var t = sd(e.alternate, e, ze);
    e.memoizedProps = e.pendingProps, t === null ? id(e) : ue = t, Gs.current = null
}

function id(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = $m(n, t), n !== null) {
                n.flags &= 32767, ue = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                de = 6, ue = null;
                return
            }
        } else if (n = Om(n, t, ze), n !== null) {
            ue = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ue = t;
            return
        }
        ue = t = e
    } while (t !== null);
    de === 0 && (de = 5)
}

function sn(e, t, n) {
    var r = q,
        l = qe.transition;
    try {
        qe.transition = null, q = 1, Km(e, t, n, r)
    } finally {
        qe.transition = l, q = r
    }
    return null
}

function Km(e, t, n, r) {
    do Yn(); while (Ft !== null);
    if (H & 6) throw Error(L(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (xh(e, i), e === ge && (ue = ge = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kl || (kl = !0, ad(Kl, function() {
            return Yn(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = qe.transition, qe.transition = null;
        var o = q;
        q = 1;
        var s = H;
        H |= 4, Gs.current = null, Um(e, n), bf(n, e), um(Ao), Hl = !!$o, Ao = $o = null, e.current = n, zm(n), hh(), H = s, q = o, qe.transition = i
    } else e.current = n;
    if (kl && (kl = !1, Ft = e, si = l), i = e.pendingLanes, i === 0 && (Qt = null), vh(n.stateNode), Ae(e, oe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (oi) throw oi = !1, e = ns, ns = null, e;
    return si & 1 && e.tag !== 0 && Yn(), i = e.pendingLanes, i & 1 ? e === rs ? Tr++ : (Tr = 0, rs = e) : Tr = 0, en(), null
}

function Yn() {
    if (Ft !== null) {
        var e = zc(si),
            t = qe.transition,
            n = q;
        try {
            if (qe.transition = null, q = 16 > e ? 16 : e, Ft === null) var r = !1;
            else {
                if (e = Ft, Ft = null, si = 0, H & 6) throw Error(L(331));
                var l = H;
                for (H |= 4, O = e.current; O !== null;) {
                    var i = O,
                        o = i.child;
                    if (O.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (O = u; O !== null;) {
                                    var c = O;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            jr(8, c, i)
                                    }
                                    var p = c.child;
                                    if (p !== null) p.return = c, O = p;
                                    else
                                        for (; O !== null;) {
                                            c = O;
                                            var f = c.sibling,
                                                _ = c.return;
                                            if (Xf(c), c === u) {
                                                O = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = _, O = f;
                                                break
                                            }
                                            O = _
                                        }
                                }
                            }
                            var g = i.alternate;
                            if (g !== null) {
                                var w = g.child;
                                if (w !== null) {
                                    g.child = null;
                                    do {
                                        var E = w.sibling;
                                        w.sibling = null, w = E
                                    } while (w !== null)
                                }
                            }
                            O = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) o.return = i, O = o;
                    else e: for (; O !== null;) {
                        if (i = O, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                jr(9, i, i.return)
                        }
                        var h = i.sibling;
                        if (h !== null) {
                            h.return = i.return, O = h;
                            break e
                        }
                        O = i.return
                    }
                }
                var d = e.current;
                for (O = d; O !== null;) {
                    o = O;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null) v.return = o, O = v;
                    else e: for (o = d; O !== null;) {
                        if (s = O, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ki(9, s)
                            }
                        } catch (R) {
                            le(s, s.return, R)
                        }
                        if (s === o) {
                            O = null;
                            break e
                        }
                        var C = s.sibling;
                        if (C !== null) {
                            C.return = s.return, O = C;
                            break e
                        }
                        O = s.return
                    }
                }
                if (H = l, en(), ut && typeof ut.onPostCommitFiberRoot == "function") try {
                    ut.onPostCommitFiberRoot(pi, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            q = n, qe.transition = t
        }
    }
    return !1
}

function Lu(e, t, n) {
    t = bn(n, t), t = Ff(e, t, 1), e = Ht(e, t, 1), t = Le(), e !== null && (br(e, 1, t), Ae(e, t))
}

function le(e, t, n) {
    if (e.tag === 3) Lu(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Lu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qt === null || !Qt.has(r))) {
                    e = bn(n, e), e = Df(t, e, 1), t = Ht(t, e, 1), e = Le(), t !== null && (br(t, 1, e), Ae(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Vm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (_e & n) === n && (de === 4 || de === 3 && (_e & 130023424) === _e && 500 > oe() - Zs ? dn(e, 0) : Xs |= n), Ae(e, t)
}

function od(e, t) {
    t === 0 && (e.mode & 1 ? (t = fl, fl <<= 1, !(fl & 130023424) && (fl = 4194304)) : t = 1);
    var n = Le();
    e = xt(e, t), e !== null && (br(e, t, n), Ae(e, n))
}

function Hm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), od(e, n)
}

function Qm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(L(314))
    }
    r !== null && r.delete(t), od(e, n)
}
var sd;
sd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Oe.current) Ie = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, Im(e, t, n);
            Ie = !!(e.flags & 131072)
        }
    else Ie = !1, b && t.flags & 1048576 && ff(t, Jl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Il(e, t), e = t.pendingProps;
            var l = Gn(t, Ce.current);
            Qn(t, n), l = Vs(null, t, r, e, l, n);
            var i = Hs();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (i = !0, Xl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Fs(t), l.updater = wi, t.stateNode = l, l._reactInternals = t, Ho(t, r, e, n), t = qo(null, t, r, !0, i, n)) : (t.tag = 0, b && i && Ms(t), Pe(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Il(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = qm(r), e = be(r, e), l) {
                    case 0:
                        t = Yo(null, t, r, e, n);
                        break e;
                    case 1:
                        t = yu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = gu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = vu(null, t, r, be(r.type, e), n);
                        break e
                }
                throw Error(L(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), Yo(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), yu(e, t, r, l, n);
        case 3:
            e: {
                if (Vf(t), e === null) throw Error(L(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                vf(e, t),
                ti(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = bn(Error(L(423)), t), t = _u(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = bn(Error(L(424)), t), t = _u(e, t, r, n, l);
                    break e
                } else
                    for (Fe = Vt(t.stateNode.containerInfo.firstChild), De = t, b = !0, tt = null, n = mf(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Xn(), r === l) {
                        t = Et(e, t, n);
                        break e
                    }
                    Pe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return yf(t), e === null && Wo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Uo(r, l) ? o = null : i !== null && Uo(r, i) && (t.flags |= 32), Kf(e, t), Pe(e, t, o, n), t.child;
        case 6:
            return e === null && Wo(t), null;
        case 13:
            return Hf(e, t, n);
        case 4:
            return Ds(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Zn(t, null, r, n) : Pe(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), gu(e, t, r, l, n);
        case 7:
            return Pe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Pe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Pe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, G(bl, r._currentValue), r._currentValue = o, i !== null)
                    if (lt(i.value, o)) {
                        if (i.children === l.children && !Oe.current) {
                            t = Et(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var s = i.dependencies;
                            if (s !== null) {
                                o = i.child;
                                for (var a = s.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            a = wt(-1, n & -n), a.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ko(i.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(L(341));
                                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ko(o, n, t), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                Pe(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Qn(t, n), l = Ge(l), r = r(l), t.flags |= 1, Pe(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = be(r, t.pendingProps), l = be(r.type, l), vu(e, t, r, l, n);
        case 15:
            return Bf(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), Il(e, t), t.tag = 1, $e(r) ? (e = !0, Xl(t)) : e = !1, Qn(t, n), zf(t, r, l), Ho(t, r, l, n), qo(null, t, r, !0, e, n);
        case 19:
            return Qf(e, t, n);
        case 22:
            return Wf(e, t, n)
    }
    throw Error(L(156, t.tag))
};

function ad(e, t) {
    return Oc(e, t)
}

function Ym(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ye(e, t, n, r) {
    return new Ym(e, t, n, r)
}

function ta(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function qm(e) {
    if (typeof e == "function") return ta(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ws) return 11;
        if (e === ks) return 14
    }
    return 2
}

function qt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Al(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") ta(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Tn:
            return pn(n.children, l, i, t);
        case _s:
            o = 8, l |= 8;
            break;
        case mo:
            return e = Ye(12, n, t, l | 2), e.elementType = mo, e.lanes = i, e;
        case go:
            return e = Ye(13, n, t, l), e.elementType = go, e.lanes = i, e;
        case vo:
            return e = Ye(19, n, t, l), e.elementType = vo, e.lanes = i, e;
        case vc:
            return xi(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case mc:
                    o = 10;
                    break e;
                case gc:
                    o = 9;
                    break e;
                case ws:
                    o = 11;
                    break e;
                case ks:
                    o = 14;
                    break e;
                case Mt:
                    o = 16, r = null;
                    break e
            }
            throw Error(L(130, e == null ? e : typeof e, ""))
    }
    return t = Ye(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function pn(e, t, n, r) {
    return e = Ye(7, e, r, t), e.lanes = n, e
}

function xi(e, t, n, r) {
    return e = Ye(22, e, r, t), e.elementType = vc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ro(e, t, n) {
    return e = Ye(6, e, null, t), e.lanes = n, e
}

function lo(e, t, n) {
    return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Gm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zi(0), this.expirationTimes = zi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function na(e, t, n, r, l, i, o, s, a) {
    return e = new Gm(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ye(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Fs(i), e
}

function Xm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Rn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function ud(e) {
    if (!e) return Zt;
    e = e._reactInternals;
    e: {
        if (kn(e) !== e || e.tag !== 1) throw Error(L(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if ($e(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(L(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if ($e(n)) return uf(e, n, t)
    }
    return t
}

function cd(e, t, n, r, l, i, o, s, a) {
    return e = na(n, r, !0, e, l, i, o, s, a), e.context = ud(null), n = e.current, r = Le(), l = Yt(n), i = wt(r, l), i.callback = t ?? null, Ht(n, i, l), e.current.lanes = l, br(e, l, r), Ae(e, r), e
}

function Ei(e, t, n, r) {
    var l = t.current,
        i = Le(),
        o = Yt(l);
    return n = ud(n), t.context === null ? t.context = n : t.pendingContext = n, t = wt(i, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ht(l, t, o), e !== null && (rt(e, l, o, i), Rl(e, l, o)), o
}

function ui(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function ju(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ra(e, t) {
    ju(e, t), (e = e.alternate) && ju(e, t)
}

function Zm() {
    return null
}
var fd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function la(e) {
    this._internalRoot = e
}
Ci.prototype.render = la.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(L(409));
    Ei(e, t, null, null)
};
Ci.prototype.unmount = la.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        _n(function() {
            Ei(null, e, null, null)
        }), t[St] = null
    }
};

function Ci(e) {
    this._internalRoot = e
}
Ci.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Bc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
        At.splice(n, 0, e), n === 0 && Kc(e)
    }
};

function ia(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ni(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ru() {}

function Jm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = ui(o);
                i.call(u)
            }
        }
        var o = cd(t, r, e, 0, null, !1, !1, "", Ru);
        return e._reactRootContainer = o, e[St] = o.current, Dr(e.nodeType === 8 ? e.parentNode : e), _n(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = ui(a);
            s.call(u)
        }
    }
    var a = na(e, 0, !1, null, null, !1, !1, "", Ru);
    return e._reactRootContainer = a, e[St] = a.current, Dr(e.nodeType === 8 ? e.parentNode : e), _n(function() {
        Ei(t, a, n, r)
    }), a
}

function Pi(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var s = l;
            l = function() {
                var a = ui(o);
                s.call(a)
            }
        }
        Ei(t, o, e, l)
    } else o = Jm(n, t, e, l, r);
    return ui(o)
}
Fc = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = wr(t.pendingLanes);
                n !== 0 && (Es(t, n | 1), Ae(t, oe()), !(H & 6) && (er = oe() + 500, en()))
            }
            break;
        case 13:
            _n(function() {
                var r = xt(e, 1);
                if (r !== null) {
                    var l = Le();
                    rt(r, e, 1, l)
                }
            }), ra(e, 1)
    }
};
Cs = function(e) {
    if (e.tag === 13) {
        var t = xt(e, 134217728);
        if (t !== null) {
            var n = Le();
            rt(t, e, 134217728, n)
        }
        ra(e, 134217728)
    }
};
Dc = function(e) {
    if (e.tag === 13) {
        var t = Yt(e),
            n = xt(e, t);
        if (n !== null) {
            var r = Le();
            rt(n, e, t, r)
        }
        ra(e, t)
    }
};
Bc = function() {
    return q
};
Wc = function(e, t) {
    var n = q;
    try {
        return q = e, t()
    } finally {
        q = n
    }
};
Po = function(e, t, n) {
    switch (t) {
        case "input":
            if (wo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = vi(r);
                        if (!l) throw Error(L(90));
                        _c(r), wo(r, l)
                    }
                }
            }
            break;
        case "textarea":
            kc(e, n);
            break;
        case "select":
            t = n.value, t != null && Wn(e, !!n.multiple, t, !1)
    }
};
Lc = Js;
jc = _n;
var bm = {
        usingClientEntryPoint: !1,
        Events: [tl, $n, vi, Nc, Pc, Js]
    },
    mr = {
        findFiberByHostInstance: un,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    eg = {
        bundleType: mr.bundleType,
        version: mr.version,
        rendererPackageName: mr.rendererPackageName,
        rendererConfig: mr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ct.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Mc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: mr.findFiberByHostInstance || Zm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sl.isDisabled && Sl.supportsFiber) try {
        pi = Sl.inject(eg), ut = Sl
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bm;
We.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ia(t)) throw Error(L(200));
    return Xm(e, t, null, n)
};
We.createRoot = function(e, t) {
    if (!ia(e)) throw Error(L(299));
    var n = !1,
        r = "",
        l = fd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = na(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, Dr(e.nodeType === 8 ? e.parentNode : e), new la(t)
};
We.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e)));
    return e = Mc(t), e = e === null ? null : e.stateNode, e
};
We.flushSync = function(e) {
    return _n(e)
};
We.hydrate = function(e, t, n) {
    if (!Ni(t)) throw Error(L(200));
    return Pi(null, e, t, !0, n)
};
We.hydrateRoot = function(e, t, n) {
    if (!ia(e)) throw Error(L(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        o = fd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = cd(t, null, e, 1, n ?? null, l, !1, i, o), e[St] = t.current, Dr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ci(t)
};
We.render = function(e, t, n) {
    if (!Ni(t)) throw Error(L(200));
    return Pi(null, e, t, !1, n)
};
We.unmountComponentAtNode = function(e) {
    if (!Ni(e)) throw Error(L(40));
    return e._reactRootContainer ? (_n(function() {
        Pi(null, null, e, !1, function() {
            e._reactRootContainer = null, e[St] = null
        })
    }), !0) : !1
};
We.unstable_batchedUpdates = Js;
We.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ni(n)) throw Error(L(200));
    if (e == null || e._reactInternals === void 0) throw Error(L(38));
    return Pi(e, t, n, !1, r)
};
We.version = "18.3.1-next-f1338f8080-20240426";

function dd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd)
    } catch (e) {
        console.error(e)
    }
}
dd(), fc.exports = We;
var tg = fc.exports,
    pd, Tu = tg;
pd = Tu.createRoot, Tu.hydrateRoot;
/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Gr() {
    return Gr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Gr.apply(null, arguments)
}
var Dt;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Dt || (Dt = {}));
const Mu = "popstate";

function browserHist(e) {
    e === void 0 && (e = {});
    function t(l, i) {
        let {
            pathname: o = "/",
            search: s = "",
            hash: a = ""
        } = Sn(l.location.pathname + l.location.search + l.location.hash);
        return os("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(l, i) {
        return typeof i == "string" ? i : ci(i)
    }
    function r(l, i) {
        oa(l.pathname.charAt(0) === "/", "relative pathnames are not supported in history.push(" + JSON.stringify(i) + ")")
    }
    return lg(t, n, r, e)
}

function ng(e) {
    e === void 0 && (e = {});

    function t(l, i) {
        let {
            pathname: o = "/",
            search: s = "",
            hash: a = ""
        } = Sn(l.location.hash.substr(1));
        return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), os("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(l, i) {
        let o = l.document.querySelector("base"),
            s = "";
        if (o && o.getAttribute("href")) {
            let a = l.location.href,
                u = a.indexOf("#");
            s = u === -1 ? a : a.slice(0, u)
        }
        return s + "#" + (typeof i == "string" ? i : ci(i))
    }

    function r(l, i) {
        oa(l.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(i) + ")")
    }
    return lg(t, n, r, e)
}

function ie(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function oa(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function rg() {
    return Math.random().toString(36).substr(2, 8)
}

function Iu(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function os(e, t, n, r) {
    return n === void 0 && (n = null), Gr({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Sn(t) : t, {
        state: n,
        key: t && t.key || r || rg()
    })
}

function ci(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Sn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function lg(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: l = document.defaultView,
        v5Compat: i = !1
    } = r, o = l.history, s = Dt.Pop, a = null, u = c();
    u == null && (u = 0, o.replaceState(Gr({}, o.state, {
        idx: u
    }), ""));

    function c() {
        return (o.state || {
            idx: null
        }).idx
    }

    function p() {
        s = Dt.Pop;
        let E = c(),
            h = E == null ? null : E - u;
        u = E, a && a({
            action: s,
            location: w.location,
            delta: h
        })
    }

    function f(E, h) {
        s = Dt.Push;
        let d = os(w.location, E, h);
        n && n(d, E), u = c() + 1;
        let v = Iu(d, u),
            C = w.createHref(d);
        try {
            o.pushState(v, "", C)
        } catch (R) {
            if (R instanceof DOMException && R.name === "DataCloneError") throw R;
            l.location.assign(C)
        }
        i && a && a({
            action: s,
            location: w.location,
            delta: 1
        })
    }

    function _(E, h) {
        s = Dt.Replace;
        let d = os(w.location, E, h);
        n && n(d, E), u = c();
        let v = Iu(d, u),
            C = w.createHref(d);
        o.replaceState(v, "", C), i && a && a({
            action: s,
            location: w.location,
            delta: 0
        })
    }

    function g(E) {
        let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
            d = typeof E == "string" ? E : ci(E);
        return d = d.replace(/ $/, "%20"), ie(h, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, h)
    }
    let w = {
        get action() {
            return s
        },
        get location() {
            return e(l, o)
        },
        listen(E) {
            if (a) throw new Error("A history only accepts one active listener");
            return l.addEventListener(Mu, p), a = E, () => {
                l.removeEventListener(Mu, p), a = null
            }
        },
        createHref(E) {
            return t(l, E)
        },
        createURL: g,
        encodeLocation(E) {
            let h = g(E);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: f,
        replace: _,
        go(E) {
            return o.go(E)
        }
    };
    return w
}
var Ou;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Ou || (Ou = {}));

function ig(e, t, n) {
    return n === void 0 && (n = "/"), og(e, t, n)
}

function og(e, t, n, r) {
    let l = typeof t == "string" ? Sn(t) : t,
        i = tr(l.pathname || "/", n);
    if (i == null) return null;
    let o = hd(e);
    sg(o);
    let s = null,
        a = yg(i);
    for (let u = 0; s == null && u < o.length; ++u) s = gg(o[u], a);
    return s
}

function hd(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (i, o, s) => {
        let a = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        a.relativePath.startsWith("/") && (ie(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = Gt([r, a.relativePath]),
            c = n.concat(a);
        i.children && i.children.length > 0 && (ie(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), hd(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: hg(u, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, o) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, o);
        else
            for (let a of md(i.path)) l(i, o, a)
    }), t
}

function md(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [i, ""] : [i];
    let o = md(r.join("/")),
        s = [];
    return s.push(...o.map(a => a === "" ? i : [i, a].join("/"))), l && s.push(...o), s.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function sg(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : mg(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const ag = /^:[\w-]+$/,
    ug = 3,
    cg = 2,
    fg = 1,
    dg = 10,
    pg = -2,
    $u = e => e === "*";

function hg(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some($u) && (r += pg), t && (r += cg), n.filter(l => !$u(l)).reduce((l, i) => l + (ag.test(i) ? ug : i === "" ? fg : dg), r)
}

function mg(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function gg(e, t, n) {
    let {
        routesMeta: r
    } = e, l = {}, i = "/", o = [];
    for (let s = 0; s < r.length; ++s) {
        let a = r[s],
            u = s === r.length - 1,
            c = i === "/" ? t : t.slice(i.length) || "/",
            p = ss({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: u
            }, c),
            f = a.route;
        if (!p) return null;
        Object.assign(l, p.params), o.push({
            params: l,
            pathname: Gt([i, p.pathname]),
            pathnameBase: kg(Gt([i, p.pathnameBase])),
            route: f
        }), p.pathnameBase !== "/" && (i = Gt([i, p.pathnameBase]))
    }
    return o
}

function ss(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = vg(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let i = l[0],
        o = i.replace(/(.)\/+$/, "$1"),
        s = l.slice(1);
    return {
        params: r.reduce((u, c, p) => {
            let {
                paramName: f,
                isOptional: _
            } = c;
            if (f === "*") {
                let w = s[p] || "";
                o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const g = s[p];
            return _ && !g ? u[f] = void 0 : u[f] = (g || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}

function vg(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), oa(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, s, a) => (r.push({
            paramName: s,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function yg(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return oa(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function tr(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function _g(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = ""
    } = typeof e == "string" ? Sn(e) : e, i;
    return n ? (n = yd(n), n.startsWith("/") ? i = Au(n.substring(1), "/") : i = Au(n, t)) : i = t, {
        pathname: i,
        search: Sg(r),
        hash: xg(l)
    }
}

function Au(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function io(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function wg(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function gd(e, t) {
    let n = wg(e);
    return t ? n.map((r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function vd(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = Sn(e) : (l = Gr({}, e), ie(!l.pathname || !l.pathname.includes("?"), io("?", "pathname", "search", l)), ie(!l.pathname || !l.pathname.includes("#"), io("#", "pathname", "hash", l)), ie(!l.search || !l.search.includes("#"), io("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "",
        o = i ? "/" : l.pathname,
        s;
    if (o == null) s = n;
    else {
        let p = t.length - 1;
        if (!r && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === "..";) f.shift(), p -= 1;
            l.pathname = f.join("/")
        }
        s = p >= 0 ? t[p] : "/"
    }
    let a = _g(l, s),
        u = o && o !== "/" && o.endsWith("/"),
        c = (i || o === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a
}
const yd = e => e.replace(/\/\/+/g, "/"),
    Gt = e => yd(e.join("/")),
    kg = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Sg = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    xg = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function Eg(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const _d = ["post", "put", "patch", "delete"];
new Set(_d);
const Cg = ["get", ..._d];
new Set(Cg);
/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Xr() {
    return Xr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Xr.apply(null, arguments)
}
const Li = N.createContext(null),
    wd = N.createContext(null),
    tn = N.createContext(null),
    ji = N.createContext(null),
    xn = N.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    kd = N.createContext(null);

function Ng(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    rl() || ie(!1);
    let {
        basename: r,
        navigator: l
    } = N.useContext(tn), {
        hash: i,
        pathname: o,
        search: s
    } = Ri(e, {
        relative: n
    }), a = o;
    return r !== "/" && (a = o === "/" ? r : Gt([r, o])), l.createHref({
        pathname: a,
        search: s,
        hash: i
    })
}

function rl() {
    return N.useContext(ji) != null
}

function or() {
    return rl() || ie(!1), N.useContext(ji).location
}

function Sd(e) {
    N.useContext(tn).static || N.useLayoutEffect(e)
}

function Pg() {
    let {
        isDataRoute: e
    } = N.useContext(xn);
    return e ? Dg() : Lg()
}

function Lg() {
    rl() || ie(!1);
    let e = N.useContext(Li),
        {
            basename: t,
            future: n,
            navigator: r
        } = N.useContext(tn),
        {
            matches: l
        } = N.useContext(xn),
        {
            pathname: i
        } = or(),
        o = JSON.stringify(gd(l, n.v7_relativeSplatPath)),
        s = N.useRef(!1);
    return Sd(() => {
        s.current = !0
    }), N.useCallback(function(u, c) {
        if (c === void 0 && (c = {}), !s.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let p = vd(u, JSON.parse(o), i, c.relative === "path");
        e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : Gt([t, p.pathname])), (c.replace ? r.replace : r.push)(p, c.state, c)
    }, [t, r, o, i, e])
}

function Ri(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = N.useContext(tn), {
        matches: l
    } = N.useContext(xn), {
        pathname: i
    } = or(), o = JSON.stringify(gd(l, r.v7_relativeSplatPath));
    return N.useMemo(() => vd(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}

function jg(e, t) {
    return Rg(e, t)
}

function Rg(e, t, n, r) {
    rl() || ie(!1);
    let {
        navigator: l
    } = N.useContext(tn), {
        matches: i
    } = N.useContext(xn), o = i[i.length - 1], s = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : "/";
    o && o.route;
    let u = or(),
        c;
    if (t) {
        var p;
        let E = typeof t == "string" ? Sn(t) : t;
        a === "/" || (p = E.pathname) != null && p.startsWith(a) || ie(!1), c = E
    } else c = u;
    let f = c.pathname || "/",
        _ = f;
    if (a !== "/") {
        let E = a.replace(/^\//, "").split("/");
        _ = "/" + f.replace(/^\//, "").split("/").slice(E.length).join("/")
    }
    let g = ig(e, {
            pathname: _
        }),
        w = $g(g && g.map(E => Object.assign({}, E, {
            params: Object.assign({}, s, E.params),
            pathname: Gt([a, l.encodeLocation ? l.encodeLocation(E.pathname).pathname : E.pathname]),
            pathnameBase: E.pathnameBase === "/" ? a : Gt([a, l.encodeLocation ? l.encodeLocation(E.pathnameBase).pathname : E.pathnameBase])
        })), i, n, r);
    return t && w ? N.createElement(ji.Provider, {
        value: {
            location: Xr({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Dt.Pop
        }
    }, w) : w
}

function Tg() {
    let e = Fg(),
        t = Eg(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? N.createElement("pre", {
        style: l
    }, n) : null, null)
}
const Mg = N.createElement(Tg, null);
class Ig extends N.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? N.createElement(xn.Provider, {
            value: this.props.routeContext
        }, N.createElement(kd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function Og(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, l = N.useContext(Li);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), N.createElement(xn.Provider, {
        value: t
    }, r)
}

function $g(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let o = e,
        s = (l = n) == null ? void 0 : l.errors;
    if (s != null) {
        let c = o.findIndex(p => p.route.id && (s == null ? void 0 : s[p.route.id]) !== void 0);
        c >= 0 || ie(!1), o = o.slice(0, Math.min(o.length, c + 1))
    }
    let a = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let p = o[c];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c), p.route.id) {
                let {
                    loaderData: f,
                    errors: _
                } = n, g = p.route.loader && f[p.route.id] === void 0 && (!_ || _[p.route.id] === void 0);
                if (p.route.lazy || g) {
                    a = !0, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((c, p, f) => {
        let _, g = !1,
            w = null,
            E = null;
        n && (_ = s && p.route.id ? s[p.route.id] : void 0, w = p.route.errorElement || Mg, a && (u < 0 && f === 0 ? (Bg("route-fallback"), g = !0, E = null) : u === f && (g = !0, E = p.route.hydrateFallbackElement || null)));
        let h = t.concat(o.slice(0, f + 1)),
            d = () => {
                let v;
                return _ ? v = w : g ? v = E : p.route.Component ? v = N.createElement(p.route.Component, null) : p.route.element ? v = p.route.element : v = c, N.createElement(Og, {
                    match: p,
                    routeContext: {
                        outlet: c,
                        matches: h,
                        isDataRoute: n != null
                    },
                    children: v
                })
            };
        return n && (p.route.ErrorBoundary || p.route.errorElement || f === 0) ? N.createElement(Ig, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: _,
            children: d(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : d()
    }, null)
}
var xd = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(xd || {}),
    Ed = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Ed || {});

function Ag(e) {
    let t = N.useContext(Li);
    return t || ie(!1), t
}

function Ug(e) {
    let t = N.useContext(wd);
    return t || ie(!1), t
}

function zg(e) {
    let t = N.useContext(xn);
    return t || ie(!1), t
}

function Cd(e) {
    let t = zg(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ie(!1), n.route.id
}

function Fg() {
    var e;
    let t = N.useContext(kd),
        n = Ug(),
        r = Cd();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Dg() {
    let {
        router: e
    } = Ag(xd.UseNavigateStable), t = Cd(Ed.UseNavigateStable), n = N.useRef(!1);
    return Sd(() => {
        n.current = !0
    }), N.useCallback(function(l, i) {
        i === void 0 && (i = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, Xr({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const Uu = {};

function Bg(e, t, n) {
    Uu[e] || (Uu[e] = !0)
}

function Wg(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function an(e) {
    ie(!1)
}

function Kg(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = Dt.Pop,
        navigator: i,
        static: o = !1,
        future: s
    } = e;
    rl() && ie(!1);
    let a = t.replace(/^\/*/, "/"),
        u = N.useMemo(() => ({
            basename: a,
            navigator: i,
            static: o,
            future: Xr({
                v7_relativeSplatPath: !1
            }, s)
        }), [a, s, i, o]);
    typeof r == "string" && (r = Sn(r));
    let {
        pathname: c = "/",
        search: p = "",
        hash: f = "",
        state: _ = null,
        key: g = "default"
    } = r, w = N.useMemo(() => {
        let E = tr(c, a);
        return E == null ? null : {
            location: {
                pathname: E,
                search: p,
                hash: f,
                state: _,
                key: g
            },
            navigationType: l
        }
    }, [a, c, p, f, _, g, l]);
    return w == null ? null : N.createElement(tn.Provider, {
        value: u
    }, N.createElement(ji.Provider, {
        children: n,
        value: w
    }))
}

function Vg(e) {
    let {
        children: t,
        location: n
    } = e;
    return jg(as(t), n)
}
new Promise(() => {});

function as(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return N.Children.forEach(e, (r, l) => {
        if (!N.isValidElement(r)) return;
        let i = [...t, l];
        if (r.type === N.Fragment) {
            n.push.apply(n, as(r.props.children, i));
            return
        }
        r.type !== an && ie(!1), !r.props.index || !r.props.children || ie(!1);
        let o = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = as(r.props.children, i)), n.push(o)
    }), n
}
/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fi() {
    return fi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, fi.apply(null, arguments)
}

function Nd(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) !== -1) continue;
            n[r] = e[r]
        } return n
}

function Hg(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function Qg(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Hg(e)
}
const Yg = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    qg = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
    Gg = "6";
try {
    window.__reactRouterVersion = Gg
} catch {}
const Xg = N.createContext({
        isTransitioning: !1
    }),
    Zg = "startTransition",
    zu = Vp[Zg];

function Jg(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: l
    } = e, i = N.useRef();
    i.current == null && (i.current = browserHist({
        window: l,
        v5Compat: !0
    }));
    let o = i.current,
        [s, a] = N.useState({
            action: o.action,
            location: o.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        c = N.useCallback(p => {
            u && zu ? zu(() => a(p)) : a(p)
        }, [a, u]);
    return N.useLayoutEffect(() => o.listen(c), [o, c]), N.useEffect(() => Wg(r), [r]), N.createElement(Kg, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: o,
        future: r
    })
}
const bg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    e0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ot = N.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: i,
            replace: o,
            state: s,
            target: a,
            to: u,
            preventScrollReset: c,
            viewTransition: p
        } = t, f = Nd(t, Yg), {
            basename: _
        } = N.useContext(tn), g, w = !1;
        if (typeof u == "string" && e0.test(u) && (g = u, bg)) try {
            let v = new URL(window.location.href),
                C = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
                R = tr(C.pathname, _);
            C.origin === v.origin && R != null ? u = R + C.search + C.hash : w = !0
        } catch {}
        let E = Ng(u, {
                relative: l
            }),
            h = r0(u, {
                replace: o,
                state: s,
                target: a,
                preventScrollReset: c,
                relative: l,
                viewTransition: p
            });

        function d(v) {
            r && r(v), v.defaultPrevented || h(v)
        }
        return N.createElement("a", fi({}, f, {
            href: g || E,
            onClick: w || i ? r : d,
            ref: n,
            target: a
        }))
    }),
    t0 = N.forwardRef(function(t, n) {
        let {
            "aria-current": r = "page",
            caseSensitive: l = !1,
            className: i = "",
            end: o = !1,
            style: s,
            to: a,
            viewTransition: u,
            children: c
        } = t, p = Nd(t, qg), f = Ri(a, {
            relative: p.relative
        }), _ = or(), g = N.useContext(wd), {
            navigator: w,
            basename: E
        } = N.useContext(tn), h = g != null && l0(f) && u === !0, d = w.encodeLocation ? w.encodeLocation(f).pathname : f.pathname, v = _.pathname, C = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
        l || (v = v.toLowerCase(), C = C ? C.toLowerCase() : null, d = d.toLowerCase()), C && E && (C = tr(C, E) || C);
        const R = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
        let P = v === d || !o && v.startsWith(d) && v.charAt(R) === "/",
            j = C != null && (C === d || !o && C.startsWith(d) && C.charAt(d.length) === "/"),
            M = {
                isActive: P,
                isPending: j,
                isTransitioning: h
            },
            Q = P ? r : void 0,
            $;
        typeof i == "function" ? $ = i(M) : $ = [i, P ? "active" : null, j ? "pending" : null, h ? "transitioning" : null].filter(Boolean).join(" ");
        let V = typeof s == "function" ? s(M) : s;
        return N.createElement(Ot, fi({}, p, {
            "aria-current": Q,
            className: $,
            ref: n,
            style: V,
            to: a,
            viewTransition: u
        }), typeof c == "function" ? c(M) : c)
    });
var us;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(us || (us = {}));
var Fu;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Fu || (Fu = {}));

function n0(e) {
    let t = N.useContext(Li);
    return t || ie(!1), t
}

function r0(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: i,
        relative: o,
        viewTransition: s
    } = t === void 0 ? {} : t, a = Pg(), u = or(), c = Ri(e, {
        relative: o
    });
    return N.useCallback(p => {
        if (Qg(p, n)) {
            p.preventDefault();
            let f = r !== void 0 ? r : ci(u) === ci(c);
            a(e, {
                replace: f,
                state: l,
                preventScrollReset: i,
                relative: o,
                viewTransition: s
            })
        }
    }, [u, a, c, r, l, n, e, i, o, s])
}

function l0(e, t) {
    t === void 0 && (t = {});
    let n = N.useContext(Xg);
    n == null && ie(!1);
    let {
        basename: r
    } = n0(us.useViewTransitionState), l = Ri(e, {
        relative: t.relative
    });
    if (!n.isTransitioning) return !1;
    let i = tr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        o = tr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return ss(l.pathname, o) != null || ss(l.pathname, i) != null
}
const i0 = "" + new URL("posters-03c-DcrTPHEA.jpg", import.meta.url).href,
    o0 = "" + new URL("posters-04-CwO4P0HS.jpg", import.meta.url).href,
    s0 = "" + new URL("posters-05c-EZQUGItg.jpg", import.meta.url).href,
    a0 = "" + new URL("posters-06c-Cm1RlSC4.jpg", import.meta.url).href,
    u0 = "" + new URL("posters-07c-B6k-PxTq.jpg", import.meta.url).href,
    c0 = "" + new URL("posters-08c-BkXpv3eq.jpg", import.meta.url).href,
    f0 = "" + new URL("posters-09c-DhmcyLUx.jpg", import.meta.url).href,
    d0 = "" + new URL("posters-11c-Dq405eUq.jpg", import.meta.url).href,
    p0 = "" + new URL("posters-12c-CNr44aYR.jpg", import.meta.url).href,
    h0 = "" + new URL("posters-15-BElmWWxZ.jpg", import.meta.url).href,
    m0 = "" + new URL("posters-16-B6ZrZDmI.jpg", import.meta.url).href,
    g0 = "" + new URL("posters-17-BsRNMTJO.jpg", import.meta.url).href,
    v0 = "" + new URL("posters-new-01-CmJCM85I.jpg", import.meta.url).href,
    y0 = "" + new URL("posters-new-02-BPRVYgGc.jpg", import.meta.url).href,
    _0 = "" + new URL("tshirt-01c-DqaXkUuy.jpg", import.meta.url).href,
    w0 = "" + new URL("tshirt-03-PQFBAZCZ.jpg", import.meta.url).href,
    k0 = "" + new URL("tshirt-07-CFwvKUHB.jpg", import.meta.url).href,
    S0 = "" + new URL("tshirt-08-DETiQK2P.jpg", import.meta.url).href,
    x0 = "" + new URL("tshirt-09-BhkZAd8C.jpg", import.meta.url).href,
    E0 = "" + new URL("engineers-cup-01-iAtKLVx9.jpg", import.meta.url).href,
    C0 = "" + new URL("engineers-cup-03-C61ebOdT.jpg", import.meta.url).href,
    N0 = "" + new URL("engineers-cup-04-CiDcW5J-.jpg", import.meta.url).href,
    P0 = "" + new URL("engineers-cup-05-Brai4xHp.jpg", import.meta.url).href,
    L0 = "" + new URL("engineers-cup-07-VMn1BbPd.jpg", import.meta.url).href,
    j0 = "" + new URL("engineers-cup-10-CtFCBSVU.jpg", import.meta.url).href,
    R0 = "" + new URL("engineers-cup-11-E9-mBiMC.jpg", import.meta.url).href,
    T0 = "" + new URL("engineers-cup-15-DWoVNid7.jpg", import.meta.url).href,
    M0 = "" + new URL("engineers-cup-16-ztDCycFe.jpg", import.meta.url).href,
    I0 = "" + new URL("engineers-cup-20-BHzCUn6j.jpg", import.meta.url).href,
    O0 = "" + new URL("letterman-25-10-B09pK9SK.jpg", import.meta.url).href,
    $0 = "" + new URL("letterman-25-14-EwkBaQPH.jpg", import.meta.url).href,
    A0 = "" + new URL("letterman-25-15-gebu81fl.jpg", import.meta.url).href,
    U0 = "" + new URL("letterman-25-18-BmZFFuIF.jpg", import.meta.url).href,
    z0 = "" + new URL("letterman-25-22-C8Ir0n6A.jpg", import.meta.url).href,
    F0 = "" + new URL("letterman-25-23-9B3o7BjI.jpg", import.meta.url).href,
    D0 = "" + new URL("letterman-25-24-NG5OneEG.jpg", import.meta.url).href,
    B0 = "" + new URL("letterman-25-27-XcWL5Cnr.jpg", import.meta.url).href,
    W0 = "" + new URL("letterman-25-29-C2abaxa5.jpg", import.meta.url).href,
    K0 = "" + new URL("letterman-25-31-BId5w3Bc.jpg", import.meta.url).href,
    V0 = "" + new URL("letterman-25-33-BPMmFd1V.jpg", import.meta.url).href,
    H0 = "" + new URL("letterman-25-39-UuknDvIU.jpg", import.meta.url).href,
    Q0 = "" + new URL("letterman-25-41-DWm5BAsv.jpg", import.meta.url).href,
    Y0 = "" + new URL("letterman-25-43-DtjiML7M.jpg", import.meta.url).href,
    q0 = "" + new URL("letterman-25-61-C23e2-rd.jpg", import.meta.url).href,
    G0 = "" + new URL("esummit-26-08-Bu8QjFNO.jpg", import.meta.url).href,
    X0 = "" + new URL("esummit-26-11-Ez_OckUK.jpg", import.meta.url).href,
    Z0 = "" + new URL("esummit-26-12-NcHxm_rF.jpg", import.meta.url).href,
    J0 = "" + new URL("esummit-25-01-BdFjddkg.jpg", import.meta.url).href,
    b0 = "" + new URL("esummit-25-04-DRpZu_UI.jpg", import.meta.url).href,
    ev = "" + new URL("esummit-25-11-CO0hABo9.jpg", import.meta.url).href,
    tv = "" + new URL("esummit-25-16-CdiLCwAk.jpg", import.meta.url).href,
    nv = "" + new URL("moneo-01-DoR-rIJW.jpg", import.meta.url).href,
    rv = "" + new URL("moneo-02-PufFbWAg.jpg", import.meta.url).href,
    lv = "" + new URL("moneo-03-BL8sfH9N.jpg", import.meta.url).href,
    iv = "" + new URL("moneo-04-dSISRLWu.jpg", import.meta.url).href,
    ov = "" + new URL("moneo-05-JHbNH6OQ.jpg", import.meta.url).href,
    sv = "" + new URL("moneo-06-rsypki0G.jpg", import.meta.url).href,
    av = "" + new URL("moneo-07-tpNqzH2u.jpg", import.meta.url).href,
    uv = "" + new URL("moneo-08-BI-CTbcm.jpg", import.meta.url).href,
    cv = "" + new URL("portrait-cutout-THAYbbHN.png", import.meta.url).href,
    fv = "" + new URL("portrait-sil-blue-B0oZ7dLr.png", import.meta.url).href,
    dv = "" + new URL("portrait-sil-red-Cxl1ui-m.png", import.meta.url).href,
    pv = "" + new URL("portrait-sil-black-CZ9l0fgm.png", import.meta.url).href,
    hv = "" + new URL("reel1-C3aNBUcP.jpg", import.meta.url).href,
    mv = "" + new URL("reel2-BGcclHfd.jpg", import.meta.url).href,
    gv = "" + new URL("reel3-DPAwZHEa.jpg", import.meta.url).href,
    vv = "" + new URL("desypher-yxM0rMue.jpg", import.meta.url).href,
    yv = "" + new URL("aura-BRWLSYsi.jpg", import.meta.url).href,
    _v = cv,
    wv = fv,
    kv = dv,
    Sv = pv,
    Ul = [hv, mv, gv],
    Du = vv,
    Bu = yv,
    sa = [{
        id: "posters",
        title: "Posters",
        sticker: "graphic design",
        items: [{
            src: v0,
            alt: "Posters - make it look twice",
            name: "make it look twice"
        }, {
            src: y0,
            alt: "Posters - 1. e4 - open like you mean it",
            name: "1. e4 - open like you mean it"
        }, {
            src: h0,
            alt: "Posters - Mahakaal",
            name: "Mahakaal",
            wide: !0
        }, {
            src: i0,
            alt: "Posters - Engineer's Cup jersey reveal",
            name: "Engineer's Cup jersey reveal"
        }, {
            src: o0,
            alt: "Posters - International Men's Day",
            name: "International Men's Day"
        }, {
            src: m0,
            alt: "Posters - World Photography Day",
            name: "World Photography Day"
        }, {
            src: a0,
            alt: "Posters - The Letterman - announcement",
            name: "The Letterman - announcement"
        }, {
            src: u0,
            alt: "Posters - Bhang Journeys - book reading",
            name: "Bhang Journeys - book reading"
        }, {
            src: c0,
            alt: "Posters - Yuva Sansad",
            name: "Yuva Sansad"
        }, {
            src: f0,
            alt: "Posters - Open Mic",
            name: "Open Mic"
        }, {
            src: g0,
            alt: "Posters - Indie Night - Kartikey & Friends",
            name: "Indie Night - Kartikey & Friends"
        }, {
            src: d0,
            alt: "Posters - Vardaan",
            name: "Vardaan"
        }, {
            src: p0,
            alt: "Posters - Dead Poets Society - screening",
            name: "Dead Poets Society - screening"
        }, {
            src: s0,
            alt: "Posters - Udghosh",
            name: "Udghosh"
        }]
    }, {
        cover: 1, id: "tshirt",
        title: "T-Shirt",
        sticker: "merch",
        items: [{
            src: _0,
            alt: "T - E-Summit '26 merch drop",
            name: "E-Summit '26 merch drop"
        }, {
            src: w0,
            alt: "T - SWAYAMS comic tee - front & back",
            name: "SWAYAMS comic tee - front & back"
        }, {
            src: k0,
            alt: "T - SWAYAMS comic tee - all angles",
            name: "SWAYAMS comic tee - all angles"
        }, {
            src: S0,
            alt: "T - Hustlin' - green tee",
            name: "Hustlin' - green tee"
        }, {
            src: x0,
            alt: "T - SAY MY NAME - comic poster",
            name: "SAY MY NAME - comic poster"
        }]
    }, {
        id: "engineers-cup",
        title: "Engineer's Cup",
        sticker: "brochure",
        items: [{
            src: E0,
            alt: "Engineer's Cup - Brochure cover",
            name: "Brochure cover"
        }, {
            src: C0,
            alt: "Engineer's Cup - About the Cup",
            name: "About the Cup"
        }, {
            src: N0,
            alt: "Engineer's Cup - Why sponsor us",
            name: "Why sponsor us"
        }, {
            src: P0,
            alt: "Engineer's Cup - By the numbers",
            name: "By the numbers"
        }, {
            src: L0,
            alt: "Engineer's Cup - Sports celebrity",
            name: "Sports celebrity"
        }, {
            src: j0,
            alt: "Engineer's Cup - Title sponsor",
            name: "Title sponsor"
        }, {
            src: R0,
            alt: "Engineer's Cup - Powered by",
            name: "Powered by"
        }, {
            src: T0,
            alt: "Engineer's Cup - Event list",
            name: "Event list"
        }, {
            src: M0,
            alt: "Engineer's Cup - Over the years",
            name: "Over the years"
        }, {
            src: I0,
            alt: "Engineer's Cup - Previous partners",
            name: "Previous partners"
        }]
    }, {
        cover: 8, id: "letterman-25",
        title: "Letterman 25'",
        sticker: "magazine",
        items: [{
            src: O0,
            alt: "Letterman 25' - Backside (Jagannath Bhai) 1",
            name: "Backside (Jagannath Bhai) 1"
        }, {
            src: $0,
            alt: "Letterman 25' - Cover Page 1",
            name: "Cover Page 1",
            wide: !0
        }, {
            src: A0,
            alt: "Letterman 25' - F  A day in the life of an OUTR 1",
            name: "F  A day in the life of an OUTR 1",
            wide: !0
        }, {
            src: U0,
            alt: "Letterman 25' - F  Clubs (2) 1",
            name: "F  Clubs (2) 1"
        }, {
            src: z0,
            alt: "Letterman 25' - F  Convocation 1",
            name: "F  Convocation 1"
        }, {
            src: F0,
            alt: "Letterman 25' - F  Cross Word (2) 1",
            name: "F  Cross Word (2) 1"
        }, {
            src: D0,
            alt: "Letterman 25' - F  Cross Word 1",
            name: "F  Cross Word 1"
        }, {
            src: B0,
            alt: "Letterman 25' - F  Editorial 1",
            name: "F  Editorial 1"
        }, {
            src: W0,
            alt: "Letterman 25' - F  First Part's Cover Prologue 1",
            name: "F  First Part's Cover Prologue 1"
        }, {
            src: K0,
            alt: "Letterman 25' - F  Painting Section's cover 1",
            name: "F  Painting Section's cover 1"
        }, {
            src: V0,
            alt: "Letterman 25' - F  Part Three's Cover 1",
            name: "F  Part Three's Cover 1"
        }, {
            src: H0,
            alt: "Letterman 25' - F  Second Part's Cover 1",
            name: "F  Second Part's Cover 1"
        }, {
            src: Q0,
            alt: "Letterman 25' - F  The Crew 1",
            name: "F  The Crew 1"
        }, {
            src: Y0,
            alt: "Letterman 25' - Gold Medalist 1",
            name: "Gold Medalist 1"
        }, {
            src: q0,
            alt: "Letterman 25' - Through the years 1",
            name: "Through the years 1"
        }]
    }, {
        cover: 2, id: "esummit-26",
        title: "E-Summit 26'",
        sticker: "branding",
        items: [{
            src: G0,
            alt: "E - Trade-Up Challenge",
            name: "Trade-Up Challenge"
        }, {
            src: X0,
            alt: "E - Corporate MUN",
            name: "Corporate MUN"
        }, {
            src: Z0,
            alt: "E - Marketeer",
            name: "Marketeer"
        }, {
            src: J0,
            alt: "E-Summit 26' - Monopoly Teaser Posts",
            name: "Monopoly Teaser Posts"
        }]
    }, {
        id: "esummit-25",
        title: "E-Summit 25'",
        sticker: "branding",
        items: [{
            src: b0,
            alt: "E - IPL Auction - round 1 results",
            name: "IPL Auction - round 1 results"
        }, {
            src: ev,
            alt: "E - Registration open",
            name: "Registration open"
        }, {
            src: tv,
            alt: "E - Organising committee ID",
            name: "Organising committee ID"
        }]
    }],
    Pd = [{
        src: nv,
        alt: "Moneo - Components",
        name: "Components"
    }, {
        src: rv,
        alt: "Moneo - Dashboard",
        name: "Dashboard"
    }, {
        src: lv,
        alt: "Moneo - Transactions",
        name: "Transactions"
    }, {
        src: iv,
        alt: "Moneo - Transactions Add form",
        name: "Transactions Add form"
    }, {
        src: ov,
        alt: "Moneo - Analytics",
        name: "Analytics"
    }, {
        src: sv,
        alt: "Moneo - AI Insights",
        name: "AI Insights"
    }, {
        src: av,
        alt: "Moneo - Budgets",
        name: "Budgets"
    }, {
        src: uv,
        alt: "Moneo - Mobile Dashboard",
        name: "Mobile Dashboard"
    }];

function xv(e) {
    return e !== null ? {
        comment: e,
        variations: []
    } : {
        variations: []
    }
}

function Ev(e, t, n, r, l) {
    const i = {
        move: e,
        variations: l
    };
    return t && (i.suffix = t), n && (i.nag = n), r !== null && (i.comment = r), i
}

function Cv(...e) {
    const [t, ...n] = e;
    let r = t;
    for (const l of n) l !== null && (r.variations = [l, ...l.variations], l.variations = [], r = l);
    return t
}

function Nv(e, t) {
    if (t.marker && t.marker.comment) {
        let n = t.root;
        for (;;) {
            const r = n.variations[0];
            if (!r) {
                n.comment = t.marker.comment;
                break
            }
            n = r
        }
    }
    return {
        headers: e,
        root: t.root,
        result: (t.marker && t.marker.result) ?? void 0
    }
}

function Pv(e, t) {
    function n() {
        this.constructor = e
    }
    n.prototype = t.prototype, e.prototype = new n
}

function nr(e, t, n, r) {
    var l = Error.call(this, e);
    return Object.setPrototypeOf && Object.setPrototypeOf(l, nr.prototype), l.expected = t, l.found = n, l.location = r, l.name = "SyntaxError", l
}
Pv(nr, Error);

function oo(e, t, n) {
    return n = n || " ", e.length > t ? e : (t -= e.length, n += n.repeat(t), e + n.slice(0, t))
}
nr.prototype.format = function(e) {
    var t = "Error: " + this.message;
    if (this.location) {
        var n = null,
            r;
        for (r = 0; r < e.length; r++)
            if (e[r].source === this.location.source) {
                n = e[r].text.split(/\r\n|\n|\r/g);
                break
            } var l = this.location.start,
            i = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(l) : l,
            o = this.location.source + ":" + i.line + ":" + i.column;
        if (n) {
            var s = this.location.end,
                a = oo("", i.line.toString().length, " "),
                u = n[l.line - 1],
                c = l.line === s.line ? s.column : u.length + 1,
                p = c - l.column || 1;
            t += `
 --> ` + o + `
` + a + ` |
` + i.line + " | " + u + `
` + a + " | " + oo("", l.column - 1, " ") + oo("", p, "^")
        } else t += `
 at ` + o
    }
    return t
};
nr.buildMessage = function(e, t) {
    var n = {
        literal: function(u) {
            return '"' + l(u.text) + '"'
        },
        class: function(u) {
            var c = u.parts.map(function(p) {
                return Array.isArray(p) ? i(p[0]) + "-" + i(p[1]) : i(p)
            });
            return "[" + (u.inverted ? "^" : "") + c.join("") + "]"
        },
        any: function() {
            return "any character"
        },
        end: function() {
            return "end of input"
        },
        other: function(u) {
            return u.description
        }
    };

    function r(u) {
        return u.charCodeAt(0).toString(16).toUpperCase()
    }

    function l(u) {
        return u.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(c) {
            return "\\x0" + r(c)
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(c) {
            return "\\x" + r(c)
        })
    }

    function i(u) {
        return u.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(c) {
            return "\\x0" + r(c)
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(c) {
            return "\\x" + r(c)
        })
    }

    function o(u) {
        return n[u.type](u)
    }

    function s(u) {
        var c = u.map(o),
            p, f;
        if (c.sort(), c.length > 0) {
            for (p = 1, f = 1; p < c.length; p++) c[p - 1] !== c[p] && (c[f] = c[p], f++);
            c.length = f
        }
        switch (c.length) {
            case 1:
                return c[0];
            case 2:
                return c[0] + " or " + c[1];
            default:
                return c.slice(0, -1).join(", ") + ", or " + c[c.length - 1]
        }
    }

    function a(u) {
        return u ? '"' + l(u) + '"' : "end of input"
    }
    return "Expected " + s(e) + " but " + a(t) + " found."
};

function Lv(e, t) {
    t = t !== void 0 ? t : {};
    var n = {},
        r = t.grammarSource,
        l = {
            pgn: va
        },
        i = va,
        o = "[",
        s = '"',
        a = "]",
        u = ".",
        c = "O-O-O",
        p = "O-O",
        f = "0-0-0",
        _ = "0-0",
        g = "$",
        w = "{",
        E = "}",
        h = ";",
        d = "(",
        v = ")",
        C = "1-0",
        R = "0-1",
        P = "1/2-1/2",
        j = "*",
        M = /^[a-zA-Z]/,
        Q = /^[^"]/,
        $ = /^[0-9]/,
        V = /^[.]/,
        Te = /^[a-zA-Z1-8\-=]/,
        ft = /^[+#]/,
        Nt = /^[!?]/,
        En = /^[^}]/,
        Pt = /^[^\r\n]/,
        Cn = /^[ \t\r\n]/,
        I = Ve("tag pair"),
        B = pe("[", !1),
        W = pe('"', !1),
        ee = pe("]", !1),
        se = Ve("tag name"),
        Lt = it([
            ["a", "z"],
            ["A", "Z"]
        ], !1, !1),
        dt = Ve("tag value"),
        Nn = it(['"'], !0, !1),
        pt = Ve("move number"),
        ht = it([
            ["0", "9"]
        ], !1, !1),
        Md = pe(".", !1),
        ua = it(["."], !1, !1),
        Id = Ve("standard algebraic notation"),
        Od = pe("O-O-O", !1),
        $d = pe("O-O", !1),
        Ad = pe("0-0-0", !1),
        Ud = pe("0-0", !1),
        ca = it([
            ["a", "z"],
            ["A", "Z"],
            ["1", "8"], "-", "="
        ], !1, !1),
        zd = it(["+", "#"], !1, !1),
        Fd = Ve("suffix annotation"),
        fa = it(["!", "?"], !1, !1),
        Dd = Ve("NAG"),
        Bd = pe("$", !1),
        Wd = Ve("brace comment"),
        Kd = pe("{", !1),
        da = it(["}"], !0, !1),
        Vd = pe("}", !1),
        Hd = Ve("rest of line comment"),
        Qd = pe(";", !1),
        pa = it(["\r", `
`], !0, !1),
        Yd = Ve("variation"),
        qd = pe("(", !1),
        Gd = pe(")", !1),
        Xd = Ve("game termination marker"),
        Zd = pe("1-0", !1),
        Jd = pe("0-1", !1),
        bd = pe("1/2-1/2", !1),
        ep = pe("*", !1),
        tp = Ve("whitespace"),
        ha = it([" ", "	", "\r", `
`], !1, !1),
        np = function(y, S) {
            return Nv(y, S)
        },
        rp = function(y) {
            return Object.fromEntries(y)
        },
        lp = function(y, S) {
            return [y, S]
        },
        ip = function(y, S) {
            return {
                root: y,
                marker: S
            }
        },
        op = function(y, S) {
            return Cv(xv(y), ...S.flat())
        },
        sp = function(y, S, x, U, z) {
            return Ev(y, S, x, U, z)
        },
        ap = function(y) {
            return y
        },
        up = function(y) {
            return y.replace(/[\r\n]+/g, " ")
        },
        cp = function(y) {
            return y.trim()
        },
        fp = function(y) {
            return y
        },
        dp = function(y, S) {
            return {
                result: y,
                comment: S
            }
        },
        k = t.peg$currPos | 0,
        Pn = [{
            line: 1,
            column: 1
        }],
        Ze = k,
        ll = t.peg$maxFailExpected || [],
        T = t.peg$silentFails | 0,
        sr;
    if (t.startRule) {
        if (!(t.startRule in l)) throw new Error(`Can't start parsing from rule "` + t.startRule + '".');
        i = l[t.startRule]
    }

    function pe(y, S) {
        return {
            type: "literal",
            text: y,
            ignoreCase: S
        }
    }

    function it(y, S, x) {
        return {
            type: "class",
            parts: y,
            inverted: S,
            ignoreCase: x
        }
    }

    function pp() {
        return {
            type: "end"
        }
    }

    function Ve(y) {
        return {
            type: "other",
            description: y
        }
    }

    function ma(y) {
        var S = Pn[y],
            x;
        if (S) return S;
        if (y >= Pn.length) x = Pn.length - 1;
        else
            for (x = y; !Pn[--x];);
        for (S = Pn[x], S = {
                line: S.line,
                column: S.column
            }; x < y;) e.charCodeAt(x) === 10 ? (S.line++, S.column = 1) : S.column++, x++;
        return Pn[y] = S, S
    }

    function ga(y, S, x) {
        var U = ma(y),
            z = ma(S),
            Y = {
                source: r,
                start: {
                    offset: y,
                    line: U.line,
                    column: U.column
                },
                end: {
                    offset: S,
                    line: z.line,
                    column: z.column
                }
            };
        return Y
    }

    function A(y) {
        k < Ze || (k > Ze && (Ze = k, ll = []), ll.push(y))
    }

    function hp(y, S, x) {
        return new nr(nr.buildMessage(y, S), y, S, x)
    }

    function va() {
        var y, S, x;
        return y = k, S = mp(), x = yp(), y = np(S, x), y
    }

    function mp() {
        var y, S, x;
        for (y = k, S = [], x = ya(); x !== n;) S.push(x), x = ya();
        return x = Ne(), y = rp(S), y
    }

    function ya() {
        var y, S, x, U, z, Y, nn;
        return T++, y = k, Ne(), e.charCodeAt(k) === 91 ? (S = o, k++) : (S = n, T === 0 && A(B)), S !== n ? (Ne(), x = gp(), x !== n ? (Ne(), e.charCodeAt(k) === 34 ? (U = s, k++) : (U = n, T === 0 && A(W)), U !== n ? (z = vp(), e.charCodeAt(k) === 34 ? (Y = s, k++) : (Y = n, T === 0 && A(W)), Y !== n ? (Ne(), e.charCodeAt(k) === 93 ? (nn = a, k++) : (nn = n, T === 0 && A(ee)), nn !== n ? y = lp(x, z) : (k = y, y = n)) : (k = y, y = n)) : (k = y, y = n)) : (k = y, y = n)) : (k = y, y = n), T--, y === n && T === 0 && A(I), y
    }

    function gp() {
        var y, S, x;
        if (T++, y = k, S = [], x = e.charAt(k), M.test(x) ? k++ : (x = n, T === 0 && A(Lt)), x !== n)
            for (; x !== n;) S.push(x), x = e.charAt(k), M.test(x) ? k++ : (x = n, T === 0 && A(Lt));
        else S = n;
        return S !== n ? y = e.substring(y, k) : y = S, T--, y === n && (S = n, T === 0 && A(se)), y
    }

    function vp() {
        var y, S, x;
        for (T++, y = k, S = [], x = e.charAt(k), Q.test(x) ? k++ : (x = n, T === 0 && A(Nn)); x !== n;) S.push(x), x = e.charAt(k), Q.test(x) ? k++ : (x = n, T === 0 && A(Nn));
        return y = e.substring(y, k), T--, S = n, T === 0 && A(dt), y
    }

    function yp() {
        var y, S, x;
        return y = k, S = _a(), Ne(), x = Ep(), x === n && (x = null), Ne(), y = ip(S, x), y
    }

    function _a() {
        var y, S, x, U;
        for (y = k, S = Mi(), S === n && (S = null), x = [], U = wa(); U !== n;) x.push(U), U = wa();
        return y = op(S, x), y
    }

    function wa() {
        var y, S, x, U, z, Y, nn, il;
        if (y = k, Ne(), _p(), Ne(), S = wp(), S !== n) {
            for (x = kp(), x === n && (x = null), U = [], z = ka(); z !== n;) U.push(z), z = ka();
            for (z = Ne(), Y = Mi(), Y === n && (Y = null), nn = [], il = Sa(); il !== n;) nn.push(il), il = Sa();
            y = sp(S, x, U, Y, nn)
        } else k = y, y = n;
        return y
    }

    function _p() {
        var y, S, x, U, z, Y;
        for (T++, y = k, S = [], x = e.charAt(k), $.test(x) ? k++ : (x = n, T === 0 && A(ht)); x !== n;) S.push(x), x = e.charAt(k), $.test(x) ? k++ : (x = n, T === 0 && A(ht));
        if (e.charCodeAt(k) === 46 ? (x = u, k++) : (x = n, T === 0 && A(Md)), x !== n) {
            for (U = Ne(), z = [], Y = e.charAt(k), V.test(Y) ? k++ : (Y = n, T === 0 && A(ua)); Y !== n;) z.push(Y), Y = e.charAt(k), V.test(Y) ? k++ : (Y = n, T === 0 && A(ua));
            S = [S, x, U, z], y = S
        } else k = y, y = n;
        return T--, y === n && (S = n, T === 0 && A(pt)), y
    }

    function wp() {
        var y, S, x, U, z, Y;
        if (T++, y = k, S = k, e.substr(k, 5) === c ? (x = c, k += 5) : (x = n, T === 0 && A(Od)), x === n && (e.substr(k, 3) === p ? (x = p, k += 3) : (x = n, T === 0 && A($d)), x === n && (e.substr(k, 5) === f ? (x = f, k += 5) : (x = n, T === 0 && A(Ad)), x === n && (e.substr(k, 3) === _ ? (x = _, k += 3) : (x = n, T === 0 && A(Ud)), x === n))))
            if (x = k, U = e.charAt(k), M.test(U) ? k++ : (U = n, T === 0 && A(Lt)), U !== n) {
                if (z = [], Y = e.charAt(k), Te.test(Y) ? k++ : (Y = n, T === 0 && A(ca)), Y !== n)
                    for (; Y !== n;) z.push(Y), Y = e.charAt(k), Te.test(Y) ? k++ : (Y = n, T === 0 && A(ca));
                else z = n;
                z !== n ? (U = [U, z], x = U) : (k = x, x = n)
            } else k = x, x = n;
        return x !== n ? (U = e.charAt(k), ft.test(U) ? k++ : (U = n, T === 0 && A(zd)), U === n && (U = null), x = [x, U], S = x) : (k = S, S = n), S !== n ? y = e.substring(y, k) : y = S, T--, y === n && (S = n, T === 0 && A(Id)), y
    }

    function kp() {
        var y, S, x;
        for (T++, y = k, S = [], x = e.charAt(k), Nt.test(x) ? k++ : (x = n, T === 0 && A(fa)); x !== n;) S.push(x), S.length >= 2 ? x = n : (x = e.charAt(k), Nt.test(x) ? k++ : (x = n, T === 0 && A(fa)));
        return S.length < 1 ? (k = y, y = n) : y = S, T--, y === n && (S = n, T === 0 && A(Fd)), y
    }

    function ka() {
        var y, S, x, U, z;
        if (T++, y = k, Ne(), e.charCodeAt(k) === 36 ? (S = g, k++) : (S = n, T === 0 && A(Bd)), S !== n) {
            if (x = k, U = [], z = e.charAt(k), $.test(z) ? k++ : (z = n, T === 0 && A(ht)), z !== n)
                for (; z !== n;) U.push(z), z = e.charAt(k), $.test(z) ? k++ : (z = n, T === 0 && A(ht));
            else U = n;
            U !== n ? x = e.substring(x, k) : x = U, x !== n ? y = ap(x) : (k = y, y = n)
        } else k = y, y = n;
        return T--, y === n && T === 0 && A(Dd), y
    }

    function Mi() {
        var y;
        return y = Sp(), y === n && (y = xp()), y
    }

    function Sp() {
        var y, S, x, U, z;
        if (T++, y = k, e.charCodeAt(k) === 123 ? (S = w, k++) : (S = n, T === 0 && A(Kd)), S !== n) {
            for (x = k, U = [], z = e.charAt(k), En.test(z) ? k++ : (z = n, T === 0 && A(da)); z !== n;) U.push(z), z = e.charAt(k), En.test(z) ? k++ : (z = n, T === 0 && A(da));
            x = e.substring(x, k), e.charCodeAt(k) === 125 ? (U = E, k++) : (U = n, T === 0 && A(Vd)), U !== n ? y = up(x) : (k = y, y = n)
        } else k = y, y = n;
        return T--, y === n && (S = n, T === 0 && A(Wd)), y
    }

    function xp() {
        var y, S, x, U, z;
        if (T++, y = k, e.charCodeAt(k) === 59 ? (S = h, k++) : (S = n, T === 0 && A(Qd)), S !== n) {
            for (x = k, U = [], z = e.charAt(k), Pt.test(z) ? k++ : (z = n, T === 0 && A(pa)); z !== n;) U.push(z), z = e.charAt(k), Pt.test(z) ? k++ : (z = n, T === 0 && A(pa));
            x = e.substring(x, k), y = cp(x)
        } else k = y, y = n;
        return T--, y === n && (S = n, T === 0 && A(Hd)), y
    }

    function Sa() {
        var y, S, x, U;
        return T++, y = k, Ne(), e.charCodeAt(k) === 40 ? (S = d, k++) : (S = n, T === 0 && A(qd)), S !== n ? (x = _a(), x !== n ? (Ne(), e.charCodeAt(k) === 41 ? (U = v, k++) : (U = n, T === 0 && A(Gd)), U !== n ? y = fp(x) : (k = y, y = n)) : (k = y, y = n)) : (k = y, y = n), T--, y === n && T === 0 && A(Yd), y
    }

    function Ep() {
        var y, S, x;
        return T++, y = k, e.substr(k, 3) === C ? (S = C, k += 3) : (S = n, T === 0 && A(Zd)), S === n && (e.substr(k, 3) === R ? (S = R, k += 3) : (S = n, T === 0 && A(Jd)), S === n && (e.substr(k, 7) === P ? (S = P, k += 7) : (S = n, T === 0 && A(bd)), S === n && (e.charCodeAt(k) === 42 ? (S = j, k++) : (S = n, T === 0 && A(ep))))), S !== n ? (Ne(), x = Mi(), x === n && (x = null), y = dp(S, x)) : (k = y, y = n), T--, y === n && (S = n, T === 0 && A(Xd)), y
    }

    function Ne() {
        var y, S;
        for (T++, y = [], S = e.charAt(k), Cn.test(S) ? k++ : (S = n, T === 0 && A(ha)); S !== n;) y.push(S), S = e.charAt(k), Cn.test(S) ? k++ : (S = n, T === 0 && A(ha));
        return T--, S = n, T === 0 && A(tp), y
    }
    if (sr = i(), t.peg$library) return {
        peg$result: sr,
        peg$currPos: k,
        peg$FAILED: n,
        peg$maxFailExpected: ll,
        peg$maxFailPos: Ze
    };
    if (sr !== n && k === e.length) return sr;
    throw sr !== n && k < e.length && A(pp()), hp(ll, Ze < e.length ? e.charAt(Ze) : null, Ze < e.length ? ga(Ze, Ze + 1) : ga(Ze, Ze))
}
/**
 * @license
 * Copyright (c) 2025, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const zl = 0xffffffffffffffffn;

function so(e, t) {
    return (e << t | e >> 64n - t) & 0xffffffffffffffffn
}

function Wu(e, t) {
    return e * t & zl
}

function jv(e) {
    return function() {
        let t = BigInt(e & zl),
            n = BigInt(e >> 64n & zl);
        const r = Wu(so(Wu(t, 5n), 7n), 9n);
        return n ^= t, t = (so(t, 24n) ^ n ^ n << 16n) & zl, n = so(n, 37n), e = n << 64n | t, r
    }
}
const Ti = jv(0xa187eb39cdcaed8f31c4b365b102e01en),
    Rv = Array.from({
        length: 2
    }, () => Array.from({
        length: 6
    }, () => Array.from({
        length: 128
    }, () => Ti()))),
    Tv = Array.from({
        length: 8
    }, () => Ti()),
    Mv = Array.from({
        length: 16
    }, () => Ti()),
    ao = Ti(),
    xe = "w",
    Ue = "b",
    ae = "p",
    cs = "n",
    Fl = "b",
    Sr = "r",
    $t = "q",
    ce = "k",
    uo = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
class xl {
    constructor(t, n) {
        J(this, "color");
        J(this, "from");
        J(this, "to");
        J(this, "piece");
        J(this, "captured");
        J(this, "promotion");
        J(this, "flags");
        J(this, "san");
        J(this, "lan");
        J(this, "before");
        J(this, "after");
        const {
            color: r,
            piece: l,
            from: i,
            to: o,
            flags: s,
            captured: a,
            promotion: u
        } = n, c = he(i), p = he(o);
        this.color = r, this.piece = l, this.from = c, this.to = p, this.san = t._moveToSan(n, t._moves({
            legal: !0
        })), this.lan = c + p, this.before = t.fen(), t._makeMove(n), this.after = t.fen(), t._undoMove(), this.flags = "";
        for (const f in D) D[f] & s && (this.flags += rn[f]);
        a && (this.captured = a), u && (this.promotion = u, this.lan += u)
    }
    isCapture() {
        return this.flags.indexOf(rn.CAPTURE) > -1
    }
    isPromotion() {
        return this.flags.indexOf(rn.PROMOTION) > -1
    }
    isEnPassant() {
        return this.flags.indexOf(rn.EP_CAPTURE) > -1
    }
    isKingsideCastle() {
        return this.flags.indexOf(rn.KSIDE_CASTLE) > -1
    }
    isQueensideCastle() {
        return this.flags.indexOf(rn.QSIDE_CASTLE) > -1
    }
    isBigPawn() {
        return this.flags.indexOf(rn.BIG_PAWN) > -1
    }
}
const ve = -1,
    rn = {
        NORMAL: "n",
        CAPTURE: "c",
        BIG_PAWN: "b",
        EP_CAPTURE: "e",
        PROMOTION: "p",
        KSIDE_CASTLE: "k",
        QSIDE_CASTLE: "q",
        NULL_MOVE: "-"
    },
    D = {
        NORMAL: 1,
        CAPTURE: 2,
        BIG_PAWN: 4,
        EP_CAPTURE: 8,
        PROMOTION: 16,
        KSIDE_CASTLE: 32,
        QSIDE_CASTLE: 64,
        NULL_MOVE: 128
    },
    fs = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    },
    Iv = {
        WhiteTitle: null,
        BlackTitle: null,
        WhiteElo: null,
        BlackElo: null,
        WhiteUSCF: null,
        BlackUSCF: null,
        WhiteNA: null,
        BlackNA: null,
        WhiteType: null,
        BlackType: null,
        EventDate: null,
        EventSponsor: null,
        Section: null,
        Stage: null,
        Board: null,
        Opening: null,
        Variation: null,
        SubVariation: null,
        ECO: null,
        NIC: null,
        Time: null,
        UTCTime: null,
        UTCDate: null,
        TimeControl: null,
        SetUp: null,
        FEN: null,
        Termination: null,
        Annotator: null,
        Mode: null,
        PlyCount: null
    },
    Ov = {
        ...fs,
        ...Iv
    },
    F = {
        a8: 0,
        b8: 1,
        c8: 2,
        d8: 3,
        e8: 4,
        f8: 5,
        g8: 6,
        h8: 7,
        a7: 16,
        b7: 17,
        c7: 18,
        d7: 19,
        e7: 20,
        f7: 21,
        g7: 22,
        h7: 23,
        a6: 32,
        b6: 33,
        c6: 34,
        d6: 35,
        e6: 36,
        f6: 37,
        g6: 38,
        h6: 39,
        a5: 48,
        b5: 49,
        c5: 50,
        d5: 51,
        e5: 52,
        f5: 53,
        g5: 54,
        h5: 55,
        a4: 64,
        b4: 65,
        c4: 66,
        d4: 67,
        e4: 68,
        f4: 69,
        g4: 70,
        h4: 71,
        a3: 80,
        b3: 81,
        c3: 82,
        d3: 83,
        e3: 84,
        f3: 85,
        g3: 86,
        h3: 87,
        a2: 96,
        b2: 97,
        c2: 98,
        d2: 99,
        e2: 100,
        f2: 101,
        g2: 102,
        h2: 103,
        a1: 112,
        b1: 113,
        c1: 114,
        d1: 115,
        e1: 116,
        f1: 117,
        g1: 118,
        h1: 119
    },
    co = {
        b: [16, 32, 17, 15],
        w: [-16, -32, -17, -15]
    },
    Ku = {
        n: [-18, -33, -31, -14, 18, 33, 31, 14],
        b: [-17, -15, 17, 15],
        r: [-16, 1, 16, -1],
        q: [-17, -16, -15, 1, 17, 16, 15, -1],
        k: [-17, -16, -15, 1, 17, 16, 15, -1]
    },
    $v = [20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 56, 0, 56, 24, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20],
    Av = [17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0, 0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0, -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17],
    Uv = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    },
    zv = "pnbrqkPNBRQK",
    Vu = [cs, Fl, Sr, $t],
    Fv = 7,
    Dv = 6,
    Bv = 1,
    Wv = 0,
    El = {
        [ce]: D.KSIDE_CASTLE,
        [$t]: D.QSIDE_CASTLE
    },
    Rt = {
        w: [{
            square: F.a1,
            flag: D.QSIDE_CASTLE
        }, {
            square: F.h1,
            flag: D.KSIDE_CASTLE
        }],
        b: [{
            square: F.a8,
            flag: D.QSIDE_CASTLE
        }, {
            square: F.h8,
            flag: D.KSIDE_CASTLE
        }]
    },
    Kv = {
        b: Bv,
        w: Dv
    },
    fo = "--";

function hn(e) {
    return e >> 4
}

function Zr(e) {
    return e & 15
}

function Ld(e) {
    return "0123456789".indexOf(e) !== -1
}

function he(e) {
    const t = Zr(e),
        n = hn(e);
    return "abcdefgh".substring(t, t + 1) + "87654321".substring(n, n + 1)
}

function gr(e) {
    return e === xe ? Ue : xe
}

function Vv(e) {
    const t = e.split(/\s+/);
    if (t.length !== 6) return {
        ok: !1,
        error: "Invalid FEN: must contain six space-delimited fields"
    };
    const n = parseInt(t[5], 10);
    if (isNaN(n) || n <= 0) return {
        ok: !1,
        error: "Invalid FEN: move number must be a positive integer"
    };
    const r = parseInt(t[4], 10);
    if (isNaN(r) || r < 0) return {
        ok: !1,
        error: "Invalid FEN: half move counter number must be a non-negative integer"
    };
    if (!/^(-|[abcdefgh][36])$/.test(t[3])) return {
        ok: !1,
        error: "Invalid FEN: en-passant square is invalid"
    };
    if (/[^kKqQ-]/.test(t[2])) return {
        ok: !1,
        error: "Invalid FEN: castling availability is invalid"
    };
    if (!/^(w|b)$/.test(t[1])) return {
        ok: !1,
        error: "Invalid FEN: side-to-move is invalid"
    };
    const l = t[0].split("/");
    if (l.length !== 8) return {
        ok: !1,
        error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
    };
    for (let o = 0; o < l.length; o++) {
        let s = 0,
            a = !1;
        for (let u = 0; u < l[o].length; u++)
            if (Ld(l[o][u])) {
                if (a) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                s += parseInt(l[o][u], 10), a = !0
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(l[o][u])) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (invalid piece)"
                };
                s += 1, a = !1
            } if (s !== 8) return {
            ok: !1,
            error: "Invalid FEN: piece data is invalid (too many squares in rank)"
        }
    }
    if (t[3][1] == "3" && t[1] == "w" || t[3][1] == "6" && t[1] == "b") return {
        ok: !1,
        error: "Invalid FEN: illegal en-passant square"
    };
    const i = [{
        color: "white",
        regex: /K/g
    }, {
        color: "black",
        regex: /k/g
    }];
    for (const {
            color: o,
            regex: s
        }
        of i) {
        if (!s.test(t[0])) return {
            ok: !1,
            error: `Invalid FEN: missing ${o} king`
        };
        if ((t[0].match(s) || []).length > 1) return {
            ok: !1,
            error: `Invalid FEN: too many ${o} kings`
        }
    }
    return Array.from(l[0] + l[7]).some(o => o.toUpperCase() === "P") ? {
        ok: !1,
        error: "Invalid FEN: some pawns are on the edge rows"
    } : {
        ok: !0
    }
}

function Hv(e, t) {
    const n = e.from,
        r = e.to,
        l = e.piece;
    let i = 0,
        o = 0,
        s = 0;
    for (let a = 0, u = t.length; a < u; a++) {
        const c = t[a].from,
            p = t[a].to,
            f = t[a].piece;
        l === f && n !== c && r === p && (i++, hn(n) === hn(c) && o++, Zr(n) === Zr(c) && s++)
    }
    return i > 0 ? o > 0 && s > 0 ? he(n) : s > 0 ? he(n).charAt(1) : he(n).charAt(0) : ""
}

function Tt(e, t, n, r, l, i = void 0, o = D.NORMAL) {
    const s = hn(r);
    if (l === ae && (s === Fv || s === Wv))
        for (let a = 0; a < Vu.length; a++) {
            const u = Vu[a];
            e.push({
                color: t,
                from: n,
                to: r,
                piece: l,
                captured: i,
                promotion: u,
                flags: o | D.PROMOTION
            })
        } else e.push({
            color: t,
            from: n,
            to: r,
            piece: l,
            captured: i,
            flags: o
        })
}

function Hu(e) {
    let t = e.charAt(0);
    return t >= "a" && t <= "h" ? e.match(/[a-h]\d.*[a-h]\d/) ? void 0 : ae : (t = t.toLowerCase(), t === "o" ? ce : t)
}

function po(e) {
    return e.replace(/=/, "").replace(/[+#]?[?!]*$/, "")
}
class Qu {
    constructor(t = uo, {
        skipValidation: n = !1
    } = {}) {
        J(this, "_board", new Array(128));
        J(this, "_turn", xe);
        J(this, "_header", {});
        J(this, "_kings", {
            w: ve,
            b: ve
        });
        J(this, "_epSquare", -1);
        J(this, "_halfMoves", 0);
        J(this, "_moveNumber", 0);
        J(this, "_history", []);
        J(this, "_comments", {});
        J(this, "_castling", {
            w: 0,
            b: 0
        });
        J(this, "_hash", 0n);
        J(this, "_positionCount", new Map);
        this.load(t, {
            skipValidation: n
        })
    }
    clear({
        preserveHeaders: t = !1
    } = {}) {
        this._board = new Array(128), this._kings = {
            w: ve,
            b: ve
        }, this._turn = xe, this._castling = {
            w: 0,
            b: 0
        }, this._epSquare = ve, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = t ? this._header : {
            ...Ov
        }, this._hash = this._computeHash(), this._positionCount = new Map, this._header.SetUp = null, this._header.FEN = null
    }
    load(t, {
        skipValidation: n = !1,
        preserveHeaders: r = !1
    } = {}) {
        let l = t.split(/\s+/);
        if (l.length >= 2 && l.length < 6) {
            const s = ["-", "-", "0", "1"];
            t = l.concat(s.slice(-(6 - l.length))).join(" ")
        }
        if (l = t.split(/\s+/), !n) {
            const {
                ok: s,
                error: a
            } = Vv(t);
            if (!s) throw new Error(a)
        }
        const i = l[0];
        let o = 0;
        this.clear({
            preserveHeaders: r
        });
        for (let s = 0; s < i.length; s++) {
            const a = i.charAt(s);
            if (a === "/") o += 8;
            else if (Ld(a)) o += parseInt(a, 10);
            else {
                const u = a < "a" ? xe : Ue;
                this._put({
                    type: a.toLowerCase(),
                    color: u
                }, he(o)), o++
            }
        }
        this._turn = l[1], l[2].indexOf("K") > -1 && (this._castling.w |= D.KSIDE_CASTLE), l[2].indexOf("Q") > -1 && (this._castling.w |= D.QSIDE_CASTLE), l[2].indexOf("k") > -1 && (this._castling.b |= D.KSIDE_CASTLE), l[2].indexOf("q") > -1 && (this._castling.b |= D.QSIDE_CASTLE), this._epSquare = l[3] === "-" ? ve : F[l[3]], this._halfMoves = parseInt(l[4], 10), this._moveNumber = parseInt(l[5], 10), this._hash = this._computeHash(), this._updateSetup(t), this._incPositionCount()
    }
    fen({
        forceEnpassantSquare: t = !1
    } = {}) {
        var o, s;
        let n = 0,
            r = "";
        for (let a = F.a8; a <= F.h1; a++) {
            if (this._board[a]) {
                n > 0 && (r += n, n = 0);
                const {
                    color: u,
                    type: c
                } = this._board[a];
                r += u === xe ? c.toUpperCase() : c.toLowerCase()
            } else n++;
            a + 1 & 136 && (n > 0 && (r += n), a !== F.h1 && (r += "/"), n = 0, a += 8)
        }
        let l = "";
        this._castling[xe] & D.KSIDE_CASTLE && (l += "K"), this._castling[xe] & D.QSIDE_CASTLE && (l += "Q"), this._castling[Ue] & D.KSIDE_CASTLE && (l += "k"), this._castling[Ue] & D.QSIDE_CASTLE && (l += "q"), l = l || "-";
        let i = "-";
        if (this._epSquare !== ve)
            if (t) i = he(this._epSquare);
            else {
                const a = this._epSquare + (this._turn === xe ? 16 : -16),
                    u = [a + 1, a - 1];
                for (const c of u) {
                    if (c & 136) continue;
                    const p = this._turn;
                    if (((o = this._board[c]) == null ? void 0 : o.color) === p && ((s = this._board[c]) == null ? void 0 : s.type) === ae) {
                        this._makeMove({
                            color: p,
                            from: c,
                            to: this._epSquare,
                            piece: ae,
                            captured: ae,
                            flags: D.EP_CAPTURE
                        });
                        const f = !this._isKingAttacked(p);
                        if (this._undoMove(), f) {
                            i = he(this._epSquare);
                            break
                        }
                    }
                }
            } return [r, this._turn, l, i, this._halfMoves, this._moveNumber].join(" ")
    }
    _pieceKey(t) {
        if (!this._board[t]) return 0n;
        const {
            color: n,
            type: r
        } = this._board[t], l = {
            w: 0,
            b: 1
        } [n], i = {
            p: 0,
            n: 1,
            b: 2,
            r: 3,
            q: 4,
            k: 5
        } [r];
        return Rv[l][i][t]
    }
    _epKey() {
        return this._epSquare === ve ? 0n : Tv[this._epSquare & 7]
    }
    _castlingKey() {
        const t = this._castling.w >> 5 | this._castling.b >> 3;
        return Mv[t]
    }
    _computeHash() {
        let t = 0n;
        for (let n = F.a8; n <= F.h1; n++) {
            if (n & 136) {
                n += 7;
                continue
            }
            this._board[n] && (t ^= this._pieceKey(n))
        }
        return t ^= this._epKey(), t ^= this._castlingKey(), this._turn === "b" && (t ^= ao), t
    }
    _updateSetup(t) {
        this._history.length > 0 || (t !== uo ? (this._header.SetUp = "1", this._header.FEN = t) : (this._header.SetUp = null, this._header.FEN = null))
    }
    reset() {
        this.load(uo)
    }
    get(t) {
        return this._board[F[t]]
    }
    findPiece(t) {
        var r;
        const n = [];
        for (let l = F.a8; l <= F.h1; l++) {
            if (l & 136) {
                l += 7;
                continue
            }!this._board[l] || ((r = this._board[l]) == null ? void 0 : r.color) !== t.color || this._board[l].color === t.color && this._board[l].type === t.type && n.push(he(l))
        }
        return n
    }
    put({
        type: t,
        color: n
    }, r) {
        return this._put({
            type: t,
            color: n
        }, r) ? (this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0) : !1
    }
    _set(t, n) {
        this._hash ^= this._pieceKey(t), this._board[t] = n, this._hash ^= this._pieceKey(t)
    }
    _put({
        type: t,
        color: n
    }, r) {
        if (zv.indexOf(t.toLowerCase()) === -1 || !(r in F)) return !1;
        const l = F[r];
        if (t == ce && !(this._kings[n] == ve || this._kings[n] == l)) return !1;
        const i = this._board[l];
        return i && i.type === ce && (this._kings[i.color] = ve), this._set(l, {
            type: t,
            color: n
        }), t === ce && (this._kings[n] = l), !0
    }
    _clear(t) {
        this._hash ^= this._pieceKey(t), delete this._board[t]
    }
    remove(t) {
        const n = this.get(t);
        return this._clear(F[t]), n && n.type === ce && (this._kings[n.color] = ve), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), n
    }
    _updateCastlingRights() {
        var r, l, i, o, s, a, u, c, p, f, _, g;
        this._hash ^= this._castlingKey();
        const t = ((r = this._board[F.e1]) == null ? void 0 : r.type) === ce && ((l = this._board[F.e1]) == null ? void 0 : l.color) === xe,
            n = ((i = this._board[F.e8]) == null ? void 0 : i.type) === ce && ((o = this._board[F.e8]) == null ? void 0 : o.color) === Ue;
        (!t || ((s = this._board[F.a1]) == null ? void 0 : s.type) !== Sr || ((a = this._board[F.a1]) == null ? void 0 : a.color) !== xe) && (this._castling.w &= -65), (!t || ((u = this._board[F.h1]) == null ? void 0 : u.type) !== Sr || ((c = this._board[F.h1]) == null ? void 0 : c.color) !== xe) && (this._castling.w &= -33), (!n || ((p = this._board[F.a8]) == null ? void 0 : p.type) !== Sr || ((f = this._board[F.a8]) == null ? void 0 : f.color) !== Ue) && (this._castling.b &= -65), (!n || ((_ = this._board[F.h8]) == null ? void 0 : _.type) !== Sr || ((g = this._board[F.h8]) == null ? void 0 : g.color) !== Ue) && (this._castling.b &= -33), this._hash ^= this._castlingKey()
    }
    _updateEnPassantSquare() {
        var i, o;
        if (this._epSquare === ve) return;
        const t = this._epSquare + (this._turn === xe ? -16 : 16),
            n = this._epSquare + (this._turn === xe ? 16 : -16),
            r = [n + 1, n - 1];
        if (this._board[t] !== null || this._board[this._epSquare] !== null || ((i = this._board[n]) == null ? void 0 : i.color) !== gr(this._turn) || ((o = this._board[n]) == null ? void 0 : o.type) !== ae) {
            this._hash ^= this._epKey(), this._epSquare = ve;
            return
        }
        const l = s => {
            var a, u;
            return !(s & 136) && ((a = this._board[s]) == null ? void 0 : a.color) === this._turn && ((u = this._board[s]) == null ? void 0 : u.type) === ae
        };
        r.some(l) || (this._hash ^= this._epKey(), this._epSquare = ve)
    }
    _attacked(t, n, r) {
        const l = [];
        for (let i = F.a8; i <= F.h1; i++) {
            if (i & 136) {
                i += 7;
                continue
            }
            if (this._board[i] === void 0 || this._board[i].color !== t) continue;
            const o = this._board[i],
                s = i - n;
            if (s === 0) continue;
            const a = s + 119;
            if ($v[a] & Uv[o.type]) {
                if (o.type === ae) {
                    if (s > 0 && o.color === xe || s <= 0 && o.color === Ue)
                        if (r) l.push(he(i));
                        else return !0;
                    continue
                }
                if (o.type === "n" || o.type === "k")
                    if (r) {
                        l.push(he(i));
                        continue
                    } else return !0;
                const u = Av[a];
                let c = i + u,
                    p = !1;
                for (; c !== n;) {
                    if (this._board[c] != null) {
                        p = !0;
                        break
                    }
                    c += u
                }
                if (!p)
                    if (r) {
                        l.push(he(i));
                        continue
                    } else return !0
            }
        }
        return r ? l : !1
    }
    attackers(t, n) {
        return n ? this._attacked(n, F[t], !0) : this._attacked(this._turn, F[t], !0)
    }
    _isKingAttacked(t) {
        const n = this._kings[t];
        return n === -1 ? !1 : this._attacked(gr(t), n)
    }
    hash() {
        return this._hash.toString(16)
    }
    isAttacked(t, n) {
        return this._attacked(n, F[t])
    }
    isCheck() {
        return this._isKingAttacked(this._turn)
    }
    inCheck() {
        return this.isCheck()
    }
    isCheckmate() {
        return this.isCheck() && this._moves().length === 0
    }
    isStalemate() {
        return !this.isCheck() && this._moves().length === 0
    }
    isInsufficientMaterial() {
        const t = {
                b: 0,
                n: 0,
                r: 0,
                q: 0,
                k: 0,
                p: 0
            },
            n = [];
        let r = 0,
            l = 0;
        for (let i = F.a8; i <= F.h1; i++) {
            if (l = (l + 1) % 2, i & 136) {
                i += 7;
                continue
            }
            const o = this._board[i];
            o && (t[o.type] = o.type in t ? t[o.type] + 1 : 1, o.type === Fl && n.push(l), r++)
        }
        if (r === 2) return !0;
        if (r === 3 && (t[Fl] === 1 || t[cs] === 1)) return !0;
        if (r === t[Fl] + 2) {
            let i = 0;
            const o = n.length;
            for (let s = 0; s < o; s++) i += n[s];
            if (i === 0 || i === o) return !0
        }
        return !1
    }
    isThreefoldRepetition() {
        return this._getPositionCount(this._hash) >= 3
    }
    isDrawByFiftyMoves() {
        return this._halfMoves >= 100
    }
    isDraw() {
        return this.isDrawByFiftyMoves() || this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition()
    }
    isGameOver() {
        return this.isCheckmate() || this.isDraw()
    }
    moves({
        verbose: t = !1,
        square: n = void 0,
        piece: r = void 0
    } = {}) {
        const l = this._moves({
            square: n,
            piece: r
        });
        return t ? l.map(i => new xl(this, i)) : l.map(i => this._moveToSan(i, l))
    }
    _moves({
        legal: t = !0,
        piece: n = void 0,
        square: r = void 0
    } = {}) {
        var _;
        const l = r ? r.toLowerCase() : void 0,
            i = n == null ? void 0 : n.toLowerCase(),
            o = [],
            s = this._turn,
            a = gr(s);
        let u = F.a8,
            c = F.h1,
            p = !1;
        if (l)
            if (l in F) u = c = F[l], p = !0;
            else return [];
        for (let g = u; g <= c; g++) {
            if (g & 136) {
                g += 7;
                continue
            }
            if (!this._board[g] || this._board[g].color === a) continue;
            const {
                type: w
            } = this._board[g];
            let E;
            if (w === ae) {
                if (i && i !== w) continue;
                E = g + co[s][0], this._board[E] || (Tt(o, s, g, E, ae), E = g + co[s][1], Kv[s] === hn(g) && !this._board[E] && Tt(o, s, g, E, ae, void 0, D.BIG_PAWN));
                for (let h = 2; h < 4; h++) E = g + co[s][h], !(E & 136) && (((_ = this._board[E]) == null ? void 0 : _.color) === a ? Tt(o, s, g, E, ae, this._board[E].type, D.CAPTURE) : E === this._epSquare && Tt(o, s, g, E, ae, ae, D.EP_CAPTURE))
            } else {
                if (i && i !== w) continue;
                for (let h = 0, d = Ku[w].length; h < d; h++) {
                    const v = Ku[w][h];
                    for (E = g; E += v, !(E & 136);) {
                        if (!this._board[E]) Tt(o, s, g, E, w);
                        else {
                            if (this._board[E].color === s) break;
                            Tt(o, s, g, E, w, this._board[E].type, D.CAPTURE);
                            break
                        }
                        if (w === cs || w === ce) break
                    }
                }
            }
        }
        if ((i === void 0 || i === ce) && (!p || c === this._kings[s])) {
            if (this._castling[s] & D.KSIDE_CASTLE) {
                const g = this._kings[s],
                    w = g + 2;
                !this._board[g + 1] && !this._board[w] && !this._attacked(a, this._kings[s]) && !this._attacked(a, g + 1) && !this._attacked(a, w) && Tt(o, s, this._kings[s], w, ce, void 0, D.KSIDE_CASTLE)
            }
            if (this._castling[s] & D.QSIDE_CASTLE) {
                const g = this._kings[s],
                    w = g - 2;
                !this._board[g - 1] && !this._board[g - 2] && !this._board[g - 3] && !this._attacked(a, this._kings[s]) && !this._attacked(a, g - 1) && !this._attacked(a, w) && Tt(o, s, this._kings[s], w, ce, void 0, D.QSIDE_CASTLE)
            }
        }
        if (!t || this._kings[s] === -1) return o;
        const f = [];
        for (let g = 0, w = o.length; g < w; g++) this._makeMove(o[g]), this._isKingAttacked(s) || f.push(o[g]), this._undoMove();
        return f
    }
    move(t, {
        strict: n = !1
    } = {}) {
        let r = null;
        if (typeof t == "string") r = this._moveFromSan(t, n);
        else if (t === null) r = this._moveFromSan(fo, n);
        else if (typeof t == "object") {
            const i = this._moves();
            for (let o = 0, s = i.length; o < s; o++)
                if (t.from === he(i[o].from) && t.to === he(i[o].to) && (!("promotion" in i[o]) || t.promotion === i[o].promotion)) {
                    r = i[o];
                    break
                }
        }
        if (!r) throw typeof t == "string" ? new Error(`Invalid move: ${t}`) : new Error(`Invalid move: ${JSON.stringify(t)}`);
        if (this.isCheck() && r.flags & D.NULL_MOVE) throw new Error("Null move not allowed when in check");
        const l = new xl(this, r);
        return this._makeMove(r), this._incPositionCount(), l
    }
    _push(t) {
        this._history.push({
            move: t,
            kings: {
                b: this._kings.b,
                w: this._kings.w
            },
            turn: this._turn,
            castling: {
                b: this._castling.b,
                w: this._castling.w
            },
            epSquare: this._epSquare,
            halfMoves: this._halfMoves,
            moveNumber: this._moveNumber
        })
    }
    _movePiece(t, n) {
        this._hash ^= this._pieceKey(t), this._board[n] = this._board[t], delete this._board[t], this._hash ^= this._pieceKey(n)
    }
    _makeMove(t) {
        var l, i, o, s;
        const n = this._turn,
            r = gr(n);
        if (this._push(t), t.flags & D.NULL_MOVE) {
            n === Ue && this._moveNumber++, this._halfMoves++, this._turn = r, this._epSquare = ve;
            return
        }
        if (this._hash ^= this._epKey(), this._hash ^= this._castlingKey(), t.captured && (this._hash ^= this._pieceKey(t.to)), this._movePiece(t.from, t.to), t.flags & D.EP_CAPTURE && (this._turn === Ue ? this._clear(t.to - 16) : this._clear(t.to + 16)), t.promotion && (this._clear(t.to), this._set(t.to, {
                type: t.promotion,
                color: n
            })), this._board[t.to].type === ce) {
            if (this._kings[n] = t.to, t.flags & D.KSIDE_CASTLE) {
                const a = t.to - 1,
                    u = t.to + 1;
                this._movePiece(u, a)
            } else if (t.flags & D.QSIDE_CASTLE) {
                const a = t.to + 1,
                    u = t.to - 2;
                this._movePiece(u, a)
            }
            this._castling[n] = 0
        }
        if (this._castling[n]) {
            for (let a = 0, u = Rt[n].length; a < u; a++)
                if (t.from === Rt[n][a].square && this._castling[n] & Rt[n][a].flag) {
                    this._castling[n] ^= Rt[n][a].flag;
                    break
                }
        }
        if (this._castling[r]) {
            for (let a = 0, u = Rt[r].length; a < u; a++)
                if (t.to === Rt[r][a].square && this._castling[r] & Rt[r][a].flag) {
                    this._castling[r] ^= Rt[r][a].flag;
                    break
                }
        }
        if (this._hash ^= this._castlingKey(), t.flags & D.BIG_PAWN) {
            let a;
            n === Ue ? a = t.to - 16 : a = t.to + 16, !(t.to - 1 & 136) && ((l = this._board[t.to - 1]) == null ? void 0 : l.type) === ae && ((i = this._board[t.to - 1]) == null ? void 0 : i.color) === r || !(t.to + 1 & 136) && ((o = this._board[t.to + 1]) == null ? void 0 : o.type) === ae && ((s = this._board[t.to + 1]) == null ? void 0 : s.color) === r ? (this._epSquare = a, this._hash ^= this._epKey()) : this._epSquare = ve
        } else this._epSquare = ve;
        t.piece === ae ? this._halfMoves = 0 : t.flags & (D.CAPTURE | D.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, n === Ue && this._moveNumber++, this._turn = r, this._hash ^= ao
    }
    undo() {
        const t = this._hash,
            n = this._undoMove();
        if (n) {
            const r = new xl(this, n);
            return this._decPositionCount(t), r
        }
        return null
    }
    _undoMove() {
        const t = this._history.pop();
        if (t === void 0) return null;
        this._hash ^= this._epKey(), this._hash ^= this._castlingKey();
        const n = t.move;
        this._kings = t.kings, this._turn = t.turn, this._castling = t.castling, this._epSquare = t.epSquare, this._halfMoves = t.halfMoves, this._moveNumber = t.moveNumber, this._hash ^= this._epKey(), this._hash ^= this._castlingKey(), this._hash ^= ao;
        const r = this._turn,
            l = gr(r);
        if (n.flags & D.NULL_MOVE) return n;
        if (this._movePiece(n.to, n.from), n.piece && (this._clear(n.from), this._set(n.from, {
                type: n.piece,
                color: r
            })), n.captured)
            if (n.flags & D.EP_CAPTURE) {
                let i;
                r === Ue ? i = n.to - 16 : i = n.to + 16, this._set(i, {
                    type: ae,
                    color: l
                })
            } else this._set(n.to, {
                type: n.captured,
                color: l
            });
        if (n.flags & (D.KSIDE_CASTLE | D.QSIDE_CASTLE)) {
            let i, o;
            n.flags & D.KSIDE_CASTLE ? (i = n.to + 1, o = n.to - 1) : (i = n.to - 2, o = n.to + 1), this._movePiece(o, i)
        }
        return n
    }
    pgn({
        newline: t = `
`,
        maxWidth: n = 0
    } = {}) {
        const r = [];
        let l = !1;
        for (const f in this._header) this._header[f] && r.push(`[${f} "${this._header[f]}"]` + t), l = !0;
        l && this._history.length && r.push(t);
        const i = f => {
                const _ = this._comments[this.fen()];
                if (typeof _ < "u") {
                    const g = f.length > 0 ? " " : "";
                    f = `${f}${g}{${_}}`
                }
                return f
            },
            o = [];
        for (; this._history.length > 0;) o.push(this._undoMove());
        const s = [];
        let a = "";
        for (o.length === 0 && s.push(i("")); o.length > 0;) {
            a = i(a);
            const f = o.pop();
            if (!f) break;
            if (!this._history.length && f.color === "b") {
                const _ = `${this._moveNumber}. ...`;
                a = a ? `${a} ${_}` : _
            } else f.color === "w" && (a.length && s.push(a), a = this._moveNumber + ".");
            a = a + " " + this._moveToSan(f, this._moves({
                legal: !0
            })), this._makeMove(f)
        }
        if (a.length && s.push(i(a)), s.push(this._header.Result || "*"), n === 0) return r.join("") + s.join(" ");
        const u = function() {
                return r.length > 0 && r[r.length - 1] === " " ? (r.pop(), !0) : !1
            },
            c = function(f, _) {
                for (const g of _.split(" "))
                    if (g) {
                        if (f + g.length > n) {
                            for (; u();) f--;
                            r.push(t), f = 0
                        }
                        r.push(g), f += g.length, r.push(" "), f++
                    } return u() && f--, f
            };
        let p = 0;
        for (let f = 0; f < s.length; f++) {
            if (p + s[f].length > n && s[f].includes("{")) {
                p = c(p, s[f]);
                continue
            }
            p + s[f].length > n && f !== 0 ? (r[r.length - 1] === " " && r.pop(), r.push(t), p = 0) : f !== 0 && (r.push(" "), p++), r.push(s[f]), p += s[f].length
        }
        return r.join("")
    }
    header(...t) {
        for (let n = 0; n < t.length; n += 2) typeof t[n] == "string" && typeof t[n + 1] == "string" && (this._header[t[n]] = t[n + 1]);
        return this._header
    }
    setHeader(t, n) {
        return this._header[t] = n ?? fs[t] ?? null, this.getHeaders()
    }
    removeHeader(t) {
        return t in this._header ? (this._header[t] = fs[t] || null, !0) : !1
    }
    getHeaders() {
        const t = {};
        for (const [n, r] of Object.entries(this._header)) r !== null && (t[n] = r);
        return t
    }
    loadPgn(t, {
        strict: n = !1,
        newlineChar: r = `\r?
`
    } = {}) {
        r !== `\r?
` && (t = t.replace(new RegExp(r, "g"), `
`));
        const l = Lv(t);
        this.reset();
        const i = l.headers;
        let o = "";
        for (const u in i) u.toLowerCase() === "fen" && (o = i[u]), this.header(u, i[u]);
        if (!n) o && this.load(o, {
            preserveHeaders: !0
        });
        else if (i.SetUp === "1") {
            if (!("FEN" in i)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
            this.load(i.FEN, {
                preserveHeaders: !0
            })
        }
        let s = l.root;
        for (; s;) {
            if (s.move) {
                const u = this._moveFromSan(s.move, n);
                if (u == null) throw new Error(`Invalid move in PGN: ${s.move}`);
                this._makeMove(u), this._incPositionCount()
            }
            s.comment !== void 0 && (this._comments[this.fen()] = s.comment), s = s.variations[0]
        }
        const a = l.result;
        a && Object.keys(this._header).length && this._header.Result !== a && this.setHeader("Result", a)
    }
    _moveToSan(t, n) {
        let r = "";
        if (t.flags & D.KSIDE_CASTLE) r = "O-O";
        else if (t.flags & D.QSIDE_CASTLE) r = "O-O-O";
        else {
            if (t.flags & D.NULL_MOVE) return fo;
            if (t.piece !== ae) {
                const l = Hv(t, n);
                r += t.piece.toUpperCase() + l
            }
            t.flags & (D.CAPTURE | D.EP_CAPTURE) && (t.piece === ae && (r += he(t.from)[0]), r += "x"), r += he(t.to), t.promotion && (r += "=" + t.promotion.toUpperCase())
        }
        return this._makeMove(t), this.isCheck() && (this.isCheckmate() ? r += "#" : r += "+"), this._undoMove(), r
    }
    _moveFromSan(t, n = !1) {
        let r = po(t);
        if (n || (r === "0-0" ? r = "O-O" : r === "0-0-0" && (r = "O-O-O")), r == fo) return {
            color: this._turn,
            from: 0,
            to: 0,
            piece: "k",
            flags: D.NULL_MOVE
        };
        let l = Hu(r),
            i = this._moves({
                legal: !0,
                piece: l
            });
        for (let f = 0, _ = i.length; f < _; f++)
            if (r === po(this._moveToSan(i[f], i))) return i[f];
        if (n) return null;
        let o, s, a, u, c, p = !1;
        if (s = r.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), s ? (o = s[1], a = s[2], u = s[3], c = s[4], a.length == 1 && (p = !0)) : (s = r.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), s && (o = s[1], a = s[2], u = s[3], c = s[4], a.length == 1 && (p = !0))), l = Hu(r), i = this._moves({
                legal: !0,
                piece: o || l
            }), !u) return null;
        for (let f = 0, _ = i.length; f < _; f++)
            if (a) {
                if ((!o || o.toLowerCase() == i[f].piece) && F[a] == i[f].from && F[u] == i[f].to && (!c || c.toLowerCase() == i[f].promotion)) return i[f];
                if (p) {
                    const g = he(i[f].from);
                    if ((!o || o.toLowerCase() == i[f].piece) && F[u] == i[f].to && (a == g[0] || a == g[1]) && (!c || c.toLowerCase() == i[f].promotion)) return i[f]
                }
            } else if (r === po(this._moveToSan(i[f], i)).replace("x", "")) return i[f];
        return null
    }
    ascii() {
        let t = `   +------------------------+
`;
        for (let n = F.a8; n <= F.h1; n++) {
            if (Zr(n) === 0 && (t += " " + "87654321" [hn(n)] + " |"), this._board[n]) {
                const r = this._board[n].type,
                    i = this._board[n].color === xe ? r.toUpperCase() : r.toLowerCase();
                t += " " + i + " "
            } else t += " . ";
            n + 1 & 136 && (t += `|
`, n += 8)
        }
        return t += `   +------------------------+
`, t += "     a  b  c  d  e  f  g  h", t
    }
    perft(t) {
        const n = this._moves({
            legal: !1
        });
        let r = 0;
        const l = this._turn;
        for (let i = 0, o = n.length; i < o; i++) this._makeMove(n[i]), this._isKingAttacked(l) || (t - 1 > 0 ? r += this.perft(t - 1) : r++), this._undoMove();
        return r
    }
    setTurn(t) {
        return this._turn == t ? !1 : (this.move("--"), !0)
    }
    turn() {
        return this._turn
    }
    board() {
        const t = [];
        let n = [];
        for (let r = F.a8; r <= F.h1; r++) this._board[r] == null ? n.push(null) : n.push({
            square: he(r),
            type: this._board[r].type,
            color: this._board[r].color
        }), r + 1 & 136 && (t.push(n), n = [], r += 8);
        return t
    }
    squareColor(t) {
        if (t in F) {
            const n = F[t];
            return (hn(n) + Zr(n)) % 2 === 0 ? "light" : "dark"
        }
        return null
    }
    history({
        verbose: t = !1
    } = {}) {
        const n = [],
            r = [];
        for (; this._history.length > 0;) n.push(this._undoMove());
        for (;;) {
            const l = n.pop();
            if (!l) break;
            t ? r.push(new xl(this, l)) : r.push(this._moveToSan(l, this._moves())), this._makeMove(l)
        }
        return r
    }
    _getPositionCount(t) {
        return this._positionCount.get(t) ?? 0
    }
    _incPositionCount() {
        this._positionCount.set(this._hash, (this._positionCount.get(this._hash) ?? 0) + 1)
    }
    _decPositionCount(t) {
        const n = this._positionCount.get(t) ?? 0;
        n === 1 ? this._positionCount.delete(t) : this._positionCount.set(t, n - 1)
    }
    _pruneComments() {
        const t = [],
            n = {},
            r = l => {
                l in this._comments && (n[l] = this._comments[l])
            };
        for (; this._history.length > 0;) t.push(this._undoMove());
        for (r(this.fen());;) {
            const l = t.pop();
            if (!l) break;
            this._makeMove(l), r(this.fen())
        }
        this._comments = n
    }
    getComment() {
        return this._comments[this.fen()]
    }
    setComment(t) {
        this._comments[this.fen()] = t.replace("{", "[").replace("}", "]")
    }
    deleteComment() {
        return this.removeComment()
    }
    removeComment() {
        const t = this._comments[this.fen()];
        return delete this._comments[this.fen()], t
    }
    getComments() {
        return this._pruneComments(), Object.keys(this._comments).map(t => ({
            fen: t,
            comment: this._comments[t]
        }))
    }
    deleteComments() {
        return this.removeComments()
    }
    removeComments() {
        return this._pruneComments(), Object.keys(this._comments).map(t => {
            const n = this._comments[t];
            return delete this._comments[t], {
                fen: t,
                comment: n
            }
        })
    }
    setCastlingRights(t, n) {
        for (const l of [ce, $t]) n[l] !== void 0 && (n[l] ? this._castling[t] |= El[l] : this._castling[t] &= ~El[l]);
        this._updateCastlingRights();
        const r = this.getCastlingRights(t);
        return (n[ce] === void 0 || n[ce] === r[ce]) && (n[$t] === void 0 || n[$t] === r[$t])
    }
    getCastlingRights(t) {
        return {
            [ce]: (this._castling[t] & El[ce]) !== 0,
            [$t]: (this._castling[t] & El[$t]) !== 0
        }
    }
    moveNumber() {
        return this._moveNumber
    }
}
const Qv = {
        w_p: "♙",
        w_n: "♘",
        w_b: "♗",
        w_r: "♖",
        w_q: "♕",
        w_k: "♔",
        b_p: "♟",
        b_n: "♞",
        b_b: "♝",
        b_r: "♜",
        b_q: "♛",
        b_k: "♚"
    },
    Yu = [{
        id: "chill",
        label: "chill",
        skill: 2,
        movetime: 300
    }, {
        id: "club",
        label: "club",
        skill: 8,
        movetime: 700
    }, {
        id: "beast",
        label: "beast",
        skill: 20,
        movetime: 1400
    }];

function Yv() {
    const e = N.useRef(new Qu),
        t = N.useRef(null),
        [n, r] = N.useState(e.current.fen()),
        [l, i] = N.useState(null),
        [o, s] = N.useState([]),
        [a, u] = N.useState(null),
        [c, p] = N.useState({
            kind: "boot"
        }),
        [f, _] = N.useState(Yu[1]),
        g = N.useRef(f);
    g.current = f;
    const w = () => {
            const P = e.current;
            return P.isCheckmate() ? P.turn() === "w" ? "checkmate - stockfish takes it. rematch?" : "checkmate - you win! beautifully done." : P.isStalemate() ? "stalemate - a draw." : P.isThreefoldRepetition() ? "draw by repetition." : P.isInsufficientMaterial() ? "draw - not enough material." : P.isDraw() ? "a draw." : null
        },
        E = N.useCallback(() => {
            const P = t.current;
            if (!P) return;
            p({
                kind: "thinking"
            });
            const j = g.current;
            P.postMessage(`setoption name Skill Level value ${j.skill}`), P.postMessage(`position fen ${e.current.fen()}`), P.postMessage(`go movetime ${j.movetime}`)
        }, []),
        h = N.useCallback(() => {
            r(e.current.fen());
            const P = w();
            if (P) {
                p({
                    kind: "over",
                    text: P
                });
                return
            }
            e.current.turn() === "b" ? E() : p({
                kind: "ready"
            })
        }, [E]);
    N.useEffect(() => {
        const P = typeof WebAssembly == "object",
            j = new Worker(P ? "/engine/stockfish.wasm.js" : "/engine/stockfish.js");
        t.current = j;
        let M = !1;
        return j.addEventListener("message", Q => {
            const $ = String(Q.data);
            if ($ === "uciok" && !M) M = !0, j.postMessage("isready");
            else if ($ === "readyok") p(V => V.kind === "boot" ? {
                kind: "ready"
            } : V);
            else if ($.startsWith("bestmove")) {
                const V = $.split(/\s+/)[1];
                if (V && V !== "(none)") {
                    const Te = e.current.move({
                        from: V.slice(0, 2),
                        to: V.slice(2, 4),
                        promotion: V[4] || "q"
                    });
                    Te && u({
                        from: Te.from,
                        to: Te.to
                    })
                }
                h()
            }
        }), j.postMessage("uci"), () => {
            j.terminate(), t.current = null
        }
    }, []);
    const d = P => {
            const j = e.current;
            if (c.kind === "thinking" || c.kind === "over" || j.turn() !== "w") return;
            if (l) {
                if (o.find($ => $.to === P)) {
                    const $ = j.move({
                        from: l,
                        to: P,
                        promotion: "q"
                    });
                    if ($) {
                        u({
                            from: $.from,
                            to: $.to
                        }), i(null), s([]), h();
                        return
                    }
                }
                i(null), s([])
            }
            const M = j.get(P);
            M && M.color === "w" && (i(P), s(j.moves({
                square: P,
                verbose: !0
            })))
        },
        v = () => {
            var P, j;
            e.current = new Qu, r(e.current.fen()), i(null), s([]), u(null), p(t.current ? {
                kind: "ready"
            } : {
                kind: "boot"
            }), (P = t.current) == null || P.postMessage("ucinewgame"), (j = t.current) == null || j.postMessage("isready")
        },
        C = e.current.board(),
        R = e.current.inCheck() && e.current.turn() === "w";
    return m.jsxs("div", {
        className: "chess-wrap",
        children: [m.jsxs("div", {
            className: "chess-bar",
            children: [m.jsx("div", {
                className: "chess-levels",
                role: "group",
                "aria-label": "engine strength",
                children: Yu.map(P => m.jsx("button", {
                    className: `chess-level ${P.id===f.id?"on":""}`,
                    onClick: () => _(P),
                    children: P.label
                }, P.id))
            }), m.jsx("button", {
                className: "chess-new",
                onClick: v,
                children: "new game"
            })]
        }), m.jsx("div", {
            className: "chess-board tilt-0",
            role: "grid",
            "aria-label": "chess board, you are white",
            children: C.map((P, j) => P.map((M, Q) => {
                const V = `${"abcdefgh"[Q]}${8-j}`,
                    Te = (j + Q) % 2 === 1,
                    ft = l === V,
                    Nt = o.some(Pt => Pt.to === V),
                    En = a && (a.from === V || a.to === V);
                return m.jsxs("button", {
                    role: "gridcell",
                    "aria-label": `${V}${M?" "+(M.color==="w"?"white":"black")+" "+M.type:""}`,
                    className: `sq ${Te?"d":"l"}${ft?" sel":""}${Nt?" tgt":""}${En?" last":""}`,
                    onClick: () => d(V),
                    children: [M && m.jsx("span", {
                        className: `pc ${M.color==="w"?"pw":"pb"}`,
                        children: Qv[`${M.color}_${M.type}`]
                    }), Nt && m.jsx("span", {
                        className: "dot",
                        "aria-hidden": "true"
                    })]
                }, V)
            }))
        }), m.jsxs("p", {
            className: "chess-status",
            "aria-live": "polite",
            children: [c.kind === "boot" && "warming up stockfish...", c.kind === "ready" && (R ? "check! your move - you are white." : "your move - you are white."), c.kind === "thinking" && "stockfish is thinking...", c.kind === "over" && c.text]
        })]
    })
}
const jn = (e, t) => {
        const n = sa.find(r => r.id === e);
        return n ? t.filter(r => n.items[r]).map(r => ({
            src: n.items[r].src,
            alt: n.items[r].alt,
            name: n.items[r].name,
            from: n.title
        })) : []
    },
    ln = [...jn("posters", [0, 1, 6, 8, 9, 10, 11, 12]), ...jn("tshirt", [4])];

function qv() {
    const [e, t] = N.useState(0), [n, r] = N.useState(null), l = N.useRef(null), i = N.useRef(null), o = ln.length, s = _ => Math.max(0, Math.min(o - 1, _)), a = _ => {
        var g, w;
        l.current = {
            x: _.clientX,
            start: e,
            moved: !1
        };
        try {
            (w = (g = _.target).setPointerCapture) == null || w.call(g, _.pointerId)
        } catch {}
    }, u = _ => {
        if (!l.current || !i.current) return;
        const g = i.current.offsetWidth,
            w = _.clientX - l.current.x;
        Math.abs(w) > 6 && (l.current.moved = !0), t(s(l.current.start - w / (g * .28)))
    }, c = () => {
        if (!l.current) return;
        const _ = l.current.moved;
        return l.current = null, t(g => Math.round(s(g))), _
    }, p = N.useCallback(_ => t(g => Math.round(s(g + _))), [o]);
    N.useEffect(() => {
        const _ = g => {
            if (n !== null) {
                g.key === "Escape" && r(null);
                return
            }
            g.key === "ArrowLeft" && p(-1), g.key === "ArrowRight" && p(1)
        };
        return window.addEventListener("keydown", _), () => window.removeEventListener("keydown", _)
    }, [p, n]);
    N.useEffect(() => {
        if (n !== null || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = window.setInterval(() => {
            if (l.current) return;
            t(g => {
                const nx = Math.round(g) + 1;
                return nx >= o ? 0 : nx;
            });
        }, 3200);
        return () => window.clearInterval(id);
    }, [o, n]);
    const f = Math.round(e);
    return m.jsxs("div", {
        className: "wall3d-wrap",
        children: [m.jsx("div", {
            className: "wall3d",
            ref: i,
            onPointerDown: a,
            onPointerMove: u,
            onPointerUp: c,
            onPointerCancel: c,
            role: "region",
            "aria-label": "3D gallery wall - drag or use arrows to move along the wall",
            children: m.jsx("div", {
                className: "wall3d-scene",
                children: ln.map((_, g) => {
                    const w = g - e,
                        E = Math.abs(w);
                    if (E > 3.2) return null;
                    const h = {
                        transform: `translate(-50%, -50%) translateX(${w*72}%) translateZ(${-E*350}px) rotateY(${-w*40}deg)`,
                        filter: `brightness(${Math.max(.5, 1 - E * .2)}) saturate(${Math.max(.7, 1 - E * .1)})`,
                        zIndex: 100 - Math.round(E * 10),
                        opacity: E > 2.6 ? 0 : 1
                    };
                    return m.jsxs("figure", {
                        className: `wall3d-panel${g===f?" cur":""}`,
                        style: h,
                        onClick: () => {
                            var d;
                            (d = l.current) != null && d.moved || (g === f ? r(g) : t(g))
                        },
                        "aria-label": `${_.name} (${_.from}) - panel ${g+1} of ${o}`,
                        children: [m.jsx("img", {
                            src: _.src,
                            alt: _.alt,
                            draggable: !1,
                            loading: "lazy"
                        }), m.jsx("figcaption", {
                            children: _.name
                        })]
                    }, g)
                })
            })
        }), m.jsxs("div", {
            className: "wall3d-bar",
            children: [m.jsx("button", {
                className: "wall3d-nav",
                onClick: () => p(-1),
                "aria-label": "previous panel",
                children: "←"
            }), m.jsxs("p", {
                className: "wall3d-count",
                "aria-live": "polite",
                children: [String(f + 1).padStart(3, "0"), " / ", String(o).padStart(3, "0"), m.jsx("span", {
                    children: " drag · click to open"
                })]
            }), m.jsx("button", {
                className: "wall3d-nav",
                onClick: () => p(1),
                "aria-label": "next panel",
                children: "→"
            })]
        }), n !== null && m.jsxs("div", {
            className: "wall3d-lightbox",
            onClick: () => r(null),
            role: "dialog",
            "aria-label": ln[n].alt,
            children: [m.jsx("img", {
                src: ln[n].src,
                alt: ln[n].alt
            }), m.jsxs("p", {
                children: [ln[n].name, " · ", ln[n].from.toLowerCase()]
            }), m.jsx("span", {
                className: "wall3d-close",
                children: "close ×"
            })]
        })]
    })
}
const qu = ["#1a1a1a", "#c1272d", "#55631f", "#f4a7c3", "#4a6fd4", "#e0a62e"],
    Gu = [4, 8, 16];

function Gv() {
    const e = N.useRef(null),
        [t, n] = N.useState(qu[0]),
        [r, l] = N.useState(Gu[1]),
        [i, o] = N.useState(!1),
        s = N.useRef(!1),
        a = N.useRef(null);
    N.useEffect(() => {
        const g = e.current;
        if (!g) return;
        const w = g.getContext("2d");
        if (!w) return;
        const E = () => {
            const h = g.getBoundingClientRect(),
                d = Math.min(window.devicePixelRatio || 1, 2),
                v = g.width ? g.toDataURL() : null;
            if (g.width = Math.round(h.width * d), g.height = Math.round(h.height * d), w.scale(d, d), w.fillStyle = "#f8edcd", w.fillRect(0, 0, h.width, h.height), v) {
                const C = new Image;
                C.onload = () => w.drawImage(C, 0, 0, h.width, h.height), C.src = v
            }
        };
        return E(), window.addEventListener("resize", E), () => window.removeEventListener("resize", E)
    }, []);
    const u = g => {
            const E = e.current.getBoundingClientRect();
            return {
                x: g.clientX - E.left,
                y: g.clientY - E.top
            }
        },
        c = g => {
            var w, E;
            s.current = !0;
            try {
                (E = (w = g.target).setPointerCapture) == null || E.call(w, g.pointerId)
            } catch {}
            a.current = u(g)
        },
        p = g => {
            if (!s.current || !a.current) return;
            const E = e.current.getContext("2d"),
                h = u(g);
            E.strokeStyle = i ? "#f8edcd" : t, E.lineWidth = i ? r * 2.5 : r, E.lineCap = "round", E.lineJoin = "round", E.beginPath(), E.moveTo(a.current.x, a.current.y), E.lineTo(h.x, h.y), E.stroke(), a.current = h
        },
        f = () => {
            s.current = !1, a.current = null
        },
        _ = () => {
            const g = e.current,
                w = g.getContext("2d"),
                E = g.getBoundingClientRect();
            w.fillStyle = "#f8edcd", w.fillRect(0, 0, E.width, E.height)
        };
    return m.jsxs("div", {
        className: "doodle-wrap",
        children: [m.jsxs("div", {
            className: "doodle-tools",
            role: "toolbar",
            "aria-label": "doodle tools",
            children: [qu.map(g => m.jsx("button", {
                className: `doodle-color${g===t&&!i?" on":""}`,
                style: {
                    background: g
                },
                onClick: () => {
                    n(g), o(!1)
                },
                "aria-label": `draw in ${g}`
            }, g)), Gu.map(g => m.jsx("button", {
                className: `doodle-size${g===r?" on":""}`,
                onClick: () => l(g),
                "aria-label": `brush size ${g}`,
                children: m.jsx("span", {
                    style: {
                        width: g + 2,
                        height: g + 2
                    }
                })
            }, g)), m.jsx("button", {
                className: `doodle-btn${i?" on":""}`,
                onClick: () => o(g => !g),
                children: "eraser"
            }), m.jsx("button", {
                className: "doodle-btn",
                onClick: _,
                children: "clear"
            })]
        }), m.jsx("canvas", {
            ref: e,
            className: "doodle-canvas",
            onPointerDown: c,
            onPointerMove: p,
            onPointerUp: f,
            onPointerCancel: f,
            "aria-label": "drawing canvas - draw with mouse or finger"
        }), m.jsx("p", {
            className: "doodle-note",
            children: "your doodle stays on your device - nothing is uploaded anywhere."
        })]
    })
}

function Xv() {
    const e = N.useRef(null),
        [t, n] = N.useState(!1),
        [r, l] = N.useState(0),
        [i, o] = N.useState("0:00");
    N.useEffect(() => {
        const a = e.current;
        if (!a) return;
        const u = () => {
                l(a.duration ? a.currentTime / a.duration : 0);
                const p = Math.floor(a.currentTime / 60),
                    f = Math.floor(a.currentTime % 60);
                o(`${p}:${String(f).padStart(2,"0")}`)
            },
            c = () => n(!1);
        return a.addEventListener("timeupdate", u), a.addEventListener("ended", c), () => {
            a.removeEventListener("timeupdate", u), a.removeEventListener("ended", c)
        }
    }, []);
    const s = () => {
        const a = e.current;
        a && (t ? (a.pause(), n(!1)) : a.play().then(() => n(!0)).catch(() => n(!1)))
    };
    return m.jsxs("div", {
        className: `music-player${t?" playing":""}`,
        role: "region",
        "aria-label": "music player",
        children: [m.jsx("audio", {
            ref: e,
            src: "audio/mia-and-sebs-theme.mp3",
            preload: "none"
        }), m.jsx("button", {
            className: "music-toggle",
            onClick: s,
            "aria-label": t ? "pause mia and seb's theme" : "play mia and seb's theme",
            "aria-pressed": t,
            children: t ? "❚❚" : "▶"
        }), m.jsxs("div", {
            className: "music-meta",
            children: [m.jsx("span", {
                className: "music-title",
                children: "mia & seb's theme"
            }), m.jsxs("span", {
                className: "music-sub",
                children: "Swayams' version"
            }), m.jsx("span", {
                className: "music-track",
                "aria-hidden": "true",
                children: m.jsx("span", {
                    className: "music-fill",
                    style: {
                        width: `${r*100}%`
                    }
                })
            })]
        }), t && m.jsxs("span", {
            className: "music-eq",
            "aria-hidden": "true",
            children: [m.jsx("i", {}), m.jsx("i", {}), m.jsx("i", {})]
        })]
    })
}
const Zv = {
        S: "M33 14 C20 7 8 14 11 23 C14 32 29 31 32 40 C35 49 23 55 7 47",
        W: "M4 9 L12 48 L20 22 L28 48 L36 9",
        A: "M6 48 L20 8 L34 48 M12 34 L28 34",
        Y: "M6 8 L20 28 L34 8 M20 28 L20 48",
        M: "M6 48 L6 10 L20 32 L34 10 L34 48",
        O: "M20 12 A16 16 0 1 1 19.9 12",
        H: "M8 8 L8 48 M32 8 L32 48 M8 28 L32 28",
        N: "M8 48 L8 9 L32 47 L32 8",
        T: "M6 10 L34 10 M20 10 L20 48"
    },
    Xu = [-4, 3, -2, 4, -3, 2, -4, 3, -2, 4, -3, 2, -4, 3],
    Zu = [0, 2, -1, 3, 0, 2, -1, 1, 0, 3, -1, 2, 0, 1];

function Jv({
    ch: e,
    i: t,
    colors: n,
    stroke: r
}) {
    const l = Zv[e.toUpperCase()];
    if (!l) return m.jsx("span", {
        style: {
            width: "0.5em",
            display: "inline-block"
        }
    }, t);
    const i = n[t % n.length],
        o = Xu[t % Xu.length],
        s = Zu[t % Zu.length];
    return m.jsx("svg", {
        viewBox: "0 0 40 56",
        "aria-hidden": "true",
        style: {
            height: "1em",
            width: "auto",
            overflow: "visible",
            transform: `rotate(${o}deg) translateY(${s*.04}em)`,
            marginLeft: t === 0 ? 0 : "-0.04em"
        },
        children: m.jsx("path", {
            d: l,
            fill: "none",
            stroke: i,
            strokeWidth: r,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }, t)
}

function jd({
    text: e,
    colors: t,
    stroke: n = 7.5,
    className: r,
    label: l
}) {
    return m.jsx("span", {
        className: r,
        role: "img",
        "aria-label": l,
        style: {
            display: "inline-flex",
            alignItems: "baseline"
        },
        children: e.split("").map((i, o) => i === " " ? m.jsx("span", {
            style: {
                width: "0.42em",
                display: "inline-block"
            }
        }, o) : m.jsx(Jv, {
            ch: i,
            i: o,
            colors: t,
            stroke: n
        }, o))
    })
}
const aa = N.createContext(() => {}),
    bv = [{
        to: "/",
        label: "home",
        end: !0
    }, {
        to: "/uiux",
        label: "ui/ux"
    }, {
        to: "/posters",
        label: "posters"
    }, {
        to: "/tshirt",
        label: "t-shirt"
    }, {
        to: "/engineers-cup",
        label: "engineer's cup"
    }, {
        to: "/letterman-25",
        label: "letterman 25'"
    }, {
        to: "/esummit-26",
        label: "e-summit 26'"
    }, {
        to: "/esummit-25",
        label: "e-summit 25'"
    }, {
        to: "/video",
        label: "video editing"
    }, {
        to: "/doodle",
        label: "doodle"
    }, {
        to: "/play",
        label: "play me"
    }, {
        to: "/contact",
        label: "say hi"
    }],
    ey = [{
        src: Ul[0],
        name: "E-Summit '26 - Monopoly teaser",
        href: "https://www.instagram.com/reel/DVGd3vykjYb/",
        by: "@esummit.outr"
    }, {
        src: Ul[1],
        name: "E-Summit '26 - anniversary reel",
        href: "https://www.instagram.com/reel/DUf7yYykv5b/",
        by: "@esummit.outr"
    }, {
        src: Ul[2],
        name: "CETADEL - OUTR experiences episode",
        href: "https://www.instagram.com/reel/C3u_pZRxz_P/",
        by: "@cetadel_outr"
    }];

function ty() {
    const e = N.useRef(null);
    return N.useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const t = n => {
            e.current && (e.current.style.visibility = "visible", e.current.style.transform = `translate(${n.clientX}px, ${n.clientY}px)`)
        };
        return window.addEventListener("mousemove", t), document.body.classList.add("jack-cursor"), () => {
            window.removeEventListener("mousemove", t), document.body.classList.remove("jack-cursor")
        }
    }, []), m.jsx("div", {
        className: "jack",
        ref: e,
        "aria-hidden": "true",
        style: {
            visibility: "hidden"
        },
        children: m.jsx("svg", {
            width: "30",
            height: "40",
            viewBox: "0 0 30 40",
            children: m.jsxs("g", {
                transform: "rotate(-8 15 20)",
                children: [m.jsx("rect", {
                    x: "3",
                    y: "3",
                    width: "24",
                    height: "34",
                    rx: "5",
                    fill: "#fff8e7",
                    stroke: "#c1272d",
                    strokeWidth: "2.5"
                }), m.jsx("text", {
                    x: "7",
                    y: "15",
                    fontFamily: "Arial",
                    fontSize: "9",
                    fontWeight: "bold",
                    fill: "#c1272d",
                    children: "J"
                }), m.jsx("path", {
                    d: "M15 32c-4.5-4.2-8-6.8-8-10.2 0-2 1.5-3.6 3.5-3.6 1.6 0 3.4 1 4.5 2.6 1.1-1.6 2.9-2.6 4.5-2.6 2 0 3.5 1.6 3.5 3.6 0 3.4-3.5 6-8 10.2z",
                    fill: "#c1272d"
                })]
            })
        })
    })
}

function Rd({
    items: e,
    title: t
}) {
    const n = N.useContext(aa);
    return m.jsx("div", {
        className: "gal",
        children: e.map((r, l) => m.jsxs("button", {
            type: "button",
            className: `work-card tilt-${l%5}${r.wide?" wide":""}`,
            onClick: () => n(e, l, t),
            "aria-label": `Open ${r.alt}`,
            children: [m.jsx("img", {
                src: r.src,
                alt: r.alt,
                loading: "lazy"
            }), m.jsx("span", {
                className: "work-tag",
                children: r.name
            })]
        }, r.src))
    })
}

function vt({
    id: e,
    title: t,
    sticker: n,
    children: r
}) {
    return m.jsxs("section", {
        className: "sec",
        id: e,
        children: [m.jsxs("div", {
            className: "sec-head",
            children: [m.jsx("h2", {
                children: t
            }), n && m.jsx("span", {
                className: "sticker",
                children: n
            })]
        }), r]
    })
}

function ny({
    viewer: e,
    onClose: t
}) {
    const [n, r] = N.useState(e.start), l = N.useCallback(() => r(s => (s - 1 + e.photos.length) % e.photos.length), [e.photos.length]), i = N.useCallback(() => r(s => (s + 1) % e.photos.length), [e.photos.length]);
    N.useEffect(() => {
        const s = a => {
            a.key === "Escape" && t(), a.key === "ArrowLeft" && l(), a.key === "ArrowRight" && i()
        };
        return window.addEventListener("keydown", s), document.body.style.overflow = "hidden", () => {
            window.removeEventListener("keydown", s), document.body.style.overflow = ""
        }
    }, [t, l, i]);
    const o = e.photos[n];
    return m.jsxs("div", {
        className: "lightbox",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.title,
        onClick: t,
        children: [m.jsx("button", {
            type: "button",
            className: "lb-close",
            onClick: t,
            "aria-label": "Close",
            children: "x"
        }), m.jsx("button", {
            type: "button",
            className: "lb-nav lb-prev",
            onClick: s => {
                s.stopPropagation(), l()
            },
            "aria-label": "Previous",
            children: "<"
        }), m.jsx("img", {
            src: o.src,
            alt: o.alt,
            onClick: s => s.stopPropagation()
        }), m.jsx("button", {
            type: "button",
            className: "lb-nav lb-next",
            onClick: s => {
                s.stopPropagation(), i()
            },
            "aria-label": "Next",
            children: ">"
        }), m.jsxs("div", {
            className: "lb-meta",
            children: [n + 1, " of ", e.photos.length, " - ", e.title]
        })]
    })
}

function Td() {
    const e = ["ui/ux", "graphic design", "video edits", "branding", "merch", "magazines"],
        t = [...e, ...e, ...e];
    return m.jsx("div", {
        className: "marquee",
        "aria-hidden": "true",
        children: m.jsx("div", {
            className: "marquee-track",
            children: t.map((n, r) => m.jsxs("span", {
                children: [n, " ", m.jsx("b", {
                    children: "✦"
                }), " "]
            }, r))
        })
    })
}
const vr = ["Loading awesomeness...", "Adding a little ✨", "Shuffling ideas...", "Making pixels behave..."];

function ry({
    onDone: e
}) {
    const [t, n] = N.useState(0), [r, l] = N.useState("flip");
    return N.useEffect(() => {
        const i = [],
            o = (u, c) => {
                i.push(window.setTimeout(u, c))
            };
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ? (o(() => l("land"), 400), o(() => l("leave"), 1e3), o(e, 1400)) : (vr.forEach((u, c) => o(() => n(c), c * 650)), o(() => l("land"), vr.length * 650 + 120), o(() => l("leave"), vr.length * 650 + 900), o(e, vr.length * 650 + 1340));
        const a = () => {
            i.forEach(clearTimeout), l("leave"), window.setTimeout(e, 430)
        };
        return window.addEventListener("pointerdown", a, {
            once: !0
        }), window.addEventListener("keydown", a, {
            once: !0
        }), () => {
            i.forEach(clearTimeout), window.removeEventListener("pointerdown", a), window.removeEventListener("keydown", a)
        }
    }, []), m.jsxs("div", {
        className: `intro-loader ${r}`,
        role: "status",
        "aria-label": "site intro animation",
        children: [m.jsx("div", {
            className: "intro-card",
            "aria-hidden": "true",
            children: m.jsx("svg", {
                viewBox: "0 0 30 40",
                width: "96",
                height: "128",
                children: m.jsxs("g", {
                    transform: "rotate(-8 15 20)",
                    children: [m.jsx("rect", {
                        x: "3",
                        y: "3",
                        width: "24",
                        height: "34",
                        rx: "5",
                        fill: "#fff8e7",
                        stroke: "#c1272d",
                        strokeWidth: "2.5"
                    }), m.jsx("text", {
                        x: "7",
                        y: "15",
                        fontFamily: "Arial",
                        fontSize: "9",
                        fontWeight: "bold",
                        fill: "#c1272d",
                        children: "J"
                    }), m.jsx("path", {
                        d: "M15 32c-4.5-4.2-8-6.8-8-10.2 0-2 1.5-3.6 3.5-3.6 1.6 0 3.4 1 4.5 2.6 1.1-1.6 2.9-2.6 4.5-2.6 2 0 3.5 1.6 3.5 3.6 0 3.4-3.5 6-8 10.2z",
                        fill: "#c1272d"
                    })]
                })
            })
        }), m.jsx("p", {
            className: "intro-word",
            children: r === "flip" ? vr[t] : "Almost ready to show off..."
        })]
    })
}

function Ju() {
    const e = N.useRef(null);
    return N.useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const t = n => {
            const r = e.current;
            if (!r) return;
            const l = r.getBoundingClientRect(),
                i = Math.max(-1, Math.min(1, (n.clientX - (l.left + l.width / 2)) / (l.width / 2))),
                o = Math.max(-1, Math.min(1, (n.clientY - (l.top + l.height / 2)) / (l.height / 2)));
            r.style.setProperty("--mx", i.toFixed(3)), r.style.setProperty("--my", o.toFixed(3))
        };
        return window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t)
    }, []), m.jsxs(m.Fragment, {
        children: [m.jsxs("header", {
            className: "hero",
            ref: e,
            children: [m.jsx("span", {
                className: "hero-word hero-mark",
                "aria-hidden": "true",
                children: m.jsx("span", {
                    className: "hero-name hero-name-text",
                    children: "\u092e\u0948\u0902 \u0938\u094d\u0935\u092f\u092e\u094d\u0938"
                })
            }), m.jsxs("div", {
                className: "hero-card tilt-2",
                children: [m.jsx("h1", {
                    children: "hey, i'm swayams"
                })]
            }), m.jsx("span", {
                className: "sticker hero-sticker",
                children: "it's giving designer"
            }), m.jsxs("div", {
                className: "hero-strips",
                children: [m.jsx(Ot, {
                    to: "/uiux",
                    children: "ui/ux"
                }), m.jsx(Ot, {
                    to: "/posters",
                    children: "graphic design"
                }), m.jsx(Ot, {
                    to: "/video",
                    children: "video edits"
                }), m.jsx("span", {
                    className: "strip-more",
                    children: "& more"
                })]
            }), m.jsx(RotCard, {})]
        }), m.jsx(Td, {}), m.jsx(vt, {
            id: "work",
            title: "my work",
            sticker: "pick a category",
            children: m.jsxs("div", {
                className: "cat-grid",
                children: [m.jsxs(Ot, {
                    to: "/uiux",
                    className: "cat-card tilt-1",
                    children: [m.jsx("img", {
                        src: Pd[1].src,
                        alt: "Moneo UI screens",
                        loading: "lazy"
                    }), m.jsx("span", {
                        className: "cat-name",
                        children: "ui/ux"
                    }), m.jsx("span", {
                        className: "cat-count",
                        children: "4 projects"
                    })]
                }), sa.map((t, n) => m.jsxs(Ot, {
                    to: `/${t.id}`,
                    className: `cat-card tilt-${(n+2)%5}`,
                    children: [m.jsx("img", {
                        src: t.items[t.cover || 0].src,
                        alt: t.items[0].alt,
                        loading: "lazy"
                    }), m.jsx("span", {
                        className: "cat-name",
                        children: t.title.toLowerCase()
                    }), m.jsxs("span", {
                        className: "cat-count",
                        children: [t.items.length, " designs"]
                    })]
                }, t.id)), m.jsxs(Ot, {
                    to: "/video",
                    className: "cat-card tilt-4",
                    children: [m.jsx("img", {
                        src: Ul[0],
                        alt: "E-Summit reel still",
                        loading: "lazy"
                    }), m.jsx("span", {
                        className: "cat-name",
                        children: "video editing"
                    }), m.jsx("span", {
                        className: "cat-count",
                        children: "3 reels"
                    })]
                })]
            })
        }), m.jsxs(vt, {
            id: "gallery",
            title: "the gallery",
            sticker: "walk the wall",
            children: [m.jsx("p", {
                className: "body-copy",
                children: "अपनी favourite चीज़ें, एक लंबी दीवार पे. drag to walk the wall - click a frame to step closer."
            }), m.jsx(qv, {})]
        }), m.jsx(GreetBand, {})]
    })
}

function ly() {
    const e = N.useContext(aa);
    return m.jsx(vt, {
        id: "uiux",
        title: "ui/ux",
        sticker: "4 projects",
        children: m.jsxs("div", {
            className: "proj-grid",
            children: [m.jsxs("article", {
                className: "proj-card tilt-1",
                children: [m.jsx("h3", {
                    children: "Moneo"
                }), m.jsx("p", {
                    className: "proj-sub",
                    children: "Finance app UI, designed in Figma."
                }), m.jsx(Rd, {
                    items: Pd,
                    title: "Moneo"
                }), m.jsx("p", {
                    className: "proj-links",
                    children: m.jsx("a", {
                        className: "text-link",
                        href: "https://www.figma.com/design/XTq0YNNEhslGccjCsFW4zD/Swayams--Portfolio?node-id=3-4042&p=f&t=JPlvuSCvQaJ19fpJ-0",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Figma file"
                    })
                })]
            }), m.jsxs("article", {
                className: "proj-card tilt-3",
                children: [m.jsx("h3", {
                    children: "Desypher"
                }), m.jsx("p", {
                    className: "proj-sub",
                    children: "Website design, live."
                }), m.jsx("button", {
                    type: "button",
                    className: "proj-shot",
                    onClick: () => e([{
                        src: Du,
                        alt: "Desypher landing page",
                        name: "Desypher"
                    }], 0, "Desypher"),
                    children: m.jsx("img", {
                        src: Du,
                        alt: "Desypher landing page",
                        loading: "lazy"
                    })
                }), m.jsx("p", {
                    className: "proj-links",
                    children: m.jsx("a", {
                        className: "text-link",
                        href: "https://desypher.pages.dev/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "desypher.pages.dev"
                    })
                })]
            }), m.jsxs("article", {
                className: "proj-card tilt-4",
                children: [m.jsx("h3", {
                    children: "Aura - Companion App"
                }), m.jsx("p", {
                    className: "proj-sub",
                    children: "Built at the Meta Global AI Developer Hackathon, October 2026."
                }), m.jsx("button", {
                    type: "button",
                    className: "proj-shot",
                    onClick: () => e([{
                        src: Bu,
                        alt: "Aura demo still",
                        name: "Aura"
                    }], 0, "Aura"),
                    children: m.jsx("img", {
                        src: Bu,
                        alt: "Aura demo still",
                        loading: "lazy"
                    })
                }), m.jsxs("p", {
                    className: "proj-links",
                    children: [m.jsx("a", {
                        className: "text-link",
                        href: "https://github.com/swayamsgit/aura-context-companion",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "GitHub repo"
                    }), " · ", m.jsx("a", {
                        className: "text-link",
                        href: "https://youtu.be/Y4b9QXBKYXU",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Demo video"
                    })]
                })]
            }), m.jsxs("article", {
                className: "proj-card tilt-1",
                children: [m.jsx("h3", {
                    children: "1voice"
                }), m.jsx("p", {
                    className: "proj-sub",
                    children: "Voice-first seller app - submitted at the PayPal AI Hackathon, November 2026."
                }), m.jsx("p", {
                    className: "proj-sub",
                    children: "Talk to it in Hinglish to log sales, track spending and see what earns. PayPal sandbox checkout + Gemini, AG Grid tables, hosted on Render."
                }), m.jsx("button", {
                    type: "button",
                    className: "proj-shot",
                    onClick: () => e([{
                        src: "/assets/1voice.png",
                        alt: "1voice app - voice-first seller dashboard",
                        name: "1voice"
                    }], 0, "1voice"),
                    children: m.jsx("img", {
                        src: "/assets/1voice.png",
                        alt: "1voice app - voice-first seller dashboard",
                        loading: "lazy"
                    })
                }), m.jsxs("p", {
                    className: "proj-links",
                    children: [m.jsx("a", {
                        className: "text-link",
                        href: "https://onevoice-5d65.onrender.com",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Live demo"
                    }), " \u00b7 ", m.jsx("a", {
                        className: "text-link",
                        href: "https://gitlab.com/desypher-earth/1voice",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Code"
                    })]
                })]
            })]
        })
    })
}

function iy() {
    return m.jsx(vt, {
        id: "video",
        title: "video editing",
        sticker: "reels",
        children: m.jsx("div", {
            className: "reel-grid",
            children: ey.map(e => m.jsxs("a", {
                className: "reel-card tilt-2",
                href: e.href,
                target: "_blank",
                rel: "noreferrer",
                children: [m.jsx("img", {
                    src: e.src,
                    alt: e.name,
                    loading: "lazy"
                }), m.jsx("span", {
                    className: "reel-name",
                    children: e.name
                }), m.jsxs("span", {
                    className: "reel-by",
                    children: [e.by, " - watch on Instagram"]
                })]
            }, e.href))
        })
    })
}

function oy() {
    return m.jsx(vt, {
        id: "contact",
        title: "say hi",
        sticker: "contact",
        children: m.jsxs("div", {
            className: "contact-row",
            children: [m.jsx("a", {
                className: "chip chip-link",
                href: "tel:+917681001527",
                children: "+91 76810 01527"
            }), m.jsx("a", {
                className: "chip chip-link",
                href: "mailto:swayamsdeep444@gmail.com",
                children: "swayamsdeep444@gmail.com"
            }), m.jsx("a", {
                className: "chip chip-link",
                href: "https://www.instagram.com/auti__sm",
                target: "_blank",
                rel: "noreferrer",
                children: "instagram - @auti__sm"
            }), m.jsx("a", {
                className: "chip chip-link",
                href: "https://www.linkedin.com/in/swayamsmohanty042004",
                target: "_blank",
                rel: "noreferrer",
                children: "linkedin - swayamsmohanty042004"
            })]
        })
    })
}

function sy() {
    const {
        pathname: e
    } = or();
    return N.useEffect(() => {
        window.scrollTo(0, 0)
    }, [e]), null
}

const LinkC = Ot;
const NavLinkC = t0;
const SectionC = vt;
const LOGO_URL = "/assets/name-mark-transparent.png";
const railIcon = {
  home: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("path", { d: "M3 11l9-8 9 8" }), /* @__PURE__ */ N.createElement("path", { d: "M5 10v10h14V10" })),
  work: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("rect", { x: "3", y: "7", width: "18", height: "13", rx: "2" }), /* @__PURE__ */ N.createElement("path", { d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })),
  video: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ N.createElement("path", { d: "M8 5.5v13l11-6.5z" })),
  doodle: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("path", { d: "M12 19l7-7a2.1 2.1 0 0 0-3-3l-7 7-2 5z" }), /* @__PURE__ */ N.createElement("path", { d: "M15 6l3 3" })),
  play: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("path", { d: "M8 21l1.5-4L7 14c0-3 1-4 2-6l3-4 3 4c1 2 2 3 2 6l-2.5 3L16 21" }), /* @__PURE__ */ N.createElement("path", { d: "M9.5 17h5" })),
  mail: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }), /* @__PURE__ */ N.createElement("path", { d: "M3 7l9 6 9-6" })),
  about: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("circle", { cx: "12", cy: "8", r: "4" }), /* @__PURE__ */ N.createElement("path", { d: "M4 21c1.5-4 5-6 8-6s6.5 2 8 6" }))
};
function SideRail() {
  N.useEffect(() => {
    const set = () => {
      const main = document.querySelector(".poster main") || document.querySelector(".poster");
      if (main) document.documentElement.style.setProperty("--bleed-l", main.getBoundingClientRect().left + "px");
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);
  const items = [
    { to: "/", label: "home", icon: railIcon.home, end: true },
    { to: "/about", label: "about me", icon: railIcon.about },
    { to: "/uiux", label: "ui/ux", icon: railIcon.work },
    { to: "/video", label: "video editing", icon: railIcon.video },
    { to: "/doodle", label: "artboard", icon: railIcon.doodle },
    { to: "/play", label: "play me", icon: railIcon.play },
    { to: "/contact", label: "say hi", icon: railIcon.mail }
  ];
  return /* @__PURE__ */ N.createElement("aside", { className: "side-rail", "aria-label": "quick navigation" }, /* @__PURE__ */ N.createElement("nav", { className: "rail-pill" }, items.map((i) => /* @__PURE__ */ N.createElement(
    NavLinkC,
    {
      key: i.to,
      to: i.to,
      end: i.end,
      title: i.label,
      "aria-label": i.label,
      className: ({ isActive: a }) => "rail-ic" + (a ? " active" : "")
    },
    i.icon
  ))));
}
const GREETINGS = ["say hi", "say namaste", "say hello"];
function GreetBand() {
  const [i, setI] = N.useState(0);
  N.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((x) => (x + 1) % GREETINGS.length), 2400);
    return () => window.clearInterval(id);
  }, []);
  return /* @__PURE__ */ N.createElement("section", { className: "greet-band", "aria-label": "contact greeting" }, /* @__PURE__ */ N.createElement("div", { className: "greet-rays", "aria-hidden": "true" }), /* @__PURE__ */ N.createElement("h2", { className: "greet-word" }, /* @__PURE__ */ N.createElement("span", { key: i, className: "greet-swap" }, GREETINGS[i])), /* @__PURE__ */ N.createElement("a", { className: "greet-mail", href: "mailto:swayamsdeep444@gmail.com" }, "swayamsdeep444@gmail.com"), /* @__PURE__ */ N.createElement("div", { className: "greet-links" }, /* @__PURE__ */ N.createElement("a", { className: "chip chip-link", href: "https://www.instagram.com/auti__sm", target: "_blank", rel: "noreferrer" }, "instagram - @auti__sm"), /* @__PURE__ */ N.createElement("a", { className: "chip chip-link", href: "https://www.linkedin.com/in/swayamsmohanty042004", target: "_blank", rel: "noreferrer" }, "linkedin"), /* @__PURE__ */ N.createElement(LinkC, { className: "chip chip-link", to: "/contact" }, "all contacts")));
}
const ART_COLORS = ["#1a1a1a", "#c1272d", "#55631f", "#f4a7c3", "#4a6fd4", "#e0a62e", "#8a4b2d", "#7a3fa0", "#f8edcd"];
const ART_SIZES = [2, 4, 8, 16, 28];
function Artboard() {
  const canvasRef = N.useRef(null);
  const [color, setColor] = N.useState(ART_COLORS[0]);
  const [size, setSize] = N.useState(ART_SIZES[2]);
  const [tool, setTool] = N.useState("brush");
  const [opacity, setOpacity] = N.useState(100);
  const [fillShape, setFillShape] = N.useState(true);
  const [bg, setBg] = N.useState("#fdf6e0");
  const drawing = N.useRef(false);
  const start = N.useRef(null);
  const last = N.useRef(null);
  const snap = N.useRef(null);
  const undoStack = N.useRef([]);
  const [canUndo, setCanUndo] = N.useState(false);
  const [shared, setShared] = N.useState("");
  const toolRef = N.useRef("brush");
  const colorRef = N.useRef(ART_COLORS[0]);
  const sizeRef = N.useRef(ART_SIZES[2]);
  const opRef = N.useRef(1);
  const fillRef = N.useRef(true);
  toolRef.current = tool;
  colorRef.current = color;
  sizeRef.current = size;
  opRef.current = opacity / 100;
  fillRef.current = fillShape;
  N.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const fit = () => {
      const r = c.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 2);
      const prev = c.width ? c.toDataURL() : null;
      c.width = Math.round(r.width * d);
      c.height = Math.round(r.height * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      if (prev) {
        const im = new Image();
        im.onload = () => ctx.drawImage(im, 0, 0, r.width, r.height);
        im.src = prev;
      }
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  const pos = (e) => {
    const r = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const pushUndo = () => {
    try {
      undoStack.current.push(canvasRef.current.toDataURL());
      if (undoStack.current.length > 40) undoStack.current.shift();
      setCanUndo(true);
    } catch {
    }
  };
  const snapIn = () => {
    const c = canvasRef.current;
    const off = document.createElement("canvas");
    off.width = c.width;
    off.height = c.height;
    off.getContext("2d").drawImage(c, 0, 0);
    snap.current = off;
  };
  const snapOut = () => {
    const c = canvasRef.current, ctx = c.getContext("2d");
    const d = Math.min(window.devicePixelRatio || 1, 2);
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(snap.current, 0, 0);
    ctx.restore();
  };
  const strokeStyle = (ctx) => {
    ctx.lineWidth = sizeRef.current;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = opRef.current;
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = colorRef.current;
    ctx.fillStyle = colorRef.current;
  };
  const drawShape = (ctx, a, b) => {
    strokeStyle(ctx);
    const t = toolRef.current;
    const x = Math.min(a.x, b.x), y = Math.min(a.y, b.y);
    const w = Math.abs(b.x - a.x), h = Math.abs(b.y - a.y);
    ctx.beginPath();
    if (t === "line") {
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    } else if (t === "rect") {
      if (fillRef.current) ctx.fillRect(x, y, w, h);
      else {
        ctx.lineWidth = Math.max(2, sizeRef.current / 2);
        ctx.strokeRect(x, y, w, h);
      }
    } else if (t === "ellipse") {
      ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
      if (fillRef.current) ctx.fill();
      else {
        ctx.lineWidth = Math.max(2, sizeRef.current / 2);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  };
  const floodFill = (pt) => {
    const c = canvasRef.current, ctx = c.getContext("2d");
    const d = Math.min(window.devicePixelRatio || 1, 2);
    const W = c.width, H = c.height;
    const img = ctx.getImageData(0, 0, W, H);
    const data = img.data;
    const hex = colorRef.current;
    const fr = parseInt(hex.slice(1, 3), 16), fg = parseInt(hex.slice(3, 5), 16), fb = parseInt(hex.slice(5, 7), 16);
    const x0 = Math.round(pt.x * d), y0 = Math.round(pt.y * d);
    if (x0 < 0 || y0 < 0 || x0 >= W || y0 >= H) return;
    const i0 = (y0 * W + x0) * 4;
    const tr = data[i0], tg = data[i0 + 1], tb = data[i0 + 2], ta = data[i0 + 3];
    if (tr === fr && tg === fg && tb === fb && ta === 255) return;
    const tol = 48;
    const match = (i) => Math.abs(data[i] - tr) <= tol && Math.abs(data[i + 1] - tg) <= tol && Math.abs(data[i + 2] - tb) <= tol && Math.abs(data[i + 3] - ta) <= tol;
    const stack = [[x0, y0]];
    const seen = new Uint8Array(W * H);
    while (stack.length) {
      const [x, y] = stack.pop();
      if (x < 0 || y < 0 || x >= W || y >= H) continue;
      const p = y * W + x;
      if (seen[p]) continue;
      const i = p * 4;
      if (!match(i)) continue;
      seen[p] = 1;
      data[i] = fr;
      data[i + 1] = fg;
      data[i + 2] = fb;
      data[i + 3] = 255;
      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
    ctx.putImageData(img, 0, 0);
  };
  const spray = (ctx, p) => {
    ctx.save();
    ctx.globalAlpha = opRef.current;
    ctx.fillStyle = colorRef.current;
    const r = sizeRef.current * 2;
    for (let k = 0; k < 14; k++) {
      const a = Math.random() * Math.PI * 2, rr = Math.random() * r;
      ctx.beginPath();
      ctx.arc(p.x + Math.cos(a) * rr, p.y + Math.sin(a) * rr, Math.max(0.6, sizeRef.current / 6), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };
  const down = (e) => {
    drawing.current = true;
    pushUndo();
    setShared("");
    try {
      e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId);
    } catch {
    }
    const p = pos(e);
    start.current = p;
    last.current = p;
    const t = toolRef.current;
    const ctx = canvasRef.current.getContext("2d");
    if (t === "fill") {
      floodFill(p);
      drawing.current = false;
      return;
    }
    if (t === "line" || t === "rect" || t === "ellipse") {
      snapIn();
      return;
    }
    if (t === "spray") {
      spray(ctx, p);
      return;
    }
    ctx.save();
    strokeStyle(ctx);
    if (t === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = sizeRef.current * 2.5;
      ctx.globalAlpha = 1;
    }
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x + 0.01, p.y + 0.01);
    ctx.stroke();
    ctx.restore();
  };
  const move = (e) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const p = pos(e);
    const t = toolRef.current;
    if (t === "line" || t === "rect" || t === "ellipse") {
      if (!snap.current) return;
      snapOut();
      drawShape(ctx, start.current, p);
      return;
    }
    if (t === "spray") {
      spray(ctx, p);
      last.current = p;
      return;
    }
    if (!last.current) return;
    ctx.save();
    strokeStyle(ctx);
    if (t === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = sizeRef.current * 2.5;
      ctx.globalAlpha = 1;
    }
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    ctx.restore();
    last.current = p;
  };
  const up = () => {
    drawing.current = false;
    last.current = null;
    snap.current = null;
  };
  const undo = () => {
    const prev = undoStack.current.pop();
    setCanUndo(undoStack.current.length > 0);
    if (!prev) return;
    const c = canvasRef.current, ctx = c.getContext("2d");
    const r = c.getBoundingClientRect();
    const im = new Image();
    im.onload = () => {
      ctx.clearRect(0, 0, r.width, r.height);
      ctx.drawImage(im, 0, 0, r.width, r.height);
    };
    im.src = prev;
  };
  const clear = () => {
    pushUndo();
    const c = canvasRef.current, ctx = c.getContext("2d");
    const r = c.getBoundingClientRect();
    ctx.clearRect(0, 0, r.width, r.height);
  };
  const composeBlob = (cb) => {
    const c = canvasRef.current;
    const out = document.createElement("canvas");
    out.width = c.width;
    out.height = c.height;
    const octx = out.getContext("2d");
    octx.fillStyle = bg;
    octx.fillRect(0, 0, out.width, out.height);
    octx.drawImage(c, 0, 0);
    out.toBlob(cb, "image/png");
  };
  const exportPng = () => {
    composeBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "swayams-artboard.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 4e3);
      setShared("exported png - check your downloads.");
    });
  };
  const share = () => {
    composeBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], "swayams-artboard.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: "my artboard", text: "made on swayams' portfolio" });
          setShared("shared.");
        } catch {
        }
      } else {
        try {
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          setShared("copied to clipboard - paste it anywhere.");
        } catch {
          exportPng();
          setShared("sharing not supported here - exported a png instead.");
        }
      }
    });
  };
  const TOOLS = [
    { id: "brush", label: "brush" },
    { id: "spray", label: "spray" },
    { id: "line", label: "line" },
    { id: "rect", label: "rect" },
    { id: "ellipse", label: "circle" },
    { id: "fill", label: "fill" },
    { id: "eraser", label: "eraser" }
  ];
  const BG_COLORS = ["#fdf6e0", "#ffffff", "#1a1a1a", "#f4a7c3", "#f3c85e", "#bcd3f7"];
  return /* @__PURE__ */ N.createElement("div", { className: "doodle-wrap artboard" }, /* @__PURE__ */ N.createElement("div", { className: "doodle-tools", role: "toolbar", "aria-label": "artboard tools" }, /* @__PURE__ */ N.createElement("div", { className: "tool-row" }, TOOLS.map((t) => /* @__PURE__ */ N.createElement(
    "button",
    {
      key: t.id,
      type: "button",
      className: "chip tool-btn" + (tool === t.id ? " active" : ""),
      "aria-pressed": tool === t.id,
      onClick: () => setTool(t.id)
    },
    t.label
  )), /* @__PURE__ */ N.createElement("span", { className: "tool-sep", "aria-hidden": "true" }), /* @__PURE__ */ N.createElement("label", { className: "chip tool-toggle" }, /* @__PURE__ */ N.createElement("input", { type: "checkbox", checked: fillShape, onChange: (e) => setFillShape(e.target.checked) }), " fill"), /* @__PURE__ */ N.createElement("label", { className: "chip tool-range" }, "opacity ", /* @__PURE__ */ N.createElement("input", { type: "range", min: "10", max: "100", value: opacity, onChange: (e) => setOpacity(Number(e.target.value)), "aria-label": "opacity" }))), /* @__PURE__ */ N.createElement("div", { className: "tool-row" }, /* @__PURE__ */ N.createElement("span", { className: "tool-label" }, "ink"), ART_COLORS.map((c) => /* @__PURE__ */ N.createElement(
    "button",
    {
      key: c,
      type: "button",
      className: "swatch" + (color === c ? " active" : ""),
      style: { background: c },
      "aria-label": "color " + c,
      onClick: () => {
        setColor(c);
        if (tool === "eraser") setTool("brush");
      }
    }
  )), /* @__PURE__ */ N.createElement("span", { className: "tool-sep", "aria-hidden": "true" }), /* @__PURE__ */ N.createElement("span", { className: "tool-label" }, "size"), ART_SIZES.map((s) => /* @__PURE__ */ N.createElement(
    "button",
    {
      key: s,
      type: "button",
      className: "size-dot" + (size === s ? " active" : ""),
      "aria-label": "brush size " + s,
      onClick: () => setSize(s)
    },
    /* @__PURE__ */ N.createElement("span", { style: { width: Math.min(s * 2.2, 18), height: Math.min(s * 2.2, 18) } })
  )), /* @__PURE__ */ N.createElement("span", { className: "tool-sep", "aria-hidden": "true" }), /* @__PURE__ */ N.createElement("span", { className: "tool-label" }, "paper"), BG_COLORS.map((c) => /* @__PURE__ */ N.createElement(
    "button",
    {
      key: c,
      type: "button",
      className: "swatch paper" + (bg === c ? " active" : ""),
      style: { background: c },
      "aria-label": "paper " + c,
      onClick: () => setBg(c)
    }
  ))), /* @__PURE__ */ N.createElement("div", { className: "tool-row" }, /* @__PURE__ */ N.createElement("button", { type: "button", className: "chip", onClick: undo, disabled: !canUndo }, "undo"), /* @__PURE__ */ N.createElement("button", { type: "button", className: "chip", onClick: clear }, "clear"), /* @__PURE__ */ N.createElement("button", { type: "button", className: "chip chip-accent", onClick: exportPng }, "export png"), /* @__PURE__ */ N.createElement("button", { type: "button", className: "chip chip-accent", onClick: share }, "share"))), /* @__PURE__ */ N.createElement("div", { className: "artboard-paper", style: { background: bg } }, /* @__PURE__ */ N.createElement(
    "canvas",
    {
      ref: canvasRef,
      className: "doodle-canvas artboard-canvas",
      onPointerDown: down,
      onPointerMove: move,
      onPointerUp: up,
      onPointerLeave: up,
      "aria-label": "drawing artboard"
    }
  )), /* @__PURE__ */ N.createElement("p", { className: "doodle-note" }, shared || "your art stays on your device unless you export or share it - nothing is uploaded anywhere."));
}
function RotCard() {
  const ref = N.useRef(null);
  N.useEffect(() => {
    const SUITS = [
      { sym: "\u2665", color: "#c1272d" },
      { sym: "\u2660", color: "#1a1a1a" },
      { sym: "\u2666", color: "#e0a62e" },
      { sym: "\u2663", color: "#4f772d" }
    ];
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let angle = 45, vel = 0, dragging = false, lastA = 0, curSuit = -1, raf = 0, cx = 0, cy = 0;
    const center = () => {
      const r = el.getBoundingClientRect();
      cx = r.left + r.width / 2;
      cy = r.top + r.height / 2;
    };
    const angOf = (e) => Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI;
    const paint = () => {
      const si = (Math.floor(angle / 360) % 4 + 4) % 4;
      if (si !== curSuit) {
        curSuit = si;
        const suit = SUITS[si];
        el.style.setProperty("--fc", suit.color);
        el.querySelectorAll(".rot-suit").forEach((n) => {
          n.textContent = suit.sym;
        });
      }
      el.style.setProperty("--rz", angle + "deg");
    };
    const tick = () => {
      if (!dragging) {
        angle += 0.35 + vel;
        vel *= 0.95;
        if (Math.abs(vel) < 1e-3) vel = 0;
      }
      paint();
      raf = requestAnimationFrame(tick);
    };
    const down = (e) => {
      dragging = true;
      center();
      lastA = angOf(e);
      vel = 0;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
      }
    };
    const move = (e) => {
      if (!dragging) return;
      const a = angOf(e);
      let d = a - lastA;
      if (d > 180) d -= 360;
      if (d < -180) d += 360;
      lastA = a;
      angle += d;
      vel = d * 0.15;
      paint();
    };
    const up = () => {
      dragging = false;
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);
  return /* @__PURE__ */ N.createElement("div", { className: "rot-card rot-card-v3", ref, style: { "--rz": "45deg", "--fc": "#c1272d", touchAction: "pan-y" }, role: "img", "aria-label": "spinning jack playing card - drag to turn" }, /* @__PURE__ */ N.createElement("div", { className: "rot-face" }, /* @__PURE__ */ N.createElement("span", { className: "rot-corner rot-tl" }, "J ", /* @__PURE__ */ N.createElement("i", { className: "rot-suit" }, "\u2665")), /* @__PURE__ */ N.createElement("span", { className: "rot-big" }, "J", /* @__PURE__ */ N.createElement("i", { className: "rot-suit" }, "\u2665")), /* @__PURE__ */ N.createElement("span", { className: "rot-word" }, "jack"), /* @__PURE__ */ N.createElement("span", { className: "rot-corner rot-br" }, "J ", /* @__PURE__ */ N.createElement("i", { className: "rot-suit" }, "\u2665"))));
}
function QuoteBand() {
  return /* @__PURE__ */ N.createElement("section", { className: "quote-band", "aria-label": "quote" }, /* @__PURE__ */ N.createElement("p", { className: "quote-line" }, /* @__PURE__ */ N.createElement("span", { className: "q-line q1" }, "but often times"), /* @__PURE__ */ N.createElement("span", { className: "q-line q2" }, "better than"), /* @__PURE__ */ N.createElement("span", { className: "q-line q3" }, "master of one")));
}
function BookShelf() {
  const open = N.useContext(aa);
  const total = ln.length;
  const [pos, setPos] = N.useState(Math.floor(total / 2));
  const drag = N.useRef(null);
  const wrap = N.useRef(null);
  const clamp = (v) => Math.max(0, Math.min(total - 1, v));
  const wrapPos = (v) => (v % total + total) % total;
  const [opened, setOpened] = N.useState(false);
  const [narrow, setNarrow] = N.useState(() => window.innerWidth < 700);
  N.useEffect(() => {
    const onR = () => setNarrow(window.innerWidth < 700);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);
  const goto = (fn) => {
    setOpened(false);
    setPos(fn);
  };
  const onDown = (e) => {
    bump();
    drag.current = { x: e.clientX, start: pos, moved: false };
    try {
      e.target.setPointerCapture(e.pointerId);
    } catch {
    }
  };
  const onMove = (e) => {
    if (!drag.current || !wrap.current) return;
    const w = wrap.current.offsetWidth;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    goto(() => clamp(drag.current.start - dx / (w * 0.22)));
  };
  const onUp = () => {
    if (!drag.current) return;
    const wasMoved = drag.current.moved;
    drag.current = null;
    goto((p) => Math.round(clamp(p)));
    return wasMoved;
  };
  const step = N.useCallback((d) => {
    bump();
    setOpened(false);
    setPos((p) => Math.round(clamp(p + d)));
  }, [total]);
  N.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);
  const idle = N.useRef(0);
  N.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (document.hidden) return;
      if (Date.now() - idle.current < 5e3) return;
      setPos((p) => {
        const nx = Math.round(p) + 1;
        setOpened(false);
        return nx >= total ? 0 : nx;
      });
    }, 3400);
    return () => clearInterval(t);
  }, [total]);
  const bump = () => {
    idle.current = Date.now();
  };
  const cur = Math.round(pos);
  return /* @__PURE__ */ N.createElement("div", { className: "shelf-wrap" }, /* @__PURE__ */ N.createElement(
    "div",
    {
      className: "shelf",
      ref: wrap,
      onPointerDown: onDown,
      onPointerMove: onMove,
      onPointerUp: onUp,
      onPointerCancel: onUp,
      onPointerEnter: bump,
      role: "region",
      "aria-label": "poster shelf - drag or use arrow keys to browse"
    },
    /* @__PURE__ */ N.createElement("div", { className: "shelf-scene" }, ln.map((it, i) => {
      const off = i - pos;
      const ab = Math.abs(off);
      if (ab > 3.4) return null;
      const spread = narrow ? 70 : 114;
      const depth = narrow ? 260 : 185;
      const tilt = narrow ? 24 : 22;
      const st = {
        transform: `translate(-50%, -50%) translateX(${off * spread}%) translateZ(${-ab * depth}px) rotateY(${-off * tilt}deg)`,
        filter: `brightness(${Math.max(0.78, 1 - ab * 0.09)})`,
        zIndex: 100 - Math.round(ab * 10),
        opacity: ab > 2.8 ? 0 : 1
      };
      return /* @__PURE__ */ N.createElement(
        "figure",
        {
          key: it.src,
          className: `shelf-book${i === cur ? " cur" : ""}`,
          style: st,
          onClick: () => {
            if (drag.current && drag.current.moved) return;
            if (i === cur) {
              bump();
              setOpened((o) => !o);
            } else goto(() => i);
          },
          "aria-label": `${it.name} - ${i + 1} of ${total}`
        },
        /* @__PURE__ */ N.createElement("div", { className: "sb-inner" }, /* @__PURE__ */ N.createElement("div", { className: "sb-page-in", "aria-hidden": !(opened && i === cur) }, /* @__PURE__ */ N.createElement("span", { className: "sb-from" }, it.from), /* @__PURE__ */ N.createElement("h4", null, it.name), /* @__PURE__ */ N.createElement("p", null, it.alt), /* @__PURE__ */ N.createElement("button", { type: "button", className: "sb-view", tabIndex: opened && i === cur ? 0 : -1, onClick: (e) => {
          e.stopPropagation();
          bump();
          open(ln.map((x) => ({ src: x.src, alt: x.alt })), i, "the gallery");
        } }, "view full poster")), /* @__PURE__ */ N.createElement("div", { className: `sb-cover${opened && i === cur ? " open" : ""}` }, /* @__PURE__ */ N.createElement("div", { className: "sb-spine", "aria-hidden": "true" }, /* @__PURE__ */ N.createElement("span", null, it.name)), /* @__PURE__ */ N.createElement("img", { className: "sb-front", src: it.src, alt: it.alt, draggable: "false", loading: "lazy" }), /* @__PURE__ */ N.createElement("div", { className: "sb-cover-back", "aria-hidden": "true" }, /* @__PURE__ */ N.createElement("span", null, it.name))), /* @__PURE__ */ N.createElement("div", { className: "sb-pages", "aria-hidden": "true" }))
      );
    })),
    /* @__PURE__ */ N.createElement("div", { className: "shelf-plank", "aria-hidden": "true" })
  ), /* @__PURE__ */ N.createElement("div", { className: "shelf-bar" }, /* @__PURE__ */ N.createElement("button", { type: "button", className: "shelf-nav", onClick: () => step(-1), disabled: cur <= 0, "aria-label": "previous poster" }, "\u2190"), /* @__PURE__ */ N.createElement("p", { className: "shelf-count" }, String(cur + 1).padStart(2, "0"), " / ", String(total).padStart(2, "0")), /* @__PURE__ */ N.createElement("button", { type: "button", className: "shelf-nav", onClick: () => step(1), disabled: cur >= total - 1, "aria-label": "next poster" }, "\u2192")));
}
function AboutPage() {
  return /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(SectionC, { id: "about", title: "about me", sticker: "that's me" }, /* @__PURE__ */ N.createElement("div", { className: "about-grid" }, /* @__PURE__ */ N.createElement("div", { className: "about-text" }, /* @__PURE__ */ N.createElement("p", { className: "body-copy hero-bio" }, "Posters, brands, interfaces \u0914\u0930 edits - \u0915\u093E\u092E \u092C\u094B\u0932\u0924\u093E \u0939\u0948."), /* @__PURE__ */ N.createElement("p", { className: "body-copy" }, "Designer \u0926\u093F\u0932 \u0938\u0947, engineer \u092C\u0928 \u0930\u0939\u093E \u0939\u0942\u0901. I study at OUTR, Bhubaneswar and spend the better half of college designing for it - lead designer at E-Cell OUTR, Letterman and Cetadel. Posters, brands, interfaces, edits, the occasional t-shirt. \u092C\u093E\u0915\u0940 \u0915\u093E\u092E gallery \u092E\u0947\u0902 \u0939\u0948."), /* @__PURE__ */ N.createElement("div", { className: "fact-grid" }, /* @__PURE__ */ N.createElement("div", { className: "fact-block" }, /* @__PURE__ */ N.createElement("h3", null, "achievements"), /* @__PURE__ */ N.createElement("ul", null, /* @__PURE__ */ N.createElement("li", null, "Successfully led the entire branding of two editions of E-Summit"), /* @__PURE__ */ N.createElement("li", null, "Helped lead and create three editions of Letterman, OUTR's own magazine"), /* @__PURE__ */ N.createElement("li", null, "Selected for the top-10 DJX Lab residency programme, a design-oriented competition"), /* @__PURE__ */ N.createElement("li", null, "2nd prize, poster making competition by IIC IIT Bombay"))))), /* @__PURE__ */ N.createElement("div", { className: "about-side" }, /* @__PURE__ */ N.createElement("div", { className: "about-frame" }, /* @__PURE__ */ N.createElement("img", { className: "cutout", src: _v, alt: "Portrait of Swayams" }), /* @__PURE__ */ N.createElement("span", { className: "sticker about-sticker" }, "it's giving designer"))))), /* @__PURE__ */ N.createElement(SectionC, { id: "on-repeat", title: "on repeat", sticker: "my favorite songs" }, /* @__PURE__ */ N.createElement(OnRepeat, null)), /* @__PURE__ */ N.createElement(GreetBand, null));
}
function SectionF({ id: e, title: t, sticker: n, flat: fl, children: r }) {
  return /* @__PURE__ */ N.createElement("section", { className: "sec", id: e }, /* @__PURE__ */ N.createElement("div", { className: "sec-head" }, /* @__PURE__ */ N.createElement("h2", { className: fl ? "flat-h" : void 0 }, t), n && /* @__PURE__ */ N.createElement("span", { className: "sticker" }, n)), r);
}
function BrandingPage() {
  const folders = sa.filter((f) => f.id !== "posters");
  return /* @__PURE__ */ N.createElement(SectionC, { id: "branding", title: "branding" }, /* @__PURE__ */ N.createElement("div", { className: "cat-grid" }, folders.map((f, i) => /* @__PURE__ */ N.createElement(LinkC, { key: f.id, to: `/${f.id}`, className: `cat-card tilt-${i % 5}` }, /* @__PURE__ */ N.createElement("img", { src: f.items[f.cover || 0].src, alt: f.items[0].alt, loading: "lazy" }), /* @__PURE__ */ N.createElement("span", { className: "cat-name" }, f.title.toLowerCase()), /* @__PURE__ */ N.createElement("span", { className: "cat-count" }, f.items.length, " designs")))));
}
function HomeV5() {
  const posters = sa.find((f) => f.id === "posters");
  const letterman = sa.find((f) => f.id === "letterman-25");
  const brandCount = sa.filter((f) => f.id !== "posters").length;
  return /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("header", { className: "hero hero-v5" }, /* @__PURE__ */ N.createElement("h1", { className: "hero-big" }, /* @__PURE__ */ N.createElement("span", { className: "hb-hi" }, "\u092E\u0948\u0902"), /* @__PURE__ */ N.createElement("span", { className: "hb-name" }, "SWAYAMS")), /* @__PURE__ */ N.createElement("p", { className: "hero-tag" }, "i'm a jack of all trades, master of none"), /* @__PURE__ */ N.createElement(RotCard, null)), /* @__PURE__ */ N.createElement(QuoteBand, null), /* @__PURE__ */ N.createElement(SectionF, { id: "work", title: /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("span", { className: "hdev" }, "\u092E\u0947\u0930\u093E"), " WORK:"), sticker: "pick a category", flat: true }, /* @__PURE__ */ N.createElement("div", { className: "cat-grid" }, /* @__PURE__ */ N.createElement(LinkC, { to: "/uiux", className: "cat-card tilt-1" }, /* @__PURE__ */ N.createElement("img", { src: Pd[1].src, alt: "Moneo UI screens", loading: "lazy" }), /* @__PURE__ */ N.createElement("span", { className: "cat-name" }, "ui/ux")), /* @__PURE__ */ N.createElement(LinkC, { to: "/posters", className: "cat-card tilt-2" }, /* @__PURE__ */ N.createElement("img", { src: posters.items[posters.cover || 0].src, alt: posters.items[0].alt, loading: "lazy" }), /* @__PURE__ */ N.createElement("span", { className: "cat-name" }, "posters")), /* @__PURE__ */ N.createElement(LinkC, { to: "/branding", className: "cat-card tilt-3" }, /* @__PURE__ */ N.createElement("img", { src: letterman.items[letterman.cover || 0].src, alt: letterman.items[0].alt, loading: "lazy" }), /* @__PURE__ */ N.createElement("span", { className: "cat-name" }, "branding")), /* @__PURE__ */ N.createElement(LinkC, { to: "/video", className: "cat-card tilt-4" }, /* @__PURE__ */ N.createElement("img", { src: Ul[0], alt: "E-Summit reel still", loading: "lazy" }), /* @__PURE__ */ N.createElement("span", { className: "cat-name" }, "video editing")))), /* @__PURE__ */ N.createElement(SectionC, { id: "gallery", title: "the gallery", sticker: "walk the wall" }, /* @__PURE__ */ N.createElement("p", { className: "body-copy" }, "\u0905\u092A\u0928\u0940 favourite \u091A\u0940\u091C\u093C\u0947\u0902, \u090F\u0915 \u0932\u0902\u092C\u0940 \u0926\u0940\u0935\u093E\u0930 \u092A\u0947. drag to walk the wall - click a frame to step closer."), /* @__PURE__ */ N.createElement(BookShelf, null)), /* @__PURE__ */ N.createElement(GreetBand, null));
}
const CIcon = {
  phone: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })),
  mail: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }), /* @__PURE__ */ N.createElement("path", { d: "M3 7l9 6 9-6" })),
  instagram: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "5" }), /* @__PURE__ */ N.createElement("circle", { cx: "12", cy: "12", r: "4.2" }), /* @__PURE__ */ N.createElement("circle", { cx: "17.6", cy: "6.4", r: "1.1", fill: "currentColor", stroke: "none" })),
  linkedin: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "currentColor" }, /* @__PURE__ */ N.createElement("path", { d: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" })),
  github: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })),
  file: /* @__PURE__ */ N.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ N.createElement("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), /* @__PURE__ */ N.createElement("path", { d: "M14 2v6h6" }), /* @__PURE__ */ N.createElement("path", { d: "M16 13H8" }), /* @__PURE__ */ N.createElement("path", { d: "M16 17H8" }))
};
function ContactV5() {
  return /* @__PURE__ */ N.createElement(SectionC, { id: "contact", title: "say hi", sticker: "contact" }, /* @__PURE__ */ N.createElement("div", { className: "contact-grid" }, /* @__PURE__ */ N.createElement("a", { className: "chip chip-link contact-chip", href: "tel:+917681001527" }, CIcon.phone, /* @__PURE__ */ N.createElement("span", null, "+91 76810 01527")), /* @__PURE__ */ N.createElement("a", { className: "chip chip-link contact-chip", href: "mailto:swayamsdeep444@gmail.com" }, CIcon.mail, /* @__PURE__ */ N.createElement("span", null, "swayamsdeep444@gmail.com")), /* @__PURE__ */ N.createElement("a", { className: "chip chip-link contact-chip", href: "https://www.instagram.com/auti__sm", target: "_blank", rel: "noreferrer" }, CIcon.instagram, /* @__PURE__ */ N.createElement("span", null, "instagram - @auti__sm")), /* @__PURE__ */ N.createElement("a", { className: "chip chip-link contact-chip", href: "https://www.linkedin.com/in/swayamsmohanty042004", target: "_blank", rel: "noreferrer" }, CIcon.linkedin, /* @__PURE__ */ N.createElement("span", null, "linkedin - swayamsmohanty042004")), /* @__PURE__ */ N.createElement("a", { className: "chip chip-link contact-chip", href: "https://github.com/swayamsgit", target: "_blank", rel: "noreferrer" }, CIcon.github, /* @__PURE__ */ N.createElement("span", null, "github - swayamsgit")), /* @__PURE__ */ N.createElement("a", { className: "chip chip-link contact-chip", href: "/assets/swayams-mohanty-resume.pdf", download: "swayams-mohanty-resume.pdf" }, CIcon.file, /* @__PURE__ */ N.createElement("span", null, "resume - pdf"))));
}
function WorkPageV5() {
  const open = N.useContext(aa);
  const posters = sa.find((f) => f.id === "posters");
  const brandFolders = sa.filter((f) => f.id !== "posters");
  return /* @__PURE__ */ N.createElement(SectionF, { id: "uiux", title: /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("span", { className: "hdev" }, "\u092E\u0947\u0930\u093E"), " WORK"), flat: true }, /* @__PURE__ */ N.createElement("div", { className: "proj-grid" }, /* @__PURE__ */ N.createElement("article", { className: "proj-card tilt-1" }, /* @__PURE__ */ N.createElement("h3", null, "Moneo"), /* @__PURE__ */ N.createElement("p", { className: "proj-sub" }, "Finance app UI, designed in Figma."), /* @__PURE__ */ N.createElement(Rd, { items: Pd, title: "Moneo" }), /* @__PURE__ */ N.createElement("p", { className: "proj-links" }, /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://www.figma.com/design/XTq0YNNEhslGccjCsFW4zD/Swayams--Portfolio?node-id=3-4042&p=f&t=JPlvuSCvQaJ19fpJ-0", target: "_blank", rel: "noreferrer" }, "Figma file"))), /* @__PURE__ */ N.createElement("article", { className: "proj-card tilt-3" }, /* @__PURE__ */ N.createElement("h3", null, "Desypher"), /* @__PURE__ */ N.createElement("p", { className: "proj-sub" }, "Website design, live."), /* @__PURE__ */ N.createElement("button", { type: "button", className: "proj-shot", onClick: () => open([{ src: Du, alt: "Desypher landing page", name: "Desypher" }], 0, "Desypher") }, /* @__PURE__ */ N.createElement("img", { src: Du, alt: "Desypher landing page", loading: "lazy" })), /* @__PURE__ */ N.createElement("p", { className: "proj-links" }, /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://desypher.pages.dev/", target: "_blank", rel: "noreferrer" }, "desypher.pages.dev"), " \xB7 ", /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://github.com/swayamsgit/deSypher", target: "_blank", rel: "noreferrer" }, "GitHub repo"), " \xB7 ", /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://drive.google.com/file/d/1V7O10hUzhLmHSrKut1-nL3NgGkn2IJQo/view", target: "_blank", rel: "noreferrer" }, "Demo video"))), /* @__PURE__ */ N.createElement("article", { className: "proj-card tilt-4" }, /* @__PURE__ */ N.createElement("h3", null, "Aura - Companion App"), /* @__PURE__ */ N.createElement("p", { className: "proj-sub" }, "Built at the Meta Global AI Developer Hackathon, October 2026."), /* @__PURE__ */ N.createElement("button", { type: "button", className: "proj-shot", onClick: () => open([{ src: Bu, alt: "Aura demo still", name: "Aura" }], 0, "Aura") }, /* @__PURE__ */ N.createElement("img", { src: Bu, alt: "Aura demo still", loading: "lazy" })), /* @__PURE__ */ N.createElement("p", { className: "proj-links" }, /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://aura-companion-5hf.pages.dev", target: "_blank", rel: "noreferrer" }, "aura-companion-5hf.pages.dev"), " \xB7 ", /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://github.com/swayamsgit/aura-context-companion", target: "_blank", rel: "noreferrer" }, "GitHub repo"), " \xB7 ", /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://youtu.be/Y4b9QXBKYXU", target: "_blank", rel: "noreferrer" }, "Demo video"))), /* @__PURE__ */ N.createElement("article", { className: "proj-card tilt-1" }, /* @__PURE__ */ N.createElement("h3", null, "1voice"), /* @__PURE__ */ N.createElement("p", { className: "proj-sub" }, "Voice-first seller app - submitted at the PayPal AI Hackathon, November 2026."), /* @__PURE__ */ N.createElement("button", { type: "button", className: "proj-shot", onClick: () => open([{ src: "/assets/1voice.png", alt: "1voice app - voice-first seller dashboard", name: "1voice" }], 0, "1voice") }, /* @__PURE__ */ N.createElement("img", { src: "/assets/1voice.png", alt: "1voice app - voice-first seller dashboard", loading: "lazy" })), /* @__PURE__ */ N.createElement("p", { className: "proj-links" }, /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://onevoice-v2.onrender.com", target: "_blank", rel: "noreferrer" }, "Live demo"), " \xB7 ", /* @__PURE__ */ N.createElement("a", { className: "text-link", href: "https://github.com/swayamsgit/1voice", target: "_blank", rel: "noreferrer" }, "GitHub repo")))), /* @__PURE__ */ N.createElement("div", { className: "cat-grid work-folders" }, /* @__PURE__ */ N.createElement(LinkC, { to: "/posters", className: "cat-card tilt-2" }, /* @__PURE__ */ N.createElement("img", { src: posters.items[posters.cover || 0].src, alt: posters.items[0].alt, loading: "lazy" }), /* @__PURE__ */ N.createElement("span", { className: "cat-name" }, "posters"), /* @__PURE__ */ N.createElement("span", { className: "cat-count" }, posters.items.length, " designs")), brandFolders.map((f, i) => /* @__PURE__ */ N.createElement(LinkC, { key: f.id, to: `/${f.id}`, className: `cat-card tilt-${(i + 3) % 5}` }, /* @__PURE__ */ N.createElement("img", { src: f.items[f.cover || 0].src, alt: f.items[0].alt, loading: "lazy" }), /* @__PURE__ */ N.createElement("span", { className: "cat-name" }, f.title.toLowerCase()), /* @__PURE__ */ N.createElement("span", { className: "cat-count" }, f.items.length, " designs"))), /* @__PURE__ */ N.createElement(LinkC, { to: "/video", className: "cat-card tilt-4" }, /* @__PURE__ */ N.createElement("img", { src: Ul[0], alt: "E-Summit reel still", loading: "lazy" }), /* @__PURE__ */ N.createElement("span", { className: "cat-name" }, "video editing"), /* @__PURE__ */ N.createElement("span", { className: "cat-count" }, "3 reels"))));
}
const ON_REPEAT = [
  { id: "65krtHkaYLPr0mEbjL61UP", title: "Kiss of Life", artist: "Sade" },
  { id: "4IadxL6BUymXlh8RCJJu7T", title: "Too Sweet", artist: "Hozier" },
  { id: "4EcYqXGZ1MOl7gBLcRO9Ya", title: "still feel.", artist: "half\u2022alive" },
  { id: "5iDaEbPX8Lq2evx3ZpAgQU", title: "A Little Messed Up", artist: "june" },
  { id: "0Qr61NXlyAeQaADO5xn3rI", title: "Cry", artist: "Cigarettes After Sex" },
  { id: "3hRV0jL3vUpRrcy398teAU", title: "The Night We Met", artist: "Lord Huron" },
  { id: "3QaPy1KgI7nu9FJEQUgn6h", title: "WILDFLOWER", artist: "Billie Eilish" },
  { id: "2I0MIQhICYnKHvaxUHYH49", title: "Shauq", artist: "Amit Trivedi, Varun Grover, Shahid Mallya, Sireesha Bhagavatula, Swanand Kirkire" },
  { id: "2mlNgAeIBnL78ZriXgrRHz", title: "Glimpse of Us", artist: "Joji" },
  { id: "1czB1wqK3Xyv2S56BrcKeE", title: "Loser", artist: "Tame Impala" },
  { id: "2OYfo8xz9nCqXVXqibLq2G", title: "Flaws", artist: "Vancouver Sleep Clinic" },
  { id: "2ajUl8lBLAXOXNpG4NEPMz", title: "Sway", artist: "Michael Bubl\xE9" },
  { id: "5ZDKPFRZC6QlJpf8bCIXTs", title: "The Abyss (feat. Lana Del Rey)", artist: "The Weeknd, Lana Del Rey" },
  { id: "5TXDeTFVRVY7Cvt0Dw4vWW", title: "Revenge", artist: "XXXTENTACION" }
];
function OnRepeat() {
  const [cur, setCur] = N.useState(0);
  const track = ON_REPEAT[cur];
  return /* @__PURE__ */ N.createElement("div", { className: "on-repeat" }, /* @__PURE__ */ N.createElement("div", { className: "or-player" }, /* @__PURE__ */ N.createElement(
    "iframe",
    {
      key: track.id,
      src: `https://open.spotify.com/embed/track/${track.id}?utm_source=generator`,
      width: "100%",
      height: "152",
      frameBorder: "0",
      allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      loading: "lazy",
      title: `Spotify player - ${track.title} by ${track.artist}`
    }
  )), /* @__PURE__ */ N.createElement("ol", { className: "or-list" }, ON_REPEAT.map((t, i) => /* @__PURE__ */ N.createElement("li", { key: t.id }, /* @__PURE__ */ N.createElement(
    "button",
    {
      type: "button",
      className: `or-track${i === cur ? " cur" : ""}`,
      onClick: () => setCur(i),
      "aria-label": `play ${t.title} by ${t.artist}`
    },
    /* @__PURE__ */ N.createElement("span", { className: "or-num" }, String(i + 1).padStart(2, "0")),
    /* @__PURE__ */ N.createElement("span", { className: "or-name" }, t.title),
    /* @__PURE__ */ N.createElement("span", { className: "or-artist" }, t.artist),
    /* @__PURE__ */ N.createElement("span", { className: "or-play", "aria-hidden": "true" }, i === cur ? "\u25B6" : "\xB7")
  )))));
}

function ay() {
    const [e, t] = N.useState(null), [n, r] = N.useState(() => sessionStorage.getItem("sw-intro") === "1"), l = (i, o, s) => t({
        photos: i.map(a => ({
            src: a.src,
            alt: a.alt
        })),
        start: o,
        title: s
    });
    return m.jsxs(aa.Provider, {
        value: l,
        children: [m.jsxs("div", {
            className: "page-bg",
            children: [m.jsx(ty, {}), m.jsx(sy, {}), m.jsx(SideRail, {}), m.jsxs("div", {
                className: "poster",
                children: [m.jsxs("nav", {
                    className: "site-nav",
                    "aria-label": "Portfolio sections",
                    children: [m.jsx(Ot, {
                        to: "/",
                        className: "wordmark wordmark-mark",
                        "aria-label": "swayams mohanty - home",
                        children: m.jsx("img", {
                            className: "wordmark-logo",
                            src: "/assets/name-mark-transparent.png",
                            alt: "swayams mohanty"
                        })
                    }), m.jsx(Xv, {})]
                }), m.jsx("main", {
                    children: m.jsxs(Vg, {
                        children: [m.jsx(an, {
                            path: "/",
                            element: m.jsx(HomeV5, {})
                        }), m.jsx(an, {
                            path: "/uiux",
                            element: m.jsx(WorkPageV5, {})
                        }), m.jsx(an, {
                            path: "/branding",
                            element: m.jsx(BrandingPage, {})
                        }), sa.map(i => m.jsx(an, {
                            path: `/${i.id}`,
                            element: m.jsx(vt, {
                                id: i.id,
                                title: i.title,
                                sticker: i.sticker,
                                children: m.jsx(Rd, {
                                    items: i.items,
                                    title: i.title
                                })
                            })
                        }, i.id)), m.jsx(an, {
                            path: "/video",
                            element: m.jsx(iy, {})
                        }), m.jsx(an, {
                            path: "/doodle",
                            element: m.jsx(vt, {
                                id: "doodle",
                                title: "make your own art",
                                sticker: "your turn",
                                children: [m.jsx("p", {
                                    className: "body-copy",
                                    children: "i had my fun - now you draw. a full artboard: brushes, undo, export and share."
                                }), m.jsx(Artboard, {})]
                            })
                        }), m.jsx(an, {
                            path: "/play",
                            element: m.jsx(vt, {
                                id: "chess",
                                title: "play chess with me",
                                sticker: "1. e4",
                                children: m.jsx(Yv, {})
                            })
                        }), m.jsx(an, {
                            path: "/contact",
                            element: m.jsx(ContactV5, {})
                        }), m.jsx(an, {
                            path: "/about",
                            element: m.jsx(AboutPage, {})
                        }), m.jsx(an, {
                            path: "*",
                            element: m.jsx(HomeV5, {})
                        })]
                    })
                }), m.jsx("footer", {
                    className: "site-footer",
                    children: m.jsx(Td, {})
                })]
            })]
        }), e && m.jsx(ny, {
            viewer: e,
            onClose: () => t(null)
        }), !n && m.jsx(ry, {
            onDone: () => {
                sessionStorage.setItem("sw-intro", "1"), r(!0)
            }
        })]
    })
}
pd(document.getElementById("root")).render(m.jsx(uc.StrictMode, {
    children: m.jsx(Jg, {
        children: m.jsx(ay, {})
    })
}));