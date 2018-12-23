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
        var tmp = 0;
        for (var item in newval) {
           tmp=tmp+Number(newval[item][2])*Number(newval[item][1]);
        }
        state.total=tmp;
      }
    }
  })
}
export default store