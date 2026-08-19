const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

async function createPresentation() {
  const pptx = new pptxgen();

  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'AXIOS INITIATIVE';
  pptx.company = 'AXIOS INITIATIVE';
  pptx.title = 'AXIOS Initiative - Presentación Ejecutiva';

  const BG_COLOR = '0E172A';       // Dark Navy Blue
  const CARD_BG = '162238';        // Dark Slate Card
  const ORANGE_PRIMARY = 'E35309'; // Brand Primary Orange
  const ORANGE_LIGHT = 'FF8A50';   // Light Accent Orange
  const TEXT_WHITE = 'FFFFFF';
  const TEXT_MUTED = '94A3B8';
  const TEXT_BODY = 'E2E8F0';

  const assetsDir = path.join(__dirname, 'assets');
  const logoHeader = path.join(assetsDir, 'logo-header.png');
  const programSponsorshipImg = path.join(assetsDir, 'program-sponsorship.jpg');

  // ==========================================
  // SLIDE 1: PORTADA (COVER)
  // ==========================================
  const slide1 = pptx.addSlide();
  slide1.background = { color: BG_COLOR };

  // Header Logo
  if (fs.existsSync(logoHeader)) {
    slide1.addImage({ path: logoHeader, x: 0.5, y: 0.4, w: 2.8, h: 0.65 });
  }

  // 501(c)(3) Badge
  slide1.addText('ORGANIZACIÓN CRISTIANA 501(c)(3) • ESTADO DE FLORIDA', {
    x: 0.5, y: 1.25, w: 5.6, h: 0.35,
    fontFace: 'Arial', fontSize: 9.5, bold: true, color: ORANGE_LIGHT,
    fill: { color: '1A2744' }, align: 'left', inset: 0.08
  });

  // Slide 1 Title
  slide1.addText('Restaurando la dignidad,\nHonrando el llamado,\nInspirando esperanza', {
    x: 0.5, y: 1.75, w: 5.8, h: 1.6,
    fontFace: 'Arial', fontSize: 26, bold: true, color: TEXT_WHITE,
    lineSpacing: 32
  });

  // Slide 1 Subtitle
  slide1.addText('Existimos para honrar, fortalecer y acompañar a pastores y sus familias, brindándoles atención integral, restauración, capacitación y apoyo financiero.', {
    x: 0.5, y: 3.45, w: 5.8, h: 1.1,
    fontFace: 'Arial', fontSize: 12, color: TEXT_BODY,
    lineSpacing: 17
  });

  // Hero Image (Right Side - Properly fits within 13.33 x 7.5 canvas with margin)
  if (fs.existsSync(programSponsorshipImg)) {
    slide1.addImage({
      path: programSponsorshipImg,
      x: 6.6, y: 0.4, w: 6.2, h: 4.25
    });
  }

  // 4 Pillars Box Grid at bottom of Slide 1 (Perfectly aligned across 13.33" width)
  const pillars = [
    { title: 'CUIDAR', desc: 'Salud mental y emocional pastoral.' },
    { title: 'RESTAURAR', desc: 'Retiros y renovación espiritual.' },
    { title: 'EQUIPAR', desc: 'Capacitación y mentoría práctica.' },
    { title: 'CONECTAR', desc: 'Puentes de patrocinio y alianza.' }
  ];

  pillars.forEach((p, idx) => {
    const boxW = 2.88;
    const gap = 0.25;
    const xPos = 0.5 + idx * (boxW + gap);
    
    slide1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 4.9, w: boxW, h: 2.1,
      fill: { color: CARD_BG },
      line: { color: ORANGE_PRIMARY, width: 1.5 },
      rectRadius: 0.1
    });

    slide1.addText(p.title, {
      x: xPos + 0.12, y: 5.1, w: boxW - 0.24, h: 0.35,
      fontFace: 'Arial', fontSize: 13, bold: true, color: ORANGE_LIGHT, align: 'center'
    });

    slide1.addText(p.desc, {
      x: xPos + 0.12, y: 5.5, w: boxW - 0.24, h: 1.3,
      fontFace: 'Arial', fontSize: 10.5, color: TEXT_BODY, align: 'center'
    });
  });

  // ==========================================
  // SLIDE 2: INICIATIVAS & ORIGEN
  // ==========================================
  const slide2 = pptx.addSlide();
  slide2.background = { color: BG_COLOR };

  // Header Bar
  slide2.addText('INICIATIVAS & ORIGEN INSTITUCIONAL', {
    x: 0.6, y: 0.4, w: 8.0, h: 0.3,
    fontFace: 'Arial', fontSize: 11, bold: true, color: ORANGE_LIGHT
  });

  slide2.addText('Cuidando al corazón detrás del llamado', {
    x: 0.6, y: 0.7, w: 10.0, h: 0.6,
    fontFace: 'Arial', fontSize: 24, bold: true, color: TEXT_WHITE
  });

  // Initiative 1 Card
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.8, h: 2.2,
    fill: { color: CARD_BG },
    line: { color: '2A3B5C', width: 1 },
    rectRadius: 0.1
  });
  slide2.addText('Iniciativa 01: Salud Mental y Espiritual', {
    x: 0.8, y: 1.65, w: 5.4, h: 0.4,
    fontFace: 'Arial', fontSize: 15, bold: true, color: ORANGE_LIGHT
  });
  slide2.addText('Atención integral, consejería confidencial, evaluaciones de bienestar y retiros espirituales diseñados para prevenir el agotamiento (burnout) y restaurar a los matrimonios pastorales.', {
    x: 0.8, y: 2.1, w: 5.4, h: 1.35,
    fontFace: 'Arial', fontSize: 11.5, color: TEXT_BODY, lineSpacing: 16
  });

  // Initiative 2 Card
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.7, y: 1.45, w: 6.0, h: 2.2,
    fill: { color: CARD_BG },
    line: { color: '2A3B5C', width: 1 },
    rectRadius: 0.1
  });
  slide2.addText('Iniciativa 02: Capacitación Teológica', {
    x: 6.9, y: 1.65, w: 5.6, h: 0.4,
    fontFace: 'Arial', fontSize: 15, bold: true, color: ORANGE_LIGHT
  });
  slide2.addText('Oficinas de pregação expositiva, mentorias de liderança, revitalização de igrejas e desenvolvimento da próxima geração de pastores e plantadores.', {
    x: 6.9, y: 2.1, w: 5.6, h: 1.35,
    fontFace: 'Arial', fontSize: 11.5, color: TEXT_BODY, lineSpacing: 16
  });

  // History & Axios Meaning Block
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 3.85, w: 12.1, h: 1.4,
    fill: { color: '131E36' },
    line: { color: ORANGE_PRIMARY, width: 1.5 },
    rectRadius: 0.1
  });
  slide2.addText('Nuestra Historia & El Significado de AXIOS', {
    x: 0.8, y: 4.0, w: 11.7, h: 0.35,
    fontFace: 'Arial', fontSize: 14, bold: true, color: TEXT_WHITE
  });
  slide2.addText('Derivado del griego original, AXIOS significa "Digno, Valioso, Merecedor de Honor" (1 Timoteo 5:17). Nacida de casi 30 años de experiencia pastoral del Pr. Lielson Penido y una investigación en más de 20 países de Latinoamérica, Axios Initiative responde a la pregunta: ¿Quién cuida de quienes cuidan?', {
    x: 0.8, y: 4.4, w: 11.7, h: 0.75,
    fontFace: 'Arial', fontSize: 11.5, color: TEXT_BODY, lineSpacing: 16
  });

  // Leadership Row (Bottom Slide 2)
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 5.4, w: 5.8, h: 1.5,
    fill: { color: CARD_BG },
    line: { color: '2A3B5C', width: 1 },
    rectRadius: 0.1
  });
  slide2.addText('Pr. Lielson Penido', {
    x: 0.8, y: 5.55, w: 5.4, h: 0.3,
    fontFace: 'Arial', fontSize: 13, bold: true, color: ORANGE_LIGHT
  });
  slide2.addText('Fundador y Director Ejecutivo\nExperiencia como misionero en Europa, pastor de adorno y Director de Lenguas de la Asociación Bautista de Tampa Bay.', {
    x: 0.8, y: 5.9, w: 5.4, h: 0.9,
    fontFace: 'Arial', fontSize: 10.5, color: TEXT_BODY, lineSpacing: 15
  });

  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.7, y: 5.4, w: 6.0, h: 1.5,
    fill: { color: CARD_BG },
    line: { color: '2A3B5C', width: 1 },
    rectRadius: 0.1
  });
  slide2.addText('Junta Directiva', {
    x: 6.9, y: 5.55, w: 5.6, h: 0.3,
    fontFace: 'Arial', fontSize: 13, bold: true, color: ORANGE_LIGHT
  });
  slide2.addText('Dr. Francisco Juarbe (Vicepresidente), Pr. Mario Figueroa (Secretario) y Pr. David Endara (Tesorero).\nGarantizan estricta gobernanza fiduciaria y transparencia 501(c)(3).', {
    x: 6.9, y: 5.9, w: 5.6, h: 0.9,
    fontFace: 'Arial', fontSize: 10.5, color: TEXT_BODY, lineSpacing: 15
  });

  // ==========================================
  // SLIDE 3: PROGRAMA DE ADOPCIÓN & CONTACTO
  // ==========================================
  const slide3 = pptx.addSlide();
  slide3.background = { color: BG_COLOR };

  slide3.addText('PROGRAMA DE ADOPCIÓN & CONTACTO', {
    x: 0.6, y: 0.4, w: 8.0, h: 0.3,
    fontFace: 'Arial', fontSize: 11, bold: true, color: ORANGE_LIGHT
  });

  slide3.addText('Iniciativa 03: Adopción Familiar Pastoral', {
    x: 0.6, y: 0.7, w: 10.0, h: 0.5,
    fontFace: 'Arial', fontSize: 24, bold: true, color: TEXT_WHITE
  });

  // Sponsorship Table
  const tableRows = [
    [
      { text: 'PATROCINIO MENSUAL', options: { bold: true, color: ORANGE_LIGHT, fill: '1A2744', fontSize: 11 } },
      { text: 'PERFIL FINANCIERO GENERAL VERIFICADO', options: { bold: true, color: ORANGE_LIGHT, fill: '1A2744', fontSize: 11 } }
    ],
    [
      { text: '$100 - $200 / mes', options: { bold: true, color: TEXT_WHITE, fill: CARD_BG, fontSize: 11 } },
      { text: 'Apoyo complementario cuando la iglesia o familia ya cubren una parte significativa de sus necesidades básicas.', options: { color: TEXT_BODY, fill: CARD_BG, fontSize: 10.5 } }
    ],
    [
      { text: '$300 / mes', options: { bold: true, color: TEXT_WHITE, fill: CARD_BG, fontSize: 11 } },
      { text: 'Brecha moderada verificada que afecta las necesidades normales de la casa.', options: { color: TEXT_BODY, fill: CARD_BG, fontSize: 10.5 } }
    ],
    [
      { text: '$400 / mes', options: { bold: true, color: TEXT_WHITE, fill: CARD_BG, fontSize: 11 } },
      { text: 'Brecha significativa entre la compensación pastoral y los costos de vida locales.', options: { color: TEXT_BODY, fill: CARD_BG, fontSize: 10.5 } }
    ],
    [
      { text: '$500 / mes', options: { bold: true, color: TEXT_WHITE, fill: CARD_BG, fontSize: 11 } },
      { text: 'Patrocinio máximo estándar de Axios para necesidad verificada substancial.', options: { color: TEXT_BODY, fill: CARD_BG, fontSize: 10.5 } }
    ]
  ];

  slide3.addTable(tableRows, {
    x: 0.6, y: 1.3, w: 12.1, colW: [3.0, 9.1],
    border: { pt: 1, color: '2A3B5C' },
    margin: 8
  });

  // 3-Level Verification Card
  slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 3.8, w: 12.1, h: 1.4,
    fill: { color: CARD_BG },
    line: { color: ORANGE_PRIMARY, width: 1.2 },
    rectRadius: 0.1
  });
  slide3.addText('Proceso de Verificación en 3 Niveles (Sello Pastor Verificado Axios)', {
    x: 0.8, y: 3.95, w: 11.7, h: 0.35,
    fontFace: 'Arial', fontSize: 13.5, bold: true, color: ORANGE_LIGHT
  });
  slide3.addText('Cada pastor participante atraviesa una evaluación rigurosa de carácter bíblico (1 Timoteo 3 / Tito 1), necesidad financiera documentada y recomendación escrita independiente de 3 organismos:\n1. Iglesia Local (Carácter y ministerio)  •  2. Asociación Batista (Participación activa)  •  3. Convención Batista (Testimonio denominacional)', {
    x: 0.8, y: 4.35, w: 11.7, h: 0.75,
    fontFace: 'Arial', fontSize: 11, color: TEXT_BODY, lineSpacing: 16
  });

  // Contact / CTA Box
  slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 5.35, w: 12.1, h: 1.55,
    fill: { color: '131E36' },
    line: { color: ORANGE_PRIMARY, width: 2 },
    rectRadius: 0.12
  });
  slide3.addText('Adopte un Proyecto o Patrocine una Familia Pastoral', {
    x: 0.8, y: 5.5, w: 11.7, h: 0.4,
    fontFace: 'Arial', fontSize: 17, bold: true, color: TEXT_WHITE, align: 'center'
  });
  slide3.addText('Su generosidad deducible de impuestos fortalece directamente a quienes dedican su vida a cuidar la Iglesia en Latinoamérica.', {
    x: 0.8, y: 5.9, w: 11.7, h: 0.4,
    fontFace: 'Arial', fontSize: 11.5, color: TEXT_BODY, align: 'center'
  });
  slide3.addText('📍 Estado de Florida, EE.UU.   •   ✉️ contact@axiosinitiative.org   •   🌐 axios-initiative.web.app', {
    x: 0.8, y: 6.3, w: 11.7, h: 0.4,
    fontFace: 'Arial', fontSize: 12, bold: true, color: ORANGE_LIGHT, align: 'center'
  });

  // Save presentation to scratch directory
  const outputPath = path.join(__dirname, 'AXIOS_Initiative_Presentacion_Ejecutiva.pptx');
  await pptx.writeFile({ fileName: outputPath });
  console.log(`Presentación creada exitosamente en: ${outputPath}`);
}

createPresentation().catch(err => {
  console.error('Error al generar la presentación PowerPoint:', err);
});
