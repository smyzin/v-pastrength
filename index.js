import Strength from 'src/strength';

module.exports = {
    install: function (Vue, options) {
        Vue.component('v-strength', Strength);
    }
};