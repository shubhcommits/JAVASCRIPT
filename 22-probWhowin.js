function calcAverage(score1,score2,score3){
    const total=score1+score2+score3;
    return total/3;
}
const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(2,10,49);
function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins>2*avgKoalas){
        console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(2*avgDolphins<=avgKoalas){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins,scoreKoalas);