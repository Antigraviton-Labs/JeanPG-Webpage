export type NoteLevel = 'high' | 'medium' | 'low';

export interface NoteEntry {
  label: string;
  value: string;
  level: NoteLevel;
}

export interface Fragrance {
  id: string;
  name: string;
  tagline: string;
  quickNotes: NoteEntry[];
  fullNotes: { category: string; notes: NoteEntry[] }[];
}

export const fragrances: Fragrance[] = [
  {
    id: 'classique',
    name: 'CLASSIQUE',
    tagline: 'TIMELESS FEMININITY REDEFINED',
    quickNotes: [
      { label: 'HIGH', value: 'ROSE, RICE POWDER', level: 'high' },
      { label: 'MEDIUM', value: 'ORANGE BLOSSOM, GINGER', level: 'medium' },
      { label: 'LOW', value: 'VANILLA, MUSK', level: 'low' },
      { label: 'SIZE', value: '50ML / 100ML', level: 'high' },
      { label: 'CONCENTRATION', value: 'EAU DE PARFUM', level: 'medium' },
      { label: 'ORIGIN', value: 'FRANCE', level: 'low' },
    ],
    fullNotes: [
      {
        category: 'HIGH NOTES',
        notes: [
          { label: 'Rose', value: '', level: 'high' },
          { label: 'Rice Powder', value: '', level: 'high' },
          { label: 'Pear Blossom', value: '', level: 'high' },
          { label: 'Bergamot', value: '', level: 'high' },
        ],
      },
      {
        category: 'MEDIUM NOTES',
        notes: [
          { label: 'Orange Blossom', value: '', level: 'medium' },
          { label: 'Ginger', value: '', level: 'medium' },
          { label: 'Iris', value: '', level: 'medium' },
          { label: 'Tuberose', value: '', level: 'medium' },
        ],
      },
      {
        category: 'LOW NOTES',
        notes: [
          { label: 'Vanilla', value: '', level: 'low' },
          { label: 'Musk', value: '', level: 'low' },
          { label: 'Amber', value: '', level: 'low' },
          { label: 'Sandalwood', value: '', level: 'low' },
          { label: 'Cedar', value: '', level: 'low' },
        ],
      },
      {
        category: 'CONCENTRATION & FORMAT',
        notes: [
          { label: 'Eau de Parfum', value: '', level: 'medium' },
          { label: '50ml / 100ml / 200ml', value: '', level: 'medium' },
          { label: 'Corset bottle', value: '', level: 'medium' },
        ],
      },
      {
        category: 'CRAFTSMANSHIP',
        notes: [
          { label: 'Hand-filled in France', value: '', level: 'high' },
          { label: '72-hour maceration', value: '', level: 'high' },
          { label: 'Natural ingredient sourcing', value: '', level: 'high' },
        ],
      },
    ],
  },
  {
    id: 'le-male',
    name: 'LE MÂLE',
    tagline: 'BOLD MASCULINITY UNLEASHED',
    quickNotes: [
      { label: 'HIGH', value: 'LAVENDER, MINT', level: 'high' },
      { label: 'MEDIUM', value: 'CINNAMON, CUMIN', level: 'medium' },
      { label: 'LOW', value: 'VANILLA, TONKA BEAN', level: 'low' },
      { label: 'SIZE', value: '75ML / 125ML', level: 'high' },
      { label: 'CONCENTRATION', value: 'EAU DE TOILETTE INTENSE', level: 'medium' },
      { label: 'ORIGIN', value: 'FRANCE', level: 'low' },
    ],
    fullNotes: [
      {
        category: 'HIGH NOTES',
        notes: [
          { label: 'Lavender', value: '', level: 'high' },
          { label: 'Mint', value: '', level: 'high' },
          { label: 'Bergamot', value: '', level: 'high' },
          { label: 'Cardamom', value: '', level: 'high' },
        ],
      },
      {
        category: 'MEDIUM NOTES',
        notes: [
          { label: 'Cinnamon', value: '', level: 'medium' },
          { label: 'Cumin', value: '', level: 'medium' },
          { label: 'Orange Blossom', value: '', level: 'medium' },
        ],
      },
      {
        category: 'LOW NOTES',
        notes: [
          { label: 'Vanilla', value: '', level: 'low' },
          { label: 'Tonka Bean', value: '', level: 'low' },
          { label: 'Amber', value: '', level: 'low' },
          { label: 'Cedarwood', value: '', level: 'low' },
        ],
      },
      {
        category: 'CONCENTRATION & FORMAT',
        notes: [
          { label: 'Eau de Toilette Intense', value: '', level: 'medium' },
          { label: '75ml / 125ml', value: '', level: 'medium' },
          { label: 'Torso bottle', value: '', level: 'medium' },
        ],
      },
      {
        category: 'CRAFTSMANSHIP',
        notes: [
          { label: 'Hand-filled in France', value: '', level: 'high' },
          { label: '48-hour maceration', value: '', level: 'high' },
          { label: 'Natural ingredient sourcing', value: '', level: 'high' },
        ],
      },
    ],
  },
  {
    id: 'scandal',
    name: 'SCANDAL',
    tagline: 'WHERE DARING MEETS ELEGANCE',
    quickNotes: [
      { label: 'HIGH', value: 'BLOOD ORANGE, GARDENIA', level: 'high' },
      { label: 'MEDIUM', value: 'HONEY, PATCHOULI', level: 'medium' },
      { label: 'LOW', value: 'CARAMEL, CHOCOLATE', level: 'low' },
      { label: 'SIZE', value: '30ML / 80ML', level: 'high' },
      { label: 'CONCENTRATION', value: 'EAU DE PARFUM', level: 'medium' },
      { label: 'ORIGIN', value: 'FRANCE', level: 'low' },
    ],
    fullNotes: [
      {
        category: 'HIGH NOTES',
        notes: [
          { label: 'Blood Orange', value: '', level: 'high' },
          { label: 'Gardenia', value: '', level: 'high' },
          { label: 'Mandarin', value: '', level: 'high' },
        ],
      },
      {
        category: 'MEDIUM NOTES',
        notes: [
          { label: 'Honey', value: '', level: 'medium' },
          { label: 'Patchouli', value: '', level: 'medium' },
          { label: 'Jasmine', value: '', level: 'medium' },
          { label: 'Freésia', value: '', level: 'medium' },
        ],
      },
      {
        category: 'LOW NOTES',
        notes: [
          { label: 'Caramel', value: '', level: 'low' },
          { label: 'Chocolate', value: '', level: 'low' },
          { label: 'White Musk', value: '', level: 'low' },
        ],
      },
      {
        category: 'CONCENTRATION & FORMAT',
        notes: [
          { label: 'Eau de Parfum', value: '', level: 'medium' },
          { label: '30ml / 80ml', value: '', level: 'medium' },
          { label: 'Scandal legs bottle', value: '', level: 'medium' },
        ],
      },
      {
        category: 'CRAFTSMANSHIP',
        notes: [
          { label: 'Hand-filled in France', value: '', level: 'high' },
          { label: '60-hour maceration', value: '', level: 'high' },
          { label: 'Natural ingredient sourcing', value: '', level: 'high' },
        ],
      },
    ],
  },
];
