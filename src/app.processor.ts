import {
  OnQueueActive,
  OnQueueCompleted,
  Process,
  Processor,
} from '@nestjs/bull';
import { DoneCallback, Job } from 'bull';

@Processor('app')
export class AppProcessor {
  @Process('resizeImage')
  processResizeImage(job: Job, done: DoneCallback) {
    console.log(`处理任务：缩放图像文件 ${job.data.file}`);
    done(null, '成功～～');
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(`任务活动：正在处理任务 ${job.name} (${job.id}) ...`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job, result: any) {
    console.log(`任务完成 ${job.name} (${job.id})，${result}`);
  }
}
