import strength from './strength.vue';

let object = {
    install: (Vue)=>{
        Vue.component('v-strength', strength);
    }
};

export default object