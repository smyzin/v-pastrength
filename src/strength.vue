<template>
    <div class="componentBlock">
        <div class="levelBlock">
            <div class="levelBlock__text">{{label?levelText:''}}</div>
            <div
                    :class="{
                    'levelBlock__power': true,
                    'levelBlock__power_green': level>80?true:false
                }"
            >
            </div>
            <div
                    :class="{
                    'levelBlock__power': true,
                    'levelBlock__power_yellow': level>60?true:false
                }"
            >
            </div>
            <div
                    :class="{
                    'levelBlock__power': true,
                    'levelBlock__power_red': level>=30?true:false
                }"
            >
            </div>
        </div>
    </div>
</template>

<script>
    import passwordChecker from './strengthClass'

    export default {
        name: 'Strength',
        props: {
            password: { type: String, default: '' },
            label: { type: Boolean, default: false },
            lang: { type: String, default: 'ru' },
            colors: { type: Array, default: ()=>{return []} }
        },
        watch:{
            password(){
                this.verifyPassword(this.password);
            }
        },
        created(){
            if (this.colors !== []) {
                for (let i in this.colors) {
                    console.log(this.colors[i].name, ' - ', this.colors[i].value);
                    if (this.colors[i].name === 'strong') {
                        this.customColor.strong = this.colors[i].value;
                    }
                    if (this.colors[i].name === 'good') {
                        this.customColor.good = this.colors[i].value;
                    }
                    if (this.colors[i].name === 'weak') {
                        this.customColor.weak = this.colors[i].value;
                    }
                }
            }
        },
        data(){
            return {
                passwordClass: new passwordChecker,
                level: null,
                levelText: null,
                customColor: {
                    strong: '#67C23A',
                    good: '#E6A23C',
                    weak: '#F56C6C'
                }
            }
        },
        methods:{
            switchLang(){
                switch (this.lang) {
                    case 'en':
                        if (this.level > 80) {
                            this.levelText = 'strong';
                        } else if (this.level > 60) {
                            this.levelText = 'good';
                        } else if (this.level >= 30) {
                            this.levelText = 'weak';
                        } else {
                            this.levelText = '';
                        }
                        break;
                    case 'ru':
                        if (this.level > 80) {
                            this.levelText = 'сильный';
                        } else if (this.level > 60) {
                            this.levelText = 'хороший';
                        } else if (this.level >= 30) {
                            this.levelText = 'слабый';
                        } else {
                            this.levelText = '';
                        }
                        break;
                }
            },
            verifyPassword(){
                this.level = this.passwordClass.check(this.password);
                this.switchLang();
            }
        }
    }
</script>

<style scoped>
    .levelBlock {
        display: block;
        position: relative;
        max-width: 100%;
        width: 80px;
        padding-top: 7px;
    }

    .levelBlock__power {
        width: calc(100% / 4);
        height: 3px;
        display: inline-block;
        background: #C0C4CC;
        margin: 0 2px;
        transition: background-color .4s ease-in-out;
    }

    .levelBlock__power_red {
        background-color: #F56C6C;
    }

    .levelBlock__power_yellow {
        background-color: #E6A23C;
    }

    .levelBlock__power_green {
        background-color: #67C23A;
    }

    .levelBlock__text {
        position: absolute;
        color: #606266;
        font-weight: 300;
        font-size: 14px;
        right: 9px;
        top: 0;
        text-transform: capitalize;
    }
</style>