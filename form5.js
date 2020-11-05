class Form5 {

    constructor() {
      this.title = createElement('h1');
      this.title2 = createElement('h3');
      this.title3 = createElement('h3');
    }
    hide(){
      
      this.title.hide();
      this.title2.hide();
      this.title3.hide();
      
    }

    show(){
      
        this.title.show();
        this.title2.show();
        this.title3.show();
        
    }
  
    display(){
      this.title.html("Thank you for using shareAsmile");
      this.title.position(20, 0);

      this.title2.html("Your contribution of "+writeup+" plates has been recorded successfully");
      this.title2.position(20, 120);

      this.title3.html("You will recieve email when someone chooses your smile");
      this.title3.position(20, 160);
  
    }
  }