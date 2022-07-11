import { Component, ViewChild, ElementRef } from "@angular/core";
import * as AdaptiveCards from 'adaptivecards';

@Component({
  selector: 'app-fluent-example',
  templateUrl: './fluent-example.component.html',
  styleUrls: ['./fluent-example.component.css']
})
export class FluentExampleComponent {

	@ViewChild('persons') persons!: ElementRef;

	json = 
	{
	    "type": "AdaptiveCard",
	    "body": [
	        
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					                {
					                    "type": "Column",
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "See Insights",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 8
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [

					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					            	{
					                    "type": "Column",
					                    "width": 1
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
				                                "type": "TextBlock",
				                                "text": "🚫",
				                                "size": "Large",
				                            }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "Redeem",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 7
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [

					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					            	{
					                    "type": "Column",
					                    "width": 1
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
				                                "type": "TextBlock",
				                                "text": "🚫",
				                                "size": "Large",
				                            }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "Redeem",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 7
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [

					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					            	{
					                    "type": "Column",
					                    "width": 1
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
				                                "type": "TextBlock",
				                                "text": "🚫",
				                                "size": "Large",
				                            }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "Redeem",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 7
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [

					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					            	{
					                    "type": "Column",
					                    "width": 1
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
				                                "type": "TextBlock",
				                                "text": "🚫",
				                                "size": "Large",
				                            }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "Redeem",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 7
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					                {
					                    "type": "Column",
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "See Insights",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 8
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [

					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					            	{
					                    "type": "Column",
					                    "width": 1
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
				                                "type": "TextBlock",
				                                "text": "🚫",
				                                "size": "Large",
				                            }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "Redeem",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 7
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [

					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					            	{
					                    "type": "Column",
					                    "width": 1
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
				                                "type": "TextBlock",
				                                "text": "🚫",
				                                "size": "Large",
				                            }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "Redeem",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 7
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [

					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					            	{
					                    "type": "Column",
					                    "width": 1
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
				                                "type": "TextBlock",
				                                "text": "🚫",
				                                "size": "Large",
				                            }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "Redeem",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 7
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        {
	            "type": "ColumnSet",
	            "separator": true,
	            "columns": [
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [

					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "Image",
					                            "style": "Person",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg",
					                            "size": "Large"
					                        }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
					                            "type": "TextBlock",
					                            "weight": "Bolder",
					                            "text": "Daxesh Vora",
					                            "wrap": true
					                        },
					                        {
					                            "type": "TextBlock",
					                            "spacing": "None",
					                            "text": "daxesh11@gmail.com",
					                            "isSubtle": true,
					                            "wrap": true
					                        }
					                    ],
					                    "width": 7
					                },

					            ]
					        },
	                    ],
	                    "width": 4
	                },
	                {
	                    "type": "Column",
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "separator": true,
					            "columns": [
					            	{
					                    "type": "Column",
					                    "width": 1
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
				                                "type": "TextBlock",
				                                "text": "🚫",
				                                "size": "Large",
				                            }
					                    ],
					                    "width": 2
					                },
					                {
					                    "type": "Column",
					                    "items": [
					                        {
									            "type": "ActionSet",
									            "actions": [
									                {
									                    "type": "Action.Submit",
									                    "title": "Redeem",
									                    "style": "positive",
									                }
									            ],
									            
									        }
					                    ],
					                    "width": 7
					                },
					                

					            ]
					        },
	                    ],
	                    "width": 2
	                },

	            ]
	        },
	        
	        
	        
	    ],
	    
	    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	    "version": "1.4"
	};

	constructor() { }

  	ngAfterViewInit() {
  		let personsAdaptiveCard = new AdaptiveCards.AdaptiveCard();

  		personsAdaptiveCard.onExecuteAction = function(action: AdaptiveCards.Action) {
		  if (action instanceof AdaptiveCards.SubmitAction) {
		    
		    alert("Button clicked!");
		  }
		}

	    personsAdaptiveCard.parse(this.json);
	    let renderedCard2 = personsAdaptiveCard.render();
	    this.persons.nativeElement.append(renderedCard2);
	}
}
