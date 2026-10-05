/* Single place for Pomera contact details. Replace the placeholders before launch. */

/* WhatsApp number in international format, digits only (no +). PLACEHOLDER. */
export const WHATSAPP_NUMBER = "919999999999";

/* PLACEHOLDER email. */
export const CONTACT_EMAIL = "hello@pomera.com";

export const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
