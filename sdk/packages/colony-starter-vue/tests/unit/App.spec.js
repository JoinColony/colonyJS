import App from "../../src/components/App.vue";

test("App component mounts", () => {
  const app = mount(App);
  expect(app).toBeTruthy();
});
