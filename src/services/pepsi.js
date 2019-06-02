export const pepsiStrongDegree = pepsiValue => {
  const value = pepsiValue;
  let pertinenceDegree = 0;
  if (value >= 60 && value < 62) pertinenceDegree = 1;
  if (value >= 62 && value <= 64) pertinenceDegree = (64 - value) / (64 - 62);
  return pertinenceDegree;
};

export const pepsiWeakDegree = pepsiValue => {
  const value = pepsiValue;
  let pertinenceDegree = 0;
  if (value >= 66 && value <= 68) pertinenceDegree = (value - 66) / (68 - 66);
  if (value > 68 && value <= 70) pertinenceDegree = 1;
  return pertinenceDegree;
};

export const pepsiSoftDegree = pepsiValue => {
  const value = pepsiValue;
  let pertinenceDegree = 0;
  if (value >= 62 && value <= 64) pertinenceDegree = (value - 62) / (64 - 62);
  if (value > 64 && value < 66) pertinenceDegree = 1;
  if (value >= 66 && value <= 68) pertinenceDegree = (68 - value) / (68 - 66);
  return pertinenceDegree;
};
