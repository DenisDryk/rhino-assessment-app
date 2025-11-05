import { cn } from '@packages/shared-ui/utils';

import Header from '@components/features/layout/Header';
import Sidebar from '@components/organisms/Sidebar';
import { BRAND_TITLE } from '@constants/brand';
import { MENU } from '@constants/menu';

import BrandConfig from '../../../../brand-config.json';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Sidebar
        className={cn([
          {
            'border-r': BrandConfig.CONFIGURATIONS.MENU_POSITION === 'left',
            'order-last border-l':
              BrandConfig.CONFIGURATIONS.MENU_POSITION === 'right',
          },
        ])}
        menuList={MENU}
      />
      <div className='flex min-h-screen flex-1 flex-col'>
        <Header title={BRAND_TITLE} />
        <main className='h-full p-8'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
