(function(window, undefined) {
  var dictionary = {
    "d4cdd970-e385-4e95-94c0-e6c98594d1e9": "StatisticsSearch",
    "378485f4-67ef-44d1-a1f4-42ba59a59083": "Start",
    "67c6fa7c-368d-4172-b93c-4c9f9426509f": "Payment",
    "ee997a37-ddcb-4f00-a52b-f77ee3e36569": "Statistics",
    "a3a4cbd6-314e-40b4-9a75-67704e082c6e": "AddingACard",
    "2f6c2c25-5e42-45bd-b2c6-d254ad7d22be": "LoadingScreen",
    "f25bbb63-30e3-4c35-a767-bc1bfa17c128": "SEARCH FLIGHTS",
    "a627c669-f3ec-43b5-a6b0-4fadfb1c6fc1": "Settings",
    "0ece8872-1f2c-4203-8434-20b5b91584ac": "Seats",
    "b24709bc-e2b9-404f-b677-403ca1c62f7b": "RETURN FLIGHT ROUND",
    "3cbd1ff4-470d-4141-b890-56bb69c681c4": "DEPARTURE FLIGHT ONEWAY",
    "5f7fb0f5-db76-4eb0-8580-39bdd3708b9b": "DEPARTURE FLIGHT ROUND",
    "215caf7b-cc6a-4b61-8d69-42d054886ba7": "PASSENGERS",
    "19d656d7-6057-4e6f-b1d9-6cef93161189": "SUMMARY",
    "e39b167a-6827-498b-8062-bf89d74c1e48": "BOARDING PASS LIST",
    "f6ca07d8-4b5a-41d9-9c1f-5ff5615b8c54": "BOARDING PASS",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6": "BottomMenu",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);