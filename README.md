# Coursera: HTML, CSS and Javascript for Web Developers
- Coursera Assignment link - 

Assignment 2 : https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment2/Assignment-2.md

Assignment 3 : https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment3/Assignment-3.md

Assignment 4 : https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment4/Assignment-4.md

# Viewing My Clone Coding

Module 3 : https://nojahoon.github.io/coursera-test/module3-solution/practice/index.html


# Checking my Assignment
Assignment 2 : https://nojahoon.github.io/coursera-test/module2-solution/index.html

Assignment 3 : https://nojahoon.github.io/coursera-test/module3-solution/index.html

Assignment 4 : https://nojahoon.github.io/coursera-test/module4-solution/index.html (Open Chrome Developer Tool and Click the consonle tab)

# Using Media Query

<pre>
<code>
@media(min-width: 767px){ //if device is under 76px, 
  //some css works        //then css works in this area
}
</code>
</pre>

It is general that using 'and' operator with media queries.

<pre>
<code>
 @media(min-width: 768px) and (max-width: 991px){ //if device: 768~991px
  //some css works                                //then css works in this area
 }
</code>
</pre>
  
# onreadystatechange and onload , XMLHttpRequest.responseText and XMLHttpRequest.response

참고하면 좋을법한 사이트들 :   
https://www.w3schools.com/xml/dom_httprequest.asp  
https://teamtreehouse.com/community/xhronreadystatechange-vs-xhronload  
https://keichee.tistory.com/202  

onreadystatechange와 onload의 차이는 onload의 경우 request가 완료될때에만 동작한다.
onreadystatechange는 XMLHttpRequest 객체의 상태정보의 값을 가진 readyState 속성이 변할때마다 적용된다.

이 차이점을 확연하게 보려고 if (xhr.readyState === xhr.DONE) 을 주석 처리해보았다.
- onreadystatechange의 경우
![onreadystatechange2](https://user-images.githubusercontent.com/59651691/107598974-80e4b880-6c62-11eb-8c9b-97617bcc0044.JPG)


![onreadystatechange](https://user-images.githubusercontent.com/59651691/107599005-98bc3c80-6c62-11eb-91f9-ae6a75cc3287.JPG)

readyState가 요청이 완료되고 응답을 받았다는 4에 대한 제어를 걸어주지 않으면 저렇게 여러번 출력된다.

- onload의 경우


![onload2](https://user-images.githubusercontent.com/59651691/107599105-cf925280-6c62-11eb-9355-2efdecf54d1a.JPG)


![onload1](https://user-images.githubusercontent.com/59651691/107599125-dd47d800-6c62-11eb-8b26-d45b46b60641.JPG)  
  readyState의 제어를 걸지 않았음에도 한번만 출력된다.

그렇다면 여기서 또 responseText와 response의 차이가 무엇인가에 대해 또 의문이 생긴다..아직까지 와닿지는 않지만 여기에 관련된 설명과 링크들이있다.

https://stackoverflow.com/questions/46751610/difference-between-xhr-response-and-xhr-responsetext-on-xmlhttprequest





