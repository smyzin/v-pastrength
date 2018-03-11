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
                level: null,
                levelText: null,
                customColor: {
                    strong: '#67C23A',
                    good: '#E6A23C',
                    weak: '#F56C6C'
                },
                score: 0
            }
        },
        methods:{
            /* Vue methods */
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
                this.score = 0;
                this.level = this.initPas(this.password);
                this.switchLang();
            },
            /* Class methods */
            initPas(password) {
                this.findUniquePas(password);
                this.bonusMixPas(password);

                return this.implementScorePas()
            },
            findUniquePas(password) {
                let letters = new Object();
                for (let i = 0; i < password.length; i++) {
                    letters[password[i]] = (letters[password[i]] || 0) + 1;
                    this.score += 5.0 / letters[password[i]];
                }
            },
            bonusMixPas(password) {
                let variations = {
                    digits: /\d/.test(password),
                    lower: /[a-z]/.test(password),
                    upper: /[A-Z]/.test(password),
                    nonWords: /\W/.test(password),
                };
                let variationCount = 0;
                for (let check in variations) {
                    variationCount += (variations[check] == true) ? 1 : 0;
                }
                this.score += (variationCount - 1) * 10;
            },
            implementScorePas() {
                if (this.score > 80) {
                    console.log("strong");
                    return this.score;
                }
                if (this.score > 60) {
                    console.log("good");
                    return this.score;
                }
                if (this.score >= 30) {
                    console.log("weak");
                    return this.score;
                }

                return this.score;
            },
            // check(password) {
            //     this.score = 0;
            //     return this._init(password);
            // }
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