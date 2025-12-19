// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FacebookOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  InstagramOutlined,
  XOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  FacebookOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  InstagramOutlined,
  XOutlined
};
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Búsquedas',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Twitter (X)',
      type: 'item',
      url: '/typography',
      icon: icons.XOutlined
    },
    {
      id: 'util-color',
      title: 'Instagram',
      type: 'item',
      url: '/color',
      icon: icons.InstagramOutlined
    },
    {
      id: 'util-shadow',
      title: 'Facebook',
      type: 'item',
      url: '/shadow',
      icon: icons.FacebookOutlined
    }
  ]
};

export default utilities;
