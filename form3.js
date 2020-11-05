class Form3 {

    constructor() {
      this.button1 = createButton('Area A');
      this.button2 = createButton('Area B');
      this.button3 = createButton('Area C')
      this.title = createElement('h1');
      this.title1 = createElement('h2');
      this.title2 = createElement('h2');
      this.title3 = createElement('h2');
      this.wording1 = createElement('p')
      this.input = createInput("0");
      this.availability1 = createElement('h2');
      this.availability2 = createElement('h2');
      this.availability3 = createElement('h2');
    }
    hide(){
      this.button1.hide();
      this.title.hide();
      this.title1.hide();
      this.title2.hide();
      this.title3.hide();
      this.button2.hide();
      this.button3.hide();
      this.input.hide();
      this.wording1.hide();
      this.availability1.hide(); 
      this.availability2.hide(); 
      this.availability3.hide(); 
    }
    show(){
        this.button1.show();
        this.title.show();
        this.title1.show();
        this.title2.show();
        this.title3.show();
        this.button2.show();
        this.button3.show();
        this.input.show();
        this.wording1.show();
        this.availability1.show(); 
      this.availability2.show(); 
      this.availability3.show(); 
      }

    
  
    display(){
        getPlatesA();
        getPlatesB();
        getPlatesC();
      this.title.html("Collect your smiles here");
      this.availability1.html("Area A : "+gpa)
      this.availability2.html("Area B : "+gpb); 
      this.availability3.html("Area C : "+gpc);
      this.availability1.position(30,80);
      this.availability2.position(30,110);
      this.availability3.position(30,140);
      this.wording1.html("packets")
      this.title.position(150, 0);
      this.title1.html("Enter the number of plates you want to collect");
      this.title1.position(30, 200);
      this.title2.html("Available food plates");
      this.title2.position(30, 50);
      this.title3.html("Please choose your location");
      this.title3.position(30, 300);
      this.input.position(150,270)
      this.wording1.position(350,255);
  
      this.button1.position(200 - 90,400);
      this.button2.position(200,400);
      this.button3.position(200 + 90, 400);

      this.button1.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.input.hide();
        this.button3.hide();
        this.title.hide();
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
        this.wording1.hide();
        minus = this.input.value();
        getPlatesA();
        writeup = minus;
        console.log(minus)
        minus = gpa-minus
        updateBankA(minus);
        gameState = 4;
      });
        this.button2.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.input.hide();
            this.button3.hide();
            this.title.hide();
            this.title1.hide();
            this.title2.hide();
            this.title3.hide();
            this.wording1.hide();
            minus = this.input.value();
        getPlatesB();
        writeup = minus;
        console.log(minus)
        minus = gpb-minus
        updateBankB(minus);
            gameState = 4;
        })
        this.button3.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.input.hide();
            this.button3.hide();
            this.title.hide();
            this.title1.hide();
            this.title2.hide();
            this.title3.hide();
            this.wording1.hide();
            minus = this.input.value();
        getPlatesC();
        writeup = minus;
        
        minus = gpc-minus
        console.log(minus)
        updateBankC(minus);
            gameState = 4;
        })
  
    }
  }