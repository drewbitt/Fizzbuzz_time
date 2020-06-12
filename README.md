<h1 align='center'>Fizz Buzz Time</h1>

# Introduction

Implements Fizz Buzz based off of the seconds of a timer. Native-ESM building for a no-bundle approach.

Using [Vite](https://github.com/vuejs/vite) + [VueUse](https://github.com/antfu/vueuse) + [TypeScript](https://www.typescriptlang.org/)

Please note that this uses Vue3's Composition API, currently in [beta](https://github.com/vuejs/vue-next), as well as the alpha packages [vue-router-next](https://github.com/vuejs/vue-router-next), [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue), and [vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next). Some instability or breaking changes may occur if the packages are upgraded.

🌐 [Live Demo](https://fizzbuzz-time.vercel.app/)

## Installation

1. Clone this repository
2. `npm install`
3. `npm run dev`
4. open http://localhost:3000 in your browser

## Tests

Uses [aria-vue](https://github.com/aelbore/aria-vue) and vue-test-utils-next for tests. Run headless tests with `npm run headless`

Didn't know this before I started, but vue-test-utils-next is extremely limited right now in alpha for Vue 3 (most work in the last two months) and lacks features as well as most any documentation.

## License

[MIT](http://opensource.org/licenses/MIT)
