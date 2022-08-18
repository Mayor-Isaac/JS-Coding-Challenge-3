const dumebiFirstScore = 96;
const dumebiSecondScore = 108;
const dumebiThirdScore = 89;
const dumebiAverageScore = (dumebiFirstScore + dumebiSecondScore + dumebiThirdScore) / 3;
console.log(dumebiAverageScore, "Dumebi")
const ciromaFirstScore = 88;
const ciromaSecondScore = 91;
const ciromaThirdScore = 110;
const ciromaAverageScore = (ciromaFirstScore + ciromaSecondScore + ciromaThirdScore) / 3;
console.log(ciromaAverageScore, "Ciroma")
if (ciromaAverageScore>dumebiAverageScore) {
        console.log(`Hurray! Team Ciroma won with an average score of ${ciromaAverageScore}`)
} else if(ciromaAverageScore<dumebiAverageScore) {
        console.log(`Hurray! Team Dumebi won with an average score of ${dumebiAverageScore}`)
}else{
        console.log(`Oh! Both teams' average score is ${dumebiAverageScore},It's a draw`)
}

// BONUS 1
const dumebiFirstScoreB1 = 97;
const dumebiSecondScoreB1 = 112;
const dumebiThirdScoreB1 = 101;
const dumebiAverageScoreB1 =
  (dumebiFirstScoreB1 + dumebiSecondScoreB1 + dumebiThirdScoreB1) / 3;
console.log(dumebiAverageScoreB1, "Dumebi's average score for Bonus 1");
const ciromaFirstScoreB1 = 109;
const ciromaSecondScoreB1 = 95;
const ciromaThirdScoreB1 = 123;
const ciromaAverageScoreB1 =
  (ciromaFirstScoreB1 + ciromaSecondScoreB1 + ciromaThirdScoreB1) / 3;
console.log(ciromaAverageScoreB1, "Ciroma's average score for Bonus 1");
if (ciromaAverageScoreB1 > dumebiAverageScoreB1 && ciromaAverageScoreB1 >=100) {
  console.log(`Hurray! Team Ciroma won with an average score of ${ciromaAverageScoreB1}`);
} else if (dumebiAverageScoreB1 > ciromaAverageScoreB1 && dumebiAverageScoreB1 >= 100) {
  console.log(`Hurray! Team Dumebi won with an average score of ${dumebiAverageScoreB1}`);
} else {
  console.log(`Oh! Both teams' average score is ${ciromaAverageScoreB1},It's a draw`);
}

//BONUS 2
const dumebiFirstScoreB2 = 97;
const dumebiSecondScoreB2 = 112;
const dumebiThirdScoreB2 = 101;
const dumebiAverageScoreB2 =
  (dumebiFirstScoreB2 + dumebiSecondScoreB2 + dumebiThirdScoreB2) / 3;
console.log(dumebiAverageScoreB2, "Dumebi's average score for Bonus 2");
const ciromaFirstScoreB2 = 109;
const ciromaSecondScoreB2 = 95;
const ciromaThirdScoreB2 = 106;
const ciromaAverageScoreB2 =
  (ciromaFirstScoreB2 + ciromaSecondScoreB2 + ciromaThirdScoreB2) / 3;
console.log(ciromaAverageScoreB2, "Ciroma's average score for Bonus 2");
if (ciromaAverageScoreB2 > dumebiAverageScoreB2 && ciromaAverageScoreB2 >= 100) {
  console.log(`Hurray! Team Ciroma won with an average score of ${ciromaAverageScoreB2}`);
} else if (
  dumebiAverageScoreB2 > ciromaAverageScoreB2 &&
  dumebiAverageScoreB2 >= 100
) {
  console.log(`Hurray! Team Dumebi won with an average score of ${ciromaAverageScoreB2}`);
} else if (dumebiAverageScoreB2 >= 100 && dumebiAverageScoreB2 >= 100) {
  console.log(`Oh! Both teams' average score is ${dumebiAverageScoreB2}, It's a draw`);
} else {
  console.log("No team wins the trophy");
}