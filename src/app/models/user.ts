export class User{
fname:string="";
mname:string="";
lname:string="";
email:string="";
adhar:string="";
pan:string="";
phone:string="";
password:string="";

constructor(fname:string,mname:string,lname:string,email:string,adhar:string,pan:string,phone:string,password:string)
{  this.password=password
   this.adhar=adhar;
   this.email=email;
   this.fname=fname;
   this.mname=mname;
   this.pan=pan;
   this.phone=phone
}
}