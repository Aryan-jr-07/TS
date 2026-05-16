export const CONTACT = {
  whatsappNumber: "+919999999999",
  whatsappDisplay: "+91 99999 99999",
  instagram: "aryanandteam",
  email: "hello@aryanandteam.in",
};

export const waLink = (msg = "Hi Aryan & Team — I saw your site and would like to chat!") =>
  `https://wa.me/${CONTACT.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
