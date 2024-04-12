import pandas as pd 
import matplotlib.pyplot as plt 
import numpy as np


data = pd.read_csv('Walmart_sales.csv')

def gradient_decent(m_now,b_now,points, L):
    m_gradient = 0
    b_gradient = 0 
    n = len(points)
    for i in range(n):
        x = points.iloc[i].CPI
        y = points.iloc[i].Temperature
        m_gradient += -(2/n) * x * (y - (m_now * x +b_now))
        b_gradient += -(2/n) * (y - (m_now * x +b_now))
    m = m_now  - L * m_gradient
    b = b_now - L * b_gradient
    return m,b 

m =1
b = 1
L=0.0001
epochs = 100

for i in range(epochs):
    m , b = gradient_decent(m,b,data,L)


print(m,b)
plt.plot(list(range(20,80)), [m * x +b for x in range(20,80)])
plt.scatter(data.CPI,data.Temperature)
plt.show()