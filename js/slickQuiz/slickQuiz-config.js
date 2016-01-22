// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge",
        "main": "<p>Do you know your recycling facts? Take our quiz and find out! We're happy to guide you through the process of learning about recycling. Just like we want to help educate others about recycling, we'd love for you to educate us as well. Take our quiz and asses your knowledge of recycling! </p>",
        "results": "<h5> Check out the facts pages on our website for more information. </h5><p>We hope this quiz helped asses your position in terms of recycling knowledge. If you knew the answer to every question, feel free to send us an e-mail on how to improve our website. If you still have some work to do, that's okay! We too are constantly learning about new ways we can help out.</p> ",
        "level1": "Recycling Pro",
        "level2": "Recycling Master",
        "level3": "Recycling Novice",
        "level4": "Recycling Student",
        "level5": "Recycling Beginner" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following items is non-recyclable?",
            "a": [
                {
                    "option": "Office paper",
                    "correct": false
                },
                {
                    "option": "Glass jar",
                    "correct": false
                },
                {
                    "option": "Waxed cardboard",
                    "correct": true
                },
                {
                    "option": "Milk jug",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>That's right!</span> Waxed cardboard can not be recycled.</p>",
            "incorrect": "<p><span>Incorrect.</span> Office paper, glass jars, and milk jugs can all be recycled. However, waxed cardboard can not be recycled.</p>" // no comma here
        },
        {
            "q": "Recycling employs approximately____ people in the U.S.",
            "a": [
                {
                    "option": "1.1 million",
                    "correct": true
                },
                {
                    "option": "30,000",
                    "correct": false
                },
                {
                    "option": "4.9 million",
                    "correct": false
                },
                {
                    "option": "5,000",
                    "correct": false
                } // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You are correct, recycling employs about 1.1 million people.</p>",
            "incorrect": "<p><span>Hmmm.</span> That isn't quite right. Recycling actually employs 1.1 million people in the United States.</p>" // no comma here
        },
        {
            "q": "What is the most recycled product in the U.S.",
            "a": [
                {
                    "option": "aluminum",
                    "correct": false
                },
                {
                    "option": "paper",
                    "correct": false
                },
                {
                    "option": "plastic",
                    "correct": false
                },
                {
                    "option": "asphalt",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>Correct!</span> Asphalt is recycled the most in the United States.</p>",
            "incorrect": "<p><span>Not Quite.</span> Asphalt is actually the most recycled product in the United States.</p>" // no comma here
        },
        {
            "q": "What U.S. City recycles the most?",
            "a": [
                {
                    "option": "Los Angeles",
                    "correct": false
                },
                {
                    "option": "San Francisco",
                    "correct": true
                },
                {
                    "option": "Chicago",
                    "correct": false
                },
                {
                    "option": "Boston",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>That's right!</span> San Francisco recycles the most out of any city in the United States.</p>",
            "incorrect": "<p><span>Incorrect.</span> The city that recycles the most is actually San Francisco.</p>" // no comma here
        },
        {
            "q": "How much does the U.S. waste by throwing away recyclables?",
            "a": [
                {
                    "option": "$11.4 billion",
                    "correct": true
                },
                {
                    "option": "$453 million",
                    "correct": false
                },
                {
                    "option": "$789,643",
                    "correct": false
                },
                {
                    "option": "$112 million",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>Correct!</span> The United States wastes approximately $11.4 billion by throwing away recyclables.</p>",
            "incorrect": "<p><span>Incorrect.</span> The amount wasted is actually $11.4 billion.</p>" // no comma here
        },
        {
            "q": "What country is considered the most eco-friendly?",
            "a": [
                {
                    "option": "United States",
                    "correct": false
                },
                {
                    "option": "Germany",
                    "correct": false
                },
                {
                    "option": "Sweden",
                    "correct": true
                },
                {
                    "option": "Japan",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>Yes!</span> Sweden is the country that is considered the most eco-friendly.</p>",
            "incorrect": "<p><span>Sorry.</span> The most eco-friendly country is actually Sweden.</p>" // no comma here
        },
        {
            "q": "What percent of U.S. waste is actually recycled?",
            "a": [
                {
                    "option": "68%",
                    "correct": false
                },
                {
                    "option": "12%",
                    "correct": false
                },
                {
                    "option": "46%",
                    "correct": false
                },
                {
                    "option": "33%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>Yes!</span> 33% of waste in the United States is recycled.</p>",
            "incorrect": "<p><span>Incorrect.</span> The percentage of waste that is recycled is actually 33%.</p>" // no comma here
        }
    ]
};
