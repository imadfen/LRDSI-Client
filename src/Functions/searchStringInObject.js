function searchStringInObject(object, searchString) {
    for (let property in object) {
      if (object.hasOwnProperty(property)) {
        var value = object[property];
  
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            var nestedValue = value[i];
  
            if (typeof nestedValue === 'object' && nestedValue !== null) {
              if (searchStringInObject(nestedValue, searchString)) {
                return true;
              }
            }
          }
        } else if (typeof value === 'string') {
          var propertyValue = value.normalize("NFD").toLowerCase();
          var search = searchString.normalize("NFD").toLowerCase();
  
          if (propertyValue.includes(search)) {
            return true;
          }
        } else if (typeof value === 'object' && value !== null) {
          if (searchStringInObject(value, searchString)) {
            return true;
          }
        }
      }
    }
    return false;
}

export default searchStringInObject