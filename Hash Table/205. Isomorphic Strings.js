

let isIsometric = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  if (s === t) {
    return true;
  }

  let mapS = {};
  let mapT = {};

  for(let i = 0; i < s.length; i++){
    const sLetter = s[i];
    const tLetter = t[i];

    if(!mapS[sLetter]) mapS[sLetter] = tLetter;
    if(!mapT[tLetter]) mapT[tLetter] = sLetter;
    
    console.log("mapS", mapS[sLetter], sLetter, tLetter)
    console.log("mapT", mapT[tLetter], tLetter, sLetter)

    if(mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false
  }

  return true
};


console.log(isIsometric("foo", "bab"))  
//at last b the Tmap won't be update!