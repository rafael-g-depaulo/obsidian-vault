```ohm
MdTable {
  nonNlSpace = ~"\n" space
  mdTable = tableRow "\n" tableHeaderSeparator ("\n" tableRow)+
  tableRow = "|" (nonNlSpace* cellValue* nonNlSpace* "|")+
  tableHeaderSeparator = "|" nonNlSpace* ":"? nonNlSpace* ("-"+ nonNlSpace* ":"? nonNlSpace* "|" nonNlSpace*)+

  cellValue = (~"|" ~"\n" any)+
  
  
  
  
  
  sep = "|"
  zeroCol = sep
  oneCol = addCol<zeroCol>
  twoCol = addCol<oneCol>
  addCol<prefix> = prefix cellValue sep
  
  // addCol_sep<prefix> = prefix nonNlSpace* ":" nonNlSpace*  "-"+ nonNlSpace*  ":"? sep
  sepRow<colCount> = &colCount ~addCol<colCount> sepRow_
  // sepRow<colCount> = &colCount sepRow_ &breakLine
  sepRow_ = sep (nonNlSpace* ":"? nonNlSpace*  "-"+ nonNlSpace*  ":"? sep)+
  
  
  return = any*
  
  autoTable = autoTable_<zeroCol>
  autoTable_<colCount> = 
    | increaseTableSize<colCount>
    | tableFixedSize<colCount>
    
  breakLine =  nonNlSpace* "\n" nonNlSpace*
  tableFixedSize<colCount> = tableRowD<colCount> breakLine sepRow<colCount> (breakLine tableRowD<colCount>)+
    
  increaseTableSize<colCount> = &colCount autoTable_<addCol<colCount>>
  
  tableRowD<colCount> = colCount
  tableSep<colCount> = &colCount any
  
  countCol = countCol_<zeroCol>
  countCol_<acc> = 
    | countCol_<addCol<acc>>
    | acc
 
}
```

