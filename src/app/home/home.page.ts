import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage {

    // Criando as variaveis para dar inicio a execução
    // Para rodar a calculadora vamos iniciar atribuindo as variaveis String 

  resultado: string = ""; 
  valor: string = "";
  
     
    // A função exibir, recebe os numeros e operadores inseridos no html
    exibir(numero: string) {
      // O this é usado para pegar uma variavel que esta fora da função
      this.valor = this.resultado;
      this.resultado = this.valor + numero;
  
    }
  
    // Na função limpar o resultado passa a ser vazio

    limpar(){
      this.resultado = ""
    }
  
    // Para calcular usamos o eval para realizar as expressoes com string
    // ou seja para a calculadora quando ela pegar o primeiro valor e depois o operador, ele ira realizar sua função

    calcular(){
      this.valor = this.resultado;
      this.resultado = eval(this.valor);


      // if(this.operador = '+'){
      //   this.resultado = Number(this.valor1)+Number(this.valor2)
      // }
      // if(this.operador = '-'){
      //     this.resultado = Number(this.valor1)-Number(this.valor2)
      // }
      // if(this.operador = '*'){
      //   this.resultado = Number(this.valor1)*Number(this.valor2)
      // }
      // else
      // if(this.operador = '/'){
      //   this.resultado = Number(this.valor1)/Number(this.valor2)
      // }
      // if(this.operador = '%'){
      //   this.resultado = (Number(this.valor1)/100)*Number(this.valor2)
      // }
    }

}




