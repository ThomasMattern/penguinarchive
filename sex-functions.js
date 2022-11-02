function determineSex(species,age,billLength,billDepth,headLength,footLength) {
  if(!species) { return false; }
  if(!age) { return false; }
  if(species=="Little penguin") {
    if(age=="Adult") {
      if(!billLength) { return false; }
      if(!billDepth) { return false; }
      var dL = -4.59116+0.230657*billDepth+0.034646*billLength;
      if(dL<=0) {
        return "Female";
      } else {
        return "Male";
      }
    } else {
      return false; 
    }
  } else if (species=="Fiordland penguin") {
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
  
  } else if (species=="Humboldt penguin") {
    if(!footLength) { return false; }
    if(!billDepth) { return false; }
    var dL = 42.889-0.244*billDepth-1.052*footLength;
    if(dL<=0) {
      return "Female";
    } else {
     return "Male"; 
    }
    
  } else {
    return false; 
  }
}
