export const runStrongDegree = (runValue) => {
  const value = runValue
  let pertinenceDegree = 0
  if (value >= 23 && value <= 28) pertinenceDegree = (value - 23) / (28 - 23)
  if (value > 28 && value <= 30) pertinenceDegree = 1
  return pertinenceDegree
}

export const runWeakDegree = (runValue) => {
  const value = runValue
  let pertinenceDegree = 0
  if (value >= 10 && value <= 15) pertinenceDegree = 1
  if (value > 15 && value <= 20) pertinenceDegree = (20 - value) / (20 - 15)
  return pertinenceDegree
}

export const runSoftDegree = (runValue) => {
  const value = runValue
  let pertinenceDegree = 0
  if (value >= 15 && value <= 20) pertinenceDegree = (value - 15) / (20 - 15)
  if (value > 20 && value < 25) pertinenceDegree = 1
  if (value >= 25 && value <= 27) pertinenceDegree = (27 - value) / (27 - 25)
  return pertinenceDegree
}
