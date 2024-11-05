sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tickets/test/integration/FirstJourney',
		'tickets/test/integration/pages/TicketsList',
		'tickets/test/integration/pages/TicketsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TicketsList, TicketsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tickets') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTicketsList: TicketsList,
					onTheTicketsObjectPage: TicketsObjectPage
                }
            },
            opaJourney.run
        );
    }
);