const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFaviconFromSVG(svgPath, outputName) {
  try {
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Создаем PNG версии разных размеров
    const sizes = [16, 32, 48, 64, 128, 256];
    
    for (const size of sizes) {
      const pngBuffer = await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
      
      const outputPath = path.join(__dirname, `../public/${outputName}-${size}x${size}.png`);
      fs.writeFileSync(outputPath, pngBuffer);
      console.log(`✅ Generated ${outputName}-${size}x${size}.png`);
    }
    
    // Создаем ICO файл (используем 32x32 как основу)
    const icoBuffer = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    const icoPath = path.join(__dirname, `../public/${outputName}.ico`);
    fs.writeFileSync(icoPath, icoBuffer);
    console.log(`✅ Generated ${outputName}.ico`);
    
  } catch (error) {
    console.error(`❌ Error generating ${outputName}:`, error);
  }
}

async function generateAllFavicons() {
  console.log('🎨 Generating all favicon versions...\n');
  
  const favicons = [
    { svg: 'favicon.svg', name: 'favicon' },
    { svg: 'favicon-modern.svg', name: 'favicon-modern' },
    { svg: 'favicon-creative.svg', name: 'favicon-creative' }
  ];
  
  for (const favicon of favicons) {
    const svgPath = path.join(__dirname, `../public/${favicon.svg}`);
    if (fs.existsSync(svgPath)) {
      console.log(`📝 Processing ${favicon.svg}...`);
      await generateFaviconFromSVG(svgPath, favicon.name);
      console.log('');
    } else {
      console.log(`⚠️  ${favicon.svg} not found, skipping...`);
    }
  }
  
  console.log('🎉 All favicons generated successfully!');
}

generateAllFavicons(); 