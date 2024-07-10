class Field {
	constructor(question, options, next_pages) {
	  this.question = question;
	  this.options = options;
	  this.next_pages = next_pages;
	}
  }
  
  class OptionsField extends Field {
    constructor(question, options, next_pages) {
      super(question, options, next_pages);
      this.type = "option";
    }
  }
  
  class NumberField extends Field {
    constructor(question, options, next_pages) {
      super(question, options, next_pages);
      this.type = "number";
    }
  }
  
  class TextField extends Field {
    constructor(question, options, next_pages) {
      super(question, options, next_pages);
      this.type = "text";
    }
  }
  
  class Page {
    constructor(fields) {
      this.fields = fields;
    }
  }
  
  const field1 = new TextField("Kak se Kazvash");
  
  const field2 = new NumberField("Na kolko godini si", [[0, 18], [18, 120]], ["/dete", "/vuzrasten"]);
  
  const page1 = new Page([field1, field2]);
  
  const field3 = new OptionsField("Kude Jiveesh", ['Sofia', 'Burgas', 'Varna'], ["/sofianec", "/burgaskabatka", "/varan"]);
  
  const page2 = new Page([field3]);
  
  const field4 = new OptionsField("Kakuv pol si", ['Momche', 'Momiche', 'Drugo'], ["/he", "/she", "/it"]);
  
  const page3 = new Page([field4]);
  
  const field5 = new TextField("Kak e vremeto v Sofia?");
  
  const page4 = new Page([field5]);
  
  const field6 = new TextField("Kak e vremeto v Burgas?");
  
  const page5 = new Page([field6]);
  
  const field7 = new TextField("Kak e vremeto v Varna?");
  
  const page6 = new Page([field7]);
  
  const field8 = new TextField("Znachi si malchugan?");
  
  const page7 = new Page([field8]);
  
  const field9 = new TextField("Znachi si malka?");
  
  const page8 = new Page([field9]);
  
  const field10 = new TextField("Znachi si Apache 47 boen helikopter?");
  
  const page9 = new Page([field10]);
  
  const MainObj = {
	"/": page1,
	"/vuzrasten": page2,
	"/dete": page3,
	"/sofianec": page4,
	"/burgaskabatka": page5,
	"/varan": page6,
	"/he": page7,
	"/she": page8,
	"/it": page9
  };
  
  module.exports = MainObj;
  