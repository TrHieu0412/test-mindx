function alternatingSums(a) {
    const team1 = [];
    const team2 = [];
  
    for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) {
        team1.push(weights[i]);
      } else {
        team2.push(weights[i]);
      }
    }
    console.log("Đội 1",team1)
    console.log("Đội 2",team2)
    const sumTeam1 = team1.reduce((a, b) => a + b, 0);
    const sumTeam2 = team2.reduce((a, b) => a + b, 0);
    return [sumTeam1, sumTeam2];
  }
  
  const weights = [10, 2, 3, 4, 5, 6];
  const teamWeights = alternatingSums(weights);
  console.log("Tổng cân nặng của 2 đội:", teamWeights); 