new Vue({
		el: '#app',
  	data: {
    	l: 38.85,

      arrows: {
        a: {
          value: 0,
          width: 0,
          inputError: false,
          inputBlock: false,
          show: true,
          focus: false,
        },
        b: {
          value: 0,
          width: 0,
          inputError: false,
          inputBlock: false,
          show: false,
          focus: false,
        }
      },
      caption: {
        result: {
          focus: false,
          disabled: false,
          value: '?',
          inputError: false,
          inputBlock: true,
        }
      }
  	},
  	methods: {
  		initial(){
	  		// init a, b
	  		// a [6,9], a+b[11,14]

	  		this.arrows.a.value = Math.floor(Math.random() * 4 + 6);
        this.arrows.b.value = Math.floor(Math.random() * 4 + (11 - this.arrows.a.value)); 

        this.arrows.a.width = this.arrows.a.value * this.l;
	  		this.arrows.b.width = this.arrows.b.value * this.l;

        this.caption.result.inputBlock = true;
        this.arrows.a.focus = true;
  		},
  		arrowInputA(val) {
  			if (val == this.arrows.a.value) {
          this.arrows.a.inputError = false;
          this.arrows.a.inputBlock = true;
          this.arrows.a.focus = false;
          this.arrows.b.show = true;
          this.arrows.b.focus = true;
        } else {
          this.arrows.a.inputError = true;
          this.arrows.b.inputBlock = false;
  			}
  		},
  		arrowInputB(val) {
        if (val == this.arrows.b.value) {
          this.arrows.b.inputError = false;
          this.arrows.b.inputBlock = true;
          this.arrows.b.focus = false;

          this.caption.result.value = '';
          this.caption.result.inputBlock = false;
          this.caption.result.disabled = false;
          this.caption.result.focus = true;
          document.getElementById("caption__input").focus();
        } else {
          this.arrows.b.inputError = true;
          this.arrows.b.inputBlock = false;
        }
  		},
      checkResult(val) {
        if (val == this.arrows.a.value + this.arrows.b.value) {
          this.caption.result.inputError = false;
          this.caption.result.value = val;
          this.caption.result.disabled = true;
          this.caption.result.inputBlock = true;

        } else {
          this.caption.result.value = val;
          this.caption.result.inputError = true;
        }
      }
  	},
  	beforeMount() {
  		this.initial();
  	},
  	mounted() {
  	 //console.log(this.caption)
  	},
    directives: {
      focus: {
        // определение директивы
        inserted: function (el, binding) {
          if (binding.value.active) el.focus()
        }
      }
    }
})