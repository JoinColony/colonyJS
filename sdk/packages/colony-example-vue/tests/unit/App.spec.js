const { mount } = require('@vue/test-utils');
const App = require('@/App.vue').default;

describe('colony-starter-vue', () => {

  test('App component mounts', () => {
    const wrapper = mount(App);
    expect(wrapper.contains('div')).toBe(true)
  });

});
