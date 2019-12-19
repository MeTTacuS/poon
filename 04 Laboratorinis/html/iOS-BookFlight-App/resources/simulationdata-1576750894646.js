function initData() {
  jimData.variables["flightNumReturn"] = "";
  jimData.variables["paxTitle"] = "";
  jimData.variables["open-close"] = "0";
  jimData.variables["paxData"] = "";
  jimData.variables["cityFrom"] = "";
  jimData.variables["cityTo"] = "";
  jimData.variables["flightType"] = "";
  jimData.variables["hourDeparture"] = "11:50";
  jimData.variables["paxName"] = "";
  jimData.variables["travelNum"] = "1";
  jimData.variables["hourReturn"] = "";
  jimData.variables["costDeparture"] = "";
  jimData.variables["dateReturn"] = "";
  jimData.variables["paxAd"] = "";
  jimData.variables["Cabin"] = "";
  jimData.variables["paxCh"] = "";
  jimData.variables["flightNumDeparture"] = "";
  jimData.variables["paxSurname"] = "";
  jimData.variables["costReturn"] = "";
  jimData.variables["paxBa"] = "";
  jimData.variables["dateDeparture"] = "";
  jimData.datamasters["paxData"] = [
  ];

  jimData.datamasters["flightData"] = [
    {
      "id": 1,
      "datamaster": "flightData",
      "userdata": {
        "travelNum": "1",
        "aeroFrom": "TYO",
        "aeroTo": "LON",
        "cityFrom": "Tokyo",
        "cityTo": "London"
      }
    }
  ];

  jimData.isInitialized = true;
}