export interface Fraction {
  r?: number;
  g?: number;
  b?: number;
  h?: number;
  s?: number;
  l?: number;
  v?: number;
  c?: number;
  m?: number;
  y?: number;
  k?: number;
  X?: number;
  Y?: number;
  Z?: number;
}

export interface Hex {
  value: string;
  clean: string;
}

export interface RGB {
  fraction: Fraction;
  r: number;
  g: number;
  b: number;
  value: string;
}

export interface HSL {
  fraction: Fraction;
  h: number;
  s: number;
  l: number;
  value: string;
}

export interface HSV {
  fraction: Fraction;
  h: number;
  s: number;
  v: number;
  value: string;
}

export interface CMYK {
  fraction: Fraction;
  c: number;
  m: number;
  y: number;
  k: number;
  value: string;
}

export interface XYZ {
  fraction: Fraction;
  X: number;
  Y: number;
  Z: number;
  value: string;
}

export interface Name {
  value: string;
  closest_named_hex: string;
  exact_match_name: boolean;
  distance: number;
}

export interface Image {
  bare: string;
  named: string;
}

export interface Contrast {
  value: string;
}

export interface Links {
  self: {
    href: string;
  };
}

export interface Color {
  hex: Hex;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  cmyk: CMYK;
  XYZ: XYZ;
  name: Name;
  image: Image;
  contrast: Contrast;
  _links: Links;
  _embedded: object;
}

export interface Seed {
  hex: Hex;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  name: Name;
  cmyk: CMYK;
  XYZ: XYZ;
  image: Image;
  contrast: Contrast;
  _links: Links;
  _embedded: object;
}

export interface ImageLinks {
  bare: string;
  named: string;
}

export interface SchemeLinks {
  self: string;
  schemes: {
    monochrome: string;
    "monochrome-dark": string;
    "monochrome-light": string;
    analogic: string;
    complement: string;
    "analogic-complement": string;
    triad: string;
    quad: string;
  };
}

export interface ColorResponse {
  mode: string;
  count: string;
  colors: Color[];
  seed: Seed;
  image: ImageLinks;
  _links: SchemeLinks;
  _embedded: object;
}
