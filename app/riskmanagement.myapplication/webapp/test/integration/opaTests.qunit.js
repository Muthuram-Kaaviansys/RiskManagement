sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/myapplication/test/integration/FirstJourney',
		'riskmanagement/myapplication/test/integration/pages/RisksList',
		'riskmanagement/myapplication/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/myapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);