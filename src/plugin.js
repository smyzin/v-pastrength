import strength from './src/strength.vue';

module.exports = {
    install(Vue) {
        Vue.component('v-strength', strength);
    }
};

export {strength}