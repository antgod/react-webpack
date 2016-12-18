import Home from '../home'
import ReverseMode from '../stack/ReverseMode'
import CustomProps from '../stack/CustomProps'
import HighLevel from '../stack/HighLevel'
import ComponentProps from '../stack/ComponentProps'
import LifeCycle from '../stack/LifeCycle'
import ReactDOM from '../stack/ReactDOM'
import Tabs from '../stack/component/Tabs'




const router = {
  '/': Home,
  '/reverse_mode': ReverseMode,
  '/custom_props': CustomProps,
  '/high_level': HighLevel,
  '/tabs': Tabs,
  '/component_props': ComponentProps,
  '/life_cycle': LifeCycle,
  'react_dom': ReactDOM,
};

export default router