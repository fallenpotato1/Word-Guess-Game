var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];


        var livesLeft = document.getElementsByClassName("numberOfWins")
        var theAnswer = document.querySelector(".answer")
        var guessesRemaining = document.getElementsByClassName("guesses")
        var lettersGuessed = document.getElementsByClassName("lettersGuessed")

        var games = ["battlefield", "fallout", "skyrim", "rocket league", "call of duty",
            "pubg", "overwatch", "mario", "god of war"]

        var randomGame = games[Math.floor(Math.random() * games.length)]
        var addElement = document.createElement("h2")
        var chars = randomGame.split("")

        for (letter = 0; letter < chars.length; letter++) {
            chars[letter] = "-"
        }

        var joinedHidden = chars.join("")

        addElement.textContent = joinedHidden
        addElement.classList.add("iHopeThisWorks")
        theAnswer.appendChild(addElement)



        function checker(event) {
            var theWord = Array.from(randomGame).join("")
            var theCode = event.charCode
            var stringCode = String.fromCharCode(theCode)
            var changingBack = document.querySelector(".iHopeThisWorks")
            var theHidden = changingBack.textContent
            var hiddenArray = Array.from(theHidden).join("")
            var letterPosition = theWord.indexOf(stringCode)
            


            console.log(stringCode)
            console.log(theWord)
            console.log(hiddenArray)
            console.log(theWord.length)
            
            var newArray = []
            var timesTried = 0
            var correct = theWord.length
            var whichCorrect
            
            
                
            if (stringCode === theWord[letterPosition]) {
                for(theOne = correct.length; theOne > correct.length; theOne--) {
                    if(theOne !== letterPosition) {
                        newArray[theOne] =  "-"
                    }
                }

                delete newArray[letterPosition]
                newArray[letterPosition] = theWord[letterPosition]
            
            } 
            var thisIsTooMuch = newArray.join("")
            changingBack.textContent = thisIsTooMuch
            
                    
                    
                    // var theFinal = hiddenArray.splice(letterPosition, 1, theWord[letterPosition])

                // console.log(hiddenArray.replace(hiddenArray[letterPosition], theWord[letterPosition]))
                }


