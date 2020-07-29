export default {
    SET_ITINERARY(state, data) {
        if (data != null) {
            let nextStep = data;
            let itinerary = []
            while (nextStep != null) {
                itinerary.push({
                    'totalDistance': nextStep.totalDistance, 'id': nextStep.pathInformation.id,
                    'name': nextStep.pathInformation.name, 'customers': nextStep.customers
                });

                nextStep = nextStep.nextStep;
            }
            itinerary.shift();
            console.log(itinerary);

            state.tourPath = itinerary;
        }
    }
}