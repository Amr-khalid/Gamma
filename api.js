let game=document.getElementById("game")
let h=document.getElementById("h1")
let i=document.querySelector(".i")
let g1=document.querySelector(".g1")
let card=document.getElementById("card")
let boxs=document.querySelector(".boxs")
let ii1=document.getElementById("ii1")
let f=document.getElementById("f")
let ul=document.getElementById("ul")
let ss=document.querySelector(".s")
let group=document.querySelector(".group")

let i1=document.querySelector(".i1")
let i2=document.querySelector(".i2")
let i3=document.querySelector(".i3")
let i4=document.querySelector(".i4")
let i5=document.querySelector(".i5")
let i6=document.querySelector(".i6")

















game.addEventListener("click",function(){document.body.style.cssText=`background-image:url(s3.jpg);transition:4s`
    group.style.cssText='display:none;transition:3s;'

i.style.cssText=`display:none`
boxs.style.cssText=`display:none`

g1.style.cssText='transition:1s;display:jj;'
})
let home=document.getElementById("home")
home.addEventListener("click",function (){
document.body.style.cssText=`background-image:url(h5.jpg);transition:1s`
i.style.cssText=`display:y`
g1.style.cssText='display:none'
boxs.style.cssText=`display:none`

})
card.onclick=function(){console.log("ghad")
    document.body.style.cssText=`background-image:url(t2.jpg);transition:4s`
boxs.style.cssText='display:flex; transition:2s;'
    i.style.cssText=`display:none`
    g1.style.cssText='transition:1s;display:none;'
    group.style.cssText='display:none;transition:3s;'


}

const fileInput = document.getElementById('fileInput');

/*fileInput.addEventListener('change', (e) => {
  const file = fileInput.files[0];
  const fileName = file.name;
  const fileSize = file.size;
  const fileType = file.type;
  // Do something with the file information
  console.log(`File name: ${fileName}, File size: ${fileSize} bytes, File type: ${fileType}`);
});*/
fileInput.addEventListener("change",function(){
let file=fileInput.files[0]
let filename=file.name;
document.body.style.cssText=`background-image:url(${filename});transition:4s`
console.log(filename)

})








let in1=document.getElementById("in1")
let in2=document.getElementById("in2")
let in3=document.getElementById("in3")
let in4=document.getElementById("in4")
let r=Math.floor(Math.random()*100) 
let s=[]
function end(n1,n2,n3)
{document.getElementById("i"+n1).style.cssText=`box-shadow: #0099ff 2px 0px 20px 6px;
    background: linear-gradient(120deg, #3d1235, #1f39b1, #00ffe0, #5a00ff);
}`
document.getElementById("i"+n2).style.cssText=`box-shadow: #0099ff 2px 0px 20px 6px;
    background: linear-gradient(120deg, #3d1235, #1f39b1, #00ffe0, #5a00ff);
}`
document.getElementById("i"+n3).style.cssText=`box-shadow: #0099ff 2px 0px 20px 6px;
    background: linear-gradient(120deg, #3d1235, #1f39b1, #00ffe0, #5a00ff);
}`
ti.style.cssText='color:gold;text-transform: uppercase;'
ti.innerHTML=`win is ${s[n1]}`
setInterval(function(){ti.innerHTML+="."},1000)
setTimeout(function(){location.reload()},4000)
}


function win(){
for (let i=1;i<10;i++)
s[i]=document.getElementById("i"+i).innerHTML
if(s[1]==s[2]&&s[2]==s[3]&&s[1]!='')
{end(1,2,3)}
else if(s[4]==s[5]&&s[5]==s[6]&&s[6]!='')
    {end(4,5,6)}
 else if(s[7]==s[8]&&s[8]==s[9]&&s[9]!='')
 
    {end(7,8,9)}
 
     else if(s[1]==s[4]&&s[4]==s[7]&&s[7]!='')
    
       {end(1,4,7)}
       else if(s[3]==s[5]&&s[5]==s[7]&&s[7]!='')
        {end(3,5,7)}

        else if(s[2]==s[5]&&s[5]==s[8]&&s[8]!='')
           {end(2,5,8)}
        else if(s[3]==s[6]&&s[6]==s[9]&&s[9]!='')
           {end(3,6,9)}
        else if(s[1]==s[5]&&s[5]==s[9]&&s[9]!='')
           {end(1,5,9)}
}
in4.onclick=function(){
    if(in1.value !=''&&in2.value !='')
   { in3.value=r+"%"}}
    let m="x"
    let ti=document.querySelector(".ti")
function a(id){
let d=document.getElementById(id)
if(m=="x"&&d.innerHTML=='')
{d.innerHTML="X"
ti.innerHTML='O'
m='o'
} else if(m=="o"&&d.innerHTML=='')
{d.innerHTML="O"
    ti.innerHTML='X'
    m='x'}
    win()
}

let forr=[]
for(let j=1;j<6;j++){
forr[j]=document.getElementById("ii"+j)


}
console.log(forr)


let api="9a718345281181fea62947ee1689847c5627c733"
function ret(){


}
let fileInput1=document.getElementById("fileInput1")
let fileInput2=document.getElementById("fileInput2")
let fileInput3=document.getElementById("fileInput3")
let fileInput4=document.getElementById("fileInput4")
let fileInput5=document.getElementById("fileInput5")
let file6=document.getElementById("fileInput6")
let file7=document.getElementById("fileInput7")
let file8=document.getElementById("fileInput8")





fileInput1.addEventListener("change",function(){
    let file=fileInput1.files[0]
    let filename=file.name
    ii1.src=filename
    i1.src=file.name
})
fileInput2.addEventListener("change",function(){
    let file=fileInput2.files[0]
    let filename=file.name
    ii2.src=filename
    i2.src=filename

})
fileInput3.addEventListener("change",function(){
    let file=fileInput3.files[0]
    let filename=file.name
    ii3.src=filename
    i3.src=filename

})
fileInput4.addEventListener("change",function(){
    let file=fileInput4.files[0]
    let filename=file.name
    ii4.src=filename  
    i4.src=filename


})
fileInput5.addEventListener("change",function(){
    let file=fileInput5.files[0]
    let filename=file.name
    ii5.src=filename
    i5.src=filename


})
file6.addEventListener("change",function(){
let file=file6.files[o]
i6.src=file.name

})
file7.addEventListener("change",function(){
    let file=file7.files[o]
    i7.src=file.name
    
    })
    file8.addEventListener("change",function(){
        let file=file8.files[o]
        i8.src=file.name
        
        })
        












let user=document.getElementById("user")

user.addEventListener("click",function(){
document.body.style.cssText='background-image:url(t3.jpg)'
i.style.cssText=`display:none`
boxs.style.cssText=`display:none`
g1.style.cssText='transition:1s;display:none;'
ul.style.cssText='display:none;'
ss.style.cssText='width: 20%; height: 75vh;  margin: 8% auto; transition:4s'     
group.style.cssText='display:none;'
f.style.cssText='display:flex;transition:3s;'
    })
let sp=document.getElementById("sp");
let sp1=document.getElementById("sp1");
let sp2=document.getElementById("sp2");
sp.addEventListener("click",function(){

if(sp1.value=="amr" && sp2.value==8888)

{console.log("ghada")

    boxs.style.cssText=`display:none`
    ul.style.cssText='display:o;'
    ss.style.cssText='width: %; height: vh;  magin: 8% auto; transition:4s'     
    i.style.cssText='transition:1s;display:nne;'
    f.style.cssText='display:noe;transition:3s;'
    group.style.cssText='display:none;'
    f.style.cssText='display:none;transition:3s;'
document.body.style.cssText='body{background-image:url(h5.jpg); background-size: contain; transition: 10s; perspective: 600px'
group.style.cssText='display:grid;transition:3s;'

}
else {sp1.value=="error"}


})

//})