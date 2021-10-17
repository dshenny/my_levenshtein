function my_levenshtein(s1 , s2) {
    count = 0

    for (index = 0; index < s1.length && index < s2.length; index++) {       
        if (s1.length == s2.length) {
            if (!s1[index].includes(s2[index])) {
                count++;
            }                                                                     
        }
        else {
           return -1
        }           
    }
    return count; 
     
    
}

// console.log(my_levenshtein("ACCAGGG" , "ACTATGG"))
// console.log(my_levenshtein("GGACTGA" , "GGACTGA"))
// console.log(my_levenshtein("GGACGGATTCTG" , "AGG"))







// if (s1.length === s2.length) {
//     for
// }