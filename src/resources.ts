import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

import sword from "./images/sword.png";
import logo from "./images/logo.png"
import logoVertical from "./images/logo-vertical.png"
import gamificacao from "./images/banner-asset-gamificacao.png"

import playerSpriteSheet from "./sprites/player.png"
import npcASpriteSheet from "./sprites/npca.png"
import npcBSpriteSheet from "./sprites/npcb.png"
import npcCSpriteSheet from "./sprites/npcc.png"

import ritmada from "./sounds/ritmada_zelda.mp3";
import classico from "./sounds/zelda.mp3"

import logoFast from "./images/fastmart.png"
import logoXYZ from "./images/logoxyz.png"
import logoABC from "./images/logoabcfinance.png"

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./maps/showroom_map.tmx?url"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  LogoVertical: new ImageSource(logoVertical),
  Gamificacao: new ImageSource(gamificacao),
  PlayerSpriteSheet: new ImageSource(playerSpriteSheet, {filtering: ImageFiltering.Pixel}),
  NpcASpriteSheet: new ImageSource(npcASpriteSheet, {filtering: ImageFiltering.Pixel}),
  NpcBSpriteSheet: new ImageSource(npcBSpriteSheet, {filtering: ImageFiltering.Pixel}),
  NpcCSpriteSheet: new ImageSource(npcCSpriteSheet, {filtering: ImageFiltering.Pixel}),
  RitmadaBGM: new Sound(ritmada),
  ClassicBGM: new Sound(classico),
  LogoFastMart: new ImageSource(logoFast),
  LogoXYZ: new ImageSource(logoXYZ),
  LogoABC: new ImageSource(logoABC),
  Mapa: new TiledResource(tmxMapaPath, {
	pathMap: [
		{path: "showroom_map.tmx", output: tmxMapaPath},
		{path: "Room_Builder_32x32.png", output: pngTilesetPath},
		{path: "tileset_paredes.tsx", output: tsxParedesPath},
		{path: "tileset_generic.tsx", output: tsxGenericPath},
		{path: "tileset_estoque.tsx", output: tsxEstoquePath},
		{path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath}
	]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
