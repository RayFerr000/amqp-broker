import * as amqp from '../../amqp';

const send = async (ctx) => {
  const broker = await amqp.getInstance()
  await broker.send('test', Buffer.from(JSON.stringify(ctx.request.body)))
  ctx.body = ''
}

export default {
  send
}
