import Strength from './src/strength.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('v-strength', Strength);
    }
};