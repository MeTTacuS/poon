jQuery("#simulation")
  .on("click", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-PassengersGroup" ],
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
    } else if(jFirer.is("#s-Button-Search")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DACFE6"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search": {
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
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search span": {
                      "attributes": {
                        "color": "#7B54A6",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-Search": {
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-From_1",
                  "property": "jimGetValue"
                },"Select a city" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Button-OK",
                          "property": "jimGetPositionY"
                        },"96" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1","#s-WDepCity" ],
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
                  "datatype": "property",
                  "target": "#s-To_1",
                  "property": "jimGetValue"
                },"Select a city" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Button-OK",
                          "property": "jimGetPositionY"
                        },"96" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-WDesCity","#s-Warnings_1" ],
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
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-From_1",
                  "property": "jimGetValue"
                },{
                  "datatype": "property",
                  "target": "#s-To_1",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Button-OK",
                          "property": "jimGetPositionY"
                        },"126" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-WDesCity","#s-Warnings_1","#s-WDepCity" ],
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
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-BrakeDateDepart",
                  "property": "jimGetValue"
                },{
                  "datatype": "property",
                  "target": "#s-BrakeDateSystem",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Button-OK",
                          "property": "jimGetPositionY"
                        },"96" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1","#s-WDepDate" ],
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
                "action": "jimLess",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-BrakeDateReturn",
                  "property": "jimGetValue"
                },{
                  "datatype": "property",
                  "target": "#s-BrakeDateDepart",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Button-OK",
                          "property": "jimGetPositionY"
                        },"96" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1","#s-WRetDate" ],
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
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Warnings_1",
                    "property": "jimIsVisible"
                  } ]
                },null ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Cabin" ],
                    "value": "Tourist"
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
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Warnings_1",
                    "property": "jimIsVisible"
                  } ]
                },null ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Cabin" ],
                    "value": "Business"
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
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Warnings_1",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "flightType"
                  },"roundtrip" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "cityFrom" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-From_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "cityTo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-To_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "dateDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Departure_date",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "dateReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Return_date",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "paxAd" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "paxBa" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_9",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "paxCh" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5f7fb0f5-db76-4eb0-8580-39bdd3708b9b",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Warnings_1",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "flightType"
                  },"oneway" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "cityFrom" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-From_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "cityTo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-To_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "dateDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Departure_date",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "paxAd" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "paxBa" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_9",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "paxCh" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3cbd1ff4-470d-4141-b890-56bb69c681c4",
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
    } else if(jFirer.is("#s-To_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-To_1a" ],
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
        },
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Drop_from",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-From_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a" ],
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
        },
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Drop_to",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_10" ],
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
        },
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Drop_from",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_11" ],
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
        },
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Drop_to",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_Bot_O")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-One_Way": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-One_Way": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-One_Way": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-One_Way_txt": {
                      "attributes": {
                        "font-size": "10.5pt",
                        "font-family": "'Roboto-Medium',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-One_Way_txt .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-One_Way_txt span": {
                      "attributes": {
                        "color": "#7B54A6",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Medium',Arial",
                        "font-size": "10.5pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-Round_Trip": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-Round_Trip": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-Round_Trip": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Round_trip_txt_1": {
                      "attributes": {
                        "font-size": "10.5pt",
                        "font-family": "'Roboto-Medium',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Round_trip_txt_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Round_trip_txt_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Medium',Arial",
                        "font-size": "10.5pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-oneWay" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightType" ],
                    "value": "oneway"
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
    } else if(jFirer.is("#s-Hotspot_Bot_R")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-Round_Trip": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-Round_Trip": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-Round_Trip": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Round_trip_txt_1": {
                      "attributes": {
                        "font-size": "10.5pt",
                        "font-family": "'Roboto-Medium',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Round_trip_txt_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Round_trip_txt_1 span": {
                      "attributes": {
                        "color": "#7B54A6",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Medium',Arial",
                        "font-size": "10.5pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-One_Way": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-One_Way": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Bg-One_Way": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-One_Way_txt": {
                      "attributes": {
                        "font-size": "10.5pt",
                        "font-family": "'Roboto-Medium',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-One_Way_txt .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-One_Way_txt span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Medium',Arial",
                        "font-size": "10.5pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-roundTrip" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightType" ],
                    "value": "roundtrip"
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
    } else if(jFirer.is("#s-from_Done")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions",
                  "property": "jimGetPositionY"
                },"68" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-From_1","#s-Paragraph_14" ],
                    "value": "San Francisco"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions",
                  "property": "jimGetPositionY"
                },"33" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-From_1","#s-Paragraph_14" ],
                    "value": "Barcelona"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions",
                  "property": "jimGetPositionY"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-From_1","#s-Paragraph_14" ],
                    "value": "Tokyo"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions",
                  "property": "jimGetPositionY"
                },"-37" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-From_1","#s-Paragraph_14" ],
                    "value": "Moon Station2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions",
                  "property": "jimGetPositionY"
                },"-72" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-From_1","#s-Paragraph_14" ],
                    "value": "Moon Station1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-to_Done")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions_1",
                  "property": "jimGetPositionY"
                },"68" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_12","#s-To_1" ],
                    "value": "San Francisco"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions_1",
                  "property": "jimGetPositionY"
                },"33" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_12","#s-To_1" ],
                    "value": "Barcelona"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions_1",
                  "property": "jimGetPositionY"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_12","#s-To_1" ],
                    "value": "Tokyo"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions_1",
                  "property": "jimGetPositionY"
                },"-37" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-To_1" ],
                    "value": "Moon Station2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions_1",
                  "property": "jimGetPositionY"
                },"-72" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-To_1" ],
                    "value": "Moon Station1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_to" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 300,
                      "direction": "down"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-black")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DACFE6"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black": {
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
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black span": {
                      "attributes": {
                        "color": "#535353",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black": {
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
                    "target": [ "#s-PassengersGroup" ],
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
    } else if(jFirer.is("#s-Button-black_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DACFE6"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1": {
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
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1 span": {
                      "attributes": {
                        "color": "#535353",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-black_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
                  "datatype": "property",
                  "target": "#s-Paragraph_2",
                  "property": "jimGetValue"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PaxAdults_1" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_2",
                        "property": "jimGetValue"
                      }," Adult" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PaxAdults_1" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_2",
                        "property": "jimGetValue"
                      }," Adults" ]
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
                  "datatype": "property",
                  "target": "#s-Paragraph_8",
                  "property": "jimGetValue"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PaxAChilds_2" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_8",
                        "property": "jimGetValue"
                      }," Child" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-numChilds_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_8",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PaxAChilds_2" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_8",
                        "property": "jimGetValue"
                      }," Childs" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-numChilds_1" ]
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
                  "datatype": "property",
                  "target": "#s-Paragraph_8",
                  "property": "jimGetValue"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-numChilds_1" ]
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
                  "datatype": "property",
                  "target": "#s-Paragraph_9",
                  "property": "jimGetValue"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PaxBabies_3" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_9",
                        "property": "jimGetValue"
                      }," Baby" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-numBabies_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_9",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PaxBabies_3" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_9",
                        "property": "jimGetValue"
                      }," Babies" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-numBabies_1" ]
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
                  "datatype": "property",
                  "target": "#s-Paragraph_9",
                  "property": "jimGetValue"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-numBabies_1" ]
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
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-PassengersGroup" ],
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
    } else if(jFirer.is("#s-Image_34")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_2",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_34 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_2",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_34 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_34 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_34 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_37")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_2",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_37 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_2",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_37 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_37 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_37 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_35")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_8",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_35 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_8",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_35 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_35 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_35 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_38")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_8",
                  "property": "jimGetValue"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_38 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_8",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_38 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_38 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_38 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_36")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_9",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_36 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_9",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_36 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_36 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_36 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_39")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_9",
                  "property": "jimGetValue"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_39 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_9",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_39 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_39 > svg": {
                      "attributes": {
                        "overlay": "#7B54A6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Image_39 > svg": {
                      "attributes": {
                        "overlay": "#DACFE6"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DACFE6"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK": {
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
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK span": {
                      "attributes": {
                        "color": "#535353",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Button-OK": {
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
    } else if(jFirer.is("#s-previousicon_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/378485f4-67ef-44d1-a1f4-42ba59a59083",
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
    }
  })
  .on("drag", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-fromOptions" ],
                    "parent": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "nomove"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MoonSt1",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_6",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-MoonSt1",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_5",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-MoonSt1",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_6",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MoonSt0",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_6",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-MoonSt0",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_5",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-MoonSt0",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_6",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Tokyo",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_6",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Tokyo",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_5",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Tokyo",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_6",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Barcelona",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_6",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Barcelona",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_5",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Barcelona",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_6",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-SanFrancisco",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_6",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-SanFrancisco",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_5",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-SanFrancisco",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_6",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-fromOptions_1" ],
                    "parent": "#s-Panel_3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions_1" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "nomove"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MoonSt_2",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_11",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-MoonSt_2",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_10",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-MoonSt_2",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_11",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MoonSt2",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_11",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-MoonSt2",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_10",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-MoonSt2",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_11",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Tokyo_1",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_11",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Tokyo_1",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_10",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Tokyo_1",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_11",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Barcelona_1",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_11",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Barcelona_1",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_10",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Barcelona_1",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_11",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimPlus",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-SanFrancisco_1",
                    "property": "jimGetAbsolutePositionY"
                  },"17" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_11",
                  "property": "jimGetAbsolutePositionY"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-SanFrancisco_1",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_10",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-SanFrancisco_1",
                      "property": "jimGetAbsolutePositionY"
                    },"17" ]
                  },{
                    "datatype": "property",
                    "target": "#s-Line_11",
                    "property": "jimGetAbsolutePositionY"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1": {
                      "attributes": {
                        "line-height": "25px",
                        "font-size": "13.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  } ],
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
  .on("dragend", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions"))) && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions",
                  "property": "jimGetPositionY"
                },"51" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "68"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
        },
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions"))) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions",
                    "property": "jimGetPositionY"
                  },"51" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions",
                    "property": "jimGetPositionY"
                  },"16" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "33"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
        },
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions"))) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions",
                    "property": "jimGetPositionY"
                  },"16" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions",
                    "property": "jimGetPositionY"
                  },"-19" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "1"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
        },
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions"))) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions",
                    "property": "jimGetPositionY"
                  },"-19" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions",
                    "property": "jimGetPositionY"
                  },"-54" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-37"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt0 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
        },
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions"))) && {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions",
                  "property": "jimGetPositionY"
                },"-54" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-72"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions_1"))) && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions_1",
                  "property": "jimGetPositionY"
                },"51" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "68"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-SanFrancisco_1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
        },
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions_1"))) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions_1",
                    "property": "jimGetPositionY"
                  },"51" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions_1",
                    "property": "jimGetPositionY"
                  },"16" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "33"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Barcelona_1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
        },
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions_1"))) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions_1",
                    "property": "jimGetPositionY"
                  },"16" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions_1",
                    "property": "jimGetPositionY"
                  },"-19" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "1"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-Tokyo_1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
        },
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions_1"))) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions_1",
                    "property": "jimGetPositionY"
                  },"-19" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-fromOptions_1",
                    "property": "jimGetPositionY"
                  },"-54" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-37"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt2 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
        },
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-fromOptions_1"))) && {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-fromOptions_1",
                  "property": "jimGetPositionY"
                },"-54" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-fromOptions_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-72"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 #s-MoonSt_2 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
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
    }
  })
  .on("dragend", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("pageload", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f25bbb63-30e3-4c35-a767-bc1bfa17c128")) {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costReturn","paxName","flightNumReturn","hourReturn","paxData","dateDeparture","cityTo","paxSurname","paxTitle","costDeparture","paxCh","paxBa","hourDeparture","flightNumDeparture","paxAd","cityFrom","Cabin","dateReturn" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightType" ],
                    "value": "roundtrip"
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
    } else if(jFirer.is("#s-Departure_date")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Departure_date" ],
                    "value": {
                      "action": "jimSystemDate"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SystemDate_month" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemDate"
                      },"0","2" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SystemDate_day" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemDate"
                      },"3","5" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SystemDate_year" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemDate"
                      },"6","10" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BrakeDateSystem" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-SystemDate_year",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-SystemDate_month",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-SystemDate_day",
                        "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Return_date")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Return_date" ],
                    "value": {
                      "action": "jimSystemDate"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSystemDate"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SystemDate_month" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemDate"
                      },"0","2" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SystemDate_day" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemDate"
                      },"3","5" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SystemDate_year" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemDate"
                      },"6","10" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BrakeDateSystem" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-SystemDate_year",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-SystemDate_month",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-SystemDate_day",
                        "property": "jimGetValue"
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
  .on("change", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Departure_date")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Return_date" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Departure_date",
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
  })
  .on("focusin", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Departure_date")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Shape_5" ],
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
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from","#s-Drop_to" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a","#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Return_date")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Shape_4" ],
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
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from","#s-Drop_to" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-From_1a","#s-To_1a" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
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
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drop_from","#s-Drop_to" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_11","#s-Image_10" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-f25bbb63-30e3-4c35-a767-bc1bfa17c128 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Departure_date")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Shape_5" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DepartDate_month" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Departure_date",
                        "property": "jimGetValue"
                      },"0","2" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DepartDate_day" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Departure_date",
                        "property": "jimGetValue"
                      },"3","5" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DepartDate_year" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Departure_date",
                        "property": "jimGetValue"
                      },"6","10" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BrakeDateDepart" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-DepartDate_year",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-DepartDate_month",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-DepartDate_day",
                        "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Return_date")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Shape_4" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-RetunrDate_month" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Return_date",
                        "property": "jimGetValue"
                      },"0","2" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-RetunrDate_day" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Return_date",
                        "property": "jimGetValue"
                      },"3","5" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-RetunrDate_year" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Return_date",
                        "property": "jimGetValue"
                      },"6","10" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BrakeDateReturn" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-RetunrDate_year",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-RetunrDate_month",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-RetunrDate_day",
                        "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DepartDate_month" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },"0","2" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DepartDate_day" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },"3","5" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DepartDate_year" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },"6","10" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BrakeDateDepart" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-DepartDate_year",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-DepartDate_month",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-DepartDate_day",
                        "property": "jimGetValue"
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
  });