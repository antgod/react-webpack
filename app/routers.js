import Render from '@components/Render'
import Context from '@components/Context'
import Control from '@components/Control'
import Hoc from '@components/Hoc'

const Routers = {
  Render: {
    path: '/render',
    component: Render,
  },
  Context: {
    path: '/context',
    component: Context,
  },
  Control: {
    path: '/control',
    component: Control,
  },
  Hoc: {
    path: '/hoc',
    component: Hoc,
  },
}

export default Routers
