//宣告DOM
let sendArea = document.querySelector('.sendArea');
let list = document.querySelector('.list');
let data = JSON.parse(localStorage.getItem('bmiData')) || [];

//監聽事件
sendArea.addEventListener('click',addList, false);
updateList(data);

//新增資料到localStorage
function addList() {
    let height = document.querySelector('.inputHeight').value.trim();
    let heightMeter = height / 100;
    let weight = document.querySelector('.inputWeight').value.trim();
    let bmi = weight / (heightMeter * heightMeter);
    let bmiValue = bmi.toFixed(2);
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth();
    let date = time.getDate();
    let todo = {
        height : height,
        weight : weight,
        bmi : bmiValue,
        date : month+'-'+date+'-'+year
    };
    if(height == '' || weight == ''){return};
    data.push(todo);
    localStorage.setItem('bmiData',JSON.stringify(data));
    updateList(data);
    document.querySelector('.inputHeight').value = '';
    document.querySelector('.inputWeight').value = '';
}

//更新表單內容
function updateList(data){
    let str = '';
    let len = data.length;
    for(let i = 0 ; i < len ; i++){
        if(data[i].bmi >= 35){
        str += '<li class=" p-3 d-flex justify-content-between my-3 border-veryFat"><span>重度肥胖</span><label for="">BMI</label><span>'+data[i].bmi+'</span><label for="">weight</label><span>'+data[i].weight+'kg</span><label for="">height</label><span>'+data[i].height+'cm</span><span>'+data[i].date+'</span></li>'
        }else if(data[i].bmi >=30 && data[i].bmi <35){
            str += '<li class=" p-3 d-flex justify-content-between my-3 border-soFat"><span>中度肥胖</span><label for="">BMI</label><span>'+data[i].bmi+'</span><label for="">weight</label><span>'+data[i].weight+'kg</span><label for="">height</label><span>'+data[i].height+'cm</span><span>'+data[i].date+'</span></li>'
        }else if(data[i].bmi >=27 && data[i].bmi <30){
            str += '<li class=" p-3 d-flex justify-content-between my-3 border-fat"><span>輕度肥胖</span><label for="">BMI</label><span>'+data[i].bmi+'</span><label for="">weight</label><span>'+data[i].weight+'kg</span><label for="">height</label><span>'+data[i].height+'cm</span><span>'+data[i].date+'</span></li>'
        }else if(data[i].bmi >=24 && data[i].bmi <27){
            str += '<li class=" p-3 d-flex justify-content-between my-3 border-fat"><span>過重</span><label for="">BMI</label><span>'+data[i].bmi+'</span><label for="">weight</label><span>'+data[i].weight+'kg</span><label for="">height</label><span>'+data[i].height+'cm</span><span>'+data[i].date+'</span></li>'
        }else if(data[i].bmi >=18.5 && data[i].bmi <24){
            str += '<li class=" p-3 d-flex justify-content-between my-3 border-green"><span>理想</span><label for="">BMI</label><span>'+data[i].bmi+'</span><label for="">weight</label><span>'+data[i].weight+'kg</span><label for="">height</label><span>'+data[i].height+'cm</span><span>'+data[i].date+'</span></li>'
        }else{
            str += '<li class=" p-3 d-flex justify-content-between my-3 border-thin"><span>過瘦</span><label for="">BMI</label><span>'+data[i].bmi+'</span><label for="">weight</label><span>'+data[i].weight+'kg</span><label for="">height</label><span>'+data[i].height+'cm</span><span>'+data[i].date+'</span></li>'
        }
    };
    list.innerHTML = str;
}