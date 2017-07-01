
(function(){
  function lang() {
  console.log("LANG");
            //ADD WORD HERE
  replaceTextOnPage('one', 'uno');
  replaceTextOnPage('two', 'dos');  
  replaceTextOnPage('three', 'tres'); 
  replaceTextOnPage('four', 'las cuatro');   
  replaceTextOnPage('five', 'cinco'); 
  replaceTextOnPage('six', 'seis');
  replaceTextOnPage('seven', 'siete');
  replaceTextOnPage('eight', 'ocho');
  replaceTextOnPage('nine', 'nueve');
  replaceTextOnPage('ten', 'Ddiez');
           
}

document.getElementById('langBtn').addEventListener('click',function(e){
  e.preventDefault()
  lang();
});



//CALLING THE FUNCTION


function replaceTextOnPage(from, to){
  getAllTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.childNodes.length) 
        for(var i = 0; i < node.childNodes.length; i++) 
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE) 
        result.push(node);
    })(document);

    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}
})()
