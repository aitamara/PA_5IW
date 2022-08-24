export default class VerifData {
    static verifications = (schemaData, dataToVerif) => {
        let listError = [];
        //Vérification que le body est correctement rempli
        schemaData.forEach((val) => {
          if (!Object.keys(dataToVerif).includes(val.label)) {
            listError.push(`Champ ${val.label} manquant`);
          }
        });
    
        //Vérification que les données sont correctement remplies
        Object.entries(dataToVerif).forEach(([key, value]) => {
          if (schemaData.find((item) => item.label.match(key))) {
            let typeVal = schemaData.find((item) => item.label.match(key))?.type;
            if (!value || value === "") {
              listError.push(`Champ ${key} vide`);
            } else {
              if (typeof value === typeVal) {
                if (typeVal === "string") {
                  let reg = new RegExp("[^a-z0-9-àáâãäåòóôõöøèéêëçìíîïùúûüÿñ_s@.]+", "gmi");
                  let testReg = reg.test(value);
                  if (testReg) {
                    listError.push(`Format du champ ${key} incorrecte`);
                  }
                }
              } else {
                listError.push(`Format du champ ${key} incorrecte`);
              }
            }
          } else if (schemaData.find((item) => item.label.match(key)) === undefined) {
            listError.push(`Champ ${key} non autorisé`);
          }
        });
        console.log(listError);
    
        return listError;
      };
}