/* ----- Controller ----- */
let controller = {
  getNode: (node) => {
    return document.querySelectorAll(node);
  },
  getEl: function(val, val2) {
    var val,val2,convertedNode,result;

    //Get nodeList
    val = this.getNode(val);
    val2 = this.getNode(val2);

    //Convert nodeList to Array
    convertedNode = Array.prototype.slice.call(val);

    //Loop through the Array of nodes and increment
      for (var i = 0; i < convertedNode.length; i++) {
        result = parseFloat(convertedNode[i].textContent);
          if(i === 4) {
            result += 2;
          } else if (val2[i].className === "node6") {
            result += 5;
          } else {
            result += 2.5;
          }

      //update the UI
      val[i].innerHTML = "<b>" + (result) + "</b>";
      val2[i].innerHTML = "<b>[" + (result) + "kg" + "]</b>";
      }

    }

};


/* ----- Handlers ----- */
let handlers = {
  calcNext: () => {
    controller.getEl(".node", ".node2");
    controller.getEl(".node3", ".node4");
    controller.getEl(".node5", ".node6");
  }
};
