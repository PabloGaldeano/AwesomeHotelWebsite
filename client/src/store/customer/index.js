
import actions from './actions'
import customerMutations from './mutations'
import customerGetters from './getters'

export default 
{
    namespaced: true,
    state: 
    {
        customerToken: null
    },
    getters: customerGetters,
    actions : actions,
    mutations: customerMutations
}
