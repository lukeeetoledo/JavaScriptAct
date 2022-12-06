// Get the list of unique brands from the array below
// Modified by Luke Toledo

const itemList = [
  { brand: "GOODYEAR", design: "ASSURANCE DURAPLUS" },
  { brand: "NEXEN", design: "ROADIAN AT PRO RA8" },
  { brand: "NEXEN", design: "ROADIAN HTX RH5" },
  { brand: "DOUBLESTAR", design: "DH05" },
  { brand: "MAXXIS", design: "MECOTRA ME3" },
  { brand: "GOODYEAR", design: "CARGO MARATHON 2" },
  { brand: "SAILUN", design: "ATREZZO INSPIRE" },
  { brand: "TOYO", design: "PROXES CR1" },
  { brand: "TOYO", design: "OPEN COUNTRY AT 2" },
  { brand: "GOODYEAR", design: "DURAPLUS" },
  { brand: "BRIDGESTONE", design: "DUELER H/T 684" },
  { brand: "CONTINENTAL", design: "COMFORTCONTACT CC6" },
  { brand: "BRIDGESTONE", design: "ECOPIA EP300" }
];
//created a function for avoiding duplication of brand
function unique(itemList, brand) {
  return itemList.reduce((accumulator, current) => {
      if(!accumulator.includes(current[brand])) {
        accumulator.push(current[brand])
      }
      return accumulator;
    }, []
  )
}

const uniqueBrands = unique(itemList, 'brand');
console.log('Unique Brands: ', uniqueBrands);