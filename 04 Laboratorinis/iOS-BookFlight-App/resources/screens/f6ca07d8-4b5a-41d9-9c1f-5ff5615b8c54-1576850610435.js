jQuery("#simulation")
  .on("click", ".s-f6ca07d8-4b5a-41d9-9c1f-5ff5615b8c54 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-previousicon")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e39b167a-6827-498b-8062-bf89d74c1e48",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-BotReturn")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Return","#s-Return_paxinfo" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-LineIndicator" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "187"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-BotDepart")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Departure","#s-Departure_paxinfo" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-LineIndicator" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-f6ca07d8-4b5a-41d9-9c1f-5ff5615b8c54 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-openClose_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimResize",
                    "parameter": {
                      "target": [ ".s-Row_cell_4" ],
                      "width": {
                        "type": "noresize"
                      },
                      "height": {
                        "type": "exprvalue",
                        "value": "240"
                      },
                      "effect": {
                        "type": "none",
                        "easing": "swing",
                        "duration": 300
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": [ ".s-openClose_5" ],
                      "angle": {
                        "type": "rotateto",
                        "value": "180"
                      },
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 300
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is(".s-openClose_6")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimResize",
                    "parameter": {
                      "target": [ ".s-Row_cell_6" ],
                      "width": {
                        "type": "noresize"
                      },
                      "height": {
                        "type": "exprvalue",
                        "value": "240"
                      },
                      "effect": {
                        "type": "none",
                        "easing": "swing",
                        "duration": 300
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": [ ".s-openClose_6" ],
                      "angle": {
                        "type": "rotateto",
                        "value": "180"
                      },
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 300
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": [ "#s-paxDataDetails1" ],
                      "top": {
                        "type": "movetoposition",
                        "value": "-330"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "0"
                      },
                      "containment": false
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-f6ca07d8-4b5a-41d9-9c1f-5ff5615b8c54 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f6ca07d8-4b5a-41d9-9c1f-5ff5615b8c54")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "flightType"
                },"roundtrip" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-iconOneWay","#s-departureOneWay" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-iconRoundTrip","#s-LineIndicator","#s-BotReturn","#s-BotDepart" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "flightType"
                },"oneway" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-iconRoundTrip","#s-LineIndicator","#s-BotReturn","#s-BotDepart" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-iconOneWay","#s-departureOneWay" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Grid_cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BP" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "flightData",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "travelNum"
                          },{
                            "datatype": "variable",
                            "element": "travelNum"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Current_row_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-paxDataDetails1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "paxData",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "datatype": "variable",
                            "element": "travelNum"
                          },{
                            "field": "TravelNum"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-BarNumber_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-BarNumber_5" ],
                    "value": {
                      "action": "jimRound",
                      "parameter": [ {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "action": "jimRandom"
                        },"123456789876543210" ]
                      },"0" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-BarNumber_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-BarNumber_6" ],
                    "value": {
                      "action": "jimRound",
                      "parameter": [ {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "action": "jimRandom"
                        },"123456789876543210" ]
                      },"0" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-paxNameContainer_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-paxNameContainer_5" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_70",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-paxSurnameContainer_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-paxSurnameContainer_5" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_69",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-paxSeatNum_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-paxSeatNum_6" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": ".s-Input_68",
                        "property": "jimGetValue"
                      },"3" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-paxSeatLett_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-paxSeatLett_6" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_67",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_4" ],
                    "value": {
                      "datatype": "variable",
                      "element": "hourReturn"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BoardingPM_-_5" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Text_4",
                        "property": "jimGetValue"
                      },"0","2" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BoardingPM_-_6" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Text_4",
                        "property": "jimGetValue"
                      },"3","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-BoardingPM_-_5",
                          "property": "jimGetValue"
                        },"3" ]
                      },{
                        "action": "jimConcat",
                        "parameter": [ ":",{
                          "datatype": "property",
                          "target": "#s-BoardingPM_-_6",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "hourDeparture"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BoardingPM_-_3" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Text_1",
                        "property": "jimGetValue"
                      },"0","2" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BoardingPM_-_4" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Text_1",
                        "property": "jimGetValue"
                      },"3","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BoardingPM_-_1" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-BoardingPM_-_3",
                          "property": "jimGetValue"
                        },"3" ]
                      },{
                        "action": "jimConcat",
                        "parameter": [ ":",{
                          "datatype": "property",
                          "target": "#s-BoardingPM_-_4",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("datachange", ".s-f6ca07d8-4b5a-41d9-9c1f-5ff5615b8c54 .datachange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Current_row_2") && !jFirer.hasClass("hidden")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-paxNameContainer_4" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_63",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-paxSurnameContainer_4" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_62",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-paxSeatNum_5" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_61",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-paxSeatLett_5" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_60",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });