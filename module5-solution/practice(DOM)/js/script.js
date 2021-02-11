//DOM manipulation
//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);

//DOMContentLoaded를 사용하여 script를 body태그 끝자락에 안써도 읽을 수 있음.
//css,picture를 제외한 모든 html 컨텐츠가 로드된후에 function(event)가 실행됨

document.addEventListener("DOMContentLoaded",
  function(event) {

    function sayHello(event) {
  
      console.log(this);
      //unobstrusive event   binding을 했기때문에 this는 window가 아니라 button이 됨.
      this.textContent = "Said it!";
      var name = document.getElementById("name").value;
      var message="<h2>Hello " + name + "!</h2>";
    
      //message의 <h2></h2> 같은 HTML요소까지 그대로 화면에 출력되어버리게됨
      //document.getElementById("content").textContent = message;
    
      //html File의 div 안에 html요소를 넣어주는 효과
      document.getElementById("content").innerHTML = message;
    
      if(name==="student") {
        //getElementById 대체 : querySelector
         //textContent로부터 primitive를 copy by value로 복사
        var title= document.querySelector("#title").textContent;
    
        //#title 대신 h1요소로 가져올 수 있음. 처음으로 매칭되는 h1 요소에 해당되는것을 가져옴.
        //특정 query selection에 매치되는 element 리스트를 가져오고싶다면 query all selector 메서드를 씀
        //var title=  document.querySelector("h1").textContent;
    
        title+= " & Loving it!";
        
        //property를 명시적으로 세팅해줌
        document.querySelector("#title").textContent=title;
      }
    }//End sayHello

    //Unobtrusive event binding
    document.querySelector("button").addEventListener("click" ,sayHello);
    
    document.querySelector("body").addEventListener("mousemove",
      function(event) {
        if(event.shiftKey === true){
          console.log("x: " + event.clientX);
          console.log("y: " + event.clientY);
        }
      }
    );
  
    //focus되는경우 : focus / 벗어나는경우: blur 
    //document.querySelector("input").addEventListener("blur" ,sayHello);
    
    //Value setting이기 떄문에 () 안붙임.
    //document.querySelector("button").onclick = sayHello;
  }
);

