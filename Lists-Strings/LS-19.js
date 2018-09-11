// Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// 
// *********  
// * Hello *  
// * World *  
// * in    *  
// * a     *  
// * frame *  
// *********

function wordFrame(list) {
    let longestLength = 0;
    let str = '';
    list.forEach(e => {
        if (e.length > longestLength) {
            longestLength = e.length + 4;
        }
    });
    
    str += "*".repeat(longestLength);
    
    list.forEach(e => {
        str += `
* ${e}${' '.repeat(longestLength - e.length - 3 )}*`
    });
    
    str += "\n" + "*".repeat(longestLength);
    
    return str;
}