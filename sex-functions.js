function determineSex(species,age,billLength,billDepth,headLength,footLength) {
  if(!species) { return false; }
  if(!age) { return false; }
  if(species=="Little penguin") {
    //https://doi.org/10.1071/MU99009C
    if(age=="Adult") {
      if(!billLength) { return false; }
      if(!billDepth) { return false; }
      var dL = 1.245*billDepth+0.202*billLength-26.459;
      if(dL>0.311) {
        return "Female";
      } else {
        return "Male";
      }
    } else {
      return false; 
    }
  } else if (species=="Fiordland penguin") {
    //Notornis 68(3):188-193
    if(age=="Adult") {
      if(!footLength) { return false; }
      if(footLength<113.5) { return "Female"; }   
      if(!billDepth) { return false; }
      if(billDepth>25.5) { return "Male"; } 
      if(!billLength) { return false; }
      if(billLength<44.5) { 
        return "Female"; 
      } else {
        return "Male"; 
      }
    } else {
     return false; 
    }
  } else if (species=="Yellow-eyed penguin") {
    //https://www.jstor.org/stable/1522493
    if(!footLength) { return false; }
    if(!headLength) { return false; }
    if(age=="Chick") {
      var dL = 0.68*headLength+0.288*footLength-132.54;
    } else {
      var dL = 0.259*headLength+0.331*footLength-79.0;
    }
    if(dL<=0) {
      return "Female";
    } else {
      return "Male";
    }  
  } else if (species=="Erect-crested penguin") {
      //https://doi.org/10.1371/journal.pone.0275106
      if(!billLength) { return false; }
      if(!billDepth) { return false; }
      if(age=="Adult") {
        var dL = billDepth*billLength;
        if(dL>1478.5) {
          return "Male";
        } else {
          return ("Female")
        }
      } else {
        return false;
      }
  } else if (species=="Eastern Rockhopper penguin") {
    if(!billLength) { return false; }
    if(age=="Chick") {
      var dL = 0.468*billLength-16.856;
      //http://doi.org/10.1675/063.041.0407
    } else {
      var dL = 0.622*billLength-27.350;
      //https://doi.org/10.5253/078.098.0212
    }
    if(dL<=0) {
      return "Female";
    } else {
     return "Male"; 
    }
    
    
  } else if (species=="Humboldt penguin") {
    //http://www.jstor.org/stable/25148354
    if(!footLength) { return false; }
    if(!billDepth) { return false; }
    var dL = Math.exp(42.889-0.244*billLength-1.052*billDepth);
    dL = dL/(1+dL);
    if(dL>-0.5) {
      return "Female";
    } else {
      return "Male"; 
    }
    
  } else {
    return false; 
  }
}
