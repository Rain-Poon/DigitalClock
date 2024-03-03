function printTimeOnNewMinute() {
    const currentDate = new Date();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    if (currentSecond !== 0) {
        console.log(`New minute started: ${currentDate.toLocaleTimeString()}`);
        const hourFirstDigit = Math.floor(currentDate.getHours() / 10);
        const hourSecondDigit = currentDate.getHours() % 10;
        // console.log(hourSecondDigit);
        const minuteFirstDigit = Math.floor(currentMinute / 10);
        const minuteSecondDigit = currentMinute % 10;

        // hour first digit
        const hourFirstDigitElement = document.getElementById("hour-first-digit");
        console.log(hourFirstDigit);
        switch (hourFirstDigit) {
            case 1:
                // right top
                ele = hourFirstDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // right top
                ele = hourFirstDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 2:
                console.log(2);
                // right top
                ele = hourFirstDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourFirstDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = hourFirstDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourFirstDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = hourFirstDigitElement.children[0].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 0:
                // right top
                ele = hourFirstDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourFirstDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourFirstDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = hourFirstDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left top
                ele = hourFirstDigitElement.children[0].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left bottom
                ele = hourFirstDigitElement.children[0].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
        }
        // hour second digit
        const hourSecondDigitElement = document.getElementById("hour-second-digit");
        reset(hourSecondDigitElement);
        switch (hourSecondDigit) {
            case 1:
                // right top
                ele = hourFirstDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // right top
                ele = hourFirstDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 2:
                console.log(2);
                // right top
                ele = hourSecondDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = hourSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = hourSecondDigitElement.children[0].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 3:
                console.log(3);
                // right top
                ele = hourSecondDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = hourSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = hourSecondDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 4:
                console.log(4);
                // left top
                ele = hourSecondDigitElement.children[0].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // right top
                ele = hourSecondDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle middle
                ele = hourSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = hourSecondDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 5:
                console.log(5);
                // left top
                ele = hourSecondDigitElement.children[0].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = hourSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = hourSecondDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 6:
                console.log(6);
                // left top
                ele = hourSecondDigitElement.children[0].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // left bottom
                ele = hourSecondDigitElement.children[0].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = hourSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = hourSecondDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 7:
                console.log(7);
                // right top
                ele = hourSecondDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";

                // right bottom
                ele = hourSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 8:
                console.log(8);
                // right top
                ele = hourSecondDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = hourSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = hourSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left top
                ele = hourSecondDigitElement.children[0].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left bottom
                ele = hourSecondDigitElement.children[0].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 9:
                console.log(9);
                // right top
                ele = hourSecondDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = hourSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = hourSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left top
                ele = hourSecondDigitElement.children[0].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 0:
                // right top
                ele = hourSecondDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = hourSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = hourSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = hourSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left top
                ele = hourSecondDigitElement.children[0].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left bottom
                ele = hourSecondDigitElement.children[0].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
        }
        // minute first digit
        const minuteFirstDigitElement = document.getElementById("minute-first-digit");
        reset(minuteFirstDigitElement);
        switch (minuteFirstDigit) {
            case 1:
                // right top
                ele = minuteFirstDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // right top
                ele = minuteFirstDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 2:
                console.log(2);
                // right top
                ele = minuteFirstDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteFirstDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteFirstDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteFirstDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = minuteFirstDigitElement.children[0].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 3:
                console.log(3);
                // right top
                ele = minuteFirstDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteFirstDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteFirstDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteFirstDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = minuteFirstDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 4:
                console.log(4);
                // left top
                ele = minuteFirstDigitElement.children[0].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // right top
                ele = minuteFirstDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle middle
                ele = minuteFirstDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = minuteFirstDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 5:
                console.log(5);
                // left top
                ele = minuteFirstDigitElement.children[0].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteFirstDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteFirstDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteFirstDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = minuteFirstDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 0:
                // right top
                ele = minuteFirstDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteFirstDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteFirstDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = minuteFirstDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left top
                ele = minuteFirstDigitElement.children[0].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left bottom
                ele = minuteFirstDigitElement.children[0].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
        }
        // minute second digit
        const minuteSecondDigitElement = document.getElementById("minute-second-digit");
        reset(minuteSecondDigitElement);
        switch (minuteSecondDigit) {
            case 1:
                // right top
                ele = minuteSecondDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // right top
                ele = minuteSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 2:
                console.log(2);
                // right top
                ele = minuteSecondDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = minuteSecondDigitElement.children[0].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 3:
                console.log(3);
                // right top
                ele = minuteSecondDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = minuteSecondDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 4:
                console.log(4);
                // left top
                ele = minuteSecondDigitElement.children[0].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // right top
                ele = minuteSecondDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle middle
                ele = minuteSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = minuteSecondDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 5:
                console.log(5);
                // left top
                ele = minuteSecondDigitElement.children[0].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // left bottom
                ele = minuteSecondDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 6:
                console.log(6);
                // left top
                ele = minuteSecondDigitElement.children[0].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // left bottom
                ele = minuteSecondDigitElement.children[0].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = minuteSecondDigitElement.children[2].children[1].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black";
                break;
            case 7:
                console.log(7);
                // right top
                ele = minuteSecondDigitElement.children[2].children[0].children;
                // arrow up
                ele[0].style.borderBottomColor = "black"
                // rectangle
                ele[1].style.backgroundColor = "black";
                // arrow down
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";

                // right bottom
                ele = minuteSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 8:
                console.log(8);
                // right top
                ele = minuteSecondDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = minuteSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left top
                ele = minuteSecondDigitElement.children[0].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left bottom
                ele = minuteSecondDigitElement.children[0].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 9:
                console.log(9);
                // right top
                ele = minuteSecondDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle middle
                ele = minuteSecondDigitElement.children[1].children[1].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = minuteSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left top
                ele = minuteSecondDigitElement.children[0].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
            case 0:
                // right top
                ele = minuteSecondDigitElement.children[2].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black"
                // middle top
                ele = minuteSecondDigitElement.children[1].children[0].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // middle bottom
                ele = minuteSecondDigitElement.children[1].children[2].children;
                ele[0].style.borderRightColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderLeftColor = "black";
                // right bottom
                ele = minuteSecondDigitElement.children[2].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left top
                ele = minuteSecondDigitElement.children[0].children[0].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                // left bottom
                ele = minuteSecondDigitElement.children[0].children[1].children;
                ele[0].style.borderBottomColor = "black"
                ele[1].style.backgroundColor = "black";
                ele[2].style.borderTopColor = "black";
                break;
        }

    }
}

setInterval(printTimeOnNewMinute, 1000);

function reset(element) {
    console.log("reset");
    for (let i = 0; i < 3; i++) {
        if (i === 0 || i === 2) {
            for (let j = 0; j < 2; j++) {
                ele = element.children[i].children[j].children;
                ele[0].style.borderBottomColor = "rgba(211, 211, 211, 0.3)";
                ele[1].style.backgroundColor = "rgba(211, 211, 211, 0.3)";
                ele[2].style.borderTopColor = "rgba(211, 211, 211, 0.3)";
            }
        } else {
            for (let j = 0; j < 3; j++) {
                ele = element.children[i].children[j].children;
                ele[0].style.borderRightColor = "rgba(211, 211, 211, 0.3)";
                ele[1].style.backgroundColor = "rgba(211, 211, 211, 0.3)";
                ele[2].style.borderLeftColor = "rgba(211, 211, 211, 0.3)";
            }
        }
    }

}