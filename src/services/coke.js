export const cokeStrongDegree = cokeValue => {
  const value = cokeValue;
  let pertinenceDegree = 0;
  if (value >= 50 && value < 52) pertinenceDegree = 1;
  if (value >= 52 && value <= 54) pertinenceDegree = (54 - value) / (54 - 52);
  return pertinenceDegree;
};

export const cokeWeakDegree = cokeValue => {
  const value = cokeValue;
  let pertinenceDegree = 0;
  if (value > 58 && value <= 60) pertinenceDegree = 1;
  if (value >= 56 && value <= 58) pertinenceDegree = (value - 56) / (58 - 56);
  return pertinenceDegree;
};

export const cokeSoftDegree = cokeValue => {
  const value = cokeValue;
  let pertinenceDegree = 0;
  if (value >= 52 && value <= 54) pertinenceDegree = (value - 52) / (54 - 52);
  if (value > 54 && value < 56) pertinenceDegree = 1;
  if (value >= 56 && value <= 58) pertinenceDegree = (58 - value) / (58 - 56);
  return pertinenceDegree;
};
