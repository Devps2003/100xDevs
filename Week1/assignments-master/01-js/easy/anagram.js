/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // if(str1.length!=str2.length){
  //   return false;
  // }else{
  //   for(let i=0;i<str1.length;i++){
  //     for(let j=0;j<str2.length;j++){
  //       if(str1[i]==str2[j]){
  //         str1.replace(str1[i],'0');
  //         str2.replace(str2[i],'0');
  //       }
        
  //     }
  //   }
  //   for(let i=0;i<str1.length;i++){
  //     if(str1[i]!='0'){
  //       return false;
  //     }else{
  //       for(let j=0;j<str2.length;j++){
  //         if(str2[j]!='0'){
  //           return false;
  //         }else{
  //           return true;
  //         }
  //       }
  //     }
  //   }
  // }
  let found = false;

  // for(let i=0;i<str1.length;i++){
  //   found = false;
  //   for(let j=0;j<str2.length;j++){
  //     if(str1[i]==str2[j]){
  //       found = true;
  //       str2.replace(str2[j],'0');
  //       break;
  //     }
  //     if(j=str2.length -1){
  //       if(found==false){
  //         return false;
  //       }
  //     }
  //   }
  // }
  // return true;
  let sortedstr1 = str1.toLowerCase().split('').sort().join('');
  let sortedstr2 = str2.toLowerCase().split('').sort().join('');
  return sortedstr1==sortedstr2;
}

module.exports = isAnagram;
