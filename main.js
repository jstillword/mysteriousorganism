/ Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}



const pAequorFactory = (specimenNum, dnaArray) => {
 
 const bacteria = {
   specimenNum: specimenNum,
   dnaArray: dnaArray,
   mutate() {
     const num = [Math.floor(Math.random() * 15)]
     const base = returnRandBase()
     while(this.dnaArray[num]===base)
   {
     base= returnRandBase()
   }
   this.dnaArray[num]=base
   },
   compareDNA(otherBacteria) {
     let count= 0
     for (let i = 0; i < 15; i += 1) {
       if (this.dnaArray[i] === otherBacteria.dnaArray[i]) {
         count+=1
       }
   }
   const fraction = count / 15
   console.log('specimen #'+ this.specimenNum+ 'and specimen #' + otherBacteria.specimenNum + ' have '+ fraction + '% DNA in common')
 },
  willLikelySurvive(){
   let count= 0
   for (let i= 0; i < 15; i +=1) {
     if (this.dnaArray[i] == 'G' || this.dnaArray[i] == 'C') {
       count +=1
     }
   }
   let fraction = count / 15
   if (fraction >= .6){
     return true
   } else {
     return false
   }
  }
 }
  return bacteria

}


const goodBacteria = []

 while (goodBacteria.length < 30) {
  let strand = mockUpStrand();
   let specimenNumber = goodBacteria.length + 1;
   let Bacteria = pAequorFactory(specimenNumber, strand);
  if (Bacteria.willLikelySurvive) {
    goodBacteria.push(Bacteria);
  }
}



console.log(goodBacteria)




