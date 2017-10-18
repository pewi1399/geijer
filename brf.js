
function brf(salesprice){ 
  price = 2660000
  bank = 1230000
  pau = 1000000 
  interest = 38000
  agent = 50000
  hemnet = 1500

  result = salesprice - price - interest - agent - hemnet
  
  if(result < -100000){
    //print("loss over 100k")
    //print(paste("result:", result))
    result = result + 100000
    
    #30 % of half of first 100k
    korr1 = 15000
    # 21 % of whatever is left of thw other half
    korr2 = -1* result/2 * 0.21
    
    korr = korr1 + korr2
    //print(paste("korr:", korr))
    
  }else if(result < 0){
  //print("loss below 100k")
    //print(paste("result:", result))
    korr = -1* result/2 * 0.30
    //print(paste("korr:", korr))
    
  }else{
    //print("Win!")
    //print(paste("result:", result))
    korr <- -1 * result * 0.30
    
  }

  andel = (salesprice - bank - pau - interest - agent + korr)/2  
  
  //print(paste("att inkassera:", andel))
  //return(andel)
}
