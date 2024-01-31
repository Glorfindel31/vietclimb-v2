import NavigationBarLeft from '@components/NavigationBarLeft';
import NavigationBarRight from '@components/NavigationBarRight';
import {data as MenuData} from '@/types/navBarTypes';

export default function NavigationBar() {
  return (
    <div className="flex flex-row items-center justify-between sm:max-w-[1200px] px-4 mx-auto ">
      <NavigationBarLeft />
      <NavigationBarRight data={MenuData} />
    </div>
  );
}
