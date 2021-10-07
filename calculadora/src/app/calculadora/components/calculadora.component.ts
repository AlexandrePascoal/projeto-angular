import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }

  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  ngOnInit(): void {
    this.limpar();
  }
  /**
   * Função que Limpa as variáveis
   * @returns void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  /**
   * Função que recebe o número e verifica a concatenação para realizar a operação
   * @param string numero 
   */

  adicionarNumero(numero: string): void {
    if(this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   * @param string numAtual 
   * @param string numConcat 
   * @returns string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    if(numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    if(numConcat === '.' && numAtual === '') {
      return '0.';
    }
    if(numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if(this.operacao === null) {
      this.operacao = operacao;
      return;
    }
    if(this.numero2 != null) {
      this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if(this.numero2 === null) {
      return;
    }
    this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
  }

  get display(): string {
    if(this.resultado !== null) {
      return this.resultado.toString();
    }
    if(this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }
}
