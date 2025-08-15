import type { Locale } from "./locales";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("./dictionaries/en.json")).default;
    case "ru":
      return (await import("./dictionaries/ru.json")).default;
    default:
      return (await import("./dictionaries/tr.json")).default;
  }
}


