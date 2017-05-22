//Wolverhampton JS files

/*
Global Variables
DO NOT ALTER!!!

*/

/*
Below are functions that can be called from inside SITS
*/

function hideContent(areaToHide, valueToHideOn, input){
    if(isArray(valueToHideOn)){                     //Value is an array
        console.log("variable is an array");
        if(varInArray(input, valueToHideOn)){
            hideCss(areaToHide);
            return true;
        }
        return false;
    } else {                                        //Value is NOT an array
        console.log('variable is NOT an array');
    }
}

function showContent(areaToShow, valueToShowOn){
    if(isArray(valueToShowOn)){                     //Value is an array
        console.log("variable is an array");
        if(varInArray(input, valueToShowOn)){
            showCss(areaToShow);
            return true;
        }
        return false;
    } else {
        console.log('variable is NOT an array');
    }
}

/*
Below are functions that only work as tools fot the functions above.  

DO NOT CALL THESE FUNCTIONS!!!
*/

function isArray(data){
    if(Object.prototype.toString.call( data ) === '[object Array]'){
        return true;
    }
    return false;
}

function varInArray(item, itemArray){
    for(var i = 0; i < itemArray.length; i++){
        if (item === itemArray[i]){
            return true;
        }
        return false;
    }
}

function hideCss(area){
    $(area).removeClass('sv-visible').addClass('sv-hidden');
}
function showCss(area){
    $(area).removeClass('sv-hidden').addClass('sv-visible');
}