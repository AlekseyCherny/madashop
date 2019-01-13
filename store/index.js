import Vuex from 'vuex'

const store = () => { return new Vuex.Store({
  strict: false,
    state: {
      glcarts: {},
      total:0,
      stritems:"{}"
    },
    mutations: {
      update (state,newval) {
        state.glcarts=newval;
        state.stritems=JSON.stringify(newval);
        localStorage.setItem('cart', state.stritems);
        var tmp = 0;
        for (var item in newval) {
           tmp=tmp+Number(newval[item][2])*Number(newval[item][1]);
        }
        state.total=tmp;
      }
    }
  })
}
/* store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('cart', JSON.stringify(state));
}); */
export default store