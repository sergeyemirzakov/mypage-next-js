import SidebarTopic from './SidebarTopic';
import SidebarNavLinks from './SidebarNavLinks';

const Sidebar = () => {
  return (
    <div className="w-full md:w-2/5 pl-0 block md:pl-10 lg:pl-20 md:order-1">
      <div className="static top-24 md:sticky">
        <h2 className="font-bold text-sm mb-5">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </h2>
        <SidebarTopic />
        <SidebarNavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
