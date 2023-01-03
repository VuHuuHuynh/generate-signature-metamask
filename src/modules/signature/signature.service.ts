import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { SignatureGenerateDto } from './dto/signature.dto';

@Injectable()
export class SignatureService {
  constructor() {}

  generateSignature(data: SignatureGenerateDto) {
    const web3 = new Web3('https://bsc-dataseed1.defibit.io/'); // RPC sample of BSC network

    const signature = web3.eth.accounts.sign(data.message, data.privateKey);

    return {
      message: signature.message,
      messageHash: signature.messageHash,
      signature: signature.signature,
    };
  }
}
