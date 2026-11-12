/* @ds-bundle: {"format":4,"namespace":"TECNODesignSystem_896f46","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"PowerLine","sourcePath":"components/core/PowerLine.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7e30f1006739","components/core/Button.jsx":"b72c4edc4769","components/core/Card.jsx":"b4e0832a444b","components/core/Input.jsx":"a05244bcd863","components/core/PowerLine.jsx":"5f50348d2cb1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TECNODesignSystem_896f46 = window.TECNODesignSystem_896f46 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  kind = 'nuevo',
  tone = 'light',
  children
}) {
  const dark = tone === 'dark';
  const ink = dark ? '#fff' : '#0A0A0A',
    inv = dark ? '#0A0A0A' : '#fff';
  const m = {
    nuevo: {
      background: ink,
      color: inv,
      border: '1px solid ' + ink
    },
    usado: {
      border: '1px solid ' + ink,
      color: ink
    },
    canje: {
      border: '1px dashed ' + ink,
      color: ink
    },
    sinstock: {
      border: '1px solid #8E8E93',
      color: '#8E8E93'
    }
  };
  const L = {
    nuevo: 'Nuevo',
    usado: 'Usado seleccionado',
    canje: 'Plan Canje',
    sinstock: 'Sin stock'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 999,
      ...m[kind]
    }
  }, children || L[kind]);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  tone = 'dark',
  children,
  style,
  ...p
}) {
  const [h, setH] = React.useState(false);
  const dark = tone === 'dark';
  const fg = dark ? '#0A0A0A' : '#FFFFFF',
    bg = dark ? '#FFFFFF' : '#0A0A0A';
  let s = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
    borderRadius: 'var(--r-pill)',
    padding: '12px 24px',
    transition: 'all var(--dur) var(--ease)',
    border: '1.5px solid ' + bg
  };
  if (variant === 'primary') s = {
    ...s,
    background: h ? 'transparent' : bg,
    color: h ? bg : fg
  };else if (variant === 'secondary') s = {
    ...s,
    background: h ? bg : 'transparent',
    color: h ? fg : bg
  };else s = {
    ...s,
    background: 'none',
    border: 'none',
    padding: '4px 0',
    color: bg,
    textDecoration: 'underline',
    textUnderlineOffset: 4,
    opacity: h ? .7 : 1
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...s,
      ...style
    }
  }, p), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  tone = 'light',
  children,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-card)',
      padding: 24,
      background: dark ? '#1C1C1E' : '#F5F5F7',
      color: dark ? '#fff' : '#0A0A0A',
      border: '1px solid ' + (dark ? '#3A3A3C' : '#E5E5EA'),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  tone = 'light',
  style,
  ...p
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: dark ? '#fff' : '#0A0A0A'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, p, {
    style: {
      font: 'inherit',
      padding: '12px 16px',
      borderRadius: 'var(--r-input)',
      border: '1px solid ' + (dark ? '#3A3A3C' : '#E5E5EA'),
      background: dark ? '#1C1C1E' : '#fff',
      color: 'inherit',
      outline: 'none',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/PowerLine.jsx
try { (() => {
function PowerLine({
  tone = 'light',
  as = 'label',
  children
}) {
  const ink = tone === 'dark' ? '#fff' : '#0A0A0A';
  const t = as === 'title';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'stretch',
      color: ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      borderRadius: 4,
      background: ink,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: t ? 't-title' : 't-label',
    style: t ? {
      fontSize: 32
    } : undefined
  }, children));
}
Object.assign(__ds_scope, { PowerLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PowerLine.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PowerLine = __ds_scope.PowerLine;

})();
