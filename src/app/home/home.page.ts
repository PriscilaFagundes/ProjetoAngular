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

  resultado: string = "";
  num: string = "";

   

	exibir(numero: string) {
		// usamos this para acessar a variável que foi criada acima
    this.num = this.resultado;
    this.resultado = this.num + numero;

	}

  limpar(){
    this.resultado = ""
  }


  calcular(){
    
    
    this.num = this.resultado;
    this.resultado = eval(this.num);
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




