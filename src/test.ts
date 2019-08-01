private getSizeVariants(selectedSkuColor, selectedSkuCondition, skuSiblings) {
         // Filters non-matching colors from skuItems and concats the arrays
         return skuSiblings
             .map((skus) => {
                 return skus.filter((sku) => {
                     return selectedSkuColor === sku.color && selectedSkuCondition === sku.condition.key;
                 });
             })
             .reduce((matchingSkus, matchingSku) => {
                 return matchingSkus.concat(matchingSku);
             }).sort(this.marketingSequenceSort);
     }

     const skuSiblings = Object.keys(skuFamily).map((key1) => {
      return Object.keys(skuFamily[key1]).map((key2) => {
          const skuInContext = skuFamily[key1][key2];
          return formatSku(skuInContext);
      });
  });