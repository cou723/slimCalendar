// vite.config.ts
import { vitePlugin as remix } from "file:///home/cou/ghq/github.com/cou723/slimCalendar/node_modules/@remix-run/dev/dist/index.js";
import { vercelPreset } from "file:///home/cou/ghq/github.com/cou723/slimCalendar/node_modules/@vercel/remix/vite.js";
import { defineConfig } from "file:///home/cou/ghq/github.com/cou723/slimCalendar/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///home/cou/ghq/github.com/cou723/slimCalendar/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      },
      presets: [vercelPreset()]
    }),
    tsconfigPaths()
  ],
  test: {
    include: ["app/**/*.{test,spec}.{js,ts}"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9jb3UvZ2hxL2dpdGh1Yi5jb20vY291NzIzL3NsaW1DYWxlbmRhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvY291L2docS9naXRodWIuY29tL2NvdTcyMy9zbGltQ2FsZW5kYXIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvY291L2docS9naXRodWIuY29tL2NvdTcyMy9zbGltQ2FsZW5kYXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyB2ZXJjZWxQcmVzZXQgfSBmcm9tIFwiQHZlcmNlbC9yZW1peC92aXRlXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHJlbWl4KHtcblx0XHRcdGZ1dHVyZToge1xuXHRcdFx0XHR2M19mZXRjaGVyUGVyc2lzdDogdHJ1ZSxcblx0XHRcdFx0djNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXG5cdFx0XHRcdHYzX3Rocm93QWJvcnRSZWFzb246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0cHJlc2V0czogW3ZlcmNlbFByZXNldCgpXSxcblx0XHR9KSxcblx0XHR0c2NvbmZpZ1BhdGhzKCksXG5cdF0sXG5cdHRlc3Q6IHtcblx0XHRpbmNsdWRlOiBbXCJhcHAvKiovKi57dGVzdCxzcGVjfS57anMsdHN9XCJdLFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNULFNBQVMsY0FBYyxhQUFhO0FBQzFWLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBRzFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLFFBQ25CLHNCQUFzQjtBQUFBLFFBQ3RCLHFCQUFxQjtBQUFBLE1BQ3RCO0FBQUEsTUFDQSxTQUFTLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDekIsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNMLFNBQVMsQ0FBQyw4QkFBOEI7QUFBQSxFQUN6QztBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
