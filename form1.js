class Form1 {

    constructor() {
      this.button1 = createButton('contributeAsmile');
      this.button2 = createButton('collectAsmile');
      this.title = createElement('h1');
      this.title2 = createElement('h3');
      this.title3 = createElement('h3');
    }
    hide(){
      this.button1.hide();
      this.title.hide();
      this.title2.hide();
      this.title3.hide();
      this.button2.hide();
    }
  
    display(){
      this.title.html("Welcome to shareAsmile");
      this.title.position(90, 0);

      this.title2.html("Thank you for your desicion to share your smiles");
      this.title2.position(50, 60);

      this.title3.html("Together lets make the world a happier place");
      this.title3.position(60, 80);
  
      this.button1.position(190,250);
      this.button2.position(200,300);

      this.button1.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.title.hide();
        this.title2.hide();
        this.title3.hide();
        gameState = 2;
      });
        this.button2.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.title.hide();
            this.title2.hide();
            this.title3.hide();
            gameState = 3;
        })
  
    }
  }