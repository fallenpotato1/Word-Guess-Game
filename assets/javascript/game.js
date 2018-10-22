var games = ["battlefield", "fallout", "skyrim", "rocket league", "call of duty",
            "pubg", "overwatch", "mario", "god of war"]

        var theAnswer = document.querySelector(".answer")

        function randomWord() {
            var randomGame = games[Math.floor(Math.random() * games.length)]
            return randomGame
        }

        var thisWord = randomWord()
        


        function startGame() {
            for (letters = 0; letters < thisWord.length; letters++) {
                var createHidden = document.createElement("h2")
                createHidden.setAttribute("class", "iHopeThisWorks")
                createHidden.setAttribute("value", thisWord[letters])
                createHidden.textContent = "-"
                theAnswer.appendChild(createHidden)
            }
        }
        startGame()
        

        function checker(event) {
            var theCode = event.charCode
            var stringCode = String.fromCharCode(theCode)
            var changingBack = document.querySelector
            var theHidden = changingBack.textContent



            for(eachLetter = 0; eachLetter <= thisWord.length; eachLetter++) {
                var theTag = document.getElementsByClassName("iHopeThisWorks")[eachLetter]
                if (stringCode === thisWord[eachLetter]) {
                   theTag.textContent = thisWord[eachLetter]
                }

            }
        }

