import { Test, TestingModule } from '@nestjs/testing';
import { EmailjsService } from './emailjs.service';

describe('EmailjsService', () => {
  let service: EmailjsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailjsService],
    }).compile();

    service = module.get<EmailjsService>(EmailjsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
