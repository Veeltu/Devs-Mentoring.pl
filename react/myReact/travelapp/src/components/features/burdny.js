borderSigns.map((sign) => {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].cca3 == sign)
        return {
          name: countries[i].name.common,
          linkName: countries[i].name.common
            .replace(/\s+/g, "_")
            .toLowerCase(),
        };
    }
  })