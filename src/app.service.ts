import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * 计划任务执行
   * @Cron('* * * * * *') // 秒 分 时 天 月 年
   */
  @Cron(CronExpression.EVERY_5_SECONDS, { name: 'greet' })
  handleCron() {
    console.log('Hello');
  }

  @Interval(1000)
  handleInterval() {
    // console.log('滴答');
  }

  @Timeout(3000)
  handleTimeout() {
    // console.log('咯嘣');
  }
}
