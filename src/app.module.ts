import { Module } from '@nestjs/common';
import { SignatureModule } from './modules/signature/signature.module';

@Module({
  imports: [SignatureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
