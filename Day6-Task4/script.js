class Uber{ 
    static BaseRate = 35; 
    static BookingFee = 10; 
    static RatePerMinute = 1; 
    static RatePerKM = 10; 
    constructor(time=1,KM=1){
        this.time = time; 
        this.KM = KM; 
    }

 UberGoRate(time=this.time,KM=this.KM){
     // fare for Uber Go Economy
     console.log(`Total Cost of Uber Go is Rs. ${(Uber.BaseRate)+(Uber.BookingFee)+((Uber.RatePerMinute)*time)+((Uber.RatePerKM)*KM)}`);
 }

 GoSedan(time=this.time,KM=this.KM){
     // fare for Go Sedan economy
     console.log(`Total Cost of Go Sedan is Rs. ${(Uber.BaseRate=40)+(Uber.BookingFee)+((Uber.RatePerMinute)*time)+((Uber.RatePerKM=14)*KM)}`);
 }

 UberXL(time=this.time,KM=this.KM){
     // fare for UberXL economy
     console.log(`Total Cost of UberXL is Rs. ${(Uber.BaseRate=100)+(Uber.BookingFee)+((Uber.RatePerMinute=2)*time)+((Uber.RatePerKM=20)*KM)}`);
 }
}

let ride = new Uber();
ride.UberGoRate(24,12); 
ride.GoSedan(24,12); 
ride.UberXL(24,12); 