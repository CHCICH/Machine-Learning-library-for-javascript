
const sperate = (dataset,item)=>{
    let Newarr = [];
    for(let i = 0 ; i< dataset.length; i++){
        Newarr.push(dataset[i][item]);
    }
    return Newarr
}


const MSE = (ydata ,xdata,a,b) =>{
    let Cost = 0;
    for(let i = 0; i<ydata.length ;i++ ){
        Cost = Cost + ((ydata[i] - a*xdata[i]-b))**2;
    }
    return Cost/ydata.length
}

const SumOfvariable = (ydata ,xdata,a,b)=>{
    let Suma = 0;
    let Sumb = 0;
    for(let i = 0 ; i< ydata.length ;  i++){
        let x = xdata[i];
        let y = ydata[i];
        Suma = Suma + (-2/ydata.length)* ((y -(a*x +b))*x);
        Sumb = Sumb + (-2/ydata.length) * (y -(a*x +b));
    }
    return {a:Suma ,b:Sumb };
}

const gradient_decent = (m,p ,X,Y)=>{
    m_gradient = 0;
    p_gradient = 0 ;
    n = X.length;
    for(let i = 0 ; i < n ; i++){
        let x = X[i];
        let y = Y[i];
        m_gradient += -(2/n) * x * (y - ( m * x + p));
        p_gradient += -(2/n) * (y - ( m * x + p));
    }
    
}


const FirstOrderLinearRegression = (dataset , learningRate, accuracy) =>{
    if(accuracy <0 || learningRate <0){
        console.log('Error the accuracy and the learning rate should be always positive');
        return 0;
    }

    //lets first sperate the data between X values and Y values and generate random values for both m and p in y = mx +p  
    let Xdata = sperate(dataset, 0);
    let Ydata = sperate(dataset, 1);

    console.log(Xdata,Ydata)
    let m = 2 ;
    let p = 50 ;
    let N = dataset.length;
    const gradient_decent = (m0,p0 ,X,Y)=>{
        m_gradient = 0;
        p_gradient = 0 ;
        let n = X.length;
        for(let i = 0 ; i < n ; i++){
            let x = X[i];
            let y = Y[i];
            m_gradient += -(2/n) * x * (y - ( m0 * x + p0));
            p_gradient += -(2/n) * (y - ( m0 * x + p0));
            console.log(x,y,m_gradient,p_gradient)
        }
        m = m0 - m_gradient* learningRate;
        p = p0 - p_gradient * learningRate;
    }
    for (let iteration = 0; iteration < accuracy; iteration++) {
      gradient_decent(m,p,Xdata,Ydata);
    }
    return {coefficient: [m,p], Cost:MSE(Ydata,Xdata,m,p), literalEquation :`the line's equation is y = ${m}*x + ${p}`}
}

module.exports = {FirstOrderLinearRegression};