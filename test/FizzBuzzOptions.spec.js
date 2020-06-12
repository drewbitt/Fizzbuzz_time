import { FizzBuzzOptions } from '../src/components/FizzBuzzOptions.vue';
import { shallowMount } from '@vue/test-utils'

describe('FizzBuzzOptions', () => {
  it('Emits input event', async () => {
    const wrapper = mount(FizzBuzzOptions);

    const input = wrapper.find('input');
    input.setValue('1');
    input.trigger('keyup');

    const emitted = wrapper.emitted('setFizz')

    expect(emitted).toEqual('1');
  });
});
