import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  if(fighter) {
    const fighterImg = createFighterImage(fighter);

    if(position === 'right') {
      fighterImg.style.transform = 'scale(-1, 1)';
    }

    const fighterDetails = createElement({tagName: 'div', className: 'fighter-preview___info'});

    fighterDetails.innerHTML = `
    <p> Fighter: ${fighter.name}</p>
    <p> Attak: ${fighter.attack}</p>
    <p> Defense: ${fighter.defense}</p>
    <p> Health: ${fighter.health}</p>  
    `;

    fighterElement.append(fighterImg, fighterDetails);
  }

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { src: source };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    title: name,
    alt: name,
    attributes,
  });

  return imgElement;
}



