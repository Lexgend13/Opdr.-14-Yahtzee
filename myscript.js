const button = document.getElementById("knop")
const frequencyCells = document.getElementsByClassName("Count")
const throws = document.getElementsByClassName("throw")
const bonus = document.getElementById("bonus")
const totaalT = document.getElementsByClassName("totaal")

//Dobbelsteen combinaties
const threeOfAKind = document.getElementById("3oak")
const fourOfAKind = document.getElementById("4oak")
const fullHouse = document.getElementsByClassName("FH")
const smallStreet = document.getElementsByClassName("small")
const largeStreet = document.getElementsByClassName("large")
const yahtZee = document.getElementsByClassName("yahtzee")
const chance = document.getElementsByClassName("chance")

knop.addEventListener("click", function() {
    // Reset values for combinations
    threeOfAKind.innerHTML = "False"
    totaalT[1].innerHTML = parseInt(0)
    fourOfAKind.innerHTML = "False"
    totaalT[2].innerHTML = parseInt(0)
    fullHouse[0].innerHTML = "False"
    fullHouse[1].innerHTML = parseInt(0)
    smallStreet[0].innerHTML = "False"
    smallStreet[1].innerHTML = parseInt(0)
    largeStreet[0].innerHTML = "False"
    largeStreet[1].innerHTML = parseInt(0)
    yahtZee[0].innerHTML = "False"
    yahtZee[1].innerHTML = parseInt(0)
    chance[0].innerHTML = "False"
    chance[1].innerHTML = parseInt(0)

    console.log('Er is gegooid')

    array = []
    sum = 0
    const count = [0,0,0,0,0,0]
    for (let index = 0; index < 5; index++) {
        randomNumber = Math.ceil(Math.random()*6)
        array.push(randomNumber) 
        count[randomNumber -1]++      
    }

    array.sort() // Sort dice values from low to high

    console.log(array)
    console.log(count)
    for (let i = 0; i < frequencyCells.length; i++) {
        frequencyCells[i].innerHTML = count[i]        
    } 
 

    for (let i = 0; i < throws.length; i++) {
        throws[i].innerHTML = array[i] // Depict amount of times each value is thrown on website
    }

    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]) // Calculate total sum
    }

    if (sum>63) {
        totaalT[0].innerHTML = sum + 35
        bonus.innerHTML = 35
    } else {
        totaalT[0].innerHTML = sum
        bonus.innerHTML = 0
    }

    let endtotal = 0
    //Prerequisites for combinations
    chance[1].innerHTML = sum
    endtotal += sum
    for (let i = 0; i < array.length; i++) {
        
        if (count[i]>4) { // Prerequisite for Yahtzee
            yahtZee[0].innerHTML = "True"
            yahtZee[1].innerHTML = parseInt(50)
            endtotal += 50
        }
        if (count[i]>3) { // Prerequisite for 4 of a kind
            fourOfAKind.innerHTML = "True"
            totaalT[2].innerHTML = sum
            endtotal += sum
        }
        if (count[i]>2) { // Prerequisite for 3 of a kind
            threeOfAKind.innerHTML = "True"
            totaalT[1].innerHTML = sum
            endtotal += sum
            for (let j = 0; j < array.length; j++) {
                if (i == j) {
                    j++
                }
                if (count[j] > 1) { // Prerequisitie for Full House
                    fullHouse[0].innerHTML = "True"
                    fullHouse[1].innerHTML = parseInt(25) 
                    endtotal += 25       
                }
            }
        }
        }
        
    for (let i = 0; i < 3; i++) {
        if (count[i] > 0 && count[i+1] >0 && count[i+2] >0 && count[i+3] >0) { // Prerequisite for Small street
            smallStreet[0].innerHTML = "True"
            smallStreet[1].innerHTML = parseInt(30)
            endtotal += 30
            if (count[i+4] >0) { // Prerequisite for Large street
                largeStreet[0].innerHTML = "True"
                largeStreet[1].innerHTML = parseInt(40)
                endtotal += 40
            }
        }
        
    }

    totaalT[3].innerHTML = parseInt(endtotal)
    

})