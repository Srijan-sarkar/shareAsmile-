class Form2 {

    constructor() {
      this.button1 = createButton('Area A');
      this.button2 = createButton('Area B');
      this.button3 = createButton('Area C')
      this.title = createElement('h2');
      this.title1 = createElement('h2');
      this.wording1 = createElement('p')
      this.input = createInput("0");
    }
    hide(){
      this.button1.hide();
      this.title.hide();
      this.title1.hide();
      this.button2.hide();
      this.button3.hide();
      this.input.hide();
      this.wording1.hide();
    }
    show(){
        this.button1.show();
        this.title.show();
        this.title1.show();
        this.button2.show();
        this.button3.show();
        this.input.show();
        this.wording1.show();
      }

    
  
    display(){
      this.title.html("Share your smiles here");
      this.wording1.html("packets")
      this.title.position(150, 0);
      this.title1.html("Enter the number of plates you want to share");
      this.title1.position(30, 100);
      this.input.position(150,210)
      this.wording1.position(350,195);
  
      this.button1.position(200 - 90,350);
      this.button2.position(200,350);
      this.button3.position(200 + 90, 350);

      this.button1.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.input.hide();
        this.button3.hide();
        this.title.hide();
        this.title1.hide();
        this.wording1.hide();
        add = this.input.value();
        getPlatesA();
        add = add-0
        writeup = add;
        console.log(gpa)
        updateBankA(add);
        gameState = 5;
      });
        this.button2.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.input.hide();
            this.button3.hide();
            this.title.hide();
            this.title1.hide();
            this.wording1.hide();
            add = this.input.value();
            getPlatesB();
            add = add-0
        writeup = add;
        console.log(gpb)
        updateBankB(add);
            gameState = 5;
        })
        this.button3.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.input.hide();
            this.button3.hide();
            this.title.hide();
            this.title1.hide();
            this.wording1.hide();
            add = this.input.value();
            getPlatesC();
            add = add-0
        writeup = add;
        console.log(gpc)
        updateBankC(add);
            gameState = 5;
        })
  
    }
  }