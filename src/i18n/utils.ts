import { ui } from "./ui";

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");

  if (lang === "en" || lang === "es") {
    return lang;
  }

  return "es";
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui["es"]) {
    return ui[lang][key] || ui.es[key];
  };
}

export function getOppositeLang(lang: Lang) {
  return lang === "es" ? "en" : "es";
}
