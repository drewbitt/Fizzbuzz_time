import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App.spec.js", () => {
  it("renders", async () => {
    const wrapper = mount(App, { attachTo: "#root" });
    // const routerView = wrapper.find('')
    // expect(routerView.exists()).toBe(true)
  });
});
