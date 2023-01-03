import { Controller } from '@nestjs/common';
import { Get, Query } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { SignatureGenerateDto } from './dto/signature.dto';
import { SignatureService } from './signature.service';

@ApiTags('Signature')
@Controller('signature')
export class SignatureController {
  constructor(private readonly signatureService: SignatureService) {}

  @Get()
  generateSignature(@Query() params: SignatureGenerateDto) {
    return this.signatureService.generateSignature(params);
  }
}
