interface Colors {
  base: string
  word: string
  primary: string
  secondary: string
  tertiary: string
}

export const colorForest: Colors = {
  base: 'rgb(70,60,60)',
  word: 'rgb(255,255,255)',
  primary: 'rgb(190,190,80)',
  secondary: 'rgb(170,160,120)',
  tertiary: 'rgb(90,90,30)'
}

export const colorSnow: Colors = {
  base: 'rgb(240,240,240)',
  word: 'rgb(40,40,40)',
  primary: 'rgb(180,220,230)',
  secondary: 'rgb(170,180,190)',
  tertiary: 'rgb(70,70,80)'
}

export const colorKurenai: Colors = {
  base: 'rgb(110,90,90)',
  word: 'rgb(255,255,255)',
  primary: 'rgb(220,130,150)',
  secondary: 'rgb(230,280,290)',
  tertiary: 'rgb(180,150,150)'
}

export const colorSakura: Colors = {
  base: 'rgb(230,220,220)',
  word: 'rgb(30,20,30)',
  primary: 'rgb(110,100,130)',
  secondary: 'rgb(220,130,150)',
  tertiary: 'rgb(230,190,190)'
}

export function colors(
  theme: 'forest' | 'snow' | 'kurenai' | 'sakura'
): Colors {
  switch (theme) {
    case 'forest':
      return colorForest
    case 'snow':
      return colorSnow
    case 'kurenai':
      return colorKurenai
    case 'sakura':
      return colorSakura
  }
}
