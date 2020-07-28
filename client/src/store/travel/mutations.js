export default {
    SET_ITINERARY(state, data) {
        if (data != null) {
            let nextStep = data;
            let itinerary = []
            while (nextStep != null) {
                itinerary.push({
                    'totalDistance': nextStep.totalDistance, 'id': nextStep.pathInformation.travelPathID,
                    'name': nextStep.pathInformation.name, 'customers': nextStep.customers
                });

                nextStep = nextStep.nextStep;
            }
            itinerary.shift();
            itinerary.pop();
            state.tourPath = itinerary;
        }
    }
}