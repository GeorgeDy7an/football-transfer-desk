(() => {
  "use strict";
  const rules = window.ShowcaseNegotiation;
  const byId = id => document.getElementById(id);
  const copy = {
    zh: { heading:"合同谈判台", brief:"为 20 岁的中场林安挑一份合同。高薪、出场时间和合同长度各有取舍。", legend:"选择俱乐部报价", clubs:["北岸竞技","橡桥城","港湾联"], roles:["替补","轮换","首发"], week:"/ 周", years:"年", minutes:"预计每场", unit:"分钟", raise:"反报价加薪（手续费 €1,500）", listed:"按原价接受", submit:"确认报价", reset:"重新开始", budget:"剩余预算", waiting:"选一份报价，再决定是否反谈。", accepted:"俱乐部接受了报价。合同周薪", declined:"俱乐部拒绝了反报价。谈判费用", note:"作品集演示：使用虚构球员、俱乐部和简化规则，不含正式版系统。" },
    en: { heading:"The negotiation desk", brief:"Find a contract for Lin An, a 20-year-old midfielder. Weigh wages, minutes and contract length.", legend:"Choose a club offer", clubs:["Northshore Athletic","Oakbridge City","Harbour United"], roles:["Substitute","Rotation","Starter"], week:"/ week", years:"years", minutes:"Projected", unit:"min per match", raise:"Counteroffer raise (€1,500 fee)", listed:"Accept listed terms", submit:"Confirm offer", reset:"Start over", budget:"Budget", waiting:"Choose an offer, then decide whether to counter.", accepted:"The club accepted. Weekly wage:", declined:"The club rejected the counteroffer. Negotiation fee:", note:"Portfolio demo with fictional players, clubs and simplified rules." }
  };
  let language = "zh", state = rules.initial(), selected = 1;
  const money = n => "€" + n.toLocaleString("en-GB");
  function render() {
    const c = copy[language];
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = c.heading + " · Transfer Desk";
    byId("lang").textContent = language === "en" ? "中文" : "English";
    byId("lang").lang = language === "en" ? "zh-CN" : "en";
    for (const id of ["heading","brief","legend","submit","reset","note"]) byId(id).textContent = c[id];
    byId("raise-label").textContent = c.raise;
    byId("raise").options[0].textContent = c.listed;
    byId("budget").textContent = c.budget + ": " + money(state.budget);
    byId("offers").replaceChildren(...rules.offers.map((offer, i) => {
      const label = document.createElement("label");
      label.className = "offer";
      const radio = document.createElement("input");
      Object.assign(radio, { type:"radio", name:"club", value:i, checked:i === selected, disabled:!!state.result });
      radio.addEventListener("change", () => { selected = i; });
      const title = document.createElement("strong");
      title.textContent = c.clubs[i];
      const wage = document.createElement("p");
      wage.textContent = money(offer.wage) + " " + c.week + " · " + offer.years + " " + c.years;
      const terms = document.createElement("p");
      terms.className = "terms";
      terms.textContent = c.roles[i] + " · " + c.minutes + " " + offer.minutes + " " + c.unit;
      label.append(radio, " ", title, wage, terms);
      return label;
    }));
    byId("submit").disabled = byId("raise").disabled = !!state.result;
    byId("result").textContent = state.result
      ? (state.result.accepted ? c.accepted + " " + money(state.result.wage) : c.declined + " " + money(state.result.fee))
      : c.waiting;
  }
  byId("lang").addEventListener("click", () => { language = language === "en" ? "zh" : "en"; render(); });
  byId("reset").addEventListener("click", () => { state = rules.initial(); selected = 1; byId("raise").value = "0"; render(); });
  byId("desk").addEventListener("submit", e => { e.preventDefault(); state = rules.decide(state, selected, Number(byId("raise").value)); render(); byId("reset").focus(); });
  render();
})();
