import { Component, ViewChild, ElementRef } from "@angular/core";
import * as AdaptiveCards from 'adaptivecards';


@Component({
  selector: 'app-adaptive-test',
  templateUrl: './adaptive-test.component.html',
  styleUrls: ['./adaptive-test.component.css']
})


export class AdaptiveTestComponent {


	

@ViewChild('cardContainer1') cardContainer1!: ElementRef;
@ViewChild('cardContainer2') cardContainer2!: ElementRef;
@ViewChild('cardContainer3') cardContainer3!: ElementRef;
@ViewChild('cardContainer4') cardContainer4!: ElementRef;
@ViewChild('cardContainer5') cardContainer5!: ElementRef;

	json = {
	    "type": "AdaptiveCard",
	    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	    "version": "1.5",
	    "body": [
            {
	            "type": "Container",
	            "items": [
	                {
			            "type": "Container",
			            "items": [
			                {
			                    "type": "TextBlock",
			                    "text": "You're almost done!",
			                    "size": "Medium"
			                }
			            ],
			            "style": "accent",
			            "bleed": true
			        },
			        {
		            	"type": "Container",
			            "items": [
			                {
			                    "type": "TextBlock",
			                    "text": "It's time to wrap up your day",
		                		"size": "Large"
			                }
			            ],
			            "style": "accent",
			            "bleed": true
			        },
			        {
			            "type": "ActionSet",
			            "actions": [
			                {
			                    "type": "Action.Submit",
			                    "title": "Start your virtual commute"
			                }
			            ],
			            "bleed": true
			        }
	            ],
	            "style": "accent",
	            "bleed": true
	        },
	    ]
	};


	json2 = {
	    "type": "AdaptiveCard",
	    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	    "version": "1.5",
	    "body": [
            {
                "type": "TextBlock",
                "text": "How are you feeling today?",
                "size": "Medium",
                "color": "Dark",
                "fontType": "Default",
                "style": "default"
            },
            {
                "type": "ColumnSet",
                "columns": [
                    {
                        "type": "Column",
                        "width": "stretch",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": "😀",
                                "wrap": true,
                                "size": "ExtraLarge"
                            }
                        ]
                    },
                    {
                        "type": "Column",
                        "width": "stretch",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": "🙂",
                                "wrap": true,
                                "size": "ExtraLarge"
                            }
                        ]
                    },
                    {
                        "type": "Column",
                        "width": "stretch",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": "😐",
                                "wrap": true,
                                "size": "ExtraLarge"
                            }
                        ]
                    },
                    {
                        "type": "Column",
                        "width": "stretch",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": "😣",
                                "wrap": true,
                                "size": "ExtraLarge"
                            }
                        ]
                    },
                    {
                        "type": "Column",
                        "width": "stretch",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": "😡",
                                "wrap": true,
                                "size": "ExtraLarge"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "TextBlock",
                "text": "Taking a moment to reflect can help you better understand your emotions, strength, weaknesses and driving factors.",
                "wrap": true
            },
            {
	            "type": "Container",
	            "items": [
	                {
	                    "type": "ColumnSet",
	                    "columns": [
	                        {
	                            "type": "Column",
	                            "items": [
	                                {
	                                    "type": "TextBlock",
	                                    "spacing": "Small",
	                                    "size": "Small",
	                                    "weight": "Bolder",
	                                    "color": "Accent",
	                                    "text": "[Reflection history](https://adaptivecards.io)"
	                                }
	                            ],
	                            "width": "stretch"
	                        }
	                    ]
	                }
	            ]
	        }
	    ]
	};

	json3 = {
	    "type": "AdaptiveCard",
	    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	    "version": "1.5",
	    "body": [
            {
                "type": "TextBlock",
	            "text": "Activities for you",
	            "wrap": true
            }
	    ]
	};

	json4 = {
	    "type": "AdaptiveCard",
	    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	    "version": "1.5",
	    "body": [
            {
                "type": "TextBlock",
                "text": "Send praise to your colleagues",
                "wrap": true,
                "size": "Large"
            },
            {
	            "type": "Container",
	            "items": [
	                {
	                    "type": "TextBlock",
	                    "text": "Show gratitude for peers who went above and beyond at work.",
                		"size": "Medium",
                		"wrap": true
	                }
	            ],
	            "bleed": true
	        },
	        {
	            "type": "Container",
	            "items": [
	                {
	                    "type": "ColumnSet",
	                    "columns": [
	                        {
	                            "type": "Column",
	                            "items": [
	                                {
	                                    "type": "TextBlock",
	                                    "spacing": "Small",
	                                    "size": "Small",
	                                    "weight": "Bolder",
	                                    "color": "Accent",
	                                    "text": "[Send praise](https://adaptivecards.io)",
	                                    "id": "sendPraise"
	                                }
	                            ],
	                            "width": "stretch"
	                        }
	                    ]
	                }
	            ]
	        }
	    ]
	};

	json5 = {
	    "type": "AdaptiveCard",
	    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	    "version": "1.5",
	    "body": [
	    	{
	            "type": "ColumnSet",
	            "columns": [
	                {
	                    "type": "Column",
	                    "width": 2,
	                    "items": [
	                    	{
				                "type": "TextBlock",
				                "text": "Decompress from work with a meditation",
				                "wrap": true,
				                "size": "Large"
				            },
				            {
				                "type": "ColumnSet",
				                "columns": [
				                    {
				                        "type": "Column",
				                        "width": "stretch",
				                        "items": [
				                            {
				                                "type": "TextBlock",
				                                "text": "Powered by headspace",
				                                "size": "Medium",
				                                "wrap": true
				                            }
				                        ]
				                    },
				                ]
				            },
				            {
					            "type": "Container",
					            "items": [
					                {
					                    "type": "ColumnSet",
					                    "columns": [
					                        {
					                            "type": "Column",
					                            "items": [
					                                {
					                                    "type": "TextBlock",
					                                    "spacing": "Small",
					                                    "size": "Small",
					                                    "weight": "Bolder",
					                                    "color": "Accent",
					                                    "text": "[More mindfulness exercises](https://adaptivecards.io)"
					                                }
					                            ],
					                            "width": "stretch"
					                        }
					                    ]
					                }
					            ]
					        }
	                    ]
	                },
	                {
	                    "type": "Column",
	                    "width": 4,
	                    "items": [
	                        {
					            "type": "ColumnSet",
					            "columns": [
					                {
					                    "type": "Column",
					                    "width": 2,
					                    "items": [
					                        {
					                            "type": "Image",
					                            "spacing": "ExtraLarge",
					                            "url": "https://miro.medium.com/max/1400/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg"
					                        }
					                    ]
					                },
					                {
					                    "type": "Column",
					                    "width": 2,
					                    "items": [
					                        {
					                            "type": "Media",
					                            "poster": "https://adaptivecards.io/content/poster-video.png",
					                            "sources": [
					                                {
					                                    "mimeType": "video/mp4",
					                                    "url": "https://adaptivecardsblob.blob.core.windows.net/assets/AdaptiveCardsOverviewVideo.mp4"
					                                }
					                            ]
					                        }
					                    ]
					                }
					            ]
					        }
                    	]
	                }
	            ]
	        }
            
	    ]
	};

  constructor() { }

  ngAfterViewInit() {


  
    // 1. create an instance of adaptive cards
    let adaptiveCard = new AdaptiveCards.AdaptiveCard();


    adaptiveCard.onExecuteAction = function(action: AdaptiveCards.Action) {
	  if (action instanceof AdaptiveCards.SubmitAction) {
	    
	    alert("Button clicked!");
	  }
	}

    // 2. parse the json payload
    adaptiveCard.parse(this.json);
    // 3. render the card 
    let renderedCard = adaptiveCard.render();
    // 4. attach to the DOM
    this.cardContainer1.nativeElement.append(renderedCard);

    let adaptiveCard2 = new AdaptiveCards.AdaptiveCard();
    adaptiveCard2.parse(this.json2);
    let renderedCard2 = adaptiveCard2.render();
    this.cardContainer2.nativeElement.append(renderedCard2);


    let adaptiveCard3 = new AdaptiveCards.AdaptiveCard();
    adaptiveCard3.parse(this.json3);
    let renderedCard3 = adaptiveCard3.render();
    this.cardContainer3.nativeElement.append(renderedCard3);


    

    let adaptiveCard4 = new AdaptiveCards.AdaptiveCard();
    adaptiveCard4.parse(this.json4);
    let renderedCard4 = adaptiveCard4.render();
    this.cardContainer4.nativeElement.append(renderedCard4);

    let adaptiveCard5 = new AdaptiveCards.AdaptiveCard();
    adaptiveCard5.parse(this.json5);
    let renderedCard5 = adaptiveCard5.render();
    this.cardContainer5.nativeElement.append(renderedCard5);
  }

}
