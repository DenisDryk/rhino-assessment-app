import { cn } from '@packages/shared-ui/utils';
import Link from 'next/link';

interface ISidebarProps {
  className?: string;
  menuList: {
    id: string;
    label: string;
    href: string;
  }[];
}

const Sidebar = ({ className, menuList }: ISidebarProps) => {
  return (
    <aside
      className={cn(
        'bg-sidebar border-sidebar-border w-64 overflow-y-auto p-6',
        className,
      )}
    >
      <nav className='flex flex-col space-y-2'>
        {menuList.map((item) => (
          <Link
            className='hover:bg-sidebar-primary hover:text-sidebar-primary-foreground cursor-pointer rounded-lg px-4 py-3 transition-colors'
            href={item.href}
            key={item.id}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
