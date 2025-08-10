// Theme toggle
const modeBtn = document.getElementById('modeBtn');
modeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('theme', isLight?'light':'dark');
});
(function initTheme(){
  const saved = localStorage.getItem('theme');
  if(saved==='light'){ document.body.classList.add('light'); }
})();

// Build mobile flow from desktop nodes
(function buildMobileFlow(){
  const mobile = document.getElementById('flowMobile');
  const nodes = document.querySelectorAll('.flow-desktop .node');
  nodes.forEach((n, i)=>{
    const holder = document.createElement('div');
    holder.className = 'm-holder';
    const num = document.createElement('div'); num.className='num'; num.textContent = (i+1);
    const clone = n.cloneNode(true);
    holder.appendChild(num); holder.appendChild(clone);
    mobile.appendChild(holder);
  });
})();

// i18n
const dict = {
  th: {
    badge:"📊 แผนภาพข้อมูล | อัปเดตล่าสุด",
    hero_title:"XRP Macro Infographic Web",
    hero_sub:"KPI • Catalysts • Money Flow Map • Timeline • Laws/Infra • Prophecies • Checklist • Calculator",
    cta_flow:"ดู Money Flow Map", cta_timeline:"ไปที่ไทม์ไลน์", cta_calc:"เครื่องคิดเลขพอร์ต",
    kpi_price_tag:"ราคาอ้างอิง ณ จุดเริ่ม", kpi_price_note:"ผู้ใช้แจ้งราคาปัจจุบัน",
    chip_vol:"ความผันผวนสูง", chip_notadvice:"ไม่ใช่คำแนะนำ", kpi_case:"สถานะคดี SEC–Ripple",
    kpi_case_val:"ยุติในทางปฏิบัติ", kpi_case_note:"ความเสี่ยงกฎหมายลดลง", chip_pricedin:"ตลาดรับรู้",
    kpi_inst:"โครงสร้างสถาบัน", kpi_inst_val:"ETF ต่างประเทศ/401(k)", kpi_inst_note:"US ETF: รอติดตาม",
    chip_inflow:"เม็ดเงินสถาบัน", chip_law2025:"นโยบายปี 2025",
    cat_head:"ตัวเร่งหลัก (Catalysts)",
    cat_laws:"กฎหมาย: GENIUS/Clarity/Anti-CBDC",
    cat_etf:"ETF นอกสหรัฐฯ + ช่องทาง 401(k)",
    cat_swift:"SWIFT trials / Rails / CBDC",
    cat_rwa:"Tokenized RWA (พันธบัตร/ทอง/หุ้น/อสังหา)",
    cat_reserve:"XRP Reserve → ซัพพลายหมุนเวียนตึง",
    cat_note:"โปรดตรวจสอบรายละเอียดเชิงเทคนิคจากแหล่งอัปเดตก่อนตัดสินใจ",
    sig_head:"สัญญาณตลาดที่ต้อง “มากับข่าว”",
    sig_btc:"BTC.D ลงชัด",
    sig_total:"TOTAL ทำ ATH",
    sig_eth:"ETH ทำ ATH → จุดปล่อย Altseason",
    chip_altseason:"Altseason", chip_institutions:"สถาบัน", chip_utility:"ยูทิลิตี้จริง",
    flow_head:"Money Flow Map: ข่าว → ยูทิลิตี้ → ราคา",
    p1_tag:"กฎหมาย/กองทุน", p1_title:"คดีจบ • ETF • 401(k)",
    p1_l1:"ความเสี่ยงกฎหมายลดลง → Gate เปิด",
    p1_l2:"ETF นอกสหรัฐฯ, ช่องทาง 401(k), ผู้ดูแลสถาบัน",
    p1_l3:"นโยบาย 2025: Stablecoin/Clarity/Anti-CBDC",
    p1_impact:"ผลกระทบ: เม็ดเงินสถาบันเริ่มไหลเข้า, ความเชื่อมั่นสูงขึ้น",
    p2_tag:"ระบบการเงิน", p2_title:"SWIFT • Rails • CBDC",
    p2_l1:"SWIFT pilots → production corridors",
    p2_l2:"ISO 20022 / Interop ระหว่างเครือข่าย",
    p2_l3:"Stablecoin/CBDC ใช้เป็นสภาพคล่องคู่",
    p2_impact:"ผลกระทบ: การชำระเงินข้ามพรมแดน T+0/ค่าต่ำ, ปริมาณธุรกรรมจริงเพิ่ม",
    p3_tag:"โทเคไนซ์สินทรัพย์", p3_title:"Tokenized RWA/พันธบัตร",
    p3_l1:"Treasuries/พันธบัตร/กองทุนตลาดเงิน on-chain",
    p3_l2:"T+0 Settlement, ใช้เป็นคอลแลเทอรัล",
    p3_l3:"ต้องมี “สินทรัพย์สะพาน” สำหรับโฟลว์ข้ามเครือข่าย",
    p3_impact:"ผลกระทบ: มูลค่า on-chain มหาศาล → ดีมานด์ด้านสภาพคล่องและ Bridge สูงขึ้น",
    p4_tag:"ซัพพลาย", p4_title:"XRP Reserve/Locked",
    p4_l1:"Base/Owner Reserve ล็อก XRP เมื่อบัญชี/อ็อบเจ็กต์เพิ่ม",
    p4_l2:"การถือเชิงสถาบัน/ค้ำสัญญาชำระลดเหรียญหมุนเวียน",
    p4_l3:"เกิดภาวะตึงตัวบนออร์เดอร์บุ๊ก",
    p4_impact:"ผลกระทบ: Supply shock + ดีมานด์โครงสร้าง → การ “รีเรต” ราคาเป็นขั้น",
    flow_sum:"สรุป: ข่าวเชิงบวก → โครงสร้างใช้งานจริง → โทเคไนซ์สินทรัพย์ → ซัพพลายตึง = มีโอกาสรีเรตราคาเป็นขั้น",
    tl_head:"ไทม์ไลน์เหตุการณ์ & ช่วงราคาประมาณ",
    tl_2025:"2025 • Q3–Q4", tl_2025_price:"$4–$5", tl_base:"ฐาน: $3", tl_2025_note:"คดีจบ • ETF ต่างประเทศ • 401(k) • โมเมนตัมจิตวิทยา",
    tl_2026_price:"$6–$8", tl_2026_note:"สถาบันจัดสรรพอร์ต • SWIFT ขยาย • เงื่อนไข Altseason",
    tl_2027_price:"$10–$15", tl_2027_note:"Tokenized RWA ใช้งานจริง • โฟลว์ข้ามเชน/ประเทศ",
    tl_2028_price:"$20–$30", tl_2028_note:"Supply shock จากการล็อก/ถือเชิงสถาบัน",
    tl_2030_price:"$50–$100+", tl_2030_note:"รีเซ็ตระบบ/วิกฤติหนี้ → บทบาท bridge asset สูงขึ้น",
    tl_2031_price:"$1,000–$10,000 (Revaluation)", tl_2031_note:"กรณีกำหนดราคาใหม่ระดับโลก/สินทรัพย์สำรอง",
    tl_note:"ช่วงราคาเป็นภาพจำลองเพื่อทำความเข้าใจ ไม่ใช่คำพยากรณ์",
    law_head:"กฎหมาย/นโยบาย 2025 (ไฮไลต์)",
    law1:"GENIUS Act — กำกับ Stablecoin",
    law2:"Clarity Act — ความชัดเจนกำกับสินทรัพย์ดิจิทัล",
    law3:"Anti-CBDC — จำกัด/ห้าม CBDC ของเฟด",
    law4:"401(k) — เปิดทางลงทุนคริปโต",
    law_sum:"ผลรวม: ลดความไม่แน่นอน + เพิ่มช่องทางเงินสถาบัน",
    infra_head:"โครงสร้างการเงิน & การใช้งานจริง",
    infra1:"SWIFT trials → เชื่อมสินทรัพย์ดิจิทัล",
    infra2:"Rails (RippleNet/Liquidity Hub)",
    infra3:"CBDC/Stablecoin (เช่น RLUSD)",
    infra4:"Tokenized RWA/พันธบัตร",
    infra5:"XRP Reserve (Base/Owner reserve)",
    prop_head:"คำทำนาย & ใบเซียมซี",
    prop1:"“ชนะคู่ความ” • “จะได้คืนเพิ่ม”",
    prop2:"กรอบเวลา “อีกไม่นาน” ~ 1–5 ปี (เชิงสัญลักษณ์)",
    prop_role:"บทบาท: เสริมความเชื่อมั่นระหว่างรอเหตุการณ์จริงเชื่อมกัน",
    giss_head:"คำทำนาย Brandon Briggs (Badon Giss)",
    giss_desc:"ชี้การเปลี่ยนแปลงระดับระบบ “อีกไม่นาน” (ไม่ได้ระบุวันเวลา)",
    giss_c1:"สอดคล้อง: รีเซ็ตระบบ",
    giss_c2:"สอดคล้อง: Revaluation",
    check_head:"เช็กลิสต์สัญญาณ",
    check1:"US Spot XRP ETF\nยื่น/ไฟเขียว/เงินไหลเข้า",
    check2:"SWIFT → Production\nจากทดลองสู่ใช้งานจริง",
    check3:"Tokenized Bonds/RWA\nใช้ rail ที่รองรับ XRP",
    check4:"On-chain XRPL\nบัญชี/อ็อบเจ็กต์โต",
    calc_head:"เครื่องคิดเลขพอร์ต",
    calc_qty_label:"จำนวน XRP",
    calc_target_label:"ราคาเป้าหมาย (USD/XRP)",
    calc_fx_label:"อัตราแลกเปลี่ยน (บาท/ดอลลาร์)",
    calc_btn:"คำนวณ",
    calc_note:"*เป็นการคูณเลข ไม่รวมค่าธรรมเนียม/ภาษี/สลิพเพจ",
    risk_head:"คำเตือนความเสี่ยง",
    risk1:"สินทรัพย์ดิจิทัลผันผวนสูง อาจขาดทุนได้ทั้งหมด",
    risk2:"เหตุการณ์เชิงนโยบาย/เทคนิคอาจล่าช้าหรือเปลี่ยนทิศ",
    risk3:"ช่วงราคาในหน้าเว็บนี้เป็นภาพจำลองเพื่อการศึกษา",
    footer:"© 2025 XRP Macro Infographic • สร้างเพื่อการศึกษา • Asia/Bangkok"
  },
  en: {
    badge:"📊 Infographic | Last updated",
    hero_title:"XRP Macro Infographic Web",
    hero_sub:"KPI • Catalysts • Money Flow Map • Timeline • Laws/Infra • Prophecies • Checklist • Calculator",
    cta_flow:"View Money Flow Map", cta_timeline:"Go to timeline", cta_calc:"Portfolio calculator",
    kpi_price_tag:"Reference price at start", kpi_price_note:"User-reported current price",
    chip_vol:"High volatility", chip_notadvice:"Not financial advice", kpi_case:"SEC–Ripple case status",
    kpi_case_val:"Effectively settled", kpi_case_note:"Lower legal overhang", chip_pricedin:"Priced-in",
    kpi_inst:"Institutional rails", kpi_inst_val:"Ex-US ETF / 401(k)", kpi_inst_note:"US ETF: to watch",
    chip_inflow:"Institutional inflow", chip_law2025:"2025 policy",
    cat_head:"Key catalysts",
    cat_laws:"Laws: GENIUS/Clarity/Anti-CBDC",
    cat_etf:"Ex-US ETF + 401(k) access",
    cat_swift:"SWIFT trials / Rails / CBDC",
    cat_rwa:"Tokenized RWA (bonds/gold/equities/real estate)",
    cat_reserve:"XRP Reserve → tighter float",
    cat_note:"Verify technical details with primary sources before decisions.",
    sig_head:"Market signals that must accompany news",
    sig_btc:"BTC.D clear downtrend",
    sig_total:"TOTAL makes new ATH",
    sig_eth:"ETH ATH → altseason trigger",
    chip_altseason:"Altseason", chip_institutions:"Institutions", chip_utility:"Real utility",
    flow_head:"Money Flow Map: News → Utility → Price",
    p1_tag:"Law/Funds", p1_title:"Case settled • ETF • 401(k)",
    p1_l1:"Legal overhang fades → gate opens",
    p1_l2:"Ex-US ETFs, 401(k) access, institutional custody",
    p1_l3:"2025 policy: Stablecoin/Clarity/Anti-CBDC",
    p1_impact:"Impact: Institutional inflow begins; confidence improves",
    p2_tag:"Financial plumbing", p2_title:"SWIFT • Rails • CBDC",
    p2_l1:"SWIFT pilots → production corridors",
    p2_l2:"ISO 20022 / cross-network interoperability",
    p2_l3:"Stablecoins/CBDC act as liquidity pairs",
    p2_impact:"Impact: Cross-border T+0, lower cost; real volumes build",
    p3_tag:"Tokenization", p3_title:"Tokenized RWA/Bonds",
    p3_l1:"Treasuries/bonds/money-market funds on-chain",
    p3_l2:"T+0 settlement; usable as collateral",
    p3_l3:"A ‘bridge asset’ needed for cross-network flows",
    p3_impact:"Impact: Massive on-chain AUM → liquidity & bridge demand surges",
    p4_tag:"Supply", p4_title:"XRP Reserve/Locked",
    p4_l1:"Base/Owner reserves lock XRP as accounts/objects scale",
    p4_l2:"Institutional holdings/settlement escrows shrink float",
    p4_l3:"Order books tighten across venues",
    p4_impact:"Impact: Supply shock + structural demand → step-function re-rating",
    flow_sum:"Net: Positive news → real rails → tokenized assets → tighter float = step-wise repricing potential",
    tl_head:"Timeline & indicative price bands",
    tl_2025:"2025 • Q3–Q4", tl_2025_price:"$4–$5", tl_base:"Base: $3", tl_2025_note:"Case closure • ex-US ETF • 401(k) • sentiment tailwind",
    tl_2026_price:"$6–$8", tl_2026_note:"Institutional allocation • broader SWIFT trials • altseason conditions",
    tl_2027_price:"$10–$15", tl_2027_note:"RWA goes live • cross-chain/cross-border flows",
    tl_2028_price:"$20–$30", tl_2028_note:"Supply shock from locked/held balances",
    tl_2030_price:"$50–$100+", tl_2030_note:"Systemic reset/debt stress → bridge role expands",
    tl_2031_price:"$1,000–$10,000 (Revaluation)", tl_2031_note:"If globally repriced / reserve-asset role",
    tl_note:"These bands are scenario illustrations, not forecasts.",
    law_head:"Policy 2025 (highlights)",
    law1:"GENIUS Act — Stablecoin oversight",
    law2:"Clarity Act — Digital asset remit",
    law3:"Anti-CBDC — Limit/prohibit Fed CBDC",
    law4:"401(k) — Crypto access",
    law_sum:"Net: less policy uncertainty + more institutional channels",
    infra_head:"Financial infrastructure & real-world use",
    infra1:"SWIFT trials → multi-asset connectivity",
    infra2:"Rails (RippleNet/Liquidity Hub)",
    infra3:"CBDC/Stablecoin (e.g., RLUSD)",
    infra4:"Tokenized RWA/Bonds",
    infra5:"XRP Reserve (Base/Owner reserve)",
    prop_head:"Prophecies & fortune sticks",
    prop1:"“Win the dispute” • “Get back more”",
    prop2:"“Soon” interpreted as ~1–5 years",
    prop_role:"Role: confidence while real events line up",
    giss_head:"Brandon Briggs (Badon Giss) prophecy",
    giss_desc:"Signals a near-term systemic shift (no exact date)",
    giss_c1:"Consistent: system reset",
    giss_c2:"Consistent: revaluation",
    check_head:"Signal checklist",
    check1:"US Spot XRP ETF\nFiled/approved/inflows",
    check2:"SWIFT → Production\nFrom pilots to banks",
    check3:"Tokenized Bonds/RWA\nRails compatible with XRP",
    check4:"On-chain XRPL\nAccounts/objects rising",
    calc_head:"Quick portfolio calculator",
    calc_qty_label:"XRP units held",
    calc_target_label:"Target price (USD/XRP)",
    calc_fx_label:"FX rate (THB/USD)",
    calc_btn:"Calculate",
    calc_note:"*Simple multiplication only; excludes fees/taxes/slippage",
    risk_head:"Risk notice",
    risk1:"Digital assets are highly volatile; total loss is possible.",
    risk2:"Policy/tech milestones can delay or change direction.",
    risk3:"Price bands shown are educational scenarios.",
    footer:"© 2025 XRP Macro Infographic • For education • Asia/Bangkok"
  }
};
function applyLang(lang){
  document.documentElement.lang = (lang==='en'?'en':'th');
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(dict[lang] && dict[lang][k]) el.innerText = dict[lang][k];
  });
  localStorage.setItem('lang', lang);
  document.getElementById('btnTH').style.outline = (lang==='th'?'2px solid #4cc2ff':'none');
  document.getElementById('btnEN').style.outline = (lang==='en'?'2px solid #4cc2ff':'none');
}
document.getElementById('btnTH').addEventListener('click', ()=>applyLang('th'));
document.getElementById('btnEN').addEventListener('click', ()=>applyLang('en'));
applyLang(localStorage.getItem('lang') || 'th');

// Calculator
document.getElementById('btnCalc').addEventListener('click', ()=>{
  const q = parseFloat(document.getElementById('qty').value || '0');
  const t = parseFloat(document.getElementById('target').value || '0');
  const fx = parseFloat(document.getElementById('fx').value || '0');
  const usd = q * t;
  const thb = usd * fx;
  const lang = document.documentElement.lang;
  document.getElementById('outUSD').textContent = (lang==='en'?'Value (USD): $':'มูลค่า (USD): $') + usd.toLocaleString(undefined,{maximumFractionDigits:2});
  document.getElementById('outTHB').textContent = (lang==='en'?'Value (THB): ':'มูลค่า (บาท): ') + thb.toLocaleString(undefined,{maximumFractionDigits:0}) + (lang==='en'?' THB':' บาท');
});

// Optional: fetch live XRP price (uncomment to enable)
// async function fetchPrice(){
//   const el = document.getElementById('priceNow');
//   try{
//     const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd', {cache:'no-store'});
//     const data = await res.json();
//     if(data && data.ripple && data.ripple.usd){
//       el.textContent = '$' + Number(data.ripple.usd).toLocaleString();
//     }
//   }catch(e){ /* ignore */ }
// }
// fetchPrice(); setInterval(fetchPrice, 60000);
