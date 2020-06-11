// For fixing IDE errors when importing .vue files
declare module '*.vue' {
    import { Component } from 'vue'
    const _default: Component
    export default _default
  }
