import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('app')
export class AppProcessor {
  @Process('resizeImage')
  processResizeImage(job: Job) {
    console.log(`处理任务：缩放图像文件 ${job.data.file}`);
  }
}
