function newPascalCaseSplitter(str){
 newArr = [];
 let idx =0;
 for (let i = 1; i<str.length; i++){
    if (str[i]===str[i].toUpperCase()){
        let newWord = str.slice(idx, i);
        newArr.push(newWord);
        idx = i;
    }
 }
 newArr.push(str.slice(idx));
    console.log(newArr.join(`; `));
}
newPascalCaseSplitter(`SplitMeIfYouCanHaHaYouCantOrYouCan`);
