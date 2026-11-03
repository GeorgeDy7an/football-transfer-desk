// Original showcase example. These are fictional demo offers and rules.
(function (root) {
  "use strict";
  const offers = Object.freeze([
    Object.freeze({ wage: 12000, years: 4, minutes: 35, limit: 13000 }),
    Object.freeze({ wage: 9500, years: 3, minutes: 76, limit: 11200 }),
    Object.freeze({ wage: 7800, years: 2, minutes: 89, limit: 8800 })
  ]);
  const initial = () => ({ budget: 3000, result: null });
  function decide(state, index, raise = 0) {
    if (state.result) return state;
    const offer = offers[index];
    if (!offer || ![0, 1000, 2000].includes(raise)) throw new RangeError("Invalid offer or raise");
    const fee = raise ? 1500 : 0;
    if (state.budget < fee) throw new RangeError("Not enough budget");
    const wage = offer.wage + raise;
    return { budget: state.budget - fee, result: {
      accepted: wage <= offer.limit, wage, index, fee, years: offer.years
    } };
  }
  const api = Object.freeze({ offers, initial, decide });
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.ShowcaseNegotiation = api;
})(globalThis);
