function toggleText() {
    // после let array должен идти знак равно
    // потом квадратные скобки
    // в квадратных скобках вопросы в кавычках через запятую
    // после квадратных скобок идет точка с запятой
    //  let array = [
    //    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
    //  ];
    
    let array = [
        
        
        
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
        
       
        
    ];
    
    
    
    
    var que_arr = [];
    while(que_arr.length < 10){
        var r = Math.floor(Math.random() * array.length);
        if(que_arr.indexOf(r) === -1) que_arr.push(r);
    }
    document.getElementById("demo1").innerHTML = array[que_arr[0]];
    document.getElementById("demo2").innerHTML = array[que_arr[1]];
    document.getElementById("demo3").innerHTML = array[que_arr[2]];
    document.getElementById("demo4").innerHTML = array[que_arr[3]];
    document.getElementById("demo5").innerHTML = array[que_arr[4]];
    document.getElementById("demo6").innerHTML = array[que_arr[5]];
    document.getElementById("demo7").innerHTML = array[que_arr[6]];
    document.getElementById("demo8").innerHTML = array[que_arr[7]];
    document.getElementById("demo9").innerHTML = array[que_arr[8]];
    document.getElementById("demo10").innerHTML = array[que_arr[9]];
}
