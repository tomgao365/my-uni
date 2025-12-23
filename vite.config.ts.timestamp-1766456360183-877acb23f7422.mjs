// vite.config.ts
import process from "node:process";
import Uni from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/@uni-helper+plugin-uni@0.1.0_@dcloudio+vite-plugin-uni@3.0.0-4080520251106001_@vueuse+core@11_3fndud3pmwimc2rwfd3qrpulzu/node_modules/@uni-helper/plugin-uni/src/index.js";
import UniHelperComponents from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/@uni-helper+vite-plugin-uni-components@0.2.3_rollup@4.53.2/node_modules/@uni-helper/vite-plugin-uni-components/dist/index.mjs";
import { WotResolver } from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/@uni-helper+vite-plugin-uni-components@0.2.3_rollup@4.53.2/node_modules/@uni-helper/vite-plugin-uni-components/dist/resolvers.mjs";
import UniHelperLayouts from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/@uni-helper+vite-plugin-uni-layouts@0.1.11_rollup@4.53.2/node_modules/@uni-helper/vite-plugin-uni-layouts/dist/index.mjs";
import UniHelperManifest from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/@uni-helper+vite-plugin-uni-manifest@0.2.11_vite@5.2.8_@types+node@20.19.25_sass@1.78.0_terser@5.31.6_/node_modules/@uni-helper/vite-plugin-uni-manifest/dist/index.mjs";
import UniHelperPages from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/@uni-helper+vite-plugin-uni-pages@0.3.22_vite@5.2.8_@types+node@20.19.25_sass@1.78.0_terser@5.31.6_/node_modules/@uni-helper/vite-plugin-uni-pages/dist/index.mjs";
import Optimization from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/@uni-ku+bundle-optimizer@1.3.16_@vueuse+core@11.0.3_vue@3.4.38_typescript@5.5.4___postcss@8.5_5zdlgwv7bzsilk3w3hgnrqvoey/node_modules/@uni-ku/bundle-optimizer/dist/index.mjs";
import UniKuRoot from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/@uni-ku+root@1.4.1_vite@5.2.8_@types+node@20.19.25_sass@1.78.0_terser@5.31.6_/node_modules/@uni-ku/root/dist/index.mjs";
import { UniEchartsResolver } from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/uni-echarts@2.2.5_echarts@6.0.0_vue@3.4.38_typescript@5.5.4_/node_modules/uni-echarts/dist-resolver/index.mjs";
import { UniEcharts } from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/uni-echarts@2.2.5_echarts@6.0.0_vue@3.4.38_typescript@5.5.4_/node_modules/uni-echarts/dist-vite/index.mjs";
import UnoCSS from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/unocss@66.0.0_postcss@8.5.6_vite@5.2.8_@types+node@20.19.25_sass@1.78.0_terser@5.31.6__vue@3.4.38_typescript@5.5.4_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@11.0.3_vue@3.4.38_typescript@5.5.4___rollup@4.53.2/node_modules/unplugin-auto-import/dist/vite.js";
import { defineConfig } from "file:///Users/xqk/FE/my-uni/node_modules/.pnpm/vite@5.2.8_@types+node@20.19.25_sass@1.78.0_terser@5.31.6/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  base: "./",
  optimizeDeps: {
    exclude: process.env.NODE_ENV === "development" ? ["wot-design-uni", "uni-echarts", "@my-uni/router"] : []
  },
  plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-manifest
    UniHelperManifest(),
    // https://github.com/uni-helper/vite-plugin-uni-pages
    UniHelperPages({
      dts: "src/uni-pages.d.ts",
      subPackages: [
        "src/subPages",
        "src/subEcharts",
        "src/subAsyncEcharts"
      ],
      /**
       * 排除的页面，相对于 dir 和 subPackages
       * @default []
       */
      exclude: ["**/components/**/*.*"]
    }),
    // https://github.com/uni-helper/vite-plugin-uni-layouts
    UniHelperLayouts(),
    // https://github.com/uni-helper/vite-plugin-uni-components
    UniHelperComponents({
      resolvers: [WotResolver(), UniEchartsResolver()],
      dts: "src/components.d.ts",
      dirs: ["src/components", "src/business"],
      directoryAsNamespace: true
    }),
    // https://github.com/uni-ku/root
    UniKuRoot(),
    // https://uni-echarts.xiaohe.ink
    UniEcharts(),
    // https://uni-helper.cn/plugin-uni
    Uni(),
    // https://github.com/uni-ku/bundle-optimizer
    Optimization({
      logger: false
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "@vueuse/core", "pinia", "uni-app", {
        from: "wot-design-uni",
        imports: ["useToast", "useMessage", "useNotify", "CommonUtil"]
      }, {
        from: "@my-uni/router",
        imports: ["createRouter", "useRouter", "useRoute"]
      }, {
        from: "alova/client",
        imports: ["usePagination", "useRequest"]
      }],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store", "src/utils", "src/api"],
      vueTemplate: true
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveHFrL0ZFL215LXVuaVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3hxay9GRS9teS11bmkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3hxay9GRS9teS11bmkvdml0ZS5jb25maWcudHNcIjsvKlxuICogQEF1dGhvcjogd2Vpc2hlbmdcbiAqIEBEYXRlOiAyMDI1LTEyLTIyIDE0OjE5OjEyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDI1LTEyLTIyIDIwOjEzOjA2XG4gKiBATGFzdEVkaXRvcnM6IHdlaXNoZW5nXG4gKiBARGVzY3JpcHRpb246XG4gKiBARmlsZVBhdGg6IC9teS11bmkvdml0ZS5jb25maWcudHNcbiAqIFx1OEJCMFx1NUY5N1x1NkNFOFx1OTFDQVxuICovXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXG5pbXBvcnQgVW5pIGZyb20gJ0B1bmktaGVscGVyL3BsdWdpbi11bmknXG5pbXBvcnQgVW5pSGVscGVyQ29tcG9uZW50cyBmcm9tICdAdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktY29tcG9uZW50cydcbmltcG9ydCB7IFdvdFJlc29sdmVyIH0gZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IFVuaUhlbHBlckxheW91dHMgZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLWxheW91dHMnXG5pbXBvcnQgVW5pSGVscGVyTWFuaWZlc3QgZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLW1hbmlmZXN0J1xuaW1wb3J0IFVuaUhlbHBlclBhZ2VzIGZyb20gJ0B1bmktaGVscGVyL3ZpdGUtcGx1Z2luLXVuaS1wYWdlcydcbmltcG9ydCBPcHRpbWl6YXRpb24gZnJvbSAnQHVuaS1rdS9idW5kbGUtb3B0aW1pemVyJ1xuaW1wb3J0IFVuaUt1Um9vdCBmcm9tICdAdW5pLWt1L3Jvb3QnXG5pbXBvcnQgeyBVbmlFY2hhcnRzUmVzb2x2ZXIgfSBmcm9tICd1bmktZWNoYXJ0cy9yZXNvbHZlcidcbmltcG9ydCB7IFVuaUVjaGFydHMgfSBmcm9tICd1bmktZWNoYXJ0cy92aXRlJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcuLycsXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gWyd3b3QtZGVzaWduLXVuaScsICd1bmktZWNoYXJ0cycsICdAbXktdW5pL3JvdXRlciddIDogW10sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbWFuaWZlc3RcbiAgICBVbmlIZWxwZXJNYW5pZmVzdCgpLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bmktaGVscGVyL3ZpdGUtcGx1Z2luLXVuaS1wYWdlc1xuICAgIFVuaUhlbHBlclBhZ2VzKHtcbiAgICAgIGR0czogJ3NyYy91bmktcGFnZXMuZC50cycsXG4gICAgICBzdWJQYWNrYWdlczogW1xuICAgICAgICAnc3JjL3N1YlBhZ2VzJyxcbiAgICAgICAgJ3NyYy9zdWJFY2hhcnRzJyxcbiAgICAgICAgJ3NyYy9zdWJBc3luY0VjaGFydHMnLFxuICAgICAgXSxcbiAgICAgIC8qKlxuICAgICAgICogXHU2MzkyXHU5NjY0XHU3Njg0XHU5ODc1XHU5NzYyXHVGRjBDXHU3NkY4XHU1QkY5XHU0RThFIGRpciBcdTU0OEMgc3ViUGFja2FnZXNcbiAgICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICAgKi9cbiAgICAgIGV4Y2x1ZGU6IFsnKiovY29tcG9uZW50cy8qKi8qLionXSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbGF5b3V0c1xuICAgIFVuaUhlbHBlckxheW91dHMoKSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktY29tcG9uZW50c1xuICAgIFVuaUhlbHBlckNvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbV290UmVzb2x2ZXIoKSwgVW5pRWNoYXJ0c1Jlc29sdmVyKCldLFxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJywgJ3NyYy9idXNpbmVzcyddLFxuICAgICAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IHRydWUsXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3VuaS1rdS9yb290XG4gICAgVW5pS3VSb290KCksXG4gICAgLy8gaHR0cHM6Ly91bmktZWNoYXJ0cy54aWFvaGUuaW5rXG4gICAgVW5pRWNoYXJ0cygpLFxuICAgIC8vIGh0dHBzOi8vdW5pLWhlbHBlci5jbi9wbHVnaW4tdW5pXG4gICAgVW5pKCksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3VuaS1rdS9idW5kbGUtb3B0aW1pemVyXG4gICAgT3B0aW1pemF0aW9uKHtcbiAgICAgIGxvZ2dlcjogZmFsc2UsXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICdAdnVldXNlL2NvcmUnLCAncGluaWEnLCAndW5pLWFwcCcsIHtcbiAgICAgICAgZnJvbTogJ3dvdC1kZXNpZ24tdW5pJyxcbiAgICAgICAgaW1wb3J0czogWyd1c2VUb2FzdCcsICd1c2VNZXNzYWdlJywgJ3VzZU5vdGlmeScsICdDb21tb25VdGlsJ10sXG4gICAgICB9LCB7XG4gICAgICAgIGZyb206ICdAbXktdW5pL3JvdXRlcicsXG4gICAgICAgIGltcG9ydHM6IFsnY3JlYXRlUm91dGVyJywgJ3VzZVJvdXRlcicsICd1c2VSb3V0ZSddLFxuICAgICAgfSwge1xuICAgICAgICBmcm9tOiAnYWxvdmEvY2xpZW50JyxcbiAgICAgICAgaW1wb3J0czogWyd1c2VQYWdpbmF0aW9uJywgJ3VzZVJlcXVlc3QnXSxcbiAgICAgIH1dLFxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvc2FibGVzJywgJ3NyYy9zdG9yZScsICdzcmMvdXRpbHMnLCAnc3JjL2FwaSddLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3Vub2Nzc1xuICAgIC8vIHNlZSB1bm9jc3MuY29uZmlnLnRzIGZvciBjb25maWdcbiAgICBVbm9DU1MoKSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBU0EsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLHlCQUF5QjtBQUNoQyxTQUFTLG1CQUFtQjtBQUM1QixPQUFPLHNCQUFzQjtBQUM3QixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGVBQWU7QUFDdEIsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBRTdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLGNBQWM7QUFBQSxJQUNaLFNBQVMsUUFBUSxJQUFJLGFBQWEsZ0JBQWdCLENBQUMsa0JBQWtCLGVBQWUsZ0JBQWdCLElBQUksQ0FBQztBQUFBLEVBQzNHO0FBQUEsRUFDQSxTQUFTO0FBQUE7QUFBQSxJQUVQLGtCQUFrQjtBQUFBO0FBQUEsSUFFbEIsZUFBZTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsYUFBYTtBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0EsU0FBUyxDQUFDLHNCQUFzQjtBQUFBLElBQ2xDLENBQUM7QUFBQTtBQUFBLElBRUQsaUJBQWlCO0FBQUE7QUFBQSxJQUVqQixvQkFBb0I7QUFBQSxNQUNsQixXQUFXLENBQUMsWUFBWSxHQUFHLG1CQUFtQixDQUFDO0FBQUEsTUFDL0MsS0FBSztBQUFBLE1BQ0wsTUFBTSxDQUFDLGtCQUFrQixjQUFjO0FBQUEsTUFDdkMsc0JBQXNCO0FBQUEsSUFDeEIsQ0FBQztBQUFBO0FBQUEsSUFFRCxVQUFVO0FBQUE7QUFBQSxJQUVWLFdBQVc7QUFBQTtBQUFBLElBRVgsSUFBSTtBQUFBO0FBQUEsSUFFSixhQUFhO0FBQUEsTUFDWCxRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUE7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLGdCQUFnQixTQUFTLFdBQVc7QUFBQSxRQUNuRCxNQUFNO0FBQUEsUUFDTixTQUFTLENBQUMsWUFBWSxjQUFjLGFBQWEsWUFBWTtBQUFBLE1BQy9ELEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLFNBQVMsQ0FBQyxnQkFBZ0IsYUFBYSxVQUFVO0FBQUEsTUFDbkQsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sU0FBUyxDQUFDLGlCQUFpQixZQUFZO0FBQUEsTUFDekMsQ0FBQztBQUFBLE1BQ0QsS0FBSztBQUFBLE1BQ0wsTUFBTSxDQUFDLG1CQUFtQixhQUFhLGFBQWEsU0FBUztBQUFBLE1BQzdELGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBO0FBQUEsSUFHRCxPQUFPO0FBQUEsRUFDVDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
