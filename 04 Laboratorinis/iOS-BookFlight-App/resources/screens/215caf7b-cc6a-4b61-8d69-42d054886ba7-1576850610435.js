jQuery("#simulation")
  .on("click", ".s-215caf7b-cc6a-4b61-8d69-42d054886ba7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-previousicon_1")) {
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
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
        },
        {
          "blocks": [
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3cbd1ff4-470d-4141-b890-56bb69c681c4",
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_3",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_3" ]
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
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_2",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_2" ]
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
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_8",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
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
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_6",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_6" ]
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
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_12",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_12" ]
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
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_10",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
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
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_16",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_14" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_16" ]
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
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_14",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_14" ]
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
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_20",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_18" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_20" ]
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
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_18",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_20" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_18" ]
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
    } else if(jFirer.is("#s-Button-black_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DACFE6"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2": {
                      "attributes-ie": {
                        "-pie-background": "#DACFE6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2 span": {
                      "attributes": {
                        "color": "#7B54A6",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-black_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input-text",
                    "property": "jimGetValue"
                  },"" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input-text_1",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_2",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mr.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_1",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Image_3",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mrs.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_1",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_2",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_3",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_2",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Image_6",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mr.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_2",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_3",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_2",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Image_8",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mrs.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_2",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_3",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_3",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_4",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_5",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_3",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Image_12",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mrs.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_4",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_5",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_3",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Image_10",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mr.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_4",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_5",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_4",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_6",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_7",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_4",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Image_16",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mrs.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_6",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_7",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_4",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Image_14",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mr.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_6",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_7",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_5",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_8",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_9",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_5",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Image_20",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mrs.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_8",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_9",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-A_5",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Image_18",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Mr.",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_8",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_9",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-C_1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_10",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_11",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-C_1",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Child",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_10",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_11",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-C_2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_12",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_13",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-C_2",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Child",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_12",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_13",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-C_3",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_14",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_15",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-C_3",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Child",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_14",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_15",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-C_4",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_16",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_17",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-C_4",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Child",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_16",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_17",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-C_5",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_18",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_19",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-C_5",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Child",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_18",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_19",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-B_1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_20",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_21",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-B_1",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Baby",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_20",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_21",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-B_2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_22",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_23",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-B_2",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Baby",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_22",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_23",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-B_3",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_24",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_25",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-B_3",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Baby",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_24",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_25",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-B_4",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_26",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_27",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-B_4",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Baby",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_26",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_27",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-B_5",
                  "property": "jimIsVisible"
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_28",
                      "property": "jimGetValue"
                    }," " ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input-text_29",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-B_5",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "paxData",
                    "fields": {
                      "TravelNum": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "travelNum"
                        },"1" ]
                      },
                      "Passenger": "Baby",
                      "Name": {
                        "datatype": "property",
                        "target": "#s-Input-text_28",
                        "property": "jimGetValue"
                      },
                      "Surname": {
                        "datatype": "property",
                        "target": "#s-Input-text_29",
                        "property": "jimGetValue"
                      },
                      "Flight": {
                        "datatype": "variable",
                        "element": "flightNumDeparture"
                      },
                      "FlightReturn": {
                        "datatype": "variable",
                        "element": "flightNumReturn"
                      },
                      "Seat": {
                        "action": "jimRound",
                        "parameter": [ {
                          "action": "jimMultiply",
                          "parameter": [ {
                            "action": "jimRandom"
                          },"44" ]
                        },"0" ]
                      },
                      "SeatLetter": "A",
                      "CabinClass": {
                        "datatype": "variable",
                        "element": "Cabin"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Warnings_1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0ece8872-1f2c-4203-8434-20b5b91584ac",
                    "transition": {
                      "type": "slideleft",
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
    } else if(jFirer.is("#s-Button-OK")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DACFE6"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK": {
                      "attributes-ie": {
                        "-pie-background": "#DACFE6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK span": {
                      "attributes": {
                        "color": "#535353",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-215caf7b-cc6a-4b61-8d69-42d054886ba7 #s-Button-OK": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
  .on("pageload", ".s-215caf7b-cc6a-4b61-8d69-42d054886ba7 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-215caf7b-cc6a-4b61-8d69-42d054886ba7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6 #m-ead4920d-planeicon_15 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6 #m-ead4920d-Search_11": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "7.5pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6 #m-ead4920d-Search_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6 #m-ead4920d-Search_11 span": {
                      "attributes": {
                        "color": "#663D95",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "7.5pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6 #m-ead4920d-Image_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6 #m-ead4920d-Boardingpass_11": {
                      "attributes": {
                        "font-size": "7.5pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6 #m-ead4920d-Boardingpass_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-ead4920d-bc72-485d-9d8a-d7fd3fe9c9d6 #m-ead4920d-Boardingpass_11 span": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "7.5pt"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxAd"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-A_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxAd"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-A_3","#s-A_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxAd"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-A_4","#s-A_3","#s-A_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxAd"
                },"5" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-A_4","#s-A_5","#s-A_3","#s-A_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxCh"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-C_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxCh"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-C_2","#s-C_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxCh"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-C_3","#s-C_2","#s-C_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxCh"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-C_4","#s-C_3","#s-C_2","#s-C_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxCh"
                },"5" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-C_4","#s-C_3","#s-C_2","#s-C_5","#s-C_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxBa"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-B_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxBa"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-B_2","#s-B_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxBa"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-B_2","#s-B_1","#s-B_3" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxBa"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-B_2","#s-B_1","#s-B_3","#s-B_4" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paxBa"
                },"5" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-B_2","#s-B_1","#s-B_5","#s-B_3","#s-B_4" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 300
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