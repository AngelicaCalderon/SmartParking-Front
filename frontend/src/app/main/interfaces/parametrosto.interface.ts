export interface IParametrosTO{

    tpm_carro: Number;
    tpm_moto: Number;
    tpm_bicicleta: Number

}

export class ParametrosTO implements IParametrosTO {

  public tpm_carro = 0;
  public tpm_moto = 0;
  public tpm_bicicleta = 0;

}
