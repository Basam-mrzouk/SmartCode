
    const image = document.getElementById('image');
    const upload = document.getElementById('upload');
    const brightness = document.getElementById('brightness');
    const contrast = document.getElementById('contrast');
    const saturation = document.getElementById('saturation');
    const blur = document.getElementById('blur');
    const hue = document.getElementById('hue');
    const grayscale = document.getElementById('grayscale');
    const invert = document.getElementById('invert');
    const sepia = document.getElementById('sepia');
    const downloadButton = document.getElementById('download');

    upload.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        image.src = URL.createObjectURL(file);
        image.style.display = 'block';
        downloadButton.style.display = 'block';
      }
    });

    function updateFilters() {
      const brightnessValue = brightness.value;
      const contrastValue = contrast.value;
      const saturationValue = saturation.value;
      const blurValue = blur.value;
      const hueValue = hue.value;
      const grayscaleValue = grayscale.value;
      const invertValue = invert.value;
      const sepiaValue = sepia.value;

      image.style.filter = `
        brightness(${brightnessValue}%)
        contrast(${contrastValue}%)
        saturate(${saturationValue}%)
        blur(${blurValue}px)
        hue-rotate(${hueValue}deg)
        grayscale(${grayscaleValue}%)
        invert(${invertValue}%)
        sepia(${sepiaValue}%)
      `;
    }

    brightness.addEventListener('input', updateFilters);
    contrast.addEventListener('input', updateFilters);
    saturation.addEventListener('input', updateFilters);
    blur.addEventListener('input', updateFilters);
    hue.addEventListener('input', updateFilters);
    grayscale.addEventListener('input', updateFilters);
    invert.addEventListener('input', updateFilters);
    sepia.addEventListener('input', updateFilters);

    downloadButton.addEventListener('click', () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      context.filter = image.style.filter;
      context.drawImage(image, 0, 0);

      const link = document.createElement('a');
      link.download = 'edited-image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
