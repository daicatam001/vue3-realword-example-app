import type { App, Component } from "vue";

export const registerComponents = (app: App<Element>) => {
  const layoutComponents = import.meta.globEager<{ default: Component }>(
    "@/components/layouts/*.vue"
  );
  register(app, layoutComponents);
};

const register = (
  app: App<Element>,
  components: Record<string, { default: Component }>
) => {
    console.log(components)
  Object.entries(components).forEach(([path, definition]) => {
    const componentName = path
      .split("/")
      .pop()!
      .replace(/\.\w+$/, "");
    // Register component on this Vue instance
    app.component(componentName, definition.default);
  });
};
