import Layout from '@components/features/layout/Layout';

const MarketLayout = ({ children }: LayoutProps<'/[market]'>) => {
  return <Layout>{children}</Layout>;
};

export default MarketLayout;
