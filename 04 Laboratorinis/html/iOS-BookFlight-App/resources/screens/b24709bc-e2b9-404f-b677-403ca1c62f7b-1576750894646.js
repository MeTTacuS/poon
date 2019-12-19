jQuery("#simulation")
  .on("click", ".s-b24709bc-e2b9-404f-b677-403ca1c62f7b .click", function(event, data) {
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
                    "target": "screens/5f7fb0f5-db76-4eb0-8580-39bdd3708b9b",
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_1 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_1": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_4 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_3 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_3": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_2 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_2": {
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
                    "variable": [ "costReturn" ],
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
                    "variable": [ "hourReturn" ],
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
                    "variable": [ "flightNumReturn" ],
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
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_2 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_4 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_3 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_3": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_1 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_1": {
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
                    "variable": [ "costReturn" ],
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
                    "variable": [ "hourReturn" ],
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
                    "variable": [ "flightNumReturn" ],
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
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_3 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_3": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_4 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_2 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_1 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_1": {
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
                    "variable": [ "costReturn" ],
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
                    "variable": [ "hourReturn" ],
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
                    "variable": [ "flightNumReturn" ],
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
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_4 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_3 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_3": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_2 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_1 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_1": {
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
                    "variable": [ "costReturn" ],
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
                    "variable": [ "hourReturn" ],
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
                    "variable": [ "flightNumReturn" ],
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
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_6 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_6": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_9 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_9": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_8 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_8": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_7 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_7": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_7",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_23",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_7 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_7": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_9 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_9": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_8 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_8": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_6 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_6": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_26",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_27",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_29",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_8 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_8": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_9 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_9": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_7 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_7": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_6 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_6": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_32",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_33",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_35",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_9 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_9": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_8 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_8": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_7 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_7": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_6 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_6": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_38",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_39",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_41",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_10 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_10": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_13 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_13": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_12 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_12": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_11 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_11": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_44",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_45",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_47",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_11 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_11": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_13 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_13": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_12 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_12": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_10 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_10": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_50",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_51",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_53",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_12 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_12": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_13 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_13": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_11 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_11": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_10 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_10": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_56",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_57",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_59",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_13 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_13": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_12 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_12": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_11 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_11": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_10 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_10": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_62",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_63",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_65",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_14 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_14": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_17 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_16 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_16": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_15 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_15": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_68",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_69",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_71",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_15 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_15": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_17 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_16 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_16": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_14 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_14": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_74",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_75",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_77",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_16 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_16": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_17 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_15 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_15": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_14 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_14": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_80",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_81",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_83",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_17 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_16 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_16": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_15 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_15": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_14 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_14": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_86",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_87",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_89",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_18 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_18": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_21 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_21": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_20 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_20": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_19 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_19": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_92",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_93",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_95",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_19 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_19": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_21 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_21": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_20 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_20": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_18 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_18": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_98",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_99",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_101",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_20 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_20": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_21 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_21": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_19 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_19": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_18 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_18": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_104",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_105",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_107",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
    } else if(jFirer.is("#s-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_21 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_21": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_20 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_20": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_19 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_19": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_18 > .backgroundLayer": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Rectangle_18": {
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
                    "variable": [ "costReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_110",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "hourReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_111",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flightNumReturn" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_113",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7",
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
  .on("pageload", ".s-b24709bc-e2b9-404f-b677-403ca1c62f7b .pageload", function(event, data) {
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
    } else if(jFirer.is("#s-BCN_4")) {
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
                  "element": "cityFrom"
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
                  "element": "cityFrom"
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
                  "element": "cityFrom"
                },"London" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BCN_4" ],
                    "value": "LON"
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
                },"Sydney" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-BCN_4" ],
                    "value": "SYD"
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
    } else if(jFirer.is("#s-SFO_4")) {
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
                  "element": "cityTo"
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
                  "element": "cityTo"
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
                  "element": "cityTo"
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
                  "element": "cityTo"
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
                    "target": [ "#s-Paragraph_1","#s-DateInputLabels" ],
                    "value": {
                      "datatype": "variable",
                      "element": "dateReturn"
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
    } else if(jFirer.is("#s-Paragraph_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_24" ],
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
    } else if(jFirer.is("#s-Paragraph_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_25" ],
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
    } else if(jFirer.is("#s-Paragraph_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_30" ],
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
    } else if(jFirer.is("#s-Paragraph_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_31" ],
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
    } else if(jFirer.is("#s-Paragraph_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_36" ],
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
    } else if(jFirer.is("#s-Paragraph_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_37" ],
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
    } else if(jFirer.is("#s-Paragraph_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_42" ],
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
    } else if(jFirer.is("#s-Paragraph_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_43" ],
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
    } else if(jFirer.is("#s-Paragraph_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_48" ],
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
    } else if(jFirer.is("#s-Paragraph_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_49" ],
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
    } else if(jFirer.is("#s-Paragraph_54")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_54" ],
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
    } else if(jFirer.is("#s-Paragraph_55")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_55" ],
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
    } else if(jFirer.is("#s-Paragraph_60")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_60" ],
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
    } else if(jFirer.is("#s-Paragraph_61")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_61" ],
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
    } else if(jFirer.is("#s-Paragraph_66")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_66" ],
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
    } else if(jFirer.is("#s-Paragraph_67")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_67" ],
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
    } else if(jFirer.is("#s-Paragraph_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_72" ],
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
    } else if(jFirer.is("#s-Paragraph_73")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_73" ],
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
    } else if(jFirer.is("#s-Paragraph_78")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_78" ],
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
    } else if(jFirer.is("#s-Paragraph_79")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_79" ],
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
    } else if(jFirer.is("#s-Paragraph_84")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_84" ],
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
    } else if(jFirer.is("#s-Paragraph_85")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_85" ],
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
    } else if(jFirer.is("#s-Paragraph_90")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_90" ],
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
    } else if(jFirer.is("#s-Paragraph_91")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_91" ],
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
    } else if(jFirer.is("#s-Paragraph_96")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_96" ],
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
    } else if(jFirer.is("#s-Paragraph_97")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_97" ],
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
    } else if(jFirer.is("#s-Paragraph_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_102" ],
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
    } else if(jFirer.is("#s-Paragraph_103")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_103" ],
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
    } else if(jFirer.is("#s-Paragraph_108")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_108" ],
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
    } else if(jFirer.is("#s-Paragraph_109")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_109" ],
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
    } else if(jFirer.is("#s-Paragraph_114")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_114" ],
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
    } else if(jFirer.is("#s-Paragraph_115")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_115" ],
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
    }
  })
  .on("swipeleft", ".s-b24709bc-e2b9-404f-b677-403ca1c62f7b .swipeleft", function(event, data) {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
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
  .on("swiperight", ".s-b24709bc-e2b9-404f-b677-403ca1c62f7b .swiperight", function(event, data) {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_21": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_20": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_17": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_2": {
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
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b24709bc-e2b9-404f-b677-403ca1c62f7b #s-Paragraph_4": {
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