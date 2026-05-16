export const CONTACT = {
  whatsappNumber: "+918002858802",
  whatsappDisplay: "+91 80028 58802",
  instagram: "twinstack",
  email: "[EMAIL_ADDRESS]",
};

export const waLink = (msg = "Hi TwinStack — I saw your site and would like to chat!") =>
  `https://wa.me/${CONTACT.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
