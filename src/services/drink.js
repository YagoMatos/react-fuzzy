const maxBetweenDregree = (a, b, c) => {
  return Math.max(a, Math.max(b, c));
};

const minBetweenDregree = (a, b, c) => {
  return Math.min(a, Math.min(b, c));
};

export const drinkValue = (soft, weak, strong) => {
  // eslint-disable-next-line no-unused-vars
  let value = 0;

  // if all are the same
  if (soft === strong && strong === weak && strong !== 0) {
    return (value = '25,00'); //palate: 'Forte'};
  }

  // check some palate is the same
  if (soft === weak && weak !== 0) {
    return (value = '20,00'); //palate: 'Suave'};
  }

  if (strong === weak && weak !== 0) {
    return (value = '25,00'); //palate: 'Forte'};
  }

  if (strong === soft && soft !== 0) {
    return (value = '25,00'); //palate: 'Forte'};
  }

  const drinkPertinence = maxBetweenDregree(soft, weak, strong);

  // individual tests
  if (weak === drinkPertinence && drinkPertinence !== 0) {
    return (value = '15,00'); //palate: 'Fraco' };
  }
  if (soft === drinkPertinence && drinkPertinence !== 0) {
    return (value = '20,00'); //palate: 'Suave'};
  }
  if (strong === drinkPertinence && drinkPertinence !== 0) {
    return (value = '25,00'); //palate: 'Forte'};
  }

  // if is not cuba livre
  return (value = '30,00');
};

export const drinkPalate = (
  soft,
  weak,
  strong,
  iceQtd,
  runQtd,
  softQtd,
  softName
) => {
  // eslint-disable-next-line no-unused-vars
  let palate = 0;

  // if all are the same
  if (soft === strong && strong === weak && strong !== 0) {
    return (palate = 'Paladar do Drink: Forte');
  }

  // check some pertinence  if is the same
  if (soft === weak && weak !== 0) {
    return (palate = 'Paladar do Drink: Suave');
  }
  if (strong === weak && weak !== 0) {
    return (palate = 'Paladar do Drink: Forte');
  }
  if (strong === soft && soft !== 0) {
    return (palate = 'Paladar do Drink: Forte');
  }

  const drinkPertinence = maxBetweenDregree(soft, weak, strong);

  // individual tests
  if (weak === drinkPertinence && drinkPertinence !== 0) {
    return (palate = 'Paladar do Drink: Fraco'); //palate: 'Fraco' };
  }
  if (soft === drinkPertinence && drinkPertinence !== 0) {
    return (palate = 'Paladar do Drink: Suave'); //palate: 'Suave'};
  }
  if (strong === drinkPertinence && drinkPertinence !== 0) {
    return (palate = 'Paladar do Drink: Forte'); //palate: 'Forte'};
  }

  // if is not cuba livre
  return notDrink(soft, weak, strong, iceQtd, runQtd, softQtd, softName);
};

const notDrink = (soft, weak, strong, iceQtd, runQtd, softQtd, softName) => {
  const resume = 'Não é Cuba Livre! Devido as quantidades inadequadas de: ';
  let qtd = {
    run: '',
    ice: '',
    soft: '',
  };

  if (strong === 0 && weak === 0 && soft === 0) {
    if (iceQtd < 20 || iceQtd > 20) {
      qtd.ice = '- Gelo: Deve possuir 20 ml -';
    }
    if (runQtd < 10 || runQtd > 30) {
      qtd.run = ' Run: Deve possuir entre 10ml e 30ml -';
    }
    if (softName === 'coke') {
      if (softQtd < 50 || softQtd > 60) {
        qtd.soft = ' Coca-Cola: Deve possuir entre 50ml e 60ml';
      }
    }
    if (softName === 'pepsi') {
      if (softQtd < 60 || softQtd > 70) {
        qtd.soft = ' Pespi: Deve possuir entre 60ml e 70ml';
      }
    }
  }
  return resume + qtd.ice + qtd.run + qtd.soft;
};

export const drinkStrongDegree = (run, ice, softDrink) => {
  const degreeA = minBetweenDregree(ice.pertinence, softDrink.strong, run.soft);
  const degreeB = minBetweenDregree(
    ice.pertinence,
    softDrink.strong,
    run.strong
  );
  const degreeC = minBetweenDregree(ice.pertinence, softDrink.soft, run.strong);
  const degree = maxBetweenDregree(degreeA, degreeB, degreeC);
  return degree;
};

export const drinkWeakDegree = (run, ice, softDrink) => {
  const degreeA = minBetweenDregree(ice.pertinence, softDrink.weak, run.weak);
  const degreeB = minBetweenDregree(ice.pertinence, softDrink.weak, run.soft);
  const degreeC = minBetweenDregree(ice.pertinence, softDrink.soft, run.weak);
  const degree = maxBetweenDregree(degreeA, degreeB, degreeC);
  return degree;
};

export const drinkSoftDegree = (run, ice, softDrink) => {
  const degreeA = minBetweenDregree(ice.pertinence, softDrink.strong, run.weak);
  const degreeB = minBetweenDregree(ice.pertinence, softDrink.soft, run.soft);
  const degreeC = minBetweenDregree(ice.pertinence, softDrink.weak, run.strong);
  const degree = maxBetweenDregree(degreeA, degreeB, degreeC);
  return degree;
};
