import mitt from 'mitt'

export type EmitClickMenuItem = {
  activeKey: string
  eventName: string
}

type Events = {
  clickMenuItem: EmitClickMenuItem
}

const Emitter = mitt<Events>()

export default Emitter
