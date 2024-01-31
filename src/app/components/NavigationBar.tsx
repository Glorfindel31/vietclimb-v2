import NavigationBarLeft from '@components/NavigationBarLeft';
import NavigationBarRight from '@components/NavigationBarRight';
import {data as MenuData} from '@/types/navBarTypes';

export default function NavigationBar() {
  return (
    <div className="flex flex-row items-center justify-between min-w-full bg-background px-4 mx-auto fixed top-0 left-0 z-50">
      <NavigationBarLeft />
      <NavigationBarRight data={MenuData} />
    </div>
  );
}
