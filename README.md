# vue-strength

A Vue component that shows a password security.

This isn't particularly useful, it's used as a demo for how to publish Vue components to NPM and work with JavaScript Classes!

## Installation

```js
npm i --save v-strength
```

### Browser

Include the script file, then install the component with `Vue.use(VueStrength);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-clock-simple/dist/vue-clock.min.js"></script>
<script type="text/javascript">
  Vue.use(VueStrength);
</script>
```

### Module

```js
import VueStrength from 'v-strength';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<v-strength></v-strength>
```
