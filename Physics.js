let k = 9;

let angulo = 45;

let radianes = angulo * (Math.PI / 180);

let Grados = Math.cos(radianes);



let r = prompt("Por favor ingrese las medidas de los lados del cuadrado (La unidad es en cm).");
 while(r <= 0 || r == 0){
     alert("Por favor ingrese una cantidad valida.");
     r = prompt("Por favor ingrese las medidas de los lados del cuadrado (La unidad sera asumida en cm).");
 }
 
let cargaE = prompt("Selecciona la carga a evaluar: 1. Q1 2. Q2 3. Q3 4. Q4")
 switch(cargaE){
     case "1":
         q1 = prompt("Por favor ingrese el valor de la carga Q1 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
         while(q1 == 0){
             alert("Por favor ingrese un valor a Q1 para evaluar las fuerzas que actuan en el.");
              q1 = prompt("Por favor ingrese el valor de la carga Q1 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");    
         }
 
         q2 = prompt("Por favor ingrese el valor de la carga Q2 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");

         q3 = prompt("Por favor ingrese el valor de la carga Q3 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");

         q4 = prompt("Por favor ingrese el valor de la carga Q4 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");

         
         //Calculando la fuerza de la carga 1 sobre la carga 2
         f2 = Math.abs(k * (q1 * q2)/(r * 10**(-2))**2);

         //Encontrando la posición de la fuerza 2 en el plano cartesiano
         if(q2 < 0 && q1 > 0 || q2 > 0 && q1 < 0){
             f2m = f2;
         } else if(q2 > 0 && q1 > 0 || q2 < 0 && q1 < 0){
             f2m = -f2;
         } else if (q2 = 0){
             f2m = f2;
         } else{
             console.log("Error en los componentes de f2");
         }   
         
         //Calculando la fuerza de la carga 1 sobre la carga 3
         f3 = Math.abs(k * (q1 * q3)/(r * 10**(-2))**2);

         //Encontrando la posición de la fuerza 3 en el plano cartesiano
         if(q3 < 0 && q1 > 0 || q3 > 0 && q1 < 0){
             f3m = -f3;
         } else if(q3 > 0 && q1 > 0 || q3 < 0 && q1 < 0){
             f3m = f3;
         } else if (q3 = 0){
             f3m = f3;
         } else{
             console.log("Error en los componentes de f3");
         }

         //Calculando la fuerza de la carga 1 sobre la carga 4
         f4 = Math.abs(k * (q1 * q4)/(r * 10**(-2))**2);

         //Calculando la coordenadas X y Y de la fuerza 4
         f4x = Grados * f4;
         f4y = Grados * f4; 

         //Encontrando la posición de la fuerza 4 en el plano cartesiano
         if(q4< 0 && q1 > 0 || q4 > 0 && q1 < 0){
             f4x = Grados * f4;
             f4y = Grados * -f4; 
         } else if(q4 > 0 && q1 > 0 || q4 < 0 && q1 < 0){
             f4x = Grados * -f4;
             f4y = Grados * f4 
         } else if (q4 = 0){
             f4x = Grados * f4;
             f4y = Grados * f4; 
         } else{
             console.log("Error en los componentes de f4");
         }

         //Calculando las coordenadas X y Y para la fuerza resultante
         frx = f4x + f2m;
         fry = f4y + f3m;
 
         //Calculando la magnitud de la fuerza resultante
         fr = Math.sqrt( frx**2 + fry**2 );

         document.write("Los componentes de la fuerza de Q2 sobre Q1 son: ("+ parseInt(f2m) +",0)<br>");
     
         document.write("Los componentes de la fuerza de Q3 sobre Q1 son: (0,"+ parseInt(f3m) +")<br>");
         
         document.write("Los componentes de la fuerza de Q4 sobre Q1 son: ("+ parseInt(f4x) +","+ parseInt(f4y) +")<br>");
     
         document.write("Los componentes de la fuerza resultante son: ("+ parseInt(frx) +","+ parseInt(fry) +")<br>");

         document.write("La fuerza resultante es de: " + parseInt(fr) +" N/C <br>");

         break;
     case "2":         
     
         q1 = prompt("Por favor ingrese el valor de la carga Q1 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");

         q2 = prompt("Por favor ingrese el valor de la carga Q2 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
         while(q2 == 0){
             alert("Por favor ingrese un valor a Q2 para evaluar las fuerzas que actuan en el.");
              q2 = prompt("Por favor ingrese el valor de la carga Q2 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");    
         }

         q3 = prompt("Por favor ingrese el valor de la carga Q3 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");

         q4 = prompt("Por favor ingrese el valor de la carga Q4 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
 
         //Calculando la fuerza de la carga 2 sobre la carga 1
         f1 = Math.abs(k * (q1 * q2)/(r * 10**(-2))**2);

         //Encontrando la posición de la carga 1 en el plano cartesiano
         if(q2 < 0 && q1 > 0 || q2 > 0 && q1 < 0){
             f1m = -f1;
         } else if(q2 > 0 && q1 > 0 || q2 < 0 && q1 < 0){
             f1m = f1;
         } else if (q2 = 0){
             f1m = f1;
         } else{
             console.log("Error en los componentes de f1");
         }   

         //Calculando la fuerza de la carga 2 sobre la carga 3
         f3 = Math.abs(k * (q2 * q3)/(r * 10**(-2))**2);

         //Calculando las coordenadas X y Y de la fuerza 3
         f3x = Grados * f3;
         f3y = Grados * f3;
        
         //Encontrando la posición de la fuerza 3 en el plano cartesiano
         if(q3 < 0 && q2 > 0 || q3 > 0 && q2 < 0){
             f3x = Grados * -f3;
             f3y = Grados * -f3; 
         } else if(q3 > 0 && q2 > 0 || q3 < 0 && q2 < 0){
             f3x = Grados * f3;
             f3y = Grados * f3; 
         } else if (q3 = 0){
             f3x = Grados * f3;
             f3y = Grados * f3; 
         } else{
             console.log("Error en los componentes de f3");
         }

         //Calculando la fuerza de la carga 2 sobre la carga 4
         f4 = Math.abs(k * (q2 * q4)/(r * 10**(-2))**2);

         //Encontrando la posición de la fuerza 4
         if(q4 < 0 && q2 > 0 || q4 > 0 && q2 < 0){
             f4m = -f4;
         } else if(q4 > 0 && q2 > 0 || q4 < 0 && q2 < 0){
             f4m = f4;
         } else if (q4 = 0){
             f4m = f4;
         } else{
             console.log("Error en los componentes de f4");
         }

         //Calculando las coordenadas de la fuerza resultante
         frx = f3x + f1m;
         fry = f3y + f4m;
 
         //Calculando la magnitud de la fuerza resultante
         fr = Math.sqrt( frx**2 + fry**2 );

         document.write("Los componentes de la fuerza de Q1 sobre Q2 son: ("+ parseInt(f1m) +",0)<br>");
     
         document.write("Los componentes de la fuerza de Q3 sobre Q2 son: ("+ parseInt(f3x) + "," +parseInt(f3y) +")<br>");
         
         document.write("Los componentes de la fuerza de Q4 sobre Q2 son: (0,"+ parseInt(f4m) +")<br>");
     
         document.write("Los componentes de la fuerza resultante son: ("+ parseInt(frx) +","+ parseInt(fry) +")<br>");

         document.write("La fuerza resultante es de: " + parseInt(fr) +" N/C <br>");

         break;
     case "3":
         q1 = prompt("Por favor ingrese el valor de la carga Q1 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
 
         q2 = prompt("Por favor ingrese el valor de la carga Q2 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");

         q3 = prompt("Por favor ingrese el valor de la carga Q3 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
         
         while(q3 == 0){
             alert("Por favor ingrese un valor a Q3 para evaluar las fuerzas que actuan en el.");
             q3 = prompt("Por favor ingrese el valor de la carga Q3 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");    
         }
         
         q4 = prompt("Por favor ingrese el valor de la carga Q4 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");

         //Calculando la fuerza de la carga 3 sobre la carga 1
         f1 = Math.abs(k * (q1 * q3)/(r * 10**(-2))**2);

         //Encontrando la posición de la fuerza 1 en el plano cartesiano
         if(q3 < 0 && q1 > 0 || q3 > 0 && q1 < 0){
             f1m = f1;
         } else if(q3 > 0 && q1 > 0 || q3 < 0 && q1 < 0){
             f1m = -f1;
         } else if (q3 = 0){
             f1m = f1;
         } else{
             console.log("Error en los componentes de f1");
         }   
 
         //Calculando la fuerza de la carga 3 sobre la carga 1
         f2 = Math.abs(k * (q3 * q2)/(r * 10**(-2))**2);

         //Calculando las coordenadas X y Y de la fuerza 2
         f2x = Grados * f2;
         f2y = Grados * f2; 

         //Encontrando la posición de la fuerza 2 en el plano cartesiano
         if(q2 < 0 && q3 > 0 || q2 > 0 && q3 < 0){
             f2x = Grados * f2;
             f2y = Grados * f2; 
         } else if(q2 > 0 && q3 > 0 || q2 < 0 && q3 < 0){
             f2x = Grados * -f2;
             f2y = Grados * -f2; 
         } else if (q2 = 0){
             f2x = Grados * f2;
             f2y = Grados * f2; 
         } else{
             console.log("Error en los componentes de f2");
         }
 
         //Calculando la fuerza de la carga 3 sobre la carga 4
         f4 = Math.abs(k * (q3 * q4)/(r * 10**(-2))**2);

         //Encontrando la posición de la fuerza 4 en el plano cartesiano
         if(q3 < 0 && q4 > 0 || q3 > 0 && q4 < 0){
             f4m = f4;
         } else if(q3 > 0 && q4 > 0 || q3 < 0 && q4 < 0){
             f4m = -f4;
         } else if (q4 = 0){
             f4m = f4;
         } else{
             console.log("Error en los componentes de f3");
         }

         //Calculando las coordenadas X y Y de la fuerza resultante
         frx = f2x + f4m;
         fry = f2y + f1m;

         //Calculando la magnitud de la fuerza resultante
         fr = Math.sqrt( frx**2 + fry**2 );

         document.write("Los componentes de la fuerza de Q1 sobre Q4 son: (0,"+ parseInt(f1m) +")<br>");
         
         document.write("Los componentes de la fuerza de Q2 sobre Q4 son: ("+ parseInt(f2x) +","+ parseInt(f2y) +")<br>");
         
         document.write("Los componentes de la fuerza de Q4 sobre Q3 son: ("+ parseInt(f4m) +",0)<br>");
         
         document.write("Los componentes de la fuerza resultante son: ("+ parseInt(frx) +","+ parseInt(fry) +")<br>");

         document.write("La fuerza resultante es de: " + parseInt(fr) +" N/C <br>");
         
         break;
     case "4": 
     q1 = prompt("Por favor ingrese el valor de la carga Q1 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
 
         q2 = prompt("Por favor ingrese el valor de la carga Q2 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
 
         q3 = prompt("Por favor ingrese el valor de la carga Q3 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
        
         q4 = prompt("Por favor ingrese el valor de la carga Q4 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");
         while(q4 == 0){
             alert("Por favor ingrese un valor a Q4 para evaluar las fuerzas que actuan en el.");
              q4 = prompt("Por favor ingrese el valor de la carga Q4 (Si la carga es negativa, por favor indiquelo dejando el valor negativo).");    
         }

         //Calculando la fuerza de la carga 4 sobre la carga 1
         f1 = Math.abs(k * (q1 * q4)/(r * 10**(-2))**2);

         //Calculando las coordenadas X y Y de la fuerza 1
         f1x = Grados * f1;
         f1y = Grados * f1;
         
         //Encontrando la posición de la fuerza 1 en el plano cartesiano
         if(q4 < 0 && q1 > 0 || q4 > 0 && q1 < 0){
             f1x = Grados * f1;
             f1y = Grados * -f1; 
         } else if(q4 > 0 && q1 > 0 || q4 < 0 && q1 < 0){
             f1x = Grados * -f1;
             f1y = Grados * f1; 
         } else if (q1 = 0){
             f1x = Grados * f1;
             f1y = Grados * f1; 
         } else{
             console.log("Error en los componentes de f1");
         }

         //Calculando la fuerza de la carga 4 sobre la carga 2
         f2 = Math.abs(k * (q4 * q2)/(r * 10**(-2))**2);

         //Encontrando la posición de la fuerza 2 en el plano cartesiano
         if(q2 < 0 && q4 > 0 || q2 > 0 && q4 < 0){
             f2m = f2;
         } else if(q2 > 0 && q4 > 0 || q2 < 0 && q4 < 0){
             f2m = -f2;
         } else if (q2 = 0){
             f2m = f2;
         } else{
             console.log("Error en los componentes de f2");
         }   
 
         //Calculando la fuerza de la carga 4 sobre la carga 3
         f3 = Math.abs(k * (q3 * q4)/(r * 10**(-2))**2);

         //Encontrando la posición de la fuerza 3 en el plano cartesiano
         if(q4 < 0 && q3 > 0 || q4 > 0 && q3 < 0){
             f3m = -f3;
         } else if(q4 > 0 && q3 > 0 || q4 < 0 && q3 < 0){
             f3m = f3;
         } else if (q3 = 0){
             f3m = f3;
         } else{
             console.log("Error en los componentes de f3");
         }   
 
         //Calculando las coordenadas X y Y de la fuerza resultante
         frx = f1x + f3m;
         fry = f1y + f2m;

         //Calculando la magnitud de la fuerza resultante
         fr = Math.sqrt( frx**2 + fry**2 );

         document.write("Los componentes de la fuerza de Q1 sobre Q3 son: ("+ parseInt(f1x) +","+ parseInt(f1y) +")<br>");

         document.write("Los componentes de la fuerza de Q2 sobre Q3 son: (0,"+ parseInt(f2m) +")<br>");
     
         document.write("Los componentes de la fuerza de Q3 sobre Q3 son: ("+ parseInt(f3m) +",0)<br>");
     
         document.write("Los componentes de la fuerza resultante son: ("+ parseInt(frx) +","+ parseInt(fry) +")<br>");

         document.write("La fuerza resultante es de: " + parseInt(fr) +" N/C <br>");

         break;
 }
    
 
