// import { useState } from 'react'


// const [count, setCount] = useState(0)
// const [quote, setQuote] = useState('')
var barNames = ["Carmen", "Baras Backe", "Lion Bar", "BlackElk"];
var barPosition = [[59.346, 18.071], [59.3146, 18.0271], [59.3746, 18.0371], [59.377, 18.0321]];
var barLiked = Array.from({ length: 4 }, () => 0)
var barIds = Array.from(Array(4).keys());
var barIds_wiki = Array.from(Array(4).keys());
var barCheapestPrice = [39, 42, 49, 49]
var correspondVolume = [40, 40, 50, 50]
var barAddress = [    "Tjärhovsgatan 14, 116 21 Stockholm", 
                        "Götgatan 33, 116 21 Stockholm", 
                        "Sveavägen 74, 113 59 Stockholm",
                        "Sveavägen 61, 113 59 Stockholm" ]
var suggestion = [[42, 40], [], [], []]

export { barNames, barPosition, barIds, barLiked, barCheapestPrice, correspondVolume, barAddress, suggestion, barIds_wiki }