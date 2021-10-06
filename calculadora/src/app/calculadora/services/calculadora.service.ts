/**
 * Serviço responsável por executar as operações da
 * calculadora.
 * 
 * @author Alexandre Pascoal
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  //readonly = somente leitura não podendo ser alterada o seu valor, usada mais para Constantes
  /* Define as constantes utilizadas
    para identificar as operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**
     * Método que calcula uma operação matemática
     * dado dois números.
     * Suporta as operações de soma, subtração, multiplicação
     * e divisão
     * 
     * @param num1 number
     * @param num2 number
     * @param operacao string
     * @return number Resultado da operação
     */
  calcular(num1: number, num2: number, operacao: string): number {
    
    let resultado: number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
