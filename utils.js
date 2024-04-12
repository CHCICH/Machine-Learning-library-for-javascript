
const separate = (dataset,item)=>{
    let Newarr = [];
    for(let i = 0 ; i< dataset.length; i++){
        Newarr.push(dataset[i][item]);
    }
    return Newarr
}

module.exports = {separate:separate}