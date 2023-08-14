function imagesPath(objects) {
  const concatenatedProperties = [];
  
  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    const concatenatedProperty = obj.image_src;
    concatenatedProperties.push(concatenatedProperty);
  }

  return concatenatedProperties;
}

export default imagesPath