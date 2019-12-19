jQuery("#simulation")
  .on("click", ".s-0ece8872-1f2c-4203-8434-20b5b91584ac .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-previousicon_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/215caf7b-cc6a-4b61-8d69-42d054886ba7"
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
    } else if(jFirer.is("#s-Button-black_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimOr",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Radio_button_2",
                      "property": "jimGetValue"
                    },{
                      "datatype": "property",
                      "target": "#s-Radio_button_3",
                      "property": "jimGetValue"
                    } ]
                  },{
                    "action": "jimOr",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Radio_button_4",
                      "property": "jimGetValue"
                    },{
                      "action": "jimOr",
                      "parameter": [ {
                        "action": "jimOr",
                        "parameter": [ {
                          "action": "jimOr",
                          "parameter": [ {
                            "action": "jimOr",
                            "parameter": [ {
                              "action": "jimOr",
                              "parameter": [ {
                                "datatype": "property",
                                "target": "#s-Radio_button_5",
                                "property": "jimGetValue"
                              },{
                                "action": "jimOr",
                                "parameter": [ {
                                  "datatype": "property",
                                  "target": "#s-Radio_button_6",
                                  "property": "jimGetValue"
                                },{
                                  "action": "jimOr",
                                  "parameter": [ {
                                    "datatype": "property",
                                    "target": "#s-Radio_button_7",
                                    "property": "jimGetValue"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Radio_button_8",
                                    "property": "jimGetValue"
                                  } ]
                                } ]
                              } ]
                            },{
                              "datatype": "property",
                              "target": "#s-Radio_button_10",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "datatype": "property",
                            "target": "#s-Radio_button_11",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "datatype": "property",
                          "target": "#s-Radio_button_12",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "action": "jimOr",
                        "parameter": [ {
                          "action": "jimOr",
                          "parameter": [ {
                            "action": "jimOr",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-Radio_button_15",
                              "property": "jimGetValue"
                            },{
                              "datatype": "property",
                              "target": "#s-Radio_button_16",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "datatype": "property",
                            "target": "#s-Radio_button_17",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "datatype": "property",
                          "target": "#s-Radio_button_19",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    } ]
                  } ]
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimOr",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Radio_button_20",
                      "property": "jimGetValue"
                    },{
                      "datatype": "property",
                      "target": "#s-Radio_button_21",
                      "property": "jimGetValue"
                    } ]
                  },{
                    "action": "jimOr",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Radio_button_22",
                      "property": "jimGetValue"
                    },{
                      "action": "jimOr",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Radio_button_23",
                        "property": "jimGetValue"
                      },{
                        "action": "jimOr",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Radio_button_24",
                          "property": "jimGetValue"
                        },{
                          "action": "jimOr",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Radio_button_25",
                            "property": "jimGetValue"
                          },{
                            "action": "jimOr",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-Radio_button_26",
                              "property": "jimGetValue"
                            },{
                              "action": "jimOr",
                              "parameter": [ {
                                "datatype": "property",
                                "target": "#s-Radio_button_27",
                                "property": "jimGetValue"
                              },{
                                "action": "jimOr",
                                "parameter": [ {
                                  "datatype": "property",
                                  "target": "#s-Radio_button_28",
                                  "property": "jimGetValue"
                                },{
                                  "action": "jimOr",
                                  "parameter": [ {
                                    "datatype": "property",
                                    "target": "#s-Radio_button_29",
                                    "property": "jimGetValue"
                                  },{
                                    "action": "jimOr",
                                    "parameter": [ {
                                      "datatype": "property",
                                      "target": "#s-Radio_button_30",
                                      "property": "jimGetValue"
                                    },{
                                      "action": "jimOr",
                                      "parameter": [ {
                                        "datatype": "property",
                                        "target": "#s-Radio_button_33",
                                        "property": "jimGetValue"
                                      },{
                                        "action": "jimOr",
                                        "parameter": [ {
                                          "datatype": "property",
                                          "target": "#s-Radio_button_34",
                                          "property": "jimGetValue"
                                        },{
                                          "action": "jimOr",
                                          "parameter": [ {
                                            "action": "jimOr",
                                            "parameter": [ {
                                              "datatype": "property",
                                              "target": "#s-Radio_button_35",
                                              "property": "jimGetValue"
                                            },{
                                              "datatype": "property",
                                              "target": "#s-Radio_button_36",
                                              "property": "jimGetValue"
                                            } ]
                                          },{
                                            "action": "jimOr",
                                            "parameter": [ {
                                              "datatype": "property",
                                              "target": "#s-Radio_button_37",
                                              "property": "jimGetValue"
                                            },{
                                              "action": "jimOr",
                                              "parameter": [ {
                                                "action": "jimOr",
                                                "parameter": [ {
                                                  "action": "jimOr",
                                                  "parameter": [ {
                                                    "datatype": "property",
                                                    "target": "#s-Radio_button_39",
                                                    "property": "jimGetValue"
                                                  },{
                                                    "action": "jimOr",
                                                    "parameter": [ {
                                                      "datatype": "property",
                                                      "target": "#s-Radio_button_40",
                                                      "property": "jimGetValue"
                                                    },{
                                                      "datatype": "property",
                                                      "target": "#s-Radio_button_41",
                                                      "property": "jimGetValue"
                                                    } ]
                                                  } ]
                                                },{
                                                  "action": "jimOr",
                                                  "parameter": [ {
                                                    "datatype": "property",
                                                    "target": "#s-Radio_button_42",
                                                    "property": "jimGetValue"
                                                  },{
                                                    "datatype": "property",
                                                    "target": "#s-Radio_button_43",
                                                    "property": "jimGetValue"
                                                  } ]
                                                } ]
                                              },{
                                                "action": "jimOr",
                                                "parameter": [ {
                                                  "datatype": "property",
                                                  "target": "#s-Radio_button_44",
                                                  "property": "jimGetValue"
                                                },{
                                                  "action": "jimOr",
                                                  "parameter": [ {
                                                    "datatype": "property",
                                                    "target": "#s-Radio_button_46",
                                                    "property": "jimGetValue"
                                                  },{
                                                    "action": "jimOr",
                                                    "parameter": [ {
                                                      "datatype": "property",
                                                      "target": "#s-Radio_button_47",
                                                      "property": "jimGetValue"
                                                    },{
                                                      "datatype": "property",
                                                      "target": "#s-Radio_button_48",
                                                      "property": "jimGetValue"
                                                    } ]
                                                  } ]
                                                } ]
                                              } ]
                                            } ]
                                          } ]
                                        } ]
                                      } ]
                                    } ]
                                  } ]
                                } ]
                              } ]
                            } ]
                          } ]
                        } ]
                      } ]
                    } ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/19d656d7-6057-4e6f-b1d9-6cef93161189",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ]
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
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimOr",
                    "parameter": [ {
                      "action": "jimOr",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Radio_button_1",
                        "property": "jimGetValue"
                      },{
                        "datatype": "property",
                        "target": "#s-Radio_button_9",
                        "property": "jimGetValue"
                      } ]
                    },{
                      "datatype": "property",
                      "target": "#s-Radio_button_13",
                      "property": "jimGetValue"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-Radio_button_14",
                    "property": "jimGetValue"
                  } ]
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Radio_button_18",
                    "property": "jimGetValue"
                  },{
                    "action": "jimOr",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Radio_button_31",
                      "property": "jimGetValue"
                    },{
                      "action": "jimOr",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Radio_button_32",
                        "property": "jimGetValue"
                      },{
                        "action": "jimOr",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Radio_button_38",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-Radio_button_45",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    } ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Warnings_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
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
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DACFE6"
                      }
                    }
                  },{
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK": {
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
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK span": {
                      "attributes": {
                        "color": "#535353",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ece8872-1f2c-4203-8434-20b5b91584ac #s-Button-OK": {
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
  });