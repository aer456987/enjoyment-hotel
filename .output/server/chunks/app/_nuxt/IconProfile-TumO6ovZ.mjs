import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "none",
    height: "24",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M4.27148 18.346C4.27148 18.346 6.50048 15.5 12.0005 15.5C17.5005 15.5 19.7305 18.346 19.7305 18.346M12.0005 12C12.7961 12 13.5592 11.6839 14.1218 11.1213C14.6844 10.5587 15.0005 9.79565 15.0005 9C15.0005 8.20435 14.6844 7.44129 14.1218 6.87868C13.5592 6.31607 12.7961 6 12.0005 6C11.2048 6 10.4418 6.31607 9.87916 6.87868C9.31655 7.44129 9.00048 8.20435 9.00048 9C9.00048 9.79565 9.31655 10.5587 9.87916 11.1213C10.4418 11.6839 11.2048 12 12.0005 12V12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/IconProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { IconProfile as default };
//# sourceMappingURL=IconProfile-TumO6ovZ.mjs.map
