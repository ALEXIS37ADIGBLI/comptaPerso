import { scale, verticalScale } from "@/utils/styling";

export const colors = {
  primary: "#6366f1",        // Indigo moderne
  primaryLight: "#818cf8",   // Indigo clair
  primaryDark: "#4f46e5",    // Indigo foncé
  text: "#ffffff",           // Texte principal blanc
  textLight: "#e5e7eb",      // Gris clair
  textLighter: "#9ca3af",    // Gris neutre plus doux
  white: "#ffffff",
  black: "#000000",
  rose: "#f43f5e",           // Accent rose moderne
  green: "#22c55e",          // Accent vert subtil (succès)
  neutral50: "#f9fafb",
  neutral100: "#f3f4f6",
  neutral200: "#e5e7eb",
  neutral300: "#d1d5db",
  neutral350: "#cbd5e1",
  neutral400: "#9ca3af",
  neutral500: "#6b7280",
  neutral600: "#4b5563",
  neutral700: "#374151",
  neutral800: "#1f2937",
  neutral900: "#111827",
};

export const spacingX = {
  _3: scale(3),
  _5: scale(5),
  _7: scale(7),
  _10: scale(10),
  _12: scale(12),
  _15: scale(15),
  _20: scale(20),
  _25: scale(25),
  _30: scale(30),
  _35: scale(35),
  _40: scale(40),
};

export const spacingY = {
  _5: verticalScale(5),
  _7: verticalScale(7),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
  _35: verticalScale(35),
  _40: verticalScale(40),
  _50: verticalScale(50),
  _60: verticalScale(60),
};

export const radius = {
  _3: verticalScale(3),
  _6: verticalScale(6),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _30: verticalScale(30),
};


