
import CustomerActions from './actions'
import customerMutations from './mutations'
import CustomerGetters from './getters'

export default 
{
    namespaced: true,
    state: 
    {
        customerToken: null
    },
    getters: CustomerGetters,
    actions : CustomerActions,
    mutations: customerMutations
}
