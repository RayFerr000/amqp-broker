import * as amqp from '../../amqp'

const send = async ctx => {
  const queue = 'MESSAGE'
  const message = ctx.request.body.message || 'ERROR'
  const broker = await amqp.getInstance()
  await broker.send(queue, Buffer.from(JSON.stringify(message)))
  ctx.body = ''
}

export default {
  send
}
