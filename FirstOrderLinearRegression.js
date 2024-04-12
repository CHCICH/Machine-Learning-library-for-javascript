let {separate} = require('./utils');

const FirstOrderLinearRegression = (dataset,LearningRate, epochs) =>{
    let m = 1;
    let p = 1;
    const gradient_decent = (m_now ,p_now)=>{
        let m_gradient = 0;
        let p_gradient = 0;
        let n = dataset.length;
        let x = separate(dataset,0);
        let y = separate(dataset,1);

        for(let i = 0; i <dataset.length ; i++){
            m_gradient = -(2/n) * (y[i] - (m_now * x[i] + p_now))*x[i   ];
            p_gradient = -(2/n) * (y[i] - (m_now * x[i] + p_now));

        }
        let m0 = m_now - LearningRate * m_gradient;
        let p0 =  p_now - LearningRate * p_gradient;
        return [m0 , p0];
    }
    
    for(let i = 0 ; i < epochs ; i++){
        console.log(i)
        let NewValuesOfmAndp = gradient_decent(m,p);
        m = NewValuesOfmAndp[0];
        p = NewValuesOfmAndp[1]
    }
    return [m ,p]
}

module.exports = {FirstOrderLinearRegression:FirstOrderLinearRegression}