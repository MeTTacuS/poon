jQuery("#simulation")
  .on("click", ".s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-previousicon_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f25bbb63-30e3-4c35-a767-bc1bfa17c128",
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
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_6",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-GL_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_11",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-GL_6",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_13",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_14",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-GL_7",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_16",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-GL_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_22 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_22": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_24 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_24": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_23 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_23": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_116",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_117",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_119",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_23 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_23": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_24 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_24": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_22 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_22": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_122",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_123",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_125",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_24 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_24": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_23 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_23": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_22 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_22": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_128",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_129",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_131",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_24 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_24": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_23 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_23": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_22 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_22": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_134",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_135",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_137",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_26 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_26": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_29 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_29": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_28 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_28": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_27 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_27": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_140",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_141",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_143",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_27 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_27": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_29 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_29": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_28 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_28": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_26 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_26": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_146",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_147",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_149",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_28 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_28": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_29 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_29": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_27 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_27": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_26 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_26": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_152",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_153",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_155",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_29 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_29": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_28 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_28": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_27 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_27": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_26 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_26": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_158",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_159",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_161",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_30 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_30": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_33 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_33": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_32 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_32": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_31 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_31": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_164",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_165",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_167",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_31 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_31": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_33 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_33": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_32 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_32": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_30 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_30": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_164",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_171",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_173",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_32 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_32": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_33 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_33": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_31 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_31": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_30 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_30": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_176",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_177",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_179",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_33 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_33": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_32 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_32": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_31 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_31": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_30 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_30": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_182",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_183",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_185",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_37 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_37": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_188",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_189",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_191",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_37 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_37": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_194",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_195",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_197",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_37 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_37": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_200",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_201",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_203",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Rectangle_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_37 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_37": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#7B54A6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#7B54A6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#7B54A6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#7B54A6",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "9px 9px 9px 9px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "costDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_206",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_207",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumDeparture" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_209",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b24709bc-e2b9-404f-b677-403ca1c62f7b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
  .on("pageload", ".s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Barcelona_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Barcelona_9" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-BCN_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cityTo"
                },"San Francisco" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BCN_4" ],
                    "value": "SFO"
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
                  "element": "cityTo"
                },"Barcelona" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BCN_4" ],
                    "value": "BCN"
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
                  "element": "cityTo"
                },"Tokyo" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BCN_4" ],
                    "value": "TYO"
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
                  "element": "cityTo"
                },"Moon Station2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BCN_4" ],
                    "value": "MO2"
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
                  "element": "cityTo"
                },"Moon Station1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BCN_4" ],
                    "value": "MO1"
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
    } else if(jFirer.is("#s-SanFrancisco_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SanFrancisco_9" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-SFO_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cityFrom"
                },"San Francisco" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SFO_4" ],
                    "value": "SFO"
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
                  "element": "cityFrom"
                },"Barcelona" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SFO_4" ],
                    "value": "BCN"
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
                  "element": "cityFrom"
                },"Tokyo" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SFO_4" ],
                    "value": "TYO"
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
                  "element": "cityFrom"
                },"Moon Station2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SFO_4" ],
                    "value": "MO2"
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
                  "element": "cityFrom"
                },"Moon Station1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SFO_4" ],
                    "value": "MO1"
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
    } else if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DateInputLabels","#s-Paragraph_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "dateDeparture"
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
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-MonthLabel" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-DateInputLabels",
                        "property": "jimGetValue"
                      },"0",{
                        "action": "jimIndexOf",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-DateInputLabels",
                          "property": "jimGetValue"
                        },"/" ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DayLabel" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-DateInputLabels",
                        "property": "jimGetValue"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimIndexOf",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-DateInputLabels",
                            "property": "jimGetValue"
                          },"/" ]
                        },"1" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-DateInputLabels",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-YearLabel" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-DayLabel",
                        "property": "jimGetValue"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimIndexOf",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-DayLabel",
                            "property": "jimGetValue"
                          },"/" ]
                        },"1" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-DayLabel",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-DayLabel" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-DayLabel",
                        "property": "jimGetValue"
                      },"0",{
                        "action": "jimIndexOf",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-DayLabel",
                          "property": "jimGetValue"
                        },"/" ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_1" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-MonthLabel",
                              "property": "jimGetValue"
                            },"/" ]
                          },{
                            "datatype": "property",
                            "target": "#s-DayLabel",
                            "property": "jimGetValue"
                          } ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreater",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"1" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"31" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_3" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-MonthLabel",
                              "property": "jimGetValue"
                            },"/" ]
                          },{
                            "action": "jimMinus",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-DayLabel",
                              "property": "jimGetValue"
                            },"1" ]
                          } ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-DayLabel",
                  "property": "jimGetValue"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_3" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "action": "jimMinus",
                              "parameter": [ {
                                "datatype": "property",
                                "target": "#s-MonthLabel",
                                "property": "jimGetValue"
                              },"1" ]
                            },"/" ]
                          },"31" ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MonthLabel",
                    "property": "jimGetValue"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_3" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "12","/" ]
                      },{
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ "31","/" ]
                        },{
                          "action": "jimMinus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-YearLabel",
                            "property": "jimGetValue"
                          },"1" ]
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
    } else if(jFirer.is("#s-Paragraph_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"1" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"31" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-MonthLabel",
                              "property": "jimGetValue"
                            },"/" ]
                          },{
                            "action": "jimPlus",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-DayLabel",
                              "property": "jimGetValue"
                            },"1" ]
                          } ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-DayLabel",
                  "property": "jimGetValue"
                },"31" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "action": "jimPlus",
                              "parameter": [ {
                                "datatype": "property",
                                "target": "#s-MonthLabel",
                                "property": "jimGetValue"
                              },"1" ]
                            },"/" ]
                          },"1" ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MonthLabel",
                    "property": "jimGetValue"
                  },"12" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"31" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "1","/" ]
                      },{
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ "1","/" ]
                        },{
                          "action": "jimPlus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-YearLabel",
                            "property": "jimGetValue"
                          },"1" ]
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
    } else if(jFirer.is("#s-Paragraph_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"1" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"31" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_19" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-MonthLabel",
                              "property": "jimGetValue"
                            },"/" ]
                          },{
                            "action": "jimPlus",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-DayLabel",
                              "property": "jimGetValue"
                            },"2" ]
                          } ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-DayLabel",
                  "property": "jimGetValue"
                },"31" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_19" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "action": "jimPlus",
                              "parameter": [ {
                                "datatype": "property",
                                "target": "#s-MonthLabel",
                                "property": "jimGetValue"
                              },"1" ]
                            },"/" ]
                          },"2" ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MonthLabel",
                    "property": "jimGetValue"
                  },"12" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"31" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_19" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "1","/" ]
                      },{
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ "2","/" ]
                        },{
                          "action": "jimPlus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-YearLabel",
                            "property": "jimGetValue"
                          },"1" ]
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MonthLabel",
                    "property": "jimGetValue"
                  },"12" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"30" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_19" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "1","/" ]
                      },{
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ "1","/" ]
                        },{
                          "action": "jimPlus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-YearLabel",
                            "property": "jimGetValue"
                          },"1" ]
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
    } else if(jFirer.is("#s-Paragraph_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreater",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"1" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"31" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_21" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-MonthLabel",
                              "property": "jimGetValue"
                            },"/" ]
                          },{
                            "action": "jimMinus",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-DayLabel",
                              "property": "jimGetValue"
                            },"2" ]
                          } ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-DayLabel",
                  "property": "jimGetValue"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_21" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "action": "jimMinus",
                              "parameter": [ {
                                "datatype": "property",
                                "target": "#s-MonthLabel",
                                "property": "jimGetValue"
                              },"1" ]
                            },"/" ]
                          },"30" ]
                        },"/" ]
                      },{
                        "datatype": "property",
                        "target": "#s-YearLabel",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-MonthLabel",
                    "property": "jimGetValue"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DayLabel",
                    "property": "jimGetValue"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_21" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "12","/" ]
                      },{
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ "30","/" ]
                        },{
                          "action": "jimMinus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-YearLabel",
                            "property": "jimGetValue"
                          },"1" ]
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
    } else if(jFirer.is("#s-SanFrancisco_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SanFrancisco_8" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Barcelona_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Barcelona_8" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-SanFrancisco_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SanFrancisco_10" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Barcelona_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Barcelona_10" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-SanFrancisco_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SanFrancisco_11" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Barcelona_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Barcelona_11" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-SanFrancisco_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SanFrancisco_12" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Barcelona_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Barcelona_12" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_120")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_120" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_121")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_121" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_126")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_126" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_127")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_127" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_132")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_132" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_133")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_133" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_138")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_138" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_139")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_139" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_144")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_144" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_145")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_145" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_150")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_150" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_151" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_156")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_156" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_157")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_157" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_162")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_162" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_163")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_163" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_168")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_168" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_169")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_169" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_174")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_174" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_175")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_175" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_180")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_180" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_181")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_181" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_186")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_186" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_187")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_187" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_192")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_192" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_193")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_193" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_198")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_198" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_199")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_199" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_204")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_204" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_205")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_205" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
    } else if(jFirer.is("#s-Paragraph_210")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_210" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityFrom"
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
    } else if(jFirer.is("#s-Paragraph_211")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_211" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cityTo"
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
  .on("swipeleft", ".s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-hoursGroup_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeCenter" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipePlus_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-230"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_4" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-hoursGroup_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeLess_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeCenter" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-110"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_1" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-hoursGroup_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeLess_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeLess_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "12"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_2" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-hoursGroup_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipePlus_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipePlus_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-357"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_5" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-SwipeLess_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeLess_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeLess_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "12"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_2" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-SwipeLess_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeLess_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeCenter" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-110"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_1" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-SwipePlus_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipePlus_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipePlus_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-357"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_5" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-SwipeCenter")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeCenter" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipePlus_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-230"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_4" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
  .on("swiperight", ".s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-hoursGroup_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeCenter" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeLess_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "12"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_2" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
    } else if(jFirer.is("#s-hoursGroup_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeLess_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeLess_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "140"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_3" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
    } else if(jFirer.is("#s-hoursGroup_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipePlus_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeCenter" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-110"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_1" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
    } else if(jFirer.is("#s-hoursGroup_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipePlus_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipePlus_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-230"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_4" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
    } else if(jFirer.is("#s-SwipeLess_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeLess_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeLess_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "140"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_3" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
    } else if(jFirer.is("#s-SwipePlus_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipePlus_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipePlus_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-230"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_4" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
    } else if(jFirer.is("#s-SwipePlus_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipePlus_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeCenter" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-110"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_1" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
    } else if(jFirer.is("#s-SwipeCenter")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SwipeCenter" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SwipeLess_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-datesGroup" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "12"
                    },
                    "containment": false,
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5f7fb0f5-db76-4eb0-8580-39bdd3708b9b #s-Paragraph_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-hoursGroup_2" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
  });