/**
 * ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՎԵՐԸՆԹԱՑ ԼԱՆԴՇԱՖՏԱՅԻՆ ԳՈՏԻՆԵՐ
 * Interactive UI Engine, Mountain Simulator, Table Filter, Quiz & Modals
 */

// ============================================================================
// 1. COMPREHENSIVE DATA STORE
// ============================================================================
const ZONES_DATA = {
  "semi-desert": {
    id: "semi-desert",
    name: "Անապատակիսաանապատային",
    subtitle: "Արարատյան գոգավորություն և հարավային ցածրադիր հովիտներ",
    area: "մոտ 10%",
    areaNum: 10,
    elevationText: "մինչև 800 - 1000 մ",
    minAlt: 375,
    maxAlt: 1000,
    region: "Արարատյան դաշտ, Վայոց ձորի և Մեղրիի ցածրադիր մասեր",
    climate: "Չոր, չոր խիստ ցամաքային",
    temperature: "Հունվար՝ -4°C-ից -6°C | Հուլիս՝ +24°C-ից +26°C (առավելագույնը՝ +42°C)",
    tempJan: "-4°C-ից -6°C",
    tempJuly: "+24°C-ից +26°C",
    precip: "200 - 300 մմ (մինչև 300 մմ)",
    soil: "Գորշ կիսաանապատային, աղուտ-ալկալի, «ղռեր»",
    humus: "1 - 2%",
    humusNum: 1.5,
    flora: "Չորասերներ (օշինդր, աղաբույսեր, հազարատերևուկ, աղաճանկ, կապար, ուղտափուշ)",
    fauna: "Սողուններ (գյուրզա, մողեսներ, կովկասյան ագամա), կրծողներ (ավազամկներ, ճագարամկներ), կարիճներ, շնագայլ",
    water: "Արաքս, Հրազդան (ստորին հոսանք), Մեծամոր",
    color: "#e67e22",
    colorBg: "rgba(230, 126, 34, 0.15)",
    image: "images/semi_desert.jpg",
    places: "Երևան (հարավային մաս), Արտաշատ, Արմավիր, Երասխ, Մեղրի",
    redBook: "Որդան կարմիր (հայկական կոշենիլ), Ռադդեի իժ, միջերկրածովյան կրիա, անդրկովկասյան մագլցող սահնօձ",
    reserves: "«Էրեբունի» պետական արգելոց (վայրի ցորենների բնօրրան), «Որդան կարմիր» արգելավայր",
    facts: "Այս գոտում է գտնվում աշխարհահռչակ Հայկական Որդան Կարմիրը, որից դարեր շարունակ պատրաստվել է արքայական կարմիր ներկը։ Չնայած խիստ չորային կլիմային՝ ոռոգման շնորհիվ սա Հայաստանի գլխավոր մրգատու (ծիրան, խաղող, դեղձ) և բանջարաբոստանային շտեմարանն է։",
    humanUse: "Ոռոգովի երկրագործություն, խաղողագործություն, պտղաբուծություն, ջերմոցային տնտեսություններ"
  },
  "dry-steppe": {
    id: "dry-steppe",
    name: "Չոր լեռնատափաստանային",
    subtitle: "Նախալեռնային անցումային տաք գոտի",
    area: "մոտ 15%",
    areaNum: 15,
    elevationText: "800 - 1400 մ (երբեմն մինչև 1800 մ)",
    minAlt: 1000,
    maxAlt: 1400,
    region: "Նախալեռնային գոտի, Արարատյան գոգավորության եզրեր, Վայոց ձոր",
    climate: "Չոր, տաք ցամաքային",
    temperature: "Հունվար՝ -4°C-ից -8°C | Հուլիս՝ +20°C-ից +22°C",
    tempJan: "-4°C-ից -8°C",
    tempJuly: "+20°C-ից +22°C",
    precip: "300 - 400 մմ",
    soil: "Լեռնաշագանակագույն",
    humus: "2 - 4%",
    humusNum: 3,
    flora: "Թփուտներ (գազ, մասրենի, չորածաղիկ, ուրց, փետրախոտ, շյուղախոտ)",
    fauna: "Դաշտամկներ, համաստերներ, փորսուղներ, թռչուններ (կաքավ, արծիվ), հայկական իժ",
    water: "Արփա, Քասախ, Ազատ, Վեդի",
    color: "#d4a017",
    colorBg: "rgba(212, 160, 23, 0.15)",
    image: "images/dry_steppe.jpg",
    places: "Աշտարակ, Եղեգնաձոր, Վայք, Աբովյան, Գառնի-Գեղարդի նախալեռներ",
    redBook: "Հայկական իժ, սովորական ճախրուկ, սպիտակափոր մանգաղաթև, չորասեր տրախելորիտի",
    reserves: "«Խոսրովի անտառ» պետական արգելոցի ցածրադիր հատվածներ, «Գնիշիկ» պահպանվող տարածք",
    facts: "Վայոց ձորի չոր լեռնատափաստանային կիրճերը բնակեցված են հազվագյուտ բեզոարյան այծերով և վայրի թփուտներով։ Այստեղ են գտնվում աշխարհի հնագույն Արենի-1 քարանձավային գինեգործարանը (6100 տարեկան) և դարավոր վայրի խաղողի որթերը։",
    humanUse: "Անջրդի հացահատիկ, կորիզավոր պտուղներ, գինեգործություն, ոչխարաբուծություն"
  },
  "mountain-steppe": {
    id: "mountain-steppe",
    name: "Սևահողային լեռնատափաստանային",
    subtitle: "Հայաստանի ամենաընդարձակ հացահատիկային և արոտային շտեմարանը",
    area: "մինչև 25%",
    areaNum: 25,
    elevationText: "1400 - 2400 մ",
    minAlt: 1400,
    maxAlt: 2400,
    region: "Շիրակի, Լոռու, Սևանի գոգավորություններ, Զանգեզուրի սարահարթ",
    climate: "Չափավոր ցամաքային, տաք ամառով և ցուրտ ձմեռով",
    temperature: "Հունվար՝ -6°C-ից -10°C (Աշոցքում մինչև -42°C) | Հուլիս՝ +15°C-ից +18°C",
    tempJan: "-6°C-ից -10°C",
    tempJuly: "+15°C-ից +18°C",
    precip: "500 - 700 մմ (մինչև 700 մմ)",
    soil: "Լեռնային սևահողեր (բարձր բերրիությամբ)",
    humus: "6 - 12%",
    humusNum: 9,
    flora: "Հացազգի-տարախոտային, փետրախոտ, սիզախոտ, դաշտավլուկ, կորնգան, երեքնուկ",
    fauna: "Մանր կաթնասուններ (դաշտամուկ, գետնասկյուռ), գիշատիչներ (աղվես, գայլ), կաքավ, տափաստանային արծիվ, արտույտ",
    water: "Սևանա լիճ, Ախուրյան, Որոտան, Հրազդան (վերին հոսանք)",
    color: "#27ae60",
    colorBg: "rgba(39, 174, 96, 0.15)",
    image: "images/mountain_steppe.jpg",
    places: "Գյումրի, Վանաձոր (լանջեր), Գավառ, Մարտունի, Սևան, Սիսիան, Ապարան",
    redBook: "Հայկական որոր (Larus armenicus), մոխրագույն կռունկ, դաշտային մկնաճուռակ",
    reserves: "«Սևան» ազգային պարկ, «Արփի լիճ» ազգային պարկ (տափաստանային հատված)",
    facts: "Սևահողային լեռնատափաստաններն ունեն հումուսի ապշեցուցիչ պարունակություն (մինչև 12%)։ Չնայած այստեղ տեղումները բավարար են, ներքին գոգավորությունների չոր օդի պատճառով անտառներ չեն աճում, սակայն ստեղծվել է բացառիկ բերրի հողային շերտ։",
    humanUse: "Հացահատիկի (ցորեն, գարի) և կարտոֆիլի գլխավոր մշակում, կաթնամսատու անասնապահություն"
  },
  "forest": {
    id: "forest",
    name: "Լեռնաանտառային",
    subtitle: "Կովկասյան կենսաբազմազանության կանաչ օազիսները",
    area: "10 - 11%",
    areaNum: 11,
    elevationText: "500 - 2100 մ (հս-արլ.) / մինչև 2400 մ (հր-արլ.)",
    minAlt: 500,
    maxAlt: 2100,
    region: "Հյուսիս-արևելք (Տավուշ, Լոռի), Հարավ-արևելք (Սյունիք)",
    climate: "Չափավոր տաք, խոնավ, մեղմ ձմեռներով",
    temperature: "Հունվար՝ -3°C-ից -6°C | Հուլիս՝ +15°C-ից +19°C",
    tempJan: "-3°C-ից -6°C",
    tempJuly: "+15°C-ից +19°C",
    precip: "600 - 800 մմ (առանձին լանջերում մինչև 900 մմ)",
    soil: "Գորշ անտառային, դարչնագույն անտառային հողեր",
    humus: "7 - 9%",
    humusNum: 8,
    flora: "Արևելյան հաճարենի, վրացական կաղնի, հացենի, բոխի, թխկի, հատապտուղներ (հոն, զկեռ, տանձենի)",
    fauna: "Այծյամ, կովկասյան գորշ արջ, ազնվացեղ եղնիկ, գայլ, աղվես, անտառային կատու, լուսան, վարազ",
    water: "Դեբեդ, Աղստև, Ողջի, Գետիկ",
    color: "#1e824c",
    colorBg: "rgba(30, 130, 76, 0.15)",
    image: "images/forest.jpg",
    places: "Դիլիջան, Իջևան, Բերդ, Ալավերդի, Կապան, Շվանիձոր, Լաստիվեր",
    redBook: "Կովկասյան ընձառյուծ (լեոպարդ), ազնվացեղ եղնիկ, հատապտղային կենի, անտառային կատու",
    reserves: "«Դիլիջան» ազգային պարկ, «Շիկահող» պետական արգելոց, «Արևիկ» ազգային պարկ",
    facts: "Հայաստանի անտառները 100%-ով ունեն պաշտպանական նշանակություն (հողապաշտպան, ջրակարգավորիչ և կլիմայաստեղծ)։ Դիլիջանում և Շիկահողում պահպանվել են նախապատմական ռելիկտային պուրակներ՝ մինչև 1200 տարեկան հատապտղային կենիներով։",
    humanUse: "Ռեկրեացիա, էկոտուրիզմ, կլիմայական բուժավայրեր, վայրի մրգերի և բուժիչ բույսերի հավաքչություն"
  },
  "alpine": {
    id: "alpine",
    name: "Մերձալպյան և ալպյան",
    subtitle: "Գունագեղ ալպյան գորգեր և բարձրլեռնային սառնորակ աղբյուրներ",
    area: "մոտ 8 - 10%",
    areaNum: 9,
    elevationText: "2400 - 3200 մ",
    minAlt: 2400,
    maxAlt: 3200,
    region: "Բարձրլեռնային շրջաններ (Արագած, Գեղամա, Վարդենիսի, Զանգեզուրի լեռներ)",
    climate: "Ցուրտ լեռնային, կարճ զով ամառներով և երկարատև ձյունառատ ձմեռներով",
    temperature: "Հունվար՝ -10°C-ից -14°C | Հուլիս՝ +8°C-ից +12°C",
    tempJan: "-10°C-ից -14°C",
    tempJuly: "+8°C-ից +12°C",
    precip: "800 - 1000 մմ (գերակշռում է ձյունը)",
    soil: "Լեռնամարգագետնային",
    humus: "8 - 13%",
    humusNum: 10.5,
    flora: "Գետնատարած բուսականություն, խոտհարքներ (ալպյան գորգեր, ծնծաղիկ, գնարբուկ, զանգակածաղիկ, քեմոց)",
    fauna: "Լեռնային արծիվ, կովկասյան ուլար, բեզոարյան այծ, հայկական մուֆլոն, ալպյան ճայ, փոշոտող թիթեռներ",
    water: "Արփի լիճ, Քարի լիճ, Սև լիճ (Իշխանասար), Ակնա լիճ",
    color: "#3498db",
    colorBg: "rgba(52, 152, 219, 0.15)",
    image: "images/alpine.jpg",
    places: "Արագածի լանջեր, Գեղամա լեռնավահան, Խուստուփ, Սպիտակասար, Վարդենյաց լեռնանցք",
    redBook: "Հայկական մուֆլոն, բեզոարյան այծ, կովկասյան մարեխ (ուլար), ալպյան առյուծաթաթ",
    reserves: "«Արփի լիճ» ազգային պարկ, «Զանգեզուր» կենսոլորտային համալիր, «Սև լիճ» արգելավայր",
    facts: "Ալպյան գորգերի բույսերն ունեն յուրահատուկ կառուցվածք՝ նրանց ցողունը գրեթե չի երևում (ընդամենը 2-5 սմ), իսկ ծաղիկները խոշոր են և վառվռուն։ Այդպես նրանք պաշտպանվում են բարձրլեռնային սառը քամիներից և ուլտրամանուշակագույն ճառագայթներից։",
    humanUse: "Ամառային բարձրարժեք արոտավայրեր («յայլաներ»), մեղվաբուծություն, լեռնային արշավներ և ալպինիզմ"
  },
  "nival": {
    id: "nival",
    name: "Ձյունամերձ (նիվալ)",
    subtitle: "Հավերժական ձյան, սառցադաշտային հետքերի և մերկ ժայռերի թագավորություն",
    area: "0.5 - 1%",
    areaNum: 0.8,
    elevationText: "3200 - 3500 մ-ից բարձր",
    minAlt: 3200,
    maxAlt: 4090,
    region: "Ամենաբարձր լեռնագագաթները (Արագած, Կապուտջուղ, Աժդահակ)",
    climate: "Խիստ ցուրտ, ցրտաշունչ բևեռային-լեռնային",
    temperature: "Հունվար՝ -12°C-ից ցածր (մինչև -20°C) | Հուլիս՝ +2°C-ից +5°C (նույնիսկ օգոստոսին հնարավոր է ձյուն)",
    tempJan: "-12°C-ից ցածր",
    tempJuly: "+2°C-ից +5°C",
    precip: "1000 մմ-ից ավելի (բացառապես ձյուն, կարկուտ, բուք)",
    soil: "Նախնական / թույլ զարգացած կմախքային, մերկ ժայռեր, քարակույտեր",
    humus: "շատ ցածր (< 1%)",
    humusNum: 0.5,
    flora: "Մամուռներ, քարաքոսեր, առանձին բարձրադիր քարաճեղքային բույսեր (քարբեկ, բարձիկանմաններ)",
    fauna: "Շատ աղքատ (պատահական թռչուններ՝ ալպյան սերինոս, ժայռային ծիծեռնակ, ուլար)",
    water: "Սառցադաշտային փոքր լճակներ, հալոցքային առվակներ, գետերի ակունքներ",
    color: "#8e44ad",
    colorBg: "rgba(142, 68, 173, 0.15)",
    image: "images/nival.jpg",
    places: "Արագածի Հյուսիսային (4090մ), Արևմտյան (3995մ), Արևելյան (3908մ) և Հարավային (3887մ) գագաթներ, Կապուտջուղ (3905մ)",
    redBook: "Բարձրլեռնային էնդեմիկ քարաքոսեր, քարբեկի հազվագյուտ տեսակներ",
    reserves: "Արագածի ալպյան և նիվալ էկոհամակարգերի պահպանվող գոտիներ",
    facts: "Այստեղ ձյունը տեղ-տեղ չի հալչում ամբողջ տարին՝ առաջացնելով բծավոր ձնածածկույթներ (ֆիրնային դաշտեր)։ Հայաստանի ամենաբարձր կետը՝ Արագածի հյուսիսային գագաթը (4090 մ), գտնվում է հենց այս գոտում, որտեղ ամռանն անգամ կարող է տեղալ առատ ձյուն։",
    humanUse: "Գիտահետազոտական կայաններ (Արագածի տիեզերական ճառագայթների ֆիզիկայի կայան), էքստրեմալ ալպինիզմ"
  }
};

// ============================================================================
// 2. WEB AUDIO SYNTHESIZER (GENTLE NATURAL CHIMES & CLICKS)
// ============================================================================
class AudioFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof AudioContext !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.04) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  chime() {
    this.playTone(587.33, 'triangle', 0.25, 0.05); // D5
    setTimeout(() => this.playTone(880.00, 'sine', 0.35, 0.04), 80); // A5
    triggerHaptic(20);
  }

  tick() {
    this.playTone(440, 'sine', 0.05, 0.015);
    triggerHaptic(8);
  }
}

function triggerHaptic(duration = 10) {
  try {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(duration);
    }
  } catch (e) {}
}

const audioFX = new AudioFX();

// ============================================================================
// 3. MOUNTAIN ELEVATION SIMULATOR
// ============================================================================
class MountainSimulator {
  constructor() {
    this.slider = document.getElementById('altitudeSlider');
    this.laserLine = document.getElementById('elevationLaserLine');
    this.laserPin = document.getElementById('laserPinVal');
    this.sliderBadge = document.getElementById('sliderAltBadge');
    
    // Telemetry Elements
    this.telZoneTag = document.getElementById('telZoneTag');
    this.telZoneTitle = document.getElementById('telZoneTitle');
    this.telZoneSubtitle = document.getElementById('telZoneSubtitle');
    this.telTempSummer = document.getElementById('telTempSummer');
    this.telTempWinter = document.getElementById('telTempWinter');
    this.telPrecip = document.getElementById('telPrecip');
    this.telOxygen = document.getElementById('telOxygen');
    this.telFlora = document.getElementById('telFlora');
    this.telFauna = document.getElementById('telFauna');
    this.telPlaces = document.getElementById('telPlaces');
    this.telSoil = document.getElementById('telSoil');
    this.btnOpenZone = document.getElementById('btnOpenCurrentZone');

    this.currentZoneId = 'mountain-steppe';
    this.lastTickAlt = 0;

    this.init();
  }

  init() {
    if (!this.slider) return;

    // Listen to slider changes
    this.slider.addEventListener('input', (e) => {
      this.updateAltitude(parseInt(e.target.value, 10));
    });

    // Quick jump pills
    document.querySelectorAll('.elevation-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const alt = parseInt(btn.dataset.alt, 10);
        this.slider.value = alt;
        this.updateAltitude(alt);
        document.querySelectorAll('.elevation-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        audioFX.chime();
      });
    });

    // Mountain SVG zone clicks
    document.querySelectorAll('.m-zone-layer').forEach(layer => {
      layer.addEventListener('click', () => {
        const zoneKey = layer.dataset.zone;
        const zone = ZONES_DATA[zoneKey];
        if (zone) {
          const midAlt = Math.round((zone.minAlt + zone.maxAlt) / 2);
          this.slider.value = midAlt;
          this.updateAltitude(midAlt);
          audioFX.chime();
        }
      });
    });

    // Open current zone button
    if (this.btnOpenZone) {
      this.btnOpenZone.addEventListener('click', () => {
        openZoneModal(this.currentZoneId);
      });
    }

    // Initial update with default value
    this.updateAltitude(parseInt(this.slider.value, 10));
  }

  updateAltitude(alt) {
    // 1. Move the visual laser indicator line
    // Map altitude 375m - 4090m to stage height percentage (100% bottom to 5% top)
    const minAlt = 375;
    const maxAlt = 4090;
    const ratio = (alt - minAlt) / (maxAlt - minAlt);
    // Inverted percentage so 375m is near bottom (94%) and 4090m is near top (6%)
    const topPercent = Math.max(5, Math.min(94, 94 - ratio * 88));

    if (this.laserLine) {
      this.laserLine.style.top = `${topPercent}%`;
    }
    if (this.laserPin) {
      this.laserPin.textContent = `${alt.toLocaleString()} մ`;
    }
    if (this.sliderBadge) {
      this.sliderBadge.textContent = `${alt.toLocaleString()} մ`;
    }

    // Play subtle audio tick on large steps
    if (Math.abs(alt - this.lastTickAlt) >= 200) {
      audioFX.tick();
      this.lastTickAlt = alt;
    }

    // 2. Determine Zone
    let zoneId = 'semi-desert';
    if (alt < 1000) {
      zoneId = 'semi-desert';
    } else if (alt >= 1000 && alt < 1400) {
      zoneId = 'dry-steppe';
    } else if (alt >= 1400 && alt < 2100) {
      // In NE slopes 500-2100 is forest; across republic 1400-2400 is predominantly mountain-steppe
      zoneId = 'mountain-steppe';
    } else if (alt >= 2100 && alt < 2400) {
      zoneId = 'mountain-steppe';
    } else if (alt >= 2400 && alt < 3200) {
      zoneId = 'alpine';
    } else {
      zoneId = 'nival';
    }

    this.currentZoneId = zoneId;
    const zone = ZONES_DATA[zoneId];

    // 3. Highlight SVG mountain layers
    document.querySelectorAll('.m-zone-layer').forEach(layer => {
      if (layer.dataset.zone === zoneId) {
        layer.classList.add('active');
      } else {
        layer.classList.remove('active');
      }
    });

    // 4. Calculate continuous thermal gradient (Lapse Rate: ~0.6°C per 100m)
    // Baseline at 400m: Summer +26°C, Winter -3°C
    const lapseRate = 0.0058; // 0.58°C per meter
    const dAlt = alt - 400;
    const estSummer = (26.5 - dAlt * lapseRate).toFixed(1);
    const estWinter = (-3.5 - dAlt * lapseRate).toFixed(1);

    // Approximate Oxygen & Pressure ratio
    // Barometric formula approx: P = P0 * exp(-alt / 8400)
    const o2Ratio = Math.round(100 * Math.exp(-alt / 8400));
    const hPa = Math.round(1013 * Math.exp(-alt / 8400));

    // Approximate precipitation
    let estPrecip = 250;
    if (alt < 1000) estPrecip = Math.round(220 + (alt - 375) * 0.12);
    else if (alt < 1400) estPrecip = Math.round(300 + (alt - 1000) * 0.25);
    else if (alt < 2400) estPrecip = Math.round(450 + (alt - 1400) * 0.25);
    else if (alt < 3200) estPrecip = Math.round(750 + (alt - 2400) * 0.25);
    else estPrecip = Math.round(950 + (alt - 3200) * 0.15);

    // 5. Update Telemetry HUD
    if (this.telZoneTag) {
      this.telZoneTag.textContent = zone.name;
      this.telZoneTag.style.backgroundColor = zone.color;
    }
    if (this.telZoneTitle) {
      this.telZoneTitle.textContent = `${zone.name} գոտի`;
    }
    if (this.telZoneSubtitle) {
      this.telZoneSubtitle.textContent = `${alt.toLocaleString()} մետր բարձրություն (${zone.elevationText})`;
    }
    if (this.telTempSummer) {
      this.telTempSummer.textContent = `${estSummer > 0 ? '+' : ''}${estSummer}°C`;
    }
    if (this.telTempWinter) {
      this.telTempWinter.textContent = `${estWinter}°C`;
    }
    if (this.telPrecip) {
      this.telPrecip.textContent = `~${estPrecip} մմ`;
    }
    if (this.telOxygen) {
      this.telOxygen.textContent = `${o2Ratio}% (${hPa} հՊա)`;
    }
    if (this.telFlora) {
      this.telFlora.textContent = zone.flora;
    }
    if (this.telFauna) {
      this.telFauna.textContent = zone.fauna;
    }
    if (this.telPlaces) {
      this.telPlaces.textContent = zone.places;
    }
    if (this.telSoil) {
      this.telSoil.textContent = `${zone.soil} (հումուս՝ ${zone.humus})`;
    }
  }
}

// ============================================================================
// 4. MODAL DIALOG CONTROLLER
// ============================================================================
function openZoneModal(zoneId) {
  const zone = ZONES_DATA[zoneId];
  if (!zone) return;

  const overlay = document.getElementById('zoneModalOverlay');
  const modalHeroImg = document.getElementById('modalHeroImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalAltVal = document.getElementById('modalAltVal');
  const modalAreaVal = document.getElementById('modalAreaVal');
  const modalSoilVal = document.getElementById('modalSoilVal');
  const modalClimateText = document.getElementById('modalClimateText');
  const modalFloraText = document.getElementById('modalFloraText');
  const modalFaunaText = document.getElementById('modalFaunaText');
  const modalWaterText = document.getElementById('modalWaterText');
  const modalRedBookText = document.getElementById('modalRedBookText');
  const modalReservesText = document.getElementById('modalReservesText');
  const modalFactsText = document.getElementById('modalFactsText');
  const modalHumanUseText = document.getElementById('modalHumanUseText');

  if (modalHeroImg) modalHeroImg.src = zone.image;
  if (modalTitle) modalTitle.textContent = `${zone.name} լանդշաֆտային գոտի`;
  if (modalSubtitle) modalSubtitle.textContent = zone.subtitle;
  if (modalAltVal) modalAltVal.textContent = zone.elevationText;
  if (modalAreaVal) modalAreaVal.textContent = zone.area;
  if (modalSoilVal) modalSoilVal.textContent = `${zone.soil} (հումուս՝ ${zone.humus})`;
  if (modalClimateText) modalClimateText.textContent = `${zone.climate}: Ջերմաստիճան՝ ${zone.temperature}: Տեղումներ՝ ${zone.precip}:`;
  if (modalFloraText) modalFloraText.textContent = zone.flora;
  if (modalFaunaText) modalFaunaText.textContent = zone.fauna;
  if (modalWaterText) modalWaterText.textContent = zone.water;
  if (modalRedBookText) modalRedBookText.textContent = zone.redBook;
  if (modalReservesText) modalReservesText.textContent = zone.reserves;
  if (modalFactsText) modalFactsText.textContent = zone.facts;
  if (modalHumanUseText) modalHumanUseText.textContent = zone.humanUse;

  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    audioFX.chime();
  }
}

function closeZoneModal() {
  const overlay = document.getElementById('zoneModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ============================================================================
// 5. TABLE SEARCH, FILTER & EXPORT + MOBILE CARDS VIEW
// ============================================================================
class TableManager {
  constructor() {
    this.searchInput = document.getElementById('tableSearchInput');
    this.tableRows = document.querySelectorAll('#landscapeTableBody tr');
    this.filterButtons = document.querySelectorAll('.tbl-filter-btn');
    this.btnExportCsv = document.getElementById('btnExportCsv');
    this.btnPrintTable = document.getElementById('btnPrintTable');
    this.activeFilter = 'all';

    // Mobile Table vs Cards view toggles
    this.btnViewTable = document.getElementById('btnViewTable');
    this.btnViewCards = document.getElementById('btnViewCards');
    this.tableResponsiveWrapper = document.getElementById('tableResponsiveWrapper');
    this.tableCardsMobileView = document.getElementById('tableCardsMobileView');
    this.mobileSwipeHint = document.getElementById('mobileSwipeHint');

    this.init();
  }

  init() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => this.filterTable());
    }

    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.dataset.filter;
        this.filterTable();
      });
    });

    if (this.btnExportCsv) {
      this.btnExportCsv.addEventListener('click', () => this.exportToCSV());
    }

    if (this.btnPrintTable) {
      this.btnPrintTable.addEventListener('click', () => window.print());
    }

    // Mobile View Toggle Handlers
    if (this.btnViewTable && this.btnViewCards) {
      this.btnViewTable.addEventListener('click', () => this.setViewMode('table'));
      this.btnViewCards.addEventListener('click', () => this.setViewMode('cards'));
    }

    // Build Mobile Cards DOM initially
    this.renderMobileCards();
  }

  setViewMode(mode) {
    if (mode === 'cards') {
      this.btnViewTable.classList.remove('active');
      this.btnViewCards.classList.add('active');
      if (this.tableResponsiveWrapper) this.tableResponsiveWrapper.style.display = 'none';
      if (this.tableCardsMobileView) this.tableCardsMobileView.style.display = 'flex';
      if (this.mobileSwipeHint) this.mobileSwipeHint.style.display = 'none';
      audioFX.tick();
    } else {
      this.btnViewCards.classList.remove('active');
      this.btnViewTable.classList.add('active');
      if (this.tableCardsMobileView) this.tableCardsMobileView.style.display = 'none';
      if (this.tableResponsiveWrapper) this.tableResponsiveWrapper.style.display = '';
      if (this.mobileSwipeHint && window.innerWidth <= 768) this.mobileSwipeHint.style.display = 'block';
      audioFX.tick();
    }
  }

  renderMobileCards() {
    if (!this.tableCardsMobileView) return;
    this.tableCardsMobileView.innerHTML = '';

    const zoneKeys = ['semi-desert', 'dry-steppe', 'mountain-steppe', 'forest', 'alpine', 'nival'];
    zoneKeys.forEach(key => {
      const z = ZONES_DATA[key];
      if (!z) return;

      let category = 'midland';
      if (key === 'semi-desert') category = 'lowland';
      else if (key === 'alpine' || key === 'nival') category = 'highland';

      const card = document.createElement('div');
      card.className = 'mobile-table-card';
      card.dataset.category = category;
      card.dataset.zone = z.id;
      card.style.borderTop = `4px solid ${z.color}`;

      card.innerHTML = `
        <div class="mobile-card-header">
          <div class="mobile-card-title">
            <span class="mobile-card-dot" style="background: ${z.color};"></span>
            ${z.name}
          </div>
          <span class="tbl-badge" style="background: ${z.colorBg}; color: ${z.color};">${z.area}</span>
        </div>
        <div class="mobile-card-grid">
          <div class="m-field">
            <span class="m-label">📏 Բարձրություն</span>
            <span class="m-val">${z.elevationText}</span>
          </div>
          <div class="m-field">
            <span class="m-label">🌧️ Տեղումներ</span>
            <span class="m-val">${z.precip}</span>
          </div>
          <div class="m-field">
            <span class="m-label">🌡️ Ջերմաստիճան</span>
            <span class="m-val">${z.tempJan} / ${z.tempJuly}</span>
          </div>
          <div class="m-field">
            <span class="m-label">🌱 Հումուս</span>
            <span class="m-val">${z.humus}</span>
          </div>
          <div class="m-field-full">
            <span class="m-label">📍 Տարածման շրջան</span>
            <span class="m-val">${z.region}</span>
          </div>
          <div class="m-field-full">
            <span class="m-label">🌾 Հողի տիպ</span>
            <span class="m-val">${z.soil}</span>
          </div>
          <div class="m-field-full">
            <span class="m-label">🌿 Բուսականություն</span>
            <span class="m-val">${z.flora}</span>
          </div>
          <div class="m-field-full">
            <span class="m-label">🐾 Կենդանական աշխարհ</span>
            <span class="m-val">${z.fauna}</span>
          </div>
          <div class="m-field-full">
            <span class="m-label">💧 Գետ / Լիճ</span>
            <span class="m-val">${z.water}</span>
          </div>
        </div>
        <button class="mobile-card-footer-btn" onclick="openZoneModal('${z.id}')">
          <span>🔍 Բացել Ամբողջական Մանրամասները ✨</span>
        </button>
      `;

      this.tableCardsMobileView.appendChild(card);
    });
  }

  filterTable() {
    const query = this.searchInput ? this.searchInput.value.toLowerCase().trim() : '';
    
    // Filter Table rows
    this.tableRows.forEach(row => {
      const category = row.dataset.category;
      const text = row.textContent.toLowerCase();

      const matchesSearch = query === '' || text.includes(query);
      const matchesFilter = this.activeFilter === 'all' || category === this.activeFilter;

      if (matchesSearch && matchesFilter) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });

    // Filter Mobile Cards
    const mobileCards = document.querySelectorAll('.mobile-table-card');
    mobileCards.forEach(card => {
      const category = card.dataset.category;
      const text = card.textContent.toLowerCase();

      const matchesSearch = query === '' || text.includes(query);
      const matchesFilter = this.activeFilter === 'all' || category === this.activeFilter;

      if (matchesSearch && matchesFilter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  exportToCSV() {
    const table = document.getElementById('landscapeTable');
    if (!table) return;

    let csv = [];
    const rows = table.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i++) {
      let row = [], cols = rows[i].querySelectorAll('td, th');
      for (let j = 0; j < cols.length; j++) {
        let cellText = cols[j].innerText.replace(/"/g, '""').trim();
        row.push(`"${cellText}"`);
      }
      csv.push(row.join(','));
    }

    const csvContent = '\uFEFF' + csv.join('\n'); // UTF-8 BOM
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'HH_Veryntac_Landshaftner.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    audioFX.chime();
  }
}

// ============================================================================
// 6. ACCORDION CONTROLLER ("ԲԱՑՎՈՂ ՓԱՍՏԵՐ")
// ============================================================================
function initAccordions() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Toggle current
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
          audioFX.tick();
        }
      });
    }
  });
}

// ============================================================================
// 7. INTERACTIVE KNOWLEDGE QUIZ (ՎԻԿՏՈՐԻՆԱ)
// ============================================================================
const QUIZ_QUESTIONS = [
  {
    question: "Ո՞ր լանդշաֆտային գոտին է զբաղեցնում ամենամեծ տարածքը (մինչև 25%) Հայաստանի Հանրապետությունում:",
    options: [
      "Լեռնաանտառային գոտին",
      "Սևահողային լեռնատափաստանային գոտին",
      "Անապատակիսաանապատային գոտին",
      "Մերձալպյան և ալպյան գոտին"
    ],
    correctIndex: 1,
    explanation: "Ճիշտ է: Սևահողային լեռնատափաստանները զբաղեցնում են ՀՀ տարածքի շուրջ 25%-ը (1400-2400 մ բարձրություններում) և համարվում են մեր գլխավոր հացահատիկային ու կարտոֆիլագործական շրջանները:"
  },
  {
    question: "Ինչո՞ւ Շիրակի և Սևանի գոգավորություններում (1500-1900 մ) անտառներ չեն աճում, չնայած բարձրությունը համապատասխանում է անտառային գոտուն:",
    options: [
      "Հողերը շատ աղակալված են",
      "Ներքին գոգավորություններում կլիման ցամաքային է, օդը չոր է, իսկ տեղումները՝ համեմատաբար քիչ",
      "Այնտեղ չափազանց շատ տեղումներ են լինում",
      "Քամիները արմատախիլ են անում ծառերը"
    ],
    correctIndex: 1,
    explanation: "Ճիշտ է: Անտառները պահանջում են բարձր խոնավություն (600-800 մմ և ավելի): Ներքին փակ գոգավորությունները շրջապատված են լեռնաշղթաներով, որոնք կանգնեցնում են խոնավ օդային հոսանքները, այդ պատճառով այնտեղ տիրապետում են տափաստանները:"
  },
  {
    question: "Ո՞ր բարձրությունից է սկսվում Ձյունամերձ (նիվալ) լանդշաֆտային գոտին Հայաստանում:",
    options: [
      "1400 մետրից",
      "2000 մետրից",
      "2400 մետրից",
      "3200 - 3500 մետրից բարձր"
    ],
    correctIndex: 3,
    explanation: "Ճիշտ է: Ձյունամերձ (նիվալ) գոտին ձևավորվում է 3200-3500 մետրից բարձր՝ Արագածի, Կապուտջուղի և Աժդահակի ամենաբարձր գագաթներին:"
  },
  {
    question: "Ինչո՞ւ են ալպյան գորգերի ծաղիկները շատ կարճացողուն (գաճաճ), բայց ունեն վառվռուն մեծ ծաղիկներ:",
    options: [
      "Որպեսզի պաշտպանվեն սառը ուժգին քամիներից և ուլտրամանուշակագույն ճառագայթներից՝ գրավելով սակավաթիվ փոշոտող միջատներին",
      "Որովհետև նրանց հաճախակի տրորում են արածող կենդանիները",
      "Հողում ջրի ավելցուկի պատճառով",
      "Որպեսզի ձյան տակից չերևան"
    ],
    correctIndex: 0,
    explanation: "Ճիշտ է: Բարձրլեռնային դաժան քամիները թույլ չեն տալիս երկար ցողուն ունենալ, իսկ վառ գույները պաշտպանում են ինտենսիվ արևային ռադիացիայից և հրապուրում փոշոտող միջատներին կարճատև ամռան ընթացքում:"
  },
  {
    question: "Հայաստանի ո՞ր մարզերում է հիմնականում կենտրոնացած Լեռնաանտառային գոտին:",
    options: [
      "Արմավիր և Արարատ",
      "Շիրակ և Արագածոտն",
      "Տավուշ, Լոռի և Սյունիք",
      "Գեղարքունիք և Կոտայք"
    ],
    correctIndex: 2,
    explanation: "Ճիշտ է: ՀՀ անտառների ավելի քան 85%-ը գտնվում է հյուսիս-արևելքում (Տավուշ, Լոռի) և հարավ-արևելքում (Սյունիք), որտեղ ներթափանցում են խոնավաբեր օդային զանգվածները:"
  }
];

class QuizEngine {
  constructor() {
    this.currentIndex = 0;
    this.score = 0;
    this.answered = false;

    this.container = document.getElementById('quizCard');
    this.qTitle = document.getElementById('quizQuestionTitle');
    this.optionsList = document.getElementById('quizOptionsList');
    this.explanationBox = document.getElementById('quizExplanation');
    this.nextBtn = document.getElementById('quizNextBtn');
    this.stepTag = document.getElementById('quizStepTag');
    this.scoreLive = document.getElementById('quizScoreLive');
    this.progressBar = document.getElementById('quizProgressBar');
    this.resultView = document.getElementById('quizResultView');
    this.questionView = document.getElementById('quizQuestionView');
    this.btnRestart = document.getElementById('quizRestartBtn');

    this.init();
  }

  init() {
    if (!this.qTitle) return;
    this.renderQuestion();

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        if (this.currentIndex < QUIZ_QUESTIONS.length - 1) {
          this.currentIndex++;
          this.renderQuestion();
        } else {
          this.showResults();
        }
      });
    }

    if (this.btnRestart) {
      this.btnRestart.addEventListener('click', () => {
        this.currentIndex = 0;
        this.score = 0;
        this.resultView.style.display = 'none';
        this.questionView.style.display = 'block';
        this.renderQuestion();
      });
    }
  }

  renderQuestion() {
    this.answered = false;
    const q = QUIZ_QUESTIONS[this.currentIndex];

    if (this.stepTag) this.stepTag.textContent = `Հարց ${this.currentIndex + 1} / ${QUIZ_QUESTIONS.length}`;
    if (this.scoreLive) this.scoreLive.textContent = `Միավորներ՝ ${this.score}`;
    if (this.progressBar) {
      const pct = ((this.currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;
      this.progressBar.style.width = `${pct}%`;
    }
    if (this.qTitle) this.qTitle.textContent = q.question;

    if (this.explanationBox) {
      this.explanationBox.style.display = 'none';
      this.explanationBox.textContent = '';
    }
    if (this.nextBtn) {
      this.nextBtn.style.display = 'none';
    }

    if (this.optionsList) {
      this.optionsList.innerHTML = '';
      q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `<span>${optText}</span><span class="opt-indicator">⭕</span>`;
        btn.addEventListener('click', () => this.handleOptionClick(idx, btn));
        this.optionsList.appendChild(btn);
      });
    }
  }

  handleOptionClick(selectedIdx, clickedBtn) {
    if (this.answered) return;
    this.answered = true;

    const q = QUIZ_QUESTIONS[this.currentIndex];
    const buttons = this.optionsList.querySelectorAll('.quiz-option-btn');

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.add('correct');
        btn.querySelector('.opt-indicator').textContent = '✅';
      }
    });

    if (selectedIdx === q.correctIndex) {
      this.score++;
      audioFX.chime();
    } else {
      clickedBtn.classList.add('wrong');
      clickedBtn.querySelector('.opt-indicator').textContent = '❌';
      audioFX.tick();
    }

    if (this.scoreLive) this.scoreLive.textContent = `Միավորներ՝ ${this.score}`;

    if (this.explanationBox) {
      this.explanationBox.style.display = 'block';
      this.explanationBox.innerHTML = `<strong>Բացատրություն.</strong> ${q.explanation}`;
    }

    if (this.nextBtn) {
      this.nextBtn.style.display = 'inline-flex';
      this.nextBtn.textContent = (this.currentIndex === QUIZ_QUESTIONS.length - 1) ? 'Ամփոփել արդյունքները 🏆' : 'Հաջորդ հարցը ➡️';
    }
  }

  showResults() {
    if (this.questionView) this.questionView.style.display = 'none';
    if (this.resultView) {
      this.resultView.style.display = 'block';
      const resultScore = document.getElementById('quizFinalScore');
      const resultMessage = document.getElementById('quizResultMessage');
      
      if (resultScore) {
        resultScore.textContent = `${this.score} / ${QUIZ_QUESTIONS.length}`;
      }

      if (resultMessage) {
        if (this.score === 5) {
          resultMessage.textContent = '🌟 Հիանալի է! Դուք իսկական աշխարհագրագետ եք և անթերի գիտեք Հայաստանի բնությունը!';
        } else if (this.score >= 3) {
          resultMessage.textContent = '👏 Շատ լավ արդյունք է! Դուք ունեք ամուր գիտելիքներ մեր լեռնաշխարհի մասին:';
        } else {
          resultMessage.textContent = '📚 Կարող եք կրկին ուսումնասիրել սայտի տվյալներն ու նորից փորձել:';
        }
      }
      audioFX.chime();
    }
  }
}

// ============================================================================
// 8. THEME & AUDIO TOGGLES
// ============================================================================
function initThemeAndAudio() {
  const themeToggle = document.getElementById('themeToggleBtn');
  const audioToggle = document.getElementById('audioToggleBtn');

  // Load saved theme
  const savedTheme = localStorage.getItem('arm_landscape_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('arm_landscape_theme', target);
      updateThemeIcon(target);
      audioFX.tick();
    });
  }

  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      audioFX.enabled = !audioFX.enabled;
      audioToggle.textContent = audioFX.enabled ? '🔊' : '🔇';
      audioToggle.title = audioFX.enabled ? 'Ձայնն անջատել' : 'Ձայնը միացնել';
      if (audioFX.enabled) audioFX.chime();
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Անցնել ցերեկային ռեժիմի' : 'Անցնել գիշերային ռեժիմի';
  }
}

// ============================================================================
// 9. DOM CONTENT LOADED INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Init modules
  initThemeAndAudio();
  window.simulator = new MountainSimulator();
  window.tableManager = new TableManager();
  initAccordions();
  window.quiz = new QuizEngine();

  // Zone card modal triggers
  document.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const zoneId = btn.dataset.zone;
      openZoneModal(zoneId);
    });
  });

  // Modal close triggers
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOverlay = document.getElementById('zoneModalOverlay');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeZoneModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeZoneModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeZoneModal();
  });

  // Animate area chart bars on scroll into view
  const chartSection = document.getElementById('chartSection');
  if (chartSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.chart-bar-fill').forEach(bar => {
            const width = bar.dataset.width;
            bar.style.width = width;
          });
          observer.unobserve(chartSection);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(chartSection);
  } else {
    document.querySelectorAll('.chart-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }

  // Mobile Navigation Drawer Toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.add('open');
      audioFX.tick();
    });
  }

  if (mobileDrawerClose && mobileNavDrawer) {
    mobileDrawerClose.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('open');
      audioFX.tick();
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
    });
  });

  // Smooth scroll spy for header nav links & mobile bottom bar
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileBarBtns = document.querySelectorAll('.mobile-bar-btn');

  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    mobileBarBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('href') === `#${current}`) {
        btn.classList.add('active');
      }
    });
  });

  // Mobile Telemetry Tabs Switcher
  const telMobileTabs = document.querySelectorAll('.tel-tab-btn');
  const telStatsGrid = document.getElementById('telStatsGrid');
  const telBio = document.querySelector('.telemetry-bio');

  telMobileTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      telMobileTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      triggerHaptic(12);
      const tab = btn.dataset.tab;
      if (tab === 'nature') {
        if (telStatsGrid) telStatsGrid.classList.add('mobile-hide');
        if (telBio) telBio.classList.remove('mobile-hide');
      } else {
        if (telStatsGrid) telStatsGrid.classList.remove('mobile-hide');
        if (telBio) telBio.classList.add('mobile-hide');
      }
    });
  });

  // Default to Cards view automatically on mobile screens (< 768px)
  if (window.innerWidth <= 768 && window.tableManager) {
    window.tableManager.setViewMode('cards');
  }

  // Floating Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      triggerHaptic(18);
    });
  }

  // Web Share API Integration
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      triggerHaptic(15);
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'ՀՀ Վերընթաց Լանդշաֆտային Գոտիներ',
            text: 'Հայաստանի բնության, լեռների և վերընթաց գոտիների ինտերակտիվ ուղեցույց',
            url: window.location.href
          });
        } catch (err) {}
      } else {
        try {
          await navigator.clipboard.writeText(window.location.href);
          const orig = shareBtn.textContent;
          shareBtn.textContent = '✅';
          setTimeout(() => { shareBtn.textContent = orig; }, 1800);
        } catch (err) {}
      }
    });
  }
});
