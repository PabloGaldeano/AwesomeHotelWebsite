import TravelGetters from './getters'
import TravelActions from './actions'
import TravelMutations from './mutations'

export default
    {
        namespaced: true,
        state:
        {
            tourPath: [],
            selectedTour: {}
        },
        getters: TravelGetters,
        actions: TravelActions,
        mutations: TravelMutations
    }