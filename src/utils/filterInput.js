export function filterInput(e){
    let [result, errMsg] = ['',false]
    let banChar = /[^\\,\d]/gi;
    let multiComa = /[\\,]{2,}/gi;
    let lastComa = /,$/gi;
    
    e.match(banChar) !== null && (errMsg = !errMsg)
    result = e.replace(banChar,'');
    result = result.replace(multiComa,',');
    result = result.replace(lastComa,'');
    result = result.split(',').map(e=> Number(e))

    return [result, errMsg]
}
